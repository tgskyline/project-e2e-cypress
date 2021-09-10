// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from '../support/locators'

Cypress.Commands.add('login', (user, passwd) => {
  cy.visit('https://barrigareact.wcaquino.me/')
  cy.fixture('userData').as('data').then(function () {
    cy.get(loc.LOGIN.USER).type(this.data.login)
    cy.get(loc.LOGIN.PASSWORD).type(this.data.senha)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo').click()
  })

})

Cypress.Commands.add('resetApp', () => {
  cy.get(loc.MENU.SETTINGS).click()
  cy.get(loc.MENU.RESET).click()
})

