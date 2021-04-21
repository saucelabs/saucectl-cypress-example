import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open cypress actions page', () => {
  cy.visit('https://example.cypress.io/commands/actions');
});

Then(`I enter {string} as the email address`, (email) => {
  cy.get('.action-email')
      .type(email).should('have.value', email);
});
