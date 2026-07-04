"use client";

import { useEffect, useState } from "react";
import { Check } from "./Icons";

const pad = (n: number) => (n < 10 ? "0" : "") + n;

// The offer window, in seconds from first load. Swap for a fixed end date when
// you wire real deals (e.g. from a `sale_events` table).
const OFFER_SECONDS = 2 * 86400 + 8 * 3600 + 45 * 60 + 30;

export default function DealOfWeek() {
  const [left, setLeft] = useState(OFFER_SECONDS);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const end = Date.now() + OFFER_SECONDS * 1000;
    const upd = () => setLeft(Math.max(0, Math.round((end - Date.now()) / 1000)));
    upd();
    if (reduce) return;
    const id = setInterval(upd, 1000);
    return () => clearInterval(id);
  }, []);

  const d = Math.floor(left / 86400);
  const h = Math.floor((left % 86400) / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;

  const cells: [string, number][] = [
    ["Days", d],
    ["Hrs", h],
    ["Min", m],
    ["Sec", s],
  ];

  return (
    <section className="wrap" id="deal" style={{ paddingBottom: 20 }}>
      <div className="deal-band reveal">
        <div className="deal-in">
          <div>
            <span className="deal-tag">⚡ Deal of the week</span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              Lifetime access to NovaWrite Pro — 60% off.
            </h2>
            <p>
              Our #1 AI writing suite this month. Pay once, use forever. This exclusive
              LiteInsight price ends soon.
            </p>
            <div className="countdown" aria-label="Time remaining">
              {cells.map(([label, val]) => (
                <div className="cd" key={label}>
                  <div className="cn">{pad(val)}</div>
                  <div className="cl">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="deal-card">
            <div className="idrow">
              <span
                className="thumb"
                style={{ width: 52, height: 52, fontSize: 20, background: "linear-gradient(135deg,#5a3fd6,#8b6bff)" }}
              >
                Nv
              </span>
              <div>
                <div
                  className="cat"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10.5px",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                  }}
                >
                  AI Writing Suite
                </div>
                <h3>NovaWrite Pro</h3>
              </div>
            </div>
            <ul className="feat">
              <li>
                <Check /> Unlimited AI words &amp; brand voices
              </li>
              <li>
                <Check /> 40+ templates &amp; long-form editor
              </li>
              <li>
                <Check /> Lifetime updates · instant delivery
              </li>
            </ul>
            <div className="deal-price">
              <span className="now">$59</span>
              <span className="was">$149</span>
              <span className="off">SAVE 60%</span>
            </div>
            <a href="#newsletter" className="btn btn-spark" style={{ width: "100%" }}>
              Claim this deal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
