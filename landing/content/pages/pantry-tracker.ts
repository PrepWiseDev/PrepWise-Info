import type { UseCasePage } from "@/lib/usecase";

// Primary keyword: "pantry inventory app" (claimed in references/used-keywords.md).
//
// SERP check, 2026-07-26: the ranking product pages (KitchenPal, My Pantry
// Tracker, Your Food, Pantry Check, PantryPro) all sell the same three things:
// barcode scanning, expiry alerts, and family sync. They run short, roughly 500
// to 800 words. This page matches that length and takes the position none of
// them take: an inventory is only worth keeping if something reads it back, so
// the page is about what the list is FOR.
export const page: UseCasePage = {
  slug: "pantry-tracker",
  ct: "lp_pantry",
  navLabel: "Pantry tracker",

  title: "Pantry Inventory App for iPhone: Track What You Own",
  h1: "A pantry inventory app that tells you what you can cook",
  description:
    "A pantry inventory app that tracks every ingredient, reserves what your planned meals need, and turns the list into recipes you can actually cook tonight.",
  ogDescription:
    "Track every ingredient, then let the list tell you what is for dinner. Free on iPhone.",

  primaryKeyword: "pantry inventory app",
  secondaryKeywords: [
    "pantry tracker app",
    "kitchen inventory app",
    "food inventory app iphone",
    "fridge and freezer inventory",
  ],
  updatedAt: "2026-07-26",

  lede: [
    "A pantry inventory app is only worth the typing if something reads the list back to you. PrepWise tracks every ingredient in your kitchen and then uses it: recipes carry a live availability indicator, planned meals reserve what they need, and the shopping list is written from whatever is missing.",
    "That is the difference between an inventory and a record. A record tells you what you own. An inventory tells you what is for dinner.",
  ],

  heroCta: {
    label: "Download on the App Store",
    note: "iPhone only, iOS 15.1 or later. Free to download.",
  },

  screenshot: {
    src: "/promo/C4.png",
    alt: "PrepWise pantry list showing tracked ingredients and quantities",
    width: 1320,
    height: 2868,
  },

  sections: [
    {
      id: "the-list-does-something",
      heading: "The list is an input, not a filing cabinet",
      body: [
        "Most kitchen inventory apps stop at the list. You type in what you own, and the app hands it back to you in alphabetical order. Nothing about Wednesday gets easier.",
        "In PrepWise the pantry is what every recipe is measured against. Green means you have everything for it right now. Short means it tells you which two things are short and how much, so you know whether that recipe is tonight or Saturday.",
        "It is the same list, doing work. Which is also why keeping it current stops feeling like admin: you notice immediately when it is wrong, because the recipes go wrong with it.",
      ],
    },
    {
      id: "getting-it-in",
      heading: "Loading the shelf is the part that has to be cheap",
      body: [
        "Every pantry tracker dies the same way: the first stock-take is fine, and then nobody updates it. Two weeks later the list is fiction, and a list you have stopped believing is one you have stopped opening.",
        "So the entry has to cost almost nothing. Snap a grocery receipt and the shelf updates from it. Add things by hand in seconds when you want to. Quantities can be rough, because \"most of a bag of rice\" is a useful entry and \"rice\" is not.",
        "After the first pass, the maintenance is the moment food moves: unpacked from a shop, or spent on a meal you cooked. That is the whole cost. The [five-step method](/blog/how-to-meal-plan-from-your-pantry) covers how to do the first stock-take without it eating an afternoon.",
      ],
    },
    {
      id: "reservations",
      heading: "Two dinners cannot spend the same chicken",
      body: [
        "When you plan a meal, PrepWise reserves the ingredients it needs. Thursday's traybake cannot quietly claim the chicken thighs Tuesday already spent, so a week that looks fine on paper is one you can actually cook.",
        "This is the thing a plain inventory cannot do, because it does not know about the plan. It is also where most weekly plans fall apart: not at the shop, but on the third night, when the food turns out to have been counted twice.",
      ],
    },
    {
      id: "freezer-and-clock",
      heading: "The food you forget is the food you cannot see",
      body: [
        "Freezers are where a tracked pantry pays for itself. Two portions of chili you had forgotten about change the plan for the week, and nothing on a shelf you never open reminds you they are there.",
        "Track the freezer with everything else and the plan gets to spend it. From there the useful ordering is time, not food group: fresh things first, tins whenever. There is more on planning a week that way on the [meal prep page](/meal-prep-app).",
      ],
    },
    {
      id: "what-it-costs",
      heading: "What it costs, and what you get without paying",
      body: [
        "PrepWise is free to download, and the pantry is not the part behind the paywall. The free tier holds 15 saved recipes and 20 assistant messages a day.",
        "Pro is $6.99 a month or $39.99 a year, with a 7-day trial. iPhone only, iOS 15.1 or later.",
      ],
    },
  ],

  notFor: {
    heading: "When tracking your pantry is not worth it",
    body: [
      "If you shop daily for that evening, there is nothing to track. Pantry tracking trades a little admin for fewer trips, and you would be giving up something you like to save something you do not want.",
      "It also does not work in a kitchen you do not control. Shared houses where food arrives and disappears without a rule make the record unreliable, and an unreliable record is worse than none.",
      "And it is iPhone only. There is no Android build.",
    ],
  },

  faqs: [
    {
      question: "Does PrepWise scan barcodes?",
      answer:
        "It reads grocery receipts, which covers a whole shop in one photo rather than one item at a time. You can also add ingredients by hand in a few seconds each.",
    },
    {
      question: "Do I have to enter my whole kitchen before it is useful?",
      answer:
        "No. Start with the things you actually cook with. Receipts fill in the rest as you shop, so the record builds itself over the first couple of weeks instead of in one long sitting.",
    },
    {
      question: "Does it track expiry dates?",
      answer:
        "PrepWise tracks what you own and what your plan has claimed. The practical way to handle freshness is to plan the short-clock food into the first days of the week, which is the ordering the planner is built around.",
    },
    {
      question: "Can my partner see the same pantry?",
      answer:
        "Sharing exists in the app. If sharing a single kitchen across two phones is the deciding factor for you, check the current behaviour on the FAQ before you commit to a plan around it.",
    },
  ],

  footerCta: {
    heading: "Turn the shelf into tonight's answer",
    body: "PrepWise tracks every ingredient, reserves what your plan needs, and shows you the recipes you can cook right now.",
  },

  internalLinks: [
    {
      href: "/faq",
      label: "PrepWise FAQ",
      note: "Pantry, planning, macros, sharing, and billing questions, answered directly.",
    },
    {
      href: "/blog/how-to-meal-plan-from-your-pantry",
      label: "How to meal plan from your pantry",
      note: "The five-step method the app automates, written so it works on paper too.",
    },
  ],
};
