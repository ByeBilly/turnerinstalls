import Image from "next/image";

interface ServiceHeroProps {
    title: React.ReactNode;
    subtitle: string;
    imagePath: string;
    label?: string;
    overlayOpacity?: number;
    children?: React.ReactNode; // Content to inject (e.g. Form)
}

export default function ServiceHero({
    title,
    subtitle,
    imagePath,
    label = "TECHNICAL_SERVICES",
    overlayOpacity = 40,
    children
}: ServiceHeroProps) {
    return (
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
            <div className="absolute inset-0 z-0">
                <Image
                    src={imagePath}
                    alt="Service Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Light Overlay for Daytime Look */}
                <div className={`absolute inset-0 bg-white/80 md:bg-white/70`} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
            </div>

            <div className={`relative z-10 max-w-7xl mx-auto px-5 w-full ${children ? 'grid lg:grid-cols-2 gap-12 items-center' : 'text-center'}`}>

                {/* Left Column (Text) */}
                <div className={children ? 'text-left' : 'max-w-4xl mx-auto'}>
                    <div className="text-slate-700 font-mono text-xs font-bold mb-4 tracking-widest border border-slate-300 inline-block px-3 py-1 rounded bg-white/60 backdrop-blur-sm uppercase shadow-sm">
                        Service
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight drop-shadow-sm">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-700 leading-relaxed mb-10 font-medium">
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
        </section>
    );
}
