import type { UseCasePage } from "@/lib/usecase";

// Primary keyword: "meal prep app" (claimed in references/used-keywords.md).
//
// SERP check, 2026-07-26: the top results are a mix of product pages
// (MealPrepPro, Mealime) and round-up listicles. The product pages run roughly
// 550-900 words across five or six sections, with the download button repeated
// several times and no FAQ. This page matches that shape and length, and adds
// the two things none of them do: it starts from food you already own rather
// than from a recipe catalogue, and it prints the free-tier limits.
export const page: UseCasePage = {
  slug: "meal-prep-app",
  ct: "lp_meal_prep_app",
  navLabel: "Meal prep app",

  title: "Meal Prep App for iPhone: Plan a Week From Your Pantry",
  h1: "A meal prep app that starts with the food you already have",
  description:
    "A meal prep app for iPhone that plans the week from the food already in your pantry, batches what is worth batching, and writes the shopping list for the gap.",
  ogDescription:
    "Plan a week of meals around what is already on your shelf, then shop for the gap. Free on iPhone.",

  primaryKeyword: "meal prep app",
  secondaryKeywords: [
    "meal prep planner",
    "meal prep app iphone",
    "weekly meal prep app",
    "batch cooking app",
  ],
  updatedAt: "2026-07-26",

  lede: [
    "Most of a meal prep app's job is deciding what to cook before Sunday arrives. PrepWise decides it from your pantry: it holds what is actually in your kitchen, shows which recipes you can cook right now, and writes the shopping list from whatever the plan is still missing.",
    "That order is the difference. Plan from a recipe catalogue and Sunday starts with a full shop. Plan from your shelf and it starts with four things from the corner shop and a pot on the stove.",
  ],

  heroCta: {
    label: "Download on the App Store",
    note: "iPhone only, iOS 15.1 or later. Free to download.",
  },

  screenshot: {
    src: "/promo/C1.png",
    alt: "PrepWise meal planner showing recipes filtered by what is in the pantry",
    width: 1320,
    height: 2868,
  },

  sections: [
    {
      id: "plan-from-the-shelf",
      heading: "Recipes you can cook tonight, not recipes you could cook",
      body: [
        "Every recipe in PrepWise carries a live availability indicator, worked out against your pantry rather than against an empty kitchen. Green means you have everything. Anything short tells you what is short and how much.",
        "This is the part a recipe catalogue cannot do. It has no idea about the half bag of rice, the chicken thighs in the freezer, or the feta you opened on Tuesday, so every suggestion arrives with its own shopping trip attached.",
        "Loading the pantry is the part people quit, so it is the part the app does for you. Snap a grocery receipt and the shelf updates. After that it stays current as meals get cooked, which is what keeps the plan honest in week four rather than only in week one.",
      ],
    },
    {
      id: "batch-what-is-worth-batching",
      heading: "Batch the two ingredients the whole week hangs off",
      body: [
        "Good prep is not seven containers of the same lunch. It is picking two ingredients you have in quantity, cooking them once, and letting three different dinners come out of them.",
        "Ask for it in plain words and the app builds it: a high-protein week around the chicken and sweet potatoes already on the shelf, spread across the days you actually cook. The [five-step method behind that](/blog/how-to-meal-plan-from-your-pantry) works on paper too, and the article walks through it.",
        "PrepWise reserves the ingredients a planned meal needs, so Thursday cannot quietly claim the chicken Tuesday already spent. That single rule is what stops a good-looking week collapsing on Wednesday.",
      ],
    },
    {
      id: "shopping-list-is-the-gap",
      heading: "The shopping list writes itself, from the gap",
      body: [
        "Once the week is planned, the list is arithmetic: everything the meals need, minus everything the shelf already holds. PrepWise does the subtraction and hands you what is left, which is normally much shorter than expected.",
        "The habit it kills is the duplicate buy. Nobody buys a third jar of cumin on purpose; they buy it because the list came from recipes and the cupboard was never consulted. There is more on that on the [grocery list page](/grocery-list-app).",
      ],
    },
    {
      id: "macros-come-along",
      heading: "Calories and macros arrive with the recipe",
      body: [
        "Every recipe calculates its own calories, protein, carbs, and fat, so a prep week that has to hit a protein number does not need a second app and a second round of typing. If macros are the reason you are prepping at all, the [macro planning page](/macro-meal-planner) goes into how the targets work.",
      ],
    },
    {
      id: "what-it-costs",
      heading: "What it costs, and what you get without paying",
      body: [
        "PrepWise is free to download. The free tier holds 15 saved recipes and 20 assistant messages a day, which is enough to run a real prep week before you decide anything.",
        "Pro is $6.99 a month or $39.99 a year, with a 7-day trial. It is on iPhone, iOS 15.1 or later. There is no Android build.",
      ],
    },
  ],

  notFor: {
    heading: "When this is the wrong app for you",
    body: [
      "If you cook the same five meals on rotation and you are happy about it, you already have a plan and a stable shopping list. PrepWise would be admin.",
      "It also does not suit a kitchen you do not control. In a shared house where food comes and goes without a rule, the pantry record goes stale, and a stale record is worse than none because you will plan around food that is gone.",
      "And it is iPhone only. If you are on Android there is nothing here for you yet.",
    ],
  },

  faqs: [
    {
      question: "Is PrepWise free?",
      answer:
        "The app is free to download and the free tier holds 15 saved recipes and 20 assistant messages a day. Pro removes those limits at $6.99 a month or $39.99 a year, and there is a 7-day trial.",
    },
    {
      question: "Do I have to enter my whole pantry before I can plan anything?",
      answer:
        "No. Add the things you actually cook with and plan from those. Scanning a grocery receipt fills in the rest as you shop, so the record builds itself over the first couple of weeks rather than in one sitting.",
    },
    {
      question: "Does it do batch cooking or just individual meals?",
      answer:
        "Both. Ask for a week built around one or two ingredients and it plans meals that share a cook, so one pot of something becomes several different dinners rather than the same lunch seven times.",
    },
    {
      question: "Is there an Android version?",
      answer:
        "No. PrepWise is iPhone only, iOS 15.1 or later. There is no Android build and no date for one, so if you are on Android this is not the app for you today.",
    },
  ],

  footerCta: {
    heading: "Plan next week from what is already on the shelf",
    body: "PrepWise holds your pantry, shows which recipes you can cook right now, and writes the shopping list for the gap.",
  },

  internalLinks: [
    {
      href: "/",
      label: "PrepWise for iPhone",
      note: "What the app does, and how the pantry-first plan works in practice.",
    },
    {
      href: "/faq",
      label: "PrepWise FAQ",
      note: "Pantry, planning, macros, sharing, and billing questions, answered directly.",
    },
  ],
};
