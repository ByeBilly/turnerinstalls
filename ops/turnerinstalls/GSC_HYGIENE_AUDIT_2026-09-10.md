# Turner Installs GSC Hygiene Audit - 2026-09-10

## Summary

Billy asked for TurnerInstalls.com.au to be sorted after Liam granted full Google Search Console access and noted concern that the site may have more than 100 pages.

The sitemap count is intentional local-SEO scale, not a mystery:

- 90 flooring-installation suburb pages.
- 34 dynamic location/floor-preparation pages.
- 8 blog posts.
- 25 static public pages after cleanup.
- 157 total sitemap URLs after removing non-page helper URLs and one duplicate service URL.

## Safe Local Fixes Applied

- Removed AI helper endpoints from `sitemap.xml` submission:
  - `/llm.txt`
  - `/llms.txt`
  - `/ai.txt`
  - `/ai.json`
  - `/brand.txt`
  - `/identity.json`
- Kept those helper endpoints live via rewrites, but no longer submitted them as page URLs.
- Removed duplicate `/services/industrial-prep` from the sitemap.
- Added a `301` redirect from `/services/industrial-prep` to `/services/industrial-surface-prep`.
- Added explicit canonical and index/follow metadata to:
  - dynamic suburb location pages
  - dynamic suburb floor-preparation pages
  - blog index and blog detail pages
  - commercial, overview, privacy policy, reviews
  - regional location hubs
  - service pages that were inheriting the homepage canonical
- Added `noindex, nofollow` metadata for the internal PumpPosts prototype area:
  - `/pumpposts`
  - `/pumpposts/dashboard`
  - `/pumpposts/accounts`
  - `/pumpposts/posts`
- Fixed the typo `Specalist` to `Specialist` in dynamic suburb metadata.

## Verification

- `npm run build` passed.
- Local sitemap now has `157` URLs.
- Sitemap non-page `.txt`/`.json` URLs: `0`.
- Sitemap URLs returning non-200 locally: `0`.
- Sitemap HTML pages missing canonical: `0`.
- Sitemap canonical mismatches: `0`.
- Sitemap pages with noindex: `0`.
- Internal links checked from sitemap pages: `156` unique internal routes.
- Broken/redirecting internal links found: `0`.
- `/services/industrial-prep` returns `301` to `/services/industrial-surface-prep`.
- PumpPosts pages render `noindex, nofollow`.
- Mobile 390px and desktop 1440px smoke tests passed with no horizontal overflow on:
  - `/`
  - `/service-areas`
  - `/flooring-installation/oxley`
  - `/locations/brisbane/graceville`
  - `/locations/brisbane/graceville/floor-preparation`
  - `/services/industrial-surface-prep`
  - `/blog/best-flooring-for-queenslander-homes-brisbane`

## Evidence

- `ops/turnerinstalls/gsc-hygiene-2026-09-10/audit.json`
- `ops/turnerinstalls/gsc-hygiene-2026-09-10/visual-checks.json`

## GSC Judgment

More than 100 URLs is not automatically bad for Turner Installs. The risky parts were:

- non-page helper files submitted as sitemap URLs,
- public pages inheriting the homepage canonical,
- one duplicate industrial service URL,
- internal PumpPosts prototype pages being crawlable without a noindex boundary.

Those have been fixed locally. The next GSC pass should inspect actual example URLs from Google's Page indexing buckets before deleting any of the 90 suburb pages.
