import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-yellow-400 bg-white py-16 px-5 text-sm text-slate-600 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div className="inline-block p-4 bg-slate-900 rounded-lg mb-6 border border-slate-800 shadow-lg">
              <span className="text-2xl font-black text-white tracking-tighter uppercase leading-none block">TURNER</span>
              <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase block">INSTALLS</span>
            </div>
            <p className="max-w-sm mb-6 leading-relaxed text-slate-600">
              Brisbane's premier flooring preparation and installation specialists. Family owned, third-generation craftsmanship.
            </p>
            <div className="max-w-md rounded-lg border border-yellow-300 bg-yellow-50 p-5 mb-6">
              <span className="mb-2 inline-block text-xs font-black uppercase tracking-widest text-slate-900">
                Free flooring calculator
              </span>
              <p className="mb-4 leading-relaxed text-slate-700">
                We use this free{" "}
                <a
                  href="https://www.calculationtime.com/calculators/professional-flooring-calculator/?utm_source=turnerinstalls&utm_medium=referral&utm_campaign=footer_flooring_planning_tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-900 underline decoration-yellow-500 decoration-2 underline-offset-4 transition-colors hover:text-yellow-700"
                >
                  flooring calculator from CalculationTime.com
                </a>{" "}
                because it works.
              </p>
              <a
                href="https://www.calculationtime.com/calculators/professional-flooring-calculator/?utm_source=turnerinstalls&utm_medium=referral&utm_campaign=footer_flooring_planning_tool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded bg-slate-900 px-4 py-3 text-xs font-black uppercase tracking-wide text-white transition-colors hover:bg-slate-800"
              >
                Open Flooring Calculator
                <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </div>
            <div className="flex gap-4">
              {/* Social placeholders if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-wider mb-6 border-b border-slate-200 pb-2 inline-block">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
              <Link href="/flooring-installation-brisbane" className="hover:text-yellow-600 transition-colors">Flooring Brisbane</Link>
              <Link href="/service-areas" className="hover:text-yellow-600 transition-colors">Service Areas</Link>
              <Link href="/blog" className="hover:text-yellow-600 transition-colors">Blog</Link>
              <Link href="/services" className="hover:text-yellow-600 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-yellow-600 transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-yellow-600 transition-colors">Contact</Link>
              <Link href="/privacy-policy" className="hover:text-yellow-600 transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-wider mb-6 border-b border-slate-200 pb-2 inline-block">Contact</h4>
            <div className="flex flex-col gap-4">
              <div>
                <strong className="text-slate-900 block mb-1">Phone</strong>
                <a href="tel:0413592054" className="text-slate-900 hover:text-yellow-600 transition-colors font-bold text-lg">
                  0413 592 054
                </a>
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">Email</strong>
                <a href="mailto:liam@turnerinstalls.com" className="hover:text-yellow-600 transition-colors">liam@turnerinstalls.com</a>
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">Service Area</strong>
                <span>Brisbane, Ipswich, Gold Coast, Sunshine Coast (Commercial)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {currentYear} Turner Installs. All rights reserved.</div>
          <div className="text-slate-500">
            <span>TURNER INSTALLS PTY LTD - ABN 36 623 763 566</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
