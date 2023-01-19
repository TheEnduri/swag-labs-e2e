///<reference path="./index.d.ts" />

import signInPage from 'pages/signIn/signInPage'

const signIn = new signInPage()

Cypress.Commands.add('getBySel', (selector: string, ...args: any) => {
  return cy.get(`[data-test=${selector}]`, ...args)
})

Cypress.Commands.add(
  'loginByGUI',
  (username = Cypress.env('username'), password = Cypress.env('password')) => {
    signIn.usernameInput().type(username)
    signIn.passwordInput().type(password, { log: false })
    signIn.loginButton().click()
  }
)
