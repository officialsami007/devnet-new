"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Static navigation used on interior (non-home) pages. The homepage keeps its
 * own scroll-reactive nav; this one uses the same visual language but is a
 * solid dark bar with real page links.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = (
    <>
      <Link href="/products">Products</Link>
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
      <Link href="/#voices">Clients</Link>
      <Link href="/contact">Contact</Link>
    </>
  );

  return (
    <>
      <nav className="sitenav" aria-label="Main navigation">
        <div className="nav-in">
          <Link href="/" className="logo" aria-label="Devnet Limited — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="logo-img"
              src="/devnet-logo.png"
              alt="Devnet Limited"
              width={120}
              height={38}
            />
          </Link>
          <div className="sitenav-links">{links}</div>
          <Link className="btn btn-hot nav-cta" href="/contact">
            Get in touch <span className="ar">→</span>
          </Link>
          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div
        className={`m-menu ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        {links}
        <Link className="btn btn-hot" href="/contact">
          Get in touch <span className="ar">→</span>
        </Link>
      </div>
    </>
  );
}
