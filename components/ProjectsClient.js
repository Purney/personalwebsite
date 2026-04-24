"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Data } from "@/data/projectsData";

export default function ProjectsClient() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? Data
      : Data.filter(
          (project) =>
            project.category.includes(filter) ||
            project.techStack.includes(filter)
        );

  const filters = [
    "All",
    "AI Integration",
    "Web Development",
    "E-Commerce",
    "Next.js",
    "React",
    ".NET",
  ];

  return (
    <>
      <div className="mb-12 flex flex-col justify-center gap-3 md:flex-row">
        {filters.map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`border px-4 py-2 text-sm font-semibold transition ${
              filter === filterOption
                ? "border-accent-cyan bg-accent-cyan text-slate-950"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-accent-cyan/60 hover:text-white"
            }`}
          >
            {filterOption}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden border border-white/10 bg-white/[0.04] transition hover:border-accent-cyan/60 hover:bg-white/[0.07]"
          >
            <Image
              src={project.image}
              alt={`${project.title} case study preview`}
              className="aspect-[16/10] w-full object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/10 px-2 py-1 text-xs uppercase tracking-[0.14em] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {project.shortDescription}
              </p>
              <Link
                href={`/projects/${project.id}`}
                className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-accent-cyan hover:text-white"
              >
                View case study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
