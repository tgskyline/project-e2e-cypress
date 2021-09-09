import loc from '../support/locators'
import '../support/'

Cypress.Commands.add('acessMenuAccount', () => {

  cy.get(loc.MENU.SETTINGS).click()
  cy.get(loc.MENU.CONTAS).click()

})

Cypress.Commands.add('insertAccount', account => {

  cy.get(loc.CONTAS.NOME).type('Financiamento')
  cy.get(loc.CONTAS.BTN_SALVAR).click()

})






