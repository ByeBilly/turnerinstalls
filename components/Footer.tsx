import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-6 px-5 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-between">
          <div>© {currentYear} Turner Installs. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:text-gray-100 transition-colors">
              Home
            </Link>
            <Link href="/residential" className="hover:text-gray-100 transition-colors">
              Residential
            </Link>
            <Link href="/commercial" className="hover:text-gray-100 transition-colors">
              Commercial
            </Link>
            <Link href="/services/floor-preparation" className="hover:text-gray-100 transition-colors">
              Floor Prep
            </Link>
            <Link href="/about" className="hover:text-gray-100 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-100 transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-gray-100 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/overview" className="hover:text-gray-100 transition-colors">
              Service Overview
            </Link>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800 flex flex-wrap gap-6 text-xs">
          <div>
            <strong className="text-gray-300">Phone:</strong>{" "}
            <a href={`tel:${(process.env.NEXT_PUBLIC_SUPPORT_PHONE || "+61748022388").replace(/\s/g, "")}`} className="hover:text-yellow-400 transition-colors">
              {process.env.NEXT_PUBLIC_SUPPORT_PHONE || "07 4802 2388"}
            </a>{" "}
            (Reception) |{" "}
            <a href="tel:0413592054" className="hover:text-yellow-400 transition-colors">
              0413 592 054
            </a>{" "}
            (Liam Direct)
          </div>
          <div>
            <strong className="text-gray-300">Operating Hours:</strong> 7am - 5pm
          </div>
          <div>
            <strong className="text-gray-300">Service Area:</strong> Brisbane, Ipswich & surrounding suburbs
          </div>
        </div>
      </div>
    </footer>
  );
}

