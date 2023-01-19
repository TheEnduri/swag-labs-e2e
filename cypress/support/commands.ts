///<reference path="./index.d.ts" />

import checkoutPage from 'pages/checkout/checkoutPage'
import inventoryPage from 'pages/inventory/inventory'
import signInPage from 'pages/signIn/signInPage'

const checkout = new checkoutPage()
const inventory = new inventoryPage()
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

Cypress.Commands.add(
  'cartItem',
  (index: number, quantity: number, productAttribs: string[]) => {
    checkout
      .cartItem()
      .eq(index)
      .within(() => {
        checkout.itemQuantity(`${quantity}`)
        productAttribs.forEach((attrib) => {
          cy.get<string>(`@item${attrib}`).then((itemAttrib) => {
            inventory[`inventoryItem${attrib}`]().should(
              'contain.text',
              itemAttrib
            )
          })
        })
      })
  }
)

Cypress.Commands.add(
  'checkoutSummary',
  (payment: string, shipping: string, tax: number) => {
    checkout.checkoutSummaryContainer().within(() => {
      cy.get('div.summary_info_label')
        .first()
        .should('contain.text', 'Payment Information:')
      cy.get('div.summary_value_label').first().should('contain.text', payment)
      cy.get('div.summary_info_label')
        .last()
        .should('contain.text', 'Shipping Information:')
      cy.get('div.summary_value_label').last().should('contain.text', shipping)
      cy.get<string>('@itemPrice').then((price) => {
        const itemPrice = +price.substring(1)
        cy.get('div.summary_subtotal_label').contains(
          `Item total: $${itemPrice}`
        )
        const taxValue = Math.round(itemPrice * (tax / 100) * 100) / 100
        cy.get('div.summary_tax_label').contains(`Tax: $${taxValue.toFixed(2)}`)
        cy.get('div.summary_total_label').contains(
          `Total: $${(itemPrice + taxValue).toFixed(2)}`
        )
      })
    })
  }
)
