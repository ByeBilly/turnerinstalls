import Link from "next/link";
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
      <section className="min-h-screen pt-20 pb-12 flex flex-col justify-center relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 w-full">
          <div className="text-center mb-12 lg:mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Talk Floors.</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready for a flawless finish? Fill out the form below or give us a call.
              We're here to help with honest advice and expert workmanship.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* CONTACT FORM */}
            <ContactForm />

            {/* CONTACT INFO */}
            <div className="space-y-8 lg:pt-10">
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-200">Quick Contact</h3>
                <div className="space-y-6">
                  <a href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE?.replace(/\s/g, "")}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Call Us</div>
                      <div className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">{process.env.NEXT_PUBLIC_SUPPORT_PHONE}</div>
                    </div>
                  </a>

                  <a href="mailto:liam@turnerinstalls.com.au" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email Us</div>
                      <div className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">liam@turnerinstalls.com.au</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="p-8 rounded-3xl border border-gray-800 bg-black">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Service Areas
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  We service all of Brisbane and surrounding areas, including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Brisbane City", "Northside", "Southside", "Ipswich", "Logan", "Redlands"].map(area => (
                    <div key={area} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-gray-300">
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
