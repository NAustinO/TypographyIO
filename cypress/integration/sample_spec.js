describe('My First Test', () => {
  it ('Visits the landing page', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Test Setup').click()
    cy.url().should('include.all.keys')
  })
})