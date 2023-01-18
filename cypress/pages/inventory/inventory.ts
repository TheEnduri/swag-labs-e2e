class inventoryPage {
  inventoryList() {
    return cy.get('div.inventory_list')
  }
  inventoryItem() {
    return cy.get('div.inventory_item')
  }
}
export default inventoryPage
