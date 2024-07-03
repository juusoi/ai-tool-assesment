import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Home Page Tests', () => {
  test('should load home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    const title = await homePage.getTitle();
    expect(title).toBe('Home - VALA');
  });

  // Add more tests as needed
});
