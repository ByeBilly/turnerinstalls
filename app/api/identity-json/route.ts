import { NextResponse } from "next/server";
import { BASE_URL, BUSINESS } from "@/lib/business";

function identityJsonContent() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": BUSINESS.name,
        "alternateName": BUSINESS.legalName,
        "description": "Brisbane's premier flooring installation and floor preparation specialists. Family-owned, third-generation craftsmanship. Based in Oxley with easy highway access—30 minutes covers most of Brisbane and Ipswich; Logan and Moreton Bay (including Narangba) within reach.",
        "url": BASE_URL,
        "telephone": BUSINESS.telephoneDisplay,
        "email": BUSINESS.email,
        "address": {
            "@type": "PostalAddress",
            ...BUSINESS.address,
        },
        "geo": {
            "@type": "GeoCoordinates",
            ...BUSINESS.geo,
        },
        "areaServed": [...BUSINESS.areaServed, "Narangba"],
        "founder": BUSINESS.founder,
        "priceRange": BUSINESS.priceRange,
        "openingHours": BUSINESS.openingHours,
        "sameAs": BUSINESS.sameAs,
    };
}

export async function GET() {
    const content = identityJsonContent();
    return NextResponse.json(content, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
