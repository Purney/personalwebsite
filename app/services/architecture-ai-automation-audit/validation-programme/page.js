import { OfferDetailPage } from "@/components/ArchitectureAuditComponents";
import {
  architectureAuditBasePath,
  architectureAuditBookingUrl,
  architectureAuditContactEmail,
  getArchitectureAuditOffer,
} from "@/data/architectureAuditOffers";
import { getBreadcrumbSchema, getSEOTags } from "@/lib/seo";
import { notFound } from "next/navigation";

const offer = getArchitectureAuditOffer("validation-programme");

export const metadata = getSEOTags({
  title: "AI & Automation Validation Programme | William Purnell",
  description:
    "A prototype-led architecture automation validation programme with discovery, readiness assessment and one limited non-production proof of concept.",
  canonicalUrlRelative: `${architectureAuditBasePath}/validation-programme`,
  openGraph: {
    title: "AI & Automation Validation Programme | William Purnell",
    description:
      "A prototype-led programme for architecture practices that want evidence before committing to a larger automation project.",
    url: `https://www.william-purnell.com${architectureAuditBasePath}/validation-programme`,
  },
});

export default function ValidationProgrammePage() {
  if (!offer) {
    notFound();
  }

  return (
    <main className="bg-background-dark text-slate-100">
      <OfferSchema offer={offer} />
      <OfferBreadcrumb offer={offer} />
      <OfferDetailPage offer={offer} />
    </main>
  );
}

function OfferBreadcrumb({ offer }) {
  return getBreadcrumbSchema([
    { name: "Home", url: "https://www.william-purnell.com/" },
    { name: "Services", url: "https://www.william-purnell.com/services" },
    {
      name: "Architecture AI & Automation Audit",
      url: `https://www.william-purnell.com${architectureAuditBasePath}`,
    },
    {
      name: offer.name,
      url: `https://www.william-purnell.com${architectureAuditBasePath}/${offer.slug}`,
    },
  ]);
}

function OfferSchema({ offer }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: offer.name,
          provider: {
            "@type": "Person",
            name: "William Purnell",
            email: architectureAuditContactEmail,
            url: "https://www.william-purnell.com",
          },
          areaServed: ["London", "United Kingdom"],
          url: `https://www.william-purnell.com${architectureAuditBasePath}/${offer.slug}`,
          description: offer.positioning,
          offers: {
            "@type": "Offer",
            name: offer.name,
            price: "6950",
            priceCurrency: "GBP",
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: architectureAuditBookingUrl,
          },
        }),
      }}
    />
  );
}
