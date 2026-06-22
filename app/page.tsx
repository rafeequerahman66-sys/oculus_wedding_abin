import Link from "next/link";
import DividerMotif from "@/components/DividerMotif";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { offerings } from "@/lib/home";

export default function HomePage() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero__photo">
          <Photo src="/images/rohin-jana-1.jpeg" alt="A couple at golden hour" priority />
        </div>
        <div className="hero__overlay" />
        <div className="hero__divider">
          <DividerMotif light narrow />
        </div>
        <div className="hero__content">
          <div className="hero__kicker">Fine-art wedding photography</div>
          <h1 className="hero__title">
            Every love story
            <br />
            is worth keeping
          </h1>
          <div className="hero__script">softly, forever</div>
          <Link href="/portfolio" className="btn btn-outline--light">
            View the portfolio
          </Link>
        </div>
      </section>

      {/* INTRO QUOTE */}
      <section className="intro-quote">
        <div className="intro-quote__script">Welcome, lovely</div>
        <p className="intro-quote__text">
          I&apos;m a photographer for couples who feel more than they say — here
          to hold onto the glances, the laughter and the quiet in-betweens, long
          after the day has passed.
        </p>
      </section>

      {/* OFFERINGS */}
      <section className="section section--sand">
        <div className="block-head" style={{ marginBottom: 64 }}>
          <div className="block-head__kicker">What I Offer</div>
          <h2 className="block-head__title">Ways to work together</h2>
        </div>
        <div className="offerings__grid">
          {offerings.map((o) => (
            <div className="offering" key={o.title}>
              <div className="offering__photo">
                <Photo src={o.img} alt={o.title} />
              </div>
              <h3 className="offering__title">{o.title}</h3>
              <p className="offering__text">{o.text}</p>
              <Link href="/services" className="link-underline">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE */}
      <section className="feature">
        <div className="feature__photo">
          <Photo src="/images/mahesh-athira-1.jpeg" alt="Behind the lens" />
        </div>
        <div>
          <div className="feature__script">behind the lens</div>
          <h2 className="feature__title">
            An unhurried,
            <br />
            honest approach
          </h2>
          <p className="feature__text">
            No stiff posing, no rushing from one shot to the next. I give you room
            to simply be together, and quietly photograph the moments that unfold
            — the ones you&apos;ll actually want to remember.
          </p>
          <p className="feature__text">
            Based in Bengaluru, available worldwide for couples chasing light and
            meaning.
          </p>
          <Link href="/about" className="btn btn-outline">
            My story
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <div className="testimonial__script">kind words</div>
        <p className="testimonial__quote">
          Oculus didn&apos;t just take photographs — he gave us back the feeling
          of the entire day. Every time we open the album, we&apos;re right there
          again.
        </p>
        <div className="testimonial__attr">Vishnu &amp; Shilpa · Palakkad</div>
      </section>

      {/* STATS */}
      <Stats />

      {/* CTA */}
      <section className="cta">
        <div className="cta__inner">
          <div className="cta__script">let&apos;s begin</div>
          <h2 className="cta__title">Tell me about your day</h2>
          <p className="cta__text">
            I take a limited number of weddings each year — let&apos;s see if your
            date is free.
          </p>
          <Link href="/contact" className="btn btn-solid">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
