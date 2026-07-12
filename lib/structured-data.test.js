import { describe, expect, it } from "vitest";
import { buildCreativeWorkSchema, buildFaqSchema, buildItemListSchema, buildServiceSchema, serializeJsonLd } from "./structured-data";

const absoluteUrl = (path) => `https://www.william-purnell.com${path}`;

describe("structured data", () => {
  it("uses stable ids and absolute URLs", () => {
    const service = buildServiceSchema({ slug: "example", title: "Example", keywords: ["test"], audience: "Teams", seoDescription: "Description" }, absoluteUrl);
    expect(service["@id"]).toBe("https://www.william-purnell.com/services/example#service");
    expect(service.provider["@id"]).toBe("https://www.william-purnell.com/#person");
  });

  it("keeps FAQ content unchanged and safely serializes markup", () => {
    const faq = [{ question: "Question?", answer: "Answer <script>" }];
    expect(buildFaqSchema(faq).mainEntity[0].acceptedAnswer.text).toBe(faq[0].answer);
    expect(serializeJsonLd(buildFaqSchema(faq))).not.toContain("<script>");
  });

  it("builds project and list URLs from records", () => {
    const project = { id: "one", title: "One", shortDescription: "Desc", dateCreated: "2025-01-01", dateUpdated: "2025-02-01", techStack: ["React"], image: { src: "/one.png" } };
    expect(buildCreativeWorkSchema(project, absoluteUrl).dateModified).toBe(project.dateUpdated);
    expect(buildItemListSchema([project], absoluteUrl).itemListElement[0].url).toMatch(/\/projects\/one$/);
  });
});
