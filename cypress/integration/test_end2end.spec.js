///<reference types="cypress" />

// Login
describe('Test End 2 End', () => {
  before(() => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.fixture('userData').as('data').then(function () {
      cy.get('[data-test=email]').type(this.data.login)
      cy.get('[data-test=passwd]').type(this.data.senha)
      cy.get('.btn').click()
      cy.get('.toast-message')
        .should('contain', 'Bem vindo')
        .click()
    })
  })
  // Inserir conta
  it('Insert Account', () => {
    cy.get('[data-test=menu-settings]').click()
    cy.get('[href="/contas"]').click()
    cy.get('.form-control').type('Financiamento')
    cy.get('.btn').click()
    cy.get('.toast-message').should('exist')
    cy.get('.toast-close-button').click()

  })

})

