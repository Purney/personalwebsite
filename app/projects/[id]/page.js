import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectTemplate from "@/components/ProjectTemplate";
import { Data } from "@/data/projectsData";
import { absoluteUrl, getSEOTags, getBreadcrumbSchema } from "@/lib/seo";
import { buildCreativeWorkSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { notFound } from 'next/navigation';

import { Data as services } from "@/data/servicesData";

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

  const relatedServices = project.relatedServiceSlugs.map((slug) => services.find((service) => service.slug === slug)).filter(Boolean);
  const relatedProjects = project.relatedProjectIds.map((id) => Data.find((item) => item.id === id)).filter(Boolean);

  return (
    <>
      <JsonLd data={buildCreativeWorkSchema(project, absoluteUrl)} />
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
          <p>By {project.author}</p>
          <p>Published: {new Date(project.dateCreated).toDateString()}</p>
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
                key={service.slug}
                href={`/services/${service.slug}`}
                className="border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-accent-amber transition hover:border-accent-amber/60 hover:text-white"
              >
                {service.title}
              </Link>
            ))}
            </div>
          </div>
        </section>
      )}
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <h2 className="text-2xl font-semibold text-white">Project overview</h2>
        <dl className="mt-5 grid gap-5 md:grid-cols-2">
          {[["Client type", project.clientType], ["Challenge", project.challenge], ["Approach", project.approach], ["Outcomes", project.outcomes]].map(([label, value]) => (
            <div key={label} className="border border-white/10 bg-white/[0.04] p-5"><dt className="text-kicker">{label}</dt><dd className="mt-3 leading-7 text-slate-300">{value}</dd></div>
          ))}
        </dl>
      </section>
      <ProjectTemplate {...project} />
      {relatedProjects.length > 0 && <section className="mx-auto max-w-7xl px-4 py-12 md:px-6"><h2 className="text-2xl font-semibold text-white">Related projects</h2><div className="mt-5 flex flex-wrap gap-3">{relatedProjects.map((item) => <Link key={item.id} href={`/projects/${item.id}`} className="btn-secondary">{item.title}</Link>)}</div></section>}
    </>
  );
}
