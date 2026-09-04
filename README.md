# Developer Portfolio — Supawith Jangtrakul

A modern, single-page developer portfolio showcasing my projects, skills, and
experience. Built with a focus on a clean, distinctive UI (purple / black /
white theme), smooth scroll-based interactions, and a fully responsive layout.

**Live:** https://supawith-portfolio.vercel.app/

---

## Tech Stack

**Core**
- React 19
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)

**Libraries**
- Framer Motion — scroll-reveal and entrance animations
- React Router DOM 7 — routing (home + 404)

**Tooling & Deployment**
- ESLint (flat config)
- Vercel

**Typography:** Unbounded (display) + Montserrat (body), self-hosted.

---

## Features

- **Hero** — positioning statement, "open to work" status pill, dual CTAs
  (view work / résumé), quick stats, and a social links rail.
- **About** — background and focus, with availability chips.
- **Projects** — a featured project spotlight (HotelHub) plus a
  category-filterable grid (All / Full-Stack / Frontend / Logic / Basics),
  filtered with React state.
- **Skills** — grouped by category: Frontend, Backend, Database,
  Tools & Cloud, and Design.
- **Journey** — an Experience / Education timeline with a toggle.
- **Testimonials** — a self-contained slider (React state, auto-advancing,
  no external slider library).
- **Contact** — `mailto:` action, résumé download, and profile links.
- **Navbar** — scroll-progress bar, active-section highlight via
  `IntersectionObserver` scroll-spy, and a mobile menu.
- **404 page** — custom error page for unknown routes.
- **SEO** — meta description plus Open Graph / Twitter Card tags for link
  previews.
- **Responsive** — verified on mobile, tablet, and desktop.

---

## Project Structure

```
src/
├── assets/fonts/           # Unbounded + Montserrat (self-hosted)
├── components/
│   ├── Navbar.jsx          # nav + scroll progress + scroll-spy + mobile menu
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx        # featured spotlight + filterable grid
│   ├── FeaturedProject.jsx
│   ├── ProjectCard.jsx
│   ├── Skills.jsx          # categorized skill groups
│   ├── Journey.jsx         # experience / education timeline
│   ├── Testimonial.jsx     # self-contained slider
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── pages/
│   ├── Homepage.jsx        # composes all sections
│   └── Error.jsx           # 404
├── lib/
│   ├── reveal.js           # shared Framer Motion reveal preset
│   └── data/               # projects, skills, experiences, educations,
│                           #   testimonials, footerYear
├── App.jsx
├── main.jsx                # router
└── index.css               # Tailwind v4 theme tokens + component styles
```

---

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# production build
npm run build

# preview the production build locally
npm run preview

# lint
npm run lint
```

---

## Deployment

Deployed on **Vercel**. Pushes to `main` trigger a production deploy;
pull requests get automatic preview deployments.

---

## Development Workflow

This project follows a structured Git workflow:

```
feature/* (or fix/*) → develop → main
```

Each change is developed on an isolated branch and merged via Pull Requests,
using Vercel preview deployments to validate UI and responsiveness before
release.

---

## Redesign Notes

The portfolio was rebuilt from an earlier version. Key changes:

- Redesigned every section with a new layout, refreshed hero, a featured
  project spotlight, categorized skills, and a reworked contact section.
- Replaced the Swiper-based project slider with a filterable grid.
- Replaced the marquee testimonial slider with a lightweight React slider.
- Replaced copy-to-clipboard email with a `mailto:` link.
- Removed the custom cursor and the unused `/tbc` route.
- Removed now-unused dependencies: `swiper`, `animejs`,
  `react-fast-marquee`, and `react-copy-to-clipboard`.
- Added SEO / social-preview meta tags.

---

## Author

Built and designed by **Supawith Jangtrakul** (Pann).

- Portfolio: https://supawith-portfolio.vercel.app/
- GitHub: https://github.com/Pannnomaly1337
- LinkedIn: https://www.linkedin.com/in/supawith-jangtrakul-8920173a4/