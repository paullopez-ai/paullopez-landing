# Paul Lopez AI Landing Page - Complete Build Specification

## Project Overview

**Project Name:** paullopez.ai Landing Page  
**Type:** Next.js 14+ with TypeScript, Tailwind CSS, and shadcn/ui  
**Purpose:** Professional "coming soon" landing page that establishes brand positioning while building content  
**Target Audience:** Healthcare executives, financial professionals, technology leaders, and faith-based AI community  
**Important** I don't want my new website to look like every ShadCN website out there. I want you to analyze the additional registries added (https://kokonutui.com
https://www.cult-ui.com
https://motion-primitives.com) and come up with some clever and innovative design ideas. 

---


## Project Structure

```
paullopez-landing/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Main landing page (PRIMARY FILE)
│   ├── globals.css                # Global styles
│   └── favicon.ico                # Favicon
├── components/
│   └── ui/                        # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts                   # Utility functions
├── public/                        # Static assets
├── .eslintrc.json                 # ESLint config
├── .gitignore                     # Git ignore
├── components.json                # shadcn/ui config
├── next.config.js                 # Next.js config
├── package.json                   # Dependencies
├── postcss.config.js              # PostCSS config
├── tailwind.config.ts             # Tailwind config
└── tsconfig.json                  # TypeScript config
```

---

## Project is already setup, you are in the directory 
\## Core Components

### Design System Overview

The landing page uses the following component architecture:

1. **AnimatedBackground** - Floating particle background with gradient
2. **AnimatedText** - Staggered fade-in animations for content
3. **PillBadge** - Glass morphism badge component
4. **ResearchCard** - Hover-interactive research area cards
5. **LandingPage** (main) - Parent component orchestrating all elements

### Component Hierarchy

```
LandingPage
├── AnimatedBackground
├── Header
│   └── Logo (SVG)
│   └── Navigation Links
├── Hero Section
│   ├── AnimatedText (PillBadge)
│   ├── AnimatedText (Title)
│   ├── AnimatedText (Subtitle)
│   ├── AnimatedText (Description)
│   └── AnimatedText (Newsletter Form)
├── Research Areas Section
│   ├── AnimatedText (Section Header)
│   └── ResearchCard (x4)
│       └── Card (shadcn/ui)
├── About Section
│   └── AnimatedText
│       └── Card (shadcn/ui)
└── Footer
```

---

## Complete Code Examples for reference ONLY

### app/page.tsx (MAIN FILE)

This is the complete landing page component. Copy this entire file:

```tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// =============================================================================
// ANIMATED BACKGROUND COMPONENT
// Creates floating particles with gradient overlay
// =============================================================================
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* CSS Keyframe animation */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0; 
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
};

// =============================================================================
// ANIMATED TEXT COMPONENT
// Provides staggered fade-in animation with customizable delay
// =============================================================================
const AnimatedText = ({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

// =============================================================================
// PILL BADGE COMPONENT
// Glass morphism badge for "Coming Soon" indicator
// =============================================================================
const PillBadge = ({ 
  children, 
  icon 
}: { 
  children: React.ReactNode; 
  icon?: string;
}) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
    {icon && <span className="text-lg">{icon}</span>}
    <span className="text-white/90">{children}</span>
  </div>
);

// =============================================================================
// RESEARCH CARD COMPONENT
// Interactive card with hover effects for research areas
// =============================================================================
const ResearchCard = ({ 
  title, 
  tagline, 
  icon, 
  items, 
  delay 
}: { 
  title: string;
  tagline: string;
  icon: string;
  items: string[];
  delay: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedText delay={delay}>
      <Card
        className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:bg-white/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : ''
          }`}
        />
        
        <CardContent className="relative p-6">
          <div className="mb-4 text-4xl">{icon}</div>
          <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-sm italic text-white/60">{tagline}</p>
          
          {/* List items */}
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-white/70"
              >
                <span className="mt-1 text-blue-400">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </AnimatedText>
  );
};

// =============================================================================
// MAIN LANDING PAGE COMPONENT
// Orchestrates all sections and components
// =============================================================================
export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Research areas data
  const researchAreas = [
    {
      icon: '🏢',
      title: 'Enterprise AI',
      tagline: 'Large-scale adoption and architecture',
      items: [
        'Healthcare GenAI use cases',
        'Lessons from AI transformation',
        'Regulatory compliance patterns',
        'Enterprise architecture strategies'
      ]
    },
    {
      icon: '📈',
      title: 'Financial AI',
      tagline: 'Trading, derivatives, and portfolio analytics',
      items: [
        'AI-enabled options strategies',
        'Market analysis algorithms',
        'Risk management frameworks',
        'Quantitative trading insights'
      ]
    },
    {
      icon: '⚡',
      title: 'Practical AI',
      tagline: 'Productivity, automation, and innovation',
      items: [
        'AI productivity experiments',
        'Personal AI assistants & agents',
        'Workflow automation patterns',
        'Building AI-first systems'
      ]
    },
    {
      icon: '✝️',
      title: 'Faith & Technology',
      tagline: 'Ethics, purpose, and responsible AI',
      items: [
        'Christian perspectives on AI',
        'Scripture + AI explorations',
        'Ethics in AI development',
        'Technology with purpose'
      ]
    }
  ];

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // TODO: Connect to email service (Resend, ConvertKit, etc.)
    console.log('Email submitted:', email);
    
    // In production, send to API route:
    // await fetch('/api/subscribe', {
    //   method: 'POST',
    //   body: JSON.stringify({ email })
    // });
  };

  return (
    <div className="min-h-screen font-sans text-white">
      <AnimatedBackground />

      {/* =================================================================== */}
      {/* HEADER / NAVIGATION */}
      {/* =================================================================== */}
      <header className="relative border-b border-white/10 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 400 80" className="h-10 w-auto">
              <text
                x="0"
                y="60"
                fontFamily="Arial Black, sans-serif"
                fontSize="48"
                fontWeight="900"
                fill="white"
                letterSpacing="2"
              >
                PAUL LOPEZ
              </text>
              {/* Geometric pixel accents */}
              <rect x="20" y="25" width="8" height="8" fill="#0066cc" />
              <rect x="30" y="25" width="8" height="8" fill="#0066cc" />
              <rect x="92" y="25" width="8" height="8" fill="#0066cc" />
              <rect x="102" y="25" width="8" height="8" fill="#0066cc" />
              <rect x="218" y="25" width="8" height="8" fill="#0066cc" />
              <rect x="228" y="25" width="8" height="8" fill="#0066cc" />
            </svg>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* =================================================================== */}
      {/* HERO SECTION */}
      {/* =================================================================== */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Coming Soon Badge */}
          <AnimatedText>
            <PillBadge icon="🚀">Coming Soon</PillBadge>
          </AnimatedText>

          {/* Main Title */}
          <AnimatedText delay={200}>
            <h1 className="mt-8 text-6xl font-bold leading-tight md:text-7xl lg:text-8xl">
              AI Research &<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
          </AnimatedText>

          {/* Subtitle */}
          <AnimatedText delay={400}>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/70 md:text-2xl">
              Exploring practical applications of GenAI across enterprise,
              finance, and everyday productivity
            </p>
          </AnimatedText>

          {/* Description */}
          <AnimatedText delay={600}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
              40 years of technology experience meets hands-on AI
              experimentation. Building proof of concepts, sharing insights from
              enterprise AI adoption, and exploring what's possible when AI
              meets real-world problems.
            </p>
          </AnimatedText>

          {/* Newsletter Signup Form */}
          <AnimatedText delay={800}>
            <div className="mx-auto mt-12 max-w-md">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-blue-500"
                  />
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Notify Me
                  </Button>
                </form>
              ) : (
                <div className="rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-green-400">
                  ✓ Thanks! We'll notify you when we launch.
                </div>
              )}
              <p className="mt-3 text-sm text-white/50">
                Be the first to know when we launch
              </p>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* =================================================================== */}
      {/* RESEARCH AREAS SECTION */}
      {/* =================================================================== */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <AnimatedText delay={1000}>
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold md:text-5xl">Research Areas</h2>
              <p className="mt-4 text-lg text-white/60">
                Exploring AI applications across multiple domains
              </p>
            </div>
          </AnimatedText>

          {/* Research Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area, idx) => (
              <ResearchCard
                key={area.title}
                {...area}
                delay={1200 + idx * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* ABOUT SECTION */}
      {/* =================================================================== */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimatedText delay={1800}>
            <Card className="border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold">About Paul Lopez</h2>
                <div className="space-y-4 text-lg leading-relaxed text-white/70">
                  <p>
                    I've spent 40 years building technology systems across
                    healthcare, finance, and enterprise infrastructure.
                    Currently Sr. Director of Technology Architecture & GenAI at
                    Optum, where I lead cloud infrastructure, security, and AI
                    initiatives managing partnerships worth over $2 billion.
                  </p>
                  <p>
                    This site will be my research lab—a place to document
                    experiments, share lessons from enterprise AI adoption, and
                    explore practical applications of GenAI. From healthcare
                    compliance to options trading algorithms to Scripture AI,
                    I'm interested in what happens when deep technical expertise
                    meets real-world problems.
                  </p>
                  <div className="mt-6 font-mono text-sm text-blue-400">
                    # Currently exploring: Azure AI architectures, SPX options
                    automation, and faith-based AI applications
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedText>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FOOTER */}
      {/* =================================================================== */}
      <footer className="relative border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-white/50">
            © 2024 Paul Lopez. All rights reserved. | AI Research & Development
          </p>
        </div>
      </footer>
    </div>
  );
}
```

### app/layout.tsx

This is the root layout - usually created automatically, but verify it looks like this:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul Lopez - AI Research & Development",
  description: "Exploring practical applications of GenAI across enterprise, finance, and everyday productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### app/globals.css

Ensure your global CSS has the shadcn/ui base styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## Configuration Files

### tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### components.json (shadcn/ui config)

This is created automatically by `npx shadcn@latest init`, but should look like:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
```

---

## Styling & Design

### Color Palette

**Primary Colors:**
- Black: `#000000` (background)
- Blue: `#0066cc` (accents, CTAs)
- Purple: `#8B5CF6` (gradient accent)
- White: `#FFFFFF` (text)

**Opacity Levels:**
- Text primary: `white` (100%)
- Text secondary: `white/70` (70%)
- Text tertiary: `white/50` (50%)
- Borders: `white/10` (10%)
- Glass backgrounds: `white/5` (5%)

### Typography

**Font Family:** System font stack (default Next.js)

**Font Sizes:**
- Hero H1: `6xl` (3.75rem) → `8xl` (6rem) on large screens
- Section H2: `4xl` (2.25rem) → `5xl` (3rem)
- Card H3: `2xl` (1.5rem)
- Body text: `lg` (1.125rem)
- Small text: `sm` (0.875rem)

### Animations

**Float Animation (particles):**
```css
@keyframes float {
  0%, 100% { 
    transform: translateY(0) translateX(0); 
    opacity: 0; 
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateY(-100vh) translateX(random); 
    opacity: 0; 
  }
}
```

**Fade-in Animation (content):**
- Duration: 1000ms
- Timing: ease-in-out
- Transform: translateY(32px) → translateY(0)
- Opacity: 0 → 1

### Responsive Breakpoints

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

---

## Testing

### Manual Testing Checklist

- [ ] Page loads without errors
- [ ] All animations play smoothly
- [ ] Particles are visible and animating
- [ ] Email form accepts input
- [ ] Form submission shows success message
- [ ] All 4 research cards display correctly
- [ ] Hover effects work on research cards
- [ ] Links in header are clickable
- [ ] Responsive on mobile (test at 375px width)
- [ ] Responsive on tablet (test at 768px width)
- [ ] Responsive on desktop (test at 1440px width)

### Browser Testing

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Performance Testing

```bash
# Run production build
npm run build

# Check bundle size
# Should be < 500KB for main bundle
```

---

## Deployment

### Deploy to Vercel (Recommended)

**Step 1:** Install Vercel CLI
```bash
npm install -g vercel
```

**Step 2:** Login
```bash
vercel login
```

**Step 3:** Deploy
```bash
vercel
```

Follow prompts, then visit the provided URL.

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Upload .next directory
```

**Custom Server:**
```bash
npm run build
npm start
# Runs on port 3000
```

### Environment Variables

For production email collection, create `.env.local`:

```bash
# Email service API key (e.g., Resend)
EMAIL_API_KEY=your_api_key_here

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_ga_id_here
```

---

## Customization Guide

### Update Personal Information

**1. Social Links (app/page.tsx, lines ~260-270)**
```tsx
<a href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
```

**2. About Section Text (app/page.tsx, lines ~420-440)**
Edit the paragraph content to match your background.

**3. Research Areas (app/page.tsx, lines ~150-185)**
Modify the `researchAreas` array to change content.

### Replace Logo

**Option 1: Use PNG/SVG file**
```tsx
// Replace the <svg> element with:
<img src="/logo.png" alt="Paul Lopez" className="h-10 w-auto" />
```

**Option 2: Update SVG text**
Change "PAUL LOPEZ" text in the existing SVG.

### Change Color Scheme

**Update accent colors:**
```tsx
// In AnimatedBackground component
from-blue-950/20 → from-YOUR_COLOR/20

// In gradient text
from-blue-400 to-purple-400 → from-YOUR_COLOR to-YOUR_COLOR

// In buttons
bg-blue-600 → bg-YOUR_COLOR
```

### Add Email Collection

**Step 1:** Create API route `app/api/subscribe/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  
  // Example: Using Resend
  // const resend = new Resend(process.env.EMAIL_API_KEY);
  // await resend.emails.send({...});
  
  return NextResponse.json({ success: true });
}
```

**Step 2:** Update form submission in page.tsx:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  
  if (response.ok) {
    setIsSubmitted(true);
  }
};
```

### Add Analytics

**Google Analytics:**

1. Install package:
```bash
npm install @next/third-parties
```

2. Update `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

---

## Troubleshooting

### Common Issues

**Issue: Components not found**
```bash
# Solution: Add components
npx shadcn@latest add [component-name]
```

**Issue: Tailwind classes not applying**
```bash
# Solution: Restart dev server
# Stop server (Ctrl+C)
npm run dev
```

**Issue: TypeScript errors**
```bash
# Solution: Ensure types are installed
npm install --save-dev @types/node @types/react @types/react-dom
```

**Issue: Build errors**
```bash
# Solution: Clean rebuild
rm -rf .next node_modules
npm install
npm run dev
```

**Issue: Animations not working**
```bash
# Solution: Install tailwindcss-animate
npm install tailwindcss-animate

# Add to tailwind.config.ts:
plugins: [require("tailwindcss-animate")]
```




## Resources

### Documentation
- Next.js: https://nextjs.org/docs
- shadcn/ui: https://ui.shadcn.com
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

### Design Inspiration
- Motion Primitives: https://motion-primitives.com
- Kokonut UI: https://kokonutui.com
- Tailwind UI: https://tailwindui.com

### Deployment
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com

### Email Services
- Resend: https://resend.com/docs
- ConvertKit: https://developers.convertkit.com
- Mailchimp: https://mailchimp.com/developer

---



**End of Specification**

*Last Updated: December 2024*  
*Version: 1.0*  
*Author: Paul Lopez*
