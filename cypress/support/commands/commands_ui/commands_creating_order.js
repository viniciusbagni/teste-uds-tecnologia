/// <reference types="cypress" />

import { generateFirstName, generateLastName, generateCep } from '../../../fixtures/faker'

Cypress.Commands.add('addItemToCartAndCompletingTheCheckout', () => {
    cy.get('[data-test="inventory-item-name"]:eq(0)').then((response) => {
        var nameAtributte = response[0].innerText
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').contains('Remove')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('exist').click()
        cy.get('[data-test="shopping-cart-link"]').invoke('text').then((response) => {
            expect(response).eq('1')
        })
        cy.url().then((response) => {
            expect(response).contain('/cart')
        })
        cy.get('[data-test="inventory-item-name"]').invoke('text').then((response) => {
            expect(response).eq(nameAtributte)
        })
        cy.get('[data-test="checkout"]').contains('Checkout').should('be.visible').click()
        cy.url().then((response) => {
            expect(response).contain('/checkout')
        })
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Your Information')
        cy.get('.checkout_info').find('.form_group').each(($el, index) => {
            var fillForm = [generateFirstName(), generateLastName(), generateCep()]
            cy.wrap($el).type(fillForm[index])
            cy.wrap($el).find('input').invoke('val').then((response) => {
                expect(response).eq(fillForm[index])
            })
        })
        cy.get('[data-test="continue"]').should('be.visible').and('exist').click()
        cy.url().then((response) => {
            expect(response).contain('/checkout-step-two')
        })
        cy.get('[data-test="inventory-item-name"]').should('have.text', nameAtributte)
        cy.get('[data-test="finish"]').should('be.visible').and('exist').click()
        cy.url().then((response) => {
            expect(response).contain('/checkout-complete')
        })
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
        cy.get('[data-test="back-to-products"]').should('be.visible').and('exist').click()
        cy.url().then((response) => {
            expect(response).contain('/inventory')
        })
        cy.get('[data-test="shopping-cart-link"]').invoke('text').then((response) => {
            expect(response).eq('')
        })
    })
})