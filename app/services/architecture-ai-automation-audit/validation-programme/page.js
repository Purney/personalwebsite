import { OfferDetailPage } from "@/components/ArchitectureAuditComponents";
import {
  architectureAuditBasePath,
  architectureAuditBookingUrl,
  architectureAuditContactEmail,
  getArchitectureAuditOffer,
} from "@/data/architectureAuditOffers";
import { getBreadcrumbSchema, getFAQSchema, getSEOTags } from "@/lib/seo";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { buildArchitectureOfferSchema } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/seo";

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
      {getFAQSchema(offer.faqs)}
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
  return <JsonLd data={buildArchitectureOfferSchema({ offer, basePath: architectureAuditBasePath, bookingUrl: architectureAuditBookingUrl, contactEmail: architectureAuditContactEmail }, absoluteUrl)} />;
}
