// Blog types and helpers.
//
// Posts are flat TypeScript files in `content/blog/`, one per post, registered
// in `content/blog/index.ts`. No database, no CMS, no MDX toolchain: a post is
// data, the template renders it, and `next build` turns it into static HTML.
//
// The registry is hand-maintained, which is a drift risk, so it is checked:
// `scripts/verify-seo.mjs` fails the build if a file in `content/blog/` is not
// registered, or if a registered post produced no HTML. A hand-kept list beside
// a drift check is fine; a hand-kept list on its own is a page that silently
// never ships.

import path from "node:path";
import { POSTS as DRAFTS } from "@content/blog";
import { publishedDateFor } from "../../scripts/publish-date.mjs";

export type BlogSection = {
  /** Stable anchor. Used by the table of contents and by in-body links. */
  id: string;
  /** Rendered as an H2. A statement, not a label (references/voice.md). */
  heading: string;
  /** Paragraphs. Inline markup: [label](/href) and **bold**. Nothing else. */
  body: string[];
  list?: { ordered?: boolean; items: string[] };
};

export type BlogFaq = {
  question: string;
  /** Plain text. Same invariant as the FAQ page: schema text === visible text. */
  answer: string;
};

/**
 * What a post FILE exports. `publishedAt` is absent: it is derived from the
 * commit that first added the file on main (scripts/publish-date.mjs), so a
 * draft can never carry a date earlier than the day it goes live. `updatedAt`
 * is only set when an existing post is materially edited.
 * Legacy posts (see verify-seo.mjs) still declare both literally.
 */
export type BlogPostDraft = Omit<BlogPost, "publishedAt" | "updatedAt"> & {
  publishedAt?: string;
  updatedAt?: string;
};

export type BlogPost = {
  /** URL slug. `/blog/<slug>`. Lowercase, hyphens, under 60 characters. */
  slug: string;
  /** <title>. 50-60 characters DECODED. */
  title: string;
  /** The single H1. */
  h1: string;
  /** Meta description. 150-160 characters DECODED. */
  description: string;
  /** Optional, more conversational line for og:description. */
  ogDescription?: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** YYYY-MM-DD. Shown on the page and emitted as datePublished. */
  publishedAt: string;
  /** YYYY-MM-DD. Shown as "last updated" and emitted as dateModified. */
  updatedAt: string;
  hero: { src: string; alt: string; width: number; height: number };
  /** Paragraphs before the first H2. The first one answers the query. */
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  /** Related reading. Rendered as a block at the END, in addition to the
   *  in-body links the checklist asks for, never instead of them. */
  internalLinks: { href: string; label: string; note: string }[];
};

function resolve(draft: BlogPostDraft): BlogPost {
  const publishedAt =
    draft.publishedAt ??
    publishedDateFor(path.join(process.cwd(), "content", "blog", `${draft.slug}.ts`));
  const updatedAt = draft.updatedAt ?? publishedAt;
  if (updatedAt < publishedAt) {
    throw new Error(`blog post "${draft.slug}": updatedAt ${updatedAt} is before publishedAt ${publishedAt}`);
  }
  return { ...draft, publishedAt, updatedAt };
}

const POSTS: readonly BlogPost[] = DRAFTS.map(resolve);

/** Newest first. One place decides the order. */
export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}

/** Every word the reader actually sees, so the TOC threshold is honest. */
export function wordCount(post: BlogPost): number {
  const parts = [
    post.h1,
    ...post.intro,
    ...post.sections.flatMap((s) => [s.heading, ...s.body, ...(s.list?.items ?? [])]),
    ...post.faqs.flatMap((f) => [f.question, f.answer]),
  ];
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

/**
 * The checklist requires a table of contents on long-form posts (1500+ words).
 * Below that a TOC is furniture between the reader and the answer.
 */
export const TOC_WORD_THRESHOLD = 1500;

export function needsTableOfContents(post: BlogPost): boolean {
  return wordCount(post) >= TOC_WORD_THRESHOLD && post.sections.length > 2;
}

/**
 * The App Store campaign token for a post's CTA.
 *
 * App Store Connect truncates `ct` at 40 characters, and `sanitizeCt()` in
 * lib/analytics.ts does the same SILENTLY, so a long slug would produce a token
 * that no longer joins back to the post that earned the install. The length is
 * asserted at build time by scripts/verify-seo.mjs rather than trusted here.
 */
export const CT_MAX_LENGTH = 40;

export function appStoreCt(slug: string): string {
  return `blog-${slug}`;
}

/** Human date for display. Deterministic: no locale drift between build hosts. */
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
