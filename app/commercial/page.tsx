import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Commercial Flooring Installation Brisbane | Turner Installs",
  description:
    "Reliable commercial flooring solutions for property managers, strata, offices, and retail spaces. Trusted by premium flooring retailers as a white-label installation partner.",
};

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Commercial Flooring <span className="text-yellow-400">Solutions</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mb-6">
          When your business needs reliable flooring installation, Turner Installs delivers. We work with
          property managers, strata bodies, office fit-outs, retail spaces, and premium flooring retailers
          who need consistent, professional results.
        </p>
        <CTAButton href="/contact">Request a Quote</CTAButton>
      </section>

      {/* Who We Serve */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Who We Work With</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">Property Managers</div>
            <div className="text-xs text-gray-400">
              Fast, no-drama flooring for rental turnovers and make-goods. Carpet uplift, subfloor prep,
              new planks down and keys back — with minimal tenant disruption.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">Strata Bodies</div>
            <div className="text-xs text-gray-400">
              Reliable flooring solutions for common areas, lobbies, and unit upgrades. We understand
              strata requirements and work within your timelines.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2">Office & Retail</div>
            <div className="text-xs text-gray-400">
              Professional flooring installation for commercial spaces. We stage work to minimise business
              downtime and ensure clean handovers.
            </div>
          </div>
        </div>
      </Section>

      {/* Why Commercial Clients Choose Us */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Why Commercial Clients Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Time-Sensitive Bookings</div>
            <div className="text-xs text-gray-400">
              We understand commercial deadlines. We schedule efficiently and deliver on time, every time.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Minimise Business Downtime</div>
            <div className="text-xs text-gray-400">
              We stage work to minimise disruption. For retail and office spaces, we work around your
              operations where possible.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Consistent Quality</div>
            <div className="text-xs text-gray-400">
              Whether it's one site or multiple locations, we deliver consistent, professional results across
              all projects.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">No Supervision Required</div>
            <div className="text-xs text-gray-400">
              Our teams are professional and self-managing. You don't need to supervise — we just get the
              job done right.
            </div>
          </div>
        </div>
      </Section>

      {/* For Flooring Retailers */}
      <Section>
        <div className="bg-gradient-to-r from-yellow-400/10 via-black to-black rounded-2xl border border-yellow-400/40 p-6">
          <h2 className="text-lg font-semibold mb-3">For Flooring Retailers</h2>
          <p className="text-xs text-gray-400 mb-4">
            Turner Installs operates as a white-label installation partner for premium flooring retailers.
            When your name is on the product, you need installers who protect your reputation.
          </p>
          <div className="space-y-2 text-xs text-gray-400">
            <div className="before:content-['–'] before:text-yellow-400 before:mr-2">
              We act as a quiet, reliable extension of your brand
            </div>
            <div className="before:content-['–'] before:text-yellow-400 before:mr-2">
              Professional crews and tidy sites
            </div>
            <div className="before:content-['–'] before:text-yellow-400 before:mr-2">
              Consistent quality that reflects your standards
            </div>
            <div className="before:content-['–'] before:text-yellow-400 before:mr-2">
              No callbacks, no complaints — just reliable results
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-yellow-400/10 via-black to-black rounded-2xl border border-yellow-400/40 p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to Partner With Us?</h2>
          <p className="text-sm text-gray-400 mb-6">
            Get in touch to discuss your commercial flooring needs.
          </p>
          <CTAButton href="/contact">Request a Quote</CTAButton>
        </div>
      </Section>
    </>
  );
}

