import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import ModernGallery from "@/components/ModernGallery";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floor Preparation Services Brisbane | Concrete & Substrate Prep",
  description: "Expert floor preparation services in Brisbane & SE Queensland. Concrete grinding, levelling, and moisture barriers for a perfect installation finish.",
};

export default function FloorPreparation() {
  const specs = [
    {
      icon: "📏",
      title: "Dead Flat",
      description: "Achieving tolerances of 3mm over 3m or better for premium vinyl and timber installs."
    },
    {
      icon: "🛡️",
      title: "Substrate Protection",
      description: "Identifying and resolving moisture issues before they destroy your new floor."
    },
    {
      icon: "🏗️",
      title: "Structural Integrity",
      description: "Repairing cracks, divots, and weak concrete to ensure a solid bond."
    },
    {
      icon: "⏱️",
      title: "Fast Turnaround",
      description: "Rapid-setting compounds allow for same-day or next-day installation in many cases."
    }
  ];

  const processSteps = [
    {
      title: "Assessment & Laser Check",
      description: "We scan the entire subfloor with laser levels to map high spots, low spots, and deviations."
    },
    {
      title: "Mechanical Preparation",
      description: "Concrete grinding to remove contaminants, old adhesive, and weak surface laitance."
    },
    {
      title: "Repairs & Moisture Barrier",
      description: "filling cracks with epoxy and applying moisture mitigation systems if readings are high."
    },
    {
      title: "Flood Levelling",
      description: "Application of self-levelling compound (SLC) to create a glass-smooth, level surface."
    }
  ];

  const suitableFor = [
    { label: "Residential Homes", sublabel: "Renovations & New Builds" },
    { label: "Commercial Fitouts", sublabel: "Offices & Retail" },
    { label: "Industrial Spaces", sublabel: "Warehouses" },
    { label: "Medical Facilities", sublabel: "Hospitals & Clinics" },
    { label: "Education", sublabel: "Schools & Universities" },
    { label: "Hospitality", sublabel: "restaurants & Cafes" }
  ];

  const substrates = [
    { label: "Concrete Slabs" },
    { label: "Timber Subfloors" },
    { label: "Yellow Tongue" },
    { label: "Tile Beds" },
    { label: "Existing Vinyl" },
    { label: "Fibre Cement" }
  ];

  const faqs = [
    {
      question: "Why is floor preparation necessary?",
      answer: "Most flooring failures (bubbling, lifting, gaps) are caused by poor subfloor prep. Proper preparation ensures your warranty is valid and your floor looks perfect."
    },
    {
      question: "How long does floor prep take?",
      answer: "Standard residential prep (grind and fill) takes 1 day. Flood levelling requires an additional 24 hours to cure before installation."
    },
    {
      question: "Do you remove old adhesive?",
      answer: "Yes, we mechanically grind off old carpet glue, tile adhesive, and vinyl residue to ensure a clean bond for the new floor."
    },
    {
      question: "Can you level a sloping floor?",
      answer: "We can smooth a floor (make it flat) or ramp it. Correcting major structural slopes requires a different bulk-fill approach which we can assess on site."
    },
    {
      question: "What is the cost of floor preparation?",
      answer: "It varies based on the condition of the slab. We provide a fixed-price quote after a site inspection so there are no surprises."
    }
  ];

  return (
    <>
      <ServiceHero
        title={<>Professional <span className="text-yellow-500">Floor Preparation</span>.</>}
        subtitle="The secret to a flawless floor is what lies beneath. We create mirror-flat, structural substrates for high-end installations."
        imagePath="/images/brisbane_skyline.png"
        label="TECHNICAL_PREP"
      />

      <TechSpecs
        title="Don't Risk Your Floor."
        description={<>
          <p className="mb-4">New flooring is a significant investment. Installing it over an uneven, dusty, or damp subfloor is the fastest way to void your warranty and ruin the finish.</p>
          <p>At Turner Installs, we don't just lay floors; we engineer the substrate. Our preparation process adheres to Australian Standard AS 1884-2021, ensuring longevity and performance.</p>
        </>}
        features={specs}
      />

      <FeaturesGrid
        title="Suitable For"
        features={suitableFor}
        columns={3}
      />

      <ProcessSteps
        title="Our Prep Process"
        steps={processSteps}
      />

      <FeaturesGrid
        title="Substrates We Prepare"
        subtitle="We can rectify and prepare almost any existing surface."
        features={substrates}
        columns={3} // Changed to 3 as 4 might be too wide for just label
      />

      <div className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Tools & Materials We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Husqvarna Grinders", "M Class Dust Extractors", "Ardex Compounds", "Kiesel Systems", "Laser Levels", "Moisture Meters"].map((item, i) => (
              <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-mono shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ModernGallery
        images={[
          "/images/new_prep_61729.jpg",
          "/images/new_prep_61734.jpg",
          "/images/new_prep_61801.jpg",
          "/images/new_prep_61938.jpg",
          "/images/new_prep_61961.jpg",
          "/images/new_prep_61981.jpg",
          "/images/new_prep_62113.jpg"
        ]}
      />

      <FAQSection items={faqs} />

      <InternalLinks type="locations" />

      <SEOCTA
        title="Perfect Prep. Perfect Result."
        subtitle="Don't compromise on the foundation. Contact Turner Installs for expert floor preparation."
        buttonText="Get a Prep Quote"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Floor Preparation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Turner Installs",
              "telephone": "+61 7480 223 88",
              "email": "liam@turnerinstalls.com",
              "url": "https://turnerinstalls.com.au",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brisbane",
                "addressRegion": "QLD",
                "addressCountry": "AU"
              }
            },
            "description": "Professional floor preparation services including concrete grinding, levelling, and moisture barriers.",
            "areaServed": ["Brisbane", "Gold Coast", "Sunshine Coast", "Toowoomba", "Gympie"]
          })
        }}
      />
    </>
  );
}
