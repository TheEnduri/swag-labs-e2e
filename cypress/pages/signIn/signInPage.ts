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
  errorInfo() {
    return cy.getBySel('error')
  }
}
export default signInPage
