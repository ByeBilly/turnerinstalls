import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ModernGallery from "@/components/ModernGallery";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import SEOCTA from "@/components/SEOCTA";
import { siteImages } from "@/data/siteImages";
import { GOOGLE_REVIEW_URL } from "@/lib/businessLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Floor Levelling & Concrete Grinding Brisbane | Turner Installs",
  },
  description:
    "Expert concrete grinding, adhesive uplift & self-levelling across Brisbane & SEQ. 3rd-generation prep specialists getting slabs ready to Australian Standards.",
  alternates: {
    canonical: "/services/floor-levelling-concrete-grinding",
  },
  robots: {
    index: true,
    follow: true,
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
    step: "Assess",
    detail:
      "We inspect the slab, existing floor, glue residue, moisture risk, access, power, and the flooring product being installed.",
  },
  {
    step: "Grind",
    detail:
      "High ridges, glue, paint, soft laitance, and contamination are removed with diamond tooling and dust extraction.",
  },
  {
    step: "Patch",
    detail:
      "Cracks, divots, ramps, and local lows are repaired before primer or self-levelling compound is applied.",
  },
  {
    step: "Level",
    detail:
      "Primer and high-flow levelling compound are used where the floor needs a flatter, more stable installation base.",
  },
  {
    step: "Handover",
    detail:
      "The surface is vacuumed, checked, and left ready for hybrid, vinyl plank, timber, laminate, carpet tiles, or commercial flooring.",
  },
];

const applications = [
  "Tile glue removal",
  "Vinyl plank preparation",
  "Hybrid flooring subfloors",
  "Timber installation bases",
  "Commercial make-good work",
  "Rain-damaged slab grinding",
  "Garage coating removal",
  "Flood levelling before install",
];

const faqs = [
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
    question: "Is the work dust-free?",
    answer:
      "Concrete preparation creates dust, but the grinding setup uses commercial dust extraction to capture it at the source and keep the job controlled.",
  },
  {
    question: "Does this help with flooring warranties?",
    answer:
      "Yes. Proper substrate preparation supports manufacturer requirements and reduces the risk of flexing, hollow spots, bond failure, and avoidable installation defects.",
  },
  {
    question: "Do you handle commercial sites?",
    answer:
      "Yes. The same preparation logic applies to homes, retail spaces, offices, tenancy make-goods, and larger commercial flooring projects across Brisbane and South East Queensland.",
  },
];

export default function FloorLevellingConcreteGrindingPage() {
  return (
    <>
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
              Protect your flooring investment: why floor failures start below
              the surface.
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
              From slab inspection to floor-ready handover.
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
            {applications.map((item) => (
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
        title="Get the slab right before the floor goes down."
        subtitle="Send through the job details and Turner Installs can assess the right grinding, patching and levelling path."
        buttonText="Request a Subfloor Assessment"
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
