// Regression tests for the apex -> www redirect in worker/index.js.
//
// Run: node worker/apex-redirect.test.mjs
//
// This exists because the redirect sits in front of TWO things that fail
// SILENTLY and are only noticed by users:
//
//   1. /r/* recipe-share Universal Links. They were minted on the APEX, and the
//      iOS app registers `applinks:prepwise-app.com` (apex only). A redirect
//      here sends an existing share to a host the app does not claim.
//   2. /.well-known/apple-app-site-association. Apple fetches it from the exact
//      host in the link and does NOT follow redirects. A redirect breaks
//      Universal Links for every share already in the wild.
//
// Neither breakage produces an error anywhere. The link just stops opening the
// app, on other people's phones. Hence a test rather than a careful reading.

import assert from "node:assert/strict";
import { apexRedirect } from "./index.js";

let passed = 0;
const failures = [];

function check(name, fn) {
  try {
    fn();
    passed += 1;
  } catch (err) {
    failures.push(`${name}: ${err.message}`);
  }
}

/** null => fall through to normal handling; otherwise the Location header. */
function redirectFor(href) {
  const res = apexRedirect(new URL(href));
  if (res === null) return null;
  assert.equal(res.status, 301, `expected 301 for ${href}, got ${res.status}`);
  return res.headers.get("location");
}

// --- the exemptions: these must NEVER redirect ------------------------------

for (const path of [
  "/.well-known/apple-app-site-association",
  "/.well-known/assetlinks.json",
]) {
  check(`apex ${path} is not redirected`, () => {
    assert.equal(redirectFor(`https://prepwise-app.com${path}`), null);
  });
}

for (const path of [
  "/r/abc123",
  "/r/abc123/",
  "/r/test-invalid-id",
  "/r/A_very-long_share-id-0123456789",
  "/r", // bare /r, no trailing slash
  "/r/", // /r/ with nothing after it
  "/r/xy", // too short for SHARE_ID_RE, still a share-namespace path
]) {
  check(`apex ${path} is not redirected`, () => {
    assert.equal(redirectFor(`https://prepwise-app.com${path}`), null);
  });
}

check("a share link keeps its query on the apex", () => {
  assert.equal(redirectFor("https://prepwise-app.com/r/abc123?utm_source=x"), null);
});

// A path that merely STARTS with the letters is not in the share namespace and
// must still be canonicalised.
check("/recipes is redirected (not confused with /r/)", () => {
  assert.equal(
    redirectFor("https://prepwise-app.com/recipes"),
    "https://www.prepwise-app.com/recipes"
  );
});

check("/.well-knownish is redirected (prefix must be the real segment)", () => {
  assert.equal(
    redirectFor("https://prepwise-app.com/.well-knownish"),
    "https://www.prepwise-app.com/.well-knownish"
  );
});

// --- the redirect itself ----------------------------------------------------

check("apex root redirects to www root", () => {
  assert.equal(redirectFor("https://prepwise-app.com/"), "https://www.prepwise-app.com/");
});

check("apex preserves the path", () => {
  assert.equal(
    redirectFor("https://prepwise-app.com/privacy"),
    "https://www.prepwise-app.com/privacy"
  );
});

// The ad attribution chain depends on this: utm_content survives the hop and
// becomes the App Store `ct` token. Dropping the query silently unattributes
// every paid install that lands on the apex.
check("apex preserves the query string", () => {
  assert.equal(
    redirectFor("https://prepwise-app.com/?utm_content=ig_img_meal_prep_v1"),
    "https://www.prepwise-app.com/?utm_content=ig_img_meal_prep_v1"
  );
});

check("apex preserves a multi-param query on a subpath", () => {
  assert.equal(
    redirectFor("https://prepwise-app.com/terms?utm_source=ig&utm_campaign=launch_jul26"),
    "https://www.prepwise-app.com/terms?utm_source=ig&utm_campaign=launch_jul26"
  );
});

check("apex preserves the fragment-free encoded query", () => {
  assert.equal(
    redirectFor("https://prepwise-app.com/?ct=Landing%20Page%20Download%20Button"),
    "https://www.prepwise-app.com/?ct=Landing%20Page%20Download%20Button"
  );
});

// --- everything that is NOT the bare apex falls through ---------------------

for (const host of [
  "www.prepwise-app.com", // already canonical: redirecting would loop
  "prepwiseinfo.workers.dev",
  "prepwise-info.pages.dev",
  "localhost:8788",
  "prepwise-app.com.evil.example", // suffix lookalike, not our apex
  "notprepwise-app.com",
]) {
  check(`${host} is not redirected`, () => {
    assert.equal(redirectFor(`http://${host}/privacy`), null);
  });
}

// --- report -----------------------------------------------------------------

if (failures.length) {
  console.error(`FAIL ${failures.length} of ${passed + failures.length}`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`ok - ${passed} apex-redirect cases passed`);
