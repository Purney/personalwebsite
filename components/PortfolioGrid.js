import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { Data } from "@/data/projectsData";
import Image from "next/image";
import placeholder from "../assets/images/placeholder.jpg";

export default function PortfolioGrid() {
  const projects = Data.slice(0, 3);

  return (
    <section className="bg-gray-200 py-16 md:py-24 px-8 justify-items-center">
      <div className="max-w-7xl">
        <div className="text-center justify-items-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Work</h2>
          <p className="text-lg max-w-xl">
            Explore the projects I’ve worked on, showcasing my expertise in web
            development, AI, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {projects.map((project, index) => (
            <Link
              href={"/projects/" + project.id}
              key={"project-" + index}
              className="bg-white shadow-md rounded pb-6 text-left hover:shadow-lg"
            >
              <Image
                className="object-cover mb-6"
                src={project.image}
                alt={project.title + " thumbnail"}
              />
              <div className="px-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm">{project.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <PrimaryButton
            buttonLink="/projects"
            buttonText="View All Projects"
          />
        </div>
      </div>
    </section>
  );
}
