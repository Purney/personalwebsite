import Hero from "@/components/Hero";
import ProjectTemplate from "@/components/ProjectTemplate";
import { Data } from "@/data/projectsData";
import { getSEOTags, getCreativeWorkSchema, getBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { notFound } from 'next/navigation';

const serviceLinks = [
  {
    href: "/services/ai-agent-integration",
    label: "AI Agent Integration",
    matches: ["AI Integration"],
  },
  {
    href: "/services/custom-internal-tools",
    label: "Custom Internal Tools",
    matches: ["Web Development", "Next.js", "React", ".NET"],
  },
  {
    href: "/services/crm-email-automation",
    label: "CRM & Email Automation",
    matches: ["E-Commerce", "Stripe API"],
  },
  {
    href: "/services/business-process-automation",
    label: "Business Process Automation",
    matches: ["E-Commerce", "Web Development"],
  },
];

export async function generateMetadata({ params }) {
  const { id } = await params;
  let project = await Data.find((project) => project.id === id);

  const title = (project?.seoTitle || "") + " - William Purnell";
  const description = project?.seoDescription || "";

  return getSEOTags({title, description});
}

export default async function Project({ params }) {
  const { id } = await params;
  const project = Data.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  const projectSignals = [...project.category, ...project.techStack];
  const relatedServices = serviceLinks.filter((service) =>
    service.matches.some((match) => projectSignals.includes(match))
  );

  return (
    <>
      {getCreativeWorkSchema(project.title, project.shortDescription, project.dateCreated, project.techStack, project.image.src, project.id)}
      {getBreadcrumbSchema([
        { name: "Home", url: "https://www.william-purnell.com/" },
        { name: "Projects", url: "https://www.william-purnell.com/projects" },
        {
          name: project.title,
          url: `https://www.william-purnell.com/projects/${project.id}`,
        },
      ])}
      <Hero title={project.title} description={project.shortDescription} />
      <div className="max-w-7xl mx-auto justify-between flex p-4 md:p-6">
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
        <div>
          <p>Date Created: {new Date(project.dateCreated).toDateString()}</p>
          {project.dateUpdated && (
          <p>Last Updated: {new Date(project.dateUpdated).toDateString()}</p>
          )}
        </div>
      </div>
      {relatedServices.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <h2 className="text-2xl font-semibold text-white">
            Related automation services
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-accent-cyan transition hover:border-accent-cyan/60 hover:text-white"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </section>
      )}
      <ProjectTemplate {...project} />
    </>
  );
}
