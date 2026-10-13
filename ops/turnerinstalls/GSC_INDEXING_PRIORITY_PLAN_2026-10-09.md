# Turner Installs GSC Indexing Priority Plan - 2026-10-09

## Current Read

The large unindexed count does not currently look like a site-wide technical block.
Live search results show Google has crawled and surfaced Turner pages including the
homepage, Graceville location page, Graceville floor-preparation page, and several
other local pages. The better diagnosis is selective crawl/index priority across a
large local SEO footprint.

Current live sitemap count:

- 235 total URLs.
- 90 `/flooring-installation/*` suburb pages.
- 94 suburb `/floor-preparation` pages.
- 23 location suburb/region pages.
- 8 blog posts.
- 20 static/service/other pages.

This is a lot of near-template local page surface for a small local trade site.
The pages are indexable, but many still need stronger reasons for Google to spend
index budget on them: real job proof, stronger internal links from hubs, and clearer
local differentiation.

## What To Do In GSC First

Use URL Inspection manually only for the strongest pages. Do not burn request quota
on the weakest long-tail suburbs yet.

For each priority URL:

1. Run `Test live URL`.
2. Confirm `URL is available to Google`.
3. Open the screenshot and rendered HTML.
4. Confirm the H1/body are visible, not a blank hero.
5. Confirm no blocked DoubleClick/GTM resources are the main issue.
6. Click `Request indexing`.

If a page is already indexed, skip the request and move to the next one.

## Top 20 Request/Upgrade Order

| Rank | URL | Why this one first | Before requesting, strengthen with |
|---:|---|---|---|
| 1 | `/` | Highest authority page and already appearing in search. | Keep clean, fast, and consistent with GBP NAP/hours. |
| 2 | `/flooring-installation-brisbane` | Main hub for the 90 installation suburb pages. | Add stronger links to top suburbs and "real project photo" proof. |
| 3 | `/services/floor-preparation` | Core money service and hub for floor-prep suburb pages. | Add direct links to Graceville, Oxley, Sherwood, Chelmer, Indooroopilly prep pages. |
| 4 | `/flooring-installation/oxley` | Liam's home base, strongest proximity signal. | Add one or two real Oxley job entries if available. |
| 5 | `/flooring-installation/graceville` | Already inspected; premium nearby suburb; recent render fix target. | Confirm GSC screenshot now renders hero/body; add real Graceville proof when available. |
| 6 | `/locations/brisbane/graceville/floor-preparation` | Google already surfaces it; strong heritage/prep relevance. | Keep as a proof page and link back to Graceville installation page. |
| 7 | `/locations/brisbane/graceville` | Already appearing in search; strong local landing page. | Add/confirm visible links to install + prep variants. |
| 8 | `/flooring-installation/sherwood` | Nearby to Oxley/Graceville and crew location proof. | Add job proof or at least stronger nearby mesh from Oxley/Graceville. |
| 9 | `/locations/brisbane/sherwood/floor-preparation` | Nearby, service-specific, crawler-visible. | Add a Sherwood job/photo if Liam has one. |
| 10 | `/flooring-installation/chelmer` | Premium river/heritage suburb; already surfaced in search. | Add project proof and cross-link to Graceville/Sherwood/Indooroopilly. |
| 11 | `/locations/brisbane/chelmer/floor-preparation` | Google already surfaces it; high local relevance. | Add "heritage/riverside moisture-aware prep" proof section. |
| 12 | `/flooring-installation/corinda` | Very close to Oxley, good commercial logic. | Add internal links from Oxley/Graceville/Sherwood pages. |
| 13 | `/locations/brisbane/corinda/floor-preparation` | Close local prep page, surfaced in search. | Add Corinda-specific prep/job proof if available. |
| 14 | `/flooring-installation/kenmore` | Premium western suburb, already surfaced. | Add Kenmore project photos already present in assets. |
| 15 | `/locations/brisbane/kenmore/floor-preparation` | Existing gallery images and strong renovation intent. | Add clearer link from Kenmore installation page. |
| 16 | `/flooring-installation/indooroopilly` | High-search western suburb, apartment + heritage mix. | Add location-specific proof and link to floor-prep page. |
| 17 | `/locations/brisbane/indooroopilly/floor-preparation` | Surfaced in search; strong prep intent. | Add "rubbish removed / clean handover" proof and local landmarks. |
| 18 | `/flooring-installation/paddington` | High-value heritage market, existing project photos. | Add Paddington-specific job proof/gallery captions. |
| 19 | `/flooring-installation/new-farm` | High-value inner suburb, existing project photos. | Add New Farm apartment/Queenslander proof and cross-links to Teneriffe/Newstead. |
| 20 | `/locations/brisbane/the-gap/floor-preparation` | Surfaced in search; hilly/split-level prep differentiates it. | Add proof around ramping/uneven subfloors and link from The Gap install page. |

## Do Not Prioritise Yet

Hold off manually requesting indexing for the broad long-tail pages until the top
cluster is stronger:

- the many later `/flooring-installation/*` suburbs whose `nearbySuburbs` all point
  to the same generic Paddington/New Farm/Bulimba/Indooroopilly/Toowong/Bardon set;
- auto-generated floor-prep pages without suburb-specific jobs, landmarks, or photos;
- any page where the screenshot/rendered HTML still shows a blank hero/body.

Those pages may still be useful, but requesting them before the core cluster has
authority is likely to waste GSC request quota.

## Most Likely Cause Of Many Unindexed Pages

The site has a real sitemap and indexable canonicals, but it now submits 235 URLs.
About 184 of those are two families of generated suburb pages:

- flooring installation suburb pages;
- suburb floor-preparation pages.

Google is probably deciding many of those are not yet distinct enough or important
enough to index quickly. This matches the September SEO audit finding that the suburb
pages had high shared-template text and needed real `recentJobs` content.

## Highest Impact Fix Before A Wider Requesting Push

Add real `recentJobs` data to the top suburbs first:

- Oxley
- Graceville
- Sherwood
- Chelmer
- Corinda
- Kenmore
- Indooroopilly
- Paddington
- New Farm
- The Gap

Two real jobs per suburb is ideal. Each should include the suburb, service, rough
scope, date/month, and a real project image where available. This turns the pages
from "local template page" into "local evidence page".

## Suggested Next Build Block

Create a focused "top suburb proof pack" rather than trying to upgrade all 184 local
pages at once:

1. Add/collect real job proof for the top 10 suburbs.
2. Strengthen the Brisbane installation hub and floor-prep service hub to link to
   those 10 pages as priority areas.
3. Ensure each priority suburb links to its matching install/prep pair.
4. Rebuild and check sitemap/canonicals/render screenshots.
5. Then request indexing in GSC for the top 20 list above.

