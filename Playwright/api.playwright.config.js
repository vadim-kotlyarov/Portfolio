const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/api',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    headless: true,
    viewport: { width: 1280, height: 720 }
  },

  projects: [
    {
      name: 'api',
      use: { ...devices['Desktop Chrome'] },
      testMatch: 'tests/api/**',
    },
  ],

});

