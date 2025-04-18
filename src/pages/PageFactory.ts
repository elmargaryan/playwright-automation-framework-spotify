// Page Template

import BasePage from "./BasePage";
import type { Page } from "@playwright/test";

export class PageName extends BasePage {
	locators = {
		// can explicitly specify type: Record<string, Locator>
		email: this.page.getByTestId("email"),
		name: this.page.getByTestId("name"),
	} as const; // Use `as const` to make this object readonly

	constructor(page: Page, pageUrl = "/[insert page url]") {
		super(page, pageUrl);
	}

	// Example method to fill the email input
	// async fillEmail(email: string) {
	// 	await this.locators.email.fill(email);
	// }

	// 	Directly access locators as properties inside tests if needed using getters
	// get email() {
	// 	return this.locators.email;
	// }
}
