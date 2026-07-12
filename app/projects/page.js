import ProjectsClient from "@/components/ProjectsClient";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import { Data } from "@/data/projectsData";
import { absoluteUrl, getBreadcrumbSchema, getSEOTags } from "@/lib/seo";
import { buildItemListSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";

export const metadata = getSEOTags({
  title: "AI Automation Case Studies | William Purnell",
  description:
    "Case studies and projects covering AI integration, internal tools, e-commerce operations, workflow automation, and custom software delivery.",
  keywords: [
    "AI automation case studies",
    "OpenAI integration project",
    "custom internal tools portfolio",
    "workflow automation examples",
  ],
  canonicalUrlRelative: "/projects",
  openGraph: {
    title: "AI Automation Case Studies | William Purnell",
    description:
      "Projects showing AI integration, workflow software, internal tools, and custom business systems.",
    url: "https://www.william-purnell.com/projects",
  },
});

export default function Projects() {
  return (
    <main className="bg-background-dark text-slate-100">
      {getBreadcrumbSchema([
        { name: "Home", url: "https://www.william-purnell.com/" },
        { name: "Projects", url: "https://www.william-purnell.com/projects" },
      ])}
      <JsonLd data={buildItemListSchema(Data, absoluteUrl)} />
      <SectionWrapper
        eyebrow="Case studies"
        titleAs="h1"
        title="Projects built around useful software, AI integration, and operational outcomes."
        description="A selection of web platforms, e-commerce systems, and AI product work that demonstrates practical delivery, maintainable engineering, and workflow thinking."
        headerAlign="center"
      >
        <Breadcrumbs
          className="mb-10 justify-center"
          items={[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
          ]}
        />
        <ProjectsClient />
      </SectionWrapper>
    </main>
  );
}
