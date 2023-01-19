import inventoryPage from 'pages/inventory/inventory'
import menuPage from 'pages/menu/menu'

import signInPage from '../../pages/signIn/signInPage'

const inventory = new inventoryPage()
const menu = new menuPage()
const signIn = new signInPage()

describe('Sign-in process', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div.login_logo').should('be.visible')
  })
  it('Authentication of existing user', () => {
    // Login process
    cy.loginByGUI()

    // Verification of authentication
    cy.url().should('include', 'inventory.html')
    menu.burgerMenuButton()
    menu.shopingCart()
    menu.secondaryHeader('Products')
    inventory.inventoryList().within(() => {
      inventory.inventoryItem().should('have.length.gte', 1)
    })
  })
  it('Redirect not authenticated user to sign-in page', () => {
    cy.visit('inventory.html', { failOnStatusCode: false })
    menu.burgerMenuButton().should('not.exist')
    menu.shopingCart().should('not.exist')
    cy.url().should('not.include', '/inventory.html')
    cy.contains('span.title', 'Products').should('not.exist')
    inventory.inventoryItem().should('have.length', 0)
    cy.get('div.login_logo').should('be.visible')
    signIn.errorInfo(
      "Epic sadface: You can only access '/inventory.html' when you are logged in."
    )
  })
  // TODO
  it.skip('Locked user - blocking of authentication', () => {
    cy.log('**Not ready...**')
  })
  // TODO
  // Add tests of user logout
})
