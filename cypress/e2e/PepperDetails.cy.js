describe('All Peppers Flow', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://polar-inlet-62371.herokuapp.com/peppers/:id', {
      fixture: "pepperDetails.json",
      statusCode: 200,
    })
    cy.visit('http://localhost:3000/')
  })
})