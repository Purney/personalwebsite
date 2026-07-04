import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import LazyContactFormSection from "@/components/LazyContactFormSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectCard from "@/components/ProjectCard";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Data as services } from "@/data/servicesData";
import { Data as projects } from "@/data/projectsData";
import { Data as testimonials } from "@/data/testimonialData";
import {
  getAutomationServiceSchema,
  getLocalBusinessSchema,
  getPersonSchema,
  getSEOTags,
  getWebsiteSchema,
} from "@/lib/seo";

const painPoints = [
  "Copying data between systems",
  "Responding to repetitive emails",
  "Manual reporting",
  "Slow customer onboarding",
  "Disconnected tools",
  "No clear AI strategy",
];

const outcomes = [
  "Automate repetitive admin tasks",
  "Connect your tools and data",
  "Build internal dashboards and workflows",
  "Integrate OpenAI and AI agents into real business processes",
  "Replace manual handoffs with reliable systems",
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
          {painPoints.map((point) => (
            <div
              key={point}
              className="border border-white/10 bg-white/[0.04] p-5 text-slate-200"
            >
              <span className="mb-4 block h-1 w-10 bg-gradient-to-r from-accent-cyan to-accent-purple" />
              <h3 className="text-lg font-semibold text-white">{point}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="The solution"
        title="Practical AI automation, built around your workflow."
        description="Start with a focused consultation to identify the highest-value opportunities, then design, build, and integrate reliable automation systems your team can actually use."
        className="bg-background-dark"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="border border-accent-cyan/20 bg-accent-cyan/5 p-4 text-sm font-semibold leading-6 text-slate-100"
            >
              {outcome}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="services"
        eyebrow="Services"
        title="Automation-first software for teams with real operating pressure."
        description="The focus is not novelty. It is replacing repeated admin, scattered data, and slow handoffs with reliable systems that people can trust."
        className="bg-background-dark"
      >
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
        className="bg-slate-950"
      >
        <ProcessTimeline />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Projects"
        title="Recent builds and product experiments."
        description="A selection of web platforms, e-commerce systems, and AI product work."
        className="bg-background-dark"
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
