import { Page } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default abstract class BasePage {
	readonly page: Page;
	readonly pageUrl: string;

	constructor(page: Page, pageUrl: string) {
		this.page = page;
		this.pageUrl = pageUrl;
	}

	async goToPage(fullUrl?: string) {
		await this.page.goto(fullUrl ? `${fullUrl}${this.pageUrl}` : this.pageUrl);
		logger.info(`Navigated to ${fullUrl ? `${fullUrl}${this.pageUrl}` : this.pageUrl}`);
	}
}
