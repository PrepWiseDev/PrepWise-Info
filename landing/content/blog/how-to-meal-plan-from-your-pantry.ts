import type { BlogPost } from "@/lib/blog";
import { OG_IMAGE } from "@/lib/constants";

// Seed post for the S3a blog scaffold. Written to exercise every part of the
// template end to end: table of contents, in-body internal links, an external
// citation, a per-post FAQ, and the related-reading block.
//
// Hero image: the shared social card for now. The S4 batch ships per-post hero
// images with descriptive filenames; a placeholder that is honest about what it
// shows beats an invented photograph of a kitchen.
export const post: BlogPost = {
  slug: "how-to-meal-plan-from-your-pantry",
  title: "How to Meal Plan From Your Pantry: A Five-Step Method",
  h1: "How to meal plan from your pantry, in five steps",
  description:
    "How to meal plan from your pantry: take stock, pick two anchors, plan around them, and shop for the gap. A repeatable method that starts with the food you own.",
  ogDescription:
    "Plan the week from the food already on your shelf, then shop for the gap. Five steps, in order.",
  primaryKeyword: "how to meal plan from your pantry",
  secondaryKeywords: [
    "pantry meal planning",
    "meal plan with what I have",
    "cook from what you have",
    "pantry inventory meal plan",
  ],
  publishedAt: "2026-07-26",
  updatedAt: "2026-07-26",
  hero: {
    src: OG_IMAGE.url,
    alt: "PrepWise: meal planning that starts with what is in your pantry",
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
  },

  intro: [
    "To meal plan from your pantry, work in this order: take stock of what you already own, pick two ingredients to build the week around, choose meals that use them, and only then write a shopping list for the gap. Most planning goes wrong because it runs that order backwards, starting with recipes and treating your kitchen as empty.",
    "The difference matters on a Wednesday. A plan built from recipes needs a full shop before step one. A plan built from your shelf needs four things from the corner shop and gets dinner on the table.",
  ],

  sections: [
    {
      id: "why-recipe-first-planning-fails",
      heading: "Why planning from recipes leaves food rotting",
      body: [
        "Pick seven recipes you like and you have written a shopping list, not a plan. Each recipe brings its own ingredients, most of them in pack sizes larger than the recipe needs, and none of them talks to the half bag of spinach already in your fridge.",
        "Two things follow. You buy food you own. And you throw away food you bought last week for the recipe you did not get to, because nothing in the plan pointed at it.",
        "The fix is not more discipline. It is inverting the order, so the food you already paid for is the input to the plan rather than an afterthought.",
      ],
    },
    {
      id: "the-five-steps",
      heading: "The five steps, in order",
      body: [
        "Each step feeds the next. Doing them out of order is how you end up back at a seven-recipe shopping list.",
      ],
      list: {
        ordered: true,
        items: [
          "Take stock. Open every door and write down what is there, with rough quantities.",
          "Mark what is on a clock. Anything fresh, opened, or near its date goes to the top.",
          "Pick two anchors. Two ingredients you have a lot of, that several meals can be built around.",
          "Plan meals that spend the clock items first and lean on the anchors.",
          "Write the shopping list last, from the gap between the plan and the shelf.",
        ],
      },
    },
    {
      id: "take-stock-properly",
      heading: "Take stock once, properly, then keep it current",
      body: [
        "The first stock-take is the only slow part. Open the fridge, the freezer, and every cupboard, and write down what is actually there rather than what you remember buying. Quantities can be rough. \"Most of a bag of rice\" is a useful entry; \"rice\" is not, because it does not tell you whether Thursday works.",
        "Freezers are where this pays for itself. The food most likely to be forgotten is the food you cannot see, and a freezer with two portions of chili in it changes the plan for the week.",
        "After that, keep it current at the moment food moves: when the shopping is unpacked and when a meal is cooked. That is the whole maintenance cost. Skip it for two weeks and the list becomes fiction, which is worse than no list, because you will plan around things you no longer have.",
      ],
    },
    {
      id: "sort-by-the-clock",
      heading: "Sort the shelf by the clock, not by the food group",
      body: [
        "Once you can see everything, the useful ordering is time, not category. Fresh herbs, opened dairy, and a bag of salad are on a short clock. Root vegetables, hard cheese, and eggs have longer. Dried and tinned goods barely have one.",
        "Plan the short-clock items into the first two or three days and the long-clock items later in the week. That single rule removes most household food waste without anyone tracking a percentage, because the food goes into a meal before it goes off.",
        "If you are unsure how long something actually keeps, the USDA publishes real storage times rather than guesses: [the FoodKeeper storage guide](https://www.foodsafety.gov/keep-food-safe/foodkeeper-app) is the reference worth trusting over the date printed on the packet, which is usually about quality rather than safety.",
      ],
    },
    {
      id: "pick-two-anchors",
      heading: "Pick two anchors and let the week hang off them",
      body: [
        "An anchor is an ingredient you have in quantity that several different meals can be built around. A pack of chicken thighs, a bag of rice, a block of feta, a bag of frozen peas. Two anchors is the number that works: one leaves you eating the same dinner four nights running, three or more and you are back to a shopping list.",
        "Anchors do the structural work. Chicken thighs and rice cover a traybake, a fried rice, and a soup, and the three meals share a shop rather than each needing their own. The variety comes from the small stuff you already own, the spices and the sauces and the half-onion.",
        "This is also the step that makes leftovers deliberate. Cook the anchor once in quantity, then let Tuesday and Thursday be different meals built from the same pot.",
      ],
    },
    {
      id: "choosing-the-meals",
      heading: "Choose the meals in the order the food will go off",
      body: [
        "Now put meals against days, and do it in clock order rather than in order of preference. The salad and the opened yoghurt get Monday and Tuesday. The chicken thighs, still sealed, can wait until Thursday. The bag of dried lentils will keep until March and does not need a day at all.",
        "Plan fewer dinners than there are nights. Something always changes, and a plan with no slack is a plan you abandon on Wednesday, at which point the food you bought for Thursday starts its own clock. Leaving two nights open for leftovers and for whatever comes up is what makes the other five actually happen.",
        "Check each meal against the shelf as you add it rather than at the end. A week that looks fine on paper and turns out to need three onions you do not have is a week you will quietly stop following, and the correction is much cheaper made one meal at a time.",
      ],
    },
    {
      id: "the-shopping-list-is-the-gap",
      heading: "The shopping list is whatever the plan is missing",
      body: [
        "Write the list only after the meals are chosen, and write it by subtraction: everything the plan needs, minus everything the shelf already holds. What is left is the list. It is normally much shorter than expected, and that is the point.",
        "Doing it in this order also kills the duplicate buy, which is the most expensive habit in a kitchen. Nobody buys a third jar of cumin on purpose. They buy it because the list was written from recipes and the cupboard was never consulted.",
      ],
    },
    {
      id: "where-prepwise-fits",
      heading: "Where PrepWise fits, honestly",
      body: [
        "Every step above works on paper, and plenty of people run it on paper for years. What breaks is step one after week three: keeping the stock-take current by hand is the chore people quit, and once it is stale the whole method collapses.",
        "That is the part [PrepWise](/) automates. It holds the pantry, so recipes carry a live availability indicator instead of you cross-checking a list. It reserves ingredients when you plan a meal, so two dinners cannot claim the same chicken. It writes the shopping list as the gap between your week and your shelf. You can load the pantry from a photo of the shelf or a grocery receipt instead of typing it, which is what keeps step one from rotting.",
        "It is on iPhone only, it is free to download, and the free tier holds 15 saved recipes and 20 assistant messages a day. The [answers to the questions people ask before downloading](/faq) cover the rest, including [what you get without paying](/faq#is-prepwise-free) and [whether you have to enter the whole pantry first](/faq#enter-whole-pantry-first).",
      ],
    },
    {
      id: "when-this-does-not-work",
      heading: "When this method is not worth the effort",
      body: [
        "If you cook the same five meals on rotation and you are happy about it, you do not need any of this. The rotation is already a plan, and your shopping list is already stable.",
        "It also does not suit a kitchen you do not control. Shared houses where food comes and goes without a rule make the stock-take unreliable, and an unreliable stock-take is worse than none.",
        "And it is a poor fit if you shop daily for that evening. Pantry planning trades a little admin for fewer trips; if you like the trips, you are giving something up to save something you do not want.",
      ],
    },
  ],

  faqs: [
    {
      question: "How often should I take stock of my pantry?",
      answer:
        "Do the full sweep once, then update it when food moves: on the way in from a shop and on the way out into a meal. A weekly catch-up before you plan is enough to keep it honest without turning it into a chore.",
    },
    {
      question: "Should I plan breakfast and lunch too?",
      answer:
        "Start with dinners. They carry the most variety and the most waste, and they are where the pantry actually gets spent. Breakfast and lunch are usually a short rotation you already run without thinking, and adding them in week one is how a plan turns into a chore.",
    },
    {
      question: "Do I need an app to meal plan from my pantry?",
      answer:
        "No. The method works with a notebook and a pen. An app earns its place at step one, where keeping the stock-take current by hand is the part most people give up on.",
    },
    {
      question: "What do I do when the plan and the pantry disagree?",
      answer:
        "Trust the shelf and change the plan. A plan is a prediction; the pantry is a fact. Fix the record as soon as you notice, because a stock-take you have stopped believing is one you have stopped using.",
    },
  ],

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
