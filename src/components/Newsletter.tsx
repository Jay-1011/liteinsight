"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";
import { Star } from "./Icons";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setErr(true);
      setOk(false);
      return;
    }
    // TODO: POST to your ESP (Klaviyo / Mailchimp / your API route).
    setErr(false);
    setOk(true);
    setEmail("");
  }

  return (
    <section className="wrap" id="newsletter" style={{ paddingBottom: 20 }}>
      <div className="news reveal">
        <div className="news-in">
          <span
            className="eyebrow center"
            style={{ color: "var(--spark)", justifyContent: "center" }}
          >
            <span style={{ background: "var(--spark)" }} />
          </span>
          <h2 className="h2">Get the week&apos;s best digital deals.</h2>
          <p>
            Join {SITE.readers} smart buyers. One email a week — the top picks, exclusive
            lifetime deals and insights. No spam, unsubscribe anytime.
          </p>
          <form onSubmit={onSubmit} noValidate>
            <input
              type="email"
              placeholder="you@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={err ? { borderColor: "var(--spark)" } : undefined}
              required
            />
            <button type="submit" className="btn btn-spark">
              Subscribe free
            </button>
          </form>
          <div className={`news-ok${ok ? " show" : ""}`}>
            ✓ You&apos;re in! Check your inbox to confirm.
          </div>
          <p className="fineprint">
            // Free forever · {SITE.readers} subscribers · Curated by the LiteInsight team
          </p>
        </div>
      </div>

      <div className="partner reveal">
        <div className="pt-l">
          <span className="pt-ic">
            <Star />
          </span>
          <div>
            <h3>Have a digital product?</h3>
            <p>
              Get it reviewed, scored and featured to {SITE.readers} buyers. Partnerships &amp;
              sponsored placements available.
            </p>
          </div>
        </div>
        <a href="#footer" className="btn btn-ink">
          Get featured
        </a>
      </div>
    </section>
  );
}
