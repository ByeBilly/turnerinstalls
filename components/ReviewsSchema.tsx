import { BASE_URL, BUSINESS } from "@/lib/business";
import { buildAggregateRating, buildReviewSchema } from "@/lib/reviews";

/**
 * LocalBusiness schema carrying AggregateRating + individual Review nodes,
 * built from data/reviews.json. Without this, star ratings can never appear
 * as a rich result even though the reviews are published on the page.
 */
export default function ReviewsSchema() {
    const aggregateRating = buildAggregateRating();
    if (!aggregateRating) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: BUSINESS.name,
        url: BASE_URL,
        telephone: BUSINESS.telephone,
        address: {
            "@type": "PostalAddress",
            ...BUSINESS.address,
        },
        aggregateRating,
        review: buildReviewSchema(),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
