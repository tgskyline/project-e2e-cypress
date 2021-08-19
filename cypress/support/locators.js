const locators = {
  LOGIN: {
    USER: '[data-test=email]',
    PASSWORD: '[data-test=passwd]',
    BTN_LOGIN: '.btn',
  },
  MENU: {
    SETTINGS: '[data-test=menu-settings]',
    CONTAS: '[href="/contas"]'
  },
  CONTAS: {
    NOME: '[data-test=nome]',
    BTN_SALVAR: '.btn',
    XP_BTN_ALTERAR: "//table//td[contains(.,'Financiamento')]/..//i[@class='far fa-edit']"
  },
  MESSAGE: '.toast-message'

}

export default locators;