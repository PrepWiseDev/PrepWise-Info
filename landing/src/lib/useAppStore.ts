"use client";

import { useCallback, useSyncExternalStore } from "react";
import { APP_STORE_URL } from "@/lib/constants";
import {
  buildAppStoreUrl,
  trackAppStoreClick,
  withCampaignToken,
} from "@/lib/analytics";

// The href never changes during a session, so subscribe is a no-op. We only use
// useSyncExternalStore to safely return a browser-derived value (the UTM-rewritten
// link) on the client while serving the static default during SSR/hydration.
const noopSubscribe = () => () => {};

/**
 * Returns everything an App Store CTA needs:
 *   - `href`: the App Store link, rewritten on the client with a per-ad campaign
 *     token derived from the incoming UTMs (falls back to the static default for
 *     SSR / no-UTM visits, so the rendered HREF is always valid).
 *   - `onClick(placement)`: fires the Meta Pixel + GA4 conversion events.
 *
 * `pageCt` is a page-level campaign token ("faq", "blog-<slug>"). It is baked
 * into the SERVER snapshot too, so the static HTML already carries it and the
 * value does not depend on hydration. An incoming ad's utm_content still wins,
 * because paid attribution is the one that has money riding on it.
 *
 * Usage:
 *   const { href, onClick } = useAppStore("faq");
 *   <a href={href} onClick={() => onClick("faq_footer")}>…</a>
 */
export function useAppStore(pageCt?: string) {
  const getClientHref = useCallback(
    () => buildAppStoreUrl(APP_STORE_URL, pageCt),
    [pageCt]
  );
  const getServerHref = useCallback(
    () => withCampaignToken(APP_STORE_URL, pageCt),
    [pageCt]
  );
  const href = useSyncExternalStore(noopSubscribe, getClientHref, getServerHref);
  return { href, onClick: trackAppStoreClick };
}
