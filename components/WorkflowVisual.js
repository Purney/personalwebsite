"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WorkflowVisual({ steps = [], title = "Automated workflow" }) {
  const shouldReduceMotion = useReducedMotion();
  const visibleSteps = steps.length > 0 ? steps : ["Input", "Process", "Automate", "Report"];

  return (
    <div className="relative overflow-hidden border border-accent-cyan/20 bg-slate-950/75 p-5 shadow-panel">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.18),transparent_28%)]"
        aria-hidden="true"
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-cyan to-transparent"
        animate={shouldReduceMotion ? {} : { x: ["-100%", "100%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
            Animated workflow preview
          </p>
          <h2 className="mt-1 text-xl font-semibold text-white">{title}</h2>
        </div>
        <motion.span
          aria-hidden="true"
          className="h-3 w-3 bg-accent-green shadow-[0_0_24px_rgba(52,211,153,0.8)]"
          animate={shouldReduceMotion ? {} : { opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mb-6 grid grid-cols-3 border border-white/10 bg-black/20 text-center text-xs uppercase tracking-[0.14em] text-slate-400">
        <div className="border-r border-white/10 p-3">
          Manual input
        </div>
        <div className="border-r border-white/10 p-3 text-accent-cyan">
          Automated flow
        </div>
        <div className="p-3">
          Tracked result
        </div>
      </div>

      <div className="relative grid gap-4">
        <div
          className="absolute left-[1.35rem] top-5 h-[calc(100%-2.5rem)] w-px bg-white/10"
          aria-hidden="true"
        />
        <motion.div
          aria-hidden="true"
          className="absolute left-[1.125rem] top-5 h-3 w-3 bg-accent-cyan shadow-[0_0_28px_rgba(34,211,238,0.9)]"
          animate={shouldReduceMotion ? {} : { y: [0, 68 * Math.max(visibleSteps.length - 1, 1), 0] }}
          transition={{ duration: Math.max(visibleSteps.length * 0.7, 3), repeat: Infinity, ease: "easeInOut" }}
        />
        {visibleSteps.map((step, index) => (
          <motion.div
            key={`${step}-${index}`}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative grid grid-cols-[2.75rem_1fr] items-center gap-4"
          >
            {index < visibleSteps.length - 1 && (
              <motion.span
                aria-hidden="true"
                className="absolute left-[1.35rem] top-12 h-8 w-px bg-gradient-to-b from-accent-cyan to-accent-purple shadow-[0_0_18px_rgba(34,211,238,0.55)]"
                initial={shouldReduceMotion ? false : { scaleY: 0 }}
                whileInView={shouldReduceMotion ? {} : { scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 + 0.18 }}
                style={{ transformOrigin: "top" }}
              />
            )}
            <motion.div
              animate={shouldReduceMotion ? {} : { boxShadow: ["0 0 0 rgba(34,211,238,0)", "0 0 24px rgba(34,211,238,0.45)", "0 0 0 rgba(34,211,238,0)"] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.18 }}
              className="z-10 flex h-11 w-11 items-center justify-center border border-accent-cyan/50 bg-slate-950 text-sm font-semibold text-accent-cyan"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.div>
            <motion.div
              animate={shouldReduceMotion ? {} : { borderColor: ["rgba(255,255,255,0.10)", "rgba(34,211,238,0.45)", "rgba(255,255,255,0.10)"] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.2 }}
              className="border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="font-semibold text-white">
                {step}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                {index === 0
                  ? "Trigger captured"
                  : index === visibleSteps.length - 1
                    ? "Result tracked"
                    : "Handled automatically"}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        aria-hidden="true"
        className="mt-6 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-magenta"
        animate={shouldReduceMotion ? {} : { opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      </div>
    </div>
  );
}
