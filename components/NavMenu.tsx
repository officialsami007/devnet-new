"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Icon } from "./Icon";
import {
  docudexCoreSlugs,
  docudexExtendedSlugs,
  getContentPage,
  servicePages,
} from "@/data/site-content";

const iconBySlug: Record<string, string> = {
  "capture-software": "scan",
  "docudex-edms": "layers",
  "docudex-workflow": "workflow",
  "record-management": "archive",
  "invoice-processing": "wallet",
  "agile-audit": "check",
  hrms: "users",
  "e-kyc-and-cim-solution": "fingerprint",
  "land-management-solution": "map",
  "library-management": "book",
  "online-proctoring": "video",
  rpa: "bot",
  "document-scanner": "scanner",
  "robotic-scanner": "factory",
  "book-map-scanner": "book",
  "microfilm-scanners": "film",
  "digital-archiving": "cloud",
  "application-development": "code",
  "mobile-app-development": "devices",
  "data-processing": "database",
  bpo: "headset",
  "banking-solution": "bank",
  "ai-and-machine-learning": "brain",
};

const navBlurb: Record<string, string> = {
  "capture-software": "Scan & digitize",
  "docudex-edms": "Manage & search",
  "docudex-workflow": "Automate approvals",
  "record-management": "Secure storage",
  "invoice-processing": "AP/AR automation",
  "agile-audit": "Audit & compliance",
  hrms: "People operations",
  "e-kyc-and-cim-solution": "Identity & KYC",
  "land-management-solution": "Land records & GIS",
  "library-management": "Library automation",
  "online-proctoring": "Remote assessment",
  rpa: "Software robots",
  "document-scanner": "Desktop & production",
  "robotic-scanner": "Automated capture",
  "book-map-scanner": "Large-format capture",
  "microfilm-scanners": "Archival digitization",
  "digital-archiving": "Scan & preserve",
  "application-development": "Custom platforms",
  "mobile-app-development": "iOS & Android",
  "data-processing": "Structured data",
  bpo: "Managed operations",
  "banking-solution": "Financial workflows",
  "ai-and-machine-learning": "Applied intelligence",
};

const productGroups = [
  { title: "The DocuDEX platform", slugs: docudexCoreSlugs },
  { title: "Business solutions", slugs: docudexExtendedSlugs },
  {
    title: "Scanning hardware",
    slugs: [
      "document-scanner",
      "robotic-scanner",
      "book-map-scanner",
      "microfilm-scanners",
    ],
  },
];

const serviceGroup = {
  title: "Services",
  slugs: servicePages.map((p) => p.slug),
};

type MenuKey = "products" | "services";

/**
 * Shared mega-menu for Products and Services, rendered inside both the
 * homepage's inline nav and the interior-page SiteNav. A pill slides behind
 * whichever top-level item is hovered/open; the dropdown panel is a compact
 * dark card with icon-tile items (label + one-line description).
 */
export function NavMenu({ className = "" }: { className?: string }) {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [hoverPill, setHoverPill] = useState<{ left: number; width: number } | null>(
    null
  );
  const [panelLeft, setPanelLeft] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const trackPill = (el: HTMLElement | null) => {
    if (!el || !listRef.current) {
      setHoverPill(null);
      return;
    }
    const listRect = listRef.current.getBoundingClientRect();
    const itemRect = el.getBoundingClientRect();
    setHoverPill({
      left: itemRect.left - listRect.left,
      width: itemRect.width,
    });
  };

  const panelWidth = { products: 860, services: 300 };

  const computePanelLeft = (menu: MenuKey, el: HTMLElement) => {
    if (!listRef.current) return 0;
    const listRect = listRef.current.getBoundingClientRect();
    const itemRect = el.getBoundingClientRect();
    const rawLeft = itemRect.left - listRect.left;
    // Clamp against the nav's own content edges (.nav-in), not the raw
    // viewport, since the nav bar has its own inset padding. Allow the
    // panel to shift left of the trigger (even negative) when there isn't
    // enough room to the right — it just needs to stay inside .nav-in.
    const navIn = listRef.current.closest(".nav-in") as HTMLElement | null;
    const navInRect = navIn?.getBoundingClientRect();
    const boundaryLeft = navInRect ? navInRect.left - listRect.left : 0;
    const boundaryRight = navInRect
      ? navInRect.right - listRect.left - panelWidth[menu]
      : window.innerWidth - 24 - listRect.left - panelWidth[menu];
    return Math.max(boundaryLeft, Math.min(rawLeft, boundaryRight));
  };

  const open = (menu: MenuKey, el: HTMLElement) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
    trackPill(el);
    setPanelLeft(computePanelLeft(menu, el));
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setHoverPill(null);
    }, 140);
  };

  const toggle = (menu: MenuKey, el: HTMLElement) => {
    setOpenMenu((m) => {
      const next = m === menu ? null : menu;
      if (next) {
        trackPill(el);
        setPanelLeft(computePanelLeft(menu, el));
      }
      return next;
    });
  };

  const renderGroup = (group: { title: string; slugs: string[] }) => (
    <div className="nmg-col" key={group.title}>
      <span className="nmg-label">{group.title}</span>
      <ul className="nmg-items">
        {group.slugs.map((slug) => {
          const page = getContentPage(slug);
          if (!page) return null;
          return (
            <li key={slug}>
              <Link
                className="nmg-item"
                href={`/${slug}`}
                onClick={() => setOpenMenu(null)}
              >
                <span className="nmg-item-ico">
                  <Icon name={iconBySlug[slug] || "file"} />
                </span>
                <span>
                  <span className="nmg-item-label">{page.navTitle}</span>
                  <span className="nmg-item-desc">
                    {navBlurb[slug] || page.subtitle}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="nav-menu-wrap">
      <ul className={`nav-links ${className}`} ref={listRef}>
        <li
          className="nav-drop"
          onMouseEnter={(e) => open("products", e.currentTarget)}
          onMouseLeave={scheduleClose}
        >
          <button
            className={`nav-drop-trigger ${openMenu === "products" ? "on" : ""}`}
            aria-expanded={openMenu === "products"}
            onClick={(e) => toggle("products", e.currentTarget)}
          >
            Products
            <Icon name="chevron" className="nav-drop-chev" />
          </button>
        </li>
        <li>
          <Link
            href="/docudex"
            onMouseEnter={(e) => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
              setOpenMenu(null);
              trackPill(e.currentTarget);
            }}
            onMouseLeave={() => setHoverPill(null)}
          >
            DocuDEX
          </Link>
        </li>
        <li
          className="nav-drop"
          onMouseEnter={(e) => open("services", e.currentTarget)}
          onMouseLeave={scheduleClose}
        >
          <button
            className={`nav-drop-trigger ${openMenu === "services" ? "on" : ""}`}
            aria-expanded={openMenu === "services"}
            onClick={(e) => toggle("services", e.currentTarget)}
          >
            Services
            <Icon name="chevron" className="nav-drop-chev" />
          </button>
        </li>
        <li>
          <Link
            href="/about"
            onMouseEnter={(e) => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
              setOpenMenu(null);
              trackPill(e.currentTarget);
            }}
            onMouseLeave={() => setHoverPill(null)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onMouseEnter={(e) => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
              setOpenMenu(null);
              trackPill(e.currentTarget);
            }}
            onMouseLeave={() => setHoverPill(null)}
          >
            Contact
          </Link>
        </li>
        <span
          className="nav-pill"
          style={
            hoverPill
              ? {
                  opacity: 1,
                  transform: `translateX(${hoverPill.left}px)`,
                  width: hoverPill.width,
                }
              : { opacity: 0 }
          }
          aria-hidden="true"
        />
      </ul>

      <div
        className={`nav-mega ${openMenu ? "open" : ""}`}
        role="menu"
        style={{ left: panelLeft }}
        onMouseEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
        onMouseLeave={scheduleClose}
      >
        {openMenu === "products" && (
          <div className="nmg-in nmg-products">
            {productGroups.map(renderGroup)}
            <div className="nmg-col nmg-feature">
              <span className="nmg-label">Flagship</span>
              <Link
                className="nmg-feature-card"
                href="/docudex"
                onClick={() => setOpenMenu(null)}
              >
                <span className="nmg-feature-tag">DocuDEX Platform</span>
                <b>One platform, every document.</b>
                <span className="nmg-feature-go">
                  Explore the platform <span className="ar">→</span>
                </span>
              </Link>
              <Link
                className="nmg-viewall"
                href="/products"
                onClick={() => setOpenMenu(null)}
              >
                View all products <span className="ar">→</span>
              </Link>
            </div>
          </div>
        )}
        {openMenu === "services" && (
          <div className="nmg-in nmg-services">{renderGroup(serviceGroup)}</div>
        )}
      </div>
    </div>
  );
}
