import { notFound } from "next/navigation";
import Link from "next/link";
import {
    blogPosts,
    getBlogPost,
    getAllBlogSlugs,
} from "@/data/blogPosts";
import { flooringInstallationSuburbs } from "@/data/flooringInstallationSuburbs";
import BlogContent from "@/components/BlogContent";
import SEOCTA from "@/components/SEOCTA";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return {};

    return {
        title: `${post.title} | Turner Installs Blog`,
        description: post.metaDescription,
        openGraph: {
            title: post.title,
            description: post.metaDescription,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const relatedSuburbLinks = (post.relatedSuburbs || [])
        .map((s) => flooringInstallationSuburbs.find((sub) => sub.slug === s))
        .filter(Boolean);

    const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

    return (
        <>
            <article className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-5">
                    <Link
                        href="/blog"
                        className="text-sm text-yellow-600 font-bold hover:underline mb-6 inline-block"
                    >
                        ← Back to Blog
                    </Link>
                    <header className="mb-10">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            {post.category} • {post.publishedAt}
                        </span>
                        <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">
                            {post.title}
                        </h1>
                        <p className="text-slate-600 text-lg">{post.excerpt}</p>
                        <p className="text-sm text-slate-500 mt-2">
                            By {post.author}
                        </p>
                    </header>

                    <div className="border-t border-slate-200 pt-8">
                        <BlogContent content={post.content} />
                    </div>

                    {relatedSuburbLinks.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">
                                Flooring in These Suburbs
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {relatedSuburbLinks.map((sub) =>
                                    sub ? (
                                        <Link
                                            key={sub.slug}
                                            href={`/flooring-installation/${sub.slug}`}
                                            className="px-4 py-2 bg-slate-100 text-slate-700 rounded hover:bg-yellow-400 hover:text-slate-900 transition-colors text-sm font-medium"
                                        >
                                            {sub.name}
                                        </Link>
                                    ) : null
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            {otherPosts.length > 0 && (
                <section className="py-12 bg-slate-50 border-t border-slate-200">
                    <div className="max-w-4xl mx-auto px-5">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">
                            More Articles
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {otherPosts.map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/blog/${p.slug}`}
                                    className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-yellow-400 transition-colors"
                                >
                                    <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 line-clamp-2">
                                        {p.excerpt}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <SEOCTA
                title="Ready for a flooring quote?"
                subtitle="We're based in Oxley and service Brisbane, Ipswich, Logan, and Moreton Bay. Free site visits."
                buttonText="Get a Quote"
            />
        </>
    );
}
