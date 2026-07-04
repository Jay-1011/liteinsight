import { SITE } from "@/lib/data";
import { Arrow } from "./Icons";

export default function FinalCta() {
  return (
    <section className="wrap sec" style={{ paddingTop: 20 }}>
      <div className="final reveal">
        <span className="eyebrow center">{SITE.motto}</span>
        <h2 className="h2" style={{ marginTop: 14 }}>
          Start choosing smarter today.
        </h2>
        <p>
          Join thousands who trust LiteInsight to find the right digital products — always
          lite, always clever.
        </p>
        <div className="actions">
          <a href="#picks" className="btn btn-spark">
            Explore top picks <Arrow />
          </a>
          <a href="#newsletter" className="btn btn-ghost">
            Join the newsletter
          </a>
        </div>
      </div>
    </section>
  );
}
