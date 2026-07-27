import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { APP_STORE_URL, OG_IMAGE, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Title 50-60 chars, meta description 150-160, both measured DECODED (an "&"
// is one character to Google, five in the HTML source). Enforced by
// landing/scripts/verify-seo.mjs; rationale in landing/seo/on-page-checklist.md.
const SITE_TITLE = "PrepWise: AI Meal Planner & Pantry Tracker for iPhone";
const SITE_DESCRIPTION =
  "Stop guessing what to cook. PrepWise plans your meals from the food already in your pantry, tracks macros, and writes the shopping list. Free on iPhone.";

export const metadata: Metadata = {
  // Resolves every relative canonical / OG url below against the WWW host.
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "PrepWise",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: "PrepWise",
    url: "/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Sitewide structured data. Organization + WebSite identify the brand and the
// site; SoftwareApplication describes the product itself.
//
// NOTE: no `aggregateRating` here on purpose. Google requires review markup to
// reflect ratings actually shown on the page, and inventing one is a manual
// -action risk - not a shortcut worth taking.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "PrepWise",
      legalName: "PrepWise LLC",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.svg`,
      sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.tiktok, SOCIAL_LINKS.twitter],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "PrepWise",
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: "PrepWise",
      description: SITE_DESCRIPTION,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      url: `${SITE_URL}/`,
      installUrl: APP_STORE_URL,
      downloadUrl: APP_STORE_URL,
      screenshot: `${SITE_URL}/og-image.png`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-pw-bg text-pw-text font-sans antialiased">
        <script
          type="application/ld+json"
          // Serialized from a literal we control - no user input reaches it.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
