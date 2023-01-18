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
    signIn.usernameInput().type(Cypress.env('username'))
    signIn.passwordInput().type(Cypress.env('password'), { log: false })
    signIn.loginButton().click()

    // Verification of authentication
    cy.url().should('include', 'inventory.html')
    menu.burgerMenuButton()
    menu.shopingCart()
    cy.get('div.header_secondary_container').contains('span.title', 'Products')
    inventory.inventoryList().within(() => {
      inventory.inventoryItem().should('have.length.gte', 1)
    })
  })
})
