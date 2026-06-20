// Analytics + attribution helpers.
//
// This module is the single source of truth for:
//   - reading UTM parameters off the incoming ad URL
//   - building the App Store link with a per-ad campaign token (ct)
//   - firing tracking events to the Meta Pixel and GA4
//
// All functions are SSR-safe (guarded on `typeof window`) so they can be
// imported from anywhere. They no-op silently when the pixel / GA4 IDs are
// unset, so the site behaves normally without analytics configured.

// ---- Global type augmentation for injected third-party scripts -------------

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// ---- UTM handling ----------------------------------------------------------

export type UtmParams = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

/**
 * Read utm_* parameters from the current URL. Returns an empty object on the
 * server or when no UTMs are present.
 */
export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const pick = (k: string) => p.get(k) || undefined;
  return {
    source: pick("utm_source"),
    medium: pick("utm_medium"),
    campaign: pick("utm_campaign"),
    content: pick("utm_content"),
    term: pick("utm_term"),
  };
}

/**
 * App Store campaign tokens (`ct`) are limited to 40 characters. Trim/clean the
 * incoming UTM value so App Store Connect accepts it.
 */
function sanitizeCt(value: string): string {
  return value.trim().slice(0, 40);
}

/**
 * Build the App Store URL, overriding the default `ct` campaign token with the
 * incoming ad's utm_content (preferred) or utm_campaign. This is what makes
 * App Store Connect attribute installs back to the specific ad that drove the
 * tap — without it, every install shares one static token.
 *
 * Falls back to the static `baseUrl` (with its built-in default `ct`) when no
 * UTMs are present or when running on the server.
 */
export function buildAppStoreUrl(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;
  try {
    const url = new URL(baseUrl);
    const utm = getUtmParams();
    const ct = utm.content || utm.campaign;
    if (ct) url.searchParams.set("ct", sanitizeCt(ct));
    return url.toString();
  } catch {
    return baseUrl;
  }
}

// ---- Event tracking --------------------------------------------------------

/** Fire a generic event to both Meta Pixel (custom) and GA4, if present. */
export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  window.fbq?.("trackCustom", name, params);
  window.gtag?.("event", name, params);
}

/**
 * Fire the headline conversion event when a "Download on the App Store" CTA is
 * tapped. Sends:
 *   - Meta Pixel custom event `AppStoreClick` (optimizable in Ads Manager)
 *   - Meta Pixel standard `Lead` event (works with default optimization goals)
 *   - GA4 `app_store_click` event
 * Each carries the placement and the originating ad's UTMs for segmentation.
 *
 * @param placement where on the page the CTA lives, e.g. "hero" | "navbar" | "footer_cta"
 */
export function trackAppStoreClick(placement: string): void {
  if (typeof window === "undefined") return;
  const utm = getUtmParams();
  const payload = {
    placement,
    utm_source: utm.source,
    utm_medium: utm.medium,
    utm_campaign: utm.campaign,
    utm_content: utm.content,
  };
  window.fbq?.("trackCustom", "AppStoreClick", payload);
  window.fbq?.("track", "Lead", { content_name: `AppStoreClick:${placement}` });
  window.gtag?.("event", "app_store_click", payload);
}
