import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Professional Floor Preparation & Levelling Brisbane | Turner Installs",
  description:
    "Expert floor preparation and engineered flood levelling in Brisbane. Mirror-flat surfaces for high-gloss and highly reflective flooring finishes. Subfloor correction, grinding, and moisture treatment.",
};

export default function FloorPreparationPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Professional Floor <span className="text-yellow-400">Preparation</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mb-6">
          The difference between "just laid" and "built to last" is the substrate. Turner Installs
          treats floor preparation as a specialised trade, not an afterthought. We create mirror-flat
          surfaces that ensure your flooring looks perfect and performs flawlessly.
        </p>
        <CTAButton href="/contact">Request a Quote</CTAButton>
      </section>

      {/* Why Preparation Matters */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Why Floor Preparation Matters</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">High-Gloss Finishes</div>
            <div className="text-xs text-gray-400">
              For high-gloss or highly reflective flooring, imperfections in the slab show through. Our
              engineered flood levelling creates a smooth, consistent base that looks right — and feels
              right — underfoot.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Long Plank Products</div>
            <div className="text-xs text-gray-400">
              Long planks require exceptionally flat surfaces. Any dips, waves, or high spots will cause
              visible issues and potential failures. Our preparation ensures perfect results.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Avoid Callbacks</div>
            <div className="text-xs text-gray-400">
              Good preparation avoids callbacks and failures. By investing in proper subfloor preparation,
              we ensure your flooring installation lasts for years without issues.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Manufacturer Warranties</div>
            <div className="text-xs text-gray-400">
              Proper preparation protects manufacturer warranties. We ensure moisture levels and flatness
              meet or exceed manufacturer specifications.
            </div>
          </div>
        </div>
      </Section>

      {/* Our Preparation Process */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Our Preparation Process</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">1. Subfloor Inspection</div>
            <div className="text-xs text-gray-400">
              We thoroughly inspect your subfloor for moisture issues, cracks, high spots, low spots, and
              overall flatness. This assessment guides our preparation approach.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">2. Grinding & Repairs</div>
            <div className="text-xs text-gray-400">
              High spots are ground down, cracks are filled, and any damaged areas are repaired. We ensure
              a solid, stable base before levelling.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">3. Moisture Treatment</div>
            <div className="text-xs text-gray-400">
              We test for moisture and apply appropriate treatments if needed. This protects your flooring
              and maintains manufacturer warranties.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">4. Engineered Flood Levelling</div>
            <div className="text-xs text-gray-400">
              Using engineered cementitious compounds, we "flood" the surface to achieve mirror-flat
              finishes. This is critical for high-gloss or highly reflective floors where any imperfection
              would be visible.
            </div>
          </div>
        </div>
      </Section>

      {/* The Foundation of Flawless */}
      <Section>
        <div className="bg-gradient-to-r from-yellow-400/10 via-black to-black rounded-2xl border border-yellow-400/40 p-6">
          <h2 className="text-lg font-semibold mb-3">The Foundation of Flawless</h2>
          <p className="text-xs text-gray-400 mb-4">
            For high-end vinyl and hybrid floors, imperfections in the slab show through. Turner Installs
            uses engineered compounds to "flood" and level the surface, creating a smooth, consistent base
            that looks right — and feels right — underfoot.
          </p>
          <p className="text-xs text-gray-400">
            This level of preparation is what separates professional installations from DIY attempts. We
            don't take shortcuts. We do it properly, so your floors look perfect and last for years.
          </p>
        </div>
      </Section>

      {/* What We Prepare */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">What We Prepare</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-sm font-semibold mb-2">Concrete Slabs</div>
            <div className="text-xs text-gray-400">
              Grinding, patching, and flood levelling for mirror-flat concrete surfaces.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-sm font-semibold mb-2">Particleboard</div>
            <div className="text-xs text-gray-400">
              Assessment and preparation of particleboard subfloors, including repairs and levelling.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-sm font-semibold mb-2">Existing Tiles</div>
            <div className="text-xs text-gray-400">
              Preparation of tiled surfaces, including levelling over tiles where appropriate.
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-yellow-400/10 via-black to-black rounded-2xl border border-yellow-400/40 p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready for Professional Preparation?</h2>
          <p className="text-sm text-gray-400 mb-6">
            Get a quote for your floor preparation project today.
          </p>
          <CTAButton href="/contact">Request a Quote</CTAButton>
        </div>
      </Section>
    </>
  );
}

