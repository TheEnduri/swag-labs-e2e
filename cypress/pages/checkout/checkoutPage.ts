import { should } from 'chai'

class checkoutPage {
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
  continueButton() {
    return cy.getBySel('continue')
  }
  checkoutSummaryContainer() {
    return cy.get('div.summary_info')
  }
  finishButton() {
    return cy.getBySel('finish')
  }
  checkoutSuccessPage() {
    cy.get('div.checkout_complete_container').within(() => {
      cy.contains('h2.complete-header', 'THANK YOU FOR YOUR ORDER')
      cy.contains(
        'div.complete-text',
        'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
      )
      cy.get('img.pony_express')
        .should('be.visible')
        .and(($img: JQuery<HTMLImageElement>) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
  }
  backToHomeButton() {
    return cy.getBySel('back-to-products')
  }
}
export default checkoutPage
