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

    /**
     * Get details of given product
     * This have to be used within query of inventory item
     */
    getProductDetails(productAttribs: string[]): void
    /**
     *
     * @param index index of cart item
     * @param quantity number of given product
     * @param productAttribs product details list e.g. name, description, price
     */
    cartItem(index: number, quantity: number, productAttribs: string[]): void

    /**
     *
     * @param payment payment data
     * @param shipping shipping data
     * @param tax tax percent value e.g. 8% => 8
     * @example checkoutSummary('Visa #2392', 'UPS', 8 )
     */
    checkoutSummary(payment: string, shipping: string, tax: number): void
  }
}
