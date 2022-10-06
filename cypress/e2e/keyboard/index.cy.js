describe('keyboard tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('output display 5+5=10', () => {
    cy.get('[type=display]').should('have.text', '0');
    cy.get('[type=1]').click();
    cy.get('[type=2]').click();
    cy.contains('+').click();
    cy.get('[type=3]').click();
    cy.get('[type=4]').click();
    cy.contains('-').click();
    cy.get('[type=5]').click();
    cy.get('[type=6]').click();
    cy.contains('*').click();
    cy.contains('(').click();
    cy.get('[type=7]').click();
    cy.contains('/').click();
    cy.get('[type=8]').click();
    cy.contains('.').click();
    cy.get('[type=9]').click();
    cy.contains(')').click();
    cy.contains('=').click();
    cy.get('[type=display]').should('have.text', '46');
  });
});
//  cy.get('[type=1]').click();
//  cy.contains('(').click();
//  cy.get('[type=display]').should('have.text', '0');
