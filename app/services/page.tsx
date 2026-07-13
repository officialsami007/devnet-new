import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { servicePages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Devnet digital archiving, application development, data, BPO, banking and AI services.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main className="catalog">
        <section className="catalog-hero service-catalog-hero">
          <div className="wrap catalog-hero-grid">
            <div data-reveal>
              <span className="eyebrow">Devnet service portfolio</span>
              <h1>Delivery capability from first document to live digital service.</h1>
            </div>
            <div data-reveal>
              <p className="lead">
                Combine operational expertise, engineering and intelligent
                technology to modernize how information moves through your
                organization.
              </p>
              <div className="catalog-hero-stat">
                <strong>{servicePages.length}</strong>
                <span>service capabilities</span>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-section">
          <div className="wrap">
            <div className="catalog-grid">
              {servicePages.map((item) => (
                <Link
                  className="b-clean catalog-card"
                  href={`/${item.slug}`}
                  key={item.slug}
                  data-reveal
                >
                  <small className="b-idx">{item.category}</small>
                  <span className="catalog-eyebrow">{item.eyebrow}</span>
                  <h3>{item.navTitle}</h3>
                  <p>{item.description}</p>
                  <div className="catalog-caps">
                    {item.capabilities.slice(0, 3).map((cap) => (
                      <span key={cap}>{cap}</span>
                    ))}
                  </div>
                  <span className="b-link">
                    Explore <span className="ar">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
