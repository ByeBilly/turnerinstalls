import CTAButton from "@/components/CTAButton";

interface SEOCTAProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink?: string;
}

export default function SEOCTA({
    title,
    subtitle,
    buttonText,
    buttonLink = "/contact"
}: SEOCTAProps) {
    return (
        <section className="py-24 bg-yellow-400 text-black">
            <div className="max-w-4xl mx-auto px-5 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">{title}</h2>
                <p className="text-lg text-black/80 mb-10 max-w-xl mx-auto font-medium">
                    {subtitle}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <CTAButton href={buttonLink} variant="primary" className="!bg-black !text-white hover:!bg-gray-900 border-none">
                        {buttonText}
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
