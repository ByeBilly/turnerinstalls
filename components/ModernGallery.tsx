import Image from "next/image";

interface ModernGalleryProps {
    images: string[];
    title?: string;
}

export default function ModernGallery({ images, title = "Recent Projects" }: ModernGalleryProps) {
    // Ensure we display exactly 4 images for the grid to look perfect.
    // If fewer, we might duplicate or just show what's there (layout might break slightly but grid handles it).
    // If more, we slice to 4.
    const displayImages = images.slice(0, 4);

    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center md:text-left mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">{title}</h2>
                    <p className="text-slate-600 max-w-2xl">
                        See the quality of our preparation and finishing work. Real projects, real results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
                    {displayImages.map((src, i) => {
                        // Layout Logic:
                        // Image 0: Wide (8 cols)
                        // Image 1: Narrow (4 cols)
                        // Image 2: Narrow (4 cols)
                        // Image 3: Wide (8 cols)
                        let spanClass = "md:col-span-4";
                        if (i === 0 || i === 3) spanClass = "md:col-span-8";

                        return (
                            <div key={i} className={`${spanClass} relative rounded-2xl overflow-hidden group bg-slate-100 border border-slate-200 shadow-sm`}>
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
