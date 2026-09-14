# Project Journal

## [2026-09-15] SEO / GEO Audit and Fix Pass

Full-site audit (live site + codebase) for Google ranking and LLM/AI-search
authority, focused on floor preparation. Findings and fixes below, in three
commits: `e8b5673` (schema/NAP/breadcrumbs), `a458e3a` (floor-prep images +
content), `93bc0bb` (leaflet dev fix).

### What was already strong (found, not changed)
- `/llms.txt`, `/ai.txt`, `/ai.json`, `/brand.txt`, `/identity.json` — real
  AI-discovery endpoints with citation permissions, rare for a trades site.
- All images already through `next/image`; no render-blocking fonts.
- JSON-LD on every service/location template; AS 1884-2021 cited correctly
  on the floor-preparation page (verified this is the real applicable
  standard — did **not** add AS 2796 when an external audit suggested it,
  since that's a hardwood sawn-timber grading standard, not a subfloor-prep
  one, and citing the wrong standard is worse than citing none).

### Schema / NAP / domain consistency (commit `e8b5673`)
- `lib/business.ts` is now the single source of truth for `BASE_URL`,
  address, geo coordinates, and the founder entity. Before this, the
  homepage schema, `identity.json`, and the AI-discovery routes each had
  their **own** copy of these values and had drifted: three different
  lat/long pairs (one was literally Brisbane CBD, not Oxley), and the
  AI-discovery routes used the bare domain while everything else used
  `www` — only worked live because of a 307 redirect.
- `lib/reviews.ts` + `components/ReviewsSchema.tsx`: reviews had 5-star
  ratings on the page with zero `AggregateRating`/`Review` schema behind
  them — no rich-result stars possible. Now computed from
  `data/reviews.json` automatically.
- `components/BlogPostingSchema.tsx`: blog posts had no `BlogPosting` or
  `Person` author schema despite crediting "By Liam Turner" in plain text.
- `components/Breadcrumbs.tsx`: breadcrumbs were JSON-LD-only (invisible)
  and only on 3 of 36 templates — critically, missing entirely from the
  `/locations/{region}/{suburb}/floor-preparation` pages, which the
  sitemap's own comments call the money-keyword pages. Now on 233 of 235
  sitemap URLs (only `/` and `/privacy-policy` intentionally excluded).
- Fixed 5 pages with double-branded `<title>` tags ("X | Turner Installs"
  getting the layout template's own "| Turner Installs" appended again).
- Fixed a stale phone number (`07 4802 2388`) on the contact page/legacy
  layout that didn't match the real number used everywhere else.

### Floor-prep differentiation (commit `a458e3a`)
- **Images**: every floor-prep suburb page (all 90 of them, after the
  suburb-list merge below) was rendering the *same three photos*. Built
  `siteImages.floorPrep.gallery`, a 22-photo pool from real, previously
  unused Turner Installs job photos across `public/installspics/prep/*`,
  and rotate each suburb page through it by a hash of `region-slug`.
  Verified live: every suburb now shows a different set.
- **Broadbeach** was showing a photo literally named
  `Showroom-Carrara-Gold-Coast1.jpeg` — the second angle of the Carrara
  suburb page's own showroom shoot, right next to it in `/service-areas`.
  Swapped to a distinct, unused, real Gold Coast photo.
- **Text — the bigger issue**: found 61 of the 90 `flooringInstallationSuburbs`
  entries shared one identical template across `introParagraph`,
  `localRelevance`, AND `whyChooseLocal` simultaneously — word-for-word
  except the suburb name (e.g. Grange, Lutwyche, Yeronga, McDowall, and 57
  others read exactly the same). This fed both the 90
  `/flooring-installation/{suburb}` pages directly and, via
  `suburb.description`, ~73 of the floor-prep pages. Rewrote all 61 with
  genuinely unique text, grounded in real verified facts (distance/
  direction from CBD, housing era, elevation/riverside/acreage character,
  known landmarks — via web search, not invented). Re-ran a duplicate-
  template scan after: **0 of 90 suburbs share a template now, on any of
  the three fields.**
- Two broken image references fixed in `siteImages.ts` — one was the
  sitewide OG/social-share image (`layout.tsx`, `page.tsx`, and
  `/locations/brisbane` were all pointing at a path that moved during the
  Jan 2026 image consolidation and was never updated).
- Compressed 60 oversized source photos with `sharp` (already a
  dependency): `public/installspics` 156MB → 61MB, `public/images` ~25MB
  → 6.2MB, max 2400px edge / quality 82, no visible quality loss.

### The Jack (calculationtime.com) commit already on origin/main
Mid-session, found commit `c5ef0ee` ("fix: include all floor prep suburb
pages in sitemap") already on `origin/main`, not in local history — pushed
directly by `jack@calculationtime.com` (the flooring-calculator partner
from `docs/calculationtime-flooring-calculator-link.md`) on 2026-09-10.
**Confirmed with Liam this was expected** — he has repo access. The commit
merged `suburbs.ts` (19 curated) with `flooringInstallationSuburbs.ts` (90
entries) into `floorPreparationSuburbs`, taking the floor-prep suburb page
count from 19 to ~92 (this is why GSC showed 235 discovered pages, not the
158 the pre-merge local sitemap produced — both numbers were "correct" for
their respective states, just out of sync). Pulled it in via
`git stash` → `git merge` (fast-forward) → `git stash pop`, resolved the one
real conflict in `sitemap.ts` by hand, then found and fixed the same
single-hardcoded-image problem in Jack's ~73 auto-generated entries that
this whole pass was already fixing for the original 19.

### react-leaflet Strict Mode fix (commit `93bc0bb`)
Homepage service-area map (`components/ServiceAreaMap.tsx`) crashed with
"Map container is already initialized" — a known react-leaflet/React 18+
Strict Mode dev-only incompatibility, unrelated to anything else this
session. Set `reactStrictMode: false` in `next.config.mjs` (dev-only
effect, doesn't touch the production build) plus a defensive per-instance
`key` on `MapContainer`.

### For a future session — quick orientation
- **`lib/business.ts`** is now where BASE_URL/address/geo/founder live.
  If you're touching schema anywhere, import from there — don't hardcode.
- **`data/flooringInstallationSuburbs.ts`** (90 entries) and
  **`data/suburbs.ts`** (17 curated + `floorPreparationSuburbs` = the
  merged ~94) both feed suburb pages. `getFloorPreparationSuburb(slug,
  region)` is what `/locations/[region]/[suburb]/floor-preparation`
  actually uses — not `getSuburb`. (Corrected from "19 curated" above —
  it's 17.)
- **`siteImages.floorPrep.gallery`** is the rotation pool for floor-prep
  suburb photos. Add new real job photos there, don't hand-pick per page.
- **Jack (`jack@calculationtime.com`) has push access to this repo** and
  pushes directly to `main` without a PR — confirmed with Liam this is
  expected. Worth a `git fetch` + `git log origin/main -3` at the start
  of any future session before assuming local HEAD matches production.
- `seoTitle`/`metaDescription` fields on `flooringInstallationSuburbs`
  entries are dead code (never rendered) — don't bother "fixing" those.
- No QBCC licence number anywhere on the site despite "Fully Licensed &
  Insured" being claimed (`components/TrustBar.tsx`) — needs Liam to
  confirm the actual number. `sameAs` in `lib/business.ts` only has the
  Google review URL; add GBP/Facebook/Instagram once those are live.
  Liam confirmed the business has no social media channels yet, so live
  Facebook Sharing Debugger / LinkedIn Post Inspector / Twitter Card
  Validator checks were parked — do them once a channel exists, or the
  first time anyone actually shares a page link anywhere.

### [2026-09-15, later same day] Meta titles/descriptions, OG coverage, suburb interlinking, dynamic OG images

Follow-up pass, commits `e52effc` and `3444b7e`.

- **Fixed the title/description templating flagged above**: both suburb
  page templates were producing titles/descriptions that exceeded safe
  SERP display limits on nearly every suburb (90/90 titles over ~60
  chars, 87/90 descriptions over ~158 chars) — meaning most were being
  truncated in the actual search snippet, or long enough that Google
  would likely rewrite them entirely. Shortened both templates and
  verified against the longest suburb name in each list.
- **OG/Twitter coverage gap**: found 24 pages — every service page, all
  6 regional hubs, and about/reviews/commercial/residential/contact/blog
  /flooring-installation-brisbane/service-areas — had no `openGraph` or
  `twitter` metadata at all, so every social/message-app share fell back
  to one generic sitewide image regardless of the page. Added
  page-specific OG + Twitter Card blocks to all 24, reusing each page's
  own already-written title/description, paired with a contextually
  relevant real photo (proper width/height/alt, not a bare URL string).
- **Neighbouring-suburb link mesh**: added `nearbySuburbs` to
  `SuburbData`, wrote real verified adjacency lists for all 17 curated
  suburbs (checked against the actual set of suburbs with a floor-prep
  page — no dead links, no padding to a fake count), carried the field
  through the merge for the other 73. New
  `components/NearbySuburbsMesh.tsx` renders "Serving X & Surrounding
  Suburbs" on every floor-prep suburb page.
- **Dynamic per-suburb OG images**: added
  `.../floor-preparation/opengraph-image.tsx` using the Next.js file
  convention (`ImageResponse`) — composites the suburb name onto that
  suburb's real, already-assigned photo. Actually fetched and visually
  checked the generated PNG for two different suburbs before calling it
  done, not just trusting it compiled. Build stays fast (~6s) because
  the image renders on-demand per request rather than pre-rendering all
  90+ suburbs.
- **Declined a pasted "elite SEO" brief's fabricated claims** rather than
  implementing them: it asserted "Liam Turner, QBCC Licensed" (still
  unverified — see above), a "≤3mm over 3m" tolerance that contradicts
  the site's own published "1mm over 2m" figure, and
  AS/NZS 1080.1 / ASTM F2170 as compliance standards not verified as
  actually used. Also declined restructuring URLs into a new nested
  `/services/floor-preparation/{suburb}` scheme, since that would mean
  rebuilding the routing for all 235 already-indexed pages for no
  verified benefit. If asked to revisit any of this, verify first —
  don't take a pasted brief's technical claims at face value just
  because they read confidently.

## [2026-01-30] Image Consolidation and Refactor
- Consolidated all flooring images from various folders (`/public/images`, `/public/new_gen`, etc.) into a structured `/public/installspics/{prep, damage, finished, etc}` directory.
- Created `data/siteImages.ts` as the single source of truth for image assets.
- Refactored `Floor Preparation`, `Concrete Grinding`, and `Commercial` pages to use data-driven imagery.
- Introduced `ImageGrid` (Unacceptable vs Ready) and `BeforeAfterGallery` components for better storytelling.
- Verified build and pushed to main.

## [2026-01-XX] Initial Handover
- Prepared deployment documentation.

## [2026-01-30] Image Directory Semantics (User Definition)
- `/public/installspics/finished`: **Completed** installations. Projects that are 100% done.
- `/public/installspics/laying`: **In-Progress** shots. Used to show the "work happening" (e.g., cutting tables, glues, tools).
- `/public/installspics/prep`: **Subfloor Preparation**. Contains specific subfolders for `damage`, `floods`, `level`, `grinding`, etc.
- **Rule**: Gallery on Homepage should ONLY use `finished` images.
- **Rule**: "Laying" images are for process explanation sections.

## [2026-02-01] Asset Organization & Cleanup
- Created `public/site_content_resources` to store text content (moved `ipswich.txt` there).
- Moved finished installation images from `public/newlyadded` to `public/installspics/finished`.
- Moved promo images (`hiddenmistake_promo.png`, `lifetime_foundation_promo.png`) from `public/newlyadded` to `public/installspics/promo`.
- Verified build status (investigating current failure).
