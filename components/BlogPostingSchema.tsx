import { BASE_URL, BUSINESS, businessRef } from "@/lib/business";

export default function BlogPostingSchema({
    slug,
    title,
    description,
    author,
    datePublished,
}: {
    slug: string;
    title: string;
    description: string;
    author: string;
    datePublished: string;
}) {
    const url = `${BASE_URL}/blog/${slug}`;

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished,
        dateModified: datePublished,
        author: {
            "@type": "Person",
            name: author,
            worksFor: businessRef,
        },
        publisher: businessRef,
        image: BUSINESS.image,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
