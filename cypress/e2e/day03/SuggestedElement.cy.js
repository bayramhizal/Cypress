/// reference types="cypress" />
describe('Suggested Element', () => {
    it.only('Test Case 1',()=>{

     cy.visit('https://www.google.com')
     cy.get('#L2AGLb > .QS5gu').click()
     cy.get('.gLFyf').type('Yahoo')
     cy.get('.G43f7e > :nth-child(8) > .eIPGRd > .pcTkSc').contains('login').click()

    })
      it('Test Case 2',()=>{ 

        cy.visit('https://automationexercise.com/')
        
    })
})