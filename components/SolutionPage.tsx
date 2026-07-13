import Link from "next/link";
import type { SitePage } from "@/data/site-content";
import { getContentPage } from "@/data/site-content";
import { Icon } from "./Icon";

export function SolutionPage({ page }: { page: SitePage }) {
  const related = page.related
    .map(getContentPage)
    .filter(Boolean) as SitePage[];

  return (
    <main className="sol">
      {/* ---------- Inner hero ---------- */}
      <section className="sol-hero">
        <div className="wrap">
          <div className="sol-crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={page.category === "Product" ? "/products" : "/services"}>
              {page.category}s
            </Link>
            <span>/</span>
            <b>{page.navTitle}</b>
          </div>
          <div className="sol-hero-grid">
            <div className="sol-hero-copy" data-reveal>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.title}</h1>
              <p className="sol-subtitle">{page.subtitle}</p>
              <p className="sol-desc">{page.description}</p>
              <div className="sol-actions">
                <Link className="btn btn-hot" href="/contact">
                  Schedule a consultation <span className="ar">→</span>
                </Link>
                <a className="btn btn-outline dark" href="tel:+8801713044055">
                  Call +88 01713-044055
                </a>
              </div>
              <div className="sol-proof">
                <div>
                  <strong>{page.heroStat.value}</strong>
                  <span>{page.heroStat.label}</span>
                </div>
                <div>
                  <strong>Since 1997</strong>
                  <span>enterprise technology partner</span>
                </div>
                <div>
                  <strong>Dhaka</strong>
                  <span>delivery and support team</span>
                </div>
              </div>
            </div>
            <div className="sol-visual" data-reveal aria-hidden="true">
              <div className="sol-visual-bar">
                <span className="mdot r"></span>
                <span className="mdot y"></span>
                <span className="mdot g"></span>
                <span className="sol-visual-title">{page.navTitle}</span>
                <span className="sol-visual-badge">LIVE</span>
              </div>
              <div className="sol-visual-body">
                <div className="sol-visual-flow">
                  {page.visualLabels.map((label, i) => (
                    <div className="sol-flow-step" key={label}>
                      <span className="sol-flow-num">{i + 1}</span>
                      <span className="sol-flow-label">{label}</span>
                      {i < page.visualLabels.length - 1 && (
                        <span className="sol-flow-arrow">→</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="sol-visual-stat">
                  <strong>{page.heroStat.value}</strong>
                  <span>{page.heroStat.label}</span>
                </div>
                <div className="sol-visual-caps">
                  {page.capabilities.slice(0, 4).map((cap) => (
                    <span key={cap}>
                      <Icon name="check" /> {cap}
                    </span>
                  ))}
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
            <Icon name="shield" /> Secure by design
          </span>
          <span>
            <Icon name="workflow" /> Configurable workflows
          </span>
          <span>
            <Icon name="link" /> Integration ready
          </span>
          <span>
            <Icon name="headset" /> Local support
          </span>
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section className="sol-benefits">
        <div className="wrap">
          <div className="sec-head sol-head-split" data-reveal>
            <div>
              <span className="eyebrow">Benefits</span>
              <h2>{page.benefitsTitle || `What ${page.navTitle} unlocks`}</h2>
            </div>
            <p className="lead">
              {page.benefitsIntro ||
                "Focused capabilities that reduce friction, improve control and make information easier to act on."}
            </p>
          </div>
          <div className="sol-benefit-grid">
            {page.benefits.map((item, index) => (
              <article
                className={`b-clean sol-benefit ${index === 0 ? "featured" : ""}`}
                key={item.title}
                data-reveal
              >
                <div className="b-top">
                  <span className="b-ico">
                    <Icon name={item.icon} />
                  </span>
                  <span className="b-idx">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Feature band (dark) ---------- */}
      <section className="sol-feature-band">
        <div className="wrap sol-feature-shell">
          <div className="sol-feature-intro" data-reveal>
            <span className="eyebrow inv">Key features</span>
            <h2>{page.featuresTitle || "Built for real operational work"}</h2>
            <p>
              {page.featuresIntro ||
                "A practical combination of workflow, security, data and user experience designed around enterprise requirements."}
            </p>
            <Link href="/contact" className="btn btn-hot">
              Discuss your requirements <span className="ar">→</span>
            </Link>
          </div>
          <div className="sol-feature-grid">
            {page.features.map((item) => (
              <article key={item.title} data-reveal>
                <span className="dx-feat-ico">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Showcase (optional) ---------- */}
      {page.showcase?.length ? (
        <section className="sol-showcase">
          <div className="wrap">
            <div className="sec-head sol-head-split" data-reveal>
              <div>
                <span className="eyebrow">Selected portfolio</span>
                <h2>Solutions for different workloads</h2>
              </div>
              <p className="lead">
                Explore representative systems and equipment within this Devnet
                capability area.
              </p>
            </div>
            <div className="sol-showcase-grid">
              {page.showcase.map((item, index) => (
                <article className="b-clean" key={item.title} data-reveal>
                  <div className="sol-showcase-visual">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon
                      name={page.category === "Product" ? "scanner" : "workflow"}
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- Capabilities ---------- */}
      <section className="sol-caps">
        <div className="wrap sol-caps-shell">
          <div className="sol-caps-copy" data-reveal>
            <span className="eyebrow">More powerful capability</span>
            <h2>A flexible foundation that can grow with your operation.</h2>
            <p>
              Configure the experience around teams, processes, controls and
              integrations instead of forcing the organization into a rigid
              template.
            </p>
          </div>
          <div className="sol-caps-list" data-reveal>
            {page.capabilities.map((capability, index) => (
              <span key={`${capability}-${index}`}>
                <Icon name="check" /> {capability}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      {related.length ? (
        <section className="sol-related">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <span className="eyebrow">Continue exploring</span>
              <h2>Related Devnet solutions</h2>
            </div>
            <div className="sol-related-grid">
              {related.map((item) => (
                <Link
                  className="b-clean"
                  href={`/${item.slug}`}
                  key={item.slug}
                  data-reveal
                >
                  <small className="b-idx">{item.category}</small>
                  <h3>{item.navTitle}</h3>
                  <p>{item.description}</p>
                  <span className="b-link">
                    Explore <span className="ar">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- Final CTA ---------- */}
      <section className="sol-finalcta">
        <div className="wrap sol-finalcta-in" data-reveal>
          <div>
            <span className="eyebrow inv">Move from possibility to delivery</span>
            <h2>
              Let&apos;s design the right {page.navTitle.toLowerCase()} solution
              for your organization.
            </h2>
          </div>
          <div>
            <p>
              Share your workflow, content volume, integrations and security
              requirements. The Devnet team will help shape a practical next
              step.
            </p>
            <Link href="/contact" className="btn btn-paper">
              Start a conversation <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
