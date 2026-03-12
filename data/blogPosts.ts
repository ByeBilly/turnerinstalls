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

Poor preparation leads to flooring failure—bounce, hollow spots, premature wear, and warranty voiding. Invest in proper prep. We're based in Oxley and service Brisbane, Ipswich, Logan, and Moreton Bay. Free quotes—contact us.
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
