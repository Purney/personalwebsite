import { expect, test } from "@playwright/test";

test("core routes, navigation, icons and 404", async ({ page }) => {
  for (const route of ["/", "/services", "/projects", "/contact"]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
  }
  await page.goto("/definitely-not-a-route");
  await expect(page.locator("body")).toContainText(/not found|404/i);
  for (const iconUrl of ["/android-chrome-192x192.png", "/android-chrome-512x512.png"]) {
    const icon = await page.request.get(iconUrl);
    expect(icon.ok()).toBe(true);
    expect(icon.headers()["content-type"]).toContain("image/png");
  }
});

test("calculator updates and contact validation is visible", async ({ page }) => {
  await page.goto("/services/architecture-ai-automation-audit");
  const hours = page.getByLabel("Time per occurrence").first();
  await page.getByText("Estimate the capacity across repeated workflows.").scrollIntoViewIfNeeded();
  await expect(hours).toBeVisible();
  await hours.scrollIntoViewIfNeeded();
  await hours.fill("10");
  await expect(page.getByText("480 hrs", { exact: true })).toBeVisible();
  await page.goto("/contact");
  const submit = page.getByRole("button", { name: /send|submit|get in touch/i });
  await expect(submit).toBeDisabled();
  const formIsValid = await page.locator("form").evaluate((form) => form.checkValidity());
  expect(formIsValid).toBe(false);
  await expect(page.getByLabel("What is your name?")).toHaveJSProperty("validity.valid", false);
});
