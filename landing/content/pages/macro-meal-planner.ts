import type { UseCasePage } from "@/lib/usecase";

// Primary keyword: "macro tracking meal planner" (claimed in
// references/used-keywords.md).
//
// SERP check, 2026-07-26: Plan to Eat's macro page is roughly 550 words over
// six short sections with four CTAs and no FAQ; the App Store results
// (Macrostax, MODL, Prospre) sell generated plans built to hit a macro target.
// This page matches that length band and takes the opposite position on the one
// thing they share: the plan starts from food you own, and the macros are
// counted as a consequence rather than the plan being generated from the
// numbers down.
export const page: UseCasePage = {
  slug: "macro-meal-planner",
  ct: "lp_macros",
  navLabel: "Macro meal planner",

  title: "Macro Tracking Meal Planner for iPhone: Skip the Math",
  h1: "A macro tracking meal planner that counts while you plan",
  description:
    "A macro tracking meal planner. Every recipe calculates its own calories, protein, carbs, and fat, so the week you plan is already counted before you cook it.",
  ogDescription:
    "Plan the week, and the calories and macros come with it. No second app, no weighing every plate.",

  primaryKeyword: "macro tracking meal planner",
  secondaryKeywords: [
    "macro meal planner app",
    "meal planner with macros",
    "high protein meal planner",
    "calorie and macro meal planning",
  ],
  updatedAt: "2026-07-26",

  lede: [
    "A macro tracking meal planner should count the week you planned, not ask you to log it again afterwards. In PrepWise every recipe calculates its own calories, protein, carbs, and fat, so the numbers are attached to the meal from the moment it goes on the calendar.",
    "Which means the tracking happens on Sunday, once, instead of three times a day at the plate.",
  ],

  heroCta: {
    label: "Download on the App Store",
    note: "iPhone only, iOS 15.1 or later. Free to download.",
  },

  screenshot: {
    src: "/promo/C6.png",
    alt: "PrepWise recipe view showing calories, protein, carbs, and fat",
    width: 1320,
    height: 2868,
  },

  sections: [
    {
      id: "counted-at-plan-time",
      heading: "The numbers arrive with the recipe",
      body: [
        "Calorie tracking usually happens after the fact. You cook, then you log, then you find out on Thursday that the week was 40 grams of protein short every day and there is nothing to be done about it.",
        "Planning is the only point where the number is still useful, because it is the only point where you can change it. Every PrepWise recipe carries its own calories and macros, so a week on the calendar is a week already counted, and a gap is something you fix on Sunday by swapping one dinner.",
      ],
    },
    {
      id: "targets-from-food-you-own",
      heading: "Hit the target with food that is already on the shelf",
      body: [
        "The generated-plan apps work from the numbers down: give them a protein target and they hand back a week of food you do not own. The shop that follows is the real cost, and it is the reason most of those plans get abandoned in week two.",
        "PrepWise works the other way. Ask for a high-protein dinner using the chicken and sweet potatoes already in your pantry and it builds that, macros attached. The [pantry tracker](/pantry-tracker) is what makes that possible: the planner can only cook from a shelf it can see.",
        "You can still ask for a full week. It is just a week built out of food you have, with a short list for the rest.",
      ],
    },
    {
      id: "no-second-app",
      heading: "One app for the plan and the numbers",
      body: [
        "The usual setup is a meal planner and a separate tracker, with you as the integration between them: plan in one, retype in the other, and hope the portion sizes matched.",
        "Here they are the same object. Change the meal and the numbers change. Reserve the ingredients for it and the shopping list updates. Nothing gets typed twice, so nothing drifts.",
      ],
    },
    {
      id: "prep-and-portions",
      heading: "Batch cooking without losing the count",
      body: [
        "Cooking one anchor in quantity is what makes a high-protein week survive a Tuesday, and it is where hand-counting normally breaks down: one big pot, four different plates, and nobody knows what each of them was.",
        "Because the macros belong to the recipe, portions of it carry their share. The [meal prep page](/meal-prep-app) covers planning a week around one or two anchors, and the counting comes along for free.",
      ],
    },
    {
      id: "what-it-costs",
      heading: "What it costs, and what you get without paying",
      body: [
        "PrepWise is free to download. The free tier holds 15 saved recipes and 20 assistant messages a day, which is enough to plan and count a real week before deciding anything.",
        "Pro is $6.99 a month or $39.99 a year, with a 7-day trial. iPhone only, iOS 15.1 or later.",
      ],
    },
  ],

  notFor: {
    heading: "When this is not the tracker you want",
    body: [
      "If you want to weigh and log every plate to the gram, this is not that. PrepWise counts the plan; a dedicated logging app counts the day, and they are different jobs.",
      "If you are competing and need a coach setting your numbers, PrepWise does not set targets for you. It tells you what the week you planned adds up to.",
      "And it is iPhone only. There is no Android build.",
    ],
  },

  faqs: [
    {
      question: "Does PrepWise count calories as well as macros?",
      answer:
        "Yes. Every recipe calculates calories along with protein, carbs, and fat, and the numbers are attached to the meal rather than entered separately.",
    },
    {
      question: "Does it set my macro targets for me?",
      answer:
        "No. PrepWise is not a coach and does not prescribe numbers. You bring the targets you are working to, and the planner shows you what the week adds up to against them.",
    },
    {
      question: "Do I still need a separate calorie tracking app?",
      answer:
        "Not for the meals you plan here, because those are already counted. If you want to log everything you eat including things you did not plan, a dedicated logging app is still the better tool for that half.",
    },
    {
      question: "Can it plan a high-protein week from what I already have?",
      answer:
        "That is the intended use. Ask for it in plain words, name the ingredients you want to spend, and it builds the week around them with the macros attached.",
    },
  ],

  footerCta: {
    heading: "Plan the week and let it count itself",
    body: "PrepWise calculates calories, protein, carbs, and fat for every recipe, so the week on your calendar is already counted.",
  },

  internalLinks: [
    {
      href: "/faq",
      label: "PrepWise FAQ",
      note: "Pantry, planning, macros, sharing, and billing questions, answered directly.",
    },
    {
      href: "/",
      label: "PrepWise for iPhone",
      note: "What the app does, and how the pantry-first plan works in practice.",
    },
  ],
};
