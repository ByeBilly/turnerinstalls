# Turner Installs Suburb Floor Prep / Uplift Optimisation - 2026-09-10

## Scope

Billy said Liam wants all suburb pages optimised for floor preparation, uplift and removal, and remembered the strong uplift/truck photos.

This pass updates the shared generated suburb routes rather than editing suburb pages one by one.

## Changed

- Added `components/FloorPrepUpliftModule.tsx`.
- Added a dedicated floor preparation, uplift and removal section to all 90 `/flooring-installation/[suburb]` pages.
- Added the same uplift/removal module to dynamic `/locations/[region]/[suburb]` pages.
- Added the module to `/locations/[region]/[suburb]/floor-preparation` pages.
- Updated generated metadata on suburb pages to include floor prep, uplift and removal intent.
- Expanded flooring suburb service bullets to include old flooring uplift, tile/carpet/adhesive removal, concrete grinding and floor levelling.
- Added structured data service offers for flooring installation, uplift/removal, carpet tile removal, adhesive removal, concrete grinding and levelling.
- Reused real Turner images:
  - `/installspics/prep/uplift/We aim for minimal mess on the messiest uplifts.jpeg`
  - `/images/carpet-tile-removal-Murrarie.jpeg`
  - `/Liams-trucks/removerubbish.jpeg`
- Replaced two placeholder image alt strings that still said action/description required.

## Verification

- `npm run lint` passed.
- `npm run build` passed.
- Local sitemap at `http://localhost:3028/sitemap.xml` still returns 157 URLs.
- Local sitemap still has 90 `/flooring-installation/` URLs.
- Local sitemap still has 19 `/floor-preparation` URLs.
- Playwright/Chromium checks passed on mobile 390px and desktop 1440px for:
  - `/flooring-installation/oxley`
  - `/flooring-installation/graceville`
  - `/flooring-installation/carina`
  - `/flooring-installation/paddington`
  - `/locations/brisbane/graceville`
  - `/locations/brisbane/graceville/floor-preparation`
- Checked all sampled pages return 200, include uplift/removal copy, include truck/removal imagery, include carpet/uplift imagery and have no horizontal overflow.
- Scrolled-image load check confirmed the three uplift/removal module images load with non-zero natural dimensions.

## Evidence

- `ops/turnerinstalls/suburb-uplift-oxley-desktop.png`
- `ops/turnerinstalls/suburb-uplift-oxley-mobile.png`

