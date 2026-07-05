import { SITE } from "@/lib/data";
import { Arrow, Check, Bolt } from "./Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <div className="hero-grid-lines" />
      </div>

      <div className="wrap hero-in">
        <div className="hero-copy reveal">
          <span className="eyebrow">{SITE.motto}</span>
          <h1 className="h1">
            Always Lite. Always <em>Clever.</em>
          </h1>
          <p className="lead">
            LiteInsight reviews digital products and publishes clever, easy-to-read insights
            across the niches you care about — smart, simple and effective, never complicated.
          </p>
          <div className="hero-actions">
            <a href="#picks" className="btn btn-spark">
              Explore top picks <Arrow />
            </a>
            <a href="#how" className="btn btn-ghost">
              How we test
            </a>
          </div>
          <div className="hero-trust">
            <div className="avatars" aria-hidden="true">
              <span>A</span>
              <span>K</span>
              <span>R</span>
              <span>M</span>
            </div>
            <div>
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <small>
                Trusted by <b>{SITE.readers}</b> smart buyers · Independent &amp; unbiased
              </small>
            </div>
          </div>
        </div>

        <div className="hero-copy reveal" style={{ transitionDelay: ".12s" }}>
          <div className="signal">
            <div className="signal-top">
              <span className="pill pill-live">
                <span className="dot" />
                LIVE PICK
              </span>
              <span className="signal-head">Editor&apos;s Choice · This week</span>
            </div>
            <div className="pick">
              <div
                className="thumb"
                style={{ background: "linear-gradient(135deg,#5a3fd6,#8b6bff)" }}
              >
                Ai
              </div>
              <div className="meta">
                <div className="cat">AI Writing Suite</div>
                <h4>NovaWrite Pro</h4>
                <div className="rate">
                  <span className="stars">★★★★★</span> 4.9 · 2,140 reviews
                </div>
              </div>
            </div>
            <div className="score-row">
              <div className="score">
                <span className="num">96</span>
                <span className="lbl">Lite&nbsp;Score</span>
              </div>
              <div className="price-tag">
                <div>
                  <span className="was">$149</span>
                  <span className="now">$59</span>
                </div>
                <span className="badge-deal">LIFETIME DEAL · 60% OFF</span>
              </div>
            </div>
            <div className="signal-cta">
              <a href="#picks" className="btn btn-ink btn-sm">
                Read review
              </a>
              <a href="#deal" className="btn btn-spark btn-sm">
                Get the deal
              </a>
            </div>
            <div className="float-chip fc1">
              <span
                className="ic"
                style={{ background: "var(--grow-wash)", color: "var(--grow-ink)" }}
              >
                <Check width={16} height={16} />
              </span>
              Verified deal
            </div>
            <div className="float-chip fc2">
              <span
                className="ic"
                style={{ background: "#fff1e8", color: "var(--spark-ink)" }}
              >
                <Bolt width={16} height={16} />
              </span>
              Instant delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
