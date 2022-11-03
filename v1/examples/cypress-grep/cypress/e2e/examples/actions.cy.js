context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })
  it('.type() - type into a DOM element', { tags: ['@smoke'] }, () => {
    cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
  })
})
