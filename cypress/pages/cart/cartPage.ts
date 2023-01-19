class cartPage {
  cartItem() {
    return cy.get('div.cart_item')
  }
  itemQuantity(quantity: string) {
    return cy.get('div.cart_quantity').should('contain.text', quantity)
  }
  checkoutButton() {
    return cy.getBySel('checkout')
  }
  checkoutInfoContainer() {
    return cy.get('div.checkout_info')
  }
  firstNameInput() {
    return cy.getBySel('firstName')
  }
  lastNameInput() {
    return cy.getBySel('lastName')
  }
  postalCodeInput() {
    return cy.getBySel('postalCode')
  }
}
export default cartPage
