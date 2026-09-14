import { GOOGLE_REVIEW_URL } from "@/lib/businessLinks";

/**
 * Single source of truth for NAP (Name/Address/Phone) and schema.org identity data.
 * Import BASE_URL and BUSINESS everywhere a JSON-LD block, sitemap, or AI-discovery
 * route needs the canonical domain or business record, instead of retyping it —
 * these values previously drifted (www vs bare domain, three different geo pairs).
 */

export const BASE_URL = "https://www.turnerinstalls.com.au";

export const BUSINESS = {
    name: "Turner Installs",
    legalName: "Turner Installs Pty Ltd",
    abn: "36 623 763 566",
    telephone: "+61413592054",
    telephoneDisplay: "0413 592 054",
    email: "liam@turnerinstalls.com",
    address: {
        addressLocality: "Oxley",
        addressRegion: "QLD",
        postalCode: "4074",
        addressCountry: "AU",
    },
    // Oxley, Brisbane QLD 4074. Kept as one constant so the homepage LocalBusiness
    // block, service/location schema, and identity.json can't disagree again.
    geo: {
        latitude: -27.5536,
        longitude: 152.9769,
    },
    areaServed: ["Brisbane", "Ipswich", "Logan", "Moreton Bay", "Gold Coast", "Sunshine Coast"],
    // Names the real, already-public founder so schema.org can nest a
    // Person -> Business entity relationship (Liam Turner -> Turner Installs)
    // rather than leaving the business anonymous. Do not add licence numbers
    // or credentials here until Liam confirms the exact wording/number to use.
    founder: {
        "@type": "Person" as const,
        name: "Liam Turner",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 07:00-17:00",
    // Actual file lives at /public/installspics/promo/... after the Jan 2026 image
    // consolidation; several pages still pointed at the old /images/ path.
    image: `${BASE_URL}/installspics/promo/resource_9fVqoabE10H5PDfVW4rOXY.png`,
    logo: `${BASE_URL}/images/logo.png`,
    // TODO(Liam): add the live Google Business Profile, Facebook and Instagram URLs
    // here once confirmed, so schema.org `sameAs` can link this entity to them.
    sameAs: [GOOGLE_REVIEW_URL] as string[],
};
