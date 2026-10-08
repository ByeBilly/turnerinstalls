import Image from "next/image";

interface ServiceHeroProps {
    title: React.ReactNode;
    subtitle: string;
    imagePath: string;
    imageAlt?: string;
    imageNote?: string;
    label?: string;
    overlayOpacity?: number;
    children?: React.ReactNode; // Content to inject (e.g. Form)
}

export default function ServiceHero({
    title,
    subtitle,
    imagePath,
    imageAlt = "Service Background",
    imageNote,
    label = "TECHNICAL_SERVICES",
    overlayOpacity = 40,
    children
}: ServiceHeroProps) {
    return (
        <section className="relative overflow-hidden bg-white md:flex md:min-h-[70vh] md:items-center md:justify-center md:py-20">
            <div className="relative h-56 w-full md:absolute md:inset-0 md:z-0 md:h-auto">
                <Image
                    src={imagePath}
                    alt={imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    preload
                    fetchPriority="high"
                />
                {/* Light Overlay for Daytime Look */}
                <div className={`absolute inset-0 bg-white/80 md:bg-white/70`} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
            </div>

            <div className={`relative z-10 mx-auto -mt-20 w-full max-w-7xl px-5 pb-12 pt-0 md:mt-0 md:py-0 ${children ? 'grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center' : 'text-center'}`}>

                {/* Left Column (Text) */}
                <div className={`${children ? 'text-left' : 'mx-auto max-w-4xl'} rounded-lg bg-white/90 p-5 shadow-sm ring-1 ring-slate-200 backdrop-blur-sm md:bg-transparent md:p-0 md:shadow-none md:ring-0`}>
                    <div className="text-slate-700 font-mono text-xs font-bold mb-4 tracking-widest border border-slate-300 inline-block px-3 py-1 rounded bg-white/70 backdrop-blur-sm uppercase shadow-sm">
                        Service
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight drop-shadow-sm">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-0 md:mb-10 font-medium">
                        {subtitle}
                    </p>
                </div>

                {/* Right Column (Injected Form) */}
                {children && (
                    <div className="w-full max-w-md mx-auto lg:ml-auto">
                        {children}
                    </div>
                )}
            </div>

            {imageNote && (
                <div className="absolute right-4 top-48 z-10 rounded bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur-sm md:bottom-4 md:top-auto">
                    {imageNote}
                </div>
            )}
        </section>
    );
}
