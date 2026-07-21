"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type OrbitalNode = {
  id: number;
  title: string;
  tag: string;
  desc: string;
  icon: string;
  href: string;
  status: "core" | "live" | "growing";
  energy: number;
  relatedIds: number[];
};

const nodes: OrbitalNode[] = [
  {
    id: 1,
    title: "Document Management",
    tag: "Flagship · DocuDEX EDMS",
    desc: "Capture, manage, store and search valuable documents with speed and total control — the EDMS trusted across government and enterprise.",
    icon: "layers",
    href: "/docudex-edms",
    status: "core",
    energy: 100,
    relatedIds: [2, 3],
  },
  {
    id: 2,
    title: "Process Automation",
    tag: "DocuDEX Workflow",
    desc: "Official activities routed automatically — approvals move in hours, not weeks.",
    icon: "workflow",
    href: "/docudex-workflow",
    status: "live",
    energy: 85,
    relatedIds: [1, 6],
  },
  {
    id: 3,
    title: "Capture Software",
    tag: "Content Intelligence",
    desc: "Scanned paper becomes structured, data-driven insight for sharper decisions.",
    icon: "scan",
    href: "/capture-software",
    status: "live",
    energy: 80,
    relatedIds: [1, 5],
  },
  {
    id: 4,
    title: "Record Management",
    tag: "Secure · Onsite & Offsite",
    desc: "Move your business records offsite — secure, compliant storage and management for both electronic and hard-copy archives.",
    icon: "archive",
    href: "/record-management",
    status: "live",
    energy: 70,
    relatedIds: [1],
  },
  {
    id: 5,
    title: "Document Scanners",
    tag: "Robotic · Book & Map · Microfilm",
    desc: "High-volume hardware that minimises downtime and keeps work flowing.",
    icon: "scanner",
    href: "/document-scanner",
    status: "live",
    energy: 75,
    relatedIds: [3],
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    tag: "ICR · OCR · RPA",
    desc: "Documents read, classified and routed automatically — the intelligence behind paperless.",
    icon: "brain",
    href: "/ai-and-machine-learning",
    status: "growing",
    energy: 60,
    relatedIds: [2],
  },
];

const statusLabel: Record<OrbitalNode["status"], string> = {
  core: "FLAGSHIP",
  live: "LIVE",
  growing: "EXPANDING",
};

export function OrbitalProducts() {
  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [radius, setRadius] = useState(190);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) setAutoRotate(false);
  }, []);

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      setRadius(w <= 640 ? 115 : w <= 1080 ? 150 : 190);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    if (!autoRotate) return;
    const id = setInterval(() => {
      setRotation((r) => Number(((r + 0.2) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(id);
  }, [autoRotate]);

  const toggle = (id: number) => {
    setActiveId((cur) => {
      const next = cur === id ? null : id;
      setAutoRotate(!next);
      return next;
    });
  };

  const relatedOf = (id: number) => nodes.find((n) => n.id === id)?.relatedIds ?? [];
  const isRelated = (id: number) => activeId !== null && relatedOf(activeId).includes(id);

  const activeNode = nodes.find((n) => n.id === activeId) ?? null;

  return (
    <div
      className="orbital"
      ref={stageRef}
      onClick={(e) => {
        if (e.target === stageRef.current) {
          setActiveId(null);
          setAutoRotate(true);
        }
      }}
    >
      <div className="orbital-stage">
        <div className="orbital-ring" aria-hidden="true"></div>
        <div className="orbital-core">
          <span className="orbital-core-ping" aria-hidden="true"></span>
          <span className="orbital-core-ping delay" aria-hidden="true"></span>
          <span className="orbital-core-dot">DX</span>
        </div>

        {nodes.map((node, i) => {
          const angle = ((i / nodes.length) * 360 + rotation) % 360;
          const radian = (angle * Math.PI) / 180;
          const x = radius * Math.cos(radian);
          const y = radius * Math.sin(radian);
          const active = activeId === node.id;
          const related = isRelated(node.id);

          return (
            <div
              key={node.id}
              className={`orbital-node ${active ? "is-active" : ""} ${
                related ? "is-related" : ""
              }`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                zIndex: active ? 40 : Math.round(20 + 10 * Math.cos(radian)),
              }}
            >
              <button
                type="button"
                className="orbital-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(node.id);
                }}
                aria-expanded={active}
                aria-label={node.title}
              >
                <Icon name={node.icon} />
              </button>
              <span className="orbital-label">{node.title}</span>
            </div>
          );
        })}
      </div>

      <div className={`orbital-card ${activeNode ? "open" : ""}`}>
        {activeNode && (
          <>
            <div className="oc-head">
              <span className={`oc-status oc-${activeNode.status}`}>
                {statusLabel[activeNode.status]}
              </span>
              <button
                type="button"
                className="oc-close"
                onClick={() => {
                  setActiveId(null);
                  setAutoRotate(true);
                }}
                aria-label="Close"
              >
                <Icon name="chevron" style={{ transform: "rotate(90deg)" }} />
              </button>
            </div>
            <span className="oc-tag">{activeNode.tag}</span>
            <h3>{activeNode.title}</h3>
            <p>{activeNode.desc}</p>
            <div className="oc-energy">
              <div className="oc-energy-row">
                <span>Adoption</span>
                <span>{activeNode.energy}%</span>
              </div>
              <div className="oc-energy-bar">
                <div
                  className="oc-energy-fill"
                  style={{ width: `${activeNode.energy}%` }}
                ></div>
              </div>
            </div>
            <a className="oc-go" href={activeNode.href}>
              Explore {activeNode.title} <span className="ar">→</span>
            </a>
          </>
        )}
        {!activeNode && (
          <div className="oc-empty">
            <span className="oc-tag">The Devnet platform</span>
            <h3>One platform, every document.</h3>
            <p>
              Select any node to see how it fits into the DocuDEX ecosystem —
              capture, manage, automate, store and scale, all built to the
              same engineering standard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
