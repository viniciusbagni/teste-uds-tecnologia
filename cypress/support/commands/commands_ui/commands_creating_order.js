/// <reference types='Cypress' />

import { generateFirstName, generateLastName, generateCep } from '../../../fixtures/faker'
import CreatingOrderLocators from '../../locators/creating_order_locators'

const creatingOrderLocators = new CreatingOrderLocators()

Cypress.Commands.add('addItemToCartAndCompletingTheCheckout', () => {
    cy.get(creatingOrderLocators.productName()).then((response) => {
        var nameAtributte = response[0].innerText
        cy.get(creatingOrderLocators.addToCartButton()).should('be.visible').click()
        cy.get(creatingOrderLocators.removeButton()).contains('Remove')
        cy.get(creatingOrderLocators.shoppingCartLinkButton()).should('be.visible').and('exist').click()
        cy.get(creatingOrderLocators.shoppingCartLinkButton()).invoke('text').then((response) => {
            expect(response).eq('1')
        })
        cy.url().then((response) => {
            expect(response).contain('/cart')
        })
        cy.get(creatingOrderLocators.productName()).invoke('text').then((response) => {
            expect(response).eq(nameAtributte)
        })
        cy.get(creatingOrderLocators.checkoutButton()).contains('Checkout').should('be.visible').click()
        cy.url().then((response) => {
            expect(response).contain('/checkout')
        })
        cy.get(creatingOrderLocators.checkoutTitle()).should('have.text', 'Checkout: Your Information')
        cy.get(creatingOrderLocators.classCheckoutInfo()).find(creatingOrderLocators.fillFormWithValues()).each(($el, index) => {
            var fillForm = [generateFirstName(), generateLastName(), generateCep()]
            cy.wrap($el).type(fillForm[index])
            cy.wrap($el).find('input').invoke('val').then((response) => {
                expect(response).eq(fillForm[index])
            })
        })
        cy.get(creatingOrderLocators.continueButton()).should('be.visible').and('exist').click()
        cy.url().then((response) => {
            expect(response).contain('/checkout-step-two')
        })
        cy.get(creatingOrderLocators.productName()).should('have.text', nameAtributte)
        cy.get(creatingOrderLocators.finishButton()).should('be.visible').and('exist').click()
        cy.url().then((response) => {
            expect(response).contain('/checkout-complete')
        })
        cy.get(creatingOrderLocators.completeOrderHeader()).should('contain', 'Thank you for your order!')
        cy.get(creatingOrderLocators.backHomeButton()).should('be.visible').and('exist').click()
        cy.url().then((response) => {
            expect(response).contain('/inventory')
        })
        cy.get(creatingOrderLocators.shoppingCartLinkButton()).invoke('text').then((response) => {
            expect(response).eq('')
        })
    })
})