"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedWorkflowDiagram from "./AnimatedWorkflowDiagram";
import ParallaxBackground from "./ParallaxBackground";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
      };

  return (
    <section className="relative isolate min-h-[calc(100vh-84px)] overflow-hidden bg-background-dark py-20 text-white md:py-28">
      <ParallaxBackground />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div {...motionProps}>
          <p className="mb-5 inline-flex border border-accent-cyan/30 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            AI automation and workflow engineering
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
            I Build AI Automation Systems for Businesses That Want to Move Faster
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I help companies design, build, and integrate AI-powered workflows,
            internal tools, and automations that reduce manual work and improve
            operational efficiency.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-accent-cyan px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background-dark"
            >
              Get a Free AI Workflow Audit
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-accent-cyan/70 hover:text-accent-cyan"
            >
              View Automation Projects
            </Link>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              ["5+", "years software engineering"],
              [".NET", "React, Next.js"],
              ["UK", "OpenAI integration"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold text-white">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <AnimatedWorkflowDiagram />
      </div>
    </section>
  );
}
