import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import { couples } from "@/lib/couples";

export const metadata: Metadata = {
  title: "Highlights & Works",
  description:
    "Selected wedding stories from across Kerala, Bangalore and beyond.",
};

export default function PortfolioPage() {
  return (
    <div className="page">
      <PageHeader script="selected works" title="Highlights & Works" />

      <section className="portfolio">
        <div className="portfolio__grid">
          {couples.map((c) => (
            <Link
              key={c.slug}
              href={`/portfolio/${c.slug}`}
              className="couple-card"
            >
              <div
                className="couple-card__photo"
                style={{ aspectRatio: c.gridRatio }}
              >
                <Photo src={c.gridCover} alt={c.couple} />
              </div>
              <div className="couple-card__name">{c.couple}</div>
              <div className="couple-card__place">{c.place}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
