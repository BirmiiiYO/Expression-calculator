context('theme', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('start theme dark', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(16, 15, 15)');
    cy.get('body').should('have.css', 'color', 'rgb(243, 238, 238)');
  });
  it('switch theme', () => {
    cy.get('[type=dark]').click();
    cy.get('[type=light]');
    cy.get('body').should('have.css', 'background-color', 'rgb(243, 238, 238)');
    cy.get('body').should('have.css', 'color', 'rgb(16, 15, 15)');
  });
  it('few clicks', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(16, 15, 15)');
    cy.get('body').should('have.css', 'color', 'rgb(243, 238, 238)');
    cy.get('[type=dark]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(243, 238, 238)');
    cy.get('body').should('have.css', 'color', 'rgb(16, 15, 15)');
    cy.get('[type=light]').click();
    cy.get('[type=dark]').click();
    cy.get('[type=light]').click();
    cy.get('[type=dark]').click();
    cy.get('[type=light]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(16, 15, 15)');
    cy.get('body').should('have.css', 'color', 'rgb(243, 238, 238)');
    cy.get('[type=dark]').click();
    cy.get('[type=light]').click();
    cy.get('[type=dark]').click();
    cy.get('[type=light]').click();
    cy.get('[type=dark]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(243, 238, 238)');
    cy.get('body').should('have.css', 'color', 'rgb(16, 15, 15)');
  });
});
