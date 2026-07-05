// ---------------------------------------------------------------------------
// Blog / Insights content layer.
// Multi-niche posts. Each carries a `tldr` (great for AI answer engines) and
// optional `faqs` (rendered as FAQPage JSON-LD → eligible for AEO/GEO answers).
// Swap this array for a CMS/MDX source later; the shape is what matters.
// ---------------------------------------------------------------------------

export type NicheKey = "ai" | "productivity" | "marketing" | "design" | "nocode";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Faq = { q: string; a: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  niche: string;
  nicheKey: NicheKey;
  monogram: string;
  gradient: string;
  author: string;
  authorRole: string;
  date: string; // ISO — datePublished
  readMins: number;
  tldr: string;
  tags: string[];
  body: Block[];
  faqs?: Faq[];
  featured?: boolean;
};

export const NICHES: { key: NicheKey | "all"; label: string }[] = [
  { key: "all", label: "All insights" },
  { key: "ai", label: "AI Tools" },
  { key: "marketing", label: "Marketing" },
  { key: "productivity", label: "Productivity" },
  { key: "design", label: "Design" },
  { key: "nocode", label: "No-Code" },
];

export const POSTS: Post[] = [
  {
    slug: "aeo-vs-seo-show-up-in-ai-answers",
    title: "AEO vs SEO: How to Show Up in AI Answers in 2026",
    excerpt:
      "Search is splitting into two games — classic rankings and AI answers. Here's how to win both without doubling your work.",
    niche: "Marketing",
    nicheKey: "marketing",
    monogram: "Ae",
    gradient: "linear-gradient(135deg,#1652f0,#4f86ff)",
    author: "The LiteInsight Team",
    authorRole: "Editorial",
    date: "2026-06-28",
    readMins: 7,
    tldr:
      "SEO gets you ranked; AEO (Answer Engine Optimization) gets you quoted by AI assistants. Win both by writing clear, self-contained answers, adding structured data (Article + FAQ schema), and earning trust signals. The mechanics overlap ~80%.",
    tags: ["AEO", "GEO", "SEO", "AI search", "content strategy"],
    body: [
      { type: "p", text: "For a decade, being found online meant one thing: ranking on a search results page. That's no longer the whole story. A growing share of questions never reach a list of blue links — they're answered directly by an AI assistant that reads the web, synthesizes an answer, and cites a handful of sources." },
      { type: "p", text: "That shift creates a second discipline sitting next to SEO: Answer Engine Optimization (AEO), sometimes called Generative Engine Optimization (GEO). The goal is no longer only to rank — it's to be the source an AI chooses to quote." },
      { type: "h2", text: "What actually changes" },
      { type: "p", text: "Less than you'd think. The fundamentals of trustworthy, well-structured content still apply. What changes is emphasis: answer engines reward pages that state a clear answer up front, back it with evidence, and are easy for a machine to parse." },
      { type: "list", items: [
        "Lead with the answer. Put a one- or two-sentence summary at the top of every page (the TL;DR you're reading now).",
        "Write self-contained sections. Each heading should answer one question completely, so a model can lift it without needing the rest of the page.",
        "Add structured data. Article and FAQ schema tell machines exactly what your content is and what questions it answers.",
        "Earn trust signals. Clear authorship, dates, citations and consistent facts across the web make you a safer source to quote.",
      ]},
      { type: "h2", text: "The 80/20 of doing both" },
      { type: "p", text: "You don't need two content teams. A single well-made article — clear summary, scannable structure, real expertise, and schema markup — performs in classic search and gives answer engines everything they need. Optimize once, show up twice." },
      { type: "quote", text: "The best AEO strategy in 2026 looks a lot like great SEO in 2016 — just written for a reader who might be a machine summarizing you to a human." },
    ],
    faqs: [
      { q: "What is the difference between SEO and AEO?", a: "SEO (Search Engine Optimization) aims to rank your page in a list of search results. AEO (Answer Engine Optimization) aims to make your content the source an AI assistant quotes when it answers a question directly. They share most of the same fundamentals, but AEO puts extra weight on clear summaries, self-contained sections, and structured data." },
      { q: "What is GEO in marketing?", a: "GEO stands for Generative Engine Optimization — optimizing content so it is surfaced and cited by generative AI tools. It is largely used interchangeably with AEO." },
      { q: "Does schema markup help with AI answers?", a: "Yes. Structured data like Article and FAQPage schema makes it easier for both search engines and AI answer engines to understand what your page is about and which questions it answers, improving the odds you're cited." },
    ],
    featured: true,
  },
  {
    slug: "ai-writing-tools-worth-paying-for",
    title: "The AI Writing Tools Actually Worth Paying For",
    excerpt:
      "We tested the popular AI writing suites so you don't have to. Here's how to pick one that earns its subscription.",
    niche: "AI Tools",
    nicheKey: "ai",
    monogram: "Ai",
    gradient: "linear-gradient(135deg,#5a3fd6,#8b6bff)",
    author: "The LiteInsight Team",
    authorRole: "Reviews",
    date: "2026-06-20",
    readMins: 6,
    tldr:
      "The best AI writing tool isn't the one with the most features — it's the one that fits your actual workflow. Prioritize output quality on your use case, a real editor (not just a prompt box), brand-voice control, and fair pricing. Try before you commit to an annual plan.",
    tags: ["AI tools", "writing", "productivity", "reviews"],
    body: [
      { type: "p", text: "Every week there's a new AI writing tool promising to 10x your output. Most do roughly the same thing under the hood. The difference that matters is fit: does it slot into how you already work, and is the output good enough to ship with light editing?" },
      { type: "h2", text: "What separates the keepers" },
      { type: "list", items: [
        "Output quality on your task — a tool great at ads may be mediocre at long-form. Test on your real work.",
        "A proper editor, not just a chat box — you'll spend more time editing than generating.",
        "Brand voice control — the ability to teach it your tone so drafts sound like you.",
        "Honest pricing — watch for per-seat and per-word limits that balloon at scale.",
      ]},
      { type: "h2", text: "How to test in an afternoon" },
      { type: "p", text: "Pick three tasks you do often. Run each through two tools. Score the drafts on how close they are to shippable. The winner is usually obvious within an hour — and it's rarely the one with the longest feature list." },
      { type: "quote", text: "Buy the tool that makes your best work faster, not the one that makes average work effortless." },
    ],
    faqs: [
      { q: "Are paid AI writing tools worth it?", a: "For anyone writing regularly, yes — a good tool pays for itself in time saved. The key is matching the tool to your specific use case and testing output quality before committing to an annual plan." },
      { q: "How do I choose an AI writing tool?", a: "Test two or three tools on tasks you actually do, judge the drafts on how close they are to shippable, and prioritize a real editing experience, brand-voice control, and transparent pricing over long feature lists." },
    ],
    featured: true,
  },
  {
    slug: "content-workflow-that-runs-itself",
    title: "How to Build a Content Workflow That Runs Itself",
    excerpt:
      "Stop reinventing your process every week. A simple, repeatable system beats motivation every time.",
    niche: "Productivity",
    nicheKey: "productivity",
    monogram: "Fl",
    gradient: "linear-gradient(135deg,#12b981,#3dd9a3)",
    author: "The LiteInsight Team",
    authorRole: "Guides",
    date: "2026-06-12",
    readMins: 5,
    tldr:
      "A content workflow that runs itself has four repeatable stages — capture, plan, produce, publish — each with a single home and a clear trigger for the next. The tool matters less than the consistency.",
    tags: ["productivity", "workflow", "automation", "content"],
    body: [
      { type: "p", text: "The most productive creators aren't more disciplined than you — they've just removed the decisions. A workflow that runs itself replaces willpower with a checklist and a couple of automations." },
      { type: "h2", text: "The four stages" },
      { type: "list", items: [
        "Capture — one inbox for every idea, so nothing lives in your head.",
        "Plan — a weekly ritual that turns raw ideas into a short, dated queue.",
        "Produce — a template so you start from structure, not a blank page.",
        "Publish — a simple checklist that ends with distribution, not just 'hit publish'.",
      ]},
      { type: "p", text: "Give each stage one home and one trigger that moves work to the next. That's the whole trick. Automate the boring hand-offs; keep the judgment calls human." },
      { type: "quote", text: "Systems beat motivation because a system still works on the days you don't feel like it." },
    ],
    faqs: [
      { q: "What are the stages of a content workflow?", a: "A simple, durable content workflow has four stages: capture ideas in one place, plan them into a dated queue, produce from a template, and publish with a checklist that includes distribution." },
    ],
  },
  {
    slug: "no-code-stack-launch-in-a-weekend",
    title: "A No-Code Stack to Launch Your Idea in a Weekend",
    excerpt:
      "You don't need engineers to validate an idea. Here's a lean stack that gets you from concept to live in two days.",
    niche: "No-Code",
    nicheKey: "nocode",
    monogram: "Nc",
    gradient: "linear-gradient(135deg,#ff7a2f,#ff9a5c)",
    author: "The LiteInsight Team",
    authorRole: "Guides",
    date: "2026-06-05",
    readMins: 5,
    tldr:
      "To validate an idea fast, pair a no-code site builder, a form/database tool, a payment link, and an email tool. Ship the smallest version that lets a real person pay or sign up — then talk to them.",
    tags: ["no-code", "startup", "MVP", "launch"],
    body: [
      { type: "p", text: "The goal of a weekend launch isn't a finished product — it's evidence. Can you get one real person to sign up or pay? A no-code stack lets you answer that without writing a line of code." },
      { type: "h2", text: "The lean stack" },
      { type: "list", items: [
        "A site builder for a clean landing page.",
        "A form or lightweight database to collect signups.",
        "A payment link to test real willingness to pay.",
        "An email tool to follow up and learn.",
      ]},
      { type: "p", text: "Wire them together, ship the smallest version that can take money or emails, and spend the rest of your energy talking to the people who respond." },
    ],
  },
  {
    slug: "design-systems-for-solo-founders",
    title: "Design Systems for Solo Founders (Without the Overhead)",
    excerpt:
      "A one-person design system is really just a handful of decisions made once. Here's the minimum that pays off.",
    niche: "Design",
    nicheKey: "design",
    monogram: "Ds",
    gradient: "linear-gradient(135deg,#e0468f,#ff6fae)",
    author: "The LiteInsight Team",
    authorRole: "Guides",
    date: "2026-05-29",
    readMins: 4,
    tldr:
      "A solo-founder design system is four decisions made once: a type scale, a small color palette, consistent spacing, and a couple of reusable components. Consistency, not complexity, is what makes work look professional.",
    tags: ["design", "branding", "founders", "UI"],
    body: [
      { type: "p", text: "You don't need a 200-page design system. As a solo founder, you need a few decisions locked so every new page looks like it belongs to the same product." },
      { type: "h2", text: "The four decisions" },
      { type: "list", items: [
        "A type scale — three or four sizes you reuse everywhere.",
        "A small palette — one accent, a neutral ramp, and semantic colors.",
        "A spacing system — pick a base unit and multiply it.",
        "A couple of components — buttons and cards you copy, not rebuild.",
      ]},
      { type: "quote", text: "Professional-looking design is mostly consistency. Decide once, reuse forever." },
    ],
  },
  {
    slug: "lifetime-deals-when-worth-it",
    title: "Lifetime Deals: When They're Worth It (and When They're Not)",
    excerpt:
      "A lifetime deal can be a bargain or a trap. Here's a quick framework to tell the difference before you buy.",
    niche: "AI Tools",
    nicheKey: "ai",
    monogram: "Ld",
    gradient: "linear-gradient(135deg,#0ea5b7,#3dd2e0)",
    author: "The LiteInsight Team",
    authorRole: "Reviews",
    date: "2026-05-22",
    readMins: 4,
    tldr:
      "A lifetime deal is worth it when the tool solves a problem you have today, the company is stable, and the cost is under a year of the subscription. It's a trap when you're buying for a 'someday' use case.",
    tags: ["deals", "SaaS", "buying guide"],
    body: [
      { type: "p", text: "Lifetime deals are tempting: pay once, use forever. Sometimes that's a genuine bargain. Sometimes it's a graveyard of tools you never opened." },
      { type: "h2", text: "A three-question check" },
      { type: "list", items: [
        "Do I have this problem right now — not 'someday'?",
        "Is the company stable enough to be around to honor 'lifetime'?",
        "Is the price less than a year of the normal subscription?",
      ]},
      { type: "p", text: "Three yeses and it's usually a smart buy. Any no, and you're likely buying a subscription you'll forget to use — just up front." },
    ],
    faqs: [
      { q: "Are lifetime software deals worth it?", a: "A lifetime deal is worth it when the tool solves a current problem, the company is stable, and the one-time price is less than about a year of the normal subscription. Avoid buying for hypothetical future needs." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function relatedPosts(post: Post, limit = 3): Post[] {
  return POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.nicheKey === post.nicheKey ? -1 : 0) - (b.nicheKey === post.nicheKey ? -1 : 0))
    .slice(0, limit);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[m - 1]} ${d}, ${y}`;
}
