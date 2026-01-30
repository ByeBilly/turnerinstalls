import Image from "next/image";

interface GalleryImage {
    src: string;
    alt: string;
}

interface ModernGalleryProps {
    images: GalleryImage[];
    title?: string;
    description?: string;
    limit?: number;
}

export default function ModernGallery({
    images,
    title = "Recent Projects",
    description = "See the quality of our preparation and finishing work. Real projects, real results.",
    limit = 4
}: ModernGalleryProps) {
    const displayImages = limit > 0 ? images.slice(0, limit) : images;

    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center md:text-left mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">{title}</h2>
                    <p className="text-slate-600 max-w-2xl">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
                    {displayImages.map((img, i) => {
                        // Repeating pattern logic:
                        // 0, 4, 8... -> Wide (8)
                        // 1, 5, 9... -> Narrow (4)
                        // 2, 6, 10... -> Narrow (4)
                        // 3, 7, 11... -> Wide (8)

                        const patternIndex = i % 4;
                        let spanClass = "md:col-span-4";
                        if (patternIndex === 0 || patternIndex === 3) spanClass = "md:col-span-8";

                        return (
                            <div key={i} className={`${spanClass} relative rounded-2xl overflow-hidden group bg-slate-100 border border-slate-200 shadow-sm`}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                                        {img.alt}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
