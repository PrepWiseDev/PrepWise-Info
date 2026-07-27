# Stats — the only numbers PrepWise content may use

> **This file is the single source of numeric truth for all PrepWise content:**
> blog posts, landing pages, meta descriptions, App Store copy, ad concepts,
> social captions.
>
> **The rule: if a number is not in this file, it does not go in the content.**
> Not rounded up, not "approximately", not "studies show". Either it is here
> with a source, or it is a `TODO(trent: confirm)` and the content is written
> without it.
>
> **Status:** DRAFT by ARCHITECT, 2026-07-26. Every VERIFIED row below was read
> from a real source on that date and the source is named. Every
> `TODO(trent: confirm)` row is a number someone has said out loud somewhere but
> that has no verifiable source. Fill those in or delete them; do not guess.

---

## How to read this file

| Marker | Meaning |
|---|---|
| **VERIFIED** | Read from the named source on the named date. Safe to publish. |
| **VERIFIED (volatile)** | True on the date shown, but changes on its own. Re-check before publishing, and date it in the copy if it matters. |
| **`TODO(trent: confirm)`** | Not usable. No source. Do not publish, do not paraphrase, do not approximate. |
| **THIRD PARTY** | Someone else's number. Cite them by name and link, or leave it out. |

`TODO(trent: confirm)` is deliberately greppable:

```bash
grep -rn "TODO(trent" landing/references/
```

---

## The app

| Fact | Value | Status |
|---|---|---|
| Product name | PrepWise | VERIFIED — App Store lookup API, 2026-07-26 |
| Publisher | PrepWise LLC | VERIFIED — same |
| App Store ID | 6754949361 | VERIFIED — same |
| Category | Food & Drink | VERIFIED — same |
| Platform | iOS only | VERIFIED — same. **No Android.** Never imply otherwise. |
| Minimum iOS version | 15.1 | VERIFIED — same |
| First released | June 17, 2026 | VERIFIED — same |
| Download size | 59.5 MB | VERIFIED — same (59,542,528 bytes) |
| Age rating | 4+ | VERIFIED — same |
| Price to download | Free | VERIFIED — same |

**How to phrase the platform fact:** "PrepWise is on iPhone." Not "available on
mobile", which reads as if there is an Android build.

---

## Ratings and reviews

| Fact | Value | Status |
|---|---|---|
| App Store rating | 5.0 | VERIFIED (volatile) — App Store lookup API, 2026-07-26 |
| Number of ratings | 6 | VERIFIED (volatile) — same |

**Do not publish either of these yet.** Six ratings is a real number and a weak
one: printing "5.0 stars" next to it invites the reader to check, and "5.0 from
6 ratings" is worse than saying nothing. Revisit when the count is high enough
to be evidence rather than an accident.

Never write a star rating without its count. Never use `aggregateRating` schema
for a rating the page does not visibly display: Google treats that as a manual
-action risk, and the site's JSON-LD deliberately omits it today
(`landing/src/app/layout.tsx`).

- **Named testimonials / review quotes:** `TODO(trent: confirm)` — need the
  reviewer's own words plus permission. Never write a testimonial.

---

## Pricing

Source: `~/repos/PrepWise/prepwise-app/src/config/paywallConfig.js`
(`PRICING`, `FREE_TIER`), read 2026-07-26. Display prices in the app come from
this file; the charged prices live in App Store Connect, so re-check both
before publishing a price.

| Fact | Value | Status |
|---|---|---|
| App download | Free | VERIFIED |
| PrepWise Pro, monthly | $6.99 / month | VERIFIED |
| PrepWise Pro, annual | $39.99 / year | VERIFIED |
| Free trial | 7 days | VERIFIED |
| Annual, expressed monthly | $3.33 / month | DERIVED — 39.99 / 12 |
| Annual saving vs monthly | 52% | DERIVED — 1 − (39.99 / (6.99 × 12)) |
| Annual saving in dollars | $43.89 / year | DERIVED — (6.99 × 12) − 39.99 |
| Monthly, expressed daily | $0.23 / day | DERIVED — 6.99 / 30 |

**Phrasing:** "$39.99 a year" or "$6.99 a month". Never "starting at", never
"as low as", never "just". State the number and stop.

The in-app paywall uses the line "cheaper than one coffee". That is a comparison,
not a statistic; it needs no source, but it is also weak in long-form content.
Prefer the actual number.

### Free tier limits

| Fact | Value | Status |
|---|---|---|
| Recipes on the free tier | 15 | VERIFIED — `FREE_TIER.RECIPE_LIMIT` |
| AI assistant messages, free tier | 20 per day | VERIFIED — `FREE_TIER.DAILY_MESSAGE_LIMIT` |

These two numbers are the honest answer to "what do I get for free", and they
are strong content: most competitors will not print theirs.

---

## What the app does

Feature and step counts, from the live marketing site
(`landing/src/lib/constants.ts`), read 2026-07-26. These are the counts a
listicle headline must match.

| Fact | Value | Status |
|---|---|---|
| Core features on the landing page | 4 | VERIFIED — `FEATURES` |
| Steps in "How It Works" | 3 | VERIFIED — `STEPS` |

The four, verbatim from the site:

1. Recipes that match your reality (real-time availability indicator)
2. Your kitchen, perfectly organized (pantry tracking with ingredient reservation)
3. AI that actually helps (natural-language recipe and week generation)
4. Macros without the math (automatic calorie, protein, carb, fat calculation)

The three steps: track your pantry → plan your meals → shop and cook.

Capabilities that exist in the shipped app and are safe to describe (no number
attached, so no source needed beyond "it does this"): pantry tracking with
ingredient reservation, real-time recipe availability, receipt scanning, AI
recipe generation, AI week planning, auto-generated shopping lists, macro
calculation per recipe, meal calendar, dark mode.

- **"Track hundreds of ingredients"** (App Store description): `TODO(trent: confirm)`.
  There is no ingredient-count limit in the code to point at. Either establish a
  real number or drop the claim and describe the behaviour instead.
- **Number of tutorial / onboarding steps:** `TODO(trent: confirm)`.
- **Number of supported units / unit conversions:** `TODO(trent: confirm)`.

---

## The market position

| Fact | Value | Status |
|---|---|---|
| No competitor uses "pantry" in their App Store title or subtitle | true as of 2026-07-06 | VERIFIED (volatile) — `~/command-system/audits/10-aso.md` §3 |

This is the single most useful positioning fact PrepWise has, and it is the one
most likely to go stale. Re-check the App Store before building a page on it.

**THIRD PARTY** — competitor rating counts, from the ASO audit of 2026-07-06.
If you publish any of these, say "as of July 2026" and link the App Store
listing. They move.

| App | Ratings | Status |
|---|---|---|
| Mealime | ~54,000 | THIRD PARTY, 2026-07-06 |
| SuperCook | ~22,000 | THIRD PARTY, 2026-07-06 |
| MacroFactor | ~18,000 | THIRD PARTY, 2026-07-06 |

Use these to make a point about category demand ("cook from what you have" has
a proven audience), never to make a point about PrepWise being better.

---

## Numbers we do NOT have — do not invent these

Every row here is a number that AI-written meal-planning content reaches for by
default. None of them is available. If a draft contains one of these, it was
invented and the paragraph must be deleted.

| Claim | Status |
|---|---|
| Total users / downloads / installs | `TODO(trent: confirm)` — and probably not publishable at this stage |
| Active users, DAU/WAU/MAU | `TODO(trent: confirm)` — analytics are not yet reporting |
| Retention or churn rates | `TODO(trent: confirm)` |
| Number of paying subscribers | `TODO(trent: confirm)` — do not publish |
| Recipes created across all users | `TODO(trent: confirm)` |
| "Users save N hours a week" | `TODO(trent: confirm)` — no measurement exists |
| "Users save $N a month on groceries" | `TODO(trent: confirm)` — no measurement exists |
| "Reduces food waste by N%" | `TODO(trent: confirm)` — no measurement exists |
| "The average household wastes $1,500 of food a year" | `TODO(trent: confirm)` — appears in an old App Store draft with no citation. If you want to use it, cite USDA or ReFED **directly**, link the report, and quote their figure, not ours. |
| Any percentage about meal planning behaviour | `TODO(trent: confirm)` — cite a named study with a link, or leave it out |
| Time to set up the app | `TODO(trent: confirm)` — the marketing carousel says "60 seconds"; nothing measures it |

**A statistic with no source is worse than no statistic.** It is the fastest way
to look like every other AI-written page in the results, and it is the one thing
a reader can check.

---

## Contact and identity

| Fact | Value | Status |
|---|---|---|
| Support email | support@prepwise-app.com | VERIFIED — `landing/src/lib/constants.ts` |
| Website | https://www.prepwise-app.com | VERIFIED — `SITE_URL` |
| Instagram | @prepwiseapp | VERIFIED — `SOCIAL_LINKS` |
| TikTok | @prepwiseapp | VERIFIED — `SOCIAL_LINKS` |
| X | @PrepWiseApp | VERIFIED — `SOCIAL_LINKS` |

`prepwise.app` is **not** our domain. It belongs to an unrelated company. Never
write it into a link, a canonical, or body copy. The site's build gate
(`landing/scripts/verify-seo.mjs`) fails on it.

---

## Adding to this file

1. Find the number in a real source: the App Store, the app's own code, the
   live database, a named third-party report.
2. Add a row with the value, the source, and the date you read it.
3. If it moves on its own, mark it **VERIFIED (volatile)** so the next writer
   re-checks instead of trusting a stale figure.
4. If you cannot find a source, add the row as `TODO(trent: confirm)` anyway.
   A visible gap is useful; a plausible guess is not.
