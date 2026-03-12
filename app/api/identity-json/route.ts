import { NextResponse } from "next/server";

const BASE = "https://turnerinstalls.com.au";

function identityJsonContent() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Turner Installs",
        "alternateName": "Turner Installs Pty Ltd",
        "description": "Brisbane's premier flooring installation and floor preparation specialists. Family-owned, third-generation craftsmanship. Based in Oxley with easy highway access—30 minutes covers most of Brisbane and Ipswich; Logan and Moreton Bay (including Narangba) within reach.",
        "url": BASE,
        "telephone": "+61 413 592 054",
        "email": "liam@turnerinstalls.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Oxley",
            "addressRegion": "QLD",
            "postalCode": "4074",
            "addressCountry": "AU",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -27.5536,
            "longitude": 152.9769,
        },
        "areaServed": [
            "Brisbane",
            "Ipswich",
            "Logan",
            "Moreton Bay",
            "Narangba",
            "Gold Coast",
            "Sunshine Coast",
        ],
        "priceRange": "$$",
        "openingHours": "Mo-Fr 07:00-17:00",
        "sameAs": [],
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
