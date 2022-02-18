const cypress = require('cypress');

const cypressConfig = {
    video: false,
    browser: 'chrome',
    config: {
        integrationFolder: 'cypress/integration/examples'
    },
    env: {
        allure: true
    }
};

(async function () {
    await cypress.run(cypressConfig);
})();
