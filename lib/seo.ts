import type { Metadata } from "next";
import { BASE_URL } from "@/lib/business";

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

export function absoluteUrl(path: string) {
    if (path.startsWith("http")) return path;
    return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function safeJsonLd(value: unknown) {
    return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function buildOgImageUrl({
    title,
    subtitle,
    path,
}: {
    title: string;
    subtitle?: string;
    path: string;
}) {
    const params = new URLSearchParams({
        title,
        path,
    });

    if (subtitle) {
        params.set("subtitle", subtitle);
    }

    return `${BASE_URL}/api/og?${params.toString()}`;
}

export function buildPageMetadata({
    title,
    description,
    path,
    ogTitle,
    ogSubtitle,
    type = "website",
}: {
    title: string | Metadata["title"];
    description: string;
    path: string;
    ogTitle?: string;
    ogSubtitle?: string;
    type?: "website" | "article";
}): Metadata {
    const titleText =
        typeof title === "string"
            ? title
            : typeof title === "object" && title && "absolute" in title && typeof title.absolute === "string"
                ? title.absolute
                : ogTitle ?? "Turner Installs";
    const imageUrl = buildOgImageUrl({
        title: ogTitle ?? titleText,
        subtitle: ogSubtitle ?? description,
        path,
    });

    return {
        title,
        description,
        alternates: {
            canonical: path,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: ogTitle ?? titleText,
            description,
            url: path,
            siteName: "Turner Installs",
            locale: "en_AU",
            type,
            images: [
                {
                    url: imageUrl,
                    width: OG_IMAGE_WIDTH,
                    height: OG_IMAGE_HEIGHT,
                    alt: `${ogTitle ?? titleText} - Turner Installs`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: ogTitle ?? titleText,
            description,
            images: [imageUrl],
        },
    };
}
