import Link from "next/link";
import { type Post, formatDate } from "@/lib/posts";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="postcard reveal">
      <div className="postcard-cover" style={{ background: post.gradient }}>
        <span className="postcard-mono">{post.monogram}</span>
        <span className="postcard-niche">{post.niche}</span>
      </div>
      <div className="postcard-body">
        <h3>{post.title}</h3>
        <p className="postcard-ex">{post.excerpt}</p>
        <div className="postcard-meta">
          <span>{formatDate(post.date)}</span>
          <span className="dotsep">·</span>
          <span>{post.readMins} min read</span>
        </div>
      </div>
    </Link>
  );
}
