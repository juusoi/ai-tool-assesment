import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'test-results', open: 'never' }],
  ],
};

export default config;
