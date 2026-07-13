"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let cleanupFns: Array<() => void> = [];
    let cancelled = false;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ---------- Nav + progress ---------- */
    const nav = document.getElementById("nav")!;
    let lastY = 0;
    function onScroll() {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 40);
      if (y > 420 && y > lastY + 6) nav.classList.add("hidden-nav");
      else if (y < lastY - 6 || y <= 420) nav.classList.remove("hidden-nav");
      lastY = y;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const progress = document.getElementById("progress")!;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanupFns.push(() => window.removeEventListener("scroll", onScroll));

    /* ---------- Mobile menu ---------- */
    const burger = document.getElementById("burger")!;
    const mmenu = document.getElementById("mmenu")!;
    const onBurger = () => {
      const open = mmenu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", onBurger);
    cleanupFns.push(() => burger.removeEventListener("click", onBurger));
    const mLinks = Array.prototype.slice.call(mmenu.querySelectorAll("a"));
    const onMLink = () => {
      mmenu.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    mLinks.forEach((a) => a.addEventListener("click", onMLink));
    cleanupFns.push(() =>
      mLinks.forEach((a) => a.removeEventListener("click", onMLink))
    );

    /* ---------- Testimonial carousel ---------- */
    const slides = Array.prototype.slice.call(
      document.querySelectorAll(".t-slide")
    ) as HTMLElement[];
    const dots = Array.prototype.slice.call(
      document.querySelectorAll(".t-dot")
    ) as HTMLElement[];
    let tIdx = 0;
    let tTimer: ReturnType<typeof setInterval> | null = null;
    function tGo(i: number) {
      tIdx = (i + slides.length) % slides.length;
      slides.forEach((s, k) => {
        s.classList.toggle("active", k === tIdx);
      });
      dots.forEach((d, k) => {
        d.classList.toggle("on", k === tIdx);
      });
      const st = document.getElementById("tStage")!;
      st.style.minHeight = Math.max(260, slides[tIdx].offsetHeight) + "px";
    }
    function tAuto() {
      if (tTimer) clearInterval(tTimer);
      if (!reduced)
        tTimer = setInterval(function () {
          tGo(tIdx + 1);
        }, 6500);
    }
    const tNext = document.getElementById("tNext")!;
    const tPrev = document.getElementById("tPrev")!;
    const onNext = () => {
      tGo(tIdx + 1);
      tAuto();
    };
    const onPrev = () => {
      tGo(tIdx - 1);
      tAuto();
    };
    tNext.addEventListener("click", onNext);
    tPrev.addEventListener("click", onPrev);
    const onDot = (d: HTMLElement) => () => {
      tGo(+(d.dataset.i as string));
      tAuto();
    };
    const dotHandlers = dots.map((d) => {
      const fn = onDot(d);
      d.addEventListener("click", fn);
      return { d, fn };
    });
    const onResize = () => tGo(tIdx);
    window.addEventListener("resize", onResize);
    tGo(0);
    tAuto();
    cleanupFns.push(() => {
      tNext.removeEventListener("click", onNext);
      tPrev.removeEventListener("click", onPrev);
      dotHandlers.forEach(({ d, fn }) => d.removeEventListener("click", fn));
      window.removeEventListener("resize", onResize);
      if (tTimer) clearInterval(tTimer);
    });

    /* ---------- Counters ---------- */
    function runCounter(el: HTMLElement) {
      const target = +(el.dataset.count as string);
      const dur = 1600;
      let t0: number | null = null;
      function step(ts: number) {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(target * eased).toLocaleString("en-US");
        if (p < 1) requestAnimationFrame(step);
      }
      if (reduced) {
        el.textContent = target.toLocaleString("en-US");
        return;
      }
      requestAnimationFrame(step);
    }

    /* ---------- GSAP ---------- */
    async function initGsap() {
      if (reduced) {
        document.querySelectorAll<HTMLElement>(".count").forEach((el) => {
          el.textContent = +(el.dataset.count as string) + "";
          el.textContent = (+(el.dataset.count as string)).toLocaleString(
            "en-US"
          );
        });
        return;
      }

      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      const gsap = gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      /* hero entrance + ken burns */
      const heroLines = document.querySelectorAll(".hero .lm > span");
      gsap.set(heroLines, { yPercent: 115 });
      gsap.set(".hero [data-h]", { opacity: 0, y: 26 });
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-img", { scale: 1.14, duration: 2.6, ease: "power2.out" }, 0)
        .to(heroLines, { yPercent: 0, duration: 1.15, stagger: 0.14 }, 0.35)
        .to(
          ".hero [data-h]",
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          "-=.7"
        );

      /* hero slow parallax on scroll */
      gsap.to(".hero-img", {
        yPercent: 9,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* band parallax */
      gsap.fromTo(
        ".band-img",
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".band",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      /* section heading line reveals */
      document.querySelectorAll("main .lm > span").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 115 },
          {
            yPercent: 0,
            duration: 1.05,
            ease: "power4.out",
            scrollTrigger: { trigger: el.closest("h2") || el, start: "top 88%" },
          }
        );
      });

      /* generic reveals */
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        onEnter: function (batch: Element[]) {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.95,
              stagger: 0.09,
              ease: "power3.out",
              overwrite: true,
            }
          );
        },
        once: true,
      });
      gsap.set("[data-reveal]", { opacity: 0 });

      /* counters */
      document.querySelectorAll<HTMLElement>(".count").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 94%",
          once: true,
          onEnter: function () {
            runCounter(el);
          },
        });
      });

      /* mock rows stagger */
      gsap.fromTo(
        "[data-mrow]",
        { opacity: 0, x: 26 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".mock", start: "top 75%" },
        }
      );

      /* chips pop */
      gsap.fromTo(
        ".chip",
        { opacity: 0, y: 16, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.045,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: ".chips", start: "top 88%" },
        }
      );

      /* CTA underline draw */
      const ctaPath = document.querySelector(
        ".cta-big path"
      ) as SVGPathElement | null;
      if (ctaPath) {
        const len = ctaPath.getTotalLength();
        gsap.set(ctaPath, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(ctaPath, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: ".cta-big", start: "top 75%" },
        });
      }

      /* CTA gentle scale scrub */
      gsap.fromTo(
        ".cta-in",
        { scale: 0.965, y: 30 },
        {
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".cta",
            start: "top 90%",
            end: "top 35%",
            scrub: 1,
          },
        }
      );

      cleanupFns.push(() => {
        ScrollTrigger.getAll().forEach((t: { kill: () => void }) => t.kill());
      });
    }
    initGsap();

    /* ---------- Background video: robust autoplay with animated fallback ---------- */
    function swapToFallback(v: HTMLVideoElement, src: string) {
      const img = document.createElement("img");
      img.className = v.className;
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      img.src = src;
      v.parentNode?.replaceChild(img, v);
    }
    document
      .querySelectorAll<HTMLVideoElement>("video[data-fallback]")
      .forEach((v) => {
        if (reduced) {
          swapToFallback(
            v,
            v.getAttribute("poster") || (v.dataset.fallback as string)
          );
          return;
        }
        let swapped = false;
        const t = setTimeout(function () {
          if (!swapped && v.readyState < 2) {
            swapped = true;
            swapToFallback(v, v.dataset.fallback as string);
          }
        }, 2600);
        const p = v.play();
        if (p && typeof p.catch === "function") {
          p.catch(function () {
            if (!swapped) {
              swapped = true;
              clearTimeout(t);
              swapToFallback(v, v.dataset.fallback as string);
            }
          });
        }
      });

    return () => {
      cancelled = true;
      cleanupFns.forEach((fn) => fn());
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div id="progress" aria-hidden="true"></div>

      {/* ================= NAV ================= */}
      <nav id="nav" aria-label="Main navigation">
        <div className="nav-in">
          <a href="#top" className="logo" aria-label="Devnet Limited — home">
            <span className="logo-mark" aria-hidden="true"></span>
            devnet
          </a>
          <ul className="nav-links">
            <li>
              <a href="#solutions">Solutions</a>
            </li>
            <li>
              <a href="#docudex">DocuDEX</a>
            </li>
            <li>
              <a href="#milestones">Milestones</a>
            </li>
            <li>
              <a href="#voices">Clients</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a
            className="btn btn-hot nav-cta"
            href="mailto:info@devnetlimited.com"
          >
            Get in touch <span className="ar">→</span>
          </a>
          <button
            className="burger"
            id="burger"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className="m-menu" id="mmenu">
        <a href="#solutions">Solutions</a>
        <a href="#docudex">DocuDEX</a>
        <a href="#milestones">Milestones</a>
        <a href="#voices">Clients</a>
        <a href="#contact">Contact</a>
        <a className="btn btn-hot" href="mailto:info@devnetlimited.com">
          Get in touch <span className="ar">→</span>
        </a>
      </div>

      {/* ================= HERO ================= */}
      <header className="hero grain" id="top">
        <video
          className="hero-img"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/img/hero-poster.jpg"
          data-fallback="/assets/img/hero-loop.webp"
          aria-hidden="true"
        >
          <source src="/assets/video/docudex-film-15s.mp4" type="video/mp4" />
        </video>
        <div className="hero-ol" aria-hidden="true"></div>
        <div className="hero-ol2" aria-hidden="true"></div>
        <div className="hero-in">
          <div className="hero-badge" data-h>
            <span className="pulse" aria-hidden="true"></span> Empowering Smart
            Bangladesh · Since 1997
          </div>
          <h1>
            <span className="lm">
              <span>Changing the</span>
            </span>
            <span className="lm">
              <span>
                way <em className="serif-i">we work</em>.
              </span>
            </span>
          </h1>
          <p className="hero-sub" data-h>
            <strong>DocuDEX</strong> — the flagship EDMS from Devnet Limited —
            helps organisations capture, manage, store and search millions of
            documents. Comprehensive, powerful and scalable e-governance, built
            in Dhaka for the region&apos;s largest institutions.
          </p>
          <div className="hero-ctas" data-h>
            <a
              className="btn btn-hot"
              href="https://devnetlimited.com/docudex-edms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore DocuDEX <span className="ar">→</span>
            </a>
            <a className="btn btn-glass" href="mailto:info@devnetlimited.com">
              Talk to our team
            </a>
          </div>
          <p className="hero-note" data-h>
            1st to introduce DMS &amp; ICR in Bangladesh — 25+ years on, still
            leading.
          </p>
        </div>
      </header>

      <main>
        {/* ================= STATS BAND ================= */}
        <section className="statsband" aria-label="Key numbers">
          <div className="wrap">
            <div className="sb-grid">
              <div className="sb-card" data-reveal>
                <div className="sb-num">
                  <span className="count" data-count="1">
                    0
                  </span>
                  <em>st</em>
                </div>
                <p className="sb-lbl">Introduced DMS &amp; ICR in Bangladesh</p>
              </div>
              <div className="sb-card" data-reveal>
                <div className="sb-num">
                  <span className="count" data-count="70">
                    0
                  </span>
                  <em>B</em>
                </div>
                <p className="sb-lbl">
                  Images processed &amp; managed — and counting
                </p>
              </div>
              <div className="sb-card" data-reveal>
                <div className="sb-num">
                  <span className="count" data-count="63">
                    0
                  </span>
                  <em>K</em>
                </div>
                <p className="sb-lbl">
                  Enterprise processes automated &amp; streamlined
                </p>
              </div>
              <div className="sb-card" data-reveal>
                <div className="sb-num">
                  <span className="count" data-count="30">
                    0
                  </span>
                  <em>M</em>
                </div>
                <p className="sb-lbl">Pages digitised every single year</p>
              </div>
            </div>
            <p className="trustline" data-reveal>
              Trusted by — <b>DLRS</b> · <b>RAJUK</b> · <b>DGHS</b> ·{" "}
              <b>Bangladesh National Library</b> · <b>Linde BD</b> ·{" "}
              <b>10+ Banks</b>
            </p>
          </div>
        </section>

        {/* ================= SOLUTIONS — BENTO ================= */}
        <section className="solutions" id="solutions">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">01 — What we do</span>
              <h2>
                <span className="lm">
                  <span>One platform,</span>
                </span>
                <span className="lm">
                  <span>
                    every{" "}
                    <em className="serif-i" style={{ color: "var(--green-deep)" }}>
                      document
                    </em>
                    .
                  </span>
                </span>
              </h2>
              <p className="lead" data-reveal>
                From capture to workflow to secure archive — high-tech solutions
                for organisations that run on paper today and can&apos;t afford
                to tomorrow.
              </p>
            </div>

            <div className="bento">
              {/* Image card 1 */}
              <a className="b-card b-imgcard" data-reveal href="/docudex-edms">
                <img
                  src="/assets/img/scanner-macro.jpg"
                  alt="High-speed production document scanner in operation"
                  loading="lazy"
                  decoding="async"
                />
                <span className="b-imgol" aria-hidden="true"></span>
                <span className="b-tag">Flagship · DocuDEX EDMS</span>
                <span className="b-go" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </span>
                <div className="b-imgbody">
                  <h3>Document Management</h3>
                  <p>
                    Capture, manage, store and search valuable documents with
                    speed and total control — the EDMS trusted across government
                    and enterprise.
                  </p>
                </div>
              </a>

              {/* Image card */}
              <a
                className="b-card b-imgcard b-one"
                data-reveal
                href="/docudex-workflow"
              >
                <img
                  src="/assets/img/workflow-approval.jpg"
                  alt="Professional approving documents in a workflow app on a tablet"
                  loading="lazy"
                  decoding="async"
                />
                <span className="b-imgol" aria-hidden="true"></span>
                <span className="b-tag">DocuDEX Workflow</span>
                <span className="b-go" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </span>
                <div className="b-imgbody">
                  <h3>Process Automation</h3>
                  <p>
                    Official activities routed automatically — approvals move in
                    hours, not weeks.
                  </p>
                </div>
              </a>

              {/* Image card */}
              <a
                className="b-card b-imgcard b-one"
                data-reveal
                href="/capture-software"
              >
                <img
                  src="/assets/img/capture-analysis.jpg"
                  alt="Analyst reviewing extracted document data on a large monitor"
                  loading="lazy"
                  decoding="async"
                />
                <span className="b-imgol" aria-hidden="true"></span>
                <span className="b-tag">Content Intelligence</span>
                <span className="b-go" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </span>
                <div className="b-imgbody">
                  <h3>Capture Software</h3>
                  <p>
                    Scanned paper becomes structured, data-driven insight for
                    sharper decisions.
                  </p>
                </div>
              </a>

              {/* Image card 2 */}
              <a
                className="b-card b-imgcard"
                data-reveal
                href="/record-management"
              >
                <img
                  src="/assets/img/records-vault.jpg"
                  alt="Modern records archive facility with rolling shelving"
                  loading="lazy"
                  decoding="async"
                />
                <span className="b-imgol" aria-hidden="true"></span>
                <span className="b-tag">Secure · Onsite &amp; Offsite</span>
                <span className="b-go" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </span>
                <div className="b-imgbody">
                  <h3>Record Management</h3>
                  <p>
                    Move your business records offsite — secure, compliant
                    storage and management for both electronic and hard-copy
                    archives.
                  </p>
                </div>
              </a>

              {/* Image card */}
              <a
                className="b-card b-imgcard b-one"
                data-reveal
                href="/document-scanner"
              >
                <img
                  src="/assets/img/scanner-hardware.jpg"
                  alt="Large-format production document scanner in a digitization facility"
                  loading="lazy"
                  decoding="async"
                />
                <span className="b-imgol" aria-hidden="true"></span>
                <span className="b-tag">Robotic · Book &amp; Map · Microfilm</span>
                <span className="b-go" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </span>
                <div className="b-imgbody">
                  <h3>Document Scanners</h3>
                  <p>
                    High-volume hardware that minimises downtime and keeps work
                    flowing.
                  </p>
                </div>
              </a>

              {/* Image card */}
              <article className="b-card b-imgcard b-one" data-reveal>
                <img
                  src="/assets/img/data-center.jpg"
                  alt="Modern data center aisle with green status lighting"
                  loading="lazy"
                  decoding="async"
                />
                <span className="b-imgol" aria-hidden="true"></span>
                <span className="b-tag">ICR · OCR · RPA</span>
                <div className="b-imgbody">
                  <h3>AI &amp; Machine Learning</h3>
                  <p>
                    Documents read, classified and routed automatically — the
                    intelligence behind paperless.
                  </p>
                </div>
              </article>

              {/* Green CTA card */}
              <a className="b-card b-cta" data-reveal href="#docudex">
                <div className="b-cta-num">
                  13<em>+</em>
                </div>
                <p>
                  Products in the DocuDEX family — from Agile Audit and HRIS to
                  e-KYC, Land Management and RPA.
                </p>
                <span className="go">
                  See the full suite <span className="ar">→</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= DOCUDEX SPOTLIGHT ================= */}
        <section className="docudex" id="docudex">
          <div className="wrap">
            <div className="dx-grid">
              <div>
                <div className="sec-head" style={{ marginBottom: 0 }}>
                  <span className="eyebrow inv">02 — The flagship</span>
                  <h2>
                    <span className="lm">
                      <span>Meet</span>
                    </span>
                    <span className="lm">
                      <span>
                        <em
                          className="serif-i"
                          style={{ color: "var(--green-hot)" }}
                        >
                          DocuDEX
                        </em>
                        .
                      </span>
                    </span>
                  </h2>
                </div>
                <div className="dx-feats">
                  <div className="dx-feat" data-reveal>
                    <span className="dx-feat-ico">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                    <div>
                      <b>Capture</b>
                      <p>
                        Scan and ingest at industrial scale — 30M+ pages a year,
                        from loose leaf to century-old maps.
                      </p>
                    </div>
                  </div>
                  <div className="dx-feat" data-reveal>
                    <span className="dx-feat-ico">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18M3 12h18M3 18h18" />
                      </svg>
                    </span>
                    <div>
                      <b>Manage</b>
                      <p>
                        Version, permission and audit every file — with workflow
                        that keeps official tasks moving.
                      </p>
                    </div>
                  </div>
                  <div className="dx-feat" data-reveal>
                    <span className="dx-feat-ico">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </span>
                    <div>
                      <b>Store</b>
                      <p>
                        Secure onsite or offsite archives for electronic and
                        hard-copy records alike.
                      </p>
                    </div>
                  </div>
                  <div className="dx-feat" data-reveal>
                    <span className="dx-feat-ico">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.35-4.35" />
                      </svg>
                    </span>
                    <div>
                      <b>Search</b>
                      <p>
                        Full-text, ICR-powered retrieval across 70 billion
                        images — answers in seconds, not storerooms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dx-cta" data-reveal>
                  <a
                    className="btn btn-hot"
                    href="https://devnetlimited.com/docudex-edms/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See DocuDEX in detail <span className="ar">→</span>
                  </a>
                </div>
              </div>

              <div className="mock" data-reveal aria-hidden="true">
                <div className="mock-bar">
                  <span className="mdot r"></span>
                  <span className="mdot y"></span>
                  <span className="mdot g"></span>
                  <span className="mock-title">
                    DocuDEX EDMS — Central Archive
                  </span>
                  <span className="mock-badge">LIVE</span>
                </div>
                <div className="mock-body">
                  <div className="mock-side">
                    <span className="ms-ico on">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                    </span>
                    <span className="ms-ico">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      </svg>
                    </span>
                    <span className="ms-ico">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8L7 17M17 7l2.8-2.8" />
                      </svg>
                    </span>
                    <span className="ms-ico">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </span>
                  </div>
                  <div className="mock-main">
                    <div className="mock-search">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.35-4.35" />
                      </svg>
                      Search 70,000,000,000 indexed images…
                    </div>
                    <div className="mrow" data-mrow>
                      <span className="mrow-ico">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                        </svg>
                      </span>
                      <div>
                        <div className="mrow-name">
                          RAJUK_plot-allotment_0117.pdf
                        </div>
                        <div className="mrow-meta">
                          Housing · scanned 09:41 · v3
                        </div>
                      </div>
                      <span className="mchip ok">INDEXED</span>
                    </div>
                    <div className="mrow" data-mrow>
                      <span className="mrow-ico">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </span>
                      <div>
                        <div className="mrow-name">
                          mouza-map_district-04.tif
                        </div>
                        <div className="mrow-meta">
                          DLRS · geo-tagged · 600 dpi
                        </div>
                      </div>
                      <span className="mchip ok">OCR 99.2%</span>
                    </div>
                    <div className="mrow" data-mrow>
                      <span className="mrow-ico">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M9 15l2 2 4-4" />
                        </svg>
                      </span>
                      <div>
                        <div className="mrow-name">loan-file_AGB-2291.pdf</div>
                        <div className="mrow-meta">
                          Banking · workflow step 3/4
                        </div>
                      </div>
                      <span className="mchip rev">IN REVIEW</span>
                    </div>
                    <div className="mrow" data-mrow>
                      <span className="mrow-ico">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      </span>
                      <div>
                        <div className="mrow-name">
                          national-library_archive-1954.tif
                        </div>
                        <div className="mrow-meta">
                          Heritage · newspaper · restored
                        </div>
                      </div>
                      <span className="mchip ok">ARCHIVED</span>
                    </div>
                    <div className="mock-foot">
                      <span>4 of 2,847 results</span>
                      <b>0.3s query time</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dx-suite">
              <span className="dx-suite-label" data-reveal>
                The full product suite
              </span>
              <div className="chips" data-reveal>
                <span className="chip">DocuDEX EDMS</span>
                <span className="chip">DocuDEX Workflow</span>
                <span className="chip">Agile Audit</span>
                <span className="chip">HRIS</span>
                <span className="chip">Invoice Processing</span>
                <span className="chip">Online Proctoring</span>
                <span className="chip">Library Management</span>
                <span className="chip">e-KYC Management</span>
                <span className="chip">Land Management</span>
                <span className="chip">RPA</span>
                <span className="chip">Robotic Scanners</span>
                <span className="chip">Book &amp; Map Scanners</span>
                <span className="chip">Microfilm Scanners</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MILESTONES ================= */}
        <section className="miles" id="milestones">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">03 — Proven at national scale</span>
              <h2>
                <span className="lm">
                  <span>Milestones that</span>
                </span>
                <span className="lm">
                  <span>
                    moved a{" "}
                    <em className="serif-i" style={{ color: "var(--green-deep)" }}>
                      nation
                    </em>
                    .
                  </span>
                </span>
              </h2>
            </div>
            <div className="miles-grid">
              <article className="mcard" data-reveal>
                <figure>
                  <img
                    src="/assets/img/heritage-map.jpg"
                    alt="Archivist digitizing an antique land survey map on a book scanner"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="ftag">Land Management — DLRS</span>
                </figure>
                <div className="mcard-body">
                  <div className="mcard-num">
                    <span className="count" data-count="213">
                      0
                    </span>
                    <em>K</em>
                  </div>
                  <h3>Mouza maps scanned &amp; archived</h3>
                  <p>
                    Digitising the land records of Bangladesh — one of the
                    largest geospatial archiving programmes in the country&apos;s
                    history.
                  </p>
                </div>
              </article>
              <article className="mcard" data-reveal>
                <figure>
                  <img
                    src="/assets/img/banking-operations.jpg"
                    alt="Bank operations professionals working with digital approval dashboards in a modern fintech office"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="ftag">Banking sector</span>
                </figure>
                <div className="mcard-body">
                  <div className="mcard-num">
                    <span className="count" data-count="10">
                      0
                    </span>
                    <em>+</em>
                  </div>
                  <h3>Banks on DocuDEX DMS &amp; Workflow</h3>
                  <p>
                    Loan files, KYC and approvals automated end-to-end —
                    maximising efficiency across the financial sector.
                  </p>
                </div>
              </article>
              <article className="mcard" data-reveal>
                <figure>
                  <img
                    src="/assets/img/library-digitization.jpg"
                    alt="Robotic book scanner digitizing a heritage volume in the national library preservation lab"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="ftag">National heritage</span>
                </figure>
                <div className="mcard-body">
                  <div
                    className="mcard-num"
                    style={{ fontSize: "1.9rem", paddingTop: ".5rem" }}
                  >
                    National Library
                  </div>
                  <h3>A country&apos;s memory, digitised</h3>
                  <p>
                    Old books, newspapers, magazines and maps converted through
                    our imaging solution and customised Digital Library
                    Management System.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= PARALLAX BAND ================= */}
        <section className="band grain" aria-label="Empowering Smart Bangladesh">
          <video
            className="band-img"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/img/dhaka-skyline.jpg"
            data-fallback="/assets/img/skyline-loop.webp"
            aria-hidden="true"
          >
            <source src="/assets/video/dhaka-timelapse.mp4" type="video/mp4" />
          </video>
          <div className="band-ol" aria-hidden="true"></div>
          <div className="band-in">
            <span className="eyebrow inv" data-reveal>
              Our mission
            </span>
            <h2>
              <span className="lm">
                <span>Empowering</span>
              </span>
              <span className="lm">
                <span>
                  <em className="serif-i">Smart Bangladesh</em>.
                </span>
              </span>
            </h2>
            <p className="band-sub" data-reveal>
              For over 25 years we&apos;ve been building the digital backbone of
              the nation&apos;s institutions — comprehensive, powerful and
              scalable e-governance solutions that keep a country&apos;s
              paperwork moving.
            </p>
            <div className="band-chips" data-reveal>
              <span className="band-chip">
                <b>213K</b> mouza maps digitised
              </span>
              <span className="band-chip">
                <b>10+</b> banks automated
              </span>
              <span className="band-chip">
                <b>30M</b> pages every year
              </span>
            </div>
          </div>
        </section>

        {/* ================= ABOUT / VALUES ================= */}
        <section className="about" id="about" aria-label="Who we are">
          <div className="wrap about-grid">
            <figure className="about-img" data-reveal>
              <img
                src="/assets/img/team-devnet.jpg"
                alt="The Devnet team collaborating at the Dhaka office"
                loading="lazy"
                decoding="async"
              />
              <span className="about-chip">
                <b>Since 1997</b> · Dhaka, Bangladesh
              </span>
            </figure>
            <div className="about-copy">
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">05 — Who we are</span>
                <h2>
                  <span className="lm">
                    <span>A team built for</span>
                  </span>
                  <span className="lm">
                    <span>
                      the{" "}
                      <em
                        className="serif-i"
                        style={{ color: "var(--green-deep)" }}
                      >
                        long term
                      </em>
                      .
                    </span>
                  </span>
                </h2>
              </div>
              <p className="lead" data-reveal>
                Our philosophy is simple: long-term, collaborative relationships
                that consistently deliver business value to our clients — and
                real opportunity for our people.
              </p>
              <div className="about-vals">
                <div className="av" data-reveal>
                  <span className="av-idx">01</span>
                  <b>User-centred</b>
                  <p>
                    Iterative design that produces highly usable, accessible
                    products.
                  </p>
                </div>
                <div className="av" data-reveal>
                  <span className="av-idx">02</span>
                  <b>Innovation &amp; creativity</b>
                  <p>
                    New ideas that lead to better products and a more dynamic
                    society.
                  </p>
                </div>
                <div className="av" data-reveal>
                  <span className="av-idx">03</span>
                  <b>Agility &amp; adaptability</b>
                  <p>
                    Empowering organisations to change course with confidence.
                  </p>
                </div>
                <div className="av" data-reveal>
                  <span className="av-idx">04</span>
                  <b>Collaboration</b>
                  <p>Active participation and teamwork, project after project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PARTNERS ================= */}
        <section
          className="partners"
          id="partners"
          aria-label="International partners"
        >
          <p className="partners-label" data-reveal>
            International partners powering world-class delivery
          </p>
          <div className="marquee">
            <div className="marquee-track">
              <span className="plogo">
                ABBYY <span className="pdot"></span>
              </span>
              <span className="plogo">
                KODAK ALARIS <span className="pdot"></span>
              </span>
              <span className="plogo">
                AVISION <span className="pdot"></span>
              </span>
              <span className="plogo">
                ATIZ <span className="pdot"></span>
              </span>
              <span className="plogo">
                PIQL <span className="pdot"></span>
              </span>
              <span className="plogo">
                I2S <span className="pdot"></span>
              </span>
              <span className="plogo">
                GONSIN <span className="pdot"></span>
              </span>
              <span className="plogo">
                SMA <span className="pdot"></span>
              </span>
              <span className="plogo">
                ABBYY <span className="pdot"></span>
              </span>
              <span className="plogo">
                KODAK ALARIS <span className="pdot"></span>
              </span>
              <span className="plogo">
                AVISION <span className="pdot"></span>
              </span>
              <span className="plogo">
                ATIZ <span className="pdot"></span>
              </span>
              <span className="plogo">
                PIQL <span className="pdot"></span>
              </span>
              <span className="plogo">
                I2S <span className="pdot"></span>
              </span>
              <span className="plogo">
                GONSIN <span className="pdot"></span>
              </span>
              <span className="plogo">
                SMA <span className="pdot"></span>
              </span>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="voices" id="voices">
          <div className="wrap">
            <span className="eyebrow">04 — Client voices</span>
            <span className="quote-mark serif-i" aria-hidden="true">
              &quot;
            </span>

            <div className="t-stage" id="tStage">
              <div className="t-slide active">
                <p className="t-quote">
                  Digital archiving solutions provided by Devnet — their
                  customised EDMS and scanning services — allowed us to preserve
                  the files of plots and flats across RAJUK&apos;s housing model
                  towns.
                </p>
                <div className="t-who">
                  <span className="t-ava">KH</span>
                  <div>
                    <div className="t-name">
                      Kazi Mohammad Mahabubul Hoque
                    </div>
                    <div className="t-role">
                      System Analyst &amp; Project Manager, MIS — RAJUK
                    </div>
                  </div>
                </div>
              </div>
              <div className="t-slide">
                <p className="t-quote">
                  Devnet&apos;s strategic design of a pragmatic data capture and
                  imaging solution — tailored for GR data entry, processing and
                  optimisation — has yielded substantial benefits.
                </p>
                <div className="t-who">
                  <span className="t-ava">AA</span>
                  <div>
                    <div className="t-name">Prof. Dr. Abul Kalam Azad</div>
                    <div className="t-role">
                      ADG (Planning &amp; Development) &amp; Director MIS —
                      Directorate General of Health Services
                    </div>
                  </div>
                </div>
              </div>
              <div className="t-slide">
                <p className="t-quote">
                  Devnet, with ABBYY FlexiCapture, was willing to meet our
                  individual needs — which ensured the success of project
                  QUICKFILL.
                </p>
                <div className="t-who">
                  <span className="t-ava">AS</span>
                  <div>
                    <div className="t-name">Abu Shair</div>
                    <div className="t-role">
                      Information Services Head — Linde Bangladesh Limited
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="t-ctrl">
              <div className="t-dots" role="tablist" aria-label="Testimonials">
                <button
                  className="t-dot on"
                  data-i="0"
                  aria-label="Testimonial 1"
                ></button>
                <button
                  className="t-dot"
                  data-i="1"
                  aria-label="Testimonial 2"
                ></button>
                <button
                  className="t-dot"
                  data-i="2"
                  aria-label="Testimonial 3"
                ></button>
              </div>
              <div className="t-arrows">
                <button
                  className="t-btn"
                  id="tPrev"
                  aria-label="Previous testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="t-btn"
                  id="tNext"
                  aria-label="Next testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta" id="contact">
          <div className="wrap cta-in">
            <span className="cta-eyebrow" data-reveal>
              Ready when you are
            </span>
            <h2 className="cta-big" id="ctaBig">
              <span className="lm">
                <span>Let&apos;s go</span>
              </span>
              <span className="lm">
                <span>
                  <em className="serif-i">
                    paperless
                    <svg
                      viewBox="0 0 300 24"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path d="M4 18 C 60 8, 150 6, 296 12" />
                    </svg>
                  </em>
                  .
                </span>
              </span>
            </h2>
            <p className="cta-sub" data-reveal>
              Tell us what&apos;s buried in your filing rooms. Our team will
              show you how DocuDEX captures it, indexes it and puts it a search
              away — keeping you cool, in every step.
            </p>
            <div className="cta-btns" data-reveal>
              <a className="btn btn-paper" href="mailto:info@devnetlimited.com">
                info@devnetlimited.com <span className="ar">→</span>
              </a>
              <a className="btn btn-outline" href="tel:+8801713044055">
                +880 1713-044055
              </a>
            </div>
            <p className="cta-mini" data-reveal>
              Level-9 (East), BDBL Bhaban · 12 Kawran Bazar · Dhaka-1215,
              Bangladesh
            </p>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="wrap">
          <div className="f-grid">
            <div className="f-brand">
              <a href="#top" className="logo" aria-label="Devnet Limited">
                <span className="logo-mark" aria-hidden="true"></span>
                devnet
              </a>
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
              <h4>Solutions</h4>
              <ul className="f-list">
                <li>
                  <a href="/docudex-edms">DocuDEX EDMS</a>
                </li>
                <li>
                  <a href="/docudex-workflow">DocuDEX Workflow</a>
                </li>
                <li>
                  <a href="/capture-software">Capture Software</a>
                </li>
                <li>
                  <a href="/record-management">Record Management</a>
                </li>
                <li>
                  <a href="/document-scanner">Document Scanners</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul className="f-list">
                <li>
                  <span>Document Scanning &amp; Archiving</span>
                </li>
                <li>
                  <span>Application Development</span>
                </li>
                <li>
                  <span>Mobile App Development</span>
                </li>
                <li>
                  <span>Data Processing &amp; BPO</span>
                </li>
                <li>
                  <span>Banking Solutions</span>
                </li>
                <li>
                  <span>AI &amp; Machine Learning</span>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <div className="f-contact">
                <div className="row">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    Level-9 (East), BDBL Bhaban,
                    <br />
                    12 Kawran Bazar, Dhaka-1215, Bangladesh
                  </span>
                </div>
                <div className="row">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>
                    <a href="tel:+880255013964">+8802 55013964</a> ·{" "}
                    <a href="tel:+880255013965">65</a>
                    <br />
                    <a href="tel:+8801713044055">+880 1713-044055</a>
                  </span>
                </div>
                <div className="row">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <span>
                    <a href="mailto:info@devnetlimited.com">
                      info@devnetlimited.com
                    </a>
                  </span>
                </div>
                <div className="row">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>
                    <a
                      href="https://devnetlimited.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      devnetlimited.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="f-bottom">
            <span>© 1997–2026 Devnet Limited. All rights reserved.</span>
            <span className="tag">Keeping you cool, in every step.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
