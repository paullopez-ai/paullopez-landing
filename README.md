# Paul Lopez - AI Research Landing Page

**Personal landing page showcasing my AI research and development work**

A modern, animated landing page built with Next.js 16 and React 19. This serves as my digital hub connecting to my blog, LinkedIn, and GitHub while showcasing my research areas in enterprise AI.

## Why I Built This

I needed a central presence online that reflects my work as a Principal Architect in AI Solutions & Delivery. Rather than use a template, I built this from scratch to:

- Experiment with the latest React 19 and Next.js 16 features
- Explore modern animation libraries (Motion, Motion Primitives)
- Practice what I preach about hands-on AI development as this was created using Cursor and Claude Code
- Create a foundation for future interactive AI demos

## Technical Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.0 (Turbopack) |
| **UI** | React 19.2.3, TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Motion (Framer Motion) 12.x |
| **Components** | shadcn/ui, Motion Primitives, KokonutUI |
| **Fonts** | Plus Jakarta Sans, Source Sans 3, Fira Code |

## Features

- **Animated hero section** with gradient text and scroll-triggered reveals
- **Interactive research cards** showcasing AI focus areas
- **Tilt effect** on the About section for subtle 3D interaction
- **Text scramble animations** for dynamic headings
- **Responsive design** optimized for all screen sizes
- **Custom typography** with Google Fonts integration

## What I Learned

- Tailwind CSS v4 has breaking changes from v3 (no more `@apply` with custom utilities)
- Next.js font loader creates CSS variables that need careful handling
- Motion Primitives offers clean, composable animation components
- KokonutUI components sometimes need customization to match dark themes

## Run It Yourself

```bash
# Clone the repository
git clone https://github.com/paullopez-ai/paullopez-landing.git
cd paullopez-landing

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Global styles & Tailwind config
├── components/
│   ├── ui/               # shadcn/ui & Motion Primitives
│   ├── kokonutui/        # KokonutUI components
│   └── ...
└── lib/
    └── utils.ts          # Utility functions
```

## Connect With Me

- 🌐 **Blog**: [blog.paullopez.ai](https://blog.paullopez.ai)
- 💼 **LinkedIn**: [linkedin.com/in/paullopez1](https://www.linkedin.com/in/paullopez1/)
- 🐙 **GitHub**: [github.com/paullopez-ai](https://github.com/paullopez-ai)

---

*Built with curiosity and caffeine. Part of my ongoing exploration into practical AI applications.*
