import { Reviews, Users, Star, Bolt } from "./Icons";

const SERVICES = [
  {
    tone: "ic-blue",
    Icon: Reviews,
    title: "In-depth reviews",
    body: "Impartial, hands-on reviews of the latest digital products — the good, the bad and the overhyped.",
    tag: "1,200+ products tested",
  },
  {
    tone: "ic-grow",
    Icon: Users,
    title: "Real user insights",
    body: "Community-driven ratings and verified reviews, so you see what real buyers experience — not just marketing.",
    tag: "40k+ monthly readers",
  },
  {
    tone: "ic-spark",
    Icon: Star,
    title: "Lifetime deals",
    body: "Exclusive lifetime-access offers and discounts you won't find on the retail page — pay once, own forever.",
    tag: "500+ verified deals",
  },
  {
    tone: "ic-viol",
    Icon: Bolt,
    title: "Instant delivery",
    body: "Digital goods, delivered the moment you buy. No waiting, no shipping — just immediate access.",
    tag: "Secure checkout",
  },
];

export default function Services() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Why LiteInsight</span>
          <h2 className="h2">Smart, simple and effective — never complicated.</h2>
          <p>
            We build digital solutions and recommendations that cut through the noise. Every
            pick is tested, scored and explained in plain language, so you decide with
            confidence.
          </p>
        </div>
        <div className="cards-4">
          {SERVICES.map((s, i) => (
            <article
              className="svc reveal"
              key={s.title}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className={`ic ${s.tone}`}>
                <s.Icon />
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="tag">{s.tag}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
