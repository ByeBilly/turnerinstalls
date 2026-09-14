import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getFloorPreparationSuburb } from "@/data/suburbs";

export const runtime = "nodejs";
export const alt = "Turner Installs floor preparation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function toDataUri(publicPath: string): string {
    const filePath = join(process.cwd(), "public", publicPath);
    const buf = readFileSync(filePath);
    const ext = publicPath.split(".").pop()?.toLowerCase();
    const mime = ext === "png" ? "image/png" : "image/jpeg";
    return `data:${mime};base64,${buf.toString("base64")}`;
}

export default async function Image({
    params,
}: {
    params: Promise<{ region: string; suburb: string }>;
}) {
    const { region, suburb: suburbSlug } = await params;
    const suburb = getFloorPreparationSuburb(suburbSlug, region);
    const imageSrc = suburb?.image?.src ?? "/installspics/prep/prepare/we can make even this slab look brand new.jpg";
    const bg = toDataUri(imageSrc);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    backgroundColor: "#0f172a",
                }}
            >
                <img
                    src={bg}
                    alt=""
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1200px",
                        height: "630px",
                        objectFit: "cover",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1200px",
                        height: "630px",
                        display: "flex",
                        background:
                            "linear-gradient(0deg, rgba(15,23,42,0.96) 20%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.15) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        left: 64,
                        bottom: 56,
                        right: 64,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            color: "#facc15",
                            fontSize: 30,
                            fontWeight: 700,
                            letterSpacing: 3,
                            textTransform: "uppercase",
                            marginBottom: 18,
                        }}
                    >
                        Turner Installs
                    </div>
                    <div
                        style={{
                            display: "flex",
                            color: "#ffffff",
                            fontSize: 68,
                            fontWeight: 800,
                            lineHeight: 1.08,
                        }}
                    >
                        {`${suburb?.name ?? "Brisbane"} Floor Preparation`}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            color: "#cbd5e1",
                            fontSize: 28,
                            marginTop: 22,
                        }}
                    >
                        Concrete grinding · Levelling · Adhesive removal · Brisbane &amp; SE QLD
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
