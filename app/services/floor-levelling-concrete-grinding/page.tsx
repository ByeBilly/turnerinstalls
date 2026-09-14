import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModernGallery from "@/components/ModernGallery";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import SEOCTA from "@/components/SEOCTA";
import { siteImages } from "@/data/siteImages";
import { GOOGLE_REVIEW_URL } from "@/lib/businessLinks";
import type { Metadata } from "next";

const ogTitle = "Floor Levelling & Concrete Grinding Brisbane | Turner Installs";
const ogDescription = "Expert concrete grinding, adhesive uplift & self-levelling across Brisbane & SEQ. 3rd-generation prep specialists getting slabs ready to Australian Standards.";
const ogImage = { url: siteImages.grinding.hero.src, width: 1200, height: 630, alt: siteImages.grinding.hero.alt };

export const metadata: Metadata = {
  title: {
    absolute: ogTitle,
  },
  description: ogDescription,
  alternates: {
    canonical: "/services/floor-levelling-concrete-grinding",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: "/services/floor-levelling-concrete-grinding",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [ogImage.url],
  },
};

const proofPoints = [
  "3rd-generation flooring experience",
  "Full dust extraction and diamond tooling",
  "Compliant with AS 1884-2021 and manufacturer warranties",
  "Residential, retail and commercial capability",
];

const failureSignals = [
  {
    title: "Click systems flex",
    text: "Hybrid and vinyl plank locking systems can move, squeak, or break when hollows are left under the floor.",
  },
  {
    title: "Adhesives lose bond",
    text: "Old glue, paint, dusty laitance, curing compounds, and slab contamination stop primers and flooring adhesives from gripping.",
  },
  {
    title: "Light shows every wave",
    text: "Long boards, low windows, and open-plan rooms make high spots and shallow valleys obvious after installation.",
  },
  {
    title: "Warranties get exposed",
    text: "Manufacturers expect the substrate to be checked, corrected, and prepared before flooring is installed.",
  },
];

const workflow = [
  {
    step: "Detailed straight-edge and laser audit",
    detail:
      "We inspect the slab, existing floor, glue residue, moisture risk, access, power and the flooring product, using straight edges and laser lines to map high ridges and low hollows.",
  },
  {
    step: "Dust-controlled diamond grinding",
    detail:
      "High points are ground down and the concrete surface is mechanically profiled for bond strength using diamond tooling and dust extraction.",
  },
  {
    step: "Substrate cleaning and priming",
    detail:
      "Residual dust is extracted, porosity is controlled and the correct acrylic or epoxy primer is applied before patching or levelling.",
  },
  {
    step: "Precision pour and gauging",
    detail:
      "Levelling compound is mixed to the correct water ratio, poured or pumped, then worked with gauge tools and spiked rollers to remove trapped air.",
  },
  {
    step: "Cure and final inspection",
    detail:
      "The surface is checked before handover and left ready for hybrid, vinyl plank, timber, laminate, carpet tiles or commercial flooring once moisture readings are suitable.",
  },
];

const serviceOfferings = [
  {
    title: "Precision concrete diamond grinding",
    text: "Heavy-duty grinding to knock down high ridges, concrete bumps, rain-damaged screeds and expansion-joint humps.",
    proof: "Industrial vacuum systems and diamond tooling keep slab correction controlled on occupied homes and commercial sites.",
  },
  {
    title: "Adhesive, tile glue and paint removal",
    text: "Removal of old ceramic tile mortar, black adhesive, carpet glue, epoxy coatings and paint overspray.",
    proof: "New adhesives and levelling compounds need clean, porous concrete so they can bond properly.",
  },
  {
    title: "Self-levelling underlayments and bulk fills",
    text: "Moisture-tolerant primers followed by high-flow cementitious levellers for feather-finish work through to deeper fills.",
    proof: "Useful for dished slabs, sloping rooms, renovation transitions and large open-plan flooring areas.",
  },
  {
    title: "Crack stitching and joint repair",
    text: "Non-structural slab cracks can be chased, sealed and treated before levelling.",
    proof: "This reduces the risk of hairline reflection cracking through the finished floor system.",
  },
];

const comparisonRows = [
  {
    feature: "Typical projects",
    residential:
      "Home extensions, tile uplifts, Queenslander renovations and garage conversions.",
    commercial:
      "Office defits, retail shopfronts, medical centres and warehouse office spaces.",
  },
  {
    feature: "Common problem",
    residential:
      "Inconsistent slab joins, old glue and 10-20mm level differences between rooms.",
    commercial:
      "Large square metre pours, strict handover dates and high foot-traffic specifications.",
  },
  {
    feature: "Noise and dust control",
    residential:
      "Domestic dust control and clean work practices inside occupied homes.",
    commercial:
      "Industrial dust containment with night or weekend work discussed where the project requires it.",
  },
  {
    feature: "Flooring compatibility",
    residential:
      "Hybrid planks, glue-down vinyl, direct-stick timber and carpet.",
    commercial:
      "Commercial sheet vinyl, carpet tiles, engineered oak and resilient flooring systems.",
  },
];

const faqs = [
  {
    question:
      "How flat does a subfloor need to be for hybrid or vinyl plank flooring?",
    answer:
      "Many flooring manufacturers require tight flatness tolerances, commonly around 3mm over 3 metres and tighter local checks. Even small dips can make locking joints feel hollow or shear under traffic.",
  },
  {
    question: "Do I need grinding or floor levelling?",
    answer:
      "Usually both are assessed together. Grinding removes high spots and contamination; levelling fills lows and creates a flatter installation surface. The right mix depends on the slab and the flooring product.",
  },
  {
    question: "Can you remove old tile glue or carpet adhesive?",
    answer:
      "Yes. Turner Installs uses mechanical grinding and adhesive-removal tooling to strip old glue and expose a clean surface for primer, levelling compound, or direct-stick flooring.",
  },
  {
    question: "Is concrete grinding going to fill my home with dust?",
    answer:
      "No. Concrete preparation creates dust, but Turner Installs uses diamond grinders connected to high-efficiency dust extraction to capture dust at the cutting head and keep the work controlled.",
  },
  {
    question: "Can you just put extra underlay down instead of levelling?",
    answer:
      "No. Underlay can help with acoustic or thermal performance, but it does not bridge low spots or remove high humps. Too much vertical movement can accelerate board failure.",
  },
  {
    question: "How soon after self-levelling can the new floor be laid?",
    answer:
      "Many premium self-levellers are walkable within 2 to 4 hours, but hard flooring usually waits until the compound has cured enough and moisture readings are suitable. On many jobs that means 24 to 48 hours.",
  },
  {
    question: "Does this help with flooring warranties?",
    answer:
      "Yes. Proper substrate preparation supports manufacturer requirements and reduces the risk of flexing, hollow spots, bond failure, and avoidable installation defects.",
  },
  {
    question: "What service areas do you cover across South East Queensland?",
    answer:
      "Turner Installs is based around the Brisbane western suburbs and services Brisbane, Ipswich, Logan, northern Gold Coast corridors and surrounding South East Queensland areas.",
  },
];

export default function FloorLevellingConcreteGrindingPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Floor Levelling & Concrete Grinding", url: "/services/floor-levelling-concrete-grinding" },
      ]} />
      <ServiceHero
        title={
          <>
            Precision Floor Levelling & Concrete Grinding in{" "}
            <span className="text-yellow-500">
              Brisbane & South East Queensland
            </span>
          </>
        }
        subtitle="Your new floor is only as stable as the slab beneath it. We eliminate high spots, patch low valleys, strip stubborn adhesives, and pour high-flow self-levelling compounds to create a dead-flat finish that meets Australian Standards."
        imagePath={siteImages.grinding.hero.src}
        label="SUBFLOOR_PREP"
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-yellow-600">
              Subfloor failure prevention
            </p>
            <h2 className="mb-6 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              Protect your flooring investment: why 80% of floor failures start
              below the surface.
            </h2>
            <div className="space-y-5 text-lg font-medium leading-relaxed text-slate-700">
              <p>
                Most luxury vinyl plank, hybrid, laminate and engineered timber
                floor failures begin because the subfloor was not flat, clean,
                dry, or stable enough before installation started.
              </p>
              <p>
                If your concrete slab has undulations, high ridges, or hollows,
                clicking systems can flex, squeak, and snap under foot traffic
                within months.
              </p>
              <p>
                Turner Installs does not lay over a problem slab and hope for
                the best. We use heavy commercial diamond grinders, adhesive
                removal, patching, priming, and premium polymer-modified
                self-levelling compounds to turn warped, uneven, or glue-caked
                concrete into a floor-ready surface.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-nosnippet>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-slate-900 px-5 py-4 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-slate-800"
              >
                Request an On-Site Assessment
              </Link>
              <a
                href="tel:0413592054"
                className="inline-flex items-center justify-center rounded border-2 border-slate-900 px-5 py-4 text-sm font-black uppercase tracking-wide text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
              >
                Call Liam Direct
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="mb-5 text-lg font-black uppercase tracking-wide text-slate-900">
              Built for high-risk floors
            </h3>
            <div className="grid gap-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded border border-slate-200 bg-white p-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-yellow-500" />
                  <span className="text-sm font-bold leading-relaxed text-slate-800">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-yellow-400">
              The standard we work to
            </p>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              AS 1884-2021 aware slab preparation before the floor goes down.
            </h2>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm">
            <p className="text-lg font-medium leading-relaxed text-slate-100">
              Under AS 1884-2021 for resilient flooring and common Australian
              hard-flooring manufacturer requirements, subfloors are expected to
              be flat, clean and stable before installation. Many product specs
              require no more than a 3mm deviation over a 3-metre straight edge.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Turner Installs checks the slab, identifies where grinding ends
              and levelling begins, and prepares the surface so the finished
              flooring system has a real chance of performing.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-yellow-600">
              Why levelling matters
            </p>
            <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              Protect the flooring investment before the first board is laid.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {failureSignals.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-yellow-600">
              Core service offerings
            </p>
            <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              Comprehensive subfloor prep and remediation services.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {serviceOfferings.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
                <p className="rounded border border-yellow-200 bg-yellow-50 p-4 text-sm font-bold leading-relaxed text-slate-800">
                  {item.proof}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-lg">
            <Image
              src="/installspics/prep/level/filling-low-parts-for-perfect-install.jpg"
              alt="Self levelling compound being used to prepare a floor for installation"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-yellow-600">
              Site workflow
            </p>
            <h2 className="mb-8 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              How we prepare your subfloor: from rough slab to laser-flat
              finish.
            </h2>
            <div className="grid gap-4">
              {workflow.map((item, index) => (
                <div
                  key={item.step}
                  className="grid gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[72px_1fr] sm:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded bg-slate-900 text-lg font-black text-yellow-400">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-black text-slate-900">
                      {item.step}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-yellow-600">
              Residential and commercial capability
            </p>
            <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              Built for domestic renovations and high-demand commercial
              fit-outs.
            </h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="grid bg-slate-900 text-sm font-black uppercase tracking-wide text-white md:grid-cols-[0.7fr_1fr_1fr]">
              <div className="p-4">Feature</div>
              <div className="p-4">Residential renovations</div>
              <div className="p-4">Commercial and multi-residential</div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid border-t border-slate-200 text-sm leading-relaxed md:grid-cols-[0.7fr_1fr_1fr]"
              >
                <div className="bg-slate-50 p-4 font-black text-slate-900">
                  {row.feature}
                </div>
                <div className="p-4 text-slate-700">{row.residential}</div>
                <div className="border-t border-slate-100 p-4 text-slate-700 md:border-l md:border-t-0">
                  {row.commercial}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-yellow-400">
              Services covered
            </p>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Concrete slab grinding, adhesive uplift and self-levelling in one
              prep package.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Tile glue removal",
              "Vinyl plank preparation",
              "Hybrid flooring subfloors",
              "Timber installation bases",
              "Commercial make-good work",
              "Rain-damaged slab grinding",
              "Garage coating removal",
              "Flood levelling before install",
            ].map((item) => (
              <div
                key={item}
                className="rounded border border-white/10 bg-white/5 px-4 py-4 text-sm font-bold text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModernGallery
        title="Floor Preparation Work"
        description="Grinding, levelling, uplift and preparation work from real Turner Installs projects."
        images={siteImages.floorPrep.process.concat(siteImages.grinding.actionShots)}
        limit={6}
      />

      <FAQSection items={faqs} />

      <InternalLinks type="locations" />

      <SEOCTA
        title="Don't risk your new floors on an uneven slab."
        subtitle="Whether you are a builder preparing a commercial handover or a homeowner starting a major renovation, get the subfloor done right the first time."
        buttonText="Get a Free On-Site Slab Measure & Quote"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Floor Levelling and Concrete Grinding Brisbane",
            provider: {
              "@type": "FlooringContractor",
              name: "Turner Installs",
              telephone: "+61413592054",
              email: "liam@turnerinstalls.com",
              url: "https://www.turnerinstalls.com.au",
            },
            areaServed: [
              "Brisbane",
              "Ipswich",
              "Gold Coast",
              "Sunshine Coast",
              "South East Queensland",
            ],
            serviceType: [
              "Floor levelling",
              "Concrete grinding",
              "Subfloor preparation",
              "Adhesive removal",
              "Self levelling compound",
            ],
            description:
              "Concrete grinding, adhesive uplift, floor levelling, patching and subfloor preparation for flooring installation across Brisbane and South East Queensland.",
            sameAs: [GOOGLE_REVIEW_URL],
          }),
        }}
      />
    </>
  );
}
