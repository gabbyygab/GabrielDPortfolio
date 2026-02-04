# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts Vite development server with HMR (Hot Module Replacement) at http://localhost:5173

### Building for Production
```bash
npm run build
```
Builds the application for production using Vite. Output is in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deploying.

### Linting
```bash
npm run lint
```
Runs ESLint on all JavaScript/JSX files to check for code quality issues.

## Tech Stack & Architecture

### Core Technologies
- **Framework**: React 19.2.0 (latest) with Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18 (configured via Vite plugin)
- **Build Tool**: Vite with `@vitejs/plugin-react` for Fast Refresh using Babel
- **Linting**: ESLint 9 with flat config system

### Project Structure
```
src/
├── main.jsx         # Application entry point, renders App into DOM
├── App.jsx          # Root component (currently default Vite template)
├── index.css        # Global styles (imports Tailwind)
├── App.css          # Component-specific styles
└── assets/          # Static assets (images, SVGs)
```

### Key Configuration Files
- **vite.config.js**: Vite configuration with React and Tailwind plugins
- **eslint.config.js**: Flat config format (ESLint 9+), ignores `dist/`, includes React Hooks rules
- **index.html**: Entry HTML file at project root (Vite convention)

### Tailwind CSS Setup
- Tailwind v4 uses Vite plugin (`@tailwindcss/vite`)
- Global styles imported in `src/index.css` via `@import 'tailwindcss';`
- No separate tailwind.config.js needed with v4 (configuration via CSS)

### ESLint Configuration Notes
- Uses flat config format (`defineConfig` from `eslint/config`)
- Configured for browser environment
- React Hooks plugin with recommended rules
- React Refresh plugin for Vite HMR
- Custom rule: allows unused variables starting with capital letters or underscores

---

## Portfolio Design Requirements

### Design Style
- **Theme**: Modern and Clean, Good UI using Front-end Design
- **Color Scheme**: Light/Dark theme with green as primary color
- **Visual Effects**: Subtle animations, smooth transitions, clean shadows, modern card designs

### Modern Green Color Palette
```
Primary Green: #10b981 (Emerald)
Secondary Green: #059669 (Dark Emerald)
Accent 1: #34d399 (Light Emerald)
Accent 2: #064e3b (Deep Green)
Background Light: #ffffff (White)
Background Dark: #111827 (Dark Gray)
Surface Light: #f3f4f6 (Light Gray)
Surface Dark: #1f2937 (Slate)
Text Primary: #111827 (Dark)
Text Secondary: #6b7280 (Gray)
```

### Portfolio Owner Information
- **Name**: John Gabriel M. Delicana
- **Status**: Aspiring Full-Stack Web Developer
- **Education**: BSIT, Major in Web and Mobile Development (Currently in College)
- **Academic Achievement**: Consistent Dean's Lister, GWA: 1.20-1.35, 5 semesters completed

### Technical Skills to Display
**Languages**: Java, JavaScript, PHP, C#, C++
**Frameworks**: React, Vue.js, Next.js, Laravel, HTML, CSS
**Specializations**: Mobile Development (iOS/Android), Unity/Game Development, AI Prompt Engineering

### Featured Projects
1. **Bulsu-E-Handbook** - Mobile Application
2. **BookingNest** - Booking Website
3. Two additional website projects (details TBD)

### Required Portfolio Sections
1. **Hero**: Eye-catching intro with modern animations, clean typography, subtle background effects, green-accented CTA buttons
2. **About**: Background, educational journey, academic excellence, career aspirations
3. **Skills**: Interactive cards with hover effects, categorized display, progress indicators with green accents
4. **Projects**: Grid/carousel layout, hover effects, links to demos/repos, green-themed technology tags
5. **Academic Achievements**: Dean's List recognition, GWA showcase (1.20-1.35), 5 semesters display
6. **Contact**: Social media links with modern icons, clean contact form with green accents, email/network links

### Key Features to Implement
- Smooth scroll navigation
- Subtle parallax effects
- Loading animations
- Light/Dark mode toggle
- Mobile-first responsive design
- Performance optimization
- SEO friendly structure
- Accessibility compliance

### Future Enhancements (Not Priority)
- Blog section for technical articles
- Testimonials
- Downloadable resume
- Interactive code snippets
- Detailed project case studies
