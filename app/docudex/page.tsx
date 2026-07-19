import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/Icon";
import {
  docudexCoreSlugs,
  docudexExtendedSlugs,
  getContentPage,
  type SitePage,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "DocuDEX — The Enterprise Document Platform | Devnet Limited",
  description:
    "DocuDEX is Devnet's flagship platform for the entire document lifecycle — capture, manage, automate, store and retire. Trusted by 10+ banks and the largest government archives in Bangladesh.",
};

const corePages = docudexCoreSlugs
  .map(getContentPage)
  .filter(Boolean) as SitePage[];
const extendedPages = docudexExtendedSlugs
  .map(getContentPage)
  .filter(Boolean) as SitePage[];

const lifecycle = [
  {
    icon: "scan",
    title: "Capture",
    module: "Captura",
    text: "Scan and ingest at industrial scale across any scanner brand — OCR and ICR turn paper, maps and even handwriting into structured data.",
  },
  {
    icon: "layers",
    title: "Manage",
    module: "DocuDEX EDMS",
    text: "Version, permission, categorize and audit every file in one secure enterprise archive with full-text retrieval in seconds.",
  },
  {
    icon: "workflow",
    title: "Automate",
    module: "DocuDEX Workflow",
    text: "Route approvals through maker/checker baskets, LC and card processes, and RPA bots — official activities move in hours, not weeks.",
  },
  {
    icon: "archive",
    title: "Store",
    module: "Record Management",
    text: "Keep electronic and hard-copy records secure onsite or offsite with chain of custody, retention schedules and timely retrieval.",
  },
  {
    icon: "trash",
    title: "Retire",
    module: "Secure Disposal",
    text: "Close the loop with controlled, auditable destruction at the end of each record's lifecycle — compliance from first scan to final shred.",
  },
];

export default function DocudexPage() {
  return (
    <>
      <SiteNav />
      <main className="sol">
        {/* ---------- Hero ---------- */}
        <section className="sol-hero">
          <div className="wrap">
            <div className="sol-crumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <b>DocuDEX Platform</b>
            </div>
            <div className="sol-hero-grid">
              <div className="sol-hero-copy" data-reveal>
                <span className="eyebrow">The flagship platform</span>
                <h1>DocuDEX</h1>
                <p className="sol-subtitle">
                  One platform for the entire document lifecycle.
                </p>
                <p className="sol-desc">
                  From the first scan to secure destruction — DocuDEX captures,
                  manages, automates, stores and retires the documents that run
                  banks, government and enterprise across Bangladesh. First to
                  introduce DMS &amp; ICR in the country, and still leading 25+
                  years on.
                </p>
                <div className="sol-actions">
                  <Link className="btn btn-hot" href="/contact">
                    Book a DocuDEX demo <span className="ar">→</span>
                  </Link>
                  <a className="btn btn-outline dark" href="tel:+8801713044055">
                    Call +88 01713-044055
                  </a>
                </div>
                <div className="sol-proof">
                  <div>
                    <strong>70B</strong>
                    <span>images processed &amp; managed</span>
                  </div>
                  <div>
                    <strong>10+</strong>
                    <span>banks on DMS &amp; workflow</span>
                  </div>
                  <div>
                    <strong>30M</strong>
                    <span>pages digitised every year</span>
                  </div>
                </div>
              </div>
              <div className="sol-visual" data-reveal aria-hidden="true">
                <div className="sol-visual-bar">
                  <span className="mdot r"></span>
                  <span className="mdot y"></span>
                  <span className="mdot g"></span>
                  <span className="sol-visual-title">
                    DocuDEX Platform — Lifecycle
                  </span>
                  <span className="sol-visual-badge">LIVE</span>
                </div>
                <div className="sol-visual-body">
                  <div className="sol-visual-flow">
                    {["Capture", "Manage", "Automate", "Store"].map(
                      (label, i, arr) => (
                        <div className="sol-flow-step" key={label}>
                          <span className="sol-flow-num">{i + 1}</span>
                          <span className="sol-flow-label">{label}</span>
                          {i < arr.length - 1 && (
                            <span className="sol-flow-arrow">→</span>
                          )}
                        </div>
                      )
                    )}
                  </div>
                  <div className="sol-visual-stat">
                    <strong>213K</strong>
                    <span>mouza maps archived on the platform</span>
                  </div>
                  <div className="sol-visual-caps">
                    <span>
                      <Icon name="check" /> Full-text ICR search
                    </span>
                    <span>
                      <Icon name="check" /> Maker/checker workflow
                    </span>
                    <span>
                      <Icon name="check" /> Audit trails everywhere
                    </span>
                    <span>
                      <Icon name="check" /> API integration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Trust ribbon ---------- */}
        <section className="sol-ribbon">
          <div className="wrap sol-ribbon-grid">
            <span>
              <Icon name="shield" /> CMMI SVC3 certified
            </span>
            <span>
              <Icon name="check" /> ISO 9001 &amp; ISO 27001
            </span>
            <span>
              <Icon name="bank" /> Banking-grade security
            </span>
            <span>
              <Icon name="clock" /> Since 1997, Dhaka
            </span>
          </div>
        </section>

        {/* ---------- Lifecycle (dark band) ---------- */}
        <section className="sol-feature-band">
          <div className="wrap sol-feature-shell">
            <div className="sol-feature-intro" data-reveal>
              <span className="eyebrow inv">The lifecycle</span>
              <h2>Five stages. One platform. Zero paper limbo.</h2>
              <p>
                Every DocuDEX module hands off to the next — so a document
                scanned today is searchable in seconds, routed for approval in
                hours, archived for decades and destroyed on schedule.
              </p>
              <Link href="/contact" className="btn btn-hot">
                Map your lifecycle with us <span className="ar">→</span>
              </Link>
            </div>
            <div className="sol-feature-grid">
              {lifecycle.map((stage) => (
                <article key={stage.title} data-reveal>
                  <span className="dx-feat-ico">
                    <Icon name={stage.icon} />
                  </span>
                  <h3>
                    {stage.title} — {stage.module}
                  </h3>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Core modules ---------- */}
        <section className="catalog-section">
          <div className="wrap">
            <div className="catalog-group">
              <h2 className="catalog-group-title" data-reveal>
                Core platform modules
              </h2>
              <div className="catalog-grid">
                {corePages.map((item) => (
                  <Link
                    className="b-clean catalog-card"
                    href={`/${item.slug}`}
                    key={item.slug}
                    data-reveal
                  >
                    <small className="b-idx">DocuDEX Core</small>
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

            <div className="catalog-group">
              <h2 className="catalog-group-title" data-reveal>
                Works hand-in-hand with the wider Devnet family
              </h2>
              <div className="catalog-grid">
                {extendedPages.map((item) => (
                  <Link
                    className="b-clean catalog-card"
                    href={`/${item.slug}`}
                    key={item.slug}
                    data-reveal
                  >
                    <small className="b-idx">Devnet Product</small>
                    <span className="catalog-eyebrow">{item.eyebrow}</span>
                    <h3>{item.navTitle}</h3>
                    <p>{item.description}</p>
                    <span className="b-link">
                      Explore <span className="ar">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Proven outcomes ---------- */}
        <section className="sol-caps">
          <div className="wrap sol-caps-shell">
            <div className="sol-caps-copy" data-reveal>
              <span className="eyebrow">Proven at national scale</span>
              <h2>
                The platform behind the country&apos;s biggest document
                programmes.
              </h2>
              <p>
                DocuDEX runs the mouza-map archive of the Department of Land
                Records &amp; Surveys, the digitised collections of the
                Bangladesh National Library, and the loan, KYC and trade-finance
                paperwork of more than ten banks.
              </p>
            </div>
            <div className="sol-caps-list" data-reveal>
              {[
                "213K mouza maps digitised",
                "National Library heritage archive",
                "LC process automation",
                "Credit-card application workflow",
                "Loan file management",
                "e-KYC onboarding",
                "RAJUK housing records",
                "GR health data capture",
                "10+ banks in production",
                "70 billion images and counting",
              ].map((item) => (
                <span key={item}>
                  <Icon name="check" /> {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="sol-finalcta">
          <div className="wrap sol-finalcta-in" data-reveal>
            <div>
              <span className="eyebrow inv">Start with the flagship</span>
              <h2>See DocuDEX on your own documents.</h2>
            </div>
            <div>
              <p>
                Bring a filing cabinet&apos;s worth of paper — loan files, land
                records, invoices, anything. We&apos;ll capture it, index it and
                put it a search away in a live demo.
              </p>
              <Link href="/contact" className="btn btn-paper">
                Book a demo <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
