// ---------------------------------------------------------------------------
// Content layer for LiteInsight.
// Everything the marketing site renders lives here as plain data, so non-devs
// can edit products/deals/copy without touching components — and this is the
// natural seam to later swap for a CMS or Supabase feed.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "LiteInsight",
  tagline: "Always Lite & Clever",
  motto: "Discover · Decide · Delight",
  whatsapp: "917028466160",
  whatsappDisplay: "+91 70284 66160",
  growUrl: "https://grow.liteinsight.in/",
  insigtradeUrl: "https://insigtrade.com/",
  readers: "40,000+",
} as const;

// The LiteInsight family of brands (parent + verticals), used in the footer.
export const BRANDS = [
  { name: "LiteInsight", note: "Digital products & reviews", href: "/#top", dot: "", external: false },
  { name: "Grow by LiteInsight", note: "Websites in 24 hours", href: "https://grow.liteinsight.in/", dot: "#12B981", external: true },
  { name: "InsigTrade by LiteInsight", note: "AI trading intelligence", href: "https://insigtrade.com/", dot: "#0EA5B7", external: true },
] as const;

export type FilterKey = "all" | "ai" | "prod" | "design" | "mktg";

export type Product = {
  id: string;
  name: string;
  monogram: string;
  gradient: string;
  category: string;
  cat: Exclude<FilterKey, "all">;
  desc: string;
  stars: string; // ★ glyphs
  rating: string;
  reviews: string;
  liteScore: number;
  price: string;
  was: string;
  sub: string;
  rank: string;
  editor?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "novawrite",
    name: "NovaWrite Pro",
    monogram: "Nv",
    gradient: "linear-gradient(135deg,#5a3fd6,#8b6bff)",
    category: "AI Writing",
    cat: "ai",
    desc: "All-in-one AI writing suite with brand voice, long-form and 40+ templates.",
    stars: "★★★★★",
    rating: "4.9",
    reviews: "2,140 reviews",
    liteScore: 96,
    price: "$59",
    was: "$149",
    sub: "Lifetime · 60% off",
    rank: "EDITOR'S CHOICE",
    editor: true,
  },
  {
    id: "flowdesk",
    name: "FlowDesk",
    monogram: "Fl",
    gradient: "linear-gradient(135deg,#1652f0,#4f86ff)",
    category: "Productivity",
    cat: "prod",
    desc: "A calm workspace that unifies tasks, docs and calendar with smart automations.",
    stars: "★★★★★",
    rating: "4.8",
    reviews: "1,506 reviews",
    liteScore: 93,
    price: "$39",
    was: "$99",
    sub: "Yearly · 61% off",
    rank: "#2 THIS MONTH",
  },
  {
    id: "pixelforge",
    name: "PixelForge",
    monogram: "Px",
    gradient: "linear-gradient(135deg,#ff7a2f,#ff9a5c)",
    category: "Design",
    cat: "design",
    desc: "AI-assisted design studio for social, ads and brand kits — no learning curve.",
    stars: "★★★★☆",
    rating: "4.7",
    reviews: "980 reviews",
    liteScore: 91,
    price: "$49",
    was: "$120",
    sub: "Lifetime · 59% off",
    rank: "#3 THIS MONTH",
  },
  {
    id: "rankpilot",
    name: "RankPilot",
    monogram: "Rk",
    gradient: "linear-gradient(135deg,#12b981,#3dd9a3)",
    category: "Marketing",
    cat: "mktg",
    desc: "SEO & content engine that plans, writes and tracks rankings in one place.",
    stars: "★★★★★",
    rating: "4.8",
    reviews: "1,220 reviews",
    liteScore: 90,
    price: "$45",
    was: "$110",
    sub: "Yearly · 59% off",
    rank: "TOP RATED",
  },
  {
    id: "voicemint",
    name: "VoiceMint",
    monogram: "Vo",
    gradient: "linear-gradient(135deg,#0ea5b7,#3dd2e0)",
    category: "AI Audio",
    cat: "ai",
    desc: "Studio-grade AI voices and dubbing for creators, in 30+ languages.",
    stars: "★★★★☆",
    rating: "4.6",
    reviews: "742 reviews",
    liteScore: 89,
    price: "$29",
    was: "$79",
    sub: "Lifetime · 63% off",
    rank: "RISING",
  },
  {
    id: "snapnotes",
    name: "SnapNotes",
    monogram: "Sn",
    gradient: "linear-gradient(135deg,#e0468f,#ff6fae)",
    category: "Productivity",
    cat: "prod",
    desc: "Capture, summarise and search everything with AI — meetings to bookmarks.",
    stars: "★★★★★",
    rating: "4.7",
    reviews: "611 reviews",
    liteScore: 88,
    price: "$19",
    was: "$60",
    sub: "Lifetime · 68% off",
    rank: "BEST VALUE",
  },
];

export const PICK_TABS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI Tools" },
  { key: "prod", label: "Productivity" },
  { key: "design", label: "Design" },
  { key: "mktg", label: "Marketing" },
];

export type Stat = {
  count: number;
  suffix: string;
  dec?: number;
  label: string;
};

export const STATS: Stat[] = [
  { count: 1200, suffix: "+", label: "Products reviewed & scored" },
  { count: 40, suffix: "k+", label: "Smart buyers every month" },
  { count: 500, suffix: "+", label: "Verified exclusive deals" },
  { count: 4.8, suffix: "★", dec: 1, label: "Average reader rating" },
];

export type Category = {
  name: string;
  count: string;
  icon: "ai" | "saas" | "design" | "mktg" | "nocode" | "security";
  tone: "ic-viol" | "ic-blue" | "ic-spark" | "ic-grow";
};

export const CATEGORIES: Category[] = [
  { name: "AI Tools", count: "180+ reviews", icon: "ai", tone: "ic-viol" },
  { name: "SaaS & Software", count: "240+ reviews", icon: "saas", tone: "ic-blue" },
  { name: "Design", count: "120+ reviews", icon: "design", tone: "ic-spark" },
  { name: "Marketing", count: "150+ reviews", icon: "mktg", tone: "ic-grow" },
  { name: "No-Code", count: "90+ reviews", icon: "nocode", tone: "ic-blue" },
  { name: "Security", count: "60+ reviews", icon: "security", tone: "ic-viol" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
  color: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I stopped wasting money on tools that don't deliver. The Lite Score is the first thing I check before buying anything digital.",
    name: "Aarav Mehta",
    role: "Founder, D2C brand",
    initial: "A",
    color: "var(--brand)",
  },
  {
    quote:
      "The lifetime deals alone paid for years of software. Honest reviews, real savings — exactly what a busy team needs.",
    name: "Kavya Rao",
    role: "Marketing lead",
    initial: "K",
    color: "var(--spark)",
  },
  {
    quote:
      "Then Grow built our website in a day. One brand for both discovering tools and getting online — brilliant.",
    name: "Rohan Shah",
    role: "Small business owner",
    initial: "R",
    color: "var(--grow)",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Is LiteInsight free to use?",
    a: "Yes — browsing reviews, insights and deals is completely free. We're reader-supported: when you buy through some of our links we may earn a small commission, at no extra cost to you. That never changes how we score a product.",
  },
  {
    q: "How do you keep reviews unbiased?",
    a: "Every product is tested hands-on and scored with the same Lite Score criteria — value, features and verified user reviews. Sponsored placements are always clearly labelled and never influence a score.",
  },
  {
    q: "What is the Lite Score?",
    a: "A single 0–100 rating that blends our hands-on testing, price-to-value and real user reviews — so you can compare very different tools at a glance.",
  },
  {
    q: "What's the difference between LiteInsight and Grow?",
    a: "LiteInsight helps you discover and decide on digital products, tools and deals. Grow by LiteInsight is our done-for-you service that gets your business online with a professional website in 24 hours.",
  },
];

export const HOW_STEPS = [
  { t: "Browse the catalog", p: "Explore curated categories of software, AI tools and digital products." },
  { t: "Read the reviews", p: "Dig into honest, hands-on reviews and real user insights." },
  { t: "Compare options", p: "Weigh features, pricing and Lite Scores side by side." },
  { t: "Make the call", p: "Decide with confidence — no hype, no guesswork." },
  { t: "Shop securely", p: "Grab the deal and get instant, secure delivery." },
];
