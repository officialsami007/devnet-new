import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import {
  docudexCoreSlugs,
  docudexExtendedSlugs,
  getContentPage,
  productPages,
  type SitePage,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the DocuDEX platform — document management, workflow, capture — plus business solutions and scanning hardware from Devnet.",
};

const bySlugs = (slugs: string[]) =>
  slugs.map(getContentPage).filter(Boolean) as SitePage[];

const docudexSlugSet = new Set([...docudexCoreSlugs, ...docudexExtendedSlugs]);

const groups = [
  { label: "The DocuDEX platform", items: bySlugs(docudexCoreSlugs) },
  {
    label: "Business solutions",
    items: bySlugs(docudexExtendedSlugs),
  },
  {
    label: "Scanning hardware",
    items: productPages.filter((p) => !docudexSlugSet.has(p.slug)),
  },
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
                Sixteen products, one standard — led by the DocuDEX platform.
              </h1>
            </div>
            <div data-reveal>
              <p className="lead">
                From our flagship DocuDEX document platform to business
                solutions for audit, HR, identity and land — plus the scanning
                hardware that feeds them — every Devnet product is built for
                document-heavy, regulated operations.
              </p>
              <div className="catalog-hero-stat">
                <strong>{productPages.length}</strong>
                <span>product families, one platform</span>
              </div>
              <Link className="btn btn-hot" href="/docudex">
                Explore the DocuDEX platform <span className="ar">→</span>
              </Link>
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
                      <small className="b-idx">
                        {docudexCoreSlugs.includes(item.slug)
                          ? "DocuDEX"
                          : item.category}
                      </small>
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
