/// reference types="cypress" />
//we can typing instead of describe context
context('My Second Test', () => {


    //it works before every test
    beforeEach('work before every test',()=>{
        cy.visit('')
    })
    it('URL Test',()=>{

        cy.url().should('include','google')
        cy.url().should('eq','https://www.google.com/')
    })
      it('Title Test',()=>{
          cy.title().should('include','Google')
        
    })
      it('Search Test',()=>{
          
    cy.get('.gLFyf').type('Cypress.io{enter}')
        
    })
      it('Search Test',()=>{

            cy.get('.gLFyf'),{timeout:3000}.type('Cypress.io{enter}')
        
    })

})