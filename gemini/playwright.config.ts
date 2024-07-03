import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://valagroup.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};

export default config;
