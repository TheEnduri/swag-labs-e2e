class inventoryPage {
  inventoryList() {
    return cy.get('div.inventory_list')
  }
  inventoryItem() {
    return cy.get('div.inventory_item')
  }
  inventoryItemName() {
    return cy.get('div.inventory_item_name')
  }
  inventoryItemDesc() {
    return cy.get('div.inventory_item_desc')
  }
  inventoryItemPrice() {
    return cy.get('div.inventory_item_price')
  }
  productSort() {
    return cy.getBySel('product_sort_container')
  }
}
export default inventoryPage
