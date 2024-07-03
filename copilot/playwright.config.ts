import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  use: {
    headless: true,
    baseURL: 'https://valagroup.com',
  },
};
export default config;
