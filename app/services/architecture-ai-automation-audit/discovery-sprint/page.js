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

const offer = getArchitectureAuditOffer("discovery-sprint");

export const metadata = getSEOTags({
  title: "AI & Automation Discovery Sprint | William Purnell",
  description:
    "A deeper architecture AI and automation assessment covering up to three workflows, thirty representative files and eight opportunities.",
  canonicalUrlRelative: `${architectureAuditBasePath}/discovery-sprint`,
  openGraph: {
    title: "AI & Automation Discovery Sprint | William Purnell",
    description:
      "A deeper operational assessment for architecture practices that need stronger evidence and a prioritised implementation plan.",
    url: `https://www.william-purnell.com${architectureAuditBasePath}/discovery-sprint`,
  },
});

export default function DiscoverySprintPage() {
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
