import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import LazyContactFormSection from "@/components/LazyContactFormSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectCard from "@/components/ProjectCard";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { architectureAuditBasePath } from "@/data/architectureAuditOffers";
import { Data as services } from "@/data/servicesData";
import { Data as projects } from "@/data/projectsData";
import { Data as testimonials } from "@/data/testimonialData";
import {
  FiBarChart2,
  FiCompass,
  FiCopy,
  FiLink,
  FiMail,
  FiRepeat,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import {
  getAutomationServiceSchema,
  getLocalBusinessSchema,
  getPersonSchema,
  getSEOTags,
  getWebsiteSchema,
} from "@/lib/seo";

const painPoints = [
  { title: "Copying data between systems", icon: FiCopy },
  { title: "Responding to repetitive emails", icon: FiMail },
  { title: "Manual reporting", icon: FiBarChart2 },
  { title: "Slow customer onboarding", icon: FiUsers },
  { title: "Disconnected tools", icon: FiLink },
  { title: "No clear AI strategy", icon: FiCompass },
];

const outcomes = [
  { title: "Automate repetitive admin tasks", icon: FiRepeat },
  { title: "Connect your tools and data", icon: FiLink },
  { title: "Build internal dashboards and workflows", icon: FiBarChart2 },
  { title: "Integrate OpenAI and AI agents into real business processes", icon: FiSettings },
  { title: "Replace manual handoffs with reliable systems", icon: FiUsers },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  ".NET",
  "Azure",
  "MongoDB",
  "Stripe",
  "OpenAI",
  "Vercel",
  "APIs",
  "Automation platforms",
];

export const metadata = getSEOTags({
  title: "AI Automation Developer UK | William Purnell",
  description:
    "AI automation developer helping UK businesses build AI workflows, internal tools, OpenAI integrations, and business process automation.",
  keywords: [
    "AI automation developer UK",
    "AI workflow automation",
    "business process automation",
    "custom AI integrations",
    "AI automation for small businesses",
    "software developer London",
    "Next.js developer UK",
    "OpenAI integration developer",
  ],
  openGraph: {
    title: "AI Automation Developer UK | William Purnell",
    description:
      "Practical AI workflows, internal tools, OpenAI integrations, and automation systems for growing businesses.",
    url: "https://www.william-purnell.com/",
  },
});

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <main className="bg-background-dark text-slate-100">
      {getWebsiteSchema()}
      {getPersonSchema()}
      {getLocalBusinessSchema()}
      {getAutomationServiceSchema()}
      <HeroSection />

      <SectionWrapper
        eyebrow="The problem"
        title="Your business is losing hours to manual processes."
        description="Most teams do not need vague AI hype. They need the repetitive work, handoffs, and reporting loops removed from everyday operations."
        className="bg-slate-950"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="flex gap-4 border border-white/10 bg-white/[0.04] p-5 text-slate-200"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-accent-amber/30 bg-accent-amber/10 text-accent-amber">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="pt-2 text-lg font-semibold text-white">{title}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="The solution"
        title="Practical AI automation, built around your workflow."
        description="Start with a focused consultation to identify the highest-value opportunities, then design, build, and integrate reliable automation systems your team can actually use."
        className="bg-background-dark"
        headerAlign="right"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {outcomes.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="flex min-h-24 gap-3 border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold leading-6 text-slate-100"
            >
              <Icon className="mt-1 h-5 w-5 shrink-0 text-accent-amber" aria-hidden="true" />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="services"
        eyebrow="Services"
        title="Automation-first software for teams with real operating pressure."
        description="The focus is not novelty. It is replacing repeated admin, scattered data, and slow handoffs with reliable systems that people can trust."
        className="bg-slate-950"
        headerAlign="center"
      >
        <div className="mb-8 grid gap-6 border border-accent-amber/25 bg-accent-amber/10 p-6 md:grid-cols-[0.78fr_1fr] md:items-center">
          <div>
            <p className="text-kicker">For architecture practices</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Explore Architecture AI & Automation Audit.
            </h3>
          </div>
          <div>
            <p className="max-w-3xl text-sm leading-7 text-slate-200">
              A fixed-scope audit service for architecture practices that want to identify practical AI and automation opportunities before investing in tools, prototypes or custom software.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={architectureAuditBasePath} className="btn-primary">
                Explore Architecture AI & Automation Audit
              </a>
              <a href={`${architectureAuditBasePath}#compare`} className="btn-secondary">
                Compare Audit Options
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Process"
        title="A practical build process for automation work."
        description="Small, staged releases make it easier to prove value, protect business continuity, and avoid overbuilding."
        className="bg-background-dark"
      >
        <ProcessTimeline />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Projects"
        title="Recent builds and product experiments."
        description="A selection of web platforms, e-commerce systems, and AI product work."
        className="bg-slate-950"
        headerAlign="right"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Tech stack"
        title="Modern engineering foundations behind the automation."
        description="AI workflows only work when the surrounding software is secure, fast, and maintainable."
        className="bg-background-dark"
      >
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 shadow-panel"
            >
              {tech}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Client results"
        title="Clear communication, useful software, and systems built around the user."
        className="bg-slate-950"
        headerAlign="center"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.company}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
      <LazyContactFormSection
        title="Book an automation consultation."
        subHeading="Share the workflow that is slowing your team down. We can discuss where automation could save time, connect tools, or reduce manual work."
      />
    </main>
  );
}
