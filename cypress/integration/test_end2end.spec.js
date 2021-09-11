///<reference types="cypress" />

//Cenários de Teste

// 1º Inserir Conta
// 2º Alterar Conta
// 3º Inserir Conta Repetida
// 4º Inserir Movimentação
// 5º Cálculo de Saldo
// 6º Remover Movimentação

import loc from '../support/locators'
import '../support/commandsContas'

describe('Automation of Test End 2 End (Automação de Teste End 2 End', () => {
  before(() => {
    cy.login('this.data.login', 'this.data.senha')
    cy.resetApp()
  })

  it('Should insert account (Deve inserir uma conta)', () => {
    cy.acessMenuAccount()
    cy.insertAccount('Financiamento')
    cy.get(loc.MESSAGE).should('exist')
    cy.get('.toast-close-button').click()
  })

  it('Should edit account (Deve editar uma conta)', () => {
    cy.acessMenuAccount()
    cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
    cy.get(loc.CONTAS.NOME).clear().type('Financiamento da casa')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'Conta atualizada')
  })

  it('Should create an account with same name (Deve criar uma conta com o mesmo nome)', () => {
    cy.acessMenuAccount()
    cy.get(loc.CONTAS.NOME).type('Financiamento da casa')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'code 400')
  })

  it('Should create a transaction (Deve crair uma transação)', () => {
    cy.get(loc.MENU.MOVIMENTACAO).click()
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Aulas de inglês')
    cy.get(loc.MOVIMENTACAO.VALOR).type('100')
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Tiago Gomes')
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'sucesso')

    cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
    cy.xpath(loc.EXTRATO.XP_BUSCA_ELEMENTO).should('exist')
  })

  it('Should get balance (Deve pegar o saldo)', () => {
    cy.get(loc.MENU.HOME).click()

  })

})