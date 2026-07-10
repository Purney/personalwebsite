"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ArchitectureROICalculator = dynamic(
  () => import("@/components/ArchitectureROICalculator"),
  {
    ssr: false,
    loading: () => <CalculatorPlaceholder loading />,
  }
);

export default function LazyArchitectureROICalculator() {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      const timeoutId = window.setTimeout(() => setShouldLoad(true), 0);
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="min-h-[48rem] lg:min-h-[64rem]">
      {shouldLoad ? (
        <ArchitectureROICalculator />
      ) : (
        <CalculatorPlaceholder onLoad={() => setShouldLoad(true)} />
      )}
    </div>
  );
}

function CalculatorPlaceholder({ loading = false, onLoad }) {
  return (
    <section
      className="flex min-h-[48rem] items-center bg-background-dark py-16 lg:min-h-[64rem]"
      aria-busy={loading}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex items-center justify-center border border-white/10 bg-slate-950/80 p-5 shadow-panel md:p-8">
          <div className="max-w-xl text-center">
            <p className="text-kicker">Estimated capacity</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Estimate the capacity across repeated workflows.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300" role="status">
              {loading
                ? "Loading the capacity calculator…"
                : "Load the interactive calculator to estimate time and capacity across repeated workflows."}
            </p>
            {!loading && (
              <button type="button" className="btn-primary mt-6" onClick={onLoad}>
                Load calculator
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
