# Used keywords

> The register of every primary keyword PrepWise has already targeted.
>
> **The rule: one page, one primary keyword. A primary is used ONCE, EVER.**
>
> Two pages competing for the same primary is keyword cannibalisation: Google
> picks one of them, usually the weaker one, and the other page's links and
> authority are wasted. This file exists so that never happens by accident.

**Status:** created by ARCHITECT 2026-07-26. Two primaries claimed by S3a (the
FAQ page and the blog scaffold's seed post). The S4 content batch claims its own
before it writes anything.

---

## Before writing any page

1. **Open this file first.** If the primary you want is in the table below, it
   is taken. Pick another or fold your idea into the existing page.
2. **Pick a primary from real keyword research**, not from intuition. Record
   where it came from (tool, export file, date) in the entry.
3. **Add the entry to this file BEFORE writing the page.** Not after. The whole
   point is that the register is ahead of the content, not a record of it.
4. **Build the cluster.** Secondary keywords are same-intent variations of the
   primary. The test: would someone searching this phrase be satisfied landing
   on the same page as someone searching the primary? If no, it belongs to a
   different page and probably a different primary.
5. Mark each secondary as `✓ research` (it came from an export) or
   `(inferred)` (you derived it from People Also Ask / Related Searches
   patterns). Being honest about which is which is what stops the register
   turning into fiction.

## Where a primary must appear

Once claimed, the primary keyword appears in all of:

- the `<title>` (near the start)
- the meta description
- the H1
- the first 100 words of body copy
- the URL slug

That list is enforced page-by-page in
[`../seo/on-page-checklist.md`](../seo/on-page-checklist.md).

## What does NOT go in this table

- The App Store keyword field. That is ASO, a different surface with different
  rules, tracked in `~/shared/docs/prepwise/aso-keyword-research.md`.
- Brand terms ("PrepWise"). The homepage owns the brand by default; it does not
  need to be claimed here.
- Secondary keywords as primaries. A secondary may appear in several clusters.
  Only primaries are exclusive.

---

## Claimed primaries

| # | Primary keyword | Page | Slug | Source | Claimed |
|---|---|---|---|---|---|
| 1 | `meal planning app faq` | FAQ | `/faq` | (inferred) | 2026-07-26 |
| 2 | `how to meal plan from your pantry` | Blog post | `/blog/how-to-meal-plan-from-your-pantry` | (inferred) | 2026-07-26 |

### 1. `meal planning app faq` → /faq

- **Primary source:** (inferred). No keyword export exists yet. The page's job
  is to answer the questions asked before a download, so the intent is real even
  where the volume is unmeasured.
- **Search intent:** informational, close to commercial (the reader is deciding)
- **Page:** /faq (status: live)
- **Claimed:** 2026-07-26

| Secondary keyword | Source |
|---|---|
| is prepwise free | (inferred) |
| pantry tracker app questions | (inferred) |
| meal planning app android | (inferred) |
| does prepwise track macros | (inferred) |

*Cluster audit: all inferred, from the question patterns the category's own
listings and round-ups answer (searched 2026-07-26 for "meal prep app",
"pantry tracking app", "macro tracking meal planner"). Nothing here came from a
keyword tool, and the register says so rather than implying research that did
not happen. The slug is `/faq` because that is the conventional, linkable URL
for this page type; the distinguishing token is in it, the rest of the primary
is what the whole site is about. **The S4 batch should re-derive this cluster
from a real export and correct it.***

### 2. `how to meal plan from your pantry` → /blog/how-to-meal-plan-from-your-pantry

- **Primary source:** (inferred). A how-to phrasing of the site's core
  positioning: planning from what you already own.
- **Search intent:** informational
- **Page:** /blog/how-to-meal-plan-from-your-pantry (status: live)
- **Claimed:** 2026-07-26

| Secondary keyword | Source |
|---|---|
| pantry meal planning | (inferred) |
| meal plan with what I have | (inferred) |
| cook from what you have | (inferred) |
| pantry inventory meal plan | (inferred) |

*Cluster audit: all inferred. "cook from what you have" is the same intent
(someone standing in front of a full cupboard wanting dinner) so it belongs
here rather than to its own page. "pantry inventory app" was deliberately LEFT
OUT: that is commercial intent for a product page, not a method article, and
claiming it here would put this post in competition with the home page.*

---

## Entry template

Copy this block, fill it in, and add it below when a page is planned.

```
### N. `<primary keyword>` → /<slug>

- **Primary source:** <tool / export file / date, or `(inferred)`>
- **Search intent:** informational | commercial | transactional | navigational
- **Page:** /<slug>  (status: planned | drafted | live)
- **Claimed:** YYYY-MM-DD

| Secondary keyword | Source |
|---|---|
| | |

*Cluster audit: <which secondaries came from research, which were inferred, and
why any same-intent term was left out.>*
```
