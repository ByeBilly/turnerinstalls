import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Floor Preparation & Levelling | Turner Installs Brisbane",
  description:
    "Professional floor preparation, flood levelling, and subfloor grinding. We create the perfect foundation for your new floor. Serving Brisbane, Gold Coast & Sunshine Coast.",
  openGraph: {
    images: ["/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"],
  }
};

export default function FloorPrep() {
  const specs = [
    {
      icon: "📐",
      title: "Laser MAP Assessments",
      description: "We use laser-guided mapping to identify high/low spots within 1mm tolerance across your entire slab."
    },
    {
      icon: "💧",
      title: "Moisture Mitigation",
      description: "Application of two-part epoxy moisture barriers to prevent rising damp destruction."
    },
    {
      icon: "⚖️",
      title: "Engineered Flood Levelling",
      description: "Pouring commercial-grade self-levelling compounds for a mirror-flat, structural finish."
    },
    {
      icon: "🔨",
      title: "Diamond Grinding",
      description: "Dust-free concrete grinding to remove contaminants and key the surface for maximum bonding."
    }
  ];

  const faqs = [
    {
      question: "Why is floor preparation necessary?",
      answer: "Most flooring failures (separation, peaking, cracking) are caused by uneven subfloors. Manufacturers require flatness tolerances (usually 3mm over 3m) to uphold warranties. Proper prep ensures your expensive hybrid or vinyl floor lasts decades."
    },
    {
      question: "How much does floor levelling cost?",
      answer: "Costs vary based on the 'mm' depth required to correct levels. We start with a free site measure to give you a fixed-price quote based on litres of compound needed."
    },
    {
      question: "Can you level over tiles?",
      answer: "Yes. We grind the glaze off existing tiles to key the surface, prime it, and flood level over the top, saving you the messy cost of jackhammer removal."
    },
    {
      question: "How long does it take to dry?",
      answer: "Our rapid-set compounds are usually walkable in 3-4 hours and ready for installation in 24 hours, minimizing downtime for your renovation."
    },
    {
      question: "Do you service commercial properties?",
      answer: "Absolutely. We specialize in large-scale commercial prep for shops, offices, and industrial spaces across Brisbane and the Gold Coast."
    }
  ];

  return (
    <>
      <ServiceHero
        title={<>The Science of <span className="text-yellow-500">Perfect Substrates</span>.</>}
        subtitle="Engineered flood levelling and subfloor correction. Because your new floor is only as good as what's underneath it."
        imagePath="/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
        label="TECHNICAL_SERVICES"
      />

      <TechSpecs
        title="Why Prep Matters"
        description={<>
          <p className="mb-4">Flooring isn't just decoration; it's a structural system. <strong>90% of flooring failures</strong> happen because the subfloor wasn't engineered correctly.</p>
          <p>We don't just 'patch' holes. We use laser diagnostics and polymer-modified compounds to create a substrate that is chemically bonded, perfectly flat, and compliant with Australian Standards.</p>
        </>}
        features={specs}
      />

      <GalleryStrip
        images={[
          "/images/resource_avPl0dbJ2Se1Om54B2t_d-.png",
          "/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png",
          "/images/resource_9fVqoabE10H5PDfVW4rOXY.png",
          "/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png"
        ]}
      />

      <FAQSection items={faqs} />

      <SEOCTA
        title="Don't risk your expensive floor."
        subtitle="Get the preparation right the first time with Turner Installs. Contact us for a free subfloor laser assessment."
        buttonText="Book Assessment"
      />
    </>
  );
}

