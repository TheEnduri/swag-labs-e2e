import inventoryPage from 'pages/inventory/inventory'

const inventory = new inventoryPage()

describe('Sorting products', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginByGUI()
  })
  it('Sorting by price - descending', () => {
    inventory.productSort().select('Price (high to low)')
    inventory
      .inventoryItemPrice()
      .invoke('text')
      .then((prices) => {
        const sortedPrices = prices
          .split('$')
          .map((price) => +price)
          .slice(1)
        const isSorted = sortedPrices.every(
          (val, i, arr) => !i || val <= arr[i - 1]
        )
        expect(isSorted).to.eq(true)
      })
  })
})
