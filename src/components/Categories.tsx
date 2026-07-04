import { CATEGORIES } from "@/lib/data";
import { CatAi, CatSaas, CatDesign, CatMktg, CatNocode, CatSecurity } from "./Icons";

const ICONS = {
  ai: CatAi,
  saas: CatSaas,
  design: CatDesign,
  mktg: CatMktg,
  nocode: CatNocode,
  security: CatSecurity,
} as const;

export default function Categories() {
  return (
    <section className="sec" id="categories">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Explore the catalog</span>
          <h2 className="h2">Everything digital, organised.</h2>
          <p>
            A growing library of categories — the foundation we scale new reviews, deals and
            insights on.
          </p>
        </div>
        <div className="cat-grid">
          {CATEGORIES.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <div className="cattile reveal" key={c.name} style={{ transitionDelay: `${(i % 4) * 0.04}s` }}>
                <div className={`ci ${c.tone}`}>
                  <Icon />
                </div>
                <div className="nm">{c.name}</div>
                <div className="ct">{c.count}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
