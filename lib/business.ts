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
    // Confirmed by the owner 2026-09-29: business in Oxley, crew leaders based
    // in Sherwood (west) and Eagleby (south, towards Logan/Gold Coast).
    crewBases: ["Sherwood", "Eagleby"],
    priceRange: "$$",
    openingHours: "Mo-Sa 07:00-17:00",
    // Actual file lives at /public/installspics/promo/... after the Jan 2026 image
    // consolidation; several pages still pointed at the old /images/ path.
    image: `${BASE_URL}/installspics/promo/resource_9fVqoabE10H5PDfVW4rOXY.png`,
    logo: `${BASE_URL}/images/logo.png`,
    // TODO(Liam): add the live Google Business Profile, Facebook and Instagram URLs
    // here once confirmed, so schema.org `sameAs` can link this entity to them.
    sameAs: [GOOGLE_REVIEW_URL] as string[],
};

/**
 * Stable schema.org node id for the business. The root layout emits the full
 * FlooringContractor node once per page under this id; every other JSON-LD
 * block (Service, Review, BlogPosting publisher...) points at it with
 * `provider: businessRef` instead of re-declaring the business.
 *
 * Previously each suburb page declared its own "Turner Installs - <Suburb>"
 * business with that suburb as its street address, which told Google and AI
 * engines there were ~200 different businesses at ~200 different addresses,
 * contradicting the real Oxley NAP on the Google Business Profile.
 */
export const BUSINESS_ID = `${BASE_URL}/#business`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const businessRef = { "@id": BUSINESS_ID };

export function buildBusinessEntity(aggregateRating?: object | null) {
    return {
        "@type": ["FlooringContractor", "LocalBusiness"],
        "@id": BUSINESS_ID,
        name: BUSINESS.name,
        legalName: BUSINESS.legalName,
        description:
            "Oxley-based flooring contractor, with crew leaders based in Sherwood and Eagleby and a family flooring trade in Brisbane since 1979 (Turners Floorcoverings Pty Ltd, Geebung), for flooring installation (timber, hybrid, vinyl plank, laminate), floor preparation, concrete grinding, floor levelling, adhesive removal and old floor uplift across Brisbane, Ipswich, Logan, Moreton Bay, Gold Coast and Sunshine Coast.",
        url: BASE_URL,
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        image: BUSINESS.image,
        logo: BUSINESS.logo,
        taxID: BUSINESS.abn,
        identifier: { "@type": "PropertyValue", propertyID: "ABN", value: BUSINESS.abn },
        address: { "@type": "PostalAddress", ...BUSINESS.address },
        geo: { "@type": "GeoCoordinates", ...BUSINESS.geo },
        areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "City", name })),
        founder: BUSINESS.founder,
        priceRange: BUSINESS.priceRange,
        openingHours: BUSINESS.openingHours,
        knowsAbout: [
            "Floor preparation",
            "Concrete grinding",
            "Self-levelling compound",
            "Floor levelling",
            "Adhesive removal",
            "Carpet, tile and vinyl uplift",
            "Hybrid flooring installation",
            "Vinyl plank installation",
            "Engineered timber flooring installation",
            "Laminate flooring installation",
            "Moisture barriers for concrete slabs",
        ],
        ...(aggregateRating ? { aggregateRating } : {}),
        sameAs: BUSINESS.sameAs,
    };
}

/**
 * Service node for service, region and suburb pages. `areaServed` is where the
 * work is done (a suburb or region); the business address stays Oxley via the
 * provider reference.
 */
export function buildServiceSchema({
    name,
    description,
    url,
    areaServed,
    serviceType,
}: {
    name: string;
    description: string;
    url: string;
    areaServed: string | string[];
    serviceType?: string;
}) {
    const areas = Array.isArray(areaServed) ? areaServed : [areaServed];
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        serviceType: serviceType ?? name,
        description,
        url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
        provider: businessRef,
        areaServed: areas.map((area) => ({
            "@type": "Place",
            name: `${area}, QLD`,
        })),
    };
}
