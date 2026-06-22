import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import { bioParagraphs, facts } from "@/lib/home";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "I never planned to become a wedding photographer. The story of how curiosity became a calling.",
};

export default function AboutPage() {
  return (
    <div className="page">
      <PageHeader script="hello there" title="My Story" />

      {/* BIO */}
      <section className="bio">
        <div className="bio__portrait-wrap">
          <div className="bio__portrait">
            <Photo src="/images/photographer.jpeg" alt="The photographer" priority />
          </div>
        </div>
        <div>
          <div className="bio__label">The photographer</div>
          <h2 className="bio__title">
            I never planned to become a wedding photographer.
          </h2>
          {bioParagraphs.map((p, i) => (
            <p className="bio__p" key={i}>
              {p}
            </p>
          ))}
          <div className="bio__sign">Oculus</div>
        </div>
      </section>

      {/* A FEW FACTS */}
      <section className="section section--sand">
        <div className="block-head" style={{ marginBottom: 60 }}>
          <div className="block-head__script">a little more</div>
          <h2 className="block-head__title">A Few Facts About Myself</h2>
        </div>
        <div className="facts__grid">
          {facts.map((f) => (
            <div className="fact" key={f.n}>
              <div className="fact__photo">
                <Photo src={f.img} alt={f.title} />
              </div>
              <div className="fact__num">{f.n}</div>
              <h3 className="fact__title">{f.title}</h3>
              <p className="fact__text">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* YOUR STORY, MY LENS */}
      <section className="lens">
        <div>
          <div className="lens__script">together</div>
          <h2 className="lens__title">Your Story, My Lens</h2>
          <p className="lens__text">
            From the first nervous hello to the last dance, I&apos;m there as a
            quiet witness — never directing the day, only catching it as it truly
            happens. Let&apos;s make something you&apos;ll hand down for
            generations.
          </p>
          <Link href="/contact" className="btn btn-outline">
            Work with me
          </Link>
        </div>
        <div className="lens__photo">
          <Photo src="/images/photographer-at-work.png" alt="The photographer at work" />
        </div>
      </section>
    </div>
  );
}
