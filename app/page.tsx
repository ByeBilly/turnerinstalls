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

      {/* NEW HERO SECTION - Trade Style */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brisbane_skyline.png"
            alt="Turner Installs - Brisbane Flooring Specialists"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        {/* Hero Content - Split Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left text-white">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-widest rounded mb-6">
              Brisbane & Ipswich Flooring Specialists
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Perfect Floor</span><br />
              <span className="text-yellow-400">Preparation.</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-lg mb-8 leading-relaxed font-medium">
              Don't risk your new floor on a bad foundation. We deliver mirror-flat subfloors and precision installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-yellow-400 text-black font-black text-lg rounded hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.4)] text-center uppercase tracking-wide"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE?.replace(/\s/g, "")}`}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded hover:bg-white hover:text-black transition-all text-center uppercase tracking-wide flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">✓</span> Commercial
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">✓</span> Residential
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">✓</span> Bonded
              </div>
            </div>
          </div>

          {/* Hero Form / "Why Us" Box - Floating Card */}
          <div className="hidden lg:block bg-white p-8 rounded-xl shadow-2xl border-t-4 border-yellow-400 max-w-sm ml-auto">
            <h3 className="text-2xl font-black text-black mb-2 uppercase">Fast Quote</h3>
            <p className="text-gray-500 text-sm mb-6">Enter your details and we'll call you back instantly.</p>
            <form className="space-y-4" action="/contact">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all" placeholder="0400 000 000" />
              </div>
              <button className="w-full bg-black text-white font-bold py-4 rounded uppercase tracking-wide hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                Get Callback
                <span className="text-yellow-400">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* LEGACY / STORY SECTION - Alternating BG (Gray-100) */}
      <section className="py-24 md:py-32 relative bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden border-4 border-white shadow-2xl">
                <div className="absolute inset-0 border-2 border-black/10 z-10 pointer-events-none rounded-lg"></div>
                <Image
                  src="/images/IMG_6636.jpeg"
                  alt="Staircase Flooring Installation"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-lg shadow-xl border-l-4 border-yellow-400">
                <div className="text-3xl font-black text-yellow-400">15+</div>
                <div className="text-sm font-bold uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-white border border-gray-200 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-black mb-6 shadow-sm">Turners Installs</div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-black">
                Three generations of <br />
                <span className="text-yellow-500">flooring expertise.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  Flooring isn't just a trade for us—it's in our blood. From grandfather, to father, to son.
                </p>
                <p>
                  Liam Turner represents the third generation of floor layers in our family. The skills,
                  techniques, and obsessive attention to detail passed down through the decades mean you aren't
                  getting someone who learned from a quick course. You're getting a lifetime of knowledge in every square metre.
                </p>
                <div className="flex items-center gap-6 pt-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-black">100%</span>
                    <span className="text-xs uppercase font-bold text-gray-500">Satisfaction</span>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-black">Zero</span>
                    <span className="text-xs uppercase font-bold text-gray-500">Shortcuts Taken</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TURNER INSTALLS - Solid BG White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black uppercase tracking-tight">Why Choose Turner Installs?</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto my-6"></div>
            <p className="text-gray-600 font-medium">The difference isn't just in how it looks on day one, but how it lasts for years to come.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expertise", subtitle: "Engineered Prep", desc: "Mirror-flat surfaces through professional flood levelling." },
              { title: "Precision", subtitle: "Showroom Finish", desc: "Tight transitions, clean trims, and zero corners cut." },
              { title: "Cleanliness", subtitle: "Immaculate Clean-Up", desc: "No mess left behind. We treat your home like our own." },
              { title: "Legacy", subtitle: "3rd Generation", desc: "Decades of passed-down knowledge ensuring perfect results." }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-lg bg-white border border-gray-200 shadow-lg hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-yellow-400 transition-colors"></div>
                <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">{item.title}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{item.subtitle}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - Alternating BG Gray */}
      <section className="py-24 bg-gray-100" id="services">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-300 pb-8">
            <div>
              <span className="text-yellow-600 font-black uppercase tracking-widest text-sm block mb-2">Our Capabilities</span>
              <h2 className="text-4xl font-black text-black">Our Services</h2>
            </div>
            <Link href="/services" className="px-6 py-3 bg-white border-2 border-black text-black font-bold uppercase hover:bg-black hover:text-white transition-colors">
              View All Services
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/services/floor-preparation" className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                  alt="Residential Flooring"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-0 left-0 bg-yellow-400 text-black text-xs font-bold uppercase px-4 py-2">Residential</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-black mb-3 group-hover:text-yellow-600 transition-colors">Home Installation</h3>
                <p className="text-gray-600 mb-6 flex-grow">Vinyl, hybrid, timber & laminate installation for new builds and renovations. We handle the entire process.</p>
                <div className="inline-flex items-center text-black font-bold uppercase text-sm tracking-wide gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="text-yellow-600">→</span>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/commercial" className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                  alt="Commercial Flooring"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-0 left-0 bg-black text-white text-xs font-bold uppercase px-4 py-2">Commercial</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-black mb-3 group-hover:text-yellow-600 transition-colors">Commercial Projects</h3>
                <p className="text-gray-600 mb-6 flex-grow">Reliable solutions for offices, retail spaces, and multi-site fit-outs. On time and strictly to code.</p>
                <div className="inline-flex items-center text-black font-bold uppercase text-sm tracking-wide gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="text-yellow-600">→</span>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/services/floor-preparation" className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
                  alt="Floor Preparation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-0 left-0 bg-yellow-400 text-black text-xs font-bold uppercase px-4 py-2">Preparation</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-black mb-3 group-hover:text-yellow-600 transition-colors">Flood Levelling</h3>
                <p className="text-gray-600 mb-6 flex-grow">Engineered subfloor correction and mirror-flat preparation. The most critical step for a perfect floor.</p>
                <div className="inline-flex items-center text-black font-bold uppercase text-sm tracking-wide gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="text-yellow-600">→</span>
                </div>
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
