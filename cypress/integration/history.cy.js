describe('History', () => {
  it('clean history', () => {
    cy.visit('http://localhost:3000/history');
    cy.contains('DARK').click();
    cy.get;
  });
});
