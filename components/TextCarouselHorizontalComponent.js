"use client";

import { useEffect, useState } from "react";

const messages = [
  "Web Design & Development",
  "Automation & AI",
  "SEO",
  "Custom software solutions",
  "Bug fixing & Maintenance",
  "Consulting Services",
  "Web Design & Development",
  "Automation & AI",
  "SEO",
  "Custom software solutions",
  "Bug fixing & Maintenance",
  "Consulting Services",
];

export default function TextCarouselHorizontalComponent() {
  const [isClient, setIsClient] = useState(false);

  // Define the colours for each message
  const colours = [
    "text-blue-600",
    "text-cta-text",
    "text-purple-600",
    "text-cyan-500"
  ];

  useEffect(() => {
    setIsClient(true); // Ensures hydration sync in Next.js
  }, []);

  if (!isClient) return null; // Prevents mismatch issues

  return (
    <div className="overflow-hidden whitespace-nowrap bg-dark-section text-cta-text py-4 relative">
      <div className="flex w-max animate-marquee space-x-16 text-2xl font-semibold ">
        {/* Render the messages twice for a seamless loop */}
        {[...messages, ...messages].map((text, index) => (
          <span
            key={"service-list-" + index}
            className={"mx-4 " + colours[index % colours.length]}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
