"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="mx-4 py-16 text-center md:mx-8">
      <h2 className="mb-4 text-3xl font-semibold text-white md:text-5xl">
        Book an automation consultation.
      </h2>
      <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
        Preparing the consultation form...
      </p>
    </div>
  ),
});

export default function LazyContactFormSection({ title, subHeading }) {
  const sectionRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      return;
    }

    if (window.location.hash === "#contact") {
      window.requestAnimationFrame(() => setShouldLoad(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <section id="contact" ref={sectionRef}>
      {shouldLoad ? (
        <ContactForm title={title} subHeading={subHeading} sectionId={null} />
      ) : (
        <div className="mx-4 py-16 text-center md:mx-8">
          <h2 className="mb-4 text-3xl font-semibold text-white md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            {subHeading}
          </p>
          <button
            type="button"
            onClick={() => setShouldLoad(true)}
            className="btn-primary"
          >
            Show the consultation form
          </button>
        </div>
      )}
    </section>
  );
}
