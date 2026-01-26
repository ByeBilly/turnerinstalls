import Image from "next/image";

interface ServiceHeroProps {
    title: React.ReactNode;
    subtitle: string;
    imagePath: string;
    label?: string;
    overlayOpacity?: number;
}

export default function ServiceHero({
    title,
    subtitle,
    imagePath,
    label = "TECHNICAL_SERVICES",
    overlayOpacity = 40
}: ServiceHeroProps) {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={imagePath}
                    alt="Service Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className={`absolute inset-0 bg-black/${overlayOpacity}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-black/60" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
                <div className="text-gray-300 font-mono text-sm mb-4 tracking-widest border border-gray-500 inline-block px-3 py-1 rounded bg-black/40 backdrop-blur-sm">
                    {/* // {label} */}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-md font-medium">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
