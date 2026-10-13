import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

const size = {
    width: 1200,
    height: 630,
};

function trimText(value: string | null, fallback: string, maxLength: number) {
    const text = (value || fallback).replace(/\s+/g, " ").trim();
    return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}…` : text;
}

function hashString(value: string) {
    return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const title = trimText(searchParams.get("title"), "Turner Installs", 74);
    const subtitle = trimText(
        searchParams.get("subtitle"),
        "Flooring installation, floor preparation, levelling and concrete grinding across Brisbane and SE QLD.",
        118
    );
    const path = trimText(searchParams.get("path"), "/", 88);
    const seed = hashString(`${title}-${path}`);
    const accent = ["#facc15", "#38bdf8", "#34d399", "#fb7185"][seed % 4];
    const panel = ["#0f172a", "#111827", "#172554", "#1f2937"][seed % 4];
    const routeLabel = path
        .replace(/^\/+/, "")
        .split("/")
        .filter(Boolean)
        .slice(0, 3)
        .join(" / ") || "Brisbane flooring specialists";

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    background: "#f8fafc",
                    color: "#0f172a",
                    fontFamily: "Arial",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        background: `linear-gradient(135deg, ${panel} 0%, #111827 52%, #f8fafc 52%, #ffffff 100%)`,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: 52,
                        top: 52,
                        width: 310,
                        height: 310,
                        border: `22px solid ${accent}`,
                        opacity: 0.95,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: 145,
                        bottom: 70,
                        width: 250,
                        height: 24,
                        background: accent,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        left: 64,
                        top: 58,
                        display: "flex",
                        color: accent,
                        fontSize: 30,
                        fontWeight: 800,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                    }}
                >
                    Turner Installs
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: 64,
                        bottom: 76,
                        width: 760,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            color: "#ffffff",
                            fontSize: title.length > 48 ? 58 : 68,
                            fontWeight: 900,
                            lineHeight: 1.04,
                            letterSpacing: 0,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            color: "#cbd5e1",
                            fontSize: 27,
                            lineHeight: 1.25,
                            marginTop: 26,
                        }}
                    >
                        {subtitle}
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: 64,
                        bottom: 38,
                        display: "flex",
                        color: "#94a3b8",
                        fontSize: 22,
                        fontWeight: 700,
                    }}
                >
                    {routeLabel}
                </div>
                <div
                    style={{
                        position: "absolute",
                        right: 66,
                        bottom: 102,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        color: "#0f172a",
                    }}
                >
                    <div style={{ display: "flex", fontSize: 28, fontWeight: 900 }}>0413 592 054</div>
                    <div style={{ display: "flex", marginTop: 10, fontSize: 22, fontWeight: 700 }}>
                        Brisbane & SE QLD
                    </div>
                </div>
            </div>
        ),
        size
    );
}
