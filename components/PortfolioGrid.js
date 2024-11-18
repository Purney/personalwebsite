import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { Data } from "@/data/projectsData";

export default function PortfolioGrid() {
  const projects = Data.slice(0, 2);
  return (
    <section className="bg-gray-200 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-6 text-center hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <Link href={"/projects/" + project.id} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <PrimaryButton buttonLink="/projects" buttonText="View All Projects" />
      </div>
    </section>
  );
}
