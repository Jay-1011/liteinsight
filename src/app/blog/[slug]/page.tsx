import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleBody from "@/components/ArticleBody";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { Arrow } from "@/components/Icons";
import { POSTS, getPost, relatedPosts, formatDate } from "@/lib/posts";

const SITE_URL = "https://liteinsight.in";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = relatedPosts(post);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "LiteInsight",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.tags.join(", "),
    articleSection: post.niche,
    image: `${SITE_URL}/opengraph-image.png`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqLd = post.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <Nav />
      <main>
        <article className="article">
          <div className="wrap article-wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blog">Insights</Link>
              <span>/</span>
              <span className="crumb-cur">{post.niche}</span>
            </nav>

            <span className="article-niche">{post.niche}</span>
            <h1 className="article-title">{post.title}</h1>

            <div className="article-meta">
              <span className="am-av" style={{ background: post.gradient }}>
                {post.monogram}
              </span>
              <div>
                <div className="am-author">{post.author}</div>
                <div className="am-sub">
                  {formatDate(post.date)} · {post.readMins} min read · {post.authorRole}
                </div>
              </div>
            </div>

            <div className="tldr">
              <span className="tldr-lab">TL;DR</span>
              <p>{post.tldr}</p>
            </div>

            <ArticleBody blocks={post.body} />

            {post.faqs && (
              <div className="article-faq">
                <h2>Frequently asked questions</h2>
                <div className="faq">
                  {post.faqs.map((f, i) => (
                    <details key={f.q} open={i === 0}>
                      <summary>
                        {f.q}
                        <span className="pm" />
                      </summary>
                      <div className="ans">{f.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            <div className="article-tags">
              {post.tags.map((t) => (
                <span className="atag" key={t}>
                  #{t}
                </span>
              ))}
            </div>

            <div className="article-cta">
              <div>
                <h3>Get insights like this weekly.</h3>
                <p>Join 40,000+ smart readers. One email, the best of the week.</p>
              </div>
              <Link href="/#newsletter" className="btn btn-spark">
                Subscribe free
              </Link>
            </div>
          </div>
        </article>

        <section className="sec" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="sec-head reveal" style={{ marginBottom: 28 }}>
              <span className="eyebrow">Keep reading</span>
              <h2 className="h2" style={{ marginTop: 12 }}>
                More insights
              </h2>
            </div>
            <div className="post-grid">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
            <div style={{ marginTop: 30 }}>
              <Link href="/blog" className="btn btn-ghost">
                All insights <Arrow />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
