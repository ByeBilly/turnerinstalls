import ServiceHero from "@/components/ServiceHero";
import ReviewCard from "@/components/ReviewCard";
import CTAButton from "@/components/CTAButton";
import fs from 'fs';
import path from 'path';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Reviews | Turner Installs Flooring Brisbane",
    description: "See what our clients say about our floor preparation, grinding, and installation services across Brisbane and SE QLD.",
};

async function getReviews() {
    // For SSG/SSR, we can read directly from file system if strictly server-side, 
    // or fetch from our own API URL. Reading file is safer for build time generation.
    try {
        const filePath = path.join(process.cwd(), 'data', 'reviews.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileData);
    } catch (error) {
        return [];
    }
}

export default async function ReviewsPage() {
    const reviews = await getReviews();

    return (
        <>
            <ServiceHero
                title={<>Client <span className="text-yellow-500">Reviews</span>.</>}
                subtitle="Real feedback from real flooring projects across South East Queensland."
                imagePath="/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png" // Using one of the gallery images
                label="TESTIMONIALS"
            />

            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">What Locals Say</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We pride ourselves on communication, cleanliness, and quality. Here is what our recent customers think of the Turner Installs experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review: any) => (
                            <ReviewCard
                                key={review.id}
                                name={review.name}
                                suburb={review.suburb}
                                service={review.service}
                                rating={review.rating}
                                comment={review.comment}
                                date={review.date}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-900 border-t border-white/5 text-center">
                <div className="max-w-3xl mx-auto px-5">
                    <h2 className="text-3xl font-bold mb-6">Have we worked for you?</h2>
                    <p className="text-gray-400 mb-10">
                        We value your feedback. Leave us a review on Google or contact us directly.
                    </p>
                    <CTAButton href="https://g.page/r/YOUR_GOOGLE_LINK_HERE" variant="primary">
                        Review on Google
                    </CTAButton>
                </div>
            </section>
        </>
    );
}
