import {
  ArchitectureAuditCTA,
  ArchitectureAuditHeroVisual,
  AuditStickyCTA,
  ParentContent,
} from "@/components/ArchitectureAuditComponents";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  architectureAuditBasePath,
  architectureAuditBookingUrl,
  architectureAuditContactEmail,
  architectureAuditOffers,
} from "@/data/architectureAuditOffers";
import { getBreadcrumbSchema, getFAQSchema, getSEOTags } from "@/lib/seo";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Architecture AI & Automation Audit | William Purnell",
  description:
    "AI and automation audits for architecture practices. Review drawing, document, planning and project-information workflows before committing budget to new tools or custom software.",
  keywords: [
    "architecture AI audit",
    "architecture automation audit",
    "AI automation for architecture practices",
    "drawing workflow automation",
    "technical detail automation",
  ],
  canonicalUrlRelative: architectureAuditBasePath,
  openGraph: {
    title: "Architecture AI & Automation Audit | William Purnell",
    description:
      "Find the architecture workflows where AI and automation can make a practical difference.",
    url: `https://www.william-purnell.com${architectureAuditBasePath}`,
  },
});

export default function ArchitectureAIAutomationAudit() {
  return (
    <main className="bg-background-dark pb-28 text-slate-100 sm:pb-24">
      {getBreadcrumbSchema([
        { name: "Home", url: "https://www.william-purnell.com/" },
        { name: "Services", url: "https://www.william-purnell.com/services" },
        {
          name: "Architecture AI & Automation Audit",
          url: `https://www.william-purnell.com${architectureAuditBasePath}`,
        },
      ])}
      {getFAQSchema([
        {
          question: "What is the difference between the three audit options?",
          answer:
            "Essential gives a focused diagnostic, Discovery Sprint provides deeper operational assessment, and Validation Programme adds one limited non-production proof of concept.",
        },
      ])}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Architecture AI & Automation Audit",
            serviceType: [
              "Architecture workflow audit",
              "Architecture AI audit",
              "Automation discovery",
              "Drawing and file readiness assessment",
            ],
            provider: {
              "@type": "Person",
              name: "William Purnell",
              email: architectureAuditContactEmail,
              url: "https://www.william-purnell.com",
            },
            areaServed: ["London", "United Kingdom"],
            url: `https://www.william-purnell.com${architectureAuditBasePath}`,
            offers: architectureAuditOffers.map((offer) => ({
              "@type": "Offer",
              name: offer.name,
              price: offer.price.replace("£", "").replace(" + VAT", "").replace(",", ""),
              priceCurrency: "GBP",
              url: `https://www.william-purnell.com${architectureAuditBasePath}/${offer.slug}`,
            })),
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: architectureAuditBookingUrl,
            },
          }),
        }}
      />

      <section className="relative overflow-hidden border-b border-white/10 bg-hero-glow py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-grid bg-[size:28px_28px] opacity-20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Breadcrumbs
              className="mb-8"
              items={[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                {
                  href: architectureAuditBasePath,
                  label: "Architecture AI & Automation Audit",
                },
              ]}
            />
            <p className="mb-5 inline-flex border border-accent-amber/30 bg-white/5 px-3 py-2 text-kicker">
              AI & Automation Audits for Architecture Practices
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Find the workflows where AI and automation can make a practical difference.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Review the drawing, document, planning and project-information workflows that consume the most time in your practice. Identify practical opportunities, assess readiness and leave with a prioritised plan before committing budget to new tools or custom software.
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-accent-amber pl-5 text-base leading-7 text-slate-200">
              Built around your real workflows, representative files and operational priorities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={architectureAuditBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book an Architecture AI Audit
              </a>
              <Link
                href="#compare"
                className="btn-secondary"
              >
                Compare Audit Options
              </Link>
            </div>
          </div>
          <ArchitectureAuditHeroVisual />
        </div>
      </section>

      <ParentContent />

      <ArchitectureAuditCTA
        title="Start with the workflows taking the most time."
        copy="Share the parts of your drawing, document, planning or project-information workflow that feel repetitive, difficult to manage or overly manual. The audit will help identify the most practical next step."
        secondaryHref="/contact"
      />
      <AuditStickyCTA />
    </main>
  );
}
