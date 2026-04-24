import ProjectsClient from "@/components/ProjectsClient";
import SectionWrapper from "@/components/SectionWrapper";
import { Data } from "@/data/projectsData";
import { getBreadcrumbSchema, getSEOTags } from "@/lib/seo";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": Data.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": project.title,
              "url": `https://www.william-purnell.com/projects/${project.id}`,
            })),
          }),
        }}
      />
      <SectionWrapper
        eyebrow="Case studies"
        titleAs="h1"
        title="Projects built around useful software, AI integration, and operational outcomes."
        description="A selection of web platforms, e-commerce systems, and AI product work that demonstrates practical delivery, maintainable engineering, and workflow thinking."
      >
        <ProjectsClient />
      </SectionWrapper>
    </main>
  );
}
