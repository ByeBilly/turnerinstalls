import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Residential Flooring | Turner Installs - Brisbane Home Specialists",
  description:
    "Expert residential flooring installation. We treat your home with respect — no mess, immaculate clean-up, and flawless finishes for vinyl, hybrid, and timber floors.",
};

export default function Residential() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brisbane_skyline.png"
            alt="Beautiful Residential Flooring"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-4 py-1.5 mb-6 text-sm uppercase tracking-widest text-yellow-400 backdrop-blur-sm">
            Home Specialists
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Floors that make a house <br /> a <span className="text-yellow-400">home</span>.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're renovating a single room or building your dream home, we deliver showroom-quality finishes with zero stress.
          </p>
          <div className="flex gap-4 justify-center">
            <CTAButton href="/contact">Get a Quote</CTAButton>
          </div>
        </div>
      </section>

      {/* THE RESIDENTIAL PROMISE */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">We treat your home <br />like our own.</h2>
              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  Inviting tradespeople into your home requires trust. We honor that trust by ensuring our presence is as non-intrusive as possible.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "We never use your personal bins for waste.",
                    "We use industrial vacuums to leave zero dust.",
                    "We protect your existing walls and skirting.",
                    "We work quietly and respectfully."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 text-sm">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gray-800 bg-zinc-900">
                  <Image src="/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png" alt="Living Room" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gray-800 bg-zinc-900">
                  <Image src="/images/resource_aBEkaitrTCk72k87nfv_L8.png" alt="Bedroom Flooring" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-24 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Residential Process</h2>
            <p className="text-gray-400">Simple, transparent, and stress-free.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision and measure your space." },
              { step: "02", title: "Preparation", desc: "We uplift old floors and level the subfloor to perfection." },
              { step: "03", title: "Installation", desc: "Precision laying with tight cuts and clean transitions." },
              { step: "04", title: "Handover", desc: "A final clean and walkthrough to ensure you're 100% happy." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-black border border-gray-800">
                <div className="text-5xl font-bold text-yellow-400/10 absolute top-4 right-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-400 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to upgrade your home?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" className="!bg-black !text-white hover:!bg-gray-900 border-none">
              Get a Free Quote
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
