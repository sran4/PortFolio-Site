## Sran's Portfolio Website

Modern, responsive portfolio built with React, Vite, and Tailwind CSS. It showcases projects, skills, and contact information with smooth interactions and a clean aesthetic.

### Tech Stack

- React 18 (Vite)
- Tailwind CSS 3
- Framer Motion (animations)
- Embla Carousel (projects slider)
- React Scroll (smooth in-page navigation)
- React Icons (iconography)
- EmailJS (contact form email delivery)

### Useful Features

- Dark/Light mode with persistent toggle (class-based Tailwind dark mode)
- Smooth scroll navigation and active link styles in the navbar
- Responsive hero with floating tech icons and animated stats
- Projects carousel with touch/drag support
- Technical Proficiency tabs to filter skills
- Contact form with:
  - EmailJS integration (no backend required)
  - Honeypot field and minimum submit time to mitigate spam
- Performance-friendly Vite dev/build tooling
- Automatic image optimization (AVIF/WebP) with PNG fallback

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

### Image Optimization

Project screenshots under `src/assets/projectsImgs` are automatically converted to AVIF and WebP using `sharp`.

- Convert (or reconvert) images:
  ```bash
  npm run images:convert
  ```
- Components load images via a `<picture>` element to prefer AVIF/WebP with PNG fallback. No import changes needed—just drop PNGs in the folder; the script generates matching `.webp` and `.avif` files.

### Build Optimizations

- Vendor splitting for `react`/`react-dom` to improve browser caching.
- CSS code splitting, no sourcemaps in prod, and modern target (`es2019`).
- Lazy loading and async decoding for project images.

### Deploy

- Output directory: `dist/`
- Common hosts:
  - Vercel: Import the repo; framework preset: Vite. Output: `dist`.
  - Netlify: Build command `npm run build`, publish directory `dist`.
  - GitHub Pages: `npm run build` then push `dist` to `gh-pages` branch (or use CI action).

### Configuration

- Tailwind dark mode uses the `class` strategy; a `dark` class is toggled on `html`.
- EmailJS requires your Service ID, Template ID, and Public Key. See `src/sections/ContactMe.jsx` and your EmailJS dashboard.

### Project Structure (key files)

- `src/components/Navbar.jsx` – navbar, theme toggle, hire-me link
- `src/sections/Hero.jsx` – hero section and stats
- `src/sections/TechnicalProficiency.jsx` – skills tabs and cards
- `src/sections/MyProjects.jsx` – projects slider
- `src/sections/ContactMe.jsx` – contact form and anti-spam
- `src/index.css` – Tailwind layers and custom utilities
- `tailwind.config.js` – Tailwind configuration

### License

Personal/portfolio use. For other usage, please contact the author.
