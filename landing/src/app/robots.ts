import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Generated at build time into out/robots.txt by the static export.
//
// This REPLACED a hand-kept landing/public/robots.txt that pointed crawlers at
// https://prepwise.app/sitemap.xml - a domain we do not own (it belongs to an
// unrelated exam-prep company). Deriving the host from SITE_URL is what makes
// that class of mistake impossible to repeat.
//
// robots.ts is a GET Route Handler. Under `output: "export"` those are only
// supported with an explicit force-static segment config - without this line the
// BUILD FAILS ("export const dynamic ... not configured on route /robots.txt").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Recipe-share pages are per-user, short-lived, and rendered by the
      // Cloudflare worker for link-preview bots. They are not site content.
      disallow: "/r/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
