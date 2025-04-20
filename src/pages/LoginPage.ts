import { Page } from "@playwright/test";
import BasePage from "./BasePage";

export class LoginPage extends BasePage {
	locators = {
		loginEmail: this.page.getByTestId("login-username"),
		loginPassword: this.page.getByTestId("login-password"),
		loginButton: this.page.getByTestId("login-button"),
		loginWithPasswordButton: this.page.getByRole("button", { name: "Log in with a password" }),
		loggedInText: this.page.getByTestId("status-logged-in"),
		loggedInAsText: this.page.getByTestId("user-info"),
		userProfileMenu: this.page.getByTestId("user-widget-link"),
	} as const;

	constructor(page: Page, pageUrl = "/login") {
		super(page, pageUrl);
	}

	async fillLoginEmail(email: string) {
		await this.locators.loginEmail.fill(email);
	}

	async fillLoginPassword(password: string) {
		await this.checkElementVisibility(
			this.locators.loginPassword,
			async () => {
				await this.locators.loginPassword.fill(password);
			},
			async () => {
				await this.locators.loginButton.click();
				await this.locators.loginWithPasswordButton.click();
				await this.locators.loginPassword.fill(password);
			}
		);
	}

	async clickLoginButton() {
		await this.locators.loginButton.click();
	}
}
