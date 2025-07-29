/// <reference types='Cypress' />

import LoginLocators from '../../support/locators/login_locators'

const loginLocators = new LoginLocators()

describe('Test suite for login in SauceDemo', () => {

    context('Login page', () => {
        it('returning success for the access and login page', () => {
            var user = 'standard_user'
            var password = Cypress.config('password')
            cy.accessAndloginPage(user, password)
            cy.url().then((response) => {
                expect(response).contain('/inventory')
            })
        })
        it('returning error for login authentication with blank user', () => {
            var user = ''
            var password = Cypress.config('password')
            cy.accessAndloginPage(user, password)
            cy.get(loginLocators.visibleMessageError()).should('be.visible').and('have.text', 'Epic sadface: Username is required')
        })
        it('returning error for login authentication with incorrect user', () => {
            var user = 'wrong_user'
            var password = Cypress.config('password')
            cy.accessAndloginPage(user, password)
            cy.get(loginLocators.visibleMessageError()).should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })
        it('returning error for login authentication with blank password', () => {
            var user = 'standard_user'
            var password = ''
            cy.accessAndloginPage(user, password)
            cy.get(loginLocators.visibleMessageError()).should('be.visible').and('have.text', 'Epic sadface: Password is required')
        })
        it('returning error for login authentication with incorrect password', () => {
            var user = 'standard_user'
            var password = 'fake_password'
            cy.accessAndloginPage(user, password)
            cy.get(loginLocators.visibleMessageError()).should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    })
})