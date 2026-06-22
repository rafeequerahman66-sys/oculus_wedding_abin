import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__mark">Oculus</div>
        <div className="footer__script">weddings</div>
        <div className="footer__nav">
          {footerNav.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <span>{site.copyright}</span>
        <div className="footer__social">
          <a
            className="ig-badge"
            href={site.instagramUrl}
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
            >
              <rect x="1.5" y="1.5" width="11" height="11" rx="3.2" />
              <circle cx="7" cy="7" r="2.7" />
              <circle cx="10.3" cy="3.7" r="0.7" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
