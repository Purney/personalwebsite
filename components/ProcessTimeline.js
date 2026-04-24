"use client";

import { motion, useReducedMotion } from "framer-motion";

const processSteps = [
  {
    title: "Map the workflow",
    copy: "Identify the handoffs, delays, tools, and decisions that slow the team down.",
  },
  {
    title: "Design the automation",
    copy: "Choose the right mix of custom software, integrations, AI prompts, and human approvals.",
  },
  {
    title: "Ship in stages",
    copy: "Release useful improvements quickly, then harden the system around real operating data.",
  },
  {
    title: "Measure and improve",
    copy: "Track adoption, time saved, error rates, and the next bottlenecks worth removing.",
  },
];

export default function ProcessTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {processSteps.map((step, index) => (
        <motion.article
          key={step.title}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="relative border border-white/10 bg-slate-950/70 p-5"
        >
          <p className="mb-5 text-sm font-semibold text-accent-cyan">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{step.copy}</p>
        </motion.article>
      ))}
    </div>
  );
}
