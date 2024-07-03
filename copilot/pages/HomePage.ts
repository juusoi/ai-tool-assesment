import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  // Assuming there's a specific element that indicates readiness, for example:
  readonly readyIndicatorSelector =
    'text="Inspiring quality. Compiling happiness."';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://valagroup.com');
  }

  // New method to check if the page is ready
  async isReady() {
    // Wait for the ready indicator to be visible on the page
    await this.page.waitForSelector(this.readyIndicatorSelector);
    // Optionally, return true or some other confirmation if needed
    return true;
  }
}
