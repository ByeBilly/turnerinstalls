import Image from "next/image";

interface GalleryStripProps {
    images: string[];
}

export default function GalleryStrip({ images }: GalleryStripProps) {
    return (
        <section className="bg-zinc-900 border-y border-gray-800">
            <div className={`grid grid-cols-2 md:grid-cols-${images.length > 4 ? 4 : images.length}`}>
                {images.map((src, index) => (
                    <div key={index} className="aspect-square relative grayscale hover:grayscale-0 transition-all group overflow-hidden">
                        <Image
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
