import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { productPages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Devnet document management, workflow, capture, business solutions and scanning hardware.",
};

const groups = [
  { label: "Content & workflow", items: productPages.slice(0, 4) },
  { label: "Business systems", items: productPages.slice(4, 12) },
  { label: "Scanning hardware", items: productPages.slice(12) },
];

export default function ProductsPage() {
  return (
    <>
      <SiteNav />
      <main className="catalog">
        <section className="catalog-hero">
          <div className="wrap catalog-hero-grid">
            <div data-reveal>
              <span className="eyebrow">Devnet product portfolio</span>
              <h1>
                One connected foundation for content, process and intelligent
                operations.
              </h1>
            </div>
            <div data-reveal>
              <p className="lead">
                Explore enterprise software and capture hardware designed for
                document-heavy, regulated and public-service environments.
              </p>
              <div className="catalog-hero-stat">
                <strong>{productPages.length}</strong>
                <span>product families</span>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-section">
          <div className="wrap">
            {groups.map((group) => (
              <div className="catalog-group" key={group.label}>
                <h2 className="catalog-group-title" data-reveal>
                  {group.label}
                </h2>
                <div className="catalog-grid">
                  {group.items.map((item) => (
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
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
