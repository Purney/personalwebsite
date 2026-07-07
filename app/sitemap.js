import { Data } from "@/data/projectsData";
import { Data as services } from "@/data/servicesData";
import { architectureAuditBasePath, architectureAuditOffers } from "@/data/architectureAuditOffers";
import { siteUrl } from "@/lib/seo";

const staticLastModified = new Date("2026-07-06T00:00:00.000Z");

export default async function sitemap() {
  const baseUrl = siteUrl;

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: staticLastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
        url: `${baseUrl}/services`,
        lastModified: staticLastModified,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: staticLastModified,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticLastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticLastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termsandconditions`,
      lastModified: staticLastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}${architectureAuditBasePath}`,
      lastModified: staticLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]

  // Dynamic routes (blog posts)
  let projects = await Data;
  const dynamicRoutes = projects.map(post => ({
    url: `${baseUrl}/projects/${post.id}`,
    lastModified: new Date(post.dateUpdated ?? post.dateCreated),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const serviceRoutes = services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: staticLastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const architectureAuditRoutes = architectureAuditOffers.map(offer => ({
    url: `${baseUrl}${architectureAuditBasePath}/${offer.slug}`,
    lastModified: staticLastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Combine static and dynamic routes
  return [...staticRoutes, ...dynamicRoutes, ...serviceRoutes, ...architectureAuditRoutes]
}
