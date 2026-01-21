import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Residential Flooring Installation Brisbane | Turner Installs",
  description:
    "Expert residential flooring installation for homeowners in Brisbane. Vinyl plank, hybrid, timber and laminate installations with professional preparation and immaculate clean-up.",
};

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Residential Flooring <span className="text-yellow-400">for Your Home</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mb-6">
          Upgrading your home with new floors? Turner Installs specialises in residential flooring
          installations that transform your living spaces. We handle everything from removal to final
          clean-up, leaving your home ready to move back into.
        </p>
        <CTAButton href="/contact">Request a Quote</CTAButton>
      </section>

      {/* Why Choose Us for Residential */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Why Homeowners Choose Turner Installs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Quiet & Respectful</div>
            <div className="text-xs text-gray-400">
              Our teams understand that your home is your sanctuary. We work quietly, respect your space,
              and minimise disruption to your daily life.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Immaculate Clean-Up</div>
            <div className="text-xs text-gray-400">
              We leave your home cleaner than we found it. Floors are vacuumed, dust is gone, and we
              never use your bins for waste disposal.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Protection of Existing Finishes</div>
            <div className="text-xs text-gray-400">
              We protect your existing finishes, walls, and fixtures throughout the installation process.
              Your home stays safe and intact.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Ready to Move Back In</div>
            <div className="text-xs text-gray-400">
              Once we're done, your floors are ready. No waiting, no additional cleaning needed. Move your
              furniture back in immediately.
            </div>
          </div>
        </div>
      </Section>

      {/* Services for Residential */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Residential Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-sm font-semibold mb-2">New Builds</div>
            <div className="text-xs text-gray-400">
              Professional flooring installation for new construction projects. We work with builders and
              homeowners to deliver showroom-quality finishes.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-sm font-semibold mb-2">Renovations</div>
            <div className="text-xs text-gray-400">
              Transform your home with modern flooring. We handle the entire process from old floor removal
              to new installation.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-sm font-semibold mb-2">Rental Property Upgrades</div>
            <div className="text-xs text-gray-400">
              Upgrade your investment property with durable, low-maintenance flooring that appeals to
              tenants and adds value.
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">Do you handle removal and disposal?</div>
            <div className="text-xs text-gray-400">
              Yes, we handle complete removal of existing flooring and dispose of it off-site. We never
              use your bins or leave waste on your property.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">Can you level uneven concrete?</div>
            <div className="text-xs text-gray-400">
              Absolutely. We specialise in engineered flood levelling to create mirror-flat surfaces. This
              is essential for high-gloss or highly reflective flooring finishes.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">Do I need to move furniture?</div>
            <div className="text-xs text-gray-400">
              We can work around furniture in some cases, but for best results, we recommend clearing the
              room. We can discuss options during your site visit.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">How long does installation take?</div>
            <div className="text-xs text-gray-400">
              Timeline depends on the size of the area and complexity of preparation needed. Most
              residential projects are completed within 1-3 days. We'll provide a timeline during your
              quote.
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-yellow-400/10 via-black to-black rounded-2xl border border-yellow-400/40 p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to Transform Your Home?</h2>
          <p className="text-sm text-gray-400 mb-6">
            Get a quote for your residential flooring project today.
          </p>
          <CTAButton href="/contact">Request a Quote</CTAButton>
        </div>
      </Section>
    </>
  );
}

