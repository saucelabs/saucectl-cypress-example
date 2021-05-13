describe('Actions', () => {
  beforeEach(() => {
    const url:string = "https://example.cypress.io/commands/actions";
    cy.visit(url);
  })
  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    const email:string = "fake@email.com";
    cy.get('.action-email')
        .type(email).should('have.value', email)
  })
})
