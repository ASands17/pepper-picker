describe('All Peppers Flow', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://web-production-c00b.up.railway.app/peppers', {
      fixture: "peppers.json",
      statusCode: 200,
    })
    cy.visit('http://localhost:3000/')
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
    cy.get('[data-cy="all-cards-holder"]')
      .should('have.length', 3)
      .and('contain', 'Habanada')
      .and('contain', 'Spice Level: mild')
  })

  it('Should display a checkbox field with the label "Add to My Peppers"', () => {
    cy.get('[data-cy="all-cards-holder"]').eq(1)
      .should('contain', 'Add to My Peppers')
    cy.get('[data-cy="checkbox"]')
      .should('be.visible')
  })

  it('Should have checkboxes that can be checked', () => {
    cy.get('[data-cy="all-cards-holder"]').eq(1)
      .find('[data-cy="checkbox"]')
      .check()
      .should('be.checked')
  })

  it('Should have checkboxes that can be unchecked', () => {
    cy.get('[data-cy="all-cards-holder"]').eq(1)
      .find('[data-cy="checkbox"]')
      .check()
      .should('be.checked')
      .uncheck()
      .should('not.be.checked')
  })


  //fix this test below!!! Does not correctly navigate to pepper details page

  it('Should navigate to pepper details page when pepper name is clicked', () => {
    cy.get('[data-cy="all-cards-holder"]').eq(1)
      .find('[data-cy="pepper-name-link"]')
      .should('contain', 'Habanada')
      .click()

    // cy.visit('http://localhost:3000/peppers/17')
    // cy.intercept('GET', 'https://web-production-c00b.up.railway.app/peppers/17', {
    //   fixture: "pepperDetails.json",
    //   statusCode: 200,
    // })


      //may need to intercept here with pepper details fixture?
    cy.url().should('eq', 'http://localhost:3000/peppers/17')
  })

  it('Should route to My Peppers page when link is clicked"', () => {
    cy.get('[data-cy="all-cards-holder"]').eq(1)
      .find('[data-cy="checkbox"]')
      .check()
    cy.get('[data-cy="my-peppers-link"]')
      .click()
    cy.url().should('eq', 'http://localhost:3000/my-peppers')
  })

})