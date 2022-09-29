describe('Login Test', () => {
  it('Standard user login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.title').should('have.text','Products')
  })

  it('Problem user login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get("img[alt='Sauce Labs Backpack']").invoke('attr','src').should('contain','sl-404')
  })
})