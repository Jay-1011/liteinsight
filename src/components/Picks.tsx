"use client";

import { useState } from "react";
import { PRODUCTS, PICK_TABS, type FilterKey } from "@/lib/data";

export default function Picks() {
  const [filter, setFilter] = useState<FilterKey>("all");

  return (
    <section className="sec" id="picks">
      <div className="wrap">
        <div className="picks-head">
          <div className="sec-head reveal" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Editor&apos;s picks</span>
            <h2 className="h2">This month&apos;s best digital tools.</h2>
            <p>
              Ranked by our Lite Score — a blend of hands-on testing, value for money and
              verified user reviews.
            </p>
          </div>
          <div className="tabs reveal" role="tablist" aria-label="Filter picks">
            {PICK_TABS.map((t) => (
              <button
                key={t.key}
                className={`tab${filter === t.key ? " active" : ""}`}
                role="tab"
                aria-selected={filter === t.key}
                onClick={() => setFilter(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="picks-grid">
          {PRODUCTS.map((p, i) => {
            const show = filter === "all" || p.cat === filter;
            return (
              <article
                className="prod reveal"
                key={p.id}
                data-cat={p.cat}
                style={{ display: show ? "" : "none", transitionDelay: `${(i % 3) * 0.05}s` }}
              >
                <div className="prod-top">
                  <span className={`rank${p.editor ? " editor" : ""}`}>{p.rank}</span>
                  <span className="litebadge">
                    <b>{p.liteScore}</b> Lite Score
                  </span>
                </div>
                <div className="prod-body">
                  <div className="idrow">
                    <span
                      className="thumb"
                      style={{ width: 48, height: 48, fontSize: 18, background: p.gradient }}
                    >
                      {p.monogram}
                    </span>
                    <div>
                      <div className="cat">{p.category}</div>
                      <h3>{p.name}</h3>
                    </div>
                  </div>
                  <p className="desc">{p.desc}</p>
                  <div className="ratewrap">
                    <span className="stars">{p.stars}</span>
                    <small>
                      {p.rating} · {p.reviews}
                    </small>
                  </div>
                </div>
                <div className="prod-foot">
                  <div className="price">
                    <span className="now">{p.price}</span>
                    <span className="was">{p.was}</span>
                    <div className="sub">{p.sub}</div>
                  </div>
                  <a href="#newsletter" className="btn btn-brand btn-sm">
                    Get deal
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="picks-note">
          // Reader-supported — we may earn a commission when you buy through our links, at no
          extra cost to you.
        </p>
      </div>
    </section>
  );
}
