import { FAQS } from "@/lib/data";

export default function Faq() {
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Good to know</span>
          <h2 className="h2">Questions, answered.</h2>
        </div>
        <div className="faq reveal">
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <span className="pm" />
              </summary>
              <div className="ans">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
