import { HOW_STEPS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="how sec" id="how">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">How it works</span>
          <h2 className="h2">From &quot;which one?&quot; to &quot;done&quot; in five steps.</h2>
          <p>A simple, repeatable path to the right digital product — every time.</p>
        </div>
        <div className="steps">
          {HOW_STEPS.map((s, i) => (
            <div className="step reveal" key={s.t} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="no">{i + 1}</div>
              <h4>{s.t}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
