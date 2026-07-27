// FAQ types and helpers.
//
// The content itself lives in `content/faq.ts` so questions can be added
// without touching rendering code.
//
// THE ONE INVARIANT: `answer` is PLAIN TEXT, never markup. The same string is
// rendered on the page AND emitted in the FAQPage JSON-LD, so the two cannot
// drift. Google treats schema-only FAQ content (schema text that differs from
// what the visitor sees) as a violation, and the cheapest way to guarantee they
// match is to have exactly one string.

export const FAQ_TOPICS = [
  { id: "getting-started", label: "Getting started" },
  { id: "pantry", label: "Your pantry" },
  { id: "planning", label: "Planning and recipes" },
  { id: "macros", label: "Macros and nutrition" },
  { id: "sharing", label: "Sharing" },
  { id: "billing", label: "Price, billing, and your data" },
] as const;

export type FaqTopicId = (typeof FAQ_TOPICS)[number]["id"];

/**
 * Where a question came from. Recorded per question because "questions real
 * people ask" is a claim, and a claim with no provenance is indistinguishable
 * from a question someone invented to have something to answer.
 *
 *   app-store-review  a real review of PrepWise on the App Store
 *   support           the ops `support_tickets` table
 *   paa               People-Also-Ask / related-search patterns for the core
 *                     queries (meal prep app, pantry tracker, macro tracking).
 *                     INFERRED from the search results, not scraped from a PAA
 *                     box, and labelled that way on purpose.
 *   product           a question the shipped app's own behaviour answers, and
 *                     that a buyer asks before downloading (platform, price,
 *                     free-tier limits, cancellation, deletion).
 */
export type FaqSource = "app-store-review" | "support" | "paa" | "product";

export type FaqItem = {
  /** Stable anchor + schema id. Never change one after it ships. */
  id: string;
  question: string;
  /** Plain text, 2 to 4 sentences, answer first. See the invariant above. */
  answer: string;
  topic: FaqTopicId;
  source: FaqSource;
  /** Where the fact behind the answer was verified. */
  provenance: string;
  /** Shown in the home page's short FAQ block (which carries NO FAQPage schema). */
  featured?: boolean;
};

export function faqByTopic(items: readonly FaqItem[]) {
  return FAQ_TOPICS.map((topic) => ({
    ...topic,
    items: items.filter((item) => item.topic === topic.id),
  })).filter((group) => group.items.length > 0);
}

export function featuredFaqs(items: readonly FaqItem[]) {
  return items.filter((item) => item.featured);
}

/**
 * FAQPage JSON-LD built from the SAME strings the page renders.
 *
 * Emitted on /faq only. The home page renders a handful of these questions with
 * no schema and a link to /faq: one FAQPage per site, owned by the dedicated
 * page. `verify-seo.mjs` enforces both halves of that rule.
 */
export function faqPageJsonLd(items: readonly FaqItem[], pageUrl: string) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      "@id": `${pageUrl}#${item.id}`,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
