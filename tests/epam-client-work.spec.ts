import { test, expect } from '@playwright/test';

test('EPAM Client Work - verify Client Work text visible', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  // Try to click Services → Explore Our Client Work, fallback to direct navigation if elements not interactable
  try {
    await page.getByRole('link', { name: 'Services' }).click();
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  } catch (e) {
    // If clicking fails (e.g., Cloudflare or dynamic menu), navigate directly.
    await page.goto('https://www.epam.com/our-work');
  }
  // Verify 'Client Work' text is visible
  await expect(page.locator('text=Client Work')).toBeVisible({ timeout: 10000 });
});
