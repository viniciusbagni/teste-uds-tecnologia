/// <reference types="Cypress" />

describe('Test suite for completing the order in SauceDemo', () => {

  context('Adding an item to the cart and completing the checkout process', () => {
    beforeEach(() => {
      var user = 'standard_user'
      var password = Cypress.config('password')
      cy.accessAndloginPage(user, password)
    })

    it('returning success status for adding an item to the cart and completing the order creation', () => {
      cy.addItemToCartAndCompletingTheCheckout()
    })
  })
})