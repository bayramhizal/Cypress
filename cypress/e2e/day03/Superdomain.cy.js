/// reference types="cypress" />
describe('SuperDomain', () => {
    it('Test Case 1',()=>{
        cy.visit('https://www.google.com')

    })
      it('Test Case 2',()=>{
   //It was in the past problem, but noew it is okey
        cy.visit('https://www.amazon.com') 
         cy.visit('https://www.ricardo.com')
        
    })
})