"use client";

import { useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo: string;
};

/**
 * Verbatim testimonials from devnetlimited.com (client testimonial slider).
 * Do not paraphrase — these are direct quotes attributed to named individuals.
 */
export const realTestimonials: Testimonial[] = [
  {
    quote:
      "Digital Archiving Solutions provided by Devnet Ltd. through their customized EDMS and scanning services allowed us to preserve files of plots/flats of different housing model towns of RAJUK. Their solution and service in their future endeavors and making them best in the market.",
    name: "Kazi Mohammad Mahabubul Hoque",
    role: "System Analyst & Project Manager, MIS, RAJUK",
    photo: "/assets/img/clients/mahabubul.jpg",
  },
  {
    quote:
      "Devnet's document imaging & archiving solution and customized Digital Library Management System. They also converted old books, newspapers, magazines and maps that helped us to achieve our desired goals towards Modernization of Bangladesh National Library.",
    name: "Wadudul Bari Chowdhury",
    role: "Directorate of Archives & Libraries",
    photo: "/assets/img/clients/wadudul.jpg",
  },
  {
    quote:
      "Scanning and archiving of 1,15,000 CS, SA & RS mouza maps by Devnet Limited has immensely helped Department of Land Records & Surveys (DLRS) to deliver printed copies of mouza maps to the citizen. At the same time the accuracy level was good.",
    name: "Kongkham Nilmani Singha",
    role: "Project Director & Deputy Director (Admin), DLRS",
    photo: "/assets/img/clients/nilmani.jpg",
  },
  {
    quote:
      "Devnet's strategic design of a pragmatic data capture and imaging solution specifically tailored for GR data entry, processing, and optimization has yielded substantial benefits for companies.",
    name: "Prof. Dr. Abul Kalam Azad",
    role: "ADG, Planning & Development & Director, MIS, Directorate General of Health Services",
    photo: "/assets/img/clients/azad.jpg",
  },
  {
    quote:
      "Devnet with ABBYY FlexiCapture, was willing to meet our individual needs, which ensured the success of the project QUICKFILL.",
    name: "Abu Shair",
    role: "Information Services Head, Linde Bangladesh Limited",
    photo: "/assets/img/clients/abushair.jpg",
  },
];

/**
 * Staggered, overlapping testimonial card stack. The center card is active;
 * side cards fan out and rotate. Click a side card, use the arrows, or the
 * dots to navigate — static until the user interacts.
 */
export function StaggerTestimonials({
  testimonials = realTestimonials,
}: {
  testimonials?: Testimonial[];
}) {
  const [active, setActive] = useState(0);

  const move = (steps: number) => {
    setActive((i) => (i + steps + testimonials.length) % testimonials.length);
  };

  return (
    <div className="stagger" role="region" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="stagger-stage">
        {testimonials.map((t, i) => {
          let offset = i - active;
          const n = testimonials.length;
          const half = n / 2;
          if (offset > half) offset -= n;
          if (offset < -half) offset += n;

          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          return (
            <button
              key={t.name}
              type="button"
              className={`stagger-card ${isCenter ? "is-center" : ""}`}
              style={
                {
                  "--offset": offset,
                  "--abs-offset": Math.abs(offset),
                  zIndex: isCenter ? 5 : 4 - Math.abs(offset),
                  opacity: isVisible ? undefined : 0,
                  pointerEvents: isVisible ? undefined : "none",
                } as React.CSSProperties
              }
              aria-hidden={!isVisible}
              onClick={() => !isCenter && setActive(i)}
              aria-current={isCenter}
              aria-label={isCenter ? undefined : `Show testimonial from ${t.name}`}
              tabIndex={isCenter && isVisible ? -1 : isVisible ? 0 : -1}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="stagger-photo"
                src={t.photo}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <p className="stagger-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="stagger-who">
                <div className="stagger-name">{t.name}</div>
                <div className="stagger-role">{t.role}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="stagger-ctrl">
        <button
          className="t-btn"
          onClick={() => move(-1)}
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="t-dots" role="tablist" aria-label="Testimonials">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              className={`t-dot ${i === active ? "on" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              role="tab"
              aria-selected={i === active}
            />
          ))}
        </div>
        <button
          className="t-btn"
          onClick={() => move(1)}
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
