import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/lib/constants";

// Generated at build time into out/sitemap.xml by the static export.
// Routes come from SITE_ROUTES so adding a page cannot silently leave the
// sitemap stale - the previous hand-kept sitemap.xml listed a single URL on the
// wrong domain and had drifted away from the real /privacy and /terms routes.
//
// Required under `output: "export"` - see the same note in robots.ts.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((route) => ({
    url: route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
