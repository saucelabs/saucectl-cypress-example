const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  env: {
    issuePrefix: 'https://your.domain.atlassian.net/browse/',
    tmsPrefix: 'https://some.testrail.instance/path/suite/caseID-',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
})
