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
    cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Financiamento')).click()
    cy.get(loc.CONTAS.NOME).clear().type('Recebimento de Dividendos')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'Conta')
  })

  it('Should create an account with same name (Deve criar uma conta com o mesmo nome)', () => {
    cy.acessMenuAccount()
    cy.get(loc.CONTAS.NOME).type('Recebimento de Dividendos')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'code 400')
  })

  it('Should create a transaction (Deve criar uma transação)', () => {
    cy.get(loc.MENU.MOVIMENTACAO).click()
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Dividendos Banco Inter')
    cy.get(loc.MOVIMENTACAO.VALOR).type('100')
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Tiago Gomes')
    cy.get(loc.MOVIMENTACAO.CONTA).select('Recebimento de Dividendos')
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'sucesso')

    cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
    cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Dividendos Banco Inter', '100,00')).should('exist')
  })

  it('Should get balance (Deve pegar o saldo)', () => {
    cy.get(loc.MENU.HOME).click()
    cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Recebimento de Dividendos')).should('contain', '100')

    //Teste de localicazação de Xpath com plugin Xpath Helper
    //cy.xpath("/html/body/div[@id='root']/div/div[@class='container']/table[@class='table table-hover table-bordered']/tbody/tr[1]/td[2]").should('contain', "100")
  })

})