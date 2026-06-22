import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DividerMotif from "@/components/DividerMotif";
import Photo from "@/components/Photo";
import { blog, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return blog.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="page">
      <section className="page-header">
        <DividerMotif />
        <div className="article__header-body">
          <div className="article__meta">
            {post.cat} · {post.date}
          </div>
          <h1 className="article__title">{post.title}</h1>
          <div className="article__by">Words &amp; photos by Oculus Weddings</div>
        </div>
      </section>

      <article className="article">
        <div className="article__cover" style={{ aspectRatio: post.coverRatio }}>
          <Photo src={post.coverImg} alt={post.title} priority />
        </div>
        <p className="article__lead">{post.lead}</p>
        <p className="article__body">{post.body1}</p>
        <div className="article__mid" style={{ aspectRatio: post.midRatio }}>
          <Photo src={post.midImg} alt={`${post.title} — photograph`} />
        </div>
        <p className="article__quote">{post.quote}</p>
        <p className="article__body article__body--last">{post.body2}</p>
        <div className="article__back">
          <Link href="/blog" className="btn btn-outline">
            More stories
          </Link>
        </div>
      </article>
    </div>
  );
}
