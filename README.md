# West Elinor Technologies

[![Next.js](https://img.shields.io/badge/Next.js-16.2.7-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A high-performance enterprise landing page and corporate web application built for **West Elinor Technologies** — a global technology partner specializing in custom Learning Management Systems (LMS), enterprise web applications, mobile applications, and intelligent digital transformation solutions.

---

## 🌟 Key Features

- **⚡ Next.js 16 App Router & React 19:** Powered by the latest Turbopack bundler for lightning-fast server-side rendering and static optimization.
- **🎨 Tailwind CSS v4 & Glassmorphism Design:** Modern UI styling with neon cyan/teal accents, glowing radial gradients, frosted glass cards, and smooth hover elevation effects.
- **🌓 Dark & Light Mode Theme Support:** Seamless theme switching with `next-themes` that defaults to dark mode while respecting system preferences and eliminating flash-on-load.
- **✨ Scroll-Triggered Animations:** Lightweight intersection observer animations (`useScrollReveal`, `useCounterAnimation`) delivering smooth reveal transitions and dynamic number counting metrics.
- **📱 Fully Responsive & Mobile Optimized:** Fluid layouts engineered mobile-first with adaptive navigation drawers, flexible grids, and accessible interactive states.
- **📩 Interactive Contact Workflow:** Comprehensive inquiry submission form with real-time feedback states, loading spinners, and multi-service selection.
- **🌐 Global Presence & Portfolio Showcase:** Showcase sections highlighting global enterprise engagements across 10+ countries, LMS ecosystems, and supply chain hubs.
- **🚀 SEO & Metadata Configured:** Pre-configured OpenGraph cards, Twitter cards, Google Bot indexing tags, and font preconnections (`Hanken Grotesk` & `Inter`).

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Typography** | Hanken Grotesk & Inter via Google Fonts |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode) |

---

## 📁 Project Structure

```text
west-elinor/
├── app/
│   ├── favicon.ico             # Brand favicon
│   ├── globals.css             # Design tokens, CSS variables, animation utilities
│   ├── layout.tsx              # Root HTML shell, fonts preconnect, SEO metadata
│   └── page.tsx                # Main single-page application composition
├── components/
│   ├── ContactSection.tsx      # Global office locations & interactive inquiry form
│   ├── Footer.tsx              # Brand footer with navigation and legal links
│   ├── Header.tsx              # Fixed blur navbar with active section indicators & mobile drawer
│   ├── HeroSection.tsx         # Hero banner with floating dashboard graphic & CTAs
│   ├── PortfolioSection.tsx    # Case study highlight cards with gradient overlays
│   ├── ScrollRevealInit.tsx    # Client-side observer mounting component
│   ├── ServicesSection.tsx     # Core services showcase with glassmorphism cards
│   ├── TechStack.tsx           # Interactive technology badge grid
│   ├── ThemeProvider.tsx       # next-themes context provider wrapper
│   ├── ThemeToggle.tsx         # Sun/Moon light-dark mode toggle button
│   ├── TrustBar.tsx            # Animated metric counters (Projects, Clients, Countries)
│   └── WhyChooseUs.tsx         # Value propositions split-view layout
├── lib/
│   ├── useCounterAnimation.ts  # Eased counter animation hook for statistics
│   └── useScrollReveal.ts      # IntersectionObserver hook for viewport reveals
├── public/                     # Static assets and SVG icons
├── next.config.ts              # Next.js configuration and remote image patterns
├── package.json                # Project dependencies and script commands
├── tsconfig.json               # TypeScript strict compiler configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### 1. Clone the Repository

```bash
git clone https://github.com/namanraid65/westelinor.git
cd westelinor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm run start
```

---

## 🧪 Scripts Reference

| Script | Command | Description |
|---|---|---|
| `dev` | `next dev` | Launches local development server with hot-reloading |
| `build` | `next build` | Compiles optimized static & dynamic production bundles |
| `start` | `next start` | Starts the production server |
| `lint` | `eslint` | Runs ESLint to check for code quality and style issues |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
