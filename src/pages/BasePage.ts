import { Page, Locator } from "@playwright/test";
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

	async checkElementVisibility(
		locator: Locator,
		onExist: () => Promise<void>,
		onNotExist: () => Promise<void>,
		timeout: number = 2000
	): Promise<void> {
		try {
			const isVisible = await locator.isVisible({ timeout });

			if (isVisible) {
				logger.info(`Element "${locator}" is visible. Taking action...`);
				await onExist(); // Call the action for when the element exists
			} else {
				logger.info(`Element "${locator}" not found. Continuing with other flow...`);
				await onNotExist(); // Call the action for when the element does not exist
			}
		} catch (error) {
			// If the element is not visible or a timeout occurs
			logger.info(`${error}. Error or timeout occurred for selector "${locator}". Continuing with other flow...`);
			await onNotExist(); // Call the action for when the element does not exist
		}
	}
}
