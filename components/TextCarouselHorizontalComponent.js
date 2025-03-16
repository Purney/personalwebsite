"use client";

import { useEffect, useState } from "react";

const messages = [
  "Website development",
  "AI integration",
  "SEO optimisation",
  "Custom software solutions",
  "Business automation",
  "Website development",
  "AI integration",
  "SEO optimisation",
  "Custom software solutions",
  "Business automation",
];

export default function TextCarouselHorizontalComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures hydration sync in Next.js
  }, []);

  if (!isClient) return null; // Prevents mismatch issues

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-200 py-4 relative">
      <div className="flex w-max animate-marquee space-x-16 text-2xl font-semibold text-gray-800">
        {/* Render the messages twice for a seamless loop */}
        {[...messages, ...messages].map((text, index) => (
          <span key={index} className="mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
