import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import { blog } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Latest Stories",
  description: "Notes, tips and real weddings from the journal.",
};

export default function BlogPage() {
  return (
    <div className="page">
      <PageHeader script="from the journal" title="Latest Stories" />

      <section className="blog-list">
        {blog.map((b) => (
          <Link key={b.slug} href={`/blog/${b.slug}`} className="blog-card">
            <div
              className="blog-card__photo"
              style={{ aspectRatio: b.coverRatio }}
            >
              <Photo src={b.listImg} alt={b.title} />
            </div>
            <div>
              <div className="blog-card__meta">
                {b.cat} · {b.date}
              </div>
              <h2 className="blog-card__title">{b.title}</h2>
              <p className="blog-card__excerpt">{b.excerpt}</p>
              <span className="blog-card__more">Read the story</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
