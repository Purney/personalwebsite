"use client";

const messages = [
  "Web Design & Development",
  "Automation & AI",
  "SEO",
  "Custom software solutions",
  "Bug fixing & Maintenance",
  "Automation Builds",
  "Web Design & Development",
  "Automation & AI",
  "SEO",
  "Custom software solutions",
  "Bug fixing & Maintenance",
  "Workflow Audits",
];

export default function TextCarouselHorizontalComponent() {
  // Define the colours for each message
  const colours = [
    "text-blue-600",
    "text-cta-text",
    "text-purple-600",
    "text-cyan-500"
  ];

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
