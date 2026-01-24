import Image from "next/image";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "About Us | Turner Installs - 3 Generations of Flooring Excellence",
  description:
    "Meet the team behind Turner Installs. A third-generation family business delivering expert flooring installation and preparation in Brisbane.",
};

export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brisbane_skyline.png"
            alt="Turner Installs Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
          <div className="text-yellow-400 font-bold uppercase tracking-widest mb-4 text-sm">Our Story</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Flooring is in our blood.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Three generations of knowledge passed down from grandfather, to father, to son.
            We don't just lay floors; we carry on a legacy of craftsmanship.
          </p>
        </div>
      </section>

      {/* THE LEGACY STORY */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                From Grandfather <br />
                <span className="text-gray-500">to Father to Son.</span>
              </h2>
              <div className="prose prose-invert prose-lg text-gray-400">
                <p>
                  It started decades ago with my grandfather, a master tradesman who believed that if a job wasn't done perfectly, it wasn't done at all. He taught my father everything he knew—not just the how, but the <em>why</em>.
                </p>
                <p>
                  Growing up, I watched my father work with the same obsessive attention to detail. I learned the trade at his side, absorbing the tricks of the trade that you can't learn in a classroom.
                </p>
                <p>
                  Today, as the third generation, <strong>Liam Turner</strong> brings that lifetime of inherited knowledge to every project. When we walk onto a site, we bring history with us. That's why we don't cut corners. That's why our prep is mirror-flat. Because our family name is on the line.
                </p>
              </div>
              <div className="pt-4">
                <CTAButton href="/contact">Work With Us</CTAButton>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden border border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
                  alt="Flooring Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-zinc-900 border border-gray-800 p-6 rounded-2xl max-w-xs shadow-2xl">
                <div className="text-4xl font-bold text-yellow-400 mb-2">3rd</div>
                <div className="text-sm font-semibold text-white">Generation Craftsman</div>
                <div className="text-xs text-gray-400 mt-1">Carrying the torch of excellence.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-gray-400">The values that have kept us in business for decades.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold mb-6">01</div>
              <h3 className="text-xl font-bold mb-3">Honest Advice</h3>
              <p className="text-gray-400">We'll tell you exactly what your floor needs, even if it means telling you not to spend money on something you don't need.</p>
            </div>
            <div className="bg-black border border-gray-800 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold mb-6">02</div>
              <h3 className="text-xl font-bold mb-3">Zero Mess</h3>
              <p className="text-gray-400">We respect your property. We don't use your bins, we vacuum every speck of dust, and we leave your place spotless.</p>
            </div>
            <div className="bg-black border border-gray-800 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold mb-6">03</div>
              <h3 className="text-xl font-bold mb-3">No Shortcuts</h3>
              <p className="text-gray-400">From the subfloor up. If the prep isn't right, the floor isn't right. We do it once, and we do it perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to meet the team?</h2>
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and how we can bring our expertise to your floor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" className="!bg-black !text-white hover:!bg-gray-900 border-none">
              Get in Touch
            </CTAButton>
            <CTAButton href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE?.replace(/\s/g, "")}`} variant="secondary" className="!border-black/20 !text-black hover:!bg-black/5">
              Call {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
