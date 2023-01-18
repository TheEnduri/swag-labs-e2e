import signInPage from '../../pages/signIn/signInPage'

const signIn = new signInPage()

describe('Sign-in process', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div.login_logo').should('be.visible')
  })
  it('Authentication of existing user', () => {
    // Login process
    signIn.usernameInput().type(Cypress.env('username'))
    signIn.passwordInput().type(Cypress.env('password'), { log: false })
    signIn.loginButton().click()

    // Verification of authentication
  })
})
