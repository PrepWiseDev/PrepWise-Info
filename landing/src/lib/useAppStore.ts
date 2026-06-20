"use client";

import { useSyncExternalStore } from "react";
import { APP_STORE_URL } from "@/lib/constants";
import { buildAppStoreUrl, trackAppStoreClick } from "@/lib/analytics";

// The href never changes during a session, so subscribe is a no-op. We only use
// useSyncExternalStore to safely return a browser-derived value (the UTM-rewritten
// link) on the client while serving the static default during SSR/hydration.
const noopSubscribe = () => () => {};
const getClientHref = () => buildAppStoreUrl(APP_STORE_URL);
const getServerHref = () => APP_STORE_URL;

/**
 * Returns everything an App Store CTA needs:
 *   - `href`: the App Store link, rewritten on the client with a per-ad campaign
 *     token derived from the incoming UTMs (falls back to the static default for
 *     SSR / no-UTM visits, so the rendered HREF is always valid).
 *   - `onClick(placement)`: fires the Meta Pixel + GA4 conversion events.
 *
 * Usage:
 *   const { href, onClick } = useAppStore();
 *   <a href={href} onClick={() => onClick("hero")}>…</a>
 */
export function useAppStore() {
  const href = useSyncExternalStore(noopSubscribe, getClientHref, getServerHref);
  return { href, onClick: trackAppStoreClick };
}
