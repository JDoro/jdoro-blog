import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Dynamically generate blog post slugs from content/posts directory
function getPostSlugs() {
  const postsDir = path.join(__dirname, '../content/posts');
  const entries = fs.readdirSync(postsDir, { withFileTypes: true });
  return entries
    .map(entry => {
      if (entry.isDirectory()) {
        return entry.name;
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        return entry.name.replace(/\.md$/, '');
      }
      return null;
    })
    .filter(Boolean)
    .map(slug => slug.toLowerCase())
    .sort();
}

const postSlugs = getPostSlugs();
const baseUrl = 'https://jdoro.github.io/jdoro-blog/posts/';

test.describe('blog post navigation', () => {
  postSlugs.forEach(slug => {
    test(`can navigate to blog post: ${slug}`, async ({ page }) => {
      const response = await page.goto(`${baseUrl}${slug}/`);
      expect(response.status()).not.toBe(404);
      const hasTitle = await page.locator('h2, h1').first().isVisible();
      expect(hasTitle).toBeTruthy();
    });
  });
});
