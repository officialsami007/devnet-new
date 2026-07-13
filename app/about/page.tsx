import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Devnet",
  description:
    "Learn about Devnet Limited, its vision, mission, leadership, team and certifications.",
};

const directors = [
  { name: "A. K. Sabbir Mahbub", role: "Co-Founder & Chairman", initials: "AK" },
  { name: "Syed Abu Md. Jafor", role: "Managing Director", initials: "SJ" },
  { name: "Masrifa Ahmed", role: "Director, Devnet Limited", initials: "MA" },
];

const team = [
  { name: "Mohammad Emran Hasan", role: "Chief Technology Officer", initials: "ME" },
  { name: "Mohammad Syful Islam Noman", role: "Senior Software Engineer", initials: "MN" },
  { name: "Neamot Ullah", role: "Senior Executive · Accounts", initials: "NU" },
  { name: "Md Kabir Hussain", role: "System Engineer", initials: "MK" },
  { name: "Mahmudul Islam", role: "Associate UI & UX Designer", initials: "MI" },
  { name: "Md Al-Amin", role: "Software Engineer · QA", initials: "MA" },
  { name: "Nafiz Fuad", role: "Assistant Software Engineer", initials: "NF" },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="aboutp">
        <section className="aboutp-hero">
          <div className="wrap aboutp-hero-grid">
            <div data-reveal>
              <span className="eyebrow">Who we are</span>
              <h1>
                A technology partner dedicated to helping organizations work with
                greater clarity and control.
              </h1>
              <p className="lead">
                Devnet is a leading service provider focused on optimizing
                organizational efficiency through process automation and
                enterprise content management.
              </p>
              <Link className="btn btn-hot" href="/contact">
                Start a conversation <span className="ar">→</span>
              </Link>
            </div>
            <div className="aboutp-panel" data-reveal>
              <div className="aboutp-badge">
                <span>Established</span>
                <strong>1997</strong>
                <small>Dhaka, Bangladesh</small>
              </div>
              <ul className="aboutp-timeline">
                <li>
                  <span className="aboutp-dot" />
                  <div>
                    <b>1997</b>
                    <p>Founded as a document &amp; data services company.</p>
                  </div>
                </li>
                <li>
                  <span className="aboutp-dot" />
                  <div>
                    <b>First in market</b>
                    <p>Introduced DMS &amp; ICR in Bangladesh.</p>
                  </div>
                </li>
                <li>
                  <span className="aboutp-dot red" />
                  <div>
                    <b>National scale</b>
                    <p>30M+ pages digitised every year.</p>
                  </div>
                </li>
                <li>
                  <span className="aboutp-dot" />
                  <div>
                    <b>Today</b>
                    <p>DMS, workflow, capture, e-governance &amp; AI.</p>
                  </div>
                </li>
              </ul>
              <div className="aboutp-chips">
                <span>
                  <Icon name="file" />
                  Content
                </span>
                <span>
                  <Icon name="workflow" />
                  Process
                </span>
                <span>
                  <Icon name="brain" />
                  Intelligence
                </span>
                <span>
                  <Icon name="users" />
                  People
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutp-mission">
          <div className="wrap aboutp-mission-grid">
            <article data-reveal>
              <span className="aboutp-mission-num">01</span>
              <span className="eyebrow">Our vision</span>
              <h2>
                Build long-term, collaborative relationships that consistently
                create business value.
              </h2>
              <p>
                Devnet&apos;s philosophy connects client outcomes with employee
                opportunity, durable partnerships and continuously improving
                delivery standards.
              </p>
            </article>
            <article data-reveal>
              <span className="aboutp-mission-num">02</span>
              <span className="eyebrow">Our mission</span>
              <h2>
                Help organizations drive efficiency through content, process and
                records management.
              </h2>
              <p>
                By enabling consistent communication and structured workflows,
                Devnet helps customers reduce cost, respond faster and improve
                service quality.
              </p>
            </article>
          </div>
        </section>

        <section className="aboutp-people">
          <div className="wrap">
            <div className="sec-head sol-head-split" data-reveal>
              <div>
                <span className="eyebrow">Board of directors</span>
                <h2>Leadership focused on trust, value and sustainable growth.</h2>
              </div>
              <p className="lead">
                Guiding Devnet&apos;s direction across enterprise technology,
                service delivery and long-term customer relationships.
              </p>
            </div>
            <div className="aboutp-directors">
              {directors.map((person) => (
                <article className="b-clean" key={person.name} data-reveal>
                  <div className="aboutp-portrait">
                    <span>{person.initials}</span>
                  </div>
                  <small className="b-idx">Board member</small>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="aboutp-team">
          <div className="wrap">
            <div className="sec-head sol-head-split" data-reveal>
              <div>
                <span className="eyebrow">Team members</span>
                <h2>The people shaping products, systems and customer outcomes.</h2>
              </div>
              <p className="lead">
                A multidisciplinary team working across engineering, design,
                systems, quality and operations.
              </p>
            </div>
            <div className="aboutp-team-grid">
              {team.map((person) => (
                <article key={person.name} data-reveal>
                  <div className="aboutp-avatar">{person.initials}</div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="aboutp-cert">
          <div className="wrap aboutp-cert-shell" data-reveal>
            <div>
              <span className="eyebrow inv">Certifications &amp; recognition</span>
              <h2>
                Processes designed for quality, maturity and information security.
              </h2>
              <p>
                Devnet highlights CMMI-SVC Level 3, ISO 9001 and ISO 27001 among
                its organizational credentials.
              </p>
            </div>
            <div className="aboutp-cert-grid">
              <article>
                <strong>CMMI</strong>
                <span>SVC / 3</span>
                <p>Defined and consistently applied service processes.</p>
              </article>
              <article>
                <strong>ISO</strong>
                <span>9001</span>
                <p>Quality-management standards and continuous improvement.</p>
              </article>
              <article>
                <strong>ISO</strong>
                <span>27001</span>
                <p>Information-security management framework.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
