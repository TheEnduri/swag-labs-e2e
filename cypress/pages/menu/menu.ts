class menuPage {
  burgerMenuButton() {
    return cy.get('button#react-burger-menu-btn')
  }
  shopingCart() {
    return cy.get('div#shopping_cart_container')
  }
}
export default menuPage
