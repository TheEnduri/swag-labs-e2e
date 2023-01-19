class signInPage {
  usernameInput() {
    return cy.getBySel('username')
  }
  passwordInput() {
    return cy.getBySel('password')
  }
  loginButton() {
    return cy.getBySel('login-button')
  }
  errorInfo(error: string) {
    return cy.getBySel('error').should('contain.text', error)
  }
}
export default signInPage
