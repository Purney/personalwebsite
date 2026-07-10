import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";
import LazyArchitectureROICalculator from "@/components/LazyArchitectureROICalculator";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiClipboard,
  FiFileText,
  FiMap,
  FiShield,
  FiTarget,
} from "react-icons/fi";
import {
  architectureAuditBasePath,
  architectureAuditBookingUrl,
  architectureAuditOffers,
  architectureProblems,
  parentDeliverables,
  parentFaqs,
  parentProcessSteps,
} from "@/data/architectureAuditOffers";

export function AuditStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background-dark/95 px-4 py-3 text-slate-100 shadow-panel backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-white">
          Architecture AI & Automation Audit
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href={architectureAuditBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-4 py-2 text-xs"
          >
            Book an Audit
          </a>
          <Link href="#compare" className="btn-secondary px-4 py-2 text-xs">
            Compare Options
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ArchitectureAuditHeroVisual() {
  const inputs = ["Site plans", "Elevations", "Details", "Planning docs"];
  const outputs = [
    {
      title: "Workflow review",
      copy: "Map repeated handoffs and identify where time is being lost.",
    },
    {
      title: "Standards check",
      copy: "Compare automation ideas against drawing, document and QA expectations.",
    },
    {
      title: "Opportunity score",
      copy: "Prioritise candidates by value, evidence quality and delivery risk.",
    },
    {
      title: "Roadmap",
      copy: "Turn the strongest opportunities into a practical next-step plan.",
    },
  ];

  return (
    <div className="relative overflow-hidden border border-white/10 bg-slate-950/80 p-5 shadow-panel">
      <div className="absolute inset-0 bg-radial-grid bg-[size:24px_24px] opacity-15" aria-hidden="true" />
      <div className="relative grid gap-4">
        <div className="grid grid-cols-2 gap-3">
          {inputs.map((item, index) => (
            <div key={item} className="border border-white/10 bg-white/[0.04] p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-amber">
                  0{index + 1}
                </span>
                <span className="h-2 w-8 border-t border-accent-amber/60" />
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
          <div className="h-px bg-gradient-to-r from-transparent to-accent-amber/70" />
          <div className="border border-accent-amber/30 bg-accent-amber/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-amber">
            Review
          </div>
          <div className="h-px bg-gradient-to-r from-accent-amber/70 to-transparent" />
        </div>
        <div className="grid gap-3">
          {outputs.map((item, index) => (
            <div key={item.title} className="flex items-center gap-3 border border-white/10 bg-white/[0.04] p-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent-amber/40 text-xs font-semibold text-accent-amber">
                {index + 1}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {item.copy}
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
    <article className="flex h-full flex-col border border-white/10 bg-white/[0.04] p-6 transition hover:border-accent-amber/60 hover:bg-white/[0.07]">
      <p className="text-kicker">
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
        className="mt-auto inline-flex pt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent-amber transition hover:text-white hover:underline"
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
        <thead className="bg-white/[0.06] text-xs uppercase tracking-[0.16em] text-accent-amber">
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
          <p className="text-kicker">
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
          <p className="text-kicker">
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
            className="btn-primary"
          >
            Book an Architecture AI Audit
          </a>
          <Link
            href={secondaryHref}
            className="btn-secondary"
          >
            Talk Through the Options
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ParentContent() {
  const positioningCards = [
    {
      title: "Practical workflow value",
      copy: "Recommendations are weighted by how much time, cost or friction the workflow can realistically remove.",
      icon: FiTarget,
    },
    {
      title: "File readiness",
      copy: "Representative drawings, schedules and documents are reviewed for structure, consistency and automation potential.",
      icon: FiFileText,
    },
    {
      title: "Implementation risk",
      copy: "Each opportunity is checked for human judgement, change-management effort and operational dependency before it is prioritised.",
      icon: FiShield,
    },
  ];

  const deliverableIcons = [FiClipboard, FiCheckCircle, FiTarget, FiMap];

  return (
    <>
      <SectionWrapper
        eyebrow="Positioning"
        title="Not a generic AI tools review."
        description="The service does not begin with a list of tools. It begins with how the practice currently works, where time is being lost and what evidence exists in drawings, files and internal processes."
        headerAlign="center"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {positioningCards.map(({ title, copy, icon: Icon }) => (
            <article key={title} className="border border-white/10 bg-white/[0.04] p-6">
              <span className="mb-5 flex h-11 w-11 items-center justify-center border border-accent-amber/30 bg-accent-amber/10 text-accent-amber">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Process"
        title="A practical process for deciding what to improve first."
        className="bg-slate-950"
        headerAlign="right"
      >
        <ProcessSteps />
        <div className="mt-8 border border-accent-amber/25 bg-accent-amber/10 p-6 text-sm font-semibold leading-7 text-slate-100">
          The Validation Programme also includes a limited proof of concept for one priority opportunity, tested against representative evidence.
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Problems"
        title="When an architecture AI and automation audit is the right next step."
      >
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div className="border border-accent-amber/25 bg-accent-amber/10 p-6">
            <h3 className="text-2xl font-semibold text-white">
              The audit is most useful when the pressure is already visible.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              These signals usually point to workflows where better process design, AI assistance or custom automation could help.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {architectureProblems.map((problem) => (
              <div key={problem} className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-200">
                {problem}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <LazyArchitectureROICalculator />

      <SectionWrapper
        id="compare"
        eyebrow="Audit options"
        title="Choose the level of evidence your practice needs."
        description="Each package is fixed scope. Depth, stakeholder input, evidence review and deliverables increase by package."
        className="bg-slate-950"
        headerAlign="center"
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
        headerAlign="right"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div className="grid gap-4 md:grid-cols-2">
            {parentDeliverables.map((item, index) => {
              const Icon = deliverableIcons[index % deliverableIcons.length];

              return (
                <div key={item} className="flex min-h-28 gap-3 border border-white/10 bg-white/[0.04] p-5 text-sm font-semibold leading-6 text-slate-100">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-accent-amber" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-slate-300">
            <h3 className="text-2xl font-semibold text-white">
              Built for a leadership decision.
            </h3>
            <p className="mt-4">
              The handover is designed to make the next step clearer: what to improve, what to avoid and what evidence is needed before implementation.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Questions" title="Common questions before starting." className="bg-slate-950" headerAlign="center">
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
          <Breadcrumbs
            className="mb-8"
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              {
                href: architectureAuditBasePath,
                label: "Architecture AI & Automation Audit",
              },
              {
                href: `${architectureAuditBasePath}/${offer.slug}`,
                label: offer.shortName,
              },
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="mb-5 inline-flex border border-accent-amber/30 bg-white/5 px-3 py-2 text-kicker">
                {offer.price}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                {offer.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{offer.positioning}</p>
              <p className="mt-6 max-w-3xl border-l-2 border-accent-amber pl-5 text-base leading-7 text-slate-200">
                Decision supported: {offer.decision}
              </p>
            </div>
            <div className="border border-white/10 bg-slate-950/80 p-6">
              <dl className="space-y-5">
                {offer.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-kicker">{fact.label}</dt>
                    <dd className="mt-2 text-sm leading-6 text-slate-200">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={architectureAuditBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full"
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

      <SectionWrapper
        eyebrow="Client inputs"
        title="What your practice needs to provide."
        description="A small amount of representative context is enough to keep the audit grounded in how your practice actually works."
      >
        <Checklist items={offer.clientInputs} variant="compact" />
      </SectionWrapper>

      <SectionWrapper eyebrow="Engagement flow" title="How the engagement works." className="bg-slate-950">
        <ProcessSteps steps={offer.stages} />
      </SectionWrapper>

      <SectionWrapper className="bg-background-dark">
        <SplitChecklistSection
          eyebrow="Handover"
          title="What you receive at the end."
          copy="The final handover is designed for decision makers: clear enough to act on, specific enough to brief the next phase, and grounded in the evidence reviewed during the audit."
          items={offer.finalHandover}
          icon={FiClipboard}
          align="right"
        />
      </SectionWrapper>

      <SectionWrapper className="bg-slate-950">
        <SplitChecklistSection
          eyebrow="Boundaries"
          title="Scope boundaries and exclusions."
          copy="This section is intentionally explicit so the audit stays focused on discovery, evaluation and practical next steps."
          items={offer.exclusions}
          icon={FiAlertTriangle}
          align="left"
        />
        {offer.slug === "validation-programme" && (
          <div className="mt-8 border border-accent-amber/25 bg-accent-amber/10 p-6 text-sm font-semibold leading-7 text-slate-100">
            The prototype is a limited feasibility exercise. It is not production software and does not include live integrations, deployment, user support, monitoring, data migration, security certification or guaranteed production outcomes.
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper className="bg-background-dark">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div className="border border-accent-amber/25 bg-accent-amber/10 p-6">
            <HeaderBlock
              eyebrow="Success"
              title="What success looks like."
              copy="Success is measured by decision clarity, not by pushing a tool into production before the evidence is ready."
              icon={FiCheckCircle}
            />
            <div className="mt-8 border-t border-white/10 pt-5 text-sm leading-7 text-slate-200">
              <strong className="text-white">Payment terms:</strong> {offer.paymentTerms}
            </div>
          </div>
          <Checklist items={offer.successLooksLike} variant="stacked" />
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

function HeaderBlock({ eyebrow, title, copy, icon: Icon }) {
  return (
    <div>
      <div className="mb-5 flex h-12 w-12 items-center justify-center border border-accent-amber/30 bg-background-dark/60 text-accent-amber">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="text-kicker">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
        {copy}
      </p>
    </div>
  );
}

function SplitChecklistSection({ eyebrow, title, copy, items, icon, align = "left" }) {
  const header = (
    <div className={align === "right" ? "lg:pl-8" : "lg:pr-8"}>
      <HeaderBlock eyebrow={eyebrow} title={title} copy={copy} icon={icon} />
    </div>
  );

  const checklist = <Checklist items={items} variant="stacked" />;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_0.8fr] lg:items-start">
      {align === "right" ? (
        <>
          {checklist}
          {header}
        </>
      ) : (
        <>
          {header}
          {checklist}
        </>
      )}
    </div>
  );
}

function Checklist({ items, variant = "grid" }) {
  const wrapperClassName =
    variant === "stacked"
      ? "grid gap-4"
      : variant === "compact"
        ? "grid gap-4 md:grid-cols-3"
        : "grid gap-4 md:grid-cols-2";

  return (
    <div className={wrapperClassName}>
      {items.map((item) => (
        <div key={item} className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-200">
          {item}
        </div>
      ))}
    </div>
  );
}
