import { describe, expect, it } from "vitest";
import sitemap, { staticLastModified } from "./sitemap";
import { Data as projects } from "@/data/projectsData";
import { Data as services } from "@/data/servicesData";
import { architectureAuditBasePath, architectureAuditOffers } from "@/data/architectureAuditOffers";
import { siteUrl } from "@/lib/seo";

describe("sitemap", () => {
  it("contains every expected route exactly once with valid matching dates", async () => {
    const entries = await sitemap();
    const staticPaths = ["", "/about", "/services", "/projects", "/contact", "/privacy", "/termsandconditions", architectureAuditBasePath];
    const expectedUrls = [
      ...staticPaths.map((path) => `${siteUrl}${path}`),
      ...projects.map(({ id }) => `${siteUrl}/projects/${id}`),
      ...services.map(({ slug }) => `${siteUrl}/services/${slug}`),
      ...architectureAuditOffers.map(({ slug }) => `${siteUrl}${architectureAuditBasePath}/${slug}`),
    ];
    expect(entries).toHaveLength(expectedUrls.length);
    expect(new Set(entries.map(({ url }) => url)).size).toBe(entries.length);
    expect(entries.map(({ url }) => url)).toEqual(expect.arrayContaining(expectedUrls));
    for (const entry of entries) expect(Number.isNaN(entry.lastModified.getTime())).toBe(false);
    for (const path of staticPaths) {
      expect(entries.find(({ url }) => url === `${siteUrl}${path}`).lastModified.toISOString()).toBe(staticLastModified.toISOString());
    }
    for (const project of projects) {
      const entry = entries.find(({ url }) => url.endsWith(`/projects/${project.id}`));
      expect(entry.lastModified.toISOString()).toBe(new Date(project.dateUpdated || project.dateCreated).toISOString());
    }
    for (const service of services) {
      expect(entries.find(({ url }) => url.endsWith(`/services/${service.slug}`)).lastModified.toISOString()).toBe(new Date(service.dateUpdated).toISOString());
    }
    for (const offer of architectureAuditOffers) {
      expect(entries.find(({ url }) => url.endsWith(`${architectureAuditBasePath}/${offer.slug}`)).lastModified.toISOString()).toBe(staticLastModified.toISOString());
    }
  });
});
