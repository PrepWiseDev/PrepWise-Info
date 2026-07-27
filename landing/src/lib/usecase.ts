// Use-case landing pages: types, registry helpers, and the campaign-token rule.
//
// A use-case page is a keyword-targeted product page, separate from the home
// page: one page per keyword cluster, each answering one job-to-be-done. They
// are the app-business equivalent of the SEO brief's city/service pages.
//
// Same shape as the blog (`lib/blog.ts`): content is flat TypeScript in
// `content/pages/`, one file per page, registered in `content/pages/index.ts`.
// The page is DATA, the template renders it, `next build` writes the HTML. The
// hand-maintained registry is drift-checked by `scripts/verify-seo.mjs` for the
// same reason the blog registry is: a file nobody imported is a page that
// silently never ships, and nothing else in the build reports it.

import { USE_CASE_PAGES } from "@content/pages";

export type UseCaseSection = {
  /** Stable anchor, used for in-page links. */
  id: string;
  /** Rendered as an H2. A statement, not a label (references/voice.md). */
  heading: string;
  /** Paragraphs. Inline markup: [label](/href) and **bold**. Nothing else. */
  body: string[];
  list?: { ordered?: boolean; items: string[] };
};

export type UseCaseFaq = {
  question: string;
  /** Plain text. Same invariant as the FAQ page: what is rendered is the answer. */
  answer: string;
};

export type UseCasePage = {
  /** Top-level slug. `/<slug>`. Lowercase, hyphens, keyword in it. */
  slug: string;
  /**
   * The page's DEFAULT App Store campaign token, used when the visit carries no
   * ad `utm_content`. This is what makes an ORGANIC install attributable to the
   * page that earned it instead of to one sitewide token. See CT_RULES below.
   */
  ct: string;
  /** <title>. 50-60 characters DECODED. */
  title: string;
  /** The single H1. Contains the primary keyword. */
  h1: string;
  /** Meta description. 150-160 characters DECODED. */
  description: string;
  /** Shorter, more conversational line for og:description and twitter. */
  ogDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** YYYY-MM-DD. A real content date: the sitemap reads it. */
  updatedAt: string;
  /** Short label for the footer "Solutions" block and the breadcrumb trail. */
  navLabel: string;
  /**
   * The paragraphs between the H1 and the first H2. The FIRST one answers the
   * query directly and carries the primary keyword inside the first 100 words.
   */
  lede: string[];
  /** Above-the-fold CTA subline, under the download button. */
  heroCta: { label: string; note: string };
  /** One real app screenshot, below the fold. */
  screenshot: { src: string; alt: string; width: number; height: number };
  sections: UseCaseSection[];
  /**
   * Who this page is NOT for. Required, not optional: saying so is the single
   * biggest signal a human wrote the page (references/voice.md), and a required
   * field is the only way to guarantee every page has one.
   */
  notFor: { heading: string; body: string[] };
  /**
   * 3-5 page-specific questions. Rendered as visible text with NO FAQPage
   * JSON-LD: /faq owns the site's single FAQPage node and this page links to
   * it. Both halves of that rule are enforced by scripts/verify-seo.mjs.
   */
  faqs: UseCaseFaq[];
  /** The repeated CTA at the end of the page. */
  footerCta: { heading: string; body: string };
  /** Related reading, rendered after the body. In-body links come from `sections`. */
  internalLinks: { href: string; label: string; note: string }[];
};

// --- the campaign-token rule ------------------------------------------------

/**
 * App Store Connect truncates `ct` at 40 characters, and `sanitizeCt()` in
 * lib/analytics.ts does the same SILENTLY. A token past the ceiling produces an
 * install row that no longer joins back to the page that earned it, with no
 * error anywhere. Same ceiling, same reason, as `blog.ts` -> CT_MAX_LENGTH.
 */
export const CT_MAX_LENGTH = 40;

/**
 * `lp_` marks an ORGANIC landing-page token, so an App Store report row is
 * readable without a lookup: `lp_*` is a page, `blog-*` is a post, and an ad
 * code is `<plat>_<fmt>_<premise>_v<N>` (ig_/fb_/tt_). The prefixes cannot
 * collide. Convention and the golden rule:
 * ~/command-system/marketing/UTM-PLAYBOOK.md.
 */
export const CT_PREFIX = "lp_";

/**
 * Lowercase `[a-z0-9_]` only. The playbook's constraint, and it is not
 * cosmetic: the token has to survive a URL query parameter, an App Store TSV
 * report, and a case-sensitive join at the far end of all three.
 */
export const CT_PATTERN = /^lp_[a-z0-9_]*[a-z0-9]$/;

export function validateCt(ct: string): string | null {
  if (!ct.startsWith(CT_PREFIX)) return `must start with "${CT_PREFIX}"`;
  if (!CT_PATTERN.test(ct)) return "must be lowercase [a-z0-9_] and not end in _";
  if (ct.includes("__")) return "must not contain a doubled underscore";
  if (ct.length > CT_MAX_LENGTH) {
    return `is ${ct.length} chars; App Store Connect truncates ct at ${CT_MAX_LENGTH}`;
  }
  return null;
}

// --- registry ---------------------------------------------------------------

/** Registry order. One place decides how the footer and the sitemap list them. */
export function getAllUseCases(): UseCasePage[] {
  return [...USE_CASE_PAGES];
}

export function getUseCaseBySlug(slug: string): UseCasePage | undefined {
  return USE_CASE_PAGES.find((page) => page.slug === slug);
}

/**
 * The footer "Solutions" block, derived from the registry rather than re-listed.
 *
 * Named backwards ("navLinksForUseCases", not "useCaseNavLinks") because
 * eslint's react-hooks/rules-of-hooks treats ANY `use` + capital-letter name as
 * a React hook and errors on calling it at module scope. Same reason
 * `jsonLdForUseCase` in lib/schema.ts and `listUseCaseSlugs` in
 * scripts/verify-seo.mjs read the way they do. Do not "tidy" them back.
 */
export function navLinksForUseCases(): { label: string; href: string }[] {
  return getAllUseCases().map((page) => ({
    label: page.navLabel,
    href: `/${page.slug}`,
  }));
}

// --- build-time assertions --------------------------------------------------
//
// These run at module load, which under `output: "export"` means during the
// build, which means they FAIL it. That is the point: a malformed or duplicated
// campaign token is invisible at runtime (the link still works, the install is
// just misattributed), so it has to be caught before the HTML exists.
//
// scripts/verify-seo.mjs then checks the OTHER half, which this cannot see:
// that the token actually reached the rendered App Store href in the built
// page. One check guards the declaration, the other the artefact.

/**
 * Slugs the top-level namespace has already spent. `src/app/[useCase]` is a ROOT
 * dynamic segment, so it shares that namespace with every static route and
 * generated file. Next resolves a static route first, which means a use-case
 * page claiming one of these would compile, build green, and simply never
 * exist. Failing here names the collision; without it the only symptom is a URL
 * that serves somebody else's page.
 */
const RESERVED_SLUGS = new Set([
  "faq", "blog", "privacy", "terms", "robots.txt", "sitemap.xml", "r", ".well-known",
]);

{
  const seenSlug = new Set<string>();
  const seenCt = new Set<string>();
  for (const page of USE_CASE_PAGES) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(page.slug)) {
      throw new Error(`use-case slug "${page.slug}" must be lowercase words separated by hyphens`);
    }
    if (RESERVED_SLUGS.has(page.slug)) {
      throw new Error(
        `use-case slug "${page.slug}" collides with an existing top-level route; ` +
        "the static route wins and this page would never be served"
      );
    }
    if (seenSlug.has(page.slug)) {
      throw new Error(`two use-case pages share the slug "${page.slug}"`);
    }
    seenSlug.add(page.slug);

    const ctProblem = validateCt(page.ct);
    if (ctProblem) {
      throw new Error(`use-case "${page.slug}" campaign token "${page.ct}" ${ctProblem}`);
    }
    if (seenCt.has(page.ct)) {
      // Two pages sharing a token is worse than a missing one: the installs
      // merge into a single App Store row and neither page's number is real.
      throw new Error(`two use-case pages share the campaign token "${page.ct}"`);
    }
    seenCt.add(page.ct);
  }
}
