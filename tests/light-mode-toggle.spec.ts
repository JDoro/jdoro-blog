import { test, expect } from '@playwright/test';

test('should activate light mode when the light button is clicked', async ({ page }) => {
  // Step 1: Navigate to the blog
  await page.goto('https://jdoro.github.io/jdoro-blog/');

  // Step 2: Click the dark/light toggle button (initially dark)
  await page.getByRole('button', { name: '🌙 Dark' }).click();

  // Step 3: Verify that the light mode has been activated (button label changes to '☀️ Light')
  await expect(page.getByRole('button', { name: '☀️ Light' })).toBeVisible();
});

