describe('All Peppers Flow', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/peppers/17')
    cy.intercept('GET', 'https://polar-inlet-62371.herokuapp.com/peppers/17', {
      fixture: "pepperDetails.json",
      statusCode: 200,
    })
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
      .should('contain','https://www.rareseeds.com/habanada-sweet-pepper')
  })
})