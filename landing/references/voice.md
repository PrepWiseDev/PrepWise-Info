# Voice — PrepWise

> Read this file before writing ANY PrepWise content: blog post, landing page,
> meta description, App Store copy, social caption. Every page shipped is
> checked against the "Tells that it's AI-written" section below before it goes
> live.
>
> **Status:** DRAFT by ARCHITECT (2026-07-26), assembled from existing PrepWise
> materials. Trent edits. Anything here that does not sound like him is wrong
> and should be changed rather than worked around.

Companion files: [`stats.md`](./stats.md) (the only numbers you may use),
[`opinions.md`](./opinions.md), [`stories.md`](./stories.md),
[`author.md`](./author.md), [`used-keywords.md`](./used-keywords.md).

---

## Who is writing

**Trent Gavron.** Founder of PrepWise LLC. Built the app himself, iOS first,
shipped to the App Store on 2026-06-17. He is a home cook and a software
engineer, in that order for this audience.

He is not a nutritionist, not a chef, and not a coach, and the writing never
pretends otherwise. When a claim needs authority he does not have, he cites a
source or leaves it out.

He writes to the person standing in front of an open fridge at 6pm.

`TODO(trent: confirm)` — the personal detail that makes this real: what
actually made you build a pantry-first meal planner instead of using one of the
existing apps. One or two sentences. That sentence ends up in the About page,
the author bio, and the opening of at least three posts, so it is worth
getting right.

---

## The one rule everything else serves

**Write about the reader's kitchen, not about the app.**

The subject of most sentences should be the reader or their food. PrepWise
enters the sentence when it does something for them, not as the hero.

- Good: "You already own four of the six ingredients. PrepWise shows you which
  four."
- Bad: "PrepWise leverages intelligent pantry synchronization to surface
  actionable recipe recommendations."

---

## Sentence rhythm

- **Short sentences.** Most under 20 words. A long sentence should be doing
  real work.
- **One idea per sentence.** Two "and"s in a sentence means it is two
  sentences.
- **Answer first, context second.** Never build up to the point.
- **Second person.** "You", "your pantry", "your week". Not "users", not
  "one", not "consumers".
- **Concrete nouns.** "Chicken thighs", "half a bag of rice", "Tuesday" beat
  "ingredients", "items", "a weekday".
- **Present tense** for what the app does. Not "will help you plan" but "plans
  your week".

Rhythm example, in voice:

> Most recipe apps show you food you cannot cook. You have chicken, rice, and
> half a bag of spinach; the app shows you a braise that needs six things you
> would have to go buy. PrepWise sorts the other way round. It starts from
> what is already in your kitchen and tells you what that adds up to tonight.

Answer, evidence, mechanism, stop. No summarising flourish at the end.

---

## Words and phrases we use

- "pantry" — the differentiator word. Use it deliberately and often. No
  competitor claims it (see `stats.md`).
- "what you already have" / "what is already in your kitchen"
- "tonight" / "this week" / "Sunday" — real time anchors
- "plan" as a verb, not "meal-plan" as a noun-verb hybrid
- "shopping list" (two words, never "grocery list generator")
- "macros" — the audience already uses this word
- "the app" when referring to PrepWise in the second half of a paragraph
- "free" — say it plainly when it is true (see `stats.md` for what is free)

## Words we never use

Empty SaaS vocabulary:

- **unlock**, **leverage**, **seamless**, **game-changer**, **empower**,
  **synergy**, **cutting-edge**, **world-class**, **best-in-class**,
  **revolutionize**, **transform your relationship with food**
- **"in today's fast-paced world"** and every variant
- **"comprehensive"**, **"holistic"**, **"robust"**, **"powerful"**
- **"we pride ourselves on"**, **"we are passionate about"**
- **"reach out"** — say "email us" or "message us"
- **"utilize"** — say "use"
- **"effortless"**, **"magically"**, **"just works"** — show it instead

Punctuation and characters:

- **Exclamation marks.** Never. Not in headings, not in CTAs, not in captions.
- **Emoji in prose.** Never. (A platform-native emoji in a social caption is a
  different decision, made in the Content Lab, not here.)
- **Em dashes (—).** Never, anywhere in user-facing copy. This is a standing
  PrepWise-Info rule (`CLAUDE.md` → Copy Style). Use a comma, a full stop,
  parentheses, or a colon. En dashes in date ranges are fine.
- **ALL CAPS** for emphasis. Use bold, sparingly.

## Claims we are legally and ethically barred from making

These are **HARD** and enforced in code, not style preferences. The same list
gates every generated PrepWise ad and script
(`~/command-system/content-lab/lib/brand-guardrail.js`,
`PROHIBITED_PHRASES`). SEO content is held to the same bar so that search,
social, and paid all say the same thing.

Never write, in any form:

| Banned | Why |
|---|---|
| cure, treat, diagnose (any tense) | PrepWise is a meal-planning app, not a medical product |
| "doctor recommended" / "Dr. recommended" | Fabricated medical authority |
| "lose N lbs in N weeks" | Specific outcome promise we cannot make |
| "guaranteed weight loss" / "guaranteed results" | Same |
| "FDA approved" | False |
| "clinically proven" | False |
| "medical grade" | Meaningless and misleading here |

Also never:

- Invent a user count, a download count, a rating, a retention figure, or a
  testimonial. Numbers come from `stats.md` or they do not appear.
- Attribute a quote to a person who did not say it.
- Claim a feature the shipped app does not have. If it is in the roadmap, say
  "coming" or do not mention it.

---

## Formatting rules

- **Headings are statements, not labels.** Not "Features" but "Recipes that
  match what is actually in your kitchen". Not "How it works" but "Three steps,
  starting with your pantry".
- **Sentence case for headings.** Not Title Case For Every Word.
- **Paragraphs of 1 to 4 sentences.** A wall of text is a bounce.
- **Bullets are fragments, not paragraphs.** If every bullet is a full sentence
  ending in a period, rewrite them as prose or shorten them.
- **Bold sparingly**, for the one phrase a skimmer must not miss.
- **Real numbers over adjectives.** Not "saves you time" but "the shopping list
  writes itself from the week you just planned". Not "affordable" but
  "$39.99 a year". Numbers come from `stats.md`.
- **Blog structure:** direct answer in the first paragraph → why it goes wrong
  the usual way → the concrete method → where PrepWise fits (one paragraph,
  honest) → FAQ → close on a next step, not a summary.

---

## Tell people when the app is not for them

This is the single biggest signal that a human wrote the page, and the fastest
way to be trusted by someone comparing three apps.

PrepWise is genuinely not the right tool if you:

- cook the same five meals and are happy about it
- do not want to track what is in your kitchen at all
- are on Android today (iOS only, see `stats.md`)

Say so. A post that admits this ranks and converts better than one that claims
everyone needs it, and it is also true.

---

## Tells that it's AI-written — delete on sight

Re-read the draft against this list before shipping. If you find one, delete
the paragraph and write it again. Do not patch it.

- "Whether you're a busy parent, a fitness enthusiast, or a college student..."
  Any "Whether you're X, Y, or Z" opener.
- Three-item lists where every item starts with an -ing verb. ("Planning meals,
  tracking macros, reducing waste.")
- Parallel sentence structures repeating across consecutive paragraphs.
- A closing paragraph that restates the opening. ("So whether you're looking
  to save time or money, PrepWise...")
- Paragraphs that end on a rhetorical flourish instead of a fact.
- The words "comprehensive", "seamless", "effortless", "game-changer".
- Rhetorical questions used as section openers. ("Ever wondered why meal
  planning feels so hard?")
- Bullets where every bullet is a full sentence ending in a period.
- Hedged non-claims. ("PrepWise can help you potentially reduce food waste.")
  Either it does something or it does not.
- A number with no source. Every number traces to `stats.md`.
- Any sentence that would read identically for a competitor's app. If you can
  swap in "Mealime" and the sentence still works, it says nothing.

---

## One-line summary

**Write like the person who built the app is telling a friend how to get dinner
out of what is already in their fridge: specific, second person, no adjectives
doing a number's job, and honest about where it does not help.**
