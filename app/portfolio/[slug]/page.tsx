import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DividerMotif from "@/components/DividerMotif";
import Photo from "@/components/Photo";
import { couples, getCouple } from "@/lib/couples";

export function generateStaticParams() {
  return couples.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const couple = getCouple(slug);
  if (!couple) return { title: "Not found" };
  return {
    title: couple.couple,
    description: couple.intro,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const couple = getCouple(slug);
  if (!couple) notFound();

  const [hero, ...rest] = couple.photos;

  return (
    <div className="page">
      <section className="page-header">
        <DividerMotif />
        <div className="page-header__body">
          <div className="page-header__script">{couple.kicker}</div>
          <h1 className="page-header__title">{couple.couple}</h1>
          <div className="page-header__place">{couple.detailPlace}</div>
        </div>
      </section>

      <section className="detail">
        <div className="detail__hero-wrap">
          <div className="detail__hero" style={{ aspectRatio: couple.heroRatio }}>
            <Photo src={hero} alt={couple.couple} priority />
          </div>
        </div>

        <div className="detail__intro">
          <p>{couple.intro}</p>
        </div>

        {rest.length > 0 ? (
          <div className="detail__grid">
            {rest.map((src, i) => (
              <div
                className="detail__cell"
                key={src}
                style={{ aspectRatio: couple.pairRatio }}
              >
                <Photo src={src} alt={`${couple.couple} — photograph ${i + 2}`} />
              </div>
            ))}
          </div>
        ) : null}

        <div className="detail__quote">
          <div className="detail__quote-script">in their words</div>
          <p className="detail__quote-text">{couple.quote}</p>
        </div>

        <div className="detail__back">
          <Link href="/portfolio" className="btn btn-outline">
            Back to portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
