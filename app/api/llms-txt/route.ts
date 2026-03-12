import { NextResponse } from "next/server";
import { flooringInstallationSuburbs } from "@/data/flooringInstallationSuburbs";
import { suburbs } from "@/data/suburbs";
import { blogPosts } from "@/data/blogPosts";

const BASE = "https://turnerinstalls.com.au";

function llmsTxtContent(): string {
    const flooringLinks = flooringInstallationSuburbs
        .map(
            (s) =>
                `- [Flooring Installation ${s.name}](${BASE}/flooring-installation/${s.slug}): ${s.metaDescription.slice(0, 120)}...`
        )
        .join("\n");

    const locationLinks = suburbs
        .map(
            (s) =>
                `- [${s.name} Flooring & Prep](${BASE}/locations/${s.region}/${s.slug}): ${s.description.slice(0, 100)}...`
        )
        .join("\n");

    return `# Turner Installs

> Brisbane's premier flooring installation and floor preparation specialists. Family-owned, third-generation craftsmanship. Based in Oxley with easy access to the Ipswich Motorway, Centenary Highway, and Gateway—our central location means 30 minutes covers most of Brisbane and Ipswich, with Logan and Moreton Bay (including Narangba) within easy reach. We install timber, hybrid, vinyl, and laminate flooring across Brisbane, Ipswich, Logan, Moreton Bay, Gold Coast, and Sunshine Coast.

## Contact

- **Phone:** 0413 592 054
- **Email:** liam@turnerinstalls.com
- **Address:** Oxley, Brisbane QLD 4074
- **Hours:** Mon–Fri 7:00am–5:00pm

## Key Services

- [Floor Preparation](${BASE}/services/floor-preparation): Professional subfloor preparation, concrete grinding, levelling
- [Concrete Grinding](${BASE}/services/concrete-grinding): Diamond grinding for flat, durable floors
- [Floor Levelling](${BASE}/services/floor-levelling): Flood levelling and mirror-flat surfaces
- [Moisture Barriers](${BASE}/services/moisture-barriers): Moisture protection for subfloors
- [Subfloor Repairs](${BASE}/services/subfloor-repairs): Subfloor stabilisation and repair
- [Adhesive Removal](${BASE}/services/adhesive-removal): Remove old tiles, glue, and adhesive
- [Epoxy Removal](${BASE}/services/epoxy-removal): Industrial epoxy removal
- [Residential Flooring](${BASE}/residential): Timber, hybrid, vinyl, laminate installation
- [Commercial Flooring](${BASE}/commercial): Commercial fitouts and installations

## Flooring Installation by Suburb (Brisbane West)

Oxley-based installer. Timber, hybrid, vinyl, laminate installation for suburbs within ~15 minutes.

${flooringLinks}

## Location Pages (Floor Prep & Installation)

${locationLinks}

## Blog & Guides

- [Blog](${BASE}/blog): Flooring guides, local tips, and renovation advice
- [Flooring Brisbane Hub](${BASE}/flooring-installation-brisbane): All Brisbane suburbs and services

${blogPosts.slice(0, 8).map((p) => `- [${p.title}](${BASE}/blog/${p.slug}): ${p.excerpt.slice(0, 80)}...`).join("\n")}

## Main Pages

- [Home](${BASE}): Floor preparation and installation services
- [Service Areas](${BASE}/service-areas): Full list of suburbs we serve
- [About Us](${BASE}/about): Third-generation family business
- [Contact](${BASE}/contact): Get a quote
- [Reviews](${BASE}/reviews): Customer testimonials

## Frequently Asked Questions

- **Which suburbs do you service?** We're centrally located in Oxley with easy highway access. Thirty minutes covers most of Brisbane and Ipswich; we also service Logan, Moreton Bay, and Narangba—Brisbane, Ipswich, Logan, Moreton Bay, Gold Coast, Sunshine Coast.
- **What flooring types do you install?** Timber, hybrid, vinyl plank, and laminate flooring.
- **Do you do floor preparation?** Yes. Concrete grinding, flood levelling, adhesive removal, subfloor repairs, moisture barriers.
- **Are you based locally?** Yes. Based in Oxley, Brisbane. Fast site visits for nearby suburbs.
- **Do you charge for quotes?** No. Free quotes for flooring and floor preparation projects.

## What We Do Not Do

- We do not provide carpet installation
- We do not service areas outside South East Queensland (Brisbane, Ipswich, Gold Coast, Sunshine Coast)
- We do not offer flooring supply only; we install and prepare

## AI Discovery Files

- [ai.txt](${BASE}/ai.txt): AI usage permissions and restrictions
- [ai.json](${BASE}/ai.json): Machine-readable AI policy
- [brand.txt](${BASE}/brand.txt): Brand guidelines for AI
- [identity.json](${BASE}/identity.json): Business identity (Schema.org)
- [Sitemap](${BASE}/sitemap.xml): Full site structure
`;
}

export async function GET() {
    const content = llmsTxtContent();
    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
