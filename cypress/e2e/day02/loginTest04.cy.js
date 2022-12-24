/// reference types="cypress" />
describe('Login Test', () => {
  it('Pozitif Test', () => {
    const username = 'Manager';
    const password = 'Manager1!';
    cy.visit('https://www.fhctrip.com/');
    cy.contains('Log in').click();
    cy.get('#UserName').type(username);
    cy.get('#Password').type(password);
    cy.get('#btnSubmit').click();
    cy.url().should('include', 'UserAdmin');
    cy.get('.caption-subject').should('be.visible', 'LISTOFUSERS');
  });
  it.only('Negatif Test', () => {
    const username = 'Manager';
    const password = 'Manager1';
    cy.visit('https://www.fhctrip.com/');

    cy.contains('Log in').click();
    cy.get('#UserName').type(username);
    cy.get('#Password').type(password);
      cy.get('#btnSubmit').click();
      cy.get('#divMessageResult').should('include.text','Username or password is incorrect')
  });
});
