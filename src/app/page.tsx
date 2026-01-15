'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { GradientHeading } from '@/components/ui/gradient-heading';
import { Magnetic } from '@/components/ui/magnetic';
import { InView } from '@/components/ui/in-view';
import { TextScramble } from '@/components/ui/text-scramble';
import { Tilt } from '@/components/ui/tilt';

// =============================================================================
// RESEARCH CARD COMPONENT
// Interactive magnetic card with hover effects for research areas
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
    <InView
      variants={{
        hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewOptions={{ margin: '0px 0px -200px 0px' }}
    >
      <Magnetic intensity={0.2} actionArea="global" range={200}>
        <Card
          className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:bg-white/10 h-full"
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
      </Magnetic>
    </InView>
  );
};

// =============================================================================
// MAIN LANDING PAGE COMPONENT
// Orchestrates all sections and components
// =============================================================================
export default function LandingPage() {
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
      tagline: 'Portfolio analytics, trading, and derivatives',
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

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">

      {/* =================================================================== */}
      {/* HEADER / NAVIGATION */}
      {/* =================================================================== */}
      <header className="relative border-b border-white/10 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Paul Lopez AI logo"
              width={3334}
              height={1250}
              priority
              className="h-16 w-auto sm:h-20 md:h-24"
              style={{ width: 'auto', height: 'auto', maxHeight: '6rem' }}
              sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
            />
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/paullopez1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-blue-500/50 bg-blue-500/10 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/paullopez-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-blue-500/50 bg-blue-500/10 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              GitHub
            </a>
            <a 
              href="https://blog.paullopez.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-blue-500/50 bg-blue-500/10 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Blog
            </a>
          </div>
        </nav>
      </header>

      {/* =================================================================== */}
      {/* HERO SECTION */}
      {/* =================================================================== */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Title */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              AI Research & Development
            </h1>
          </InView>

          {/* Subtitle */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/70 md:text-2xl">
              Exploring practical applications of GenAI across enterprise,
              finance, and everyday productivity
            </p>
          </InView>

          {/* Description */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
              35+ years of technology experience meets hands-on AI
              experimentation. Building proof of concepts, sharing insights from
              enterprise AI adoption, and exploring what's possible when AI
              meets real-world problems.
            </p>
          </InView>
        </div>
      </section>

      {/* =================================================================== */}
      {/* RESEARCH AREAS SECTION */}
      {/* =================================================================== */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-16 text-center">
              <TextScramble
                as="h2"
                className="text-4xl md:text-5xl font-bold text-white"
                duration={1.2}
                speed={0.05}
              >
                Research Areas
              </TextScramble>
              <p className="mt-4 text-lg text-white/60">
                Exploring AI applications across multiple domains
              </p>
            </div>
          </InView>

          {/* Research Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area, idx) => (
              <ResearchCard
                key={area.title}
                {...area}
                delay={400 + idx * 100}
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
          <InView
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tilt rotationFactor={8} springOptions={{ stiffness: 300, damping: 20 }}>
              <Card className="border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <GradientHeading
                    from="from-white"
                    to="to-blue-400"
                    className="mb-6 text-3xl"
                  >
                    About Paul Lopez
                  </GradientHeading>
                  <div className="space-y-4 text-lg leading-relaxed text-white/70">
                    <p>
                      I've built technology systems for 35 years across healthcare, finance, and enterprise platforms. Today, as a Principal Architect in Optum AI Solutions & Delivery, I help commercialize UHG's advanced AI capabilities - translating proven internal innovations into scalable, client-ready solutions for provider health systems, payers, life sciences, pharmacy, and academic medical institutions.
                    </p>
                    <p>
                    I'm driven by one goal: combine technology with humanity using AI to reduce complexity, streamline work, and empower people to make faster, more informed decisions.
                    </p>
                    <p>
                    This site is my research lab, a place to document experiments, share lessons from enterprise AI adoption, and explore practical GenAI applications, all through the lens of what happens when deep technical expertise meets real-world problems.

                    </p>
                    <div className="mt-6 font-mono text-sm text-blue-400">
                      # Currently exploring: Agentic AI architectures, Claude Code for Healthcare, and faith-based AI applications
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Tilt>
          </InView>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FOOTER */}
      {/* =================================================================== */}
      <footer className="relative border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Paul Lopez. All rights reserved. | AI Research & Development
          </p>
        </div>
      </footer>
    </div>
  );
}
