/// <reference types="cypress" />
 
describe('My First Test', () => {
    it('Url Test',()=>{
        cy.visit('https://www.amazon.com')
        cy.url().should('include','google')

    })
      it('Title Test',()=>{
        cy.visit('https://www.google.com')
        cy.title('include','google')
        
    })
})