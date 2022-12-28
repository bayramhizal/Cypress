// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('ap_login', (email, password) => {
  cy.visit('https://automationexercise.com/');
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  cy.get('.login-form > form > [type="email"]').type(email);
  cy.get('[type="password"]').type(password);
  cy.get('.login-form > form > .btn').click();
});
Cypress.Commands.add('tutti_search',(productName)=>{
    cy.visit('https://www.tutti.ch')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('input[id="mui-2"]').type(productName)
    cy.get('.MuiInputBase-root > .MuiBox-root > .MuiButtonBase-root').click()
    
 

    

})
