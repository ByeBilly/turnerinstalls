import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { BUSINESS } from "@/lib/business";
import { pickOgPhoto } from "@/lib/seo";
import { OG_INSTALL_PHOTOS } from "@/data/ogPhotos";

export const runtime = "nodejs";

const size = {
    width: 1200,
    height: 630,
};

const fontDir = join(process.cwd(), "assets/fonts");
const fontsPromise = Promise.all(
    (["Regular", "Bold", "Black"] as const).map(async (name, i) => ({
        name: "Geist",
        data: await readFile(join(fontDir, `Geist-${name}.ttf`)),
        weight: ([400, 700, 900] as const)[i],
        style: "normal" as const,
    }))
);

// Only same-site photos from /public; never fetch an arbitrary URL.
const SAFE_IMAGE_PATH = /^\/[A-Za-z0-9_\-/]+\.(jpe?g|png|webp)$/i;

/** Page titles often end in "| Turner Installs"; the card already shows the brand. */
function cleanTitle(value: string | null) {
    const parts = (value || "").split("|").map((part) => part.trim()).filter((part) => part && !/^turner installs$/i.test(part));
    return parts.join(" – ") || "Turner Installs";
}

function trimText(value: string | null, fallback: string, maxLength: number) {
    const text = (value || fallback).replace(/\s+/g, " ").trim();
    return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}…` : text;
}

/**
 * The OG renderer can't decode WebP/AVIF, so fetch the photo from this
 * deployment's static files and hand it over as a cropped JPEG data URI.
 */
async function loadPhoto(origin: string, path: string) {
    try {
        const response = await fetch(`${origin}${encodeURI(path)}`);
        if (!response.ok) return null;
        // Job photos are mostly portrait phone shots with the floor in the
        // lower half, so crop a band below centre rather than the middle.
        const resized = await sharp(Buffer.from(await response.arrayBuffer()))
            .rotate()
            .resize({ width: size.width, height: size.height, fit: "outside" })
            .toBuffer({ resolveWithObject: true });
        const { width, height } = resized.info;
        const jpeg = await sharp(resized.data)
            .extract({
                left: Math.round((width - size.width) / 2),
                top: Math.round((height - size.height) * 0.62),
                width: size.width,
                height: size.height,
            })
            .jpeg({ quality: 78 })
            .toBuffer();
        return `data:image/jpeg;base64,${jpeg.toString("base64")}`;
    } catch {
        return null;
    }
}

export async function GET(request: NextRequest) {
    const { searchParams, origin } = request.nextUrl;
    const title = trimText(cleanTitle(searchParams.get("title")), "Turner Installs", 64);
    const subtitle = trimText(
        searchParams.get("subtitle"),
        "Flooring installation, floor preparation, levelling and concrete grinding across Brisbane and SE QLD.",
        118
    );
    const path = trimText(searchParams.get("path"), "/", 88);
    const requestedImage = searchParams.get("image");
    const photoPath =
        requestedImage && SAFE_IMAGE_PATH.test(requestedImage)
            ? requestedImage
            : pickOgPhoto(path);
    const photo =
        (await loadPhoto(origin, photoPath)) ?? (await loadPhoto(origin, OG_INSTALL_PHOTOS[0]));

    const card = new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    backgroundColor: "#0f172a",
                    fontFamily: "Geist",
                }}
            >
                {photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={photo}
                        alt=""
                        width={size.width}
                        height={size.height}
                        style={{ position: "absolute", top: 0, left: 0 }}
                    />
                )}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: size.width,
                        height: size.height,
                        display: "flex",
                        backgroundImage:
                            "linear-gradient(90deg, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.82) 38%, rgba(15,23,42,0.25) 62%, rgba(15,23,42,0) 80%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        left: 64,
                        top: 56,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: 14,
                            backgroundColor: "#1f1f1f",
                            border: "2px solid #3f3f46",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#facc15",
                            fontSize: 44,
                            fontWeight: 900,
                        }}
                    >
                        T
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: 18,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                color: "#ffffff",
                                fontSize: 30,
                                fontWeight: 900,
                                letterSpacing: 2,
                            }}
                        >
                            TURNER INSTALLS
                        </div>
                        <div
                            style={{
                                display: "flex",
                                color: "#facc15",
                                fontSize: 17,
                                fontWeight: 700,
                                letterSpacing: 3,
                            }}
                        >
                            FLOORING &amp; PREPARATION
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: 64,
                        top: 190,
                        width: 640,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            width: 90,
                            height: 8,
                            backgroundColor: "#facc15",
                            marginBottom: 26,
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            color: "#ffffff",
                            fontSize: title.length > 40 ? 52 : 64,
                            fontWeight: 900,
                            lineHeight: 1.05,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            color: "#cbd5e1",
                            fontSize: 26,
                            lineHeight: 1.3,
                            marginTop: 22,
                        }}
                    >
                        {subtitle}
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: 64,
                        bottom: 52,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#facc15",
                            color: "#0f172a",
                            fontSize: 28,
                            fontWeight: 900,
                            padding: "12px 24px",
                            borderRadius: 10,
                        }}
                    >
                        {`Call ${BUSINESS.telephoneDisplay}`}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            color: "#e2e8f0",
                            fontSize: 22,
                            fontWeight: 700,
                            marginLeft: 22,
                        }}
                    >
                        Brisbane &amp; SE QLD · Free quotes
                    </div>
                </div>
            </div>
        ),
        { ...size, fonts: await fontsPromise }
    );

    // PNG cards run 500-850KB; WhatsApp drops preview images over ~300KB.
    const jpeg = await sharp(Buffer.from(await card.arrayBuffer())).jpeg({ quality: 82, mozjpeg: true }).toBuffer();

    return new Response(new Uint8Array(jpeg), {
        headers: {
            "Content-Type": "image/jpeg",
            // Cards only change on deploy; let the CDN keep them so
            // Facebook/Messenger scrapes get a fast cached image.
            "Cache-Control": "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400",
        },
    });
}
