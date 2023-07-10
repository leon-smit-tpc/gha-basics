describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Todo')
  })

  it('Selects the first todo item', () => {
    cy.visit('/')
    cy.get('input').first().should('not.be.checked')
    cy.get('input').first().click()
    cy.get('input').first().should('be.checked')
    cy.get('input').first().click()
    cy.get('input').first().should('not.be.checked')
  })
})
