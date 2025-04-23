// globalSetup.ts
import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);

  const baseURL = process.env.BASE_URL!;
  const username = process.env.USERNAME!;
  const password = process.env.PASSWORD!;

  await page.goto(baseURL);

  await loginPage.login(username, password);
  // Fill in login form
  // await page.fill('#username', username);
  // await page.fill('#password', password);
  // await page.click('#Login');

  // Optionally wait for a post-login element
  // await page.waitForURL('**/home', {timeout: 60000}); // change if needed

  // Save session state to file
  await page.context().storageState({ path: './.auth/session.json' });

  await browser.close();
}

export default globalSetup;
