import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { contactDetails } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Devnet Limited for solutions, sales, support and digital-transformation projects.",
};

const principles: [string, string, string][] = [
  [
    "users",
    "Client-centered solutions",
    "Begin with business goals, pain points, users and operational constraints.",
  ],
  [
    "spark",
    "Bench strength",
    "Bring trained specialists across products, engineering, data and delivery.",
  ],
  [
    "chart",
    "Flexible and cost-efficient",
    "Shape scope and implementation around business value and practical priorities.",
  ],
  [
    "workflow",
    "Collaborative approach",
    "Work across client departments and Devnet disciplines for a complete view.",
  ],
];

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="contactp">
        <section className="contactp-hero">
          <div className="wrap contactp-hero-grid">
            <div data-reveal>
              <span className="eyebrow">
                Let&apos;s explore what Devnet can do for you
              </span>
              <h1>Start with the challenge. We&apos;ll help shape the path forward.</h1>
              <p className="lead">
                Tell us about your documents, workflows, users, data, systems or
                scanning requirements. The right Devnet team will follow up.
              </p>
            </div>
            <div className="contactp-panel" data-reveal>
              <div className="contactp-panel-head">
                <div>
                  <span className="live-dot" />
                  <strong>Message routing</strong>
                </div>
                <span className="contactp-panel-status">
                  Avg. reply · 1 business day
                </span>
              </div>
              <div className="contactp-bubble inbound">
                <span className="contactp-avatar">You</span>
                <div>
                  <b>New enquiry</b>
                  <p>
                    “We need to digitise 30M+ pages a year and automate
                    approvals.”
                  </p>
                </div>
              </div>
              <div className="contactp-teams">
                <span className="contactp-team active">
                  <Icon name="file" />
                  Document management
                </span>
                <span className="contactp-team">
                  <Icon name="workflow" />
                  Automation
                </span>
                <span className="contactp-team">
                  <Icon name="scan" />
                  Scanning
                </span>
              </div>
              <div className="contactp-bubble outbound">
                <span className="contactp-avatar green">
                  <Icon name="headset" />
                </span>
                <div>
                  <b>Solutions team</b>
                  <p>
                    Matched to DMS &amp; workflow specialists. We&apos;ll follow
                    up shortly.
                  </p>
                  <em>
                    <Icon name="check" /> Assigned
                  </em>
                </div>
              </div>
              <div className="contactp-panel-foot">
                <span>
                  <Icon name="shield" /> Confidential
                </span>
                <span>
                  <Icon name="clock" /> Same-day acknowledgement
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="contactp-main">
          <div className="wrap contactp-layout">
            <div className="contactp-form-shell" data-reveal>
              <div className="sec-head" style={{ marginBottom: "2rem" }}>
                <span className="eyebrow">Get in touch</span>
                <h2>Share your requirements</h2>
                <p className="lead">Fields marked with * are required.</p>
              </div>
              <ContactForm />
            </div>
            <aside className="contactp-sidebar" data-reveal>
              <span className="eyebrow inv">Direct contact</span>
              <h2>Talk to the right team.</h2>
              <p>
                Reach Devnet for solution consultations, sales questions or
                support coordination.
              </p>
              <div className="contactp-methods">
                <a href={`tel:${contactDetails.cell.replace(/\s/g, "")}`}>
                  <span>
                    <Icon name="headset" />
                  </span>
                  <div>
                    <small>Cell</small>
                    <strong>{contactDetails.cell}</strong>
                  </div>
                </a>
                <a href={`mailto:${contactDetails.email}`}>
                  <span>
                    <Icon name="message" />
                  </span>
                  <div>
                    <small>Email</small>
                    <strong>{contactDetails.email}</strong>
                  </div>
                </a>
                <div>
                  <span>
                    <Icon name="building" />
                  </span>
                  <div>
                    <small>Office</small>
                    <strong>{contactDetails.address}</strong>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="contactp-principles">
          <div className="wrap">
            <div className="sec-head sol-head-split" data-reveal>
              <div>
                <span className="eyebrow">How Devnet engages</span>
                <h2>
                  Understand first. Design around reality. Deliver
                  collaboratively.
                </h2>
              </div>
              <p className="lead">
                A practical approach for complex institutional and enterprise
                requirements.
              </p>
            </div>
            <div className="contactp-principle-grid">
              {principles.map(([icon, title, desc], i) => (
                <article className="b-clean" key={title} data-reveal>
                  <div className="b-top">
                    <span className="b-ico">
                      <Icon name={icon} />
                    </span>
                    <span className="b-idx">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
