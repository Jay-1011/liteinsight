import Link from "next/link";
import { POSTS } from "@/lib/posts";
import BlogCard from "./BlogCard";
import { Arrow } from "./Icons";

export default function InsightsTeaser() {
  const latest = POSTS.slice(0, 3);
  return (
    <section className="sec" id="insights">
      <div className="wrap">
        <div className="picks-head">
          <div className="sec-head reveal" style={{ marginBottom: 0 }}>
            <span className="eyebrow">From the blog</span>
            <h2 className="h2">Insights across every niche.</h2>
            <p>
              Guides, reviews and sharp takes on AI, marketing, productivity and more — written
              to be genuinely useful (and easy to find).
            </p>
          </div>
          <Link href="/blog" className="btn btn-ghost reveal">
            View all insights <Arrow />
          </Link>
        </div>
        <div className="post-grid">
          {latest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
