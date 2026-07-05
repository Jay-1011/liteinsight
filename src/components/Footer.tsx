import { SITE, BRANDS } from "@/lib/data";
import { WhatsApp, XSocial, Instagram, LinkedIn, WhatsAppSimple } from "./Icons";
import Logo from "./Logo";

const YEAR = new Date().getFullYear();
const wa = `https://wa.me/${SITE.whatsapp}`;

export default function Footer() {
  return (
    <footer className="ft" id="footer">
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <Logo href="#top" />
            <p>
              Your trusted destination for digital products, services and recommendations. We
              help you discover, decide and delight.
            </p>
            <a className="wa" href={wa} target="_blank" rel="noopener noreferrer">
              <span className="ic">
                <WhatsApp width={18} height={18} />
              </span>
              {SITE.whatsappDisplay}
            </a>
          </div>

          <div className="ft-col">
            <h5>Explore</h5>
            <a href="/#picks">Editor&apos;s picks</a>
            <a href="/blog">Insights</a>
            <a href="/#categories">AI tools</a>
            <a href="/#deal">Deals &amp; discounts</a>
            <a href="/#how">How we test</a>
          </div>

          <div className="ft-col">
            <h5>Company</h5>
            <a href="/#about">About</a>
            <a href="/blog">Blog</a>
            <a href="/#newsletter">Newsletter</a>
            <a href="/#footer">Partner with us</a>
            <a href="#">Privacy policy</a>
          </div>

          <div className="ft-col">
            <h5>Our brands</h5>
            {BRANDS.map((b) => (
              <a
                key={b.name}
                href={b.href}
                className="ft-brand-link"
                {...(b.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="ft-brand-name">
                  {b.name}
                  {b.dot && <span className="bdot" style={{ background: b.dot }} />}
                </span>
                <span className="ft-brand-note">{b.note}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="ft-bot">
          <div>
            © {YEAR} LiteInsight. {SITE.tagline}.
          </div>
          <div className="social">
            <a href="#" aria-label="X">
              <XSocial />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedIn />
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppSimple />
            </a>
          </div>
        </div>
        <div className="ft-disc">
          // Independent &amp; reader-supported. LiteInsight may earn a commission on some links,
          at no extra cost to you.
        </div>
      </div>
    </footer>
  );
}
