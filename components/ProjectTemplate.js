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
