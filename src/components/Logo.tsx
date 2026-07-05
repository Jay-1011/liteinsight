import { SITE } from "@/lib/data";

/**
 * LiteInsight "Voltage Bolt" mark — a lightning bolt (power + speed, and a nod
 * to "Lite" = light) with amber motion ticks. White bolt sits on the brand
 * gradient tile; the amber accent uses the spark colour.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={`mark${className ? ` ${className}` : ""}`} aria-hidden="true">
      <svg className="mark-svg" viewBox="0 0 64 64" fill="none">
        <path d="M32.5 5 L7.5 35 H25 L22.5 55 L47.5 25 H30 Z" fill="#fff" />
        <path
          d="M13 16 H21 M9 25 H15"
          stroke="#FF7A2F"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** Full brand lockup: mark + "LiteInsight" wordmark with the tagline. */
export default function Logo({ href = "#top" }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="LiteInsight home">
      <LogoMark />
      <span>
        LiteInsight<small>{SITE.tagline}</small>
      </span>
    </a>
  );
}
