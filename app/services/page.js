import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import WorkflowVisual from "@/components/WorkflowVisual";
import { Data as projects } from "@/data/projectsData";
import { Data as services, HireReasonsData } from "@/data/servicesData";
import {
  getAutomationServiceSchema,
  getBreadcrumbSchema,
  getSEOTags,
  getServiceItemListSchema,
  getServicesSchema,
} from "@/lib/seo";

export const metadata = getSEOTags({
  title: "AI Automation Services London | Workflow Automation Developer",
  description:
    "AI automation build services in London for workflow automation, AI agent integration, internal tools, CRM automation, and business process automation.",
  keywords: [
    "AI automation services London",
    "workflow automation developer London",
    "business process automation London",
    "OpenAI integration developer",
    "AI automation for small businesses",
  ],
  canonicalUrlRelative: "/services",
  openGraph: {
    title: "AI Automation Services London | William Purnell",
    description:
      "Practical AI workflows, internal tools, CRM automation, and business process automation for London and UK businesses.",
    url: "https://www.william-purnell.com/services",
  },
});

export default function Services() {
  return (
    <main className="bg-background-dark text-slate-100">
      {getServicesSchema()}
      {getAutomationServiceSchema()}
      {getServiceItemListSchema()}
      {getBreadcrumbSchema([
        { name: "Home", url: "https://www.william-purnell.com/" },
        { name: "Services", url: "https://www.william-purnell.com/services" },
      ])}

      <section className="relative overflow-hidden border-b border-white/10 bg-hero-glow py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-grid bg-[size:28px_28px] opacity-20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex border border-accent-cyan/30 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              AI automation services in London
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Streamline the workflows slowing your business down.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I help London and UK businesses automate manual operations, connect
              tools, build internal systems, and integrate AI into real business
              processes.
            </p>
          </div>
          <WorkflowVisual
            title="From manual task to automated system"
            steps={["Request arrives", "AI triage", "System update", "Team notified", "Dashboard refreshed"]}
          />
        </div>
      </section>

      <SectionWrapper
        eyebrow="Service pages"
        title="Focused automation services, each built around a specific operational problem."
        description="Every service has a dedicated page with the business problems it solves, the workflow it can streamline, and the technical deliverables behind it."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Why work this way"
        title="Automation should feel useful before it feels futuristic."
        className="bg-slate-950"
      >
        <div className="mb-10 max-w-3xl text-base leading-8 text-slate-300">
          <p>
            As a London-based AI automation developer, I build practical systems
            for SMEs, startups, agencies, and operations teams that need more
            than generic AI tools. The work usually starts with a free workflow
            audit, then moves into a focused automation build once the value is
            clear.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {HireReasonsData.map((reason) => (
            <article key={reason.title} className="border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4">{reason.icon}</div>
              <h2 className="text-xl font-semibold text-white">{reason.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{reason.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Proof"
        title="Recent systems and product work."
        description="Automation is strongest when it sits on good software foundations: clear data, good UX, reliable integrations, and maintainable code."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      <ContactForm
        title="Get a free AI workflow automation audit."
        subHeading="Tell me which process is costing time and I will show where automation could help before you commit to a build."
      />
    </main>
  );
}
