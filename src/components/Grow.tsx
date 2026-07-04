import { SITE } from "@/lib/data";
import { Check, ExternalArrow } from "./Icons";

export default function Grow() {
  return (
    <section className="wrap sec" id="grow" style={{ paddingTop: 44 }}>
      <div className="grow-band reveal">
        <div className="grow-in">
          <div>
            <span className="eyebrow grow">A LiteInsight brand</span>
            <h2 className="h2">
              Need a website? Meet{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "5px",
                }}
              >
                Grow
              </span>{" "}
              by LiteInsight.
            </h2>
            <p>
              Beyond reviews, we build. Grow gets your business online in 24 hours — a
              professional website and digital presence, done for you.
            </p>
            <div className="grow-feats">
              <div>
                <Check /> Live in 24 hours
              </div>
              <div>
                <Check /> Done-for-you
              </div>
              <div>
                <Check /> SEO-ready
              </div>
            </div>
            <div className="grow-actions">
              <a href={SITE.growUrl} target="_blank" rel="noopener noreferrer" className="btn btn-white">
                Visit Grow <ExternalArrow />
              </a>
              <a
                href={SITE.growUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
              >
                See services
              </a>
            </div>
          </div>

          <div className="grow-visual">
            <span className="badge">Your business online</span>
            <div className="big">24 hrs</div>
            <div className="sm">From brief to a live, professional site.</div>
            <div className="line" />
            <ul>
              <li>
                <Check /> Custom design &amp; copywriting
              </li>
              <li>
                <Check /> Mobile-ready &amp; fast
              </li>
              <li>
                <Check /> Hosting &amp; support included
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
