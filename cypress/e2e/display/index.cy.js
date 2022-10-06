describe('display tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('output display 5+5=10', () => {
    cy.get('[type=5]').click();
    cy.get('[type=display]').should('have.text', '5');
    cy.contains('+').click();
    cy.get('[type=display]').should('have.text', '5+');
    cy.get('[type=5]').click();
    cy.get('[type=display]').should('have.text', '5+5');
    cy.contains('=').click();
    cy.get('[type=display]').should('have.text', '10');
  });
  it('output display 3*7/(1+2)=7', () => {
    cy.get('[type=3]').click();
    cy.get('[type=display]').should('have.text', '3');
    cy.contains('*').click();
    cy.get('[type=display]').should('have.text', '3*');
    cy.get('[type=7]').click();
    cy.get('[type=display]').should('have.text', '3*7');
    cy.contains('/').click();
    cy.contains('(').click();
    cy.get('[type=display]').should('have.text', '3*7/(');
    cy.get('[type=1]').click();
    cy.get('[type=display]').should('have.text', '3*7/(1');
    cy.contains('+').click();
    cy.get('[type=display]').should('have.text', '3*7/(1+');
    cy.get('[type=2]').click();
    cy.get('[type=display]').should('have.text', '3*7/(1+2');
    cy.contains(')').click();
    cy.get('[type=display]').should('have.text', '3*7/(1+2)');
    cy.contains('=').click();
    cy.get('[type=display]').should('have.text', '7');
  });
  it('output display (1+2*3)/5=1.4', () => {
    cy.get('[type=display]').should('have.text', '0');
    cy.contains('(').click();
    cy.get('[type=1]').click();
    cy.contains('+').click();
    cy.get('[type=2]').click();
    cy.contains('*').click();
    cy.get('[type=3]').click();
    cy.contains(')').click();
    cy.contains('/').click();
    cy.get('[type=5]').click();
    cy.contains('=').click();
    cy.get('[type=display]').should('have.text', '1.4');
  });
  it('test C, CE', () => {
    cy.get('[type=display]').should('have.text', '0');
    cy.get('[type=1]').click();
    cy.get('[type=2]').click();
    cy.get('[type=3]').click();
    cy.get('[type=display]').should('have.text', '123');
    cy.get('[type=C]').click();
    cy.get('[type=display]').should('have.text', '12');
    cy.get('[type=1]').click();
    cy.get('[type=1]').click();
    cy.get('[type=1]').click();
    cy.get('[type=display]').should('have.text', '12111');
    cy.get('[type=CE]').click();
    cy.get('[type=display]').should('have.text', '0');
  });
});
