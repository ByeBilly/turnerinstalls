import Image from "next/image";

interface ImageItem {
    src: string;
    alt: string;
    caption?: string;
    tags?: string[];
}

interface ImageGridProps {
    title: string;
    description?: string;
    images: ImageItem[];
    columns?: 3 | 4;
    variant?: "default" | "warning" | "success"; // Warning for "Unacceptable", Success for "Ready"
}

export default function ImageGrid({ title, description, images, columns = 3, variant = "default" }: ImageGridProps) {
    const gridCols = {
        3: "md:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4"
    };

    const borderColor = {
        default: "border-slate-200",
        warning: "border-red-200",
        success: "border-green-200"
    };

    const badgeColor = {
        default: "bg-slate-100 text-slate-700",
        warning: "bg-red-100 text-red-700",
        success: "bg-green-100 text-green-700"
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{title}</h2>
                    {description && <p className="text-slate-600 max-w-2xl mx-auto">{description}</p>}
                </div>

                <div className={`grid ${gridCols[columns]} gap-8`}>
                    {images.map((img, index) => (
                        <div key={index} className={`group flex flex-col rounded-xl overflow-hidden border ${borderColor[variant]} shadow-sm hover:shadow-md transition-shadow`}>
                            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {variant !== "default" && (
                                    <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold uppercase rounded ${badgeColor[variant]}`}>
                                        {variant === "warning" ? "Avoid" : "Target"}
                                    </div>
                                )}
                            </div>
                            <div className="p-4 bg-white text-center flex-grow">
                                <h3 className="font-bold text-slate-900 mb-1">{img.alt}</h3>
                                {img.caption && <p className="text-xs text-slate-500">{img.caption}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
