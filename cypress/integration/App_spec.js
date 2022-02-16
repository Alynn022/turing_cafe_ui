describe('Home Page', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/')
  });

    it('should display page title', () => {
      cy.get('h1')
      .should('have.text', "Turing Cafe Reservations")
    })

    it('should display page title', () => {
      cy.get('.all-reservations')
      .get('h2')
      .contains("Christie")
    })

    it('should be able to make a reservation', () => {
      cy.get('input[type="text"]')
      .type('Lynn')
      .get('.reserve-btn').click()
      .get('.all-reservations')
      .contains('h2', 'Lynn')
    })
}) 

