import { Data } from "@/data/projectsData";

export default async function sitemap() {
  // Base URL - replace with your actual domain
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
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

  // Combine static and dynamic routes
  return [...staticRoutes, ...dynamicRoutes]
}