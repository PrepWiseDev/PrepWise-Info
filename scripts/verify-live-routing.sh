#!/usr/bin/env bash
# Assert the LIVE routing invariants for prepwise-app.com.
#
# Run in CI after every deploy, and safe to run by hand at any time:
#   bash scripts/verify-live-routing.sh
#
# WHY THIS EXISTS: `wrangler deploy` cannot fail on a config field it does not
# recognise. wrangler 3.90.0 logged `Unexpected fields found in assets field:
# "run_worker_first"` as a WARNING, dropped the field, and exited 0 - so the
# apex redirect was "deployed" and simply absent. A green deploy is not evidence
# that routing is in effect; only the live site is.
#
# Every check below is something that fails SILENTLY in production:
#   - a redirect on /.well-known/ or /r/ breaks recipe-share Universal Links on
#     other people's phones, with no error anywhere
#   - a missing apex redirect quietly re-splits the ranking signal across two
#     hostnames
#   - a wrong-domain sitemap hands our crawl budget to another company's site

set -uo pipefail

APEX="https://prepwise-app.com"
WWW="https://www.prepwise-app.com"

# Cloudflare finishes propagating a deploy across colos a little after wrangler
# returns, so a check run seconds later can still meet a stale asset on one
# edge. Observed 2026-07-26: 26s after deploy, apex /privacy still answered 200
# while / and /og-image.png already redirected; it passed on the next attempt.
#
# So the whole suite retries as a unit. A flaky guardrail is worse than none - it
# trains everyone to ignore it - and a genuine regression still fails every
# attempt and fails the build.
ATTEMPTS=${VERIFY_ATTEMPTS:-6}
SETTLE_SECONDS=${VERIFY_SETTLE_SECONDS:-15}

# Cloudflare caches by URL, so a freshly deployed redirect can lose a race with
# an asset cached under the old routing. A unique query proves the routing
# itself, and doubles as the query-preservation check the ad attribution chain
# depends on. Re-minted per attempt inside run_all_checks.
failures=0
checks=0
CB=""

pass() { checks=$((checks + 1)); printf '  ok    %s\n' "$1"; }
fail() {
  checks=$((checks + 1))
  failures=$((failures + 1))
  printf '  FAIL  %s\n     -> %s\n' "$1" "$2"
}

# status_of URL -> "<http_code> <location-or-->"
status_of() {
  curl -sS -o /dev/null -m 20 -w '%{http_code} %{redirect_url}' "$1" 2>/dev/null || echo "000 -"
}

expect_redirect() { # name url expected_location
  local got code loc
  got=$(status_of "$2")
  code=${got%% *}
  loc=${got#* }
  if [ "$code" = "301" ] && [ "$loc" = "$3" ]; then
    pass "$1"
  else
    fail "$1" "got $code -> ${loc:-<none>}; expected 301 -> $3"
  fi
}

expect_no_redirect() { # name url
  local got code loc
  got=$(status_of "$2")
  code=${got%% *}
  loc=${got#* }
  # 404 is fine here: an unknown share id legitimately renders the worker's
  # "recipe unavailable" page. What must never happen is a redirect.
  if [ -n "$loc" ] && [ "$loc" != "-" ]; then
    fail "$1" "REDIRECTED to $loc (must be served directly)"
  elif [ "$code" = "000" ]; then
    fail "$1" "request failed (no response)"
  else
    pass "$1 [$code]"
  fi
}

expect_200() { # name url
  local got code
  got=$(status_of "$2")
  code=${got%% *}
  if [ "$code" = "200" ]; then pass "$1"; else fail "$1" "got $code, expected 200"; fi
}

run_all_checks() {
  failures=0
  checks=0
  # Fresh cache-buster per attempt so a retry cannot be answered by an entry
  # the previous attempt just created.
  CB="cb=$(date +%s)-$RANDOM"

  echo "== apex canonicalises to www =="
  expect_redirect "apex / -> www" "$APEX/?$CB" "$WWW/?$CB"
  expect_redirect "apex /privacy -> www" "$APEX/privacy?$CB" "$WWW/privacy?$CB"
  # An existing static asset must ALSO redirect. This is the exact check that
  # catches a dropped run_worker_first: without it the asset worker answers first
  # and our code never runs.
  expect_redirect "apex asset /og-image.png -> www" "$APEX/og-image.png?$CB" "$WWW/og-image.png?$CB"
  expect_redirect "apex preserves utm_content" \
    "$APEX/?utm_content=verify_probe_v1" "$WWW/?utm_content=verify_probe_v1"

  echo "== apex exemptions must NEVER redirect =="
  # Apple fetches the AASA from the exact host in the link and does not follow
  # redirects. The iOS app registers applinks:prepwise-app.com (the APEX).
  expect_no_redirect "apex AASA served directly" "$APEX/.well-known/apple-app-site-association"
  # Recipe-share links were minted on the apex.
  expect_no_redirect "apex /r/<id> served directly" "$APEX/r/verify-probe-invalid-id"

  echo "== www serves the site and never redirects =="
  expect_200 "www /" "$WWW/"
  expect_200 "www /privacy" "$WWW/privacy"
  expect_200 "www /terms" "$WWW/terms"
  expect_no_redirect "www AASA served directly" "$WWW/.well-known/apple-app-site-association"

  echo "== AASA content is intact on both hosts =="
  aasa_apex=$(curl -sS -m 20 "$APEX/.well-known/apple-app-site-association" 2>/dev/null)
  aasa_www=$(curl -sS -m 20 "$WWW/.well-known/apple-app-site-association" 2>/dev/null)
  if printf '%s' "$aasa_apex" | grep -q '2DDFX89NYB.com.prepwise.mobile'; then
    pass "apex AASA names our app id"
  else
    fail "apex AASA names our app id" "appID missing from apex AASA"
  fi
  if [ "$aasa_apex" = "$aasa_www" ]; then
    pass "AASA identical on apex and www"
  else
    fail "AASA identical on apex and www" "apex and www AASA differ"
  fi

  echo "== generated SEO files point at www only =="
  robots=$(curl -sS -m 20 "$WWW/robots.txt" 2>/dev/null)
  sitemap=$(curl -sS -m 20 "$WWW/sitemap.xml" 2>/dev/null)
  if printf '%s' "$robots" | grep -q "Sitemap: $WWW/sitemap.xml"; then
    pass "robots.txt points at the www sitemap"
  else
    fail "robots.txt points at the www sitemap" "got: $(printf '%s' "$robots" | tr '\n' ' ')"
  fi
  # prepwise.app is NOT our domain. It belongs to an unrelated company, and the
  # deployed robots.txt pointed crawlers at their sitemap until 2026-07-26.
  for f in robots sitemap; do
    body=$([ "$f" = robots ] && printf '%s' "$robots" || printf '%s' "$sitemap")
    if printf '%s' "$body" | grep -qE 'https://(www\.)?prepwise\.app|legal\.prepwise\.app'; then
      fail "$f.xml/txt free of the wrong domain" "references prepwise.app, which we do not own"
    else
      pass "$f free of the wrong domain"
    fi
  done
}

for attempt in $(seq 1 "$ATTEMPTS"); do
  if [ "$attempt" -gt 1 ]; then
    echo "-- retry $attempt/$ATTEMPTS after ${SETTLE_SECONDS}s (deploy may still be propagating) --"
    sleep "$SETTLE_SECONDS"
  fi
  # Called directly, NOT via $(...): command substitution runs the function in a
  # subshell, so `failures` would never propagate back and this guard would
  # always "pass". A vacuous check is the one failure mode a guardrail cannot have.
  run_all_checks
  [ "$failures" -eq 0 ] && break
done

echo
if [ "$failures" -gt 0 ]; then
  echo "FAILED $failures of $checks live routing checks"
  exit 1
fi
echo "ok - all $checks live routing checks passed"
