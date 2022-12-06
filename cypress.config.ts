import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000/',
  },
});
