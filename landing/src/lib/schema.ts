// JSON-LD builders for the pages that need more than the sitewide graph in
// layout.tsx (Organization + WebSite + MobileApplication).
//
// Every node here references the sitewide nodes by @id rather than redeclaring
// them, so the whole site is ONE identity to a crawler instead of a new
// Organization per page.

import { SITE_URL } from "@/lib/constants";
import type { BlogPost } from "@/lib/blog";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/**
 * The author identity. `@id` is fixed by references/author.md and must stay
 * stable forever: it is what ties every Article.author to one person.
 *
 * Deliberately minimal. `url`, `image`, and `sameAs` are omitted because the
 * /about page, a headshot, and the profile links do not exist yet, and the
 * checklist's rule is that a schema field must be backed by something the page
 * actually supports. The description uses only the CONFIRMED facts in
 * references/author.md, not its draft bios, which are still awaiting Trent.
 */
export const PERSON_ID = `${SITE_URL}/about#trent`;

export const authorPerson = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Trent Gavron",
  jobTitle: "Founder",
  worksFor: { "@id": ORGANIZATION_ID },
  description:
    "Founder of PrepWise LLC. He built PrepWise, an iPhone meal planner and pantry tracker, and shipped it to the App Store in June 2026.",
} as const;

export type Crumb = { name: string; path: string };

/** `path` is site-relative, e.g. "/blog". The last crumb is the current page. */
export function breadcrumbList(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${crumb.path}`,
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.h1,
    name: post.title,
    description: post.description,
    image: `${SITE_URL}${post.hero.src}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "en-US",
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
  };
}

/** Wrap a set of nodes in one @graph. One script tag per page, one graph. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
