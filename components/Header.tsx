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

          <nav className="hidden md:flex gap-5 text-xs uppercase tracking-wider text-gray-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-gray-100 transition-colors ${pathname === link.href ? "text-yellow-400" : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block text-xs text-gray-400">
              Call: <span className="text-yellow-400 font-semibold">{process.env.NEXT_PUBLIC_SUPPORT_PHONE}</span>
            </div>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE?.replace(/\s/g, "")}`}
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

