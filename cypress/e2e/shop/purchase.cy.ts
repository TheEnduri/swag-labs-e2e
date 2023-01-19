import inventoryPage from 'pages/inventory/inventory'
import cartPage from 'pages/cart/cartPage'
import menuPage from 'pages/menu/menu'
import { getRandomInt } from 'utils/random'
import { name, address } from 'faker'

const cart = new cartPage()
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
    cart
      .cartItem()
      .should('have.length', 1)
      .within(() => {
        cart.itemQuantity('1')
        productAttributes.forEach((attrib) => {
          cy.get<string>(`@item${attrib}`).then((itemAttrib) => {
            inventory[`inventoryItem${attrib}`]().should(
              'contain.text',
              itemAttrib
            )
          })
        })
        cy.contains('button', 'Remove')
      })
    // Finalizing the purchase
    cart.checkoutButton().click()
    menu.secondaryHeader('Checkout: Your Information')
    cart.checkoutInfoContainer().within(() => {
      cart.firstNameInput().type(name.firstName())
      cart.lastNameInput().type(name.lastName())
      cart.postalCodeInput().type(address.zipCode('##-###'))
    })
  })
})
