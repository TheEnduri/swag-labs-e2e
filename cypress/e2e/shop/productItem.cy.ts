import inventoryPage from 'pages/inventory/inventory'

const inventory = new inventoryPage()

describe('Product item view', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginByGUI()
  })
  it('Product item - details', () => {
    // Opening item details
    inventory
      .inventoryItem()
      .first()
      .within(() => {
        cy.getProductDetails(['Name', 'Desc', 'Price'])
        inventory.inventoryItemName().click()
      })
    // Verifying item data
    cy.url().should('match', /\/inventory-item.html\?id=\d+/)
    cy.get('div.inventory_details_container').within(() => {
      cy.get('img.inventory_details_img')
        .should('be.visible')
        .and(($img: JQuery<HTMLImageElement>) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
      cy.get<string>('@itemName').then((itemName) => {
        cy.get('div.inventory_details_name').should('contain.text', itemName)
      })
      cy.get<string>('@itemDesc').then((itemDesc) => {
        cy.get('div.inventory_details_desc').should('contain.text', itemDesc)
      })
      cy.get<string>('@itemPrice').then((itemPrice) => {
        cy.get('div.inventory_details_price').should('contain.text', itemPrice)
      })
      cy.contains('button', 'Add to cart')
    })
  })
})
