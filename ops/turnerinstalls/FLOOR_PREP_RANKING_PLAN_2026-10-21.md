# Turner Installs: Floor Prep Ranking Plan (2026-10-21)

Goal: rank for flooring installation where floor preparation is needed
("floor preparation brisbane", "floor levelling brisbane", "hybrid over tiles",
"flooring installation <suburb>").

## Baseline from Search Console (3 months to 2026-10-20)

- 46 clicks, 4.12K impressions, average position 26.9. Clicks are almost all brand searches.
- "floor prep brisbane" / "floor preparation brisbane": 99 impressions each, position about 19, 0 clicks.
- "floor levelling brisbane" 27 @ 40, "floor levelling gold coast" 29 @ 11, "floor preparation sunshine coast" 14 @ 8,
  "floor preparation springwood" 10 @ 2.4, "flooring installation brisbane" 56 @ 38.
- Indexing: 73 indexed, 165 not. 154 are "Discovered - currently not indexed", meaning Google found them but has not crawled them.
  These include /about, /services, /flooring-installation-brisbane, /locations/brisbane and most service pages.
- /services/floor-preparation (the money page): "Crawled - currently not indexed", last crawled 2026-06-10.
- Googlebot crawled most of the site once around 12-13 Sep and has barely returned since.
- The apex https://turnerinstalls.com.au/ gets its own impressions (242) because it 307-redirects (temporary) to www.

Diagnosis: Google is rationing crawl on a small site with 242 URLs, about 184 of them near-template suburb pages.
Two pages per suburb (install + floor-prep) competed for the same searches. The flagship prep page was thin and generic.

## Phase 1: Done on branch `seo/floor-prep-push` (not published)

1. Consolidation: the 76 generated `/locations/brisbane/<suburb>/floor-preparation` pages with no real jobs
   now 308 to `/flooring-installation/<suburb>`, which already carries the prep section (now `#floor-preparation`).
   Curated suburbs and any suburb with real jobs keep their prep page. Sitemap: 242 -> 169 URLs.
2. Suburb install pages: title "<Suburb> Flooring Installation & Floor Prep"; meta describes prep and install by one crew.
3. /services/floor-preparation rebuilt (about 2,200 words): prep-and-install by one crew, prep by floor type,
   common situations, process, real Spring Hill and Toowong prep jobs, local prep pages, guides, 8 FAQs + schema.
4. Three guides: "Do you need floor preparation before new flooring?", "Can you lay hybrid flooring over tiles?",
   "Floor levelling before new flooring: grinding vs self-levelling". The blog renderer now supports internal links.
5. Brisbane hub: title "Flooring Installation Brisbane, Floor Prep Included" plus a prep-first section.

Verified locally: build, tsc and lint pass; 169/169 sitemap URLs return 200; 0 broken or redirecting internal links;
retired URLs return a real 308 (also to Googlebot); no page-level horizontal scroll at 390px.

## Phase 2: On publish (Billy says "publish")

1. Merge to main (one paid build).
2. In GSC, URL Inspection -> Request indexing (about 10 a day), in this order:
   /services/floor-preparation, /flooring-installation-brisbane, the 3 new guides, /services,
   /locations/brisbane, /about, /services/floor-levelling, /services/concrete-grinding,
   /locations/brisbane/spring-hill/floor-preparation, /locations/brisbane/toowong/floor-preparation.
3. Resubmit sitemap.xml in GSC.

## Phase 3: Needs Billy or Liam (not codeable)

1. Vercel -> Domains: change the apex turnerinstalls.com.au redirect from 307 to 308.
2. Point turnerinstalls.com / www.turnerinstalls.com web records at Vercel as 308 redirects (leave MX alone).
3. Google Business Profile: add "Floor preparation", "Floor levelling", "Concrete grinding" as services.
   Post every prep job with photos. Hours must read Mon-Sat 7-5.
4. Reviews: ask each prep customer to mention the job and suburb ("floor levelling in Sherwood").
5. Keep sending job photos; prep-led photos go on floor-preparation pages (pipeline unchanged).
6. Citations / links: Hipages, Oneflare, Yellow Pages, True Local, Houzz with identical NAP; ask flooring suppliers
   who refer installers (hybrid/vinyl stores) for a listing link.

## Phase 4: Weeks 2-8, measure and iterate

- Week 2: check that "Discovered - currently not indexed" is falling and the new pages are indexed.
- Week 4: Performance filtered to queries containing "prep|level|grind|tiles". Target: "floor preparation brisbane" top 10.
- If "floor levelling gold coast" / "floor preparation sunshine coast" stay at 8-11, strengthen those region pages with real jobs.
- Consider the same consolidation for /services/floor-levelling vs /services/floor-levelling-concrete-grinding
  vs /services/concrete-grinding (three near-duplicates) once data shows which one Google prefers.
- Next guide candidates from queries: "commercial floor preparation brisbane", "adhesive removal flooring",
  "floor removal services".
