const cypress = require('cypress')

cypress.run({
  browser: 'chrome',
  config: {
    specPattern: "cypress/component/Stepper.cy.jsx",
    video: true,
  },
  testingType: "component",
})
