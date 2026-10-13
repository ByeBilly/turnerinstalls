import type { Metadata } from "next";
import { BASE_URL } from "@/lib/business";
import { OG_INSTALL_PHOTOS, OG_PREP_PHOTOS } from "@/data/ogPhotos";

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

export function absoluteUrl(path: string) {
    if (path.startsWith("http")) return path;
    return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function safeJsonLd(value: unknown) {
    return JSON.stringify(value).replace(/</g, "\\u003c");
}

const PREP_PATH = /prep|level|grind|epoxy|adhesive|moisture|subfloor|industrial/;

/** FNV-1a: spreads similar paths (e.g. neighbouring suburbs) across the pool. */
function hashPath(path: string) {
    let hash = 0x811c9dc5;
    for (let i = 0; i < path.length; i++) {
        hash ^= path.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193);
    }
    return hash >>> 0;
}

/** Stable per-page share photo: prep shots for prep pages, finished floors elsewhere. */
export function pickOgPhoto(path: string) {
    const pool = PREP_PATH.test(path) ? OG_PREP_PHOTOS : OG_INSTALL_PHOTOS;
    return pool[hashPath(path) % pool.length];
}

export function buildOgImageUrl({
    title,
    subtitle,
    path,
    image,
}: {
    title: string;
    subtitle?: string;
    path: string;
    /** A /public photo for the card background; defaults to a pick from the job photo pool. */
    image?: string;
}) {
    const params = new URLSearchParams({
        title,
        path,
        image: image ?? pickOgPhoto(path),
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
    ogImage,
    type = "website",
}: {
    title: string | Metadata["title"];
    description: string;
    path: string;
    ogTitle?: string;
    ogSubtitle?: string;
    /** Page-specific job photo for the share card, e.g. a suburb's own job photo. */
    ogImage?: string;
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
        image: ogImage,
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
