import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://valagroup.com');
  }

  async getTitle() {
    return this.page.title();
  }

  // Add more methods corresponding to the home page elements and actions
}
