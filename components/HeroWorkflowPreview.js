"use client";

import dynamic from "next/dynamic";

const AnimatedWorkflowDiagram = dynamic(() => import("./AnimatedWorkflowDiagram"), {
  ssr: false,
  loading: () => (
    <div className="relative mx-auto w-full max-w-xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Workflow engine
          </p>
          <p className="mt-1 text-xl font-semibold text-white">
            Lead-to-delivery automation
          </p>
        </div>
        <span className="h-3 w-3 rounded-full bg-accent-green shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
      </div>
      <div className="space-y-4">
        {["Intake", "Reason", "Route", "Report"].map((step, index) => (
          <div
            key={step}
            className="grid grid-cols-[2.5rem_1fr] items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center border border-accent-cyan/40 bg-accent-cyan/10 text-sm font-semibold text-accent-cyan">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="border border-white/10 bg-white/[0.04] p-4">
              <p className="font-semibold text-white">{step}</p>
              <p className="mt-1 text-sm text-slate-300">
                Automation step
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});

export default function HeroWorkflowPreview() {
  return <AnimatedWorkflowDiagram />;
}
