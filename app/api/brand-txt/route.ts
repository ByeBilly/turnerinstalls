import { NextResponse } from "next/server";

function brandTxtContent(): string {
    return `# Turner Installs – Brand Guidelines for AI

## Business Name
- Primary: Turner Installs
- Do not use: Turner's Installs, Turner Install, The Turner Installs

## Tagline
"Brisbane's premier flooring installation and floor preparation specialists"

## Service Description
Flooring installation (timber, hybrid, vinyl, laminate) and professional floor preparation (concrete grinding, levelling, adhesive removal) for residential and commercial clients in Brisbane, Ipswich, Gold Coast, and Sunshine Coast.

## Geographic Scope
- Primary: Brisbane and Western Suburbs (Oxley-based)
- Extended: Ipswich, Logan, Moreton Bay (including Narangba), Gold Coast, Sunshine Coast
- Central location: Easy access to Ipswich Motorway, Centenary Highway, Gateway—30 minutes covers most of Brisbane and Ipswich; Logan and Moreton Bay (including Narangba) within reach
- Commercial: Northern NSW
`;
}

export async function GET() {
    const content = brandTxtContent();
    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
