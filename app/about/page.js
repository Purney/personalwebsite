import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";
import { HireReasonsData } from "@/data/servicesData";
import { architectureAuditBasePath } from "@/data/architectureAuditOffers";
import headshot from "../../assets/images/william-purnell-headshot.png";
import Image from "next/image";
import Link from "next/link";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getPersonSchema,
  getSEOTags,
} from "@/lib/seo";

const focusAreas = [
  {
    title: "Workflow automation",
    copy: "Mapping repeated admin, handoffs, reporting loops and inbox-heavy processes before building the software that removes the drag.",
    href: "/services/ai-workflow-automation",
  },
  {
    title: "AI integration",
    copy: "Adding OpenAI and AI-assisted workflows where they have a defined job: classification, extraction, retrieval, drafting, routing or decision support.",
    href: "/services/ai-agent-integration",
  },
  {
    title: "Internal tools",
    copy: "Building dashboards, portals and operational systems that give teams one reliable place to manage work.",
    href: "/services/custom-internal-tools",
  },
  {
    title: "Architecture audits",
    copy: "Helping architecture practices identify where AI and automation can support drawing, document, planning and project-information workflows.",
    href: architectureAuditBasePath,
  },
];

const principles = [
  "Start with the workflow, not the tool.",
  "Keep humans in control where judgement matters.",
  "Build small enough to prove value, solid enough to keep.",
  "Make recommendations evidence-led and implementation-aware.",
];

export const metadata = getSEOTags({
  title: "About William Purnell | AI Automation Developer London",
  description:
    "Will is a London-based AI automation developer and software engineer building workflows, internal tools, and practical AI integrations for businesses.",
  canonicalUrlRelative: "/about",
  openGraph: {
    title: "About William Purnell | AI Automation Developer London",
    description:
      "London-based software engineer building practical automation, internal tools, and AI-integrated workflows.",
    url: "https://www.william-purnell.com/about",
  },
});

export default async function About() {
  return (
    <main className="bg-background-dark text-slate-100">
      {getPersonSchema()}
      {getLocalBusinessSchema()}
      {getBreadcrumbSchema([
        { name: "Home", url: "https://www.william-purnell.com/" },
        { name: "About", url: "https://www.william-purnell.com/about" },
      ])}

      <section className="relative overflow-hidden border-b border-white/10 bg-hero-glow py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-grid bg-[size:28px_28px] opacity-20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <Image
              className="w-full border border-white/10 object-cover shadow-panel"
              src={headshot}
              alt="William Purnell headshot"
              priority
            />
          </div>
          <div>
            <Breadcrumbs
              className="mb-8"
              items={[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
              ]}
            />
            <p className="mb-5 inline-flex border border-accent-amber/30 bg-white/5 px-3 py-2 text-kicker">
              About William Purnell
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              I build practical AI automation around real operational work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I am a London-based software engineer helping businesses replace repeated admin, scattered data and slow handoffs with maintainable workflows, internal tools and AI-assisted systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href={architectureAuditBasePath} className="btn-secondary">
                View Audit Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper
        eyebrow="Current focus"
        title="Automation that earns its place inside the business."
        description="The work now sits at the intersection of software engineering, workflow design and practical AI implementation."
        headerAlign="center"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <Link
              key={area.title}
              href={area.href}
              className={`border border-white/10 bg-white/[0.04] p-6 transition hover:border-accent-amber/60 hover:bg-white/[0.07] ${
                index % 2 === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <p className="text-kicker">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{area.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{area.copy}</p>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Experience"
        title="A software engineering background, applied to operational problems."
        description="My career started in a .NET development agency, then moved into product engineering at Instanda, an InsurTech company focused on modernising insurance operations."
        className="bg-slate-950"
        headerAlign="right"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div className="border border-accent-amber/25 bg-accent-amber/10 p-6">
            <h2 className="text-2xl font-semibold text-white">The useful bit.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              I can talk to business owners about process pain, then translate that into data structures, APIs, screens, automations and AI guardrails that developers can maintain and teams can actually use.
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-8 text-slate-300">
              I work with modern engineering foundations including .NET, React, Next.js, Tailwind, MongoDB, Azure, Vercel, Stripe, APIs and OpenAI. The stack matters, but only after the workflow is understood.
            </p>
            <p className="text-base leading-8 text-slate-300">
              My own AI product experiments, including{" "}
              <Link href="/projects/text-2-quiz" className="text-accent-amber hover:text-white hover:underline">
                Text2Quiz
              </Link>
              , also shaped how I think about practical AI: the hard part is rarely calling a model. The hard part is making the surrounding workflow reliable, useful and worth changing.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Approach"
        title="Clear recommendations before code. Staged delivery after that."
        className="bg-background-dark"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="border border-white/10 bg-white/[0.04] p-5 text-sm font-semibold leading-7 text-slate-100">
                {principle}
              </div>
            ))}
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-slate-300">
            <h2 className="mb-3 text-2xl font-semibold text-white">How projects usually start.</h2>
            <p>
              Most work begins with a consultation or audit: understand the current process, identify the highest-value opportunity, then decide whether the next step should be an integration, internal tool, AI workflow, prototype or roadmap.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Why work with me"
        title="A practical partner for teams that need momentum without guesswork."
        description="The goal is to help you make better automation decisions before money is spent on the wrong tool, prototype or build."
        className="bg-slate-950"
        headerAlign="center"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {HireReasonsData.map((reason) => (
            <article key={reason.title} className="border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{reason.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <ContactForm
        title="Start with the workflow that is slowing you down."
        subHeading="Share the process, toolchain or AI idea you are considering and I can help identify the most practical next step."
      />
    </main>
  );
}
