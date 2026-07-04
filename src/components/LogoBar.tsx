const BRANDS = ["AI Tools", "SaaS Deals", "NoCode Hub", "Design Weekly", "Founder Stack"];

export default function LogoBar() {
  return (
    <div className="logobar">
      <div className="logobar-in reveal">
        <span className="lab">As recommended across</span>
        <div className="brands">
          {BRANDS.map((b) => (
            <span className="lgo" key={b}>
              <span className="d" />
              {b.replace(" ", " ")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
