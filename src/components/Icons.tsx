import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Arrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.4} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ExternalArrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.4} {...p}><path d="M7 17L17 7M9 7h8v8" /></svg>
);
export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.6} {...p}><path d="M20 6L9 17l-5-5" /></svg>
);
export const Bolt = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.4} {...p}><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
);
export const Reviews = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
);
export const Users = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
);
export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6z" /></svg>
);

// category icons
export const CatAi = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M12 2a5 5 0 015 5c0 1.5-.6 2.5-1.5 3.5S14 12.5 14 14h-4c0-1.5-.6-2.5-1.5-3.5S7 8.5 7 7a5 5 0 015-5z" /><path d="M9 18h6M10 22h4" /></svg>
);
export const CatSaas = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
);
export const CatDesign = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><circle cx="13.5" cy="6.5" r="2.5" /><path d="M4 20l7-7 3 3 6-6" /><path d="M4 4v16h16" /></svg>
);
export const CatMktg = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg>
);
export const CatNocode = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
);
export const CatSecurity = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

export const WhatsApp = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1112 20zm4.5-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 01-2-1.2 7.3 7.3 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 00-.7.3A2.8 2.8 0 006 8.6a4.9 4.9 0 001 2.6 11 11 0 004.3 3.8c.6.3 1.1.4 1.5.5a3.5 3.5 0 001.6.1 2.7 2.7 0 001.7-1.2 2.2 2.2 0 00.2-1.2c-.1-.1-.3-.2-.5-.3z" /></svg>
);
export const XSocial = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-9L1.5 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.7L7.4 3.8H5.6L17.7 20z" /></svg>
);
export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" /></svg>
);
export const LinkedIn = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.8-2.05 3.7-2.05 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2.05 1.4-2.05 2.8V21H9z" /></svg>
);
export const WhatsAppSimple = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1112 20z" /></svg>
);
