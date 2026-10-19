// node scripts/publish-date.test.mjs
// Builds a throwaway repo: a post drafted on a branch on day 1, merged on day 5.
// The derived date must be day 5, for squash AND plain-merge, and a shallow
// clone must throw rather than guess.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { publishedDateFor } from "./publish-date.mjs";

const root = fs.mkdtempSync(path.join(os.tmpdir(), "pubdate-"));
const run = (args, env = {}, cwd = root) =>
  execFileSync("git", args, { cwd, encoding: "utf8", env: { ...process.env, ...env } });
const at = (iso) => ({ GIT_AUTHOR_DATE: iso, GIT_COMMITTER_DATE: iso });
const commit = (msg, iso) => run(["commit", "-q", "-m", msg], at(iso));

try {
  run(["init", "-q", "-b", "main"]);
  run(["config", "user.email", "t@t"]);
  run(["config", "user.name", "t"]);
  fs.writeFileSync(path.join(root, "seed.txt"), "x");
  run(["add", "."]);
  commit("seed", "2026-10-01T12:00:00-04:00");

  // Plain merge: draft written Oct 14, merged Oct 19.
  run(["checkout", "-q", "-b", "draft-a"]);
  fs.writeFileSync(path.join(root, "a.ts"), "a");
  run(["add", "."]);
  commit("draft a", "2026-10-14T10:00:00-04:00");
  run(["checkout", "-q", "main"]);
  run(["merge", "--no-ff", "-q", "-m", "merge a", "draft-a"], at("2026-10-19T16:15:00-04:00"));
  assert.equal(publishedDateFor(path.join(root, "a.ts")), "2026-10-19", "plain merge");

  // Squash: one commit on main on Oct 16 at 22:53 ET (= Oct 17 UTC). Site day is the ET day.
  fs.writeFileSync(path.join(root, "b.ts"), "b");
  run(["add", "."]);
  commit("squash b", "2026-10-16T22:53:00-04:00");
  assert.equal(publishedDateFor(path.join(root, "b.ts")), "2026-10-16", "ET day, not UTC day");

  // Later edits do not move the date.
  fs.appendFileSync(path.join(root, "b.ts"), "more");
  run(["add", "."]);
  commit("edit b", "2026-11-02T09:00:00-05:00");
  assert.equal(publishedDateFor(path.join(root, "b.ts")), "2026-10-16", "edit keeps date");

  // Uncommitted draft: today.
  fs.writeFileSync(path.join(root, "c.ts"), "c");
  assert.equal(
    publishedDateFor(path.join(root, "c.ts"), { now: new Date("2026-12-01T15:00:00Z") }),
    "2026-12-01",
    "draft previews as today"
  );

  // Shallow clone must refuse.
  const shallow = fs.mkdtempSync(path.join(os.tmpdir(), "pubdate-shallow-"));
  try {
    run(["clone", "-q", "--depth", "1", "file://" + root, shallow + "/r"], {}, os.tmpdir());
    assert.throws(() => publishedDateFor(path.join(shallow, "r", "b.ts")), /shallow/);
  } finally {
    fs.rmSync(shallow, { recursive: true, force: true });
  }
  console.log("publish-date: all ok");
} finally {
  fs.rmSync(root, { recursive: true, force: true });
}
