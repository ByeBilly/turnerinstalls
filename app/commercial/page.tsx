import Image from "next/image";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Commercial Flooring Brisbane | Turner Installs",
  description:
    "Reliable commercial flooring contractors. We partner with property managers, shop fitters, and businesses for on-time, on-budget installations.",
};

export default function Commercial() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
            alt="Commercial Office Flooring"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 text-sm uppercase tracking-widest text-blue-400 backdrop-blur-sm">
            Business Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Built for <span className="text-blue-400">Time-Critical</span> <br />Commercial Projects.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            We understand that downtime is lost revenue. That's why we deliver reliable, high-speed installations for offices, retail, and multi-site fit-outs.
          </p>
          <div className="flex gap-4 justify-center">
            <CTAButton href="/contact">Discuss Project</CTAButton>
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-900 border border-gray-800">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 font-bold text-2xl mb-6">🗓️</div>
              <h3 className="text-xl font-bold mb-3">Strict Deadlines</h3>
              <p className="text-gray-400">We stick to the schedule. If we say we'll be done by Monday morning, we'll be done by Monday morning.</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900 border border-gray-800">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 font-bold text-2xl mb-6">📋</div>
              <h3 className="text-xl font-bold mb-3">Compliance Ready</h3>
              <p className="text-gray-400">Fully insured, SWMS provided, and safety compliant. We tick all the boxes so you don't have to worry.</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900 border border-gray-800">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 font-bold text-2xl mb-6">🔨</div>
              <h3 className="text-xl font-bold mb-3">Defect-Free Handover</h3>
              <p className="text-gray-400">We act as your quality control. Our finishes are inspected rigourously before we hand back the keys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-24 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Partners, not just subcontractors.</h2>
              <p className="text-gray-400 text-lg mb-8">
                We work with property managers, shop fitters, and premium flooring retailers who need a team they can trust to represent their brand.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-black border border-gray-800">
                  <div className="text-blue-400 font-bold pt-1">01</div>
                  <div>
                    <h4 className="font-bold text-white">Property Managers</h4>
                    <p className="text-sm text-gray-400">Fast turnarounds for rental properties. We collect keys, do the job, and return them without drama.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-black border border-gray-800">
                  <div className="text-blue-400 font-bold pt-1">02</div>
                  <div>
                    <h4 className="font-bold text-white">Flooring Retailers</h4>
                    <p className="text-sm text-gray-400">White-label installation services that protect your reputation and delight your customers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden border border-gray-800">
              <Image src="/images/resource_9fVqoabE10H5PDfVW4rOXY.png" alt="Commercial Project" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-gray-700">
                  <div className="text-sm text-gray-400 uppercase tracking-widest mb-1">Recent Project</div>
                  <h3 className="text-xl font-bold">Office Fit-out, Brisbane CBD</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Need a reliable commercial team?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a quote within 24 hours for your next project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" className="!bg-white !text-blue-900 hover:!bg-blue-50 border-none shadow-xl">
              Get Proposal
            </CTAButton>
            <CTAButton href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE?.replace(/\s/g, "")}`} variant="secondary" className="!border-white/20 !text-white hover:!bg-white/10">
              Call {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
