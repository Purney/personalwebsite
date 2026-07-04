import { OfferDetailPage } from "@/components/ArchitectureAuditComponents";
import {
  architectureAuditBasePath,
  architectureAuditBookingUrl,
  architectureAuditContactEmail,
  getArchitectureAuditOffer,
} from "@/data/architectureAuditOffers";
import { getBreadcrumbSchema, getSEOTags } from "@/lib/seo";
import { notFound } from "next/navigation";

const offer = getArchitectureAuditOffer("essential-audit");

export const metadata = getSEOTags({
  title: "Essential AI & Automation Audit | William Purnell",
  description:
    "A focused two-day architecture AI and automation diagnostic covering up to three workflows, ten representative files and five opportunities.",
  canonicalUrlRelative: `${architectureAuditBasePath}/essential-audit`,
  openGraph: {
    title: "Essential AI & Automation Audit | William Purnell",
    description:
      "A focused diagnostic for practices that need a practical view of where AI and automation could create value.",
    url: `https://www.william-purnell.com${architectureAuditBasePath}/essential-audit`,
  },
});

export default function EssentialAuditPage() {
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
            price: "1495",
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
