/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // optional: register cypress-grep plugin code
  // https://github.com/bahmutov/cypress-grep
  require('cypress-grep/src/plugin')(config)

  // make sure to return the config object
  // as it might have been modified by the plugin
  return config
}
