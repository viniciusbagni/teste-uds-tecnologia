/// <reference types='Cypress' />

import LoginLocators from '../../locators/login_locators'

const loginLocators = new LoginLocators()

Cypress.Commands.add('accessAndloginPage', (user, password) => {
    cy.visit(Cypress.config('baseUrl'))
    cy.url().then((response) => {
        expect(response).eq(Cypress.config('baseUrl'))
    })
    if (user === '') {
        cy.get(loginLocators.usernameLogin()).should('be.visible').and('be.empty')
        cy.get(loginLocators.passwordLogin()).should('be.visible').and('be.empty').type(password, { log: false })
    }
    else if (password === '') {
        cy.get(loginLocators.usernameLogin()).should('be.visible').and('be.empty').type(user)
        cy.get(loginLocators.passwordLogin()).should('be.visible').and('be.empty')
    } else {
        cy.get(loginLocators.usernameLogin()).should('be.visible').and('be.empty').type(user)
        cy.get(loginLocators.passwordLogin()).should('be.visible').and('be.empty').type(password, { log: false })

    }
    cy.get(loginLocators.loginButton()).click()
})