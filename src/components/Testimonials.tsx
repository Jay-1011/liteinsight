import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="sec" id="reviews" style={{ paddingTop: 44 }}>
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Loved by smart buyers</span>
          <h2 className="h2">40,000 readers decide with LiteInsight.</h2>
        </div>
        <div className="quotes">
          {TESTIMONIALS.map((t, i) => (
            <figure className="quote reveal" key={t.name} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <p>&quot;{t.quote}&quot;</p>
              <figcaption className="who">
                <span className="av" style={{ background: t.color }}>
                  {t.initial}
                </span>
                <span>
                  <span className="nm">{t.name}</span>
                  <br />
                  <span className="rl">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
