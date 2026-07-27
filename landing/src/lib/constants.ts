// Canonical origin for the marketing site. ONE source of truth: metadataBase,
// every per-page canonical, robots.ts, sitemap.ts and the JSON-LD all read it.
//
// It is deliberately the WWW host. The apex (prepwise-app.com) 301s here from the
// Cloudflare worker, with two exemptions that must never be canonicalised:
//   - /r/*          recipe-share Universal Links were minted on the apex
//   - /.well-known/* the AASA must resolve on the apex with no redirect
// The iOS app registers `applinks:prepwise-app.com` (apex only), which is what
// makes those two exemptions load-bearing rather than cosmetic.
export const SITE_URL = "https://www.prepwise-app.com";

// Every crawlable route in the static export. sitemap.ts enumerates this, so a
// new route is added here once rather than in a hand-kept sitemap.xml.
//
// `lastModified` is a real content date, NOT the build date. A sitemap that
// stamps "now" on every deploy teaches crawlers the field is meaningless, and
// Google discounts it. Bump the entry when the page's content actually changes;
// for the legal routes that is the "Last Updated" line the page itself renders.
export const SITE_ROUTES = [
  { path: "/", lastModified: "2026-07-26", changeFrequency: "weekly", priority: 1.0 },
  { path: "/privacy", lastModified: "2026-07-01", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms", lastModified: "2026-03-09", changeFrequency: "yearly", priority: 0.5 },
] as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Get Started", href: "#cta" },
] as const;

// App Store download link.
// `pt` = provider token, `ct` = campaign token (App Store Connect attribution),
// `mt=8` = App Store medium. The `ct` value is the DEFAULT campaign token; it is
// overridden at click time with the incoming ad's utm_content/utm_campaign so
// App Store Connect attributes installs back to the specific ad. See lib/analytics.ts.
export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/app/apple-store/id6754949361?pt=128248695&ct=Landing%20Page%20Download%20Button&mt=8";

// Analytics IDs (set in .env.local / Cloudflare Pages env vars).
// Tracking no-ops gracefully when these are empty, so the site works without them.
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export const LEGAL_LINKS = {
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/prepwiseapp/",
  tiktok: "https://www.tiktok.com/@prepwiseapp",
  twitter: "https://x.com/PrepWiseApp",
} as const;

export const SUPPORT_EMAIL = "mailto:support@prepwise-app.com";

export const FEATURES = [
  {
    icon: "Sparkles" as const,
    title: "Recipes That Match Your Reality",
    description:
      "Every recipe shows a real-time availability indicator. Green means you have everything. You'll always know what you can cook tonight, not just what you wish you could.",
  },
  {
    icon: "Package" as const,
    title: "Your Kitchen, Perfectly Organized",
    description:
      "Track every ingredient. PrepWise reserves ingredients for planned meals so you never accidentally double-book your last chicken breast. When it's time to shop, your list is already written.",
  },
  {
    icon: "CalendarDays" as const,
    title: "AI That Actually Helps",
    description:
      'Ask PrepWise to "make a high-protein dinner with the chicken and sweet potatoes in my pantry" and it delivers. Custom recipes, full-week plans, and pantry suggestions, all voice-powered.',
  },
  {
    icon: "ShoppingCart" as const,
    title: "Macros Without the Math",
    description:
      "Every recipe automatically calculates calories, protein, carbs, and fat. Nutrition tracking is built into your meal planning process, not bolted on as an afterthought.",
  },
] as const;

export const STEPS = [
  {
    number: 1,
    title: "Track Your Pantry",
    description:
      "Snap a grocery receipt and your pantry updates automatically, or add ingredients manually in seconds.",
  },
  {
    number: 2,
    title: "Plan Your Meals",
    description:
      "Browse recipes filtered by what's in your kitchen right now, or ask the AI to build your full week in seconds.",
  },
  {
    number: 3,
    title: "Shop & Cook",
    description:
      "Your shopping list writes itself: only what you actually need, based on your meal plan and what's already in your pantry.",
  },
] as const;

export const SHOWCASE_SLIDES = [
  { src: "/promo/C1.png", caption: "Plan meals around what you actually have" },
  { src: "/promo/C2.png", caption: "AI-powered recipe creation" },
  { src: "/promo/C3.png", caption: "Smart shopping lists, zero guesswork" },
  { src: "/promo/C4.png", caption: "Every ingredient, always on hand" },
  { src: "/promo/C5.png", caption: "Your recipe collection, beautifully organized" },
  { src: "/promo/C6.png", caption: "Track macros, without the hassle" },
  { src: "/promo/C7.png", caption: "From fridge to plated, effortlessly" },
  { src: "/promo/C9.png", caption: "Designed for night owls, full dark mode"},
  { src: "/promo/C10.png", caption: "Get started in 60 seconds" },
] as const;

export const STATS = [
  { value: "Real-Time", label: "Recipe Availability" },
  { value: "Automatic", label: "Macro Tracking" },
  { value: "Offline", label: "Works Anywhere" },
] as const;
