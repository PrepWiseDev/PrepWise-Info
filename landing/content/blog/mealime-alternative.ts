import type { BlogPostDraft } from "@/lib/blog";
import { OG_IMAGE } from "@/lib/constants";

// Primary from Google autocomplete 2026-10-14 ("mealime alternative" returns
// "mealime alternatives", "mealime app alternative", "apps like mealime"),
// claimed in references/used-keywords.md #15. Not in keyword-clusters.md: this
// is the D6 post (Trent's Decision Hub answer of 2026-10-14), a rival-brand
// search, message match per source document part 5.4.
//
// EVERY CLAIM ABOUT MEALIME comes from its own pages, read 2026-10-14:
//   - https://www.mealime.com/closing (the closing notice and its FAQ)
//   - https://www.mealime.com (top banner: "Mealime will shut down on October
//     21, 2026")
//   - its App Store release notes for 4.21.37 (2026-10-02), not linked because
//     the checklist forbids citing a competitor's App Store listing.
// Nothing is claimed about Meals Hub beyond what the closing page says, and the
// page tells the reader the date it was checked, because Mealime can change it.
//
// NO RATING COUNT, USER COUNT OR PRICE for Mealime appears. Those are its
// numbers and they move. PrepWise numbers are from references/stats.md.
//
// Fair to Mealime by construction: the post says what it did well, and that
// the right move for some readers is to stay with its team's Meals Hub.
export const post: BlogPostDraft = {
  slug: "mealime-alternative",
  title: "Mealime Alternative: What to Do About the Oct 21 Closing",
  h1: "Mealime alternative: how to choose one now that it is closing",
  description:
    "Looking for a Mealime alternative? Mealime said it would close on October 21, 2026. What its own pages say, what to save, and three ways to carry on cooking.",
  ogDescription:
    "Mealime announced it would close on October 21, 2026. What its own pages say and three ways to carry on.",
  primaryKeyword: "mealime alternative",
  secondaryKeywords: [
    "mealime alternatives",
    "apps like mealime",
    "mealime app alternative",
    "mealime replacement",
    "mealime shutting down",
  ],
  hero: {
    src: OG_IMAGE.url,
    alt: "PrepWise: a meal planner that starts from what is already in your kitchen",
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
  },

  intro: [
    "If you are looking for a Mealime alternative, the date that matters is October 21, 2026. That is when Mealime said it would be discontinued. If the app still opens for you, save the recipes you rely on. Either way, decide what you actually used it for and pick a replacement that does that job.",
    "This page is written for the person who opened Mealime every Sunday and now has to choose something else. It says what Mealime's own pages state, what to save, and three ways to carry on, one of which is PrepWise and one of which is staying with Mealime's own team.",
  ],

  sections: [
    {
      id: "what-mealime-says",
      heading: "What Mealime says is happening",
      body: [
        "Everything in this section comes from Mealime's own pages, read on October 14, 2026, a week before the announced shutdown. Details can change, so check the source before you act.",
        "Mealime's [closing notice](https://www.mealime.com/closing) says the app will be discontinued as of October 21, 2026, and the banner on the [Mealime home page](https://www.mealime.com) says the same. It says Mealime was acquired by Albertsons Companies in 2021, and that its recipes and meal-planning tools are moving to a product called Meals Hub, found inside Albertsons Companies grocery apps.",
        "On subscriptions, the notice says Pro subscribers will not be charged any further fees before the shutdown, and that Pro recipes and features become available to all Mealime users. On data, it says personal data is deleted when the app shuts down, and that dietary preferences and some settings have to be set up again inside Meals Hub.",
        "It also says Meals Hub is free, keeps the Mealime recipes, and can be used without an Albertsons store nearby. That is Mealime's description of its own successor, and it is a fair option for many people. More on that below.",
      ],
    },
    {
      id: "what-to-save",
      heading: "What to save from Mealime",
      body: [
        "Four small jobs, in this order. They only work while the app still opens, so if you are reading this after October 21, 2026, skip to the next section and rebuild from memory.",
      ],
      list: {
        ordered: true,
        items: [
          "Open your saved and favourite recipes and write down the five or six you actually cook.",
          "Note your diet settings and allergies somewhere you control, because they will not carry over automatically.",
          "Screenshot the shopping list for the week you are on, so the plan survives the switch.",
          "Check your subscription is not set to renew, and read the closing notice for what it says about charges.",
        ],
      },
    },
    {
      id: "work-out-the-job",
      heading: "Work out which job Mealime was doing for you",
      body: [
        "People used Mealime for different things, and the right replacement depends on which one was yours. Mealime's own listing describes a weekly personalised plan, a grocery list built from the recipes, step-by-step cooking instructions, nutrition information and a long list of diet options.",
        "So ask yourself which of those you leaned on. If it was **the plan arriving without any effort**, you want another catalogue-style planner. If it was **the grocery list**, you want a list that is built for you and sorted by aisle. If it was **a diet setting**, check that your next app supports yours before you move.",
        "Most people, asked honestly, used it for the plan and the list. The recipes were the part they happened to find themselves cooking.",
      ],
    },
    {
      id: "three-ways",
      heading: "Three ways to carry on cooking",
      body: [
        "**Stay with Mealime's team on Meals Hub.** If you liked Mealime's recipes, this is the closest thing to staying put. By its own description it is free, keeps the Mealime recipes and comes from the same team. The catch is the front door: you reach it through an Albertsons Companies store app, which some people will not want on their phone.",
        "**Move to another catalogue-style planner.** The category is crowded, and the approach is the same as Mealime's: pick a plan from a library, get a list, go shopping. The things to compare are the diets supported, whether the list sorts by aisle, and what the free version includes. Read the free limits before you build a habit around one.",
        "**Move to a planner that starts from your kitchen.** This is the other half of the problem. A catalogue plan assumes you are about to shop. If you already own half of what the week needs, a plan built from your shelf does less buying and less binning. This is what [PrepWise](/) does, and it is a different way of working rather than a better version of the first one.",
      ],
    },
    {
      id: "where-prepwise-fits",
      heading: "Where PrepWise fits, honestly",
      body: [
        "PrepWise keeps a pantry, shows which recipes you can cook from it right now, and writes the shopping list as the gap between your plan and your shelf. The pantry can be loaded from a photo of a shelf or a grocery receipt. The assistant can generate a recipe or plan a week, and each recipe carries calories, protein, carbs and fat.",
        "It is on iPhone and free to download. The free tier holds 15 saved recipes and 20 assistant messages a day. PrepWise Pro is $6.99 a month or $39.99 a year, with a 7-day free trial.",
        "What it is not is a library written and tested by a food team. Recipes in PrepWise come from the assistant or from you, so if the thing you loved about Mealime was a large set of recipes someone else had cooked and checked, Meals Hub is the closer match.",
        "If the shopping list is the part you want, the [shopping list page](/grocery-list-app) shows how it is built, and the [pantry meal planner page](/pantry-meal-planner) covers the plan side.",
      ],
    },
    {
      id: "who-it-is-not-for",
      heading: "Who PrepWise will not suit",
      body: [
        "Skip it if you are on Android, because there is no Android app. Skip it if you want a finished plan to arrive with no tracking at all, because PrepWise works best when it knows what is in your kitchen. And skip it if the recipes were the whole point, for the reason above.",
        "If you are not sure, run the free tier for one week on the same plan you were going to cook anyway, and see whether the list comes out shorter. The [meal planning guide](/blog/how-to-meal-plan-for-the-week) walks through that week if you want a method rather than an app.",
      ],
    },
  ],

  faqs: [
    {
      question: "Is Mealime shutting down?",
      answer:
        "Yes. Mealime's own closing notice says the app will be discontinued as of October 21, 2026, with its recipes and meal-planning tools moving to Meals Hub inside Albertsons Companies grocery apps. That is the closing date it gave, so after it has passed the app should be gone. This was checked on October 14, 2026.",
    },
    {
      question: "What is the best Mealime alternative?",
      answer:
        "It depends on what you used Mealime for. If you liked its recipes, Meals Hub from the same team is the closest match. If you want a plan built from the food you already own, a pantry-first planner such as PrepWise does that instead.",
    },
    {
      question: "Is there a free Mealime alternative?",
      answer:
        "Meals Hub is described by Mealime as free. PrepWise is free to download, and its free tier holds 15 saved recipes and 20 assistant messages a day. Check the free limits of anything you pick before relying on it.",
    },
    {
      question: "What happens to my Mealime subscription?",
      answer:
        "Mealime's closing notice says Pro subscribers will not be charged any further fees before the shutdown on October 21, 2026, and that Pro recipes and features become available to all Mealime users. Read the notice for the current wording.",
    },
    {
      question: "Will my Mealime recipes and settings carry over?",
      answer:
        "Mealime says its recipes continue on Meals Hub, but that dietary preferences and some settings need to be set up again there, and that personal data is deleted when Mealime shuts down. Write down your allergies and diet settings before then.",
    },
    {
      question: "Do I need an Albertsons store nearby to use Meals Hub?",
      answer:
        "Mealime's notice says no. It says you can still browse recipes, create meal plans and generate shopping lists in Meals Hub without an Albertsons Companies store nearby. You do reach it through an Albertsons Companies store app or website.",
    },
  ],

  internalLinks: [
    {
      href: "/pantry-meal-planner",
      label: "Pantry meal planner",
      note: "A plan built from what is already on your shelf.",
    },
    {
      href: "/grocery-list-app",
      label: "Grocery list app",
      note: "A shopping list that is only the gap between plan and pantry.",
    },
    {
      href: "/blog/how-to-meal-plan-from-your-pantry",
      label: "How to meal plan from your pantry",
      note: "The method, if you want to try it before choosing an app.",
    },
  ],
};
