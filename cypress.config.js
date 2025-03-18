const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Add Mochawesome reporter
  reporterOptions: {
    charts: true, // Enable charts
    reportPageTitle: 'Cypress Test Report', // Set report title
    embeddedScreenshots: true, // Embed screenshots in the report
    inlineAssets: true, // Embed assets (CSS, JS) in the report
    saveAllAttempts: false, // Do not save all test attempts
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Add Mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});