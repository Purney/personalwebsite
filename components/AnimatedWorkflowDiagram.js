"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { label: "Intake", detail: "Forms, inboxes, CRM" },
  { label: "Reason", detail: "AI classification" },
  { label: "Route", detail: "Tasks and alerts" },
  { label: "Report", detail: "Dashboards and next actions" },
];

export default function AnimatedWorkflowDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Workflow engine
          </p>
          <h2 className="mt-1 text-xl font-semibold text-white">
            Lead-to-delivery automation
          </h2>
        </div>
        <span className="h-3 w-3 rounded-full bg-accent-green shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.label}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ delay: index * 0.14, duration: 0.45 }}
            className="grid grid-cols-[2.5rem_1fr] items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center border border-accent-cyan/40 bg-accent-cyan/10 text-sm font-semibold text-accent-cyan">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-white">{step.label}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Live
                </p>
              </div>
              <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? {} : { opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="mt-5 h-2 bg-gradient-to-r from-accent-cyan via-accent-green to-accent-amber"
      />
    </div>
  );
}
