/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Query the html element by data-test attribute value
     * @param dataTestAttribute data-test attribute value
     * @example cy.getBySel('email-input')
     */
    getBySel(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>

    /**
     * Login to application via user interface
     * @param username by default Cypress.env('username')
     * @param password by default Cypress.env('password')
     * @example cy.loginByGUI('john.smith', '$tr0ng')
     */
    loginByGUI(username?: string, password?: string): void
  }
}
