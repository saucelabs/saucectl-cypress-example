const { defineConfig } = require('cypress')
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  env: {
    issuePrefix: 'https://your.domain.atlassian.net/browse/',
    tmsPrefix: 'https://some.testrail.instance/path/suite/caseID-',
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: './allure-results',
      });
      return config;
    },
  },
})
