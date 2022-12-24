/// <reference types="cypress" />
 
describe('My First Test', function() {
    it('Url Test',function(){
        cy.visit('https://www.amazon.com')
        cy.url().should('include','google')

    })
      it('Title Test',function(){
        cy.visit('https://www.google.com')
        cy.title('include','google')
        cy.title().should('eq','Google')
        
    })
})