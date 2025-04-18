import logger from "../utils/LoggerUtil";
import { test } from "./baseTest";

test("sample test", async ({ newPage }) => {
	await newPage.goToPage("https://playwright.dev/");
	logger.info("First test finished running.");
});

// test("get started link", async ({ page }) => {
// 	await page.goto("https://playwright.dev/");

// 	// Click the get started link.
// 	await page.getByRole("link", { name: "Get started" }).click();

// 	// Expects page to have a heading with the name of Installation.
// 	await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();
// });
