describe('My Peppers Flow', () => {
  beforeEach(()=> {
    cy.create()
  })

  it('Should display an error to the user if pepper data does not load', () => {
    cy.intercept('GET', 'https://polar-inlet-62371.herokuapp.com/peppers', {
      statusCode: 400
    })
    cy.visit('http://localhost:3000/')
    .contains('.error-message', 'Sorry, there has been a problem loading your page. Try again!')
  })

  it('Should be able to display the title of the page', () => {
    cy.get('[data-cy="navbar"]')
      .contains('Pepper Picker')
  })

  it('Should show links to All Peppers and My Peppers pages', () => {
    cy.get('[data-cy="navbar"]')
      .contains('All Peppers')
      .next()
      .contains('My Peppers')
  })

  it('Should display cards with pepper name and spice level', () => {
    cy.get('[data-cy="selected-cards-holder"]')
      .should('have.length', 2)
      .and('contain', 'Habanada')
      .and('contain', 'Spice Level: mild')
  })

  it('Should display cards with checked fields', () => {
    cy.get('[data-cy="selected-cards-holder"]').eq(0)
    .find('[data-cy="checkbox"]')
    .should('be.checked')
  })

  it('Should remove card when checkbox is unchecked', () => {
    cy.get('[data-cy="selected-cards-holder"]').eq(0)
    .find('[data-cy="checkbox"]')
    .uncheck()
    cy.get('[data-cy="selected-cards-holder"]')
    .should('have.length', 1)
  })
})