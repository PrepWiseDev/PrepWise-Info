# Used keywords

> The register of every primary keyword PrepWise has already targeted.
>
> **The rule: one page, one primary keyword. A primary is used ONCE, EVER.**
>
> Two pages competing for the same primary is keyword cannibalisation: Google
> picks one of them, usually the weaker one, and the other page's links and
> authority are wasted. This file exists so that never happens by accident.

**Status:** created by ARCHITECT 2026-07-26. Two primaries claimed by S3a (the
FAQ page and the blog scaffold's seed post), four more by S3b (the use-case
landing pages), plus the home page's de-facto primary written down for the first
time. The S4 content batch claims its own before it writes anything.

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
| 3 | `ai meal planner` | Home | `/` | (inferred, retroactive) | 2026-07-26 |
| 4 | `meal prep app` | Use case | `/meal-prep-app` | SERP review 2026-07-26 | 2026-07-26 |
| 5 | `pantry inventory app` | Use case | `/pantry-tracker` | SERP review 2026-07-26 | 2026-07-26 |
| 6 | `macro tracking meal planner` | Use case | `/macro-meal-planner` | SERP review 2026-07-26 | 2026-07-26 |
| 7 | `grocery list app` | Use case | `/grocery-list-app` | SERP review 2026-07-26 | 2026-07-26 |

**"SERP review" is not the same as keyword research.** It means the phrase was
searched, the ranking pages were read, and the page was written to match their
format and length and beat them on substance. It does NOT mean anyone has a
volume or difficulty number for it. No keyword export exists for PrepWise yet;
when one does, re-derive every cluster below and correct it rather than
assuming the guesses were right.

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

### 3. `ai meal planner` → /

- **Primary source:** (inferred, recorded retroactively 2026-07-26). The home
  page shipped before this register existed and its `<title>` has read
  "PrepWise: AI Meal Planner & Pantry Tracker for iPhone" since. That is a claim
  whether or not anyone wrote it down, and an unwritten claim is the one a new
  page cannibalises by accident.
- **Search intent:** commercial
- **Page:** / (status: live)
- **Claimed:** 2026-07-26

| Secondary keyword | Source |
|---|---|
| meal planning app | (inferred) |
| ai meal planning app | (inferred) |
| pantry tracker | (inferred) |

*Cluster audit: all inferred, read off the live home page rather than from
research. The home page also holds the brand term by default. This entry exists
so the boundary with the S3b landing pages is explicit: home owns the general
"plan my meals with AI" query, `/meal-prep-app` owns the batch-cooking intent,
and `/pantry-tracker` owns the inventory intent. If the home page is ever
rewritten around a different primary, change this entry in the same commit.*

### 4. `meal prep app` → /meal-prep-app

- **Primary source:** SERP review 2026-07-26. Ranking pages: MealPrepPro,
  Mealime, plus round-up listicles from Eat This Much and FoodiePrep.
- **Search intent:** commercial
- **Page:** /meal-prep-app (status: live)
- **Claimed:** 2026-07-26

| Secondary keyword | Source |
|---|---|
| meal prep planner | (inferred) |
| meal prep app iphone | (inferred) |
| weekly meal prep app | (inferred) |
| batch cooking app | (inferred) |

*Cluster audit: the primary came from the SERP, the secondaries are inferred
variations. "meal prep" is batch-cooking intent and is deliberately kept
separate from home's "ai meal planner": someone searching "meal prep app" wants
Sunday-afternoon batch cooking, someone searching "ai meal planner" wants the
week decided for them. Ranking pages run 550-900 words over five or six
sections with no FAQ; this page matches that and adds one.*

### 5. `pantry inventory app` → /pantry-tracker

- **Primary source:** SERP review 2026-07-26. Ranking pages: KitchenPal, My
  Pantry Tracker, Your Food, Pantry Check, PantryPro.
- **Search intent:** commercial
- **Page:** /pantry-tracker (status: live)
- **Claimed:** 2026-07-26

| Secondary keyword | Source |
|---|---|
| pantry tracker app | (inferred) |
| kitchen inventory app | (inferred) |
| food inventory app iphone | (inferred) |
| fridge and freezer inventory | (inferred) |

*Cluster audit: this is the primary the seed blog post deliberately LEFT OUT
("that is commercial intent for a product page, not a method article"). This is
that product page, so it is claimed here. The ranking pages all sell barcode
scanning, expiry alerts, and family sync; the position none of them takes is
that an inventory is only worth keeping if something reads it back, which is
what this page argues.*

### 6. `macro tracking meal planner` → /macro-meal-planner

- **Primary source:** SERP review 2026-07-26. Ranking pages: Plan to Eat's
  macro tour page, Macrostax, MODL, Prospre.
- **Search intent:** commercial
- **Page:** /macro-meal-planner (status: live)
- **Claimed:** 2026-07-26

| Secondary keyword | Source |
|---|---|
| macro meal planner app | (inferred) |
| meal planner with macros | (inferred) |
| high protein meal planner | (inferred) |
| calorie and macro meal planning | (inferred) |

*Cluster audit: "macro tracking meal planner" is the full phrase rather than
the shorter "macro meal planner" precisely so it does not collide with home's
"ai meal planner". Plan to Eat's page is ~550 words over six short sections;
this one is longer because it also states who it is not for, which none of the
ranking pages do. Pure calorie-logging terms were left out: that is a different
intent and a different product.*

### 7. `grocery list app` → /grocery-list-app

- **Primary source:** SERP review 2026-07-26. Ranking pages: Samsung Food, Plan
  to Eat, MealBoard, Paprika, Cooklist.
- **Search intent:** commercial
- **Page:** /grocery-list-app (status: live)
- **Claimed:** 2026-07-26

| Secondary keyword | Source |
|---|---|
| automatic grocery list from recipes | (inferred) |
| shopping list app iphone | (inferred) |
| meal plan grocery list | (inferred) |
| grocery list generator | (inferred) |

*Cluster audit: every ranking page promises the same mechanic, a list generated
from chosen recipes, and only Cooklist mentions subtracting what you already
own. That subtraction is the whole page. Note the site's own voice file bans
"grocery list generator" as PrepWise phrasing; it is recorded here as a search
term people type, which is a different thing from copy we would write.*

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
