import { getGreeting } from '../support/app.po';

describe('nx-example-e2e', () => {
  const page = Cypress.env('SAUCE_JOB_ID') ? 'http://localhost:3000' : '/';
  beforeEach(() => cy.visit(page));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});
