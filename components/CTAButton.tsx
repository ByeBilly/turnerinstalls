import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5";
  const variantClasses =
    variant === "primary"
      ? "border border-yellow-400 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500 text-black shadow-lg hover:shadow-xl"
      : "border border-gray-600 bg-gray-900/50 text-gray-100 hover:border-gray-500";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
}

