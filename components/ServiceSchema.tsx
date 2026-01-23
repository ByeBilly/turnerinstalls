export default function ServiceSchema({ title, description, url }: { title: string, description: string, url: string }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": title,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Turner Installs",
            "telephone": "+61748022388",
            "email": "liam@turnerinstalls.com",
            "url": "https://turnerinstalls.com.au",
            "image": "https://turnerinstalls.com.au/logo.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brisbane",
                "addressRegion": "QLD",
                "addressCountry": "AU"
            }
        },
        "areaServed": {
            "@type": "State",
            "name": "Queensland"
        },
        "description": description,
        "url": url
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
