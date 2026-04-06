# Orkyn — Next.js Website

A production-ready Next.js 14 website for Orkyn Technologies, built with:

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **shadcn/ui** components
- **TypeScript**
- **Lucide React** icons
- **Syne + DM Sans** fonts (Google Fonts)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
orkyn/
├── app/
│   ├── globals.css        # Global styles + CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page — assembles all sections
├── components/
│   ├── ui/                # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   ├── Navbar.tsx         # Sticky top nav with mobile drawer
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Three service pillars
│   ├── Transformation.tsx # Before / After comparison
│   ├── WhyOrkyn.tsx       # Six value pillars grid
│   ├── Process.tsx        # Three-step process
│   ├── Impact.tsx         # Four impact metrics
│   ├── CtaBanner.tsx      # Mid-page call-to-action banner
│   ├── Contact.tsx        # Contact form + office details
│   └── Footer.tsx         # Footer with nav + socials
├── lib/
│   └── utils.ts           # cn() helper
├── components.json        # shadcn/ui config
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Customisation

### Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --accent: #F5A623;   /* Brand orange */
  --foreground: #0a0a0a;
  --background: #ffffff;
}
```

### Fonts
Google Fonts (Syne + DM Sans) are loaded in `globals.css`. To change them, update the `@import` URL and the `font-family` references in `tailwind.config.ts`.

### Content
All section content is defined as plain arrays at the top of each component file — easy to edit without touching JSX.

---

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or push to GitHub and connect the repo to Vercel for automatic deployments.
