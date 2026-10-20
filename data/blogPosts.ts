/**
 * Blog posts for local SEO and community content
 * Target: Brisbane flooring, renovation, Queenslander guides
 */

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    author: string;
    category: string;
    metaDescription: string;
    /** Suburbs/areas mentioned for internal linking */
    relatedSuburbs?: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "do-you-need-floor-preparation-before-new-flooring",
        title: "Do You Need Floor Preparation Before New Flooring?",
        excerpt: "How to tell whether your slab or subfloor needs grinding, levelling or repairs before new hybrid, vinyl, laminate or timber goes down, and what happens if it is skipped.",
        metaDescription: "Do you need floor preparation before new flooring? How Brisbane installers check flatness, moisture and soundness, and what prep hybrid, vinyl and timber need.",
        publishedAt: "2026-10-21",
        author: "Liam Turner",
        category: "Guides",
        relatedSuburbs: ["oxley", "toowong", "graceville", "springwood"],
        content: `
Short answer: almost every floor needs some preparation, and the amount depends far more on the new flooring than on how the old floor looks. A slab that seems fine under carpet can be well outside what a hybrid or vinyl plank manufacturer allows. This guide covers what we check on every Brisbane job and what each result means for your quote.

## Why preparation decides whether a new floor lasts

Every flooring product comes with an installation guide, and the warranty is judged against it. Those guides set three basic requirements for the surface underneath: it has to be **flat**, **dry** and **sound**. When a floor fails, the manufacturer's first question is whether the substrate met those requirements. If it did not, the warranty usually does not apply, however good the product was.

The failures are familiar. Hybrid planks that click or flex underfoot. Laminate that bounces. Glue-down vinyl that shows every dip and trowel mark when the afternoon sun comes through the window. Timber that lifts at the joins. Nearly all of them trace back to the base.

## Check 1: Is the floor flat enough?

Flatness is checked with a long straightedge or a laser, looking for highs and lows across the room rather than whether the floor is level end to end. Floating floors like hybrid and laminate are sensitive to dips because the rigid planks bridge them, and the joints take the load every time someone walks over. Thin glue-down vinyl is the most demanding of all because it follows every bump.

Each manufacturer sets its own tolerance, commonly a few millimetres under a 2 to 3 metre straightedge, so we always check against the guide for the exact product you have chosen. Fixing it usually means [grinding the high spots](/services/concrete-grinding) and filling or flood-coating the lows with self-levelling compound. Our guide to [grinding vs self-levelling](/blog/floor-levelling-before-new-flooring-brisbane) explains when each is used.

## Check 2: Is the slab dry enough?

Concrete holds moisture, especially slabs on ground, wet areas, new builds and anywhere that has had a leak. Moisture breaks down flooring adhesives and can cause mould and swelling under floating floors. We take moisture readings on concrete before quoting the install. If the readings are high, a [moisture barrier](/services/moisture-barriers) goes down before the flooring, or the install waits until the slab has dried.

## Check 3: Is the surface sound and clean?

New adhesive will not grip old adhesive, paint, dust or weak surface concrete. Tiles that sound hollow when tapped (drummy tiles) will move under a new floor. Timber subfloors with loose sheets or high joints will squeak and telegraph through. Sound and clean means:

- old carpet, underlay, smoothedge and staples removed
- old adhesive, paint and contamination ground off ([adhesive removal](/services/adhesive-removal))
- cracks and holes patched
- loose timber re-fixed and high joints planed ([subfloor repairs](/services/subfloor-repairs))

## What prep each floor type usually needs

- **Hybrid / SPC:** grind the highs, fill the lows, check flatness. Can sometimes go over flat, well-bonded tiles. See [hybrid flooring over tiles](/blog/hybrid-flooring-over-tiles-brisbane).
- **Laminate:** flat slab, moisture barrier underlay on concrete, firm subfloor.
- **Glue-down vinyl plank or sheet:** grind to clean concrete, moisture test, prime and skim or self-level for a smooth surface.
- **Engineered or solid timber (glue-down):** clean, sound, dry and flat, with a moisture barrier if readings call for one.
- **Carpet:** the most forgiving, but lumps, old glue and cracks still need dealing with.

## Signs your floor will need more than a quick clean

- you are replacing tiles, or the room had tiles at some point
- the old floor was glued down (vinyl, lino, glued timber, carpet tiles)
- you can see dips, cracks or patched areas once the carpet is up
- doors already scrape, or furniture rocks on the old floor
- it is an apartment or a new build (slabs are often less flat than people expect)
- there is a history of leaks or a wet area next to the new floor

## Why prep and install should be quoted together

When one trade prepares the floor and another installs, a failed floor turns into an argument about whose fault it was. We quote the uplift, the [floor preparation](/services/floor-preparation) and the installation together, check the floor against your product's requirements before we start, and the same crew that prepared the substrate lays the floor on it.

## Get your floor checked

Send us a few photos of the floor as it is now, and tell us what you plan to lay. We will tell you what prep it is likely to need and give you one quote for the whole job. We are based in Oxley and work across Brisbane, Ipswich, Logan, Moreton Bay, the Gold Coast and the Sunshine Coast.
        `.trim(),
    },
    {
        slug: "hybrid-flooring-over-tiles-brisbane",
        title: "Can You Lay Hybrid Flooring Over Tiles?",
        excerpt: "When hybrid planks can go straight over existing tiles, when the tiles have to come up, and what prep makes either option last.",
        metaDescription: "Can you lay hybrid flooring over tiles? When it works, when tiles must come up, and the grinding and levelling prep Brisbane floors usually need first.",
        publishedAt: "2026-10-21",
        author: "Liam Turner",
        category: "Guides",
        relatedSuburbs: ["springwood", "shailer-park", "carina", "manly"],
        content: `
It is one of the most common questions we get: can the new hybrid floor go straight over the old tiles? Sometimes it can, and it saves a day of mess and the cost of uplift. Often it cannot, and laying over tiles that are not right is one of the most reliable ways to wreck a new hybrid floor. Here is how we decide.

## When hybrid can go over tiles

Hybrid (SPC) planks are a floating floor, so they do not need to be glued to the tiles. Laying over existing tiles can work when all of these are true:

- **The tiles are firmly bonded.** No hollow, drummy sound when tapped, no cracked or loose tiles.
- **The tiled floor is flat.** It meets the flatness tolerance in the hybrid manufacturer's installation guide.
- **The edges are even.** No lippage, where one tile edge sits proud of the next.
- **Wide or deep grout lines are filled**, so the planks are not bridging lots of small gaps.
- **The extra height works.** Doors, thresholds, the kitchen kickboard and dishwasher space can take the extra thickness.

If the tiles pass, the prep is usually some grinding of high edges and a skim of the grout lines, then the underlay and planks go down.

## When the tiles have to come up

- **Drummy tiles.** Hollow tiles move, crack and eventually let go. Anything laid over them moves with them.
- **Uneven tiles or a sloping, wavy floor.** The rigid hybrid core bridges the dips and the click joints take the load until they squeak, gap or split.
- **Lippage.** Each raised tile edge becomes a ridge under the planks.
- **Height problems.** Doors that would need cutting, or a step at the threshold to the next room.
- **Moisture.** Tiles in wet areas, or near them, can hide a damp slab.

## What happens after tile uplift

Taking tiles up leaves a ridged bed of tile adhesive and sometimes damaged patches of slab. The floor is not ready for hybrid yet. The usual sequence is:

- tiles and adhesive mechanically removed, with dust extraction
- the slab [ground back](/services/concrete-grinding) to a clean, flatter surface
- cracks and holes patched
- low spots filled, or the whole area flood-coated with [self-levelling compound](/blog/floor-levelling-before-new-flooring-brisbane)
- flatness checked against the hybrid manufacturer's tolerance before laying

## Do it once

The cheapest hybrid floor is the one that does not have to be lifted and relaid in two years. If you are not sure whether your tiles can stay, a quick look and a tap-test usually answers it. Because we do the [floor preparation](/services/floor-preparation) and the hybrid installation as one job, you get one price for whichever option your floor needs, and nobody can blame the tiles later.

Send us photos of the tiled area, tell us which hybrid you are looking at, and we will tell you whether the tiles can stay. More on the checks we do in [do you need floor preparation before new flooring](/blog/do-you-need-floor-preparation-before-new-flooring).
        `.trim(),
    },
    {
        slug: "floor-levelling-before-new-flooring-brisbane",
        title: "Floor Levelling Before New Flooring: Grinding vs Self-Levelling",
        excerpt: "What grinding and self-levelling compound each fix, why most uneven Brisbane slabs need both, and how levelling fits into a flooring install.",
        metaDescription: "Floor levelling before new flooring in Brisbane: when to grind, when to self-level, why most uneven slabs need both, and how cure time fits the install.",
        publishedAt: "2026-10-21",
        author: "Liam Turner",
        category: "Guides",
        relatedSuburbs: ["spring-hill", "toowong", "new-farm", "south-brisbane"],
        content: `
"Floor levelling" covers two quite different jobs: taking material off the high spots, and adding material to the low spots. Knowing which one your floor needs, or more often both, explains most of the difference between floor prep quotes.

## Flat is not the same as level

A level floor is horizontal. A flat floor has no humps or hollows along its surface. Flooring manufacturers mostly care about **flatness**: whether a long straightedge sits evenly on the floor, without gaps under it or rocking over a hump. A slab can fall gently towards a door and still be flat enough for hybrid, while a perfectly level slab with a ridge in the middle is not.

## Grinding: taking the highs off

Concrete grinding removes material. It is the right tool for:

- ridges, trowel marks and humps from when the slab was poured
- lips at joins between old and new slab
- tile adhesive, carpet glue, paint and other contamination
- weak, dusty surface concrete that new adhesive will not hold to

We grind with dust extraction, so the rest of the house is not coated in concrete dust. More on [concrete grinding](/services/concrete-grinding).

## Self-levelling compound: filling the lows

Self-levelling compound is a cement-based product mixed to a pourable consistency. Once primed, it flows across the slab and finds its own level, filling hollows and leaving a smooth, flat surface. It can be used to:

- fill individual low spots
- flood-coat a whole room when the floor is wavy everywhere
- ramp a gradual transition between two floor heights
- give thin glue-down vinyl the smooth surface it needs

Each product has its own range of thickness per application and a cure time before flooring can go on top, from overnight to a couple of days depending on product and depth.

## Why most uneven floors need both

Pouring compound over a slab with high ridges means pouring enough to bury the ridges, which uses a lot of material and adds height. Grinding a floor with deep hollows means grinding the whole floor down to the bottom of the hollow, which is impractical. So the usual answer is to grind the highs first and then level the lows.

That is what we did on a recent [Spring Hill](/locations/brisbane/spring-hill/floor-preparation) job: the slab was very uneven, so the worst high spots were ground down first, then engineered self-levelling compound was flood-coated across the floor and carried through the doorway so there was no hump between rooms. In a [Toowong](/locations/brisbane/toowong/floor-preparation) apartment the slab only needed patching and smoothing across the living area before the planks went down.

## How levelling fits into a flooring install

- **Day 1:** uplift, grind, patch, prime and pour.
- **Cure:** the compound cures. This is where jobs split between two trades often stall.
- **Install:** flatness is checked and the new floor goes down.

Because we do the [floor preparation](/services/floor-preparation) and the installation as one job, the install is booked around the cure time and the crew laying the floor is the one that levelled it. If you are budgeting, our [floor preparation cost guide](/blog/floor-preparation-cost-brisbane-what-to-expect) covers what drives the price, and [floor levelling](/services/floor-levelling) has more on the levelling itself.
        `.trim(),
    },
    {
        slug: "best-flooring-for-queenslander-homes-brisbane",
        title: "Best Flooring for Queenslander Homes in Brisbane",
        excerpt: "Queenslander homes present unique flooring challenges. Here's how to choose and install the right flooring for your Brisbane character home.",
        metaDescription: "Expert guide to flooring for Queenslander homes in Brisbane. Timber, hybrid, vinyl options for heritage subfloors. Subfloor prep, humidity, and renovation tips.",
        publishedAt: "2025-03-01",
        author: "Liam Turner",
        category: "Guides",
        relatedSuburbs: ["paddington", "new-farm", "graceville", "bardon"],
        content: `
Queenslander homes are iconic to Brisbane—elevated, timber-framed, and full of character. But their unique construction creates specific flooring challenges. Here's what you need to know when choosing flooring for your Queenslander.

## The Queenslander Subfloor Challenge

Queenslanders typically have timber subfloors—often original hardwood or particle board over joists. These subfloors move with humidity, can be uneven after decades of settling, and may have layers of old glue, lino, or carpet adhesive. Before any new flooring goes down, the subfloor must be stabilised and level.

**Key considerations:**
- **Subfloor condition:** Timber subfloors often need strengthening, ramping, or repair before new flooring
- **Humidity:** Brisbane's humidity causes timber to expand and contract—choose flooring that accommodates this
- **Height transitions:** Extensions and renovations may create level changes that need ramping
- **Heritage requirements:** Some Queenslanders have heritage overlays—check with council

## Best Flooring Types for Queenslanders

**1. Timber flooring** – The classic choice. Solid timber or engineered timber suits Queenslanders when the subfloor is properly prepared. We stabilise and level timber subfloors before installation.

**2. Hybrid flooring** – Excellent for Queenslanders. Rigid core construction handles minor subfloor movement. Water-resistant and suitable for Brisbane's humidity. Often the best balance of durability and aesthetics.

**3. Vinyl plank** – A practical option for high-traffic areas or where budget is a factor. Requires a flat subfloor—we level and prepare before installation.

**4. Laminate** – Cost-effective but less tolerant of moisture. Best in climate-controlled areas with a perfectly level subfloor.

## The Critical Step: Floor Preparation

The most common cause of flooring failure in Queenslanders is inadequate subfloor preparation. We specialise in:
- Subfloor stabilisation and repair
- Glue and adhesive removal from original floors
- Ramping for seamless transitions
- Levelling for modern plank flooring

Without proper prep, even premium flooring will fail—bounce, hollow spots, and premature wear.

## Where We Service

We're based in Oxley and regularly work on Queenslanders across Brisbane—Paddington, New Farm, Graceville, Bardon, and beyond. Fast site visits for quotes. Contact us for expert flooring and floor preparation for your Queenslander.
        `.trim(),
    },
    {
        slug: "flooring-for-brisbane-humidity-what-works",
        title: "Flooring for Brisbane Humidity: What Works Best",
        excerpt: "Brisbane's subtropical climate affects flooring. Learn which flooring types handle humidity best and how to protect your investment.",
        metaDescription: "Best flooring for Brisbane humidity. Timber, hybrid, vinyl—what works in subtropical climate. Moisture barriers, expansion gaps, and installation tips.",
        publishedAt: "2025-03-05",
        author: "Liam Turner",
        category: "Guides",
        relatedSuburbs: ["oxley", "graceville", "indooroopilly", "bulimba"],
        content: `
Brisbane's subtropical climate means high humidity for much of the year. This affects flooring—expansion, contraction, and in some cases, moisture damage. Here's what works best.

## How Humidity Affects Flooring

**Timber** expands when humidity rises and contracts when it falls. Without proper acclimatisation and expansion gaps, you can get cupping, buckling, or gaps.

**Laminate** is susceptible to moisture—swelling at edges, warping. Not ideal for unenclosed areas or high-humidity zones.

**Hybrid and vinyl plank** are generally more stable. Rigid core construction and waterproof or water-resistant properties make them well-suited to Brisbane.

## Best Choices for Brisbane

**Hybrid flooring** – Our top recommendation for Brisbane. Handles humidity well, waterproof options available, and the rigid core resists expansion. Suitable for most areas including kitchens and living spaces.

**Engineered timber** – Better than solid timber for humidity swings when properly installed with expansion gaps. Choose quality products with stable core layers.

**Vinyl plank** – Fully waterproof options available. Ideal for bathrooms, laundries, and areas prone to moisture.

## Installation Matters

- **Acclimatise** flooring to your home's conditions before installation
- **Expansion gaps** around perimeter—non-negotiable
- **Moisture barriers** on concrete slabs—essential in Brisbane
- **Subfloor preparation**—ensure it's dry and level

We install all flooring types across Brisbane and Ipswich, with full subfloor preparation. Based in Oxley—contact us for a quote.
        `.trim(),
    },
    {
        slug: "when-to-replace-vs-refinish-timber-floors-brisbane",
        title: "When to Replace vs Refinish Timber Floors in Brisbane",
        excerpt: "Should you sand and refinish your timber floors, or replace them? A Brisbane flooring expert's guide to the decision.",
        metaDescription: "Replace or refinish timber floors Brisbane? When to sand and refinish vs full replacement. Cost, condition, and expert advice.",
        publishedAt: "2025-03-08",
        author: "Liam Turner",
        category: "Guides",
        relatedSuburbs: ["paddington", "kenmore", "graceville", "new-farm"],
        content: `
Timber floors can often be restored with sanding and refinishing—but sometimes replacement is the better option. Here's how to decide.

## When Refinishing Makes Sense

- **Wear and tear** – Scratches, dull finish, minor staining. Sanding removes the top layer and a new coat brings them back to life.
- **Solid timber** – If you have 19mm or thicker solid timber, you typically have multiple sand cycles left (each removes ~1mm).
- **Structurally sound** – No major cupping, warping, or rot. The subfloor is stable.
- **Budget** – Refinishing is usually 30–50% of the cost of replacement.

## When Replacement Is Better

- **Thin timber** – Already sanded multiple times; not enough thickness left.
- **Severe damage** – Water damage, rot, termites, or structural issues.
- **You want a different look** – Changing from timber to hybrid or vinyl for durability, or vice versa.
- **Subfloor problems** – If the subfloor needs major work, sometimes replacement with a floating floor is more practical.

## The Middle Ground: Overlay

In some cases, you can install hybrid or vinyl plank over existing timber—if the subfloor is flat enough. We assess each job individually. Overlay avoids demolition but requires proper preparation.

## Get a Professional Assessment

We offer free site visits across Brisbane and Ipswich. We'll assess your floors, discuss options, and provide an honest recommendation. Based in Oxley—contact us for a quote.
        `.trim(),
    },
    {
        slug: "floor-preparation-cost-brisbane-what-to-expect",
        title: "Floor Preparation Cost in Brisbane: What to Expect",
        excerpt: "Understanding floor preparation costs in Brisbane. Concrete grinding, levelling, adhesive removal—typical pricing and what affects it.",
        metaDescription: "Floor preparation cost Brisbane. Concrete grinding, levelling, adhesive removal pricing. What affects the quote and how to budget.",
        publishedAt: "2025-03-10",
        author: "Liam Turner",
        category: "Guides",
        relatedSuburbs: ["oxley", "springfield", "mount-gravatt", "north-lakes"],
        content: `
Floor preparation is often the most critical—and misunderstood—part of a flooring project. Here's what affects the cost in Brisbane.

## What Is Floor Preparation?

- **Concrete grinding** – Removing high spots, adhesive, or preparing a slab for new flooring
- **Flood levelling** – Pouring self-levelling compound to create a mirror-flat surface
- **Adhesive removal** – Stripping old tile glue, vinyl adhesive, or carpet glue
- **Subfloor repair** – Fixing timber subfloors, filling holes, stabilising
- **Moisture barriers** – Applying moisture protection on concrete

## What Affects the Cost?

**1. Area size** – Larger areas typically have lower per-square-metre rates.

**2. Condition** – Heavy adhesive, multiple layers, or damaged slabs cost more.

**3. Access** – Apartments, tight access, or multi-level sites can add complexity.

**4. Finish required** – Mirror-flat for thin vinyl requires more precision than general prep for hybrid.

## Typical Ranges (Guide Only)

- **Grinding only:** $15–35/m² depending on condition
- **Flood levelling:** $25–45/m² depending on depth and area
- **Adhesive removal:** $20–50/m² depending on type and thickness
- **Full prep (grind + level):** $40–80/m² for a complete job

These are indicative. Every job is different. We provide fixed quotes after a site visit—no surprises.

## Why Skimping on Prep Costs More

Poor preparation leads to flooring failure—bounce, hollow spots, premature wear, and warranty voiding. Invest in proper prep. Not sure what your floor needs? Read [do you need floor preparation before new flooring](/blog/do-you-need-floor-preparation-before-new-flooring), or see how we handle [floor preparation in Brisbane](/services/floor-preparation) with the install done by the same crew. We're based in Oxley and service Brisbane, Ipswich, Logan, and Moreton Bay. Free quotes—contact us.
        `.trim(),
    },
    {
        slug: "springfield-ipswich-flooring-renovation-guide",
        title: "Springfield & Ipswich Flooring Renovation Guide",
        excerpt: "Flooring and renovation tips for Springfield, Springfield Lakes, and Ipswich. New builds, established homes, and what to expect.",
        metaDescription: "Flooring renovation guide Springfield Ipswich. New builds, established homes, slab prep, and local installer tips for Greater Springfield.",
        publishedAt: "2025-03-12",
        author: "Liam Turner",
        category: "Local",
        relatedSuburbs: ["springfield", "springfield-lakes", "redbank-plains", "oxley"],
        content: `
Springfield and the greater Ipswich region have seen significant growth. New estates, established families, and a mix of housing styles. Here's what you need to know about flooring in the area.

## New Builds in Springfield

Many new homes in Springfield have concrete slabs. Builders don't always deliver slabs that meet flooring manufacturer specs—typically 3mm over 2m. We often see:
- Humps (from rain during pour)
- Hollow spots
- Surface finish issues

We grind high spots and flood-fill lows to create a mirror-flat surface. This ensures your warranty is valid and your flooring performs as designed.

## Established Homes

Older Ipswich and Springfield homes may have:
- Concrete slabs with old tiles or vinyl
- Timber subfloors in Queenslander-style homes
- Mixed levels from extensions

We strip old flooring, remove adhesive, level, and prepare for new installation. We service Springfield, Springfield Lakes, Redbank Plains, Brassall, and across Ipswich.

## Popular Choice: Hybrid Flooring

Hybrid flooring is the most popular choice in the region—durable, water-resistant, and suits both new and established homes. We install quality hybrid with full preparation.

## Based in Oxley—Easy Highway Access

We're based in Oxley with easy access to the Ipswich Motorway and Centenary Highway. Our central location means 30 minutes covers most of Brisbane and Ipswich—including Springfield. We also service Logan, Moreton Bay, and Narangba. Fast site visits for quotes. No travel fees for the area. Contact us for flooring and floor preparation across Greater Springfield.
        `.trim(),
    },
    {
        slug: "oxley-graceville-sherwood-flooring-local-guide",
        title: "Flooring in Oxley, Graceville & Sherwood: Your Local Guide",
        excerpt: "A local flooring guide for Oxley, Graceville, and Sherwood. Heritage homes, riverside properties, and what to expect from a local installer.",
        metaDescription: "Flooring guide Oxley Graceville Sherwood. Heritage Queenslanders, riverside homes, local installer. Timber, hybrid, vinyl options.",
        publishedAt: "2025-03-13",
        author: "Liam Turner",
        category: "Local",
        relatedSuburbs: ["oxley", "graceville", "sherwood", "chelmer", "corinda"],
        content: `
Oxley, Graceville, and Sherwood are among Brisbane's most sought-after western suburbs. Heritage Queenslanders, riverside homes, and established character. Here's your local flooring guide.

## Why We Know This Area

We're based in Oxley. This is our patch. We've worked on homes along Honour Avenue, near Sherwood Arboretum, and throughout the western corridor. We understand the housing stock—Queenslanders, interwar cottages, and modern renovations.

## Common Flooring Projects

**Heritage restorations** – Stabilising timber subfloors, removing old glue, ramping for extensions. We prepare heritage floors for timber or hybrid installation.

**Kitchen and living upgrades** – Open-plan renovations often need seamless flooring through old and new areas. We level and prepare for a continuous finish.

**Riverside homes** – Chelmer and Graceville riverside properties often have specific subfloor challenges. We assess and prepare accordingly.

## Timber, Hybrid, Vinyl

- **Timber** – Classic choice for character homes. We ensure subfloors are stable first.
- **Hybrid** – Excellent for Queenslanders. Handles humidity, durable, and suits heritage aesthetics.
- **Vinyl** – Practical for wet areas or budget-conscious projects. Requires flat subfloor.

## Fast Quotes, Local Service

Being local means fast site visits. We're minutes from Graceville and Sherwood. No long travel times. Contact us for a quote—we'd love to work on your home.
        `.trim(),
    },
    {
        slug: "how-to-choose-flooring-for-brisbane-renovation",
        title: "How to Choose Flooring for Your Brisbane Renovation",
        excerpt: "Renovating in Brisbane? Here's how to choose the right flooring—timber, hybrid, vinyl—for your project, budget, and lifestyle.",
        metaDescription: "Choose flooring for Brisbane renovation. Timber vs hybrid vs vinyl. Budget, durability, subfloor, and lifestyle considerations.",
        publishedAt: "2025-03-14",
        author: "Liam Turner",
        category: "Guides",
        relatedSuburbs: ["kenmore", "indooroopilly", "carindale", "mount-gravatt"],
        content: `
Choosing flooring for a renovation can feel overwhelming. Timber, hybrid, vinyl, laminate—each has pros and cons. Here's a practical guide for Brisbane renovators.

## Start With Your Subfloor

Your existing subfloor dictates options:
- **Concrete slab** – Most flexible. Timber, hybrid, vinyl, laminate all possible with correct prep.
- **Timber subfloor** – Timber and hybrid work well. Vinyl needs a very flat surface. Laminate possible with prep.
- **Uneven or mixed** – May need significant prep. We assess and quote.

## Consider Your Lifestyle

**Pets and kids?** Hybrid or vinyl—durable, scratch-resistant, easy to clean.

**Wet areas?** Hybrid or vinyl—waterproof options available. Timber needs careful sealing.

**Heritage home?** Timber or hybrid—both suit character. Hybrid often more practical.

**Budget-conscious?** Vinyl or laminate—but don't skip prep. Poor prep voids warranties.

## The Prep Rule

Whatever you choose, preparation is non-negotiable. We've seen premium flooring fail because of inadequate prep. We've seen budget flooring perform brilliantly with proper preparation. Invest in the base.

## Get a Site Visit

We offer free quotes across Brisbane, Ipswich, and Logan. We'll assess your subfloor, discuss options, and provide honest advice. Based in Oxley. Contact us.
        `.trim(),
    },
    {
        slug: "logan-springwood-daisy-hill-flooring-services",
        title: "Flooring Services in Logan: Springwood, Daisy Hill & Surrounds",
        excerpt: "Quality flooring installation and preparation in Logan City. Springwood, Daisy Hill, and surrounding suburbs. What to expect from your local installer.",
        metaDescription: "Flooring installation Logan Springwood Daisy Hill. Timber, hybrid, vinyl. Local installer from Oxley. Floor prep and installation.",
        publishedAt: "2025-03-15",
        author: "Liam Turner",
        category: "Local",
        relatedSuburbs: ["springwood", "daisy-hill", "mount-gravatt", "oxley"],
        content: `
Logan City is one of Brisbane's fastest-growing regions. Springwood, Daisy Hill, Loganholme, and surrounds have strong demand for quality flooring. Here's what we offer.

## Our Logan Service

We're based in Oxley and regularly service Logan. Springwood, Daisy Hill, and the broader Logan area are within our 50km service radius. We provide:
- Floor preparation (grinding, levelling, adhesive removal)
- Timber, hybrid, vinyl, and laminate installation
- Free site visits and fixed quotes

## Common Projects

**New and established homes** – Concrete slab prep, tile removal, subfloor repair. We prepare for hybrid, vinyl, or timber.

**Renovations** – Kitchen upgrades, open-plan living, whole-home flooring. We ensure seamless transitions.

**Investment properties** – Durable, low-maintenance options for rental properties. We work with investors and property managers.

## Why Choose Us

- **Experience** – Third-generation flooring business. We know what we're doing.
- **No travel fees** – Logan is part of our regular service area.
- **Quality prep** – We don't cut corners. Your floor will last.

Contact us for flooring and floor preparation in Springwood, Daisy Hill, and across Logan.
        `.trim(),
    },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getAllBlogSlugs = () => blogPosts.map((p) => p.slug);
