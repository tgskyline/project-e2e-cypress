///<reference types="cypress" />

describe('Test End 2 End', () => {

  it('login', function () {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.fixture('userData').as('data').then(() => {
      cy.get('[data-test=email]').type(this.data.login)
      cy.get('[data-test=passwd]').type(this.data.senha)
      cy.get('.btn').click()
      cy.get('.toast-message').should('contain', 'Bem vindo')
    })
  })
})
