import config from "@/config";
import { Data as services } from "@/data/servicesData";

function normalizeSiteUrl(value) {
  const url = new URL(value || config.siteUrl);

  if (url.hostname === config.domainName) {
    url.hostname = `www.${config.domainName}`;
  }

  return url.toString().replace(/\/$/, "");
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const siteOrigin = new URL(siteUrl);
export const defaultOgImage = "/opengraph-image.png";

export function absoluteUrl(path = "/") {
  if (!path) {
    return siteUrl;
  }

  if (typeof path === "object" && path.src) {
    return absoluteUrl(path.src);
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return new URL(path.startsWith("/") ? path : `/${path}`, siteOrigin).toString();
}

function normalizeOpenGraphImage(image = defaultOgImage) {
  return [
    {
      url: absoluteUrl(image),
      width: 1200,
      height: 630,
      alt: config.appName,
    },
  ];
}

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
} = {}) => {
  return {
    title: title || config.appName,
    description: description || config.appDescription,
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    creator: "William Purnell",
    publisher: "William Purnell",
    metadataBase: siteOrigin,
    openGraph: {
      title: openGraph?.title || title || config.appName,
      description: openGraph?.description || description || config.appDescription,
      url: absoluteUrl(openGraph?.url || canonicalUrlRelative || "/"),
      siteName: config.appName,
      locale: "en_GB",
      type: "website",
      images: normalizeOpenGraphImage(openGraph?.image),
    },
    ...(canonicalUrlRelative && {
      alternates: { canonical: absoluteUrl(canonicalUrlRelative) },
    }),
    twitter: {
      card: "summary_large_image",
      title: openGraph?.title || title || config.appName,
      description: openGraph?.description || description || config.appDescription,
      images: [absoluteUrl(openGraph?.image || defaultOgImage)],
    },
    ...extraTags,
  };
};

export const getWebsiteSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "William Purnell - AI Automation Developer London",
          "url": siteUrl,
          "description":
            "AI automation developer building workflow automation, internal tools, OpenAI integrations, .NET, React, and Next.js systems.",
        }),
      }}
    ></script>
  );
};

export const getPersonSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "William Purnell",
          "jobTitle": "AI Automation Developer",
          "image": absoluteUrl("/android-chrome-512x512.png"),
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "UK",
          },
          "url": siteUrl,
          "sameAs": [
            "https://www.linkedin.com/in/william-purnell-uk",
            "https://github.com/Purney",
          ],
        }),
      }}
    ></script>
  );
};

export const getTestimonialSchema = (name, review, rating = "5") => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "ProfessionalService",
            "name": "William Purnell - AI Automation Developer London",
            "description":
              "Professional AI automation, workflow automation, and custom software development services.",
            "brand": {
              "@type": "Organization",
              "name": "William Purnell",
              "url": siteUrl,
            },
          },
          "reviewBody": review,
          "author": {
            "@type": "Person",
            "name": name,
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": rating,
            "bestRating": "5",
          },
        }),
      }}
    ></script>
  );
};

export const getContactSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "email": "hello@william-purnell.com",
          "contactType": "AI automation and workflow automation enquiries",
          "areaServed": "London, UK",
          "availableLanguage": "English",
        }),
      }}
    ></script>
  );
};

export const getCreativeWorkSchema = (
  name,
  description,
  dateCreated,
  languagesArray,
  imageUrl,
  id
) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": name,
          "description": description,
          "author": {
            "@type": "Person",
            "name": "William Purnell",
          },
          "dateCreated": dateCreated,
          "keywords": [...languagesArray, "workflow automation", "AI integration"],
          "image": absoluteUrl(imageUrl),
          "url": absoluteUrl(`/projects/${id}`),
        }),
      }}
    ></script>
  );
};

export const getSingleServiceSchema = (service) => {
  return (
    <script
      key={service.slug}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "serviceType": service.keywords,
          "provider": {
            "@type": "Person",
            "name": "William Purnell",
            "jobTitle": "AI Automation Developer",
            "url": siteUrl,
          },
          "areaServed": ["London", "United Kingdom"],
          "url": absoluteUrl(`/services/${service.slug}`),
          "description": service.seoDescription,
          "audience": {
            "@type": "Audience",
            "audienceType": service.audience,
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "mailto:hello@william-purnell.com",
          },
        }),
      }}
    ></script>
  );
};

export const getServicesSchema = () => {
  return <>{services.map((service) => getSingleServiceSchema(service))}</>;
};

export const getFAQSchema = (faqs = []) => {
  if (!faqs.length) {
    return null;
  }

  const normalizedFaqs = faqs
    .map((faq) => {
      if (typeof faq === "string") {
        const questionEndIndex = faq.indexOf("?");

        if (questionEndIndex === -1) {
          return null;
        }

        return {
          question: faq.slice(0, questionEndIndex + 1).trim(),
          answer: faq.slice(questionEndIndex + 1).trim(),
        };
      }

      return faq;
    })
    .filter((faq) => faq?.question && faq?.answer);

  if (!normalizedFaqs.length) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": normalizedFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        }),
      }}
    ></script>
  );
};

export const getBreadcrumbSchema = (items = []) => {
  if (!items.length) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url,
          })),
        }),
      }}
    ></script>
  );
};

export const getServiceItemListSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": service.title,
            "url": absoluteUrl(`/services/${service.slug}`),
          })),
        }),
      }}
    ></script>
  );
};

export const getLocalBusinessSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "William Purnell - AI Automation Developer London",
          "image": absoluteUrl("/android-chrome-512x512.png"),
          "email": "hello@william-purnell.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressRegion": "London",
            "addressCountry": "UK",
          },
          "review": {
            "@type": "Review",
            "reviewBody":
              "It's been a smooth experience creating my custom 3D printing website with Will. He's always interested in developing the best user experience for my customers.",
            "author": {
              "@type": "Person",
              "name": "Ben Robb",
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
            },
          },
          "url": siteUrl,
          "priceRange": "$$",
          "openingHours": "Mo-Fr 08:00-17:00",
          "sameAs": ["https://www.linkedin.com/in/william-purnell-uk"],
        }),
      }}
    ></script>
  );
};

export const getAutomationServiceSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Automation and Workflow Automation",
          "serviceType": [
            "AI automation",
            "Workflow automation",
            "Business process automation",
            "Custom software development",
          ],
          "provider": {
            "@type": "Person",
            "name": "William Purnell",
            "url": siteUrl,
          },
          "areaServed": ["London", "United Kingdom"],
          "description":
            "AI automation, workflow automation, and custom software development for businesses that need faster operations and fewer manual bottlenecks.",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "mailto:hello@william-purnell.com",
          },
        }),
      }}
    ></script>
  );
};
