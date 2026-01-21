import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Turner Installs | Expert Flooring & Professional Floor Preparation – Brisbane",
  description:
    "15+ years experience in Brisbane. Expert flooring installation, professional floor preparation, and immaculate clean-up for residential and commercial clients.",
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Turner Installs",
            description: "Expert flooring contractor specialising in installation, preparation and repair",
            url: "https://turnerinstalls.com.au",
            telephone: "+61748022388",
            email: "liam@turnerinstalls.com.au",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Brisbane",
              addressRegion: "QLD",
              addressCountry: "AU",
            },
            areaServed: {
              "@type": "City",
              name: "Brisbane",
            },
            priceRange: "$$",
            openingHours: "Mo-Fr 07:00-17:00",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <div className="grid md:grid-cols-[1.4fr_1.1fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/40 rounded-full px-3 py-1 mb-4 text-xs uppercase tracking-wider text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.2)]"></div>
              BRISBANE · FLOORING CONTRACTOR
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Flawless floors start with{" "}
              <span className="text-yellow-400">flawless preparation</span>
            </h1>
            <p className="text-sm text-gray-400 max-w-lg mb-5">
              Turner Installs delivers vinyl plank, hybrid, timber and laminate installations with
              professional floor preparation, engineered flood levelling and immaculate clean-up for
              residential homes, property managers and premium flooring retailers.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 text-xs text-gray-400 mb-5">
              <span className="before:content-['•'] before:text-yellow-400 before:mr-1">
                Vinyl, hybrid, timber & laminate
              </span>
              <span className="before:content-['•'] before:text-yellow-400 before:mr-1">
                Engineered flood levelling
              </span>
              <span className="before:content-['•'] before:text-yellow-400 before:mr-1">
                Carpet uplift & disposal
              </span>
              <span className="before:content-['•'] before:text-yellow-400 before:mr-1">
                Zero-mess completion
              </span>
              <span className="before:content-['•'] before:text-yellow-400 before:mr-1">
                15+ years' experience
              </span>
            </div>
            <div className="flex flex-wrap gap-3 items-center mb-4">
              <CTAButton href="/contact">Request a quote</CTAButton>
              <a
                href="tel:0748022388"
                className="text-xs text-gray-400 hover:text-gray-100 transition-colors"
              >
                Or call: <span className="text-yellow-400 font-semibold">07 4802 2388</span>
              </a>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-gray-800 rounded-full px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              No use of client bins · Floors left vacuumed and dust-free
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5 shadow-2xl">
              <div className="flex justify-between items-center mb-3">
                <div className="text-xs uppercase tracking-wider text-gray-400">Installation Workflow</div>
                <div className="text-xs px-2 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/50 text-yellow-400 uppercase tracking-wider">
                  Full-Service
                </div>
              </div>
              <div className="space-y-2.5 mb-3">
                <div className="bg-white/5 border border-gray-800 rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                    Step 1 · Uplift & Removal
                  </div>
                  <div className="text-sm font-semibold mb-1">Old floor out, waste off-site.</div>
                  <div className="text-xs text-gray-400">
                    Existing carpet or hard flooring is uplifted, removed from site and disposed of — never
                    in your bins.
                  </div>
                </div>
                <div className="bg-white/5 border border-gray-800 rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                    Step 2 · Professional Floor Prep
                  </div>
                  <div className="text-sm font-semibold mb-1">Engineered flood levelling.</div>
                  <div className="text-xs text-gray-400">
                    Subfloors are corrected, patched and flood-levelled with engineered compounds for
                    mirror-flat finishes.
                  </div>
                </div>
                <div className="bg-white/5 border border-gray-800 rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                    Step 3 · Precision Installation
                  </div>
                  <div className="text-sm font-semibold mb-1">Showroom-ready finish.</div>
                  <div className="text-xs text-gray-400">
                    Planks are installed with tight transitions, clean trims and a dust-free,
                    ready-to-furnish handover.
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
                <div>
                  Built for <span className="text-yellow-400 font-semibold">homeowners, property managers & retailers</span>.
                </div>
                <div className="text-[10px]">Brisbane · Ipswich · Surrounds</div>
              </div>
              {/* Image strip */}
              <div className="grid grid-cols-3 gap-1.5 mt-3">
                <div className="relative h-16 rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
                  <Image
                    src="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                    alt="Full-service flooring"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-16 rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
                  <Image
                    src="/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                    alt="Old floor removal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-16 rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
                  <Image
                    src="/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
                    alt="Flawless floors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Turner Installs */}
      <Section>
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-6">
          <h2 className="text-lg uppercase tracking-wider">Why Turner Installs</h2>
          <p className="text-xs text-gray-400 max-w-md">
            The difference between "just laid" and "built to last" is in the details.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Expertise</div>
            <div className="text-sm font-semibold mb-1">Engineered Floor Preparation</div>
            <div className="text-xs text-gray-400">
              Mirror-flat surfaces achieved through professional flood levelling techniques.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Precision</div>
            <div className="text-sm font-semibold mb-1">Showroom-Quality Installation</div>
            <div className="text-xs text-gray-400">
              Tight transitions, clean trims, and attention to every detail.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Cleanliness</div>
            <div className="text-sm font-semibold mb-1">Immaculate Clean-Up</div>
            <div className="text-xs text-gray-400">
              No mess, no use of client bins. Floors left vacuumed and dust-free.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Trust</div>
            <div className="text-sm font-semibold mb-1">Trusted by Premium Partners</div>
            <div className="text-xs text-gray-400">
              Property managers and premium flooring retailers rely on our reliability.
            </div>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section id="services">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-6">
          <h2 className="text-lg uppercase tracking-wider">Services</h2>
          <p className="text-xs text-gray-400 max-w-md">
            Full-service flooring — from uplift and floor preparation through to final installation and
            clean-up.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/services/floor-preparation"
            className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 hover:border-yellow-400/50 transition-colors"
          >
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Installations</div>
            <div className="text-sm font-semibold mb-1">Vinyl Plank Installs</div>
            <div className="text-xs text-gray-400">
              Professional installation of luxury vinyl plank flooring with precision transitions and
              clean finishes.
            </div>
          </Link>
          <Link
            href="/services/floor-preparation"
            className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 hover:border-yellow-400/50 transition-colors"
          >
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Installations</div>
            <div className="text-sm font-semibold mb-1">Timber & Laminate Installs</div>
            <div className="text-xs text-gray-400">
              Expert installation of engineered timber and laminate systems with attention to detail.
            </div>
          </Link>
          <Link
            href="/services/floor-preparation"
            className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 hover:border-yellow-400/50 transition-colors"
          >
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Installations</div>
            <div className="text-sm font-semibold mb-1">Hybrid Flooring Installs</div>
            <div className="text-xs text-gray-400">
              Professional hybrid flooring installation combining the best of vinyl and laminate.
            </div>
          </Link>
          <Link
            href="/commercial"
            className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 hover:border-yellow-400/50 transition-colors"
          >
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Commercial</div>
            <div className="text-sm font-semibold mb-1">Commercial Plank Installs</div>
            <div className="text-xs text-gray-400">
              Reliable commercial flooring solutions for offices, retail spaces, and multi-site projects.
            </div>
          </Link>
          <Link
            href="/services/floor-preparation"
            className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 hover:border-yellow-400/50 transition-colors"
          >
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Preparation</div>
            <div className="text-sm font-semibold mb-1">Floor Preparation & Levelling</div>
            <div className="text-xs text-gray-400">
              Engineered flood levelling, subfloor corrections, and mirror-flat surface preparation.
            </div>
          </Link>
          <Link
            href="/services/floor-preparation"
            className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4 hover:border-yellow-400/50 transition-colors"
          >
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Removal</div>
            <div className="text-sm font-semibold mb-1">Removal & Disposal</div>
            <div className="text-xs text-gray-400">
              Clean removal and off-site disposal of existing floors. Never use client bins.
            </div>
          </Link>
        </div>
      </Section>

      {/* Our Process */}
      <Section>
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-6">
          <h2 className="text-lg uppercase tracking-wider">Our Process</h2>
          <p className="text-xs text-gray-400 max-w-md">
            A proven workflow that ensures flawless results from start to finish.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-yellow-400 text-2xl font-bold mb-2">1</div>
            <div className="text-sm font-semibold mb-1">Old Floor Removal</div>
            <div className="text-xs text-gray-400">
              Existing flooring is carefully removed and disposed of off-site. We never use your bins.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-yellow-400 text-2xl font-bold mb-2">2</div>
            <div className="text-sm font-semibold mb-1">Subfloor Assessment & Preparation</div>
            <div className="text-xs text-gray-400">
              Thorough inspection followed by engineered preparation including flood levelling for
              mirror-flat surfaces.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-yellow-400 text-2xl font-bold mb-2">3</div>
            <div className="text-sm font-semibold mb-1">Precision Laying</div>
            <div className="text-xs text-gray-400">
              Expert installation with tight transitions, clean trims, and showroom-quality finishes.
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-yellow-400 text-2xl font-bold mb-2">4</div>
            <div className="text-sm font-semibold mb-1">Final Clean & Inspection</div>
            <div className="text-xs text-gray-400">
              Floors are vacuumed, wiped down, and inspected. Ready for you to move back in immediately.
            </div>
          </div>
        </div>
      </Section>

      {/* Who We Work With */}
      <Section id="clients">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-6">
          <h2 className="text-lg uppercase tracking-wider">Who We Work With</h2>
          <p className="text-xs text-gray-400 max-w-md">
            Built for clients who value reliability, cleanliness and work that "just gets handled" —
            without call-backs or supervision.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-2">Residential</div>
            <div className="text-base font-semibold mb-2">Homeowners & Renovators</div>
            <div className="text-xs text-gray-400 mb-4">
              Upgrading living spaces, replacing tired carpet or modernising with planks. We protect
              existing finishes, keep dust under control and leave homes ready to move straight back
              into.
            </div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li className="before:content-['–'] before:text-yellow-400 before:mr-2">
                New builds and renovations
              </li>
              <li className="before:content-['–'] before:text-yellow-400 before:mr-2">
                Rental property upgrades
              </li>
              <li className="before:content-['–'] before:text-yellow-400 before:mr-2">
                Quiet, respectful teams
              </li>
              <li className="before:content-['–'] before:text-yellow-400 before:mr-2">
                Immaculate clean-up
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-2">Commercial</div>
            <div className="text-base font-semibold mb-2">Property Managers & Premium Retailers</div>
            <div className="text-xs text-gray-400 mb-4">
              Fast, no-drama flooring for rentals and reliable trade partner for premium flooring
              retailers. When your name is on the product, you need installers who protect your
              reputation.
            </div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li className="before:content-['–'] before:text-yellow-400 before:mr-2">
                Time-sensitive bookings
              </li>
              <li className="before:content-['–'] before:text-yellow-400 before:mr-2">
                Staging work to minimise downtime
              </li>
              <li className="before:content-['–'] before:text-yellow-400 before:mr-2">
                Consistent quality across multiple sites
              </li>
              <li className="before:content-['–'] before:text-yellow-400 before:mr-2">
                White-label installation partner
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-6">
          <h2 className="text-lg uppercase tracking-wider">What Our Clients Say</h2>
          <p className="text-xs text-gray-400 max-w-md">
            {/* Dummy testimonials - replace with real ones */}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Dummy testimonial 1 */}
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-xs text-gray-400 mb-2 italic">
              "Turner Installs transformed our home. The floor preparation was flawless and the installation
              was perfect. They left everything spotless."
            </div>
            <div className="text-xs text-gray-500">— Homeowner, Brisbane</div>
          </div>
          {/* Dummy testimonial 2 */}
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-xs text-gray-400 mb-2 italic">
              "As a property manager, I rely on Turner Installs for quick turnarounds. They're always
              professional, clean, and reliable."
            </div>
            <div className="text-xs text-gray-500">— Property Manager, Brisbane</div>
          </div>
          {/* Dummy testimonial 3 */}
          <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-4">
            <div className="text-xs text-gray-400 mb-2 italic">
              "We've used Turner Installs for years. Their floor preparation work is exceptional and
              protects our brand reputation."
            </div>
            <div className="text-xs text-gray-500">— Premium Flooring Retailer</div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="bg-gradient-to-r from-yellow-400/10 via-black to-black rounded-2xl border border-yellow-400/40 p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Ready for a Flawless Finish?</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-2xl mx-auto">
            Get in touch today for a quote or site visit. We're here to help you achieve the perfect
            floor.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <CTAButton href="/contact">Request a Quote</CTAButton>
            <CTAButton href="tel:0748022388" variant="secondary">
              Call 07 4802 2388
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}

