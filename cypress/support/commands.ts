///<reference path="./index.d.ts" />

Cypress.Commands.add('getBySel', (selector: string, ...args: any) => {
  return cy.get(`[data-test=${selector}]`, ...args)
})
