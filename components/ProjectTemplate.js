"use client";

import { useState, useEffect, useRef } from "react";
import ComponentFactory from "./ComponentFactory";

export default function ProjectTemplate({
  id,
  image,
  sections,
}) {
  const [activeSection, setActiveSection] = useState(sections[0].name);

  const sectionRefs = useRef({}); // Initialize an empty object to hold refs

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set activeSection to the ID of the section in view
        }
      });
    }, observerOptions);

    // Observe each section
    sections.forEach((section) => {
      const sectionRef = sectionRefs.current[section.name];
      if (sectionRef) {
        observer.observe(sectionRef);
      }
    });

    return () => {
      // Cleanup observer on component unmount
      sections.forEach((section) => {
        const sectionRef = sectionRefs.current[section.name];
        if (sectionRef) {
          observer.unobserve(sectionRef);
        }
      });
    };
  }, [sections]);

  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex">
        {/* Left Menu
        <nav className="sticky top-0 h-screen p-4 md:p-6 bg-gray-200 md:bg-gray-100">
          <ul
            className="flex flex-col space-y-4 md:h-full"
            style={{ maxWidth: "220px", margin: "0 auto" }} // Center menu on larger screens
          >
            {sections.map((section) => (
              <li key={section.name}>
                <a
                  href={`#${section.name}`}
                  className={`flex items-center justify-center md:justify-start space-x-2 text-center text-lg font-semibold ${
                    activeSection === section.name
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-400"
                  }`}
                >
                  <span className="block md:hidden text-2xl">
                    {section.icon}
                  </span>
                  <span className="hidden md:flex flex-row gap-2 items-center">
                    {section.icon}
                    {section.name
                      .replaceAll("-", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav> */}

        {/* Content */}
        <main className="flex-1 p-6 md:p-8 space-y-24">
          {sections.map((section) => (
            <section
              id={section.name}
              key={section.name}
              ref={(el) => (sectionRefs.current[section.name] = el)} // Use section.name as the key
              className="scroll-mt-16"
            >
              <ComponentFactory type={section.type} content={section.content} />
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
