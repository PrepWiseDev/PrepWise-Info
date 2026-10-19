import type { BlogPostDraft } from "@/lib/blog";
import { OG_IMAGE } from "@/lib/constants";

// Primary from Google autocomplete 2026-10-15 ("hellofresh alternative" returns
// "hellofresh alternatives", "hellofresh alternatives reddit"), claimed in
// references/used-keywords.md #16. Topic-queue entry 1: rival-brand search,
// message match per the Apple Ads search-term review (part 5.4).
//
// SERP, read 2026-10-15 (top results: garagegymreviews.com, moneypantry.com,
// platform.cooklang.org, plus top10.com and alternativeto.net in the list):
//   - Format: listicles of OTHER meal kits (Home Chef, Green Chef, EveryPlate,
//     Factor, Sunbasket), mostly affiliate-driven. One result is a cooklang
//     page arguing for planning without a box.
//   - Length: roughly 860 to 3,900 words by raw page text, nav included.
//     This post is about 1,300 words; padding to match the affiliate pages
//     would not add an answer.
//   - Topics all cover: what HelloFresh is, how it works, what it costs,
//     other kits to try.
//   - What none does: treats leaving a box as a cooking-method question (what
//     you do with the food you already own), says who it is NOT for, or tells
//     the reader what HelloFresh still does better.
//
// EVERY CLAIM ABOUT HELLOFRESH comes from www.hellofresh.com, read 2026-10-15
// (home page and its FAQ). NO HelloFresh price, rating or customer count
// appears: it prints promotions and percentages that change by the week.
// PrepWise numbers come from references/stats.md.
export const post: BlogPostDraft = {
  slug: "hellofresh-alternative",
  title: "HelloFresh Alternative: Cook From Food You Already Own",
  h1: "A HelloFresh alternative for people who already own the groceries",
  description:
    "Looking for a HelloFresh alternative? Compare a meal kit with planning dinners from your own pantry: what each does well, what it costs, and who should skip it.",
  ogDescription:
    "A meal kit sends the food. A pantry planner works with the food you already have. Which one fits your week.",
  primaryKeyword: "hellofresh alternative",
  secondaryKeywords: [
    "hellofresh alternatives",
    "alternative to hellofresh",
    "hello fresh alternative",
    "meal kit alternative",
    "cheaper than hellofresh",
    "meal planner instead of meal kit",
  ],
  hero: {
    src: OG_IMAGE.url,
    alt: "PrepWise: a meal planner that starts from what is already in your kitchen",
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
  },

  intro: [
    "If you want a HelloFresh alternative, there are two different things you could be shopping for: another box, or no box. Another meal kit (Home Chef, Green Chef, EveryPlate and the like) swaps one delivery for another. No box means you plan dinners from groceries you buy yourself, and from what is already in your kitchen.",
    "This page is about the second one. It covers what HelloFresh does well, where a pantry-first planner fits instead, and who should keep the box.",
  ],

  sections: [
    {
      id: "what-hellofresh-does",
      heading: "What HelloFresh does well",
      body: [
        "Everything here comes from HelloFresh's own site, read on October 15, 2026. By its description, you pick recipes each week, portioned ingredients and step-by-step instructions arrive at your door, and you cook. It says delivery is once a week, that you can skip a week or cancel, and that it ships anywhere in the United States except Alaska and Hawaii.",
        "That is a real service, and it removes three jobs at once: deciding, shopping and portioning. If those were the jobs that made you give up on cooking at home, a box is a reasonable answer to them.",
      ],
    },
    {
      id: "why-people-leave",
      heading: "Why people look for a way out of the box",
      body: [
        "The reasons are usually practical. The box arrives whether or not you have a plan for Thursday. The recipes are someone else's, written for ingredients you would not otherwise buy. And you end up with a pantry full of half-used jars while a delivery fills the fridge.",
        "None of that is a flaw in HelloFresh. It is what a meal kit is: food that comes to you, chosen from a menu. The question is whether your kitchen already holds most of a week's dinners.",
      ],
    },
    {
      id: "plan-from-pantry",
      heading: "The other option: plan from what you already own",
      body: [
        "A pantry-first plan reverses the order. You write down what is on your shelves and in the freezer, find the dinners that food adds up to, and shop only for the gap. Rice, tinned tomatoes, pasta, frozen chicken thighs and a bag of spinach are already several dinners that a kit would have you buy again.",
        "You can do it on paper. The [method for planning from your pantry](/blog/how-to-meal-plan-from-your-pantry) can be done on a Sunday with a pen and no app. If you want a feel for what the output looks like, [what can I make with what I have](/blog/what-can-i-make-with-what-i-have) is the quick version.",
        "The trade is that you do the shopping and the cooking decisions yourself. A box does not ask that of you.",
      ],
    },
    {
      id: "where-prepwise-fits",
      heading: "Where PrepWise fits, honestly",
      body: [
        "PrepWise keeps a pantry, shows which recipes you can cook from it right now, and writes the shopping list as the gap between your plan and your shelf. The pantry can be loaded from a photo of a shelf or a grocery receipt. The assistant can generate a recipe or plan a week, and each recipe carries calories, protein, carbs and fat.",
        "It is on iPhone and free to download. The free tier holds 15 saved recipes and 20 assistant messages a day. PrepWise Pro is $6.99 a month or $39.99 a year, with a 7-day free trial.",
        "The [pantry meal planner page](/pantry-meal-planner) shows how the plan is built, and the [shopping list page](/grocery-list-app) covers the list.",
      ],
    },
    {
      id: "what-it-does-not-do",
      heading: "What PrepWise does not do, and who should keep the box",
      body: [
        "PrepWise does not deliver anything. There are no portioned ingredients, no recipe cards in a bag, and no food team that has cooked and tested every recipe. Recipes come from the assistant or from you.",
        "Keep the kit if the thing you value is that dinner arrives decided and measured. Skip PrepWise if you are on Android, because there is no Android app, or if you do not want to keep track of what is in your kitchen at all. It works best when it knows what you own.",
        "If you are not sure, try one week of your usual groceries through the free tier and see how many dinners the pantry already covers. The [weekly planning guide](/blog/how-to-meal-plan-for-the-week) lays out that week step by step.",
      ],
    },
  ],

  faqs: [
    {
      question: "What is a good alternative to HelloFresh?",
      answer:
        "It depends on what you want to drop. If you want another box, other meal kits such as Home Chef or Green Chef do the same job. If you want no box, a meal planner that starts from your own pantry, such as PrepWise, plans dinners from the food you already have.",
    },
    {
      question: "Is there a free HelloFresh alternative?",
      answer:
        "Planning from your own pantry on paper is free. PrepWise is free to download, and its free tier holds 15 saved recipes and 20 assistant messages a day. Both leave the shopping and cooking to you.",
    },
    {
      question: "Is there a HelloFresh alternative without delivery?",
      answer:
        "Yes. A meal planner works with groceries you buy yourself and with what is already in your kitchen, so nothing is shipped. The trade is that you do your own shopping.",
    },
    {
      question: "Can I skip weeks or cancel HelloFresh?",
      answer:
        "HelloFresh's own site says you can skip a week by pausing your order, or cancel your subscription. Check its current terms before you act, since they can change.",
    },
    {
      question: "Does PrepWise deliver ingredients like HelloFresh?",
      answer:
        "No. PrepWise is an iPhone app that plans meals and writes a shopping list. It does not deliver food or sell ingredients.",
    },
    {
      question: "Who should stay with a meal kit?",
      answer:
        "Anyone who wants dinner chosen, portioned and delivered, and who does not want to plan or shop. A meal kit does those jobs, and a planner does not.",
    },
  ],

  internalLinks: [
    {
      href: "/pantry-meal-planner",
      label: "Pantry meal planner",
      note: "A plan built from what is already on your shelf.",
    },
    {
      href: "/blog/how-to-meal-plan-from-your-pantry",
      label: "How to meal plan from your pantry",
      note: "The method by hand, no app needed.",
    },
    {
      href: "/grocery-list-app",
      label: "Grocery list app",
      note: "A shopping list that is only the gap between plan and pantry.",
    },
  ],
};
