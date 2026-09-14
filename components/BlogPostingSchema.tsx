import { BASE_URL, BUSINESS } from "@/lib/business";

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
        },
        publisher: {
            "@type": "Organization",
            name: BUSINESS.name,
            logo: {
                "@type": "ImageObject",
                url: BUSINESS.logo,
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
