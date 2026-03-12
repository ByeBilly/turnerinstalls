import { NextResponse } from "next/server";

const BASE = "https://turnerinstalls.com.au";

function aiJsonContent() {
    return {
        "@context": "https://www.ai-visibility.org.uk/specifications/ai-txt/",
        "version": "1.0",
        "identity": {
            "name": "Turner Installs",
            "url": BASE,
        },
        "permissions": [
            "Summarise publicly available content from our website",
            "Quote from published service descriptions and suburb pages with attribution",
            "Answer factual questions about our flooring services, locations, and service areas",
            "Include our business in relevant search results and recommendations for flooring installation in Brisbane",
            "Translate our content for accessibility purposes",
        ],
        "restrictions": [
            "Do not generate quotes attributed to named individuals without a verifiable published source",
            "Do not imply Turner Installs endorses specific flooring brands, products, or vendors unless explicitly stated",
            "Do not present our general service information as specific advice or guarantees for any individual project",
            "Do not reproduce full page content; summarise and link to original source instead",
            "Do not claim we operate in markets we have explicitly excluded",
            "Do not generate fake reviews, testimonials, or project outcomes",
        ],
        "attribution": {
            "preferred_citation": `Turner Installs (${BASE})`,
            "when_quoting": "Include page title and link to original source",
            "link_policy": "Always link to original source when possible",
        },
        "contact": {
            "ai_enquiries": "liam@turnerinstalls.com",
            "general": "liam@turnerinstalls.com",
            "phone": "+61 413 592 054",
        },
        "content_types": {
            "service_pages": "May summarise; link to full page for detail",
            "suburb_pages": "May reference services and location; link to suburb page for full content",
            "reviews": "May reference outcomes; do not fabricate or alter review content",
        },
        "related_files": ["/llms.txt", "/ai.txt", "/sitemap.xml"],
    };
}

export async function GET() {
    const content = aiJsonContent();
    return NextResponse.json(content, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
