import type { BlogPostDraft } from "@/lib/blog";
import { OG_IMAGE } from "@/lib/constants";

// Primary from Google autocomplete 2026-11-15 ("tapcook alternative" returns
// "tapcook alternative" and "tapcook alternative for android"; "apps like
// tapcook" also completes), claimed in references/used-keywords.md #18.
// Topic-queue entry 3: rival-brand search, message match per the Apple Ads
// search-term review (part 5.4, term "tapcook: budget meal plans").
//
// SERP: NOT read. The search results page could not be fetched from the
// build machine on 2026-11-15, so format and length were not measured. The
// shape follows the two earlier rival posts. Trent: check the SERP before merge.
//
// EVERY CLAIM ABOUT TAPCOOK comes from https://tapcook.co (home page and its
// FAQ), read 2026-11-15, plus its App Store listing text, read the same day
// and deliberately NOT linked (checklist: never cite a competitor's listing).
// The post tells the reader the date it was checked.
// NO TapCook rating, review count or user count appears. Its prices appear
// because its own page prints them. PrepWise numbers are from references/stats.md.
//
// Fair to TapCook by construction: it does one thing PrepWise does not (prices
// the week at a named store against a budget), and the post says so.
export const post: BlogPostDraft = {
  slug: "tapcook-alternative",
  title: "TapCook Alternative: Plan From Your Pantry, Not a Budget",
  h1: "A TapCook alternative for when your pantry sets the plan",
  description:
    "Looking for a TapCook alternative? What TapCook's own pages say, what it does well, and how a pantry-first planner differs when you already own half the week.",
  ogDescription:
    "TapCook plans a week of dinners around a store and a budget. A pantry planner starts from what you own. Which fits your week.",
  primaryKeyword: "tapcook alternative",
  secondaryKeywords: [
    "apps like tapcook",
    "tapcook alternatives",
    "tapcook alternative for android",
    "budget meal planning app",
  ],
  hero: {
    src: OG_IMAGE.url,
    alt: "PrepWise: a meal planner that starts from what is already in your kitchen",
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
  },

  intro: [
    "If you want a TapCook alternative, the first question is what you liked about it. TapCook plans a week of dinners around the store you shop at and the budget you set. If the budget was the point, stay. If you would rather start from the food already in your kitchen, a pantry-first planner does that job.",
    "This page says what TapCook's own pages state, where it is strong, and where PrepWise is a different tool rather than a better one. It was checked on November 15, 2026, and TapCook can change any of it.",
  ],

  sections: [
    {
      id: "what-tapcook-says",
      heading: "What TapCook says it does",
      body: [
        "Everything here comes from [TapCook's own site](https://tapcook.co), read on November 15, 2026.",
        "You enter a ZIP or postal code, pick the grocery store you shop at, say how many you are feeding, which nights you cook and what you want to spend. TapCook builds a week of dinners and one shopping list, priced at that store and kept under your budget. It says the list is grouped by aisle, that swapping a dinner updates the list, and that you can mark nights as eating out.",
        "It also says the prices are estimates, built from regular store-brand prices, not a quote. It works with stores in the US and Canada, and it is on iPhone and Android.",
        "On cost, TapCook prints $9.99 a month or $29.99 a year, with a 7-day free trial on the yearly plan, and one subscription covers a household. Check its page for the current price before you decide.",
      ],
    },
    {
      id: "what-it-does-well",
      heading: "What TapCook does well",
      body: [
        "It answers a question PrepWise does not: what will this week cost at my store? If your grocery bill is the thing you are trying to control, a plan that starts from a budget and a store is the right shape.",
        "It also lets you tick off staples you already own so they come off the total, and it says it will tell you what to freeze when a pack is bigger than the week needs. That is the budget-first version of using up what you have, and it is a reasonable one.",
      ],
    },
    {
      id: "where-they-differ",
      heading: "Where a pantry planner differs",
      body: [
        "TapCook starts with the budget and works toward a shopping list. A pantry planner starts with the shelf and works toward a plan. The two meet in the middle, but the first screen is different, and so is the question each one asks you.",
        "If you keep a full pantry, a budget-first plan still has you ticking items off one at a time. If you already own the rice, the beans, the half bag of spinach and the chicken thighs, the useful question is what those add up to tonight.",
        "A small example: you own pasta, a jar of sauce and some frozen sausage. A plan built from a catalogue can put a new recipe on Tuesday that needs four things you do not have. A plan built from your pantry puts the pasta dinner on Tuesday and tells you the one thing missing.",
      ],
    },
    {
      id: "where-prepwise-fits",
      heading: "Where PrepWise fits, honestly",
      body: [
        "PrepWise keeps a pantry, shows which recipes you can cook from it right now, and writes the shopping list as the gap between your plan and your shelf. The pantry can be loaded from a photo of a shelf or a grocery receipt. The assistant can generate a recipe or plan a week, and each recipe carries calories, protein, carbs and fat.",
        "It is on iPhone and free to download. The free tier holds 15 saved recipes and 20 assistant messages a day. PrepWise Pro is $6.99 a month or $39.99 a year, with a 7-day free trial.",
        "What it does not do is price your list at a named store or hold it to a budget. If a weekly total is the number you care about, TapCook is the closer match. For the money side of planning without an app, the [budget meal planning guide](/blog/how-to-meal-plan-on-a-budget) covers the method.",
        "If your pantry is the part you want to work with, the [pantry meal planner page](/pantry-meal-planner) shows how the plan is built, and the [shopping list page](/grocery-list-app) shows how the list falls out of it. A good start is the [pantry staples list](/blog/pantry-staples-list), so the shelf is not empty on day one.",
      ],
    },
    {
      id: "who-it-is-not-for",
      heading: "Who PrepWise will not suit",
      body: [
        "Skip it if you are on Android, because there is no Android app, and TapCook has one. Skip it if you want a store-priced total and a hard budget cap, because PrepWise does not offer either. And skip it if you do not want to keep track of what is in your kitchen at all, because the plan is only as good as the shelf you give it.",
        "If you are unsure, run the free tier for one week on the dinners you were going to cook anyway and see whether the list comes out shorter.",
      ],
    },
  ],

  faqs: [
    {
      question: "What is TapCook?",
      answer:
        "TapCook is a meal planning app that, by its own description, plans a week of dinners for the store you shop at and the budget you set, then writes one shopping list priced at that store. Its site says it works with stores in the US and Canada.",
    },
    {
      question: "Is there a TapCook alternative for Android?",
      answer:
        "TapCook says it is on iPhone and Android. PrepWise is iPhone only, so it is not an Android alternative. If you are on Android and want a budget-first plan, TapCook itself is the closer fit.",
    },
    {
      question: "How much does TapCook cost?",
      answer:
        "TapCook's own page lists $9.99 a month or $29.99 a year, with a 7-day free trial on the yearly plan, in US dollars. This was read on November 15, 2026, so check its page for the current price.",
    },
    {
      question: "What is a good free alternative to TapCook?",
      answer:
        "PrepWise is free to download. Its free tier holds 15 saved recipes and 20 assistant messages a day, and PrepWise Pro is $6.99 a month or $39.99 a year. It plans from your pantry and does not price a list at a store.",
    },
    {
      question: "Are TapCook's grocery prices exact?",
      answer:
        "No. TapCook says its prices are estimates built from regular store-brand prices, not live prices from a retailer, so your checkout total will differ.",
    },
    {
      question: "Can I meal plan on a budget without TapCook?",
      answer:
        "Yes. Plan around what you already own, buy only the gap, and repeat ingredients across dinners. The budget meal planning guide on this site walks through the method.",
    },
  ],

  internalLinks: [
    {
      href: "/pantry-meal-planner",
      label: "Pantry meal planner",
      note: "A plan built from what is already on your shelf.",
    },
    {
      href: "/blog/how-to-meal-plan-on-a-budget",
      label: "How to meal plan on a budget",
      note: "The method, if the weekly total is what you care about.",
    },
    {
      href: "/blog/pantry-staples-list",
      label: "Pantry staples list",
      note: "What to keep on the shelf so the plan has something to work with.",
    },
  ],
};
