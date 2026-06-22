import Link from "next/link";
import DividerMotif from "@/components/DividerMotif";

export default function NotFound() {
  return (
    <div className="page notfound">
      <DividerMotif narrow />
      <div className="notfound__num">404</div>
      <div className="notfound__script">oh dear</div>
      <h1 className="notfound__title">This page has wandered off</h1>
      <p className="notfound__text">
        The link may be broken, or the page may have moved. Let&apos;s get you
        back to somewhere lovely.
      </p>
      <Link href="/" className="btn btn-solid">
        Back home
      </Link>
    </div>
  );
}
