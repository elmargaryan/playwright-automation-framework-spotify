import { test as base } from "@playwright/test";
import { PageName } from "../pages/PageFactory";

export const test = base.extend<{
	newPage: PageName;
}>({
	newPage: async ({ page }, use) => {
		await use(new PageName(page));
	},
});
