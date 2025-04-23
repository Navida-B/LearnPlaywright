import { Page } from 'playwright';

/**
 * Represents the LoginPage class which provides methods to interact with the login page.
 */
export class LoginPage {
    private page: Page;
    

    // Selectors
   
    private usernameInput = '#username';
    private passwordInput = '#password';
    private loginButton = '#Login';
    private errorMessage = '.loginError'; 

    /**
     * Initializes a new instance of the LoginPage class.
     * @param page - The Playwright Page object used to interact with the browser.
     */
    constructor(page: Page) {
        this.page = page;
    }

    // Methods
    /**
     * Navigates to the specified URL.
     * @param url - The URL to navigate to.
     * @returns A promise that resolves when the navigation is complete.
     */
    async navigateTo(url: string): Promise<void> {
        console.log(`Navigating to ${url}`);
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    /**
     * Enters the specified username into the username input field.
     * @param username - The username to enter.
     * @returns A promise that resolves when the username is entered.
     */
    async enterUsername(username: string): Promise<void> {
        await this.page.fill(this.usernameInput, username);
    }

    /**
     * Enters the specified password into the password input field.
     * @param password - The password to enter.
     * @returns A promise that resolves when the password is entered.
     */
    async enterPassword(password: string): Promise<void> {
        await this.page.fill(this.passwordInput, password);
    }

    /**
     * Clicks the login button.
     * @returns A promise that resolves when the login button is clicked.
     */
    async clickLogin(): Promise<void> {
        // await this.page.waitForSelector('#login', { state: 'visible' });
        await this.page.click(this.loginButton); 
    }
    
    /**
     * Retrieves the error message text from the page.
     *
     * @returns {Promise<string>} A promise that resolves to the error message text.
     * @throws {Error} Throws an error if the error message element is not found on the page.
     */
    async getErrorMessage(): Promise<string> {
        const errorMessage = await this.page.textContent(this.errorMessage);
        if (errorMessage === null) {
            throw new Error('Error message element not found');
        }
        return errorMessage;
    }

    /**
     * Performs the login action by entering the username, entering the password, and clicking the login button.
     * @param username - The username to enter.
     * @param password - The password to enter.
     * @returns A promise that resolves when the login action is complete.
     */
    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}