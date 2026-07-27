import type { UseCasePage } from "@/lib/usecase";

// Primary keyword: "grocery list app" (claimed in references/used-keywords.md).
//
// SERP check, 2026-07-26: the ranking pages (Samsung Food, Plan to Eat,
// MealBoard, Paprika, Cooklist) all promise the same mechanic, a list generated
// from chosen recipes, and run short, roughly 400 to 800 words. Only Cooklist
// mentions subtracting what you already own. This page is that subtraction,
// stated plainly, at the same length.
export const page: UseCasePage = {
  slug: "grocery-list-app",
  ct: "lp_grocery",
  navLabel: "Grocery list app",

  title: "Grocery List App: Build the List From Your Meal Plan",
  h1: "A grocery list app that only lists what you are missing",
  description:
    "A grocery list app that builds the list from your meal plan and subtracts what is already in your pantry, so you buy the gap instead of a second jar of cumin.",
  ogDescription:
    "The list is your week minus your shelf. Shorter than you expect, and never a duplicate buy.",

  primaryKeyword: "grocery list app",
  secondaryKeywords: [
    "automatic grocery list from recipes",
    "shopping list app iphone",
    "meal plan grocery list",
    "grocery list generator",
  ],
  updatedAt: "2026-07-26",

  lede: [
    "A grocery list app that turns recipes into a list is doing half the job. PrepWise does the other half: it subtracts what is already in your pantry, so the list is the gap between the week you planned and the food you own.",
    "In practice that list is much shorter than the one you would have written, and it never contains the thing you already have two of.",
  ],

  heroCta: {
    label: "Download on the App Store",
    note: "iPhone only, iOS 15.1 or later. Free to download.",
  },

  screenshot: {
    src: "/promo/C3.png",
    alt: "PrepWise shopping list generated from a week of planned meals",
    width: 1320,
    height: 2868,
  },

  sections: [
    {
      id: "list-is-subtraction",
      heading: "The list is your plan minus your shelf",
      body: [
        "Pick the meals for the week and every ingredient they need is known. So is everything already in your kitchen, because the [pantry](/pantry-tracker) is tracked. The list is one minus the other, and PrepWise does that subtraction rather than handing you both halves.",
        "The habit this kills is the duplicate buy, which is the most expensive one in a kitchen. Nobody buys a third jar of cumin on purpose. They buy it because the list came from recipes and the cupboard was never consulted.",
      ],
    },
    {
      id: "written-last",
      heading: "Write the list last, not first",
      body: [
        "Seven recipes you like is a shopping list, not a plan. Each one brings its own ingredients, mostly in pack sizes larger than the recipe needs, and none of them talks to the half bag of spinach in your fridge.",
        "Choosing the meals first and writing the list afterwards is the whole method, and it works with a notebook. The [five-step version](/blog/how-to-meal-plan-from-your-pantry) is written out if you want to run it by hand before installing anything.",
      ],
    },
    {
      id: "list-stays-true",
      heading: "The list changes when the week changes",
      body: [
        "Plans move. Swap Thursday's dinner and the list should move with it, otherwise you are shopping for a week you have already abandoned.",
        "Because the list is derived rather than typed, it is always the current answer. Planned meals also reserve their ingredients, so two dinners cannot both be counting on the same chicken and the list cannot quietly go short.",
      ],
    },
    {
      id: "what-goes-in-the-basket",
      heading: "What ends up in the basket, and what does not",
      body: [
        "Unpacking the shop is where most tracked pantries die, so that step is a photo: scan the grocery receipt and the shelf updates from it. The list you just bought becomes the food the next plan reads.",
        "That closes the loop. Plan, list, shop, scan, plan again, with nothing typed twice. The [meal prep page](/meal-prep-app) covers the planning half in more detail.",
      ],
    },
    {
      id: "what-it-costs",
      heading: "What it costs, and what you get without paying",
      body: [
        "PrepWise is free to download, and the shopping list is not behind the paywall. The free tier holds 15 saved recipes and 20 assistant messages a day.",
        "Pro is $6.99 a month or $39.99 a year, with a 7-day trial. iPhone only, iOS 15.1 or later.",
      ],
    },
  ],

  notFor: {
    heading: "When a plain list app is the better tool",
    body: [
      "If all you want is a shared list two people can tick items off, a plain list app does that with no setup and PrepWise is more machinery than the job needs.",
      "The subtraction is only as good as the pantry behind it. If you are not going to keep that current, you get a recipe-to-list converter, which is what the other apps already are.",
      "And it is iPhone only. There is no Android build.",
    ],
  },

  faqs: [
    {
      question: "Does the list know what I already have at home?",
      answer:
        "Yes, that is the point of it. PrepWise subtracts your tracked pantry from what the planned meals need, so the list is only the gap. A recipe-to-list app without a pantry cannot do that.",
    },
    {
      question: "Can I add things to the list by hand?",
      answer:
        "Yes. The generated list is a starting point, not a locked document, so washing-up liquid and anything else that has nothing to do with dinner goes on it the usual way.",
    },
    {
      question: "What happens when I change a meal?",
      answer:
        "The list is derived from the plan, so it updates with it. You are never shopping for a version of the week you have already changed your mind about.",
    },
    {
      question: "How does the shopping get back into the pantry?",
      answer:
        "Scan the grocery receipt and the pantry updates from it. That is what keeps the next list honest, because the subtraction is only as good as the record it is subtracting from.",
    },
  ],

  footerCta: {
    heading: "Shop for the gap, not for the whole recipe",
    body: "PrepWise builds the shopping list from your meal plan and subtracts what is already in your kitchen.",
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
