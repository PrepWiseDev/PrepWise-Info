"use client";

import { useAppStore } from "@/lib/useAppStore";

/**
 * The above-the-fold App Store button on a use-case landing page.
 *
 * `AppStoreCta` is the boxed, end-of-page version with its own H2; this is the
 * bare button that sits under the H1, where a second H2 would break the
 * heading hierarchy and push the primary keyword down the page.
 *
 * `pageCt` is the page-level campaign token, baked into the SERVER snapshot by
 * useAppStore, so it is already in the static HTML rather than applied at
 * hydration. An incoming ad's utm_content still overrides it: paid attribution
 * is the one with money riding on it.
 */
export default function HeroCta({
  pageCt,
  placement,
  label,
  note,
}: {
  pageCt: string;
  placement: string;
  label: string;
  note: string;
}) {
  const { href, onClick } = useAppStore(pageCt);

  return (
    <div>
      <a
        href={href}
        onClick={() => onClick(placement)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center rounded-lg bg-pw-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-pw-brand/90 hover:shadow-lg hover:shadow-pw-brand/20"
      >
        {label}
      </a>
      <p className="text-pw-text-muted text-xs mt-3">{note}</p>
    </div>
  );
}
