# Opinions — the takes that make PrepWise content sound like a person

> **Status: DRAFT by ARCHITECT, 2026-07-26. Every take below is a CANDIDATE**,
> derived from PrepWise's actual product positioning
> (`~/command-system/audits/prepwise-business-plan/`, the App Store listing, and
> the shipped app). **None of them is confirmed as Trent's view until he edits
> this file.** Mark each one KEEP, CHANGE, or CUT.
>
> An opinion Trent does not actually hold is worse than no opinion: he will be
> asked about it.

## The rules for using an opinion

1. **One strong opinion per page, maximum.** Two reads as a rant.
2. **Back it with a number from [`stats.md`](./stats.md) or a mechanism.**
   "Pantry-first is better" is a slogan. "Every other app starts from the
   recipe, so it shows you food you would have to go shopping for" is an
   opinion.
3. **Never use an opinion to attack a named competitor.** Criticise the
   approach, not the company. "Recipe-first apps have this problem" is fair.
   "Mealime is bad" is not, and it is a link-liability.
4. **An opinion that contradicts nutrition science is out**, always. We have
   opinions about planning, not about food safety or health outcomes. See the
   hard claim ban in [`voice.md`](./voice.md).
5. If none of these fits the page honestly, ship the page without one.

---

## On meal planning apps

### 1. Recipe-first apps are solving the wrong half of the problem
**Status: `TODO(trent: confirm)` — KEEP / CHANGE / CUT**

Almost every meal planning app starts from a recipe catalogue and works
forwards: pick a recipe, get a shopping list. That is a shopping app. The
actual problem at 6pm is the reverse: here is what I have, what does it add up
to. Starting from the pantry is a different product, not a feature.

*Backing:* no competitor puts "pantry" in their App Store title or subtitle
(`stats.md`, verified 2026-07-06). The whole category works forwards.

*Use on:* pantry-first pages, "what can I make with" pages, comparison pages.

---

### 2. A meal plan you cannot cook tonight is a to-do list
**Status: `TODO(trent: confirm)` — KEEP / CHANGE / CUT**

The reason most people quit meal planning in week two is not discipline. It is
that the plan assumed a shopping trip that did not happen. A plan built from
what is already in the kitchen survives a Tuesday.

*Backing:* mechanism, not a statistic. Do not attach an invented dropout rate to
this. If a real study exists, cite it by name and link it.

*Use on:* "how to meal plan" pages, beginner pages, Sunday-prep pages.

---

### 3. Macro tracking after you eat is scorekeeping, not planning
**Status: `TODO(trent: confirm)` — KEEP / CHANGE / CUT**

Logging a meal tells you what you already did. It changes nothing. Seeing the
protein number while you are still choosing is the part that changes the
outcome. That is why PrepWise calculates macros at plan time rather than at log
time.

*Backing:* the shipped behaviour (macros are computed per recipe, in the
planner). Do NOT extend this into a health or weight claim: no outcomes, no
"lose", no "guaranteed". See `voice.md`.

*Use on:* macro pages, high-protein pages, fitness-audience pages.

---

### 4. Food waste is a memory problem, not a discipline problem
**Status: `TODO(trent: confirm)` — KEEP / CHANGE / CUT**

Nobody buys spinach intending to throw it out. It gets thrown out because by
Thursday nobody remembers it is there. The fix is not willpower, it is a list
that is actually up to date and a planner that reads from it.

*Backing:* mechanism. **The "$1,500 a year" figure is not usable** until it is
sourced directly to USDA or ReFED (`stats.md`).

*Use on:* food waste pages, grocery budget pages, pantry organisation pages.

---

### 5. Free tiers should say their limits out loud
**Status: `TODO(trent: confirm)` — KEEP / CHANGE / CUT**

PrepWise free gives you 15 recipes and 20 AI messages a day. Printing that is
not a weakness. Every app in this category has a limit and most of them make you
discover it by hitting it.

*Backing:* `stats.md`, verified in `paywallConfig.js`.

*Use on:* pricing pages, "is X free" pages, comparison pages. This one is also
the clearest E-E-A-T signal available: it is checkable.

---

### 6. An AI that cannot see your kitchen is guessing
**Status: `TODO(trent: confirm)` — KEEP / CHANGE / CUT**

A chatbot that writes you a recipe without knowing what you own is a search
engine with better manners. The useful version reads your pantry first and
plans against it. That constraint is the whole point.

*Backing:* mechanism. Keep it about the constraint, not about model quality.

*Use on:* AI meal planning pages, "AI recipe generator" pages.

---

## On when NOT to use PrepWise

**Status: `TODO(trent: confirm)` — this section is the highest-value one in the
file. Confirm it is a position you are comfortable publishing.**

Say these plainly in content. They cost nothing and they are the strongest
credibility signal we have.

- If you cook the same five meals every week and you are happy, you do not need
  a planner. You need a bigger recipe list, and that is a free problem to solve.
- If you will not keep the pantry roughly current, PrepWise degrades into a
  normal recipe app. The pantry is the input; garbage in, garbage out.
- PrepWise is iPhone only today. If you are on Android, this is not your app
  yet. Do not soften this.
- If you want a rigid pre-built meal plan handed to you, PrepWise is the wrong
  shape. It plans around your kitchen, which means it needs to know your
  kitchen.

---

## Takes we will NOT make

Recorded so nobody drafts them by accident.

- Anything comparing PrepWise to a diet, a medical intervention, or a coach.
- Anything implying a health, weight, or body-composition outcome.
- Anything about a competitor's business, funding, or people.
- Anything implying we have user data or research we do not have (`stats.md`).

---

## Adding an opinion

An opinion belongs here if all three are true:

1. Trent actually holds it.
2. It is specific enough to be disagreed with. If nobody could argue the
   opposite, it is not an opinion, it is a platitude.
3. It can be backed by a mechanism or a number from `stats.md`.

Add it with a `Status:` line, its backing, and the page types it suits.
