"use client";

import { fadeVariants } from "@/data/animationVariants";
import { motion } from "framer-motion";

export default function FadeInAndOutWrapper({ children, className, once = false }) {
  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible" // Trigger fade-in when in view
      exit="hidden" // Trigger fade-out when out of view
      viewport={{ once: once, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
