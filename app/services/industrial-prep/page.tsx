import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Industrial & Commercial Floor Prep Brisbane",
    description:
        "Large-scale floor preparation for warehouses, retail shops, and offices. Bulk levelling, shot blasting, and grinding services.",
};

export default function IndustrialPrep() {
    const specs = [
        {
            icon: "🏭",
            title: "Warehouse Makegoods",
            description: "Returning leased industrial properties to 'make good' status by removing bolt holes, lines, and damage."
        },
        {
            icon: "🚛",
            title: "Heavy Machinery",
            description: "We deploy 3-phase planetary grinders and ride-on strippers for large square meterage projects."
        },
        {
            icon: "🏥",
            title: "Shop Fitouts",
            description: "Rapid overnight floor preparation for retail stores and commercial tenancies to meet handover deadlines."
        },
        {
            icon: "📏",
            title: "FF/FL Levelling",
            description: "High-spec levelling to meet Super Flat floor requirements for VNA forklift aisles."
        }
    ];

    const faqs = [
        {
            question: "What is your daily capacity?",
            answer: "For standard grinding, we can complete 200m²+ per day. For pumping/levelling, we can pour 500m²+ per day with our pump team."
        },
        {
            question: "Do you work nights/weekends?",
            answer: "Yes. We understand commercial sites often require after-hours work to minimize trading downtime. We are fully flexible."
        },
        {
            question: "Are you insured for commercial sites?",
            answer: "Yes, we carry Full Public Liability insurance and all our operators are white-card certified and trained in hazardous materials awareness."
        },
        {
            question: "Do you supply the spec?",
            answer: "We can work to your architect's specification or design a prep system (e.g., moisture barrier + 5mm level) to meet the flooring manufacturer's warranty requirements."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Industrial <span className="text-yellow-500">Surface Prep</span>.</>}
                subtitle="High-volume grinding, leveling, and rectification for commercial projects."
                imagePath="/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
                label="COMMERCIAL_INDUSTRIAL"
            />

            <TechSpecs
                title="Commercial Scale. Precision Detail."
                description={<>
                    <p className="mb-4">From 2,000m² warehouse rectifications to critical hospital floor levelling, Turner Installs has the heavy machinery and manpower to hit tight deadlines.</p>
                    <p>We understand that <strong>time is money</strong> on site. Our systems are fast-curing, rapid-set, and designed to get floor layers working sooner.</p>
                </>}
                features={specs}
            />

            <GalleryStrip
                images={[
                    "/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png",
                    "/images/resource_avPl0dbJ2Se1Om54B2t_d-.png",
                    "/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png",
                    "/images/resource_9fVqoabE10H5PDfVW4rOXY.png"
                ]}
            />

            <FAQSection items={faqs} />

            <SEOCTA
                title="Built for business."
                subtitle="Secure your project schedule with reliability. Contact our commercial estimator today."
                buttonText="Commercial Enquiry"
            />
        </>
    );
}
