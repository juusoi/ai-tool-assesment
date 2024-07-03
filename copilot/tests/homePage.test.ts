import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page Tests', () => {
  test('should navigate to the home page and click sign in', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.isReady();
    // Replace the URL below with the actual sign-in page URL if different
  });
});
