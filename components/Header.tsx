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
    <>
      {/* Top Bar - Trade Style (Light) */}
      <div className="hidden md:block bg-slate-100 text-slate-600 text-xs py-2 px-5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-bold text-slate-700">Brisbane, Ipswich & Surrounds</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Available for Immediate Quotes
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:liam@turnerinstalls.com" className="hover:text-yellow-600 transition-colors font-medium">liam@turnerinstalls.com</a>
            <span className="text-slate-400">|</span>
            <span className="font-bold text-slate-700">Mon - Fri: 7:00am - 5:00pm</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b-4 border-yellow-400 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors">
                T
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter uppercase text-slate-900 leading-none group-hover:text-yellow-600 transition-colors">TURNER INSTALLS</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Flooring & Preparation</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1 h-full items-center">
              {[
                { href: "/", label: "Home" },
                { href: "/services/floor-preparation", label: "Floor Prep" },
                { href: "/services/concrete-grinding", label: "Grinding" },
                { href: "/commercial", label: "Commercial" },
                { href: "/residential", label: "Residential" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-all ${pathname === link.href
                    ? "bg-yellow-400 text-slate-900 shadow-sm"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex flex-col items-end mr-2">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Call for Advice</span>
                <a href={`tel:${(process.env.NEXT_PUBLIC_SUPPORT_PHONE || "0413592054").replace(/\s/g, "")}`} className="text-sm font-black text-slate-900 hover:text-yellow-600 transition-colors">
                  {process.env.NEXT_PUBLIC_SUPPORT_PHONE || "0413 592 054"}
                </a>
              </div>
              <a
                href={`tel:${(process.env.NEXT_PUBLIC_SUPPORT_PHONE || "0413592054").replace(/\s/g, "")}`}
                className="px-5 py-3 rounded bg-slate-900 text-white text-sm font-bold uppercase tracking-wide shadow-lg hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button Placeholder - (Assuming Mobile Menu is handled by separate component or overlay, but simplistic version here) */}
          </div>
        </div>
      </header>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden w-full flex flex-col border-b-4 border-yellow-400 bg-white sticky top-0 z-40 shadow-md">
        {/* Mobile Header Top */}
        <div className="flex items-center justify-between p-3 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white font-bold text-lg">T</div>
            <div className="flex flex-col">
              <span className="text-sm font-black uppercase text-slate-900 leading-none">TURNER</span>
              <span className="text-[9px] font-bold uppercase text-slate-500">INSTALLS</span>
            </div>
          </Link>
          <a
            href={`tel:${(process.env.NEXT_PUBLIC_SUPPORT_PHONE || "0413592054").replace(/\s/g, "")}`}
            className="px-4 py-2 rounded bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-wide flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call Liam
          </a>
        </div>

        {/* Scrollable Navigation Links */}
        <div className="flex items-center gap-1 overflow-x-auto py-2 px-2 no-scrollbar bg-slate-50">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Floor Prep", href: "/services/floor-preparation" },
            { label: "Grinding", href: "/services/concrete-grinding" },
            { label: "Projects", href: "/about" }, // Assuming projects mapped to about or similar
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex-shrink-0 px-4 py-2 rounded-md text-xs font-bold uppercase whitespace-nowrap transition-colors border ${pathname === link.href
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:border-slate-900"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
