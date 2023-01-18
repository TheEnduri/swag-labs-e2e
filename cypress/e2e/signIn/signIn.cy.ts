import signInPage from '../../pages/signIn/signInPage'

const signIn = new signInPage()

describe('Sign-in process', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div.login_logo').should('be.visible')
  })
  it('Authentication of existing user', () => {
    signIn.usernameInput()
    signIn.passwordInput()
    signIn.loginButton()
  })
})
