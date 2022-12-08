describe('All Peppers Flow', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/peppers/17')
    cy.intercept('GET', 'https://web-production-c00b.up.railway.app/peppers/17', {
      fixture: "pepperDetails.json",
      statusCode: 200,
    })
  })

  it('Should display an error to the user if pepper data does not load', () => {
    cy.intercept('GET', 'https://web-production-c00b.up.railway.app/peppers', {
      statusCode: 400
    })
    cy.visit('http://localhost:3000/')
      .contains('.error-message', 'Sorry, there has been a problem loading your page. Try again!')
  })

  it('Should display an error to the user if pepper data does not load', () => {
    cy.intercept('GET', 'https://web-production-c00b.up.railway.app/peppers', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
      .contains('.error-message', 'Sorry, there has been a problem loading your page. Try again!')
  })

  it('Should be able to display the pepper name and picture', () => {
    cy.get('[data-cy="details-name"]')
      .contains('Habanada')
    cy.get('[data-cy="details-image"]')
      .should('be.visible')
  })

  it('Should be able to display care information', () => {
    cy.get('[data-cy="details-water"]')
      .should('contain','Wait until soil is dry, then water deeply')
    cy.get('[data-cy="details-sun"]')
      .should('contain','Needs at least 6 hours of sun daily')
    cy.get('[data-cy="details-harvest"]')
      .should('contain','Harvest when 2-3 inches long and orange')
  })

  it('Should be able to display additional information', () => {
    cy.get('[data-cy="details-origin"]')
      .should('contain','USA')
    cy.get('[data-cy="details-flavor"]')
      .should('contain','Floral, citrusy, notes of guava')
    cy.get('[data-cy="details-scoville"]')
      .should('contain','0')
    cy.get('[data-cy="details-fact"]')
      .should('contain','The habanada pepper was developed by Michael Mazourek, a plant breeder at Cornell.')
    cy.get('[data-cy="details-link"]')
      .should('contain','Buy seeds HERE!')
  })

  it('Should be able to click a link to buy seeds', () => {
    cy.get('[data-cy="details-link"]')
      .should('contain','Buy seeds HERE!')
      .click()
  })
})