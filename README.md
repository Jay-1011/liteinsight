# LiteInsight

Marketing site for **LiteInsight** — digital product reviews, AI tools, deals and
recommendations — plus a cross-sell to the **Grow by LiteInsight** sub-brand.

Built with **Next.js 15 (App Router) + React 19 + TypeScript**, statically exported so it
hosts anywhere: **Cloudflare Pages, Vercel**, Netlify, S3, etc.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Build the static site:

```bash
npm run build      # outputs a fully static site to ./out
```

`next.config.mjs` uses `output: "export"`, so `npm run build` produces `./out` — plain HTML,
CSS and JS with no server required.

---

## Project structure

```
src/
  app/
    layout.tsx        Root layout + SEO metadata (Open Graph, Twitter, robots)
    page.tsx          Composes every section in order
    globals.css       Full design system (tokens, components, responsive)
    icon.svg          Favicon (brand mark)
    robots.ts         /robots.txt
    sitemap.ts        /sitemap.xml
  lib/
    data.ts           ⭐ CONTENT LAYER — products, deals, stats, categories,
                      testimonials, FAQs. Edit here, no component changes needed.
  components/
    Nav.tsx           Sticky nav + mobile menu           (client)
    Hero.tsx          Headline + live "Editor's Pick" card
    LogoBar.tsx       Trust strip
    Services.tsx      Why-LiteInsight value cards
    Stats.tsx         Animated counters                  (client)
    Picks.tsx         Filterable product grid (affiliate) (client)
    HowItWorks.tsx    5-step process
    Categories.tsx    Category hub (scales content)
    DealOfWeek.tsx    Deal + live countdown              (client)
    Grow.tsx          Cross-sell band → grow.liteinsight.in
    Testimonials.tsx  Social proof
    Newsletter.tsx    Email capture + partner strip      (client)
    Faq.tsx           Transparency FAQ
    FinalCta.tsx      Closing call to action
    Footer.tsx        Footer + WhatsApp + affiliate disclosure
    Icons.tsx         Inline SVG icon set
    ScrollReveal.tsx  Scroll-in animations               (client)
```

### Editing content

Almost everything is data-driven. To change the products, prices, deal, stats, categories,
testimonials or FAQs, edit **`src/lib/data.ts`** only. This is the seam to later pull the
same shape from a CMS or Supabase.

---

## Monetization surfaces already wired in

- **Affiliate picks** — `Picks.tsx` cards with Lite Scores, deal badges and "Get deal" CTAs.
- **Deal of the week** — urgency-driven single offer with a live countdown.
- **Newsletter capture** — owned audience (`Newsletter.tsx`). Hook the form to your ESP.
- **Partner / sponsorship strip** — "Get your product featured".
- **Grow cross-sell** — routes traffic to the services sub-brand.
- **Category hub** — the frame to scale reviews and SEO content into.

### Wire up the newsletter

`Newsletter.tsx` currently validates the email and shows a success state. Replace the
`// TODO` with a POST to your provider (Klaviyo, Mailchimp, ConvertKit) or a serverless
endpoint. For a static export, call the provider's API directly from the client, or add a
lightweight function (Cloudflare Pages Functions / Vercel Function) if you want to keep keys
server-side.

---

## Deploy

### Cloudflare Pages
- **Framework preset:** Next.js (Static HTML Export) — or "None".
- **Build command:** `npm run build`
- **Build output directory:** `out`
- Node version: 20+.

### Vercel
- Import the repo — Vercel auto-detects Next.js. No settings needed.
- (The static export still works; Vercel serves `./out`.)

### Any static host
Upload the contents of `./out` after `npm run build`.

---

## Notes

- Fonts use system stacks (SF Pro / Iowan / system mono) — zero webfont requests, instant load.
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`.
- No tracking is included by default — add GA/GTM in `layout.tsx` when ready.
