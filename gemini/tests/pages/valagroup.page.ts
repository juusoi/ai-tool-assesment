import { expect, Locator, Page } from '@playwright/test';

export class ValagroupPage {
  readonly page: Page;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('h1'); // Adjust selector if needed
  }

  async goto() {
    await this.page.goto('/'); // Assuming baseURL is set in playwright.config.ts
  }

  async expectPageTitleContains(text: string) {
    await expect(this.pageTitle).toContainText(text);
  }
}
