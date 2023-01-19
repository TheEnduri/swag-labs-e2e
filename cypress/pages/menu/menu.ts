class menuPage {
  burgerMenuButton() {
    return cy.get('button#react-burger-menu-btn')
  }
  shopingCart() {
    return cy.get('div#shopping_cart_container')
  }
  secondaryHeader(title: string) {
    cy.get('div.header_secondary_container').contains('span', title)
  }
}
export default menuPage
