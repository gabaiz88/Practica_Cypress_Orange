/// <reference types="Cypress" />

describe ("Test Suite - Practica - OrangeHrm - Pantalla Inicio", () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
      })

    it ("Validar Elementos Basicos de Pagina Inicio", () =>{
        cy.get('.orangehrm-login-branding > img').should('be.visible'),
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible"),
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM OS 5.3"),
        cy.get('.oxd-button').should("be.visible")
    })

    it ("Validar Inicio de Sesion", () => {
        const user = "Admin"
        const pass = "admin123"

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user),
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(pass),
        cy.get('.oxd-button').click()
    })

})


describe ("Test Suite - Practica - OrangeHrm - Pantalla Inicio", () => {

    beforeEach(() => {
        const user = "Admin"
        const pass = "admin123"

        cy.visit("https://opensource-demo.orangehrmlive.com/"),
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user),
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(pass),
        cy.get('.oxd-button').click()
      })

    it ("Validacion de Adicion de Usuario", () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click(),
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-autocomplete-text-input > input').type("Gabriel Aizman"),
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("gabaiz"),
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Gabaiz88!"),
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Gabaiz88!")
    })

})
