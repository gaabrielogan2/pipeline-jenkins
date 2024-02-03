const cucumber = require ('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  "reporterOptions": {
    "reportDir": "mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": true
  },
  e2e: {
    specPattern: "cypress/e2e/step_definitions/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br'
  },
});