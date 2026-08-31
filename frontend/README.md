<<<<<<< HEAD
# Ajit Wadikar — Portfolio

A premium, responsive MERN developer portfolio built with React, React Router and Tailwind CSS — glassmorphism UI, gradient accents, floating blobs, scroll-reveal animations and route-based lazy loading.

## ✨ What's inside

- **Home** — Hero, featured projects, about preview, experience
- **About** — Bio, education, categorized skills (Frontend / Backend / Tools)
- **Projects** — Card grid, HRMS featured first
- **Contact** — Glassmorphic form (EmailJS)

## 🧱 Project structure

```
src/
  components/
    layout/     → Navbar, Footer, ScrollToTop
    sections/   → Hero, About, Experience, Projects, Contact
    ui/         → Reusable pieces: Button, SectionHeading, ProjectCard,
                  FloatingBlobs, Reveal, PageLoader
  pages/        → Route-level pages (lazy loaded)
  data/         → projects.js, skills.js, experience.js, education.js
  hooks/        → useReveal.js (scroll-reveal IntersectionObserver hook)
```

To edit content (projects, skills, experience), you only need to touch files in `src/data/` — the UI updates automatically.

## ⚠️ Before you publish — add your HRMS link

Open `src/data/projects.js` and set your GitHub repo / live demo URL:

```js
export const HRMS_LINK = "#"; // 👉 replace "#" with your link
```

## 🚀 Run locally

```bash
npm install
npm run dev
```

## 📦 Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## 🌐 Deploy to GitHub Pages

```bash
npm run deploy
```

This publishes the `dist/` folder to the `gh-pages` branch (already configured via `homepage` + `gh-pages` in `package.json`). Your live link will be:

```
https://Ajuu07.github.io/my-Portfolio
```

Use that link on your LinkedIn profile and Naukri.com résumé.

## 🖼️ Optional: social preview image

`index.html` references `preview.jpg` for LinkedIn/Twitter link previews. Drop a 1200×630 screenshot of your homepage at `public/preview.jpg` for a nicer share card (optional).
=======
# Newportfolio
>>>>>>> 0dc37c33f7825a24606cae22911561df9ee5b0ce
