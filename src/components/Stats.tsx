"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/data";

function useCountUp(active: boolean) {
  const [vals, setVals] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVals(STATS.map((s) => s.count));
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const dur = 1400;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVals(STATS.map((s) => s.count * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return vals;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const vals = useCountUp(active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="stats" ref={ref}>
      <div className="wrap stats-grid">
        {STATS.map((s, i) => (
          <div className="stat reveal" key={s.label} style={{ transitionDelay: `${i * 0.06}s` }}>
            <div className="n">
              {vals[i].toFixed(s.dec ?? 0)}
              <span className="suf">{s.suffix}</span>
            </div>
            <div className="t">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
