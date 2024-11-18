import ProjectTemplate from "@/components/ProjectTemplate";
import { Data } from "@/data/projectsData";
import Link from "next/link";

export default async function Project({ params }) {
  const { id } = await params;
  const project = Data.find((project) => project.id === id);

  return (
    <>
      <div>
        <Link
          href="/projects"
          className="link !no-underline text-base-content/80 hover:text-base-content inline-flex items-center gap-1"
          title="Back to Projects"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to Projects
        </Link>
      </div>
      <ProjectTemplate {...project} />
    </>
  );
}
