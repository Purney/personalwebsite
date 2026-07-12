import { describe, expect, it } from "vitest";
import manifest from "./manifest";
import sharp from "sharp";
import path from "node:path";

describe("manifest", () => {
  it("declares valid install icons", () => {
    const value = manifest();
    expect(value.start_url).toBe("/");
    expect(value.icons).toEqual(expect.arrayContaining([
      expect.objectContaining({ sizes: "192x192", type: "image/png" }),
      expect.objectContaining({ sizes: "512x512", type: "image/png" }),
    ]));
  });

  it.each([["android-chrome-192x192.png", 192], ["android-chrome-512x512.png", 512]])("%s has the declared dimensions", async (file, size) => {
    const metadata = await sharp(path.join(process.cwd(), "app", file)).metadata();
    expect(metadata.format).toBe("png");
    expect([metadata.width, metadata.height]).toEqual([size, size]);
  });
});
