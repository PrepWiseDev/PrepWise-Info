# PrepWise-Info — Cloudflare Pages Site

Repo: tmgavron/PrepWise-Info
Purpose: PrepWise public website — legal documents + marketing landing page
Hosting: Cloudflare Pages (static site for root, Next.js for landing/)

## VECTOR Agent Access

VECTOR (Marketing agent) has read/write access to this repository for content editing.
- Focus areas: `PrepWise-Info`, `Landing Page`
- Working directory: `~/repos/PrepWise-Info/`
- Commit format: `[VECTOR] <description>`
- Auto-deploys on push to main

### Editable by VECTOR
- `landing/src/components/*.tsx` — marketing copy, headlines, CTAs, features
- `landing/src/app/page.tsx` — page structure
- `landing/src/app/globals.css` — styles
- `landing/src/components/constants.ts` — shared content
- `landing/public/` — marketing assets
- `index.html` — info page content

### NOT editable by VECTOR
- `wrangler.toml`, `_headers`, `worker/index.js` — deployment/routing/security config
- `landing/next.config.ts`, `landing/package.json` — build config
- `landing/src/app/robots.ts`, `landing/src/app/sitemap.ts` — GENERATED SEO files
  (see below). Adding a page means adding it to `SITE_ROUTES` in
  `landing/src/lib/constants.ts`, not hand-editing XML.
- `landing/src/lib/constants.ts` → `SITE_URL` / `SITE_ROUTES` — canonical host

---

## Site Structure

```
PrepWise-Info/
├── landing/                ← Next.js landing page application (deployed via wrangler.toml)
│   ├── src/app/
│   │   ├── layout.tsx      ← Root layout (metadata, fonts, dark theme)
│   │   ├── page.tsx        ← Home page (hero, features, how-it-works, stats, email capture)
│   │   ├── privacy/page.tsx ← Privacy Policy (integrated route)
│   │   ├── terms/page.tsx  ← Terms of Use / EULA (integrated route)
│   │   └── globals.css     ← Tailwind theme + brand colors
│   ├── src/components/     ← Navbar, Hero, Features, HowItWorks, Stats, EmailCapture, Footer
│   │   ├── robots.ts       ← GENERATES out/robots.txt at build time
│   │   └── sitemap.ts      ← GENERATES out/sitemap.xml at build time
│   ├── src/lib/constants.ts ← SITE_URL, SITE_ROUTES, nav/legal links, features
│   ├── scripts/make-brand-assets.py ← regenerates og-image.png + apple-touch-icon.png
│   └── public/
│       ├── logo.svg        ← PrepWise production logo
│       ├── og-image.png    ← 1200x630 social card (generated, committed)
│       ├── apple-touch-icon.png ← 180x180 iOS icon (generated, committed)
│       ├── .well-known/    ← apple-app-site-association (Universal Links)
│       └── screenshots/    ← Hero section screenshots
├── index.html              ← Legacy legal docs landing (NOT deployed - see below)
├── privacy.html            ← Legacy Privacy Policy (standalone HTML)
├── terms.html              ← Legacy Terms of Use (standalone HTML)
├── 404.html                ← Custom 404 error page
├── logo.svg                ← PrepWise logo (source asset)
├── worker/
│   └── index.js            ← Worker for /r/{shareId} recipe-share OG preview pages
├── _headers                ← Cloudflare Pages security headers
├── wrangler.toml           ← Cloudflare Workers config (worker + landing/out assets)
└── CLAUDE.md               ← This file
```

## URL Structure

Landing app (Next.js static export via wrangler.toml → landing/out/):
- `/` → Home (landing page)
- `/privacy` → Privacy Policy (integrated into landing app)
- `/terms` → Terms of Use (integrated into landing app)

Recipe-share preview worker (`worker/index.js`, runs only for `/r/*` via
`run_worker_first`): renders an Open Graph preview page for PrepWise
recipe-share Universal Links (`/r/{shareId}`) so iMessage/Slack show the
recipe title, author, and image. Looks the share up through the public
`get-shared-recipe` Supabase edge function (PROD first, then QA so TestFlight
QA shares preview during testing). Revoked/unknown ids render a 404
"recipe unavailable" page. The `/.well-known/apple-app-site-association`
file stays a static asset - tapping a link on a phone with PrepWise
installed still opens the app directly and never hits this page.

Legacy static HTML at the repo ROOT — **NOT DEPLOYED**. `wrangler.toml` serves
assets from `./landing/out` only, so nothing at the repo root is reachable on the
live site. These were written for a `legal.prepwise.app` host that does not
resolve (verified 2026-07-26: `dig legal.prepwise.app` returns nothing).
- `index.html` → Legal docs index
- `privacy.html` → Privacy Policy
- `terms.html` → Terms of Use

The live legal pages are the Next.js routes `/privacy` and `/terms`. The root
copies are kept only as source history; their canonicals now point at the real
`www.prepwise-app.com` routes so they cannot leak the wrong domain if anything
ever does deploy them.

---

## Domain and canonical host

**Canonical host: `https://www.prepwise-app.com`.** One source of truth:
`SITE_URL` in `landing/src/lib/constants.ts`. `metadataBase`, every per-page
`alternates.canonical`, `robots.ts`, `sitemap.ts` and the JSON-LD all derive
from it.

**`prepwise.app` is NOT our domain.** It belongs to an unrelated exam-prep
company (verified: their AASA names Apple team `NLZRSDAJSX`; ours is
`2DDFX89NYB`). Until 2026-07-26 the deployed `robots.txt` pointed crawlers at
`https://prepwise.app/sitemap.xml` and the sitemap listed `https://prepwise.app/`
i.e. we were handing our crawl budget to someone else's site. Never write that
hostname into a canonical, sitemap, link, or config.

### robots.txt and sitemap.xml are GENERATED

`landing/src/app/robots.ts` and `landing/src/app/sitemap.ts` emit
`out/robots.txt` and `out/sitemap.xml` at build time. The four hand-kept files
(`robots.txt`, `sitemap.xml` at the repo root and under `landing/public/`) were
DELETED. They had drifted onto two different wrong hostnames and the root pair
was never deployed at all.

To add a page to the sitemap, add it to `SITE_ROUTES` in
`landing/src/lib/constants.ts`. `lastModified` there is a real CONTENT date, not
the build date; bump it when the page's content actually changes.

Both files carry `export const dynamic = "force-static"`. They are GET Route
Handlers, and under `output: "export"` the build FAILS without it.

### Apex → www redirect, and the two exemptions

`prepwise-app.com` (apex) 301s to `www.prepwise-app.com`, preserving path and
query, from `worker/index.js`. **Two paths are exempt and must stay exempt:**

| Path | Why it must NOT redirect |
|---|---|
| `/r/*` | Recipe-share Universal Links were minted on the APEX. The iOS app registers `associatedDomains: ['applinks:prepwise-app.com']` (apex only). |
| `/.well-known/*` | Apple requires the AASA to be served from the exact host in the link with **no redirect**. A redirect here silently breaks Universal Links for every existing share. |

`/.well-known/*` is exempted at the ROUTING layer (`!/.well-known/*` in
`run_worker_first`), so it is served straight from static assets and a worker bug
cannot take Universal Links down. `/r/*` is handled inside the worker, before the
redirect branch.

The redirect preserves the query string because the ad attribution chain depends
on it (`utm_content` → App Store `ct` token; see `landing/src/lib/analytics.ts`).

## Design

- Font: system font stack (-apple-system, BlinkMacSystemFont, etc.)
- Brand color: #1b2d4f (dark navy header)
- Link color: #2563eb
- Background: #f9f9f9
- Max content width: 760px (legal docs), 480px (index)

## Copy Style

- Never use em dashes (—) in user-facing copy — marketing text, headings, legal
  docs, meta descriptions. Use plain hyphens (-) or restructure the sentence.

## Deployment

### Cloudflare Pages Setup (one-time)

1. Log in to Cloudflare dashboard
2. Go to Workers & Pages → Create application → Pages
3. Connect to GitHub → select tmgavron/PrepWise-Info
4. Build settings:
   - Build command: (leave empty — pure static)
   - Build output directory: `/`
   - Root directory: `/`
5. Deploy

### Custom Domain

Both `prepwise-app.com` and `www.prepwise-app.com` are attached to the Worker.
Keep BOTH attached: the apex must keep answering directly so the worker can 301
it and so `/r/*` + `/.well-known/*` resolve there. See "Domain and canonical
host" above.

### Local Development

```bash
cd ~/repos/PrepWise-Info
npx wrangler pages dev .
# Serves at http://localhost:8788
```

### Manual Deploy (CLI)

```bash
cd ~/repos/PrepWise-Info
npx wrangler pages deploy . --project-name=prepwise-info
```

Requires `wrangler login` first (browser-based OAuth).

## Security Headers

Configured in `_headers`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- HTML: 1 hour cache
- Logo: 7 day immutable cache

## Updating Legal Documents

The LIVE legal pages are `landing/src/app/privacy/page.tsx` and
`landing/src/app/terms/page.tsx`. The root `privacy.html` / `terms.html` are not
deployed (see "Site Structure") and editing them changes nothing on the site.

1. Edit the route file under `landing/src/app/<privacy|terms>/page.tsx`
2. Update the `lastUpdated` prop passed to `LegalLayout`
3. Update the matching `lastModified` in `SITE_ROUTES`
   (`landing/src/lib/constants.ts`) so the generated sitemap stays honest
4. Commit and push. GitHub Actions builds `landing/` and deploys via wrangler.

## Next Phase — Enhancements

Future work:
- Add support/FAQ pages as integrated routes
- Add structured data (JSON-LD) for legal pages
- Replace App Store badge placeholder with official Apple badge
- Integrate real app screenshots into Hero phone mockups
- Finalize social media URLs when accounts are created
