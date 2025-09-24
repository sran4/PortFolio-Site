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
