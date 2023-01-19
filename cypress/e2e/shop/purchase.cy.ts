import inventoryPage from 'pages/inventory/inventory'
import checkoutPage from 'pages/checkout/checkoutPage'
import menuPage from 'pages/menu/menu'
import { getRandomInt } from 'utils/random'
import { name, address } from 'faker'

const checkout = new checkoutPage()
const inventory = new inventoryPage()
const menu = new menuPage()

describe('Purchase process', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginByGUI()
  })
  it('Purchase of single product - complete process', () => {
    // Random selection of product
    const productAttributes = ['Name', 'Desc', 'Price']
    inventory
      .inventoryItem()
      .as('inventoryItems')
      .its('length')
      .then((numberOfItems) => {
        const randomItemIndex = getRandomInt(0, numberOfItems)
        cy.get('@inventoryItems')
          .eq(randomItemIndex)
          .as('selectedProduct')
          .within(() => {
            // Getting product details
            cy.wrap(productAttributes).each((attrib: string) => {
              inventory[`inventoryItem${attrib}`]()
                .invoke('text')
                .then((itemAttrib) => {
                  cy.wrap(itemAttrib).as(`item${attrib}`)
                })
            })
          })
      })
    // Adding product to cart
    cy.get('@selectedProduct').contains('button', 'Add to cart').click()
    cy.get('span.shopping_cart_badge').should('contain.text', 1)
    menu.shopingCart().click()
    menu.secondaryHeader('Your Cart')
    cy.url().should('include', '/cart.html')
    // Verifying cart
    checkout.cartItem().should('have.length', 1)
    cy.cartItem(0, 1, productAttributes)
    cy.contains('button', 'Remove')
    // Finalizing the purchase
    checkout.checkoutButton().click()
    cy.url().should('include', '/checkout-step-one.html')
    menu.secondaryHeader('Checkout: Your Information')
    checkout.checkoutInfoContainer().within(() => {
      checkout.firstNameInput().type(name.firstName())
      checkout.lastNameInput().type(name.lastName())
      checkout.postalCodeInput().type(address.zipCode('##-###'))
    })
    checkout.continueButton().should('have.value', 'Continue').click()
    // Checkout overview
    cy.url().should('include', '/checkout-step-two.html')
    menu.secondaryHeader('Checkout: Overview')
    checkout.cartItem().should('have.length', 1)
    cy.cartItem(0, 1, productAttributes)
    cy.contains('button', 'Remove').should('not.exist')
    cy.checkoutSummary('SauceCard #31337', 'FREE PONY EXPRESS DELIVERY!', 8)
    checkout.finishButton().click()
    cy.url().should('include', '/checkout-complete.html')
    checkout.checkoutSuccessPage()
    checkout.backToHomeButton().should('contain.text', 'Back Home').click()
    cy.url().should('include', '/inventory.html')
  })
})
