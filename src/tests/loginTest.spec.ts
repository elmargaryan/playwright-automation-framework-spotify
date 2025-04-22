import { expect } from "playwright/test";
import { decrypt } from "../utils/EncryptEnvVars";
import logger from "../utils/LoggerUtil";
import { test } from "./baseTest";
import loginData from "../data/loginTestData.json" assert { type: "json" };

const authFile = "src/config/auth.json";

for (const user of loginData) {
	test(`Login with invalid credentials for ${user.email} `, async ({ loginPage }) => {
		await loginPage.goToPage("https://accounts.spotify.com");
		await loginPage.fillLoginEmail(user.email);
		await loginPage.fillLoginPassword(user.password);
		await loginPage.clickLoginButton();
		await expect(loginPage.locators.errorMessage).toBeVisible();
	});
}

test("Login as a valid user and save state in auth file", async ({ loginPage }) => {
	await loginPage.goToPage("https://accounts.spotify.com");
	await loginPage.fillLoginEmail(decrypt(process.env.username!));
	await loginPage.fillLoginPassword(decrypt(process.env.password!));
	await loginPage.clickLoginButton();
	await expect(loginPage.locators.loggedInText).toBeVisible;
	logger.info("Successfully logged in.");

	await loginPage.page.context().storageState({ path: authFile });
	logger.info("Auth state is saved");
});

test("Login with auth file", async ({ browser }) => {
	const context = await browser.newContext({ storageState: authFile });
	const page = await context.newPage();
	await page.goto("/");
	await expect(page.getByTestId("user-widget-link")).toBeVisible();
});
