context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('switch pages', () => {
    cy.get(':nth-child(2) > a').click();

    cy.location('pathname').should('include', 'history');

    cy.get(':nth-child(1) > a').click();
    cy.location('pathname').should('not.include', 'histoty');
  });
  it('few clicks test', () => {
    cy.location('pathname').should('not.include', 'history');
    cy.get(':nth-child(2) > a').click();
    cy.location('pathname').should('include', 'history');
    cy.get(':nth-child(2) > a').click();
    cy.get(':nth-child(2) > a').click();
    cy.get(':nth-child(2) > a').click();
    cy.get(':nth-child(2) > a').click();
    cy.location('pathname').should('include', 'history');
    cy.get(':nth-child(1) > a').click();
    cy.location('pathname').should('not.include', 'histoty');
    cy.get(':nth-child(1) > a').click();
    cy.get(':nth-child(1) > a').click();
    cy.get(':nth-child(1) > a').click();
    cy.get(':nth-child(1) > a').click();
    cy.location('pathname').should('not.include', 'histoty');
  });
});
