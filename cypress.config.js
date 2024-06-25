const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1zuw8j",
  e2e: {
    defaultCommandTimeout: 6000,
    baseUrl: "http://qamid.tmweb.ru/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
