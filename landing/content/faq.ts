import type { FaqItem } from "@/lib/faq";

// The PrepWise FAQ. Rendered at /faq, and the source of the FAQPage JSON-LD.
//
// MINING NOTE (2026-07-26, ARCHITECT). Three sources were asked for; two of them
// are nearly empty today and saying so is more useful than padding the list:
//
//   App Store reviews  ONE review exists (itunes RSS customerreviews feed for
//                      id 6754949361, read 2026-07-26). It is a 5-star review,
//                      not a question. It is cited on the one question it
//                      actually speaks to (does the AI do anything real).
//   support_tickets    ZERO rows in the ops database on 2026-07-26. The table
//                      exists and is empty, so no question here claims to come
//                      from it. Re-mine it before the S4 batch.
//   PAA / related      The bulk of the list. Inferred from search results for
//                      "meal prep app", "pantry tracker", "macro tracking" on
//                      2026-07-26 (the questions the category's own listings and
//                      round-ups answer), NOT scraped from a PAA box.
//
// Every answer's fact is verified against a named source in `provenance`. Every
// NUMBER traces to references/stats.md. Answers deliberately do not enumerate
// which features are Pro beyond the two free-tier limits stats.md verifies: the
// paywall config carries feature-gate identifiers that are not evidence of what
// is actually gated in the shipped build.
export const FAQ_ITEMS: readonly FaqItem[] = [
  // ---- getting started -----------------------------------------------------
  {
    id: "what-does-prepwise-do",
    topic: "getting-started",
    source: "paa",
    provenance: "category round-ups answer this first; landing/references/stats.md capabilities list",
    question: "What does PrepWise actually do?",
    answer:
      "PrepWise tracks what is in your kitchen and plans meals around it. Every recipe carries a real-time availability indicator, so you can see what you can cook tonight without a shopping trip first. When you plan a week, the shopping list writes itself from the gap between that plan and your pantry.",
    featured: true,
  },
  {
    id: "is-prepwise-free",
    topic: "getting-started",
    source: "product",
    provenance: "stats.md: price to download Free; FREE_TIER.RECIPE_LIMIT 15; FREE_TIER.DAILY_MESSAGE_LIMIT 20",
    question: "Is PrepWise free?",
    answer:
      "The app is free to download and free to keep using, with two caps: 15 saved recipes and 20 AI assistant messages a day. PrepWise Pro lifts both and costs $6.99 a month or $39.99 a year after a 7-day trial. You can track a pantry and plan meals from it without paying anything.",
    featured: true,
  },
  {
    id: "is-prepwise-on-android",
    topic: "getting-started",
    source: "product",
    provenance: "stats.md: Platform iOS only, minimum iOS 15.1",
    question: "Is PrepWise on Android?",
    answer:
      "No. PrepWise is on iPhone only and needs iOS 15.1 or later. There is no Android build, so if that is your phone, this is not your app today.",
    featured: true,
  },
  {
    id: "enter-whole-pantry-first",
    topic: "getting-started",
    source: "paa",
    provenance: "the category's standard objection: manual entry is why pantry apps get abandoned",
    question: "Do I have to enter my whole pantry before it is useful?",
    answer:
      "No. Start with the staples you actually cook with and add the rest as you shop. You can also photograph your shelves or scan a grocery receipt and let PrepWise read the items in. The availability indicator gets sharper as the pantry fills out, but it works from the first handful of items.",
    featured: true,
  },
  {
    id: "does-the-ai-do-anything-real",
    topic: "getting-started",
    source: "app-store-review",
    provenance:
      'App Store review "First Useful Food App!!!", 5 stars, 2026-06-17: "AI tools actually work and are super helpful"',
    question: "Does the AI actually do anything, or is it a chatbot bolted on?",
    answer:
      "It writes recipes and full-week plans against the food you already have, and it reads photos of your shelves or a receipt to load your pantry. Ask for a high-protein dinner using the chicken and sweet potatoes you have and you get a recipe you can cook, with macros. The plan lands on your calendar rather than staying in the conversation.",
  },
  {
    id: "does-prepwise-work-offline",
    topic: "getting-started",
    source: "paa",
    provenance: "app stores pantry, recipes, and plan in local repositories (prepwise-app/src/data/local)",
    question: "Does PrepWise work without a connection?",
    answer:
      "Your pantry, recipes, and meal plan live on the device, so you can open the app in a shop with no signal and still see what you have. Anything that calls the AI assistant needs a connection, because that request is processed in the cloud.",
  },

  // ---- pantry --------------------------------------------------------------
  {
    id: "how-do-i-add-food",
    topic: "pantry",
    source: "paa",
    provenance: "prepwise-app onboarding pantry-scan flow and the assistant's receipt intake",
    question: "How do I get food into my pantry?",
    answer:
      "Three ways: type it in, photograph your fridge and pantry shelves, or scan a grocery receipt. PrepWise reads the photo or the receipt and loads the items it finds, and you confirm or correct them before they land in the pantry.",
  },
  {
    id: "do-i-need-to-scan-barcodes",
    topic: "pantry",
    source: "paa",
    provenance: "barcode scanning is the category norm; PrepWise does not use it",
    question: "Do I have to scan a barcode for every item?",
    answer:
      "No. PrepWise does not ask you to barcode-scan a shelf. One photo of the shelf, or the receipt from the shop you just did, covers most of a week in a single step, and you can always type something in.",
  },
  {
    id: "does-it-track-expiry",
    topic: "pantry",
    source: "paa",
    provenance: "prepwise-app/src/types/Pantry.ts: expiration field, alert enum, expirationAlertRule per category",
    question: "Does PrepWise track expiry dates?",
    answer:
      "Yes. A pantry item can carry an expiration date, and each category has its own alert rule, so the spinach warns you sooner than the tinned tomatoes. Items running low are flagged the same way.",
  },
  {
    id: "what-happens-when-i-plan",
    topic: "pantry",
    source: "product",
    provenance: "stats.md capability: pantry tracking with ingredient reservation",
    question: "What happens to my pantry when I plan a meal?",
    answer:
      "PrepWise reserves the ingredients that meal needs. That is what stops you planning two dinners around the same last chicken breast, and it is why the availability indicator on other recipes changes the moment you add something to the week.",
  },
  {
    id: "pantry-categories",
    topic: "pantry",
    source: "paa",
    provenance: "prepwise-app/src/types/Pantry.ts: user-defined categories with preferred unit and alert rule",
    question: "Can I organise the pantry the way my kitchen is actually laid out?",
    answer:
      "Yes. Items live in categories you name yourself, each with its own preferred unit and expiry alert rule. There is no fixed list of shelves you have to squeeze your kitchen into.",
  },

  // ---- planning ------------------------------------------------------------
  {
    id: "can-it-plan-a-week",
    topic: "planning",
    source: "paa",
    provenance: "stats.md capabilities: AI week planning, meal calendar",
    question: "Can PrepWise plan a whole week for me?",
    answer:
      "Yes. Ask the assistant for a week and it builds one, using what is already in the pantry first. Swap any meal you do not fancy, and the finished plan goes on the calendar rather than staying in a chat thread.",
  },
  {
    id: "only-recipes-i-can-make",
    topic: "planning",
    source: "paa",
    provenance: "stats.md capability: real-time recipe availability",
    question: "Does it only show me recipes I can make right now?",
    answer:
      "No, you see everything, sorted by what you can actually cook. A recipe you are two ingredients short of is still there and clearly marked as short, and those two ingredients go on the shopping list the moment you plan it.",
    featured: true,
  },
  {
    id: "can-i-add-my-own-recipes",
    topic: "planning",
    source: "paa",
    provenance: "prepwise-app RecipeInfo create/edit flow and user-defined recipe categories",
    question: "Can I add my own recipes?",
    answer:
      "Yes. Create a recipe, edit it later, and file it in your own categories. Once its ingredients are linked to pantry items it gets the same availability indicator and the same macro breakdown as anything the assistant wrote.",
  },
  {
    id: "shopping-list-knows-my-pantry",
    topic: "planning",
    source: "paa",
    provenance: "stats.md capability: auto-generated shopping lists",
    question: "Does the shopping list know what I already have?",
    answer:
      "Yes. The list is the difference between your plan and your pantry, so it holds only what you actually need to buy. Add a meal to the week and the list grows; cook one and those ingredients come out of the pantry.",
  },

  // ---- macros --------------------------------------------------------------
  {
    id: "does-it-count-macros",
    topic: "macros",
    source: "paa",
    provenance: "stats.md capability: macro calculation per recipe",
    question: "Does PrepWise count calories and macros for me?",
    answer:
      "Yes, per recipe, automatically. Calories, protein, carbs, and fat are worked out from the ingredients, so a recipe you typed in yourself gets the same numbers as one the assistant generated. There is no separate logging step.",
  },
  {
    id: "is-it-a-calorie-tracker",
    topic: "macros",
    source: "paa",
    provenance: "boundary of the shipped feature set; profile carries daily nutrition goals",
    question: "Is PrepWise a calorie tracking app?",
    answer:
      "Not really, and it is worth being clear about it. PrepWise calculates macros for the food you plan and cook, and you can set daily nutrition goals, but it is not a food diary for restaurant meals or packaged snacks. If logging every bite is the point for you, a dedicated tracker will suit you better.",
  },
  {
    id: "can-i-set-a-protein-target",
    topic: "macros",
    source: "paa",
    provenance: "daily nutrition goals stored on the profile (see the PrepWise privacy policy, section 1)",
    question: "Can I set a protein target?",
    answer:
      "Yes. Daily nutrition goals live in your profile, and PrepWise personalises the recipes and plans it generates around them.",
  },

  // ---- sharing -------------------------------------------------------------
  {
    id: "share-a-recipe",
    topic: "sharing",
    source: "paa",
    provenance: "recipe-share links at prepwise-app.com/r/<id>, rendered by the site worker",
    question: "Can I send a recipe to someone who does not have PrepWise?",
    answer:
      "Yes. Sharing a recipe gives you a link that opens in any browser, so the person on the other end reads the ingredients and the steps without installing anything. If they do have PrepWise on an iPhone, the same link opens straight in the app.",
  },
  {
    id: "revoke-a-share",
    topic: "sharing",
    source: "product",
    provenance: "revoked share ids render the unavailable page (PrepWise-Info worker/index.js)",
    question: "Can I stop a recipe link I already sent from working?",
    answer:
      "Yes. Revoke the share and the link stops resolving. Anyone who opens it afterwards gets a page saying the recipe is unavailable, because the link points at the recipe rather than carrying a copy of it.",
  },
  {
    id: "share-a-pantry",
    topic: "sharing",
    source: "paa",
    provenance: "no shared-pantry or collaborator feature exists in the shipped app (verified 2026-07-26)",
    question: "Can two people share one pantry?",
    answer:
      "Not today. A pantry belongs to one account, so a household cooking from the same kitchen either shares a login or keeps two pantries. Recipe sharing works between accounts; pantry sharing does not exist yet.",
  },

  // ---- billing and data ----------------------------------------------------
  {
    id: "what-do-i-get-free",
    topic: "billing",
    source: "product",
    provenance: "stats.md free-tier limits: 15 recipes, 20 AI messages per day",
    question: "What exactly do I get without paying?",
    answer:
      "The free tier is PrepWise with two caps: 15 saved recipes and 20 AI assistant messages a day. The download is free, nothing expires, and no card is needed to use it.",
  },
  {
    id: "how-much-is-pro",
    topic: "billing",
    source: "product",
    provenance: "stats.md pricing: $6.99 monthly, $39.99 annual, 7-day trial",
    question: "How much is PrepWise Pro?",
    answer:
      "$6.99 a month, or $39.99 a year, after a 7-day trial. Pro lifts the two free-tier caps: the 15-recipe limit and the 20 assistant messages a day.",
  },
  {
    id: "how-do-i-cancel",
    topic: "billing",
    source: "product",
    provenance: "Apple manages every subscription bought inside an iOS app",
    question: "How do I cancel PrepWise Pro?",
    answer:
      "Through Apple, not through us. On your iPhone open Settings, tap your name, tap Subscriptions, then cancel PrepWise. Apple handles every subscription bought inside an iOS app, which is why there is no cancel button in the app itself.",
  },
  {
    id: "delete-my-account",
    topic: "billing",
    source: "product",
    provenance: "PrepWise privacy policy, section 6 (data retention)",
    question: "How do I delete my account and everything in it?",
    answer:
      "In the app go to Profile and Settings, then Account, then Delete Account. Your account and all the data tied to it are permanently removed within 30 days. The full detail is in our privacy policy.",
  },
];
