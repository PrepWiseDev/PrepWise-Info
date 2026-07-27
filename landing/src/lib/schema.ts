// JSON-LD builders for the pages that need more than the sitewide graph in
// layout.tsx (Organization + WebSite + MobileApplication).
//
// Every node here references the sitewide nodes by @id rather than redeclaring
// them, so the whole site is ONE identity to a crawler instead of a new
// Organization per page.

import { SITE_URL } from "@/lib/constants";
import type { BlogPost } from "@/lib/blog";
import type { UseCasePage } from "@/lib/usecase";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// The two sitewide nodes declared in app/layout.tsx. Referenced by @id from
// per-page graphs so the whole site stays ONE identity and ONE product to a
// crawler, rather than a second Organization and a second app per page.
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const APP_ID = `${SITE_URL}/#app`;

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

/**
 * A use-case landing page.
 *
 * `about` points at the sitewide MobileApplication node by @id rather than
 * redeclaring a SoftwareApplication per page: four pages each declaring their
 * own copy of the app is four products to a crawler, and the whole reason the
 * sitewide graph carries an @id is so a page can reference it instead.
 *
 * No FAQPage node, deliberately, even though the page renders questions. /faq
 * owns the site's single FAQPage and this page links to it; see
 * seo/on-page-checklist.md -> "FAQ SECTION".
 */
export function jsonLdForUseCase(page: UseCasePage) {
  const url = `${SITE_URL}/${page.slug}`;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    dateModified: page.updatedAt,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": APP_ID },
    primaryImageOfPage: `${SITE_URL}${page.screenshot.src}`,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** Wrap a set of nodes in one @graph. One script tag per page, one graph. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
