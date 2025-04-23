import { test, expect } from '@playwright/test';

test('Login Page Tests', async ({ page }) => {
    await page.goto('/standard-CommerceStores');
    await expect(page).toHaveURL(/standard-CommerceStores/);
  });