const SITE_URL = "https://www.william-purnell.com";

export function serializeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function buildServiceSchema(service, absoluteUrl) {
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    serviceType: service.keywords,
    provider: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "William Purnell", jobTitle: "AI Automation Developer", url: SITE_URL },
    areaServed: ["London", "United Kingdom"],
    url,
    description: service.seoDescription,
    audience: { "@type": "Audience", audienceType: service.audience },
    availableChannel: { "@type": "ServiceChannel", serviceUrl: "mailto:hello@william-purnell.com" },
  };
}

export function buildCreativeWorkSchema(project, absoluteUrl) {
  const url = absoluteUrl(`/projects/${project.id}`);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.title,
    description: project.shortDescription,
    author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "William Purnell" },
    dateCreated: project.dateCreated,
    ...(project.dateUpdated && { dateModified: project.dateUpdated }),
    keywords: [...project.techStack, "workflow automation", "AI integration"],
    image: absoluteUrl(project.image),
    url,
  };
}

export function buildItemListSchema(projects, absoluteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem", position: index + 1, name: project.title,
      url: absoluteUrl(`/projects/${project.id}`),
    })),
  };
}

export function buildArchitectureAuditSchema({ offers, basePath, bookingUrl, contactEmail }, absoluteUrl) {
  return {
    "@context": "https://schema.org", "@type": "Service",
    name: "Architecture AI & Automation Audit",
    serviceType: ["Architecture workflow audit", "Architecture AI audit", "Automation discovery", "Drawing and file readiness assessment"],
    provider: { "@type": "Person", name: "William Purnell", email: contactEmail, url: absoluteUrl("/") },
    areaServed: ["London", "United Kingdom"], url: absoluteUrl(basePath),
    offers: offers.map((offer) => ({ "@type": "Offer", name: offer.name, price: offer.price.replace("Â£", "").replace("£", "").replace(" + VAT", "").replace(",", ""), priceCurrency: "GBP", url: absoluteUrl(`${basePath}/${offer.slug}`) })),
    availableChannel: { "@type": "ServiceChannel", serviceUrl: bookingUrl },
  };
}

export function buildArchitectureOfferSchema({ offer, basePath, bookingUrl, contactEmail }, absoluteUrl) {
  return {
    "@context": "https://schema.org", "@type": "Service", name: offer.name,
    provider: { "@type": "Person", name: "William Purnell", email: contactEmail, url: absoluteUrl("/") },
    areaServed: ["London", "United Kingdom"], url: absoluteUrl(`${basePath}/${offer.slug}`),
    description: offer.positioning,
    offers: { "@type": "Offer", name: offer.name, price: offer.price.replace("Â£", "").replace("£", "").replace(" + VAT", "").replace(",", ""), priceCurrency: "GBP" },
    availableChannel: { "@type": "ServiceChannel", serviceUrl: bookingUrl },
  };
}
