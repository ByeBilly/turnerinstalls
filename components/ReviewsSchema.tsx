import { BUSINESS_ID } from "@/lib/business";
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
        // Same @id as the sitewide business node in the root layout, so these
        // reviews attach to that entity instead of declaring a second business.
        "@type": ["FlooringContractor", "LocalBusiness"],
        "@id": BUSINESS_ID,
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
