"use client";

import { useAppStore } from "@/lib/useAppStore";

/**
 * The App Store CTA used by pages outside the marketing home page.
 *
 * `pageCt` is the page-level campaign token ("faq", "blog-<slug>"), so an
 * install from this page is attributable to it. It never overrides an incoming
 * ad's utm_content: see useAppStore.
 *
 * `placement` is the analytics event label, which is a different axis: the ct
 * says which PAGE earned the install, the placement says where on the page.
 */
export default function AppStoreCta({
  pageCt,
  placement,
  heading,
  body,
  label = "Download on the App Store",
}: {
  pageCt: string;
  placement: string;
  heading: string;
  body: string;
  label?: string;
}) {
  const { href, onClick } = useAppStore(pageCt);

  return (
    <aside className="rounded-2xl border border-pw-border-soft bg-pw-bg-card/60 p-8 text-center">
      <h2 className="text-xl font-semibold text-pw-text mb-2">{heading}</h2>
      <p className="text-pw-text-subtle mb-6 mx-auto max-w-xl">{body}</p>
      <a
        href={href}
        onClick={() => onClick(placement)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center rounded-lg bg-pw-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-pw-brand/90 hover:shadow-lg hover:shadow-pw-brand/20"
      >
        {label}
      </a>
      <p className="text-pw-text-muted text-xs mt-4">
        iPhone only, iOS 15.1 or later. Free to download.
      </p>
    </aside>
  );
}
