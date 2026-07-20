import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { name?: string };

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export function Icon({ name = "spark", ...props }: IconProps) {
  const body = (() => {
    switch (name) {
      case "users": return <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>;
      case "file": return <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></>;
      case "bolt": return <path d="M13 2 3 14h9l-1 8 10-12h-9z"/>;
      case "chart": return <><path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/></>;
      case "globe": return <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></>;
      case "scan": return <><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10M8 8h8M8 16h8"/></>;
      case "search": return <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>;
      case "workflow": return <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h4a3 3 0 0 1 3 3v6M15 18h-4a3 3 0 0 1-3-3V9"/></>;
      case "shield": return <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></>;
      case "bot": return <><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8"/></>;
      case "bank": return <><path d="m3 10 9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18"/></>;
      case "card": return <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></>;
      case "layers": return <><path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>;
      case "settings": return <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 9 19.36a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.64 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3.08V3h4v.08A1.7 1.7 0 0 0 15 4.64a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9 1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15z"/></>;
      case "link": return <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>;
      case "archive": return <><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/></>;
      case "trash": return <><path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v6M14 11v6"/></>;
      case "clock": return <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>;
      case "truck": return <><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>;
      case "database": return <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></>;
      case "eye": return <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12"/><circle cx="12" cy="12" r="3"/></>;
      case "pulse": return <path d="M3 12h4l2-6 4 12 2-6h6"/>;
      case "map": return <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></>;
      case "message": return <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/></>;
      case "alert": return <><path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></>;
      case "wallet": return <><path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10H5a3 3 0 0 1-3-3V6"/><path d="M16 13h2"/></>;
      case "book": return <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 5.5v14A2.5 2.5 0 0 0 6.5 22H20"/></>;
      case "person": return <><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></>;
      case "check": return <><circle cx="12" cy="12" r="10"/><path d="m7.5 12 3 3 6-6"/></>;
      case "video": return <><rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-2v8l-4-2z"/></>;
      case "bell": return <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>;
      case "barcode": return <path d="M3 5v14M7 5v14M10 5v14M14 5v14M18 5v14M21 5v14"/>;
      case "signal": return <><path d="M5 12.55a11 11 0 0 1 14.08 0M8.5 16a6 6 0 0 1 7 0M12 20h.01"/></>;
      case "fingerprint": return <><path d="M12 11a2 2 0 0 0-2 2c0 3-1 5-2 6M15 13a3 3 0 0 0-6 0M18 13a6 6 0 0 0-12 0c0 3-1 5-2 7M15 16c-.2 2-.7 4-1.5 5.5M18 16c-.2 1.8-.7 3.5-1.3 5M21 13a9 9 0 0 0-18 0"/></>;
      case "leaf": return <><path d="M20 4s-7 0-11 4-4 11-4 11 7 0 11-4 4-11 4-11z"/><path d="M5 19c3-6 7-8 15-15"/></>;
      case "scale": return <><path d="M12 3v18M5 7h14M5 7l-3 6h6zM19 7l-3 6h6zM8 21h8"/></>;
      case "scanner": return <><rect x="3" y="11" width="18" height="9" rx="2"/><path d="M6 11 8 3h8l2 8M7 15h.01M10 16h7"/></>;
      case "factory": return <><path d="M3 21V9l6 3V9l6 3V5h6v16z"/><path d="M7 17h2M12 17h2M17 17h2"/></>;
      case "film": return <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 8h4M3 16h4M17 8h4M17 16h4"/></>;
      case "building": return <><path d="M3 21h18M5 21V4h9v17M14 9h5v12M8 8h3M8 12h3M8 16h3M17 13h1M17 17h1"/></>;
      case "tag": return <><path d="M20.6 13.6 11 23l-9-9V4h10z"/><circle cx="7" cy="9" r="1.5"/></>;
      case "cloud": return <path d="M17.5 19H6a4 4 0 1 1 .7-7.94A6 6 0 0 1 18.2 9.2 5 5 0 0 1 17.5 19z"/>;
      case "news": return <><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5"/></>;
      case "code": return <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>;
      case "devices": return <><rect x="2" y="4" width="14" height="11" rx="2"/><path d="M7 20h4M9 15v5"/><rect x="17" y="8" width="5" height="11" rx="1"/></>;
      case "target": return <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>;
      case "design": return <><path d="m12 19 7-7 3 3-7 7-3-3zM18 6l-2-2-9 9-1 4 4-1z"/></>;
      case "rocket": return <><path d="M4.5 16.5c-1.5 1.2-2 4-2 4s2.8-.5 4-2M9 15l-3-3s2-4 5-7c3-3 7-3 9-3 0 2 0 6-3 9-3 3-7 5-7 5z"/><circle cx="15" cy="7" r="1.5"/></>;
      case "keyboard": return <><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/></>;
      case "headset": return <><path d="M4 14v-2a8 8 0 0 1 16 0v2M18 19h-2v-6h4v4a4 4 0 0 1-4 4h-2M4 13h4v6H6a2 2 0 0 1-2-2z"/></>;
      case "brain": return <><path d="M9.5 4.5A3 3 0 0 0 4 6v1a3 3 0 0 0-1 5.5A3.5 3.5 0 0 0 6.5 18H9M14.5 4.5A3 3 0 0 1 20 6v1a3 3 0 0 1 1 5.5A3.5 3.5 0 0 1 17.5 18H15M12 3v18M9 9h3M12 15h3"/></>;
      case "facebook": return <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4v-2a1 1 0 0 1 1-1z" fill="currentColor" stroke="none"/>;
      case "linkedin": return <><rect x="3" y="9" width="4" height="12" fill="currentColor" stroke="none"/><circle cx="5" cy="4.5" r="2.3" fill="currentColor" stroke="none"/><path d="M11 9h4v2c.7-1.3 2-2.3 4-2.3 3 0 5 2 5 5.7V21h-4v-6c0-1.7-.6-2.8-2.2-2.8-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1V21h-4z" fill="currentColor" stroke="none"/></>;
      case "whatsapp": return <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.6.1-.7.8-.9 1-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.5-1.3.1-.1.1-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1s-.2-.2-.5-.3z" fill="currentColor" stroke="none"/>;
      case "chevron": return <path d="m6 9 6 6 6-6"/>;
      default: return <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/></>;
    }
  })();

  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}>{body}</svg>;
}
