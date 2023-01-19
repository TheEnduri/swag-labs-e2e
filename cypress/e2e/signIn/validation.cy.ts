import signInPage from 'pages/signIn/signInPage'

const signIn = new signInPage()

describe('Sign-in validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div.login_logo').should('be.visible')
  })
  ;['username', 'password'].forEach((credential) => {
    it(`Validation of login data - incorrect ${credential}`, () => {
      // Login process
      signIn
        .usernameInput()
        .type(
          `${Cypress.env('username')}${credential === 'username' ? 'xyz' : ''}`
        )
      signIn
        .passwordInput()
        .type(
          `${Cypress.env('password')}${credential === 'password' ? 'xyz' : ''}`,
          { log: false }
        )
      signIn.loginButton().click()
      signIn.errorInfo(
        'Epic sadface: Username and password do not match any user in this service'
      )
    })
  })
  // TODO
  it.skip('Case sensitivity', () => {
    cy.log('**Not ready...**')
  })
  it.skip('Whitespace trimming', () => {
    cy.log('**Not ready...**')
  })
})
