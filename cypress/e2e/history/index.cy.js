context('history', () => {
  it('clean history', () => {
    cy.visit('http://localhost:3000/history');
    cy.get('[type=list]').should('not.have.text');
    cy.get(':nth-child(1) > a').click();
    cy.location('pathname').should('not.include', 'history');
    cy.get('[type=1]').click();
    cy.contains('+').click();
    cy.get('[type=2]').click();
    cy.contains('=').click();
    cy.get(':nth-child(2) > a').click();
    cy.location('pathname').should('include', 'history');
    cy.get('[type=list]').should('have.text', '3');
    cy.contains('Delete history').click();
    cy.get('[type=list]').should('not.have.text');
  });
  it('for not empty', () => {
    cy.visit('http://localhost:3000');
    cy.get('[type=1]').click();
    cy.contains('+').click();
    cy.get('[type=2]').click();
    cy.contains('=').click();
    cy.contains('CE').click();
    cy.get('[type=3]').click();
    cy.contains('+').click();
    cy.get('[type=4]').click();
    cy.contains('=').click();
    cy.get(':nth-child(2) > a').click();
    cy.location('pathname').should('include', 'history');
    cy.get('[type=list]').should('have.text', '37');
    cy.contains('Delete history').click();
    cy.get('[type=list]').should('not.have.text');
  });
});
