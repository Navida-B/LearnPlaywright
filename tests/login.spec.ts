import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage'; // Adjust the import path as necessary


test('Login Page Tests', async ({ page }) => {
  await page.goto('/home');
  await expect(page).toHaveURL(/home/);
});