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
  }
}
