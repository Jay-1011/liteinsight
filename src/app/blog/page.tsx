import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Newsletter from "@/components/Newsletter";
import BlogGrid from "@/components/BlogGrid";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights — reviews, guides & AI-tool deep dives",
  description:
    "The LiteInsight blog: honest reviews, practical guides and sharp takes on AI tools, marketing, productivity, design and no-code.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "LiteInsight Insights",
    description:
      "Honest reviews, practical guides and sharp takes across AI, marketing, productivity, design and no-code.",
    url: "https://liteinsight.in/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "LiteInsight Insights",
    itemListElement: POSTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://liteinsight.in/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <Nav />
      <main>
        <section className="blog-hero">
          <div className="wrap">
            <span className="eyebrow reveal">LiteInsight Insights</span>
            <h1 className="h1 reveal" style={{ marginTop: 18 }}>
              Sharp insights, <em>every niche.</em>
            </h1>
            <p className="lead reveal" style={{ marginTop: 20, maxWidth: "52ch" }}>
              Reviews, guides and deep dives on the tools and trends that matter — written to
              be genuinely useful and easy to find, for humans and AI answer engines alike.
            </p>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <BlogGrid />
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
