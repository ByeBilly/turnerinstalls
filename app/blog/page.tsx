import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import ServiceHero from "@/components/ServiceHero";

export const metadata = {
    title: "Flooring Blog | Guides & Local Tips | Turner Installs",
    description:
        "Expert flooring guides for Brisbane, Ipswich, and Logan. Queenslander flooring, humidity, renovation tips, and local suburb guides from Oxley-based installers.",
};

export default function BlogPage() {
    const byCategory = blogPosts.reduce(
        (acc, post) => {
            if (!acc[post.category]) acc[post.category] = [];
            acc[post.category].push(post);
            return acc;
        },
        {} as Record<string, typeof blogPosts>
    );

    return (
        <>
            <ServiceHero
                title={
                    <>
                        Flooring <span className="text-yellow-500">Blog</span>
                    </>
                }
                subtitle="Guides, tips, and local knowledge for Brisbane homeowners. From Queenslander flooring to renovation advice."
                imagePath="/installspics/finished/brisbane views.jpg"
                label="GUIDES & LOCAL TIPS"
            />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-5">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">
                        Guides & Articles
                    </h2>
                    <div className="space-y-10">
                        {Object.entries(byCategory).map(([category, posts]) => (
                            <div key={category}>
                                <h3 className="text-lg font-bold text-slate-600 uppercase tracking-wider mb-4">
                                    {category}
                                </h3>
                                <div className="space-y-6">
                                    {posts.map((post) => (
                                        <article
                                            key={post.slug}
                                            className="border-b border-slate-200 pb-6 last:border-0"
                                        >
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="group block"
                                            >
                                                <h4 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors mb-2">
                                                    {post.title}
                                                </h4>
                                                <p className="text-slate-600 text-sm mb-2">
                                                    {post.excerpt}
                                                </p>
                                                <span className="text-yellow-600 text-sm font-bold group-hover:underline">
                                                    Read more →
                                                </span>
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        Need Flooring in Brisbane?
                    </h2>
                    <p className="text-slate-600 mb-6">
                        We're based in Oxley and service Brisbane, Ipswich, Logan,
                        and Moreton Bay. Free quotes.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors"
                    >
                        Get a Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
