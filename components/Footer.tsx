import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-yellow-400 bg-zinc-950 py-16 px-5 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div className="inline-block p-4 bg-black rounded-lg mb-6 border border-zinc-800">
              <span className="text-2xl font-black text-white tracking-tighter uppercase leading-none block">TURNER</span>
              <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase block">INSTALLS</span>
            </div>
            <p className="max-w-sm mb-6 leading-relaxed">
              Brisbane's premier flooring preparation and installation specialists. Family owned, third-generation craftsmanship.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 border-b border-zinc-800 pb-2 inline-block">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <Link href="/services" className="hover:text-yellow-400 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
              <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 border-b border-zinc-800 pb-2 inline-block">Contact</h4>
            <div className="flex flex-col gap-4">
              <div>
                <strong className="text-white block mb-1">Phone</strong>
                <a href={`tel:${(process.env.NEXT_PUBLIC_SUPPORT_PHONE || "0413592054").replace(/\s/g, "")}`} className="text-yellow-400 hover:text-white transition-colors font-bold text-lg">
                  {process.env.NEXT_PUBLIC_SUPPORT_PHONE || "0413 592 054"}
                </a>
              </div>
              <div>
                <strong className="text-white block mb-1">Email</strong>
                <a href="mailto:liam@turnerinstalls.com" className="hover:text-white transition-colors">liam@turnerinstalls.com</a>
              </div>
              <div>
                <strong className="text-white block mb-1">Service Area</strong>
                <span>Brisbane, Ipswich, Gold Coast, Sunshine Coast (Commercial)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {currentYear} Turner Installs. All rights reserved.</div>
          <div className="flex items-center gap-2 text-zinc-600">
            <span>ABN: 12 345 678 901</span> {/* Placeholder ABN if not known, safe to leave generic format or remove if strictly needed */}
            <span>|</span>
            <span>Qbcc Lic: 12345678</span> {/* Placeholder Lic */}
          </div>
        </div>
      </div>
    </footer>
  );
}

