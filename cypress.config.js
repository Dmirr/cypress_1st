const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "babqyj",
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
