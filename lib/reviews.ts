import reviewsData from "@/data/reviews.json";

export interface BusinessReview {
    id: string;
    name: string;
    suburb?: string;
    service: string;
    rating: number;
    comment: string;
    date: string;
}

export const businessReviews = reviewsData as BusinessReview[];

/**
 * Shared AggregateRating fragment for schema.org LocalBusiness/FlooringContractor
 * blocks. Computed from data/reviews.json so it never has to be hand-edited to
 * match the review count/average — add a review to the data file and every page
 * using this picks it up.
 */
export function buildAggregateRating() {
    if (businessReviews.length === 0) return null;

    const total = businessReviews.reduce((sum, r) => sum + r.rating, 0);
    const ratingValue = Math.round((total / businessReviews.length) * 10) / 10;

    return {
        "@type": "AggregateRating",
        ratingValue,
        reviewCount: businessReviews.length,
        bestRating: 5,
        worstRating: 1,
    };
}

export function buildReviewSchema() {
    return businessReviews.map((review) => ({
        "@type": "Review",
        author: { "@type": "Person", name: review.name },
        datePublished: review.date,
        reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating,
            bestRating: 5,
            worstRating: 1,
        },
        reviewBody: review.comment,
    }));
}
