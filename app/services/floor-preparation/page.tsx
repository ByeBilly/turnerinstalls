import Image from "next/image";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Floor Preparation & Levelling | Turner Installs Brisbane",
  description:
    "Professional floor preparation, flood levelling, and subfloor grinding. We create the perfect foundation for your new floor.",
};

export default function FloorPrep() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
            alt="Engineered Floor Preparation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
          <div className="text-gray-400 font-mono text-sm mb-4 tracking-widest border border-gray-700 inline-block px-3 py-1 rounded bg-black/50">
             // TECHNICAL_SERVICES
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            The Science of <br /> <span className="text-yellow-500">Flat Surfaces</span>.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Engineered flood levelling and subfloor correction. Because a floor is only as good as what's underneath it.
          </p>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <div className="h-px w-20 bg-yellow-500 mb-8"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Prep Matters</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Most flooring failures happen because of the subfloor. Moisture issues, uneven heights, and crumbling concrete can destroy a new floor in months.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We use laser-guided assessment and engineered self-levelling compounds to create a substrate that is chemically bonded, structural, and perfectly flat.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-zinc-900 border border-gray-800 p-6 rounded-xl flex gap-4 items-start hover:border-yellow-500/50 transition-colors group">
                <div className="w-12 h-12 bg-black border border-gray-800 rounded-lg flex items-center justify-center text-2xl group-hover:bg-yellow-500 group-hover:text-black transition-colors">📐</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Laser Levelling</h3>
                  <p className="text-sm text-gray-400">Precision height mapping to identify high and low spots within millimeters.</p>
                </div>
              </div>
              <div className="bg-zinc-900 border border-gray-800 p-6 rounded-xl flex gap-4 items-start hover:border-yellow-500/50 transition-colors group">
                <div className="w-12 h-12 bg-black border border-gray-800 rounded-lg flex items-center justify-center text-2xl group-hover:bg-yellow-500 group-hover:text-black transition-colors">💧</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Moisture Barriers</h3>
                  <p className="text-sm text-gray-400">Application of epoxy moisture barriers to prevent rising damp destroying your floor.</p>
                </div>
              </div>
              <div className="bg-zinc-900 border border-gray-800 p-6 rounded-xl flex gap-4 items-start hover:border-yellow-500/50 transition-colors group">
                <div className="w-12 h-12 bg-black border border-gray-800 rounded-lg flex items-center justify-center text-2xl group-hover:bg-yellow-500 group-hover:text-black transition-colors">⚖️</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Flood Levelling</h3>
                  <p className="text-sm text-gray-400">Pouring commercial-grade self-levelling compound for mirror-flat finishes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-zinc-900 border-y border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="aspect-square relative grayscale hover:grayscale-0 transition-all">
            <Image src="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png" alt="Prep 1" fill className="object-cover" />
          </div>
          <div className="aspect-square relative grayscale hover:grayscale-0 transition-all">
            <Image src="/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png" alt="Prep 2" fill className="object-cover" />
          </div>
          <div className="aspect-square relative grayscale hover:grayscale-0 transition-all">
            <Image src="/images/resource_9fVqoabE10H5PDfVW4rOXY.png" alt="Prep 3" fill className="object-cover" />
          </div>
          <div className="aspect-square relative grayscale hover:grayscale-0 transition-all">
            <Image src="/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png" alt="Prep 4" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't risk your expensive floor.</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Get the preparation right the first time. Contact us for a subfloor assessment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">
              Book Assessment
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
