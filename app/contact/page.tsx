import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Turner Installs - Brisbane Flooring Specialists",
  description:
    "Get a quote for your flooring project. Contact Turner Installs for expert advice, free measures, and professional installation in Brisbane.",
};

export default function Contact() {
  return (
    <>
      <section className="min-h-screen pt-20 pb-24 flex flex-col justify-center relative bg-gray-50">
        {/* Header Section - Trade Style */}
        <div className="bg-white border-b border-gray-200 py-16 mb-12">
          <div className="max-w-7xl mx-auto px-5 text-center">
            <div className="inline-block bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">Get Started</div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-black tracking-tight">Let's Talk Floors.</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Ready for a flawless finish? Fill out the form below or give us a call.
              We're here to help with honest advice and expert workmanship.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* CONTACT FORM - Boxed & clean */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <ContactForm />
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-8">
              {/* Quick Contact Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-black mb-6 text-black uppercase tracking-wide border-b border-gray-100 pb-2">Quick Contact</h3>
                <div className="space-y-6">
                  <a href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE?.replace(/\s/g, "")}`} className="flex items-center gap-4 group hover:bg-gray-50 p-2 rounded transition-colors -mx-2">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Call Us</div>
                      <div className="text-2xl font-black text-black group-hover:text-yellow-600 transition-colors">{process.env.NEXT_PUBLIC_SUPPORT_PHONE}</div>
                    </div>
                  </a>

                  <a href="mailto:liam@turnerinstalls.com" className="flex items-center gap-4 group hover:bg-gray-50 p-2 rounded transition-colors -mx-2">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white border border-gray-200 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email Us</div>
                      <div className="text-lg font-bold text-black group-hover:text-yellow-600 transition-colors">liam@turnerinstalls.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="p-8 rounded-xl border border-gray-200 bg-gray-50 shadow-inner">
                <h3 className="text-lg font-black mb-4 flex items-center gap-2 text-black uppercase">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Service Areas
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed font-medium">
                  We service all of Brisbane and surrounding areas, including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Brisbane City", "Northside", "Southside", "Ipswich", "Logan", "Redlands"].map(area => (
                    <div key={area} className="bg-white border border-gray-200 px-3 py-1.5 rounded text-xs font-bold text-gray-700 shadow-sm">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
