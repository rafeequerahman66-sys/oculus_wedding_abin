"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import Logo from "./Logo";

const leftLinks = nav.filter((n) =>
  ["/", "/about", "/services"].includes(n.href),
);
const rightLinks = nav.filter((n) => ["/portfolio", "/blog"].includes(n.href));

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="nav">
      <div className="nav__group">
        {leftLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="nav__link"
            data-active={isActive(pathname, l.href)}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Logo />

      <div className="nav__group nav__group--right">
        {rightLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="nav__link"
            data-active={isActive(pathname, l.href)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="nav__inquire">
          Inquire
        </Link>
      </div>

      <button
        type="button"
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav__drawer" data-open={open}>
        {[...nav, { label: "Contact", href: "/contact" }].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            data-active={isActive(pathname, l.href)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
