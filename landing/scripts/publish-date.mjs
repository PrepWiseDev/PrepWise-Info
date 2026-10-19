// Publish dates for blog posts are DERIVED, never typed.
//
// A draft is written days before it merges. A date typed into the draft is the
// day it was written, so it ships as a `datePublished` earlier than the URL
// existed (PR #7 and #8, Oct 2026: 5 and 1 days early). Backdating also walks
// the sitemap lastmod backward, which makes Google trust lastmod less.
//
// So a post file carries NO `publishedAt`. The date is the America/New_York day
// of the commit that first added the file on the FIRST-PARENT history of HEAD.
// On main that is the squash/merge/rebase commit, i.e. the moment it merged,
// which is the moment the deploy builds it. It needs nothing from a person and
// works with any merge method (a plain merge commit keeps the draft's original
// commits off the first-parent chain).
//
// Legacy posts keep their literal dates (see LEGACY_DATED_SLUGS in
// verify-seo.mjs); those were corrected by hand on 2026-08-11.
import { execFileSync } from "node:child_process";
import path from "node:path";

export const SITE_TZ = "America/New_York";

/** YYYY-MM-DD of an instant, in the site's timezone. */
export function ymdInSiteTz(instant) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: SITE_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(instant);
}

function git(args, cwd) {
  return execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

/**
 * The go-live day of a post file, from git. THROWS when it cannot tell:
 * a shallow clone would date every post to the checkout commit, and a silent
 * wrong date is exactly the bug this exists to prevent.
 *
 * @param {string} file absolute path of the post's content file
 * @param {{ now?: Date }} [opts] `now` only for tests; used when the file has
 *   no commit yet (a draft being previewed locally), where "today" is the
 *   honest answer.
 */
export function publishedDateFor(file, opts = {}) {
  const cwd = path.dirname(file);
  if (git(["rev-parse", "--is-shallow-repository"], cwd) === "true") {
    throw new Error(
      "publish-date: shallow git clone. Blog publish dates come from git history; " +
        "checkout with fetch-depth: 0 (deploy.yml) or run `git fetch --unshallow`."
    );
  }
  const log = git(
    ["log", "--first-parent", "--diff-filter=A", "--format=%cI", "--", path.basename(file)],
    cwd
  );
  const lines = log.split("\n").filter(Boolean);
  if (lines.length === 0) return ymdInSiteTz(opts.now ?? new Date());
  return ymdInSiteTz(new Date(lines[lines.length - 1]));
}
