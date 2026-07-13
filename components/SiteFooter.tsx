import Link from "next/link";
import { contactDetails, productPages, servicePages } from "@/data/site-content";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid f-grid-wide">
          <div className="f-brand">
            <Link href="/" className="logo" aria-label="Devnet Limited">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="logo-img"
                src="/devnet-logo.png"
                alt="Devnet Limited"
                width={120}
                height={38}
              />
            </Link>
            <p>
              Comprehensive, powerful and scalable e-governance solutions —
              built in Dhaka since 1997. Empowering Smart Bangladesh, one
              document at a time.
            </p>
            <p className="f-assoc">
              Member — <b>BASIS</b> · <b>DCCI</b> · <b>BGCCI</b>
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul className="f-list">
              {productPages.slice(0, 7).map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`}>{page.navTitle}</Link>
                </li>
              ))}
              <li>
                <Link href="/products">All products →</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="f-list">
              {servicePages.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`}>{page.navTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="f-list">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                >
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactDetails.cell.replace(/\s/g, "")}`}>
                  {contactDetails.cell}
                </a>
              </li>
            </ul>
            <div className="f-newsletter">
              <NewsletterForm />
            </div>
          </div>
        </div>
        <div className="f-bottom">
          <span>© 1997–{new Date().getFullYear()} Devnet Limited. All rights reserved.</span>
          <span className="tag">Keeping you cool, in every step.</span>
        </div>
      </div>
    </footer>
  );
}
