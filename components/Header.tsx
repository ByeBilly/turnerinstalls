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

            {/* Locations Dropdown */}
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
            </div>

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
    </header>
  );
}

