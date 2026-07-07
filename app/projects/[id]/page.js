import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectTemplate from "@/components/ProjectTemplate";
import { Data } from "@/data/projectsData";
import { absoluteUrl, getSEOTags, getCreativeWorkSchema, getBreadcrumbSchema } from "@/lib/seo";
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

  if (!project) {
    return getSEOTags({
      title: "Project Not Found - William Purnell",
      description: "The requested project case study could not be found.",
      canonicalUrlRelative: "/projects",
      openGraph: {
        url: "/projects",
      },
    });
  }

  const title = (project?.seoTitle || "") + " - William Purnell";
  const description = project?.seoDescription || "";

  return getSEOTags({
    title,
    description,
    canonicalUrlRelative: `/projects/${project.id}`,
    openGraph: {
      title,
      description,
      url: `/projects/${project.id}`,
      image: project.image,
    },
  });
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
        { name: "Home", url: absoluteUrl("/") },
        { name: "Projects", url: absoluteUrl("/projects") },
        {
          name: project.title,
          url: absoluteUrl(`/projects/${project.id}`),
        },
      ])}
      <Hero title={`${project.title} Case Study`} description={project.shortDescription} />
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 p-4 md:flex-row md:p-6">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: `/projects/${project.id}`, label: project.title },
          ]}
        />
        <div>
          <p>Date Created: {new Date(project.dateCreated).toDateString()}</p>
          {project.dateUpdated && (
          <p>Last Updated: {new Date(project.dateUpdated).toDateString()}</p>
          )}
        </div>
      </div>
      {relatedServices.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <div className="grid gap-5 md:grid-cols-[0.7fr_1fr] md:items-center">
            <h2 className="text-2xl font-semibold text-white">
              Related automation services
            </h2>
            <div className="flex flex-wrap gap-3 md:justify-end">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-accent-amber transition hover:border-accent-amber/60 hover:text-white"
              >
                {service.label}
              </Link>
            ))}
            </div>
          </div>
        </section>
      )}
      <ProjectTemplate {...project} />
    </>
  );
}
