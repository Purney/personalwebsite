"use client";

import { useState } from "react";
import Link from "next/link";
import { Data } from "@/data/projectsData";
import Image from "next/image";

export default function Projects() {
  const projects = Data;

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.includes(filter) ||
            project.techStack.includes(filter)
        );

  const filters = [
    "All",
    "Web Development",
    "AI Integration",
    "Next.js",
    "React",
    ".NET",
  ];

  return (
    <>
      <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "url": "https://www.william-purnell.com/projects/text-2-quiz"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "url": "https://www.william-purnell.com/projects/filament-gifts"
            }
          ]
        }
        
        )
      }}>
      </script>
      <section className="py-16 bg-light-background">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-center  mb-8">
            Projects
          </h1>
          <p className="text-lg  text-center mb-8">
            Explore the projects I’ve worked on, showcasing my expertise in web
            development, AI, and more.
          </p>

          {/* Filters */}
          <div className="flex justify-center space-y-4 md:space-x-4 md:space-y-0 mb-12 flex-col md:flex-row">
            {filters.map((filterOption, index) => (
              <button
                key={index}
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 rounded-full text-sm ${
                  filter === filterOption
                    ? "bg-cta-hover text-cta-text hover:bg-cta-button" 
                    : "bg-cta-button text-cta-text hover:bg-cta-hover opacity-50"
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className=" shadow-md rounded pb-6 text-left hover:shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover mb-6"
                />
                <div className="px-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.shortDescription}</p>
                  <p className=" mb-4">{project.description}</p>
                  <div className="flex justify-center gap-2 flex-wrap mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className=" bg-dark-section text-neutral-section px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.id && (
                    <div className="flex md:justify-end justify-center ">
                      <Link
                        href={"/projects/" + project.id}
                        className="mt-0 inline-block bg-cta-button text-cta-text hover:bg-cta-hover py-2 px-4 rounded-sm uppercase"
                      >
                        View Project
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
