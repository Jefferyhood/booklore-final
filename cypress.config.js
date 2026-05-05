const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.booklore.dev',
    defaultCommandTimeout: 15000,
    video: false,
    retries: { runMode: 2, openMode: 0 },
    setupNodeEvents(on, config) {
      return config;
    },
    env: {
      DEMO_USER: 'booklore',
      DEMO_PASS: '9HC20PGGftvWaZ1'
    }
  }
});
