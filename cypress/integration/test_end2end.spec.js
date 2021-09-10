///<reference types="cypress" />

import loc from '../support/locators'
import '../support/commandsContas'

// Login
describe('Test End 2 End', () => {
  before(() => {
    cy.login('this.data.login', 'this.data.senha')
    cy.resetApp()
    // cy.visit('https://barrigareact.wcaquino.me/')
    // cy.fixture('userData').as('data').then(function () {
    //   cy.get(loc.LOGIN.USER).type(this.data.login)
    //   cy.get(loc.LOGIN.PASSWORD).type(this.data.senha)
    //   cy.get(loc.LOGIN.BTN_LOGIN).click()
    //   cy.get(loc.MESSAGE).should('contain', 'Bem vindo').click()
  })

  // Inserir conta
  it('Should Insert Account', () => {
    cy.acessMenuAccount()
    cy.insertAccount('Financiamento')
    // cy.get(loc.MENU.SETTINGS).click()
    // cy.get(loc.MENU.CONTAS).click()
    // cy.get(loc.CONTAS.NOME).type('Financiamento')
    // cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('exist')
    cy.get('.toast-close-button').click()

  })

  it('Should Edit Account', () => {
    cy.acessMenuAccount()
    // cy.get(loc.MENU.SETTINGS).click()
    // cy.get(loc.MENU.CONTAS).click()
    // cy.get('.fa-edit').click()
    cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
    cy.get(loc.CONTAS.NOME).clear().type('Financiamento da casa')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'Conta atualizada')
  })

  it('Should not create an account with same name', () => {
    cy.acessMenuAccount()
    cy.get(loc.CONTAS.NOME).type('Financiamento da casa')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'code 400')
  })

})