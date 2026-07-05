"use client";

import { useState } from "react";
import { POSTS, NICHES, type NicheKey } from "@/lib/posts";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  const [niche, setNiche] = useState<NicheKey | "all">("all");
  const posts = niche === "all" ? POSTS : POSTS.filter((p) => p.nicheKey === niche);

  return (
    <>
      <div className="tabs reveal" role="tablist" aria-label="Filter insights by niche">
        {NICHES.map((n) => (
          <button
            key={n.key}
            className={`tab${niche === n.key ? " active" : ""}`}
            role="tab"
            aria-selected={niche === n.key}
            onClick={() => setNiche(n.key)}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="post-grid">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </>
  );
}
