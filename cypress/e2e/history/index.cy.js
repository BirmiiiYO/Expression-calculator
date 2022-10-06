describe('history tests', () => {
  it('delete history', () => {
    cy.visit('http://localhost:3000/history');
    cy.contains('Delete history').click();
    cy.get('ul').should('have.value', '');
  });
});
