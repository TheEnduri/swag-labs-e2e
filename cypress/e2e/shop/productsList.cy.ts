import inventoryPage from 'pages/inventory/inventory'

const inventory = new inventoryPage()

describe('Products list view', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginByGUI()
  })
  // TODO
  it('Products list', () => {
    cy.log('**In progress**')
    inventory.inventoryItem().should('have.length.gte', 1)
  })
})
