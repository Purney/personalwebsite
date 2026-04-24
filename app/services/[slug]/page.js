import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";
import WorkflowVisual from "@/components/WorkflowVisual";
import { Data as services, getServiceBySlug } from "@/data/servicesData";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getSEOTags,
  getSingleServiceSchema,
} from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return getSEOTags();
  }

  return getSEOTags({
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    canonicalUrlRelative: `/services/${service.slug}`,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `https://www.william-purnell.com/services/${service.slug}`,
    },
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-background-dark text-slate-100">
      {getSingleServiceSchema(service)}
      {getFAQSchema(service.faqs)}
      {getBreadcrumbSchema([
        { name: "Home", url: "https://www.william-purnell.com/" },
        { name: "Services", url: "https://www.william-purnell.com/services" },
        {
          name: service.title,
          url: `https://www.william-purnell.com/services/${service.slug}`,
        },
      ])}

      <section className="relative overflow-hidden border-b border-white/10 bg-hero-glow py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-grid bg-[size:28px_28px] opacity-20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link
                href="/services"
                className="inline-flex border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-cyan transition hover:border-accent-cyan/60 hover:text-white"
              >
                Back to services
              </Link>
            </nav>
            <p className="mb-5 inline-flex border border-accent-cyan/30 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              London and UK automation service
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              {service.heroTitle || service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {service.longDescription}
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-accent-cyan pl-5 text-base leading-7 text-slate-300">
              Best for: {service.audience}
            </p>
          </div>
          <WorkflowVisual title={`${service.title} workflow`} steps={service.workflow} />
        </div>
      </section>

      <SectionWrapper
        eyebrow="How it works"
        title={`${service.title} that fits the way your team already works.`}
        description="Each project starts by understanding the current workflow before deciding what should be automated, what should stay human, and which systems need to talk to each other."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {service.bodySections.map((section) => (
            <article
              key={section.heading}
              className="border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold text-white">{section.heading}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {section.copy}
              </p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Problems solved"
        title={`When ${service.title.toLowerCase()} is the right move.`}
        description="The best automation projects start with a workflow that is already repeated, measurable, and slowing people down."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {service.painPoints.map((point) => (
            <article key={point} className="border border-white/10 bg-white/[0.04] p-6">
              <span className="mb-5 block h-1 w-10 bg-gradient-to-r from-accent-cyan to-accent-purple" />
              <p className="text-base leading-7 text-slate-200">{point}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="What gets built"
        title="A practical system, not a disconnected AI demo."
        className="bg-slate-950"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {service.deliverables.map((deliverable) => (
            <div
              key={deliverable}
              className="border border-accent-cyan/20 bg-accent-cyan/5 p-5 text-base font-semibold leading-7 text-slate-100"
            >
              {deliverable}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Questions"
        title="Common questions before starting."
        className="bg-slate-950"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {service.faqs.map((faq) => (
            <article key={faq.question} className="border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Related services"
        title="Connected automation capabilities."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {services
            .filter((related) => related.slug !== service.slug)
            .slice(0, 3)
            .map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="border border-white/10 bg-white/[0.04] p-5 transition hover:border-accent-cyan/60 hover:bg-white/[0.07]"
              >
                <h3 className="text-lg font-semibold text-white">{related.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{related.description}</p>
              </Link>
            ))}
        </div>
      </SectionWrapper>

      <ContactForm
        title={`Get a free ${service.title.toLowerCase()} audit.`}
        subHeading="Share the current process, tools, and outcome you want. I will identify the practical automation opportunities before we discuss a build."
      />
    </main>
  );
}
