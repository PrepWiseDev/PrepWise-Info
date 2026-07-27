import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

// Generated at build time into out/sitemap.xml by the static export.
// Routes come from SITE_ROUTES so adding a page cannot silently leave the
// sitemap stale - the previous hand-kept sitemap.xml listed a single URL on the
// wrong domain and had drifted away from the real /privacy and /terms routes.
//
// Required under `output: "export"` - see the same note in robots.ts.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = SITE_ROUTES.map((route) => ({
    url: route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Blog posts are enumerated from the content directory rather than repeated
  // in SITE_ROUTES. A post's `updatedAt` is already a real content date and is
  // already shown on the page, so the sitemap and the byline cannot disagree.
  const postRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
