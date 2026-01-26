import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 px-5 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="font-semibold text-gray-900">© {currentYear} Turner Installs. All rights reserved.</div>
          <div className="flex flex-wrap gap-6 font-medium">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/residential" className="hover:text-black transition-colors">
              Residential
            </Link>
            <Link href="/commercial" className="hover:text-black transition-colors">
              Commercial
            </Link>
            <Link href="/services/floor-preparation" className="hover:text-black transition-colors">
              Floor Prep
            </Link>
            <Link href="/about" className="hover:text-black transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-black transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/overview" className="hover:text-black transition-colors">
              Service Overview
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap gap-8 text-sm">
          <div>
            <strong className="text-gray-900">Phone:</strong>{" "}
            <a href={`tel:${(process.env.NEXT_PUBLIC_SUPPORT_PHONE || "0413592054").replace(/\s/g, "")}`} className="text-black hover:text-yellow-600 transition-colors font-semibold">
              {process.env.NEXT_PUBLIC_SUPPORT_PHONE || "0413 592 054"}
            </a>
          </div>
          <div>
            <strong className="text-gray-900">Operating Hours:</strong> 7am - 5pm
          </div>
          <div>
            <strong className="text-gray-900">Service Area:</strong> Brisbane, Ipswich & surrounding suburbs
          </div>
        </div>
      </div>
    </footer>
  );
}

