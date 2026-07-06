import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";
import ArchitectureROICalculator from "@/components/ArchitectureROICalculator";
import {
  architectureAuditBasePath,
  architectureAuditBookingUrl,
  architectureAuditOffers,
  architectureProblems,
  parentDeliverables,
  parentFaqs,
  parentProcessSteps,
} from "@/data/architectureAuditOffers";

export function ArchitectureAuditHeroVisual() {
  const inputs = ["Site plans", "Elevations", "Details", "Planning docs"];
  const outputs = ["Workflow review", "Standards check", "Opportunity score", "Roadmap"];

  return (
    <div className="relative overflow-hidden border border-white/10 bg-slate-950/80 p-5 shadow-panel">
      <div className="absolute inset-0 bg-radial-grid bg-[size:24px_24px] opacity-15" aria-hidden="true" />
      <div className="relative grid gap-4">
        <div className="grid grid-cols-2 gap-3">
          {inputs.map((item, index) => (
            <div key={item} className="border border-white/10 bg-white/[0.04] p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-cyan">
                  0{index + 1}
                </span>
                <span className="h-2 w-8 border-t border-accent-cyan/60" />
              </div>
              <div className="space-y-2">
                <span className="block h-1 w-full bg-white/20" />
                <span className="block h-1 w-3/4 bg-white/10" />
                <span className="block h-1 w-1/2 bg-white/10" />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="h-px bg-gradient-to-r from-transparent to-accent-cyan/70" />
          <div className="border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-cyan">
            Review
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/70 to-transparent" />
        </div>
        <div className="grid gap-3">
          {outputs.map((item, index) => (
            <div key={item} className="flex items-center gap-3 border border-accent-cyan/20 bg-accent-cyan/5 p-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent-cyan/40 text-xs font-semibold text-accent-cyan">
                {index + 1}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{item}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Evidence-led decision point with human review built in.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OfferCard({ offer }) {
  return (
    <article className="flex h-full flex-col border border-white/10 bg-white/[0.04] p-6 transition hover:border-accent-cyan/60 hover:bg-white/[0.07]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
        {offer.price}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{offer.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{offer.bestFor}</p>
      <dl className="mt-5 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-slate-100">Duration</dt>
          <dd className="text-slate-400">{offer.duration}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-100">Main outcome</dt>
          <dd className="text-slate-400">{offer.mainOutcome}</dd>
        </div>
      </dl>
      <Link
        href={`${architectureAuditBasePath}/${offer.slug}`}
        className="mt-auto inline-flex pt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent-cyan"
      >
        View package
      </Link>
    </article>
  );
}

export function OfferComparisonTable() {
  const rows = [
    ["Best for", "bestFor"],
    ["Duration", "duration"],
    ["Main outcome", "mainOutcome"],
    ["Workflows reviewed", "scope"],
    ["Stakeholder engagement", "stakeholderEngagement"],
    ["Drawing and file review", "fileReview"],
    ["Prototype validation", "prototype"],
  ];

  return (
    <div className="overflow-x-auto border border-white/10">
      <table className="w-full min-w-[920px] border-collapse text-left text-sm">
        <thead className="bg-white/[0.06] text-xs uppercase tracking-[0.16em] text-accent-cyan">
          <tr>
            <th className="border-b border-white/10 px-5 py-4">Package</th>
            {architectureAuditOffers.map((offer) => (
              <th key={offer.slug} className="border-b border-white/10 px-5 py-4">
                {offer.shortName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, key]) => (
            <tr key={label} className="border-b border-white/10 last:border-b-0">
              <th className="w-48 bg-white/[0.03] px-5 py-4 font-semibold text-white">{label}</th>
              {architectureAuditOffers.map((offer) => (
                <td key={`${offer.slug}-${key}`} className="px-5 py-4 leading-6 text-slate-300">
                  {offer[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProcessSteps({ steps = parentProcessSteps }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <article key={step.title} className="border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{step.copy}</p>
        </article>
      ))}
    </div>
  );
}

export function FAQGrid({ faqs = parentFaqs }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {faqs.map((faq) => {
        const question = typeof faq === "string" ? faq.split("?")[0] + "?" : faq.question;
        const answer = typeof faq === "string" ? faq.slice(question.length).trim() : faq.answer;

        return (
          <article key={question} className="border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">{question}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{answer}</p>
          </article>
        );
      })}
    </div>
  );
}

export function ArchitectureAuditCTA({ title, copy, secondaryHref = "/contact" }) {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{copy}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <a
            href={architectureAuditBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent-cyan px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background-dark"
          >
            Book an Architecture AI Audit
          </a>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-accent-cyan/60 hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background-dark"
          >
            Talk Through the Options
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ParentContent() {
  return (
    <>
      <SectionWrapper
        eyebrow="Positioning"
        title="Not a generic AI tools review."
        description="The service does not begin with a list of tools. It begins with how the practice currently works, where time is being lost and what evidence exists in drawings, files and internal processes."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {["Practical workflow value", "File readiness", "Implementation risk"].map((item) => (
            <article key={item} className="border border-white/10 bg-white/[0.04] p-6">
              <span className="mb-5 block h-1 w-10 bg-gradient-to-r from-accent-cyan to-accent-purple" />
              <h3 className="text-xl font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Recommendations are judged against operational value, available evidence and the level of human judgement required.
              </p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Process"
        title="A practical process for deciding what to improve first."
        className="bg-slate-950"
      >
        <ProcessSteps />
        <div className="mt-8 border border-accent-cyan/20 bg-accent-cyan/5 p-6 text-sm font-semibold leading-7 text-slate-100">
          The Validation Programme also includes a limited proof of concept for one priority opportunity, tested against representative evidence.
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Problems"
        title="When an architecture AI and automation audit is the right next step."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {architectureProblems.map((problem) => (
            <div key={problem} className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-200">
              {problem}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <ArchitectureROICalculator />

      <SectionWrapper
        id="compare"
        eyebrow="Audit options"
        title="Choose the level of evidence your practice needs."
        description="Each package is fixed scope. Depth, stakeholder input, evidence review and deliverables increase by package."
        className="bg-slate-950"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {architectureAuditOffers.map((offer) => (
            <OfferCard key={offer.slug} offer={offer} />
          ))}
        </div>
        <div className="mt-8">
          <OfferComparisonTable />
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Outputs"
        title="What you leave with."
        description="Depth and deliverables vary by package, but every engagement is designed to help leadership make a clearer investment decision."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {parentDeliverables.map((item) => (
            <div key={item} className="border border-accent-cyan/20 bg-accent-cyan/5 p-5 text-sm font-semibold leading-6 text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Questions" title="Common questions before starting." className="bg-slate-950">
        <FAQGrid />
      </SectionWrapper>
    </>
  );
}

export function OfferDetailPage({ offer }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-hero-glow py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-grid bg-[size:28px_28px] opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
            <Link href="/services" className="text-slate-400 hover:text-white">Services</Link>
            <span className="text-slate-600">/</span>
            <Link href={architectureAuditBasePath} className="text-accent-cyan hover:text-white">
              Architecture AI & Automation Audit
            </Link>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="mb-5 inline-flex border border-accent-cyan/30 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
                {offer.price}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                {offer.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{offer.positioning}</p>
              <p className="mt-6 max-w-3xl border-l-2 border-accent-cyan pl-5 text-base leading-7 text-slate-200">
                Decision supported: {offer.decision}
              </p>
            </div>
            <div className="border border-white/10 bg-slate-950/80 p-6">
              <dl className="space-y-5">
                {offer.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-cyan">{fact.label}</dt>
                    <dd className="mt-2 text-sm leading-6 text-slate-200">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={architectureAuditBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center bg-accent-cyan px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-white"
              >
                Book this package
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper eyebrow="Fit" title="Who it is for." description={offer.bestFor}>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="border border-white/10 bg-white/[0.04] p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-white">What this helps decide</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{offer.decision}</p>
          </article>
          <article className="border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold text-white">Main outcome</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{offer.mainOutcome}</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Included" title="What is included." className="bg-slate-950">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offer.included.map((item) => (
            <article key={item.title} className="border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Client inputs" title="What your practice needs to provide.">
        <Checklist items={offer.clientInputs} />
      </SectionWrapper>

      <SectionWrapper eyebrow="Engagement flow" title="How the engagement works." className="bg-slate-950">
        <ProcessSteps steps={offer.stages} />
      </SectionWrapper>

      <SectionWrapper eyebrow="Handover" title="What you receive at the end.">
        <Checklist items={offer.finalHandover} />
      </SectionWrapper>

      <SectionWrapper eyebrow="Boundaries" title="Scope boundaries and exclusions." className="bg-slate-950">
        <Checklist items={offer.exclusions} />
        {offer.slug === "validation-programme" && (
          <div className="mt-8 border border-accent-cyan/20 bg-accent-cyan/5 p-6 text-sm font-semibold leading-7 text-slate-100">
            The prototype is a limited feasibility exercise. It is not production software and does not include live integrations, deployment, user support, monitoring, data migration, security certification or guaranteed production outcomes.
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper eyebrow="Success" title="What success looks like.">
        <Checklist items={offer.successLooksLike} />
        <div className="mt-8 border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-slate-300">
          <strong className="text-white">Payment terms:</strong> {offer.paymentTerms}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Questions" title="Package-specific FAQ." className="bg-slate-950">
        <FAQGrid faqs={offer.faqs} />
      </SectionWrapper>

      <ArchitectureAuditCTA
        title={`Discuss the ${offer.shortName}.`}
        copy="Share the workflows, files or operational questions that prompted the enquiry and we can confirm whether this package is the right fit."
        secondaryHref="/contact"
      />
      <ContactForm
        title={`Enquire about the ${offer.shortName}.`}
        subHeading="Tell me which architecture workflows you want to review and the kind of decision your practice needs to make."
        defaultService={offer.name}
        extraServiceOptions={architectureAuditOffers.map((item) => ({ title: item.name }))}
        messageLabel="Which architecture workflow should we discuss?"
        messagePlaceholder="For example: planning pack preparation, drawing colourisation, technical detail search, QA checks or file organisation."
      />
    </>
  );
}

function Checklist({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-200">
          {item}
        </div>
      ))}
    </div>
  );
}
