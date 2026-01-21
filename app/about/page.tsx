import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "About Turner Installs | Expert Flooring Contractors Brisbane",
  description:
    "Turner Installs is a Brisbane-based flooring contractor with 15+ years of experience. We specialise in precision installation, professional floor preparation, and immaculate clean-up.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="text-yellow-400">Turner Installs</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mb-6">
          For over 15 years, Turner Installs has been Brisbane's trusted flooring contractor. We're a
          small, expert team focused on doing things properly — no shortcuts, no compromises, just quality
          work that stands the test of time.
        </p>
      </section>

      {/* Our Story */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Our Story</h2>
        <div className="prose prose-invert max-w-3xl">
          <p className="text-xs text-gray-400 mb-4">
            Turner Installs was founded on a simple principle: do it right, or don't do it at all. With
            15+ years of experience in Brisbane's flooring industry, we've built our reputation on
            precision, reliability, and an unwavering commitment to customer satisfaction.
          </p>
          <p className="text-xs text-gray-400 mb-4">
            We're not a giant, faceless company. We're a small, expert team that takes pride in every
            project. Whether it's a residential renovation or a commercial fit-out, we approach each job
            with the same attention to detail and commitment to excellence.
          </p>
          <p className="text-xs text-gray-400">
            Our focus on floor preparation sets us apart. We understand that flawless floors start with
            flawless preparation. That's why we treat subfloor preparation as a specialised trade, not an
            afterthought. We invest the time and expertise needed to create mirror-flat surfaces that
            ensure your flooring looks perfect and performs flawlessly.
          </p>
        </div>
      </Section>

      {/* Our Values */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 text-center">
            <div className="text-sm font-semibold mb-2">Quality Work</div>
            <div className="text-xs text-gray-400">No shortcuts, no compromises</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 text-center">
            <div className="text-sm font-semibold mb-2">Customer Satisfaction</div>
            <div className="text-xs text-gray-400">Your satisfaction is our priority</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 text-center">
            <div className="text-sm font-semibold mb-2">Specialised Expertise</div>
            <div className="text-xs text-gray-400">15+ years of experience</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 text-center">
            <div className="text-sm font-semibold mb-2">Reliability</div>
            <div className="text-xs text-gray-400">On-time, every time</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 text-center">
            <div className="text-sm font-semibold mb-2">Integrity</div>
            <div className="text-xs text-gray-400">Honest, transparent, trustworthy</div>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section>
        <h2 className="text-lg uppercase tracking-wider mb-6">Our Approach</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Do It Properly</div>
            <div className="text-xs text-gray-400">
              We don't take shortcuts. Every step of the process — from subfloor preparation to final
              clean-up — is done with care and attention to detail.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Leave It Cleaner</div>
            <div className="text-xs text-gray-400">
              Our "leave it cleaner than we found it" ethos means we never use your bins, we vacuum
              thoroughly, and we ensure every speck of dust is gone before we leave.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">No Supervision Required</div>
            <div className="text-xs text-gray-400">
              Our teams are professional and self-managing. You don't need to supervise — we just get the
              job done right, every time.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-sm font-semibold mb-2 text-yellow-400">Trusted by Premium Partners</div>
            <div className="text-xs text-gray-400">
              Property managers and premium flooring retailers rely on us because we protect their
              reputation with consistent, professional results.
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-yellow-400/10 via-black to-black rounded-2xl border border-yellow-400/40 p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to Work With Us?</h2>
          <p className="text-sm text-gray-400 mb-6">
            Get in touch to discuss your flooring project.
          </p>
          <CTAButton href="/contact">Get in Touch</CTAButton>
        </div>
      </Section>
    </>
  );
}

