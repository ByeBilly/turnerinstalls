interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-5 py-8 border-t border-white/5 ${className}`}>
      {children}
    </section>
  );
}

