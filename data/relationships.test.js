import { describe, expect, it } from "vitest";
import { Data as projects } from "./projectsData";
import { Data as services } from "./servicesData";

describe("content relationships", () => {
  it("references existing records and preserves unique ids", () => {
    expect(new Set(projects.map(({ id }) => id)).size).toBe(projects.length);
    expect(new Set(services.map(({ slug }) => slug)).size).toBe(services.length);
    for (const project of projects) {
      expect(project.relatedServiceSlugs.every((slug) => services.some((service) => service.slug === slug))).toBe(true);
      expect(project.relatedProjectIds.every((id) => projects.some((item) => item.id === id))).toBe(true);
    }
    for (const service of services) {
      expect(service.relatedServiceSlugs.every((slug) => services.some((item) => item.slug === slug))).toBe(true);
      expect(service.relatedProjectIds.every((id) => projects.some((project) => project.id === id))).toBe(true);
    }
  });
});
