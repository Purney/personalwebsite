"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -160]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-accent-cyan/15 bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_62%)] blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(5,10,23,0.88)_68%)]" />
    </div>
  );
}
