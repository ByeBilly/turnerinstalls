"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/services/floor-preparation", label: "Floor Prep" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 backdrop-blur-md bg-black/80">
      <div className="max-w-7xl mx-auto px-5 py-3.5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-yellow-500/60">
              T
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider uppercase">TURNER INSTALLS</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">FLOORING & PREPARATION</div>
            </div>
          </Link>

          {/* Mobile Menu Button - Minimal functionality placeholder if needed, relying on simple hover for desktop now */}

          <nav className="hidden md:flex gap-6 text-xs uppercase tracking-wider text-gray-400 h-full items-center">
            <Link href="/" className={`hover:text-gray-100 transition-colors ${pathname === "/" ? "text-yellow-400" : ""}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="group relative h-full flex items-center">
              <Link href="/services" className={`hover:text-gray-100 transition-colors cursor-pointer flex items-center gap-1 ${pathname.startsWith('/services') ? "text-yellow-400" : ""}`}>
                Services ▾
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                <div className="bg-zinc-900 border border-white/10 rounded-xl shadow-2xl p-2 w-64 flex flex-col gap-1">
                  <Link href="/services/floor-preparation" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Floor Preparation</Link>
                  <Link href="/services/concrete-grinding" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Concrete Grinding</Link>
                  <Link href="/services/floor-levelling" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Floor Levelling</Link>
                  <Link href="/services/moisture-barriers" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Moisture Barriers</Link>
                  <Link href="/services/subfloor-repairs" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Subfloor Repairs</Link>
                  <Link href="/services/adhesive-removal" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Adhesive Removal</Link>
                  <Link href="/services/epoxy-removal" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Epoxy Removal</Link>
                  <Link href="/services/industrial-surface-prep" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Industrial Prep</Link>
                </div>
              </div>
            </div>

            {/* Locations Dropdown - TEMPORARILY HIDDEN
            <div className="group relative h-full flex items-center">
              <span className={`hover:text-gray-100 transition-colors cursor-pointer flex items-center gap-1 ${pathname.startsWith('/locations') ? "text-yellow-400" : ""}`}>
                Locations ▾
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                <div className="bg-zinc-900 border border-white/10 rounded-xl shadow-2xl p-2 w-48 flex flex-col gap-1">
                  <Link href="/locations/brisbane" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Brisbane</Link>
                  <Link href="/locations/gold-coast" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Gold Coast</Link>
                  <Link href="/locations/sunshine-coast" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Sunshine Coast</Link>
                  <Link href="/locations/toowoomba" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Toowoomba</Link>
                  <Link href="/locations/gympie" className="px-4 py-2 hover:bg-white/5 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors">Gympie</Link>
                </div>
              </div>
            </div> */}

            <Link href="/about" className={`hover:text-gray-100 transition-colors ${pathname === "/about" ? "text-yellow-400" : ""}`}>
              About
            </Link>
            <Link href="/contact" className={`hover:text-gray-100 transition-colors ${pathname === "/contact" ? "text-yellow-400" : ""}`}>
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block text-xs text-gray-400">
              Call: <span className="text-yellow-400 font-semibold">{process.env.NEXT_PUBLIC_SUPPORT_PHONE || "07 4802 2388"}</span>
            </div>
            <a
              href={`tel:${(process.env.NEXT_PUBLIC_SUPPORT_PHONE || "+61748022388").replace(/\s/g, "")}`}
              className="px-3.5 py-1.5 rounded-full border border-yellow-400 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500 text-black text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu Bar - Fixed Top */}
      <div className="md:hidden w-full flex flex-col border-t border-gray-800 bg-zinc-900/95 backdrop-blur-md sticky top-[60px] z-40">
        <div className="flex items-center justify-between gap-2 p-2 border-b border-gray-800/50">
          <a
            href={`tel:${(process.env.NEXT_PUBLIC_SUPPORT_PHONE || "+61748022388").replace(/\s/g, "")}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-bold uppercase tracking-wide hover:bg-yellow-500/20 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-600 text-black text-sm font-bold uppercase tracking-wide shadow-lg shadow-orange-500/20 hover:brightness-110 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
            Get Quote
          </Link>
        </div>

        {/* Scrollable Navigation Links */}
        <div className="flex items-center gap-1 overflow-x-auto py-2 px-2 no-scrollbar">
          {[
            { label: "Home", href: "/" },
            { label: "Residential", href: "/residential" },
            { label: "Commercial", href: "/commercial" },
            { label: "Floor Prep", href: "/services/floor-preparation" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border border-white/5 ${pathname === link.href
                  ? "bg-white/10 text-yellow-400 border-yellow-400/20"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
