Cypress.Commands.add("create", () => {
        const baseURL = 'http://localhost:3000/peppers';
        cy.intercept('GET', 'https://polar-inlet-62371.herokuapp.com/peppers', {
            fixture: "peppers.json",
            statusCode: 200,
        })
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy="all-cards-holder"]').eq(1)
            .find('[data-cy="checkbox"]')
            .check()
        cy.get('[data-cy="all-cards-holder"]').eq(2)
            .find('[data-cy="checkbox"]')
            .check()
        cy.get('[data-cy="my-peppers-link"]')
            .click()
        cy.url().should('eq', 'http://localhost:3000/my-peppers')
    })