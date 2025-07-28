/// <reference types="cypress" />

Cypress.Commands.add('accessAndloginPage', (user, password) => {
    cy.visit(Cypress.config('baseUrl'))
    cy.url().then((response) => {
        expect(response).eq('https://www.saucedemo.com/')
    })
    if (user === '') {
        cy.get('[data-test="username"]').should('be.visible').and('be.empty')
        cy.get('[data-test="password"]').should('be.visible').and('be.empty').type(password, { log: false })
    }
    else if (password === '') {
        cy.get('[data-test="username"]').should('be.visible').and('be.empty').type(user)
        cy.get('[data-test="password"]').should('be.visible').and('be.empty')
    } else {
        cy.get('[data-test="username"]').should('be.visible').and('be.empty').type(user)
        cy.get('[data-test="password"]').should('be.visible').and('be.empty').type(password, { log: false })

    }
    cy.get('[data-test="login-button"]').click()
})