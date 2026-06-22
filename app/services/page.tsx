import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { packages, steps, faqs } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Wedding Packages",
  description:
    "Bride & Groom both-side coverage. Three considered packages — Essential, Signature and Premium.",
};

export default function ServicesPage() {
  return (
    <div className="page">
      <PageHeader script="the experience" title="Wedding Packages" />

      {/* PACKAGES */}
      <section className="services-intro">
        <div className="services-intro__sub">
          <p>
            Bride &amp; Groom — both-side coverage. Booking now open for
            April–October.
          </p>
        </div>
        <div className="packages">
          {packages.map((p) => (
            <div
              className={`pkg${p.featured ? " pkg--featured" : ""}`}
              key={p.name}
            >
              {p.featured ? <div className="pkg__topbar" /> : null}
              <div className="pkg__kicker">{p.kicker}</div>
              <h3 className="pkg__name">{p.name}</h3>
              <p className="pkg__events">{p.events}</p>
              <div className="pkg__rule" />
              <div className="pkg__sections">
                {p.sections.map((sec) => (
                  <div key={sec.label}>
                    <div className="pkg__sec-label">{sec.label}</div>
                    <div className="pkg__items">
                      {sec.items.map((item) => (
                        <div className="pkg__item" key={item}>
                          <span className="pkg__bullet" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pkg__rule pkg__rule--bottom" />
              <Link href="/contact" className="pkg__btn">
                Enquire
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section section--sand">
        <div className="block-head" style={{ marginBottom: 60 }}>
          <div className="block-head__script">how it works</div>
          <h2 className="block-head__title">What to Expect</h2>
        </div>
        <div className="steps__grid">
          {steps.map((st) => (
            <div key={st.n}>
              <div className="step__num">{st.n}</div>
              <h3 className="step__title">{st.title}</h3>
              <p className="step__text">{st.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANY QUERIES */}
      <section className="faqs">
        <div className="block-head" style={{ marginBottom: 48 }}>
          <div className="block-head__kicker">Good to know</div>
          <h2 className="block-head__title">Any Queries?</h2>
        </div>
        <div className="faqs__list">
          {faqs.map((q) => (
            <div className="faq" key={q.q}>
              <h3 className="faq__q">{q.q}</h3>
              <p className="faq__a">{q.a}</p>
            </div>
          ))}
          <div className="faqs__end" />
        </div>
      </section>
    </div>
  );
}
