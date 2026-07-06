import Link from "next/link";
import HeroWorkflowPreview from "./HeroWorkflowPreview";

const consultationUrl = "https://calendly.com/hello-william-purnell/initial-call";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100vh-84px)] overflow-hidden bg-background-dark py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-accent-cyan/15 bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_62%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(5,10,23,0.88)_68%)]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-5 inline-flex border border-accent-amber/30 bg-white/5 px-3 py-2 text-kicker">
            AI automation and workflow engineering
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
            I Build AI Automation Systems for Businesses That Want to Move Faster
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I help companies design, build, and integrate AI-powered workflows,
            internal tools, and automations that reduce manual work and improve
            operational efficiency.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Free Automation Consultation
            </a>
            <Link
              href="/projects"
              className="btn-secondary"
            >
              View Automation Projects
            </Link>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              ["5+", "years software engineering"],
              [".NET", "React, Next.js"],
              ["UK", "OpenAI integration"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold text-white">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-300">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroWorkflowPreview />
      </div>
    </section>
  );
}
