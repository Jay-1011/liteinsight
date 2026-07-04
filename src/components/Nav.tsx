"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";
import { ExternalArrow } from "./Icons";

const LINKS = [
  { href: "#picks", label: "Reviews" },
  { href: "#categories", label: "AI Tools" },
  { href: "#deal", label: "Deals" },
  { href: "#how", label: "How we test" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav${stuck ? " stuck" : ""}`} id="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top" aria-label="LiteInsight home">
          <span className="mark" aria-hidden="true" />
          <span>
            LiteInsight<small>{SITE.tagline}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#grow" className="grow-link">
            Grow <ExternalArrow className="ext" />
          </a>
        </nav>

        <div className="nav-cta">
          <a href="#picks" className="btn btn-ghost btn-sm">
            Browse picks
          </a>
          <a href="#newsletter" className="btn btn-spark btn-sm">
            Get the newsletter
          </a>
        </div>

        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#grow" onClick={() => setOpen(false)}>
          Grow by LiteInsight ↗
        </a>
        <a href="#newsletter" className="btn btn-spark" onClick={() => setOpen(false)}>
          Get the newsletter
        </a>
      </div>
    </header>
  );
}
