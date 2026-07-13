# Devnet Limited — Premium Website Redesign
Concept redesign of devnetlimited.com · prepared July 2026

## Quick start
This is a [Next.js](https://nextjs.org) (App Router, TypeScript) project.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Fonts (Archivo, Inter, IBM Plex Mono) are self-hosted at build time via `next/font/google`, and GSAP + ScrollTrigger are bundled as npm dependencies — so the site needs no runtime CDN access.

## Site structure
Beyond the animated homepage, the site has full product/service pages driven by a
single content source (`data/site-content.ts`, adapted from devnetlimited.com):

- `/` — animated homepage
- `/products`, `/services` — catalog pages
- `/<slug>` — 23 product & service detail pages (e.g. `/docudex-edms`, `/rpa`,
  `/digital-archiving`), generated statically from the content data
- `/about` — vision, mission, leadership, team, certifications
- `/contact` — contact form (posts to `/api/contact`)
- `/api/contact`, `/api/newsletter` — form handlers. The contact route runs in
  "demo mode" (logs and validates) unless `RESEND_API_KEY` is set; see `.env.example`.

## Folder structure
```
app/
  layout.tsx                   Root layout — fonts + metadata
  page.tsx                     The full homepage (markup + client-side animations)
  globals.css                  All styles (design tokens + components + interior pages)
  [slug]/page.tsx              Product/service detail pages (generateStaticParams)
  products/, services/         Catalog pages
  about/, contact/             Company pages
  api/contact/, api/newsletter/  Form handler routes
components/                    SiteNav, SiteFooter, SolutionPage, ContactForm, NewsletterForm, Icon
data/site-content.ts          All company content (products, services, testimonials, contacts)
next.config.mjs                Next.js config
public/assets/
  img/
    hero-poster.jpg            Hero poster frame (shows while hero video loads)
    scanner-macro.jpg          Bento — Document Management card
    workflow-approval.jpg      Bento — Process Automation card
    capture-analysis.jpg       Bento — Capture Software card
    records-vault.jpg          Bento — Record Management card
    scanner-hardware.jpg       Bento — Document Scanners card
    data-center.jpg            Bento — AI & Machine Learning card
    heritage-map.jpg           Milestone — 213K mouza maps
    banking-operations.jpg     Milestone — 10+ banks
    library-digitization.jpg   Milestone — National Library
    team-devnet.jpg            About / values section
    dhaka-skyline.jpg          Mission band poster frame
    hero-loop.webp             Animated fallback for the hero video (auto-used if video can't play)
    skyline-loop.webp          Animated fallback for the mission-band video
  video/
    docudex-film-15s.mp4       15s brand film (hero background: warehouse → scan-to-cloud → search payoff)
    dhaka-timelapse.mp4        8s Dhaka skyline timelapse (mission band background)
extras/
  alternate-dark.html          Earlier dark concept (self-contained, no local assets needed)
  alternate-light.html         Earlier light & airy concept (self-contained)
```

## Design system
| Token | Value | Use |
|---|---|---|
| Ink | `#05110b` | Dark canvas, footer, text on light |
| Ink-2 | `#0b1f14` | DocuDEX section background |
| Paper | `#fbfdfb` | Light section background |
| Brand green | `#16a34a` | Accents, gradients |
| Deep green | `#0e7a36` | Buttons on light, links |
| Hot green | `#2ee86c` | Accents on dark, highlights |
| Red accent | `#e5484d` | Logo dot only (heritage nod) |

Typography: **Archivo** for display headings (700/800, tight tracking), **Inter** for body/UI, **IBM Plex Mono** for micro-labels and eyebrows.

## Behaviour notes for developers
- **Background videos** (`.hero-img`, `.band-img`): `<video autoplay muted loop playsinline>` with a poster. A small script at the bottom of `index.html` tries `video.play()`; if playback is rejected (strict autoplay policies, sandboxed embeds) or no data arrives within ~2.6s, it swaps the element for the animated `.webp` fallback so the motion always shows. Users with `prefers-reduced-motion` get the static poster instead. On a normal production domain the MP4s will simply play — keep them as the primary format.
- **Animations**: GSAP ScrollTrigger drives line-mask heading reveals, card reveals, counters, parallax and the CTA underline draw. Everything degrades gracefully without JS, and `prefers-reduced-motion` disables animation.
- **Counters**: `data-count` attributes on `.count` spans (70 → "70" + unit em suffix in markup).
- **Nav**: transparent over hero → dark glass after 40px scroll; hides on scroll-down, returns on scroll-up. Mobile menu is a full-screen overlay.
- **All content** (stats, milestones, testimonials, partners, contact details) was taken from the live devnetlimited.com — verify figures before production launch.

## Contact block (as published on current site)
Level-9 (East), BDBL Bhaban, 12 Kawran Bazar, Dhaka-1215, Bangladesh
+8802 55013964 · +8802 55013965 · +880 1713-044055 · info@devnetlimited.com
