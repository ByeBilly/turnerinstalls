import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import ModernGallery from "@/components/ModernGallery";
import { siteImages } from "@/data/siteImages";
import HeroForm from "@/components/HeroForm";

export const metadata = {
  title: "Turner Installs | Expert Flooring & Professional Floor Preparation – Brisbane",
  description:
    "15+ years experience in Brisbane. Expert flooring installation, professional floor preparation, and immaculate clean-up for residential and commercial clients.",
};

const ServiceAreaMapWrapper = dynamic(() => import('@/components/ServiceAreaMap'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse rounded-2xl border border-gray-200" />
});

export default function Home() {
  return (
    <>
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

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/installspics/finished/image6.jpeg"
            alt="Premium Finished Flooring - Turner Installs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left text-slate-900 w-full overflow-hidden">
            <div className="inline-block bg-slate-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded mb-6 max-w-full whitespace-normal leading-relaxed">
              Brisbane & Ipswich Flooring Specialists
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-slate-900 break-words">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">Perfect Floor</span><br />
              <span className="text-yellow-500">Preparation.</span>
            </h1>
            <p className="text-xl text-slate-700 max-w-lg mb-8 leading-relaxed font-medium">
              Don't risk your new floor on a bad foundation. We deliver mirror-flat subfloors and precision installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-4 py-3 sm:px-8 sm:py-4 bg-slate-900 text-white font-black text-base sm:text-lg rounded hover:bg-slate-800 transition-all shadow-lg text-center uppercase tracking-wide hover:scale-105 w-full sm:w-auto flex justify-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:0413592054"
                className="px-4 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-slate-900 text-slate-900 font-bold text-base sm:text-lg rounded hover:bg-slate-900 hover:text-white transition-all text-center uppercase tracking-wide flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                0413 592 054
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm font-bold text-slate-600 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">✓</span> Commercial
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">✓</span> Residential
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">✓</span> Bonded
              </div>
            </div>
          </div>

          {/* Hero Form */}
          <div className="hidden lg:block">
            <HeroForm />
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      < section className="py-24 md:py-32 relative bg-slate-50 border-y border-slate-200" >
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden border-4 border-white shadow-2xl">
                <div className="absolute inset-0 border-2 border-slate-900/10 z-10 pointer-events-none rounded-lg"></div>
                <Image
                  src="/new_gen/hero/Graceville.jpg"
                  alt="Quality Flooring Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-lg shadow-xl border-l-4 border-yellow-400">
                <div className="text-3xl font-black text-yellow-400">15+</div>
                <div className="text-sm font-bold uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-white border border-slate-200 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-slate-900 mb-6 shadow-sm">The Turner Standard</div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
                Precision preparation. <br />
                <span className="text-yellow-500">Flawless results.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  A stunning floor starts long before the planks are laid. It begins with a mirror-flat subfloor and obsessive attention to detail.
                </p>
                <p>
                  What you see here is the standard we deliver on every project. We don't just install flooring; we engineer the perfect foundation to ensure your investment looks incredible and stands the test of time. No bounces, no hollow spots, just perfection.
                </p>
                <div className="flex items-center gap-6 pt-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-slate-900">100%</span>
                    <span className="text-xs uppercase font-bold text-slate-500">Level Finish</span>
                  </div>
                  <div className="w-px h-12 bg-slate-300"></div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-slate-900">Zero</span>
                    <span className="text-xs uppercase font-bold text-slate-500">Compromises</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* START TO FINISH FLOORING */}
      < section className="py-24 bg-white border-y border-slate-200" >
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            <div>
              <span className="text-yellow-600 font-black uppercase tracking-widest text-sm block mb-3">Start To Finish Flooring</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                From the first uplift to the final finish, we handle the lot.
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  Need the old floor pulled up and taken away? No problem. Turner Installs has the crew, tools, equipment, and trucks to lift and remove existing carpet tiles, vinyl, timber, smooth edge, trims, loose material, rubbish, glue, and problem adhesives before the new floor goes down.
                </p>
                <p>
                  From there we prepare the surface properly: grinding, levelling, moisture checks, subfloor repairs, adhesive removal, epoxy removal, ramping, patching, trims, clean-up, and professional installation of vinyl, hybrid, timber, carpet tiles, and commercial flooring systems across Brisbane and South East Queensland.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Uplift & Removal", desc: "Old flooring, trims, smooth edge, loose material, and site waste removed cleanly." },
                  { title: "Trucks & Equipment", desc: "The right gear on site for heavy uplift, disposal, grinding, and floor preparation." },
                  { title: "Grinding & Levelling", desc: "High spots, uneven slabs, adhesive, and rough substrates corrected before install." },
                  { title: "Moisture & Repairs", desc: "Moisture checks, barriers, subfloor repairs, patching, ramping, and make-good work." },
                  { title: "Floor Installation", desc: "Vinyl, hybrid, timber, carpet tiles, planks, commercial flooring, trims, and finishes." },
                  { title: "Clean Finish", desc: "A tidy site and a floor system prepared to last, not just look good on day one." }
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-black text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/services/floor-preparation"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-bold uppercase tracking-wide rounded hover:bg-slate-800 transition-colors"
              >
                See Floor Preparation Services
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {siteImages.home.removalProjects.map((img) => (
                <div key={img.src} className="grid sm:grid-cols-[160px_1fr] lg:grid-cols-[220px_1fr] gap-4 rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative min-h-[180px] sm:min-h-full bg-slate-100">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{img.alt}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* WHY TURNER INSTALLS */}
      < section className="py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 uppercase tracking-tight">Why Choose Turner Installs?</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto my-6"></div>
            <p className="text-slate-600 font-medium">The difference isn't just in how it looks on day one, but how it lasts for years to come.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expertise", subtitle: "Engineered Prep", desc: "Mirror-flat surfaces through professional flood levelling." },
              { title: "Precision", subtitle: "Showroom Finish", desc: "Tight transitions, clean trims, and zero corners cut." },
              { title: "Cleanliness", subtitle: "Immaculate Clean-Up", desc: "No mess left behind. We treat your home like our own." },
              { title: "Legacy", subtitle: "3rd Generation", desc: "Decades of passed-down knowledge ensuring perfect results." }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-lg bg-white border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-yellow-400 transition-colors"></div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{item.title}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.subtitle}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* SERVICES */}
      < section className="py-24 bg-slate-100" id="services" >
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-slate-300 pb-8">
            <div>
              <span className="text-yellow-600 font-black uppercase tracking-widest text-sm block mb-2">Our Capabilities</span>
              <h2 className="text-4xl font-black text-slate-900">Our Services</h2>
            </div>
            <Link href="/services" className="px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold uppercase hover:bg-slate-900 hover:text-white transition-colors">
              View All Services
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/services/floor-preparation" className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={siteImages.home.services.residential.src}
                  alt="Residential Flooring"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors" />
                <div className="absolute bottom-0 left-0 bg-yellow-400 text-slate-900 text-xs font-bold uppercase px-4 py-2">Residential</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">Home Installation</h3>
                <p className="text-slate-600 mb-6 flex-grow">Vinyl, hybrid, timber & laminate installation for new builds and renovations. We handle the entire process.</p>
                <div className="inline-flex items-center text-slate-900 font-bold uppercase text-sm tracking-wide gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="text-yellow-600">→</span>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/commercial" className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={siteImages.home.services.commercial.src}
                  alt="Commercial Flooring"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors" />
                <div className="absolute bottom-0 left-0 bg-slate-900 text-white text-xs font-bold uppercase px-4 py-2">Commercial</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">Commercial Projects</h3>
                <p className="text-slate-600 mb-6 flex-grow">Reliable solutions for offices, retail spaces, and multi-site fit-outs. On time and strictly to code.</p>
                <div className="inline-flex items-center text-slate-900 font-bold uppercase text-sm tracking-wide gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="text-yellow-600">→</span>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/services/floor-preparation" className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={siteImages.home.services.prep.src}
                  alt="Floor Preparation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors" />
                <div className="absolute bottom-0 left-0 bg-yellow-400 text-slate-900 text-xs font-bold uppercase px-4 py-2">Preparation</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">Flood Levelling</h3>
                <p className="text-slate-600 mb-6 flex-grow">Engineered subfloor correction and mirror-flat preparation. The most critical step for a perfect floor.</p>
                <div className="inline-flex items-center text-slate-900 font-bold uppercase text-sm tracking-wide gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="text-yellow-600">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section >

      {/* RECENT WORK GALLERY */}
      < ModernGallery
        title="Recent Transformations"
        images={siteImages.home.transformations}
        limit={4}
      />

      {/* FINAL CTA */}
      < section className="py-24 bg-yellow-400 text-slate-900 border-b border-slate-900/10" >
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to transform your floor?</h2>
          <p className="text-xl text-slate-900/80 mb-10 max-w-2xl mx-auto">
            Get the finish you deserve with the team that cares about the details.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-slate-900 text-white font-bold text-xl rounded-full hover:bg-slate-800 transition-all hover:scale-105"
            >
              Get a Quote
            </Link>
            <a
              href="tel:0413592054"
              className="px-10 py-5 bg-transparent border-2 border-slate-900/20 text-slate-900 font-bold text-xl rounded-full hover:bg-slate-900/5 transition-all"
            >
              Call 0413 592 054
            </a>
          </div>
        </div>
      </section >

      {/* SERVICE AREA MAP */}
      < section className="py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Service Area</h2>
            <p className="text-gray-600 mb-6">Serving Brisbane, Ipswich, Gold Coast, Sunshine Coast, and Northern NSW.</p>
            <Link
              href="/service-areas"
              className="inline-block px-6 py-3 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors"
            >
              View All Service Areas & Suburbs
            </Link>
          </div>

          <ServiceAreaMapWrapper />

        </div>
      </section >
    </>
  );
}
