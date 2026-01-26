import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import ModernGallery from "@/components/ModernGallery";

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
            email: "liam@turnerinstalls.com",
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

      {/* NEW HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brisbane_skyline.png"
            alt="Turner Installs - Brisbane Flooring Specialists"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-4 py-1.5 mb-8 text-sm uppercase tracking-widest text-yellow-400 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_0_4px_rgba(250,204,21,0.2)]"></div>
            Brisbane & SE Qld Area Flooring Specialist
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
            Flawless floors start with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              flawless preparation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            From residential upgrades to commercial fit-outs. We deliver engineered flood levelling,
            precision installation, and zero-mess completion.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full hover:bg-yellow-300 transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE?.replace(/\s/g, "")}`}
              className="px-8 py-4 bg-white/10 text-white font-medium text-lg rounded-full border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Call {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* LEGACY / STORY SECTION */}
      <section className="py-24 md:py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
                <Image
                  src="/images/IMG_6636.jpeg"
                  alt="Staircase Flooring Installation"
                  fill
                  className="object-cover"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl"></div>
              </div>
            </div>
            <div>
              <div className="text-yellow-600 font-bold tracking-wider uppercase mb-4">Our Heritage</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Three generations of <br />
                <span className="text-gray-500">flooring expertise.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Flooring isn't just a trade for us—it's in our blood. From grandfather, to father, to son.
                </p>
                <p>
                  Liam Turner represents the third generation of floor layers in our family. The skills,
                  techniques, and obsessive attention to detail passed down through the decades mean you aren't
                  getting someone who learned from a quick course. You're getting a lifetime of knowledge in every square metre.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-px flex-1 bg-gray-200"></div>
                  <span className="text-sm uppercase tracking-widest text-gray-400">Since Day One</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TURNER INSTALLS - Redesigned */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Turner Installs?</h2>
            <p className="text-gray-600">The difference isn't just in how it looks on day one, but how it lasts for years to come.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expertise", subtitle: "Engineered Prep", desc: "Mirror-flat surfaces through professional flood levelling." },
              { title: "Precision", subtitle: "Showroom Finish", desc: "Tight transitions, clean trims, and zero corners cut." },
              { title: "Cleanliness", subtitle: "Immaculate Clean-Up", desc: "No mess left behind. We treat your home like our own." },
              { title: "Legacy", subtitle: "3rd Generation", desc: "Decades of passed-down knowledge ensuring perfect results." }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400/50 transition-all hover:shadow-xl shadow-sm">
                <div className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-4 opacity-100">{item.title}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.subtitle}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - Redesigned */}
      <section className="py-24" id="services">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
              <p className="text-gray-600 max-w-xl text-lg">Full-service from uplift to final shine.</p>
            </div>
            <CTAButton href="/contact" variant="secondary">View All Services</CTAButton>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Link href="/services/floor-preparation" className="group relative h-[400px] rounded-3xl overflow-hidden block">
              <Image
                src="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                alt="Residential Flooring"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">Residential</div>
                <h3 className="text-2xl font-bold text-white mb-2">Home Installation</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Vinyl, hybrid, timber & laminate installation for new builds and renovations.</p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/commercial" className="group relative h-[400px] rounded-3xl overflow-hidden block">
              <Image
                src="/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                alt="Commercial Flooring"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">Commercial</div>
                <h3 className="text-2xl font-bold text-white mb-2">Commercial Projects</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Reliable solutions for offices, retail spaces, and multi-site fit-outs.</p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/services/floor-preparation" className="group relative h-[400px] rounded-3xl overflow-hidden block">
              <Image
                src="/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
                alt="Floor Preparation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">Preparation</div>
                <h3 className="text-2xl font-bold text-white mb-2">Flood Levelling</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Engineered subfloor correction and mirror-flat preparation.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT WORK GALLERY */}
      <ModernGallery
        title="Recent Transformations"
        images={[
          "/images/new_prep_62113.jpg",
          "/images/new_prep_61981.jpg",
          "/images/new_prep_61801.jpg",
          "/images/new_prep_61734.jpg",
          "/images/new_prep_61961.jpg",
          "/images/new_prep_61938.jpg"
        ]}
      />

      {/* FINAL CTA */}
      <section className="py-24 bg-yellow-400 text-black border-b border-black/10">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to transform your floor?</h2>
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
            Get the finish you deserve with the team that cares about the details.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-black text-white font-bold text-xl rounded-full hover:bg-gray-900 transition-all hover:scale-105"
            >
              Get a Quote
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE?.replace(/\s/g, "")}`}
              className="px-10 py-5 bg-transparent border-2 border-black/20 text-black font-bold text-xl rounded-full hover:bg-black/5 transition-all"
            >
              Call {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREA MAP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Service Area</h2>
            <p className="text-gray-600">Serving Brisbane, Ipswich, Gold Coast, Sunshine Coast, and Northern NSW.</p>
          </div>

          <ServiceAreaMapWrapper />

        </div>
      </section>
    </>
  );
}

// Wrapper for Map to handle Client Side Loading properly if needed, but the component handles it.
import dynamic from 'next/dynamic';
const ServiceAreaMapWrapper = dynamic(() => import('@/components/ServiceAreaMap'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse rounded-2xl border border-gray-200" />
});
