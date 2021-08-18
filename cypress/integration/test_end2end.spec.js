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

  it('Edit Account', () => {
    cy.get('[data-test=menu-settings]').click()
    cy.get('[href="/contas"]').click()
    // cy.get('.fa-edit').click()
    cy.xpath("//table//td[contains(.,'Financiamento')]/..//i[@class='far fa-edit']").click()
    cy.get('[data-test=nome]').clear().type('Financiamento da casa')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'Conta atualizada')
  })



})

