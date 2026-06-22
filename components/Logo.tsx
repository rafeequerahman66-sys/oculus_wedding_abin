import Link from "next/link";

// "OCULUS" (spaced Cormorant) + "weddings" (Pinyon Script). Pure type, no asset.
export default function Logo() {
  return (
    <Link href="/" className="nav__logo" aria-label="Oculus Weddings — home">
      <div className="logo__mark">Oculus</div>
      <div className="logo__script">weddings</div>
    </Link>
  );
}
