"use client";

import { useEffect } from "react";
import Script from "next/script";
import { META_PIXEL_ID, GA_MEASUREMENT_ID } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

/**
 * Injects the Meta Pixel and GA4, and tracks lightweight engagement signals
 * (scroll depth + time on page). Each integration is gated on its env-var ID,
 * so nothing loads until you set NEXT_PUBLIC_META_PIXEL_ID / NEXT_PUBLIC_GA_MEASUREMENT_ID.
 *
 * Mounted once from the root layout.
 */
export default function Analytics() {
  // Scroll depth + time on page → GA4 + Meta. Cheap, dependency-free.
  useEffect(() => {
    if (!META_PIXEL_ID && !GA_MEASUREMENT_ID) return;

    const thresholds = [25, 50, 75, 100];
    const fired = new Set<number>();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackEvent("scroll_depth", { percent: t });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Time-on-page milestones (seconds).
    const timers = [15, 30, 60, 120].map((s) =>
      window.setTimeout(() => trackEvent("time_on_page", { seconds: s }), s * 1000)
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <>
      {/* ---- Meta Pixel ---- */}
      {META_PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      {/* ---- Google Analytics 4 ---- */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      )}
    </>
  );
}
