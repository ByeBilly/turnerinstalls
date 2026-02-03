import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Ipswich Timber Flooring & Floor Prep | Turner Installs",
    description:
        "Expert floor preparation, concrete grinding, and timber flooring installation in Ipswich, QLD. Local master installers with 3 generations of experience.",
};

export default function Ipswich() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/installspics/finished/paddington-queenslander-flooring.jpg"
                        alt="Timber Flooring Ipswich"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-5 relative z-10 text-center">
                    <div className="inline-block bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
                        Servicing Ipswich & Surrounds
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                        Flooring Excellence <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                            In Ipswich.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
                        From heritage Queenslanders in Sadliers Crossing to modern homes in Springfield.
                        We provide precision floor preparation and premium timber installation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton
                            href="/contact"
                            variant="primary"
                            className="w-full sm:w-auto"
                        >
                            Get a Free Quote
                        </CTAButton>
                        <CTAButton
                            href="tel:0413592054"
                            variant="secondary"
                            className="w-full sm:w-auto"
                        >
                            Call Liam: 0413 592 054
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Local Context Section */}
            <Section className="bg-white">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                            Local Ipswich <br />
                            <span className="text-yellow-500">Flooring Specialists</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Ipswich homes have unique character, from classic timber footing foundations to modern slab-on-ground constructions. We understand the specific preparation requirements for the region's diverse housing stock.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Whether you need to level a flood-affected subfloor or install premium oak in a new build, Turner Installs brings 3 generations of expertise to your project.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Concrete Grinding & Levelling",
                                "Timber & Hybrid Installation",
                                "Subfloor Rectification",
                                "Flood Damage Restoration",
                                "Old Carpet & Tile Removal",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 text-xs shadow-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                        <Image
                            src="/installspics/finished/new-farm-living-area-timber.jpg"
                            alt="Premium hardwood flooring installation"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </Section>

            {/* Services Grid */}
            <Section className="bg-slate-50">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Services in Ipswich</h2>
                    <p className="text-slate-600 text-lg">Comprehensive flooring solutions for renovations and new builds.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 group">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src="/installspics/prep/level/lows-identified-and-filled.jpg"
                                alt="Floor Levelling Ipswich"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-black text-slate-900 mb-3">Floor Levelling</h3>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                Critical for Ipswich's reactive soil movement. We laser-level subfloors to ensure your new floor sits perfectly flat and creates a solid foundation.
                            </p>
                            <Link href="/services/floor-preparation" className="text-slate-900 font-bold uppercase text-xs tracking-wider border-b-2 border-yellow-400 pb-1 hover:text-yellow-600 transition-colors">
                                View Prep Services
                            </Link>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 group">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src="/installspics/finished/finished-timber-floor-display.jpg"
                                alt="Timber Installation Ipswich"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-black text-slate-900 mb-3">Timber Installation</h3>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                Expert installation of solid timber, engineered oak, and hybrid flooring. We handle everything from acoustic underlay to the final trim.
                            </p>
                            <Link href="/services" className="text-slate-900 font-bold uppercase text-xs tracking-wider border-b-2 border-yellow-400 pb-1 hover:text-yellow-600 transition-colors">
                                View Flooring Options
                            </Link>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 group">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src="/installspics/prep/floods/perfect-flood-level-mirror-finish.jpg"
                                alt="Concrete Grinding Ipswich"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-black text-slate-900 mb-3">Concrete Grinding</h3>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                Removal of old glue, paint, and high spots. Essential prep for renovations in older Ipswich homes or post-tile removal.
                            </p>
                            <Link href="/services/concrete-grinding" className="text-slate-900 font-bold uppercase text-xs tracking-wider border-b-2 border-yellow-400 pb-1 hover:text-yellow-600 transition-colors">
                                View Grinding Services
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* On The Job Section */}
            <Section className="bg-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                                <Image src="/installspics/laying/minimal-mess-installation.jpg" alt="Clean installation process" fill className="object-cover" />
                            </div>
                            <div className="relative h-32 rounded-lg overflow-hidden shadow-md">
                                <Image src="/installspics/laying/furniture-handling-during-installation.jpg" alt="Moving furniture" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="relative h-32 rounded-lg overflow-hidden shadow-md">
                                <Image src="/installspics/locations/ipswich.jpg" alt="Ipswich Project" fill className="object-cover" />
                            </div>
                            <div className="relative h-56 rounded-lg overflow-hidden shadow-md">
                                <Image src="/installspics/locations/ipswich1.jpg" alt="Ipswich Floor" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">The Process</div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                            Minimal Mess. <br /><span className="text-yellow-500">Maximum Quality.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 font-medium">
                            We treat your home with respect. Our "clean logic" installation process means we manage dust, protect your furniture, and leave your site cleaner than we found it.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-yellow-500 font-black text-xl">1</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-1">Protection</h4>
                                    <p className="text-sm text-slate-600">We shield non-work areas and use dust extraction systems during all grinding.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-yellow-500 font-black text-xl">2</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-1">Precision</h4>
                                    <p className="text-sm text-slate-600">Every cut is measured twice. Every low spot is filled. No shortcuts.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-yellow-500 font-black text-xl">3</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-1">Communication</h4>
                                    <p className="text-sm text-slate-600">Direct line to Liam (Owner) throughout the entire Ipswich project.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">Ready to transform your Ipswich home?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <CTAButton
                            href="/contact"
                            variant="primary"
                            className="w-full"
                        >
                            Book a Free Measure
                        </CTAButton>
                        <CTAButton
                            href="tel:0413592054"
                            variant="secondary"
                            className="w-full"
                        >
                            Call Liam Now
                        </CTAButton>
                    </div>
                </div>
            </section>
        </>
    );
}
