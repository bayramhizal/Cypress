/// reference types="cypress" />
describe('Koala Resort Hotel', () => {
    it('Log in Testi',()=>{
        cy.visit('https://www.fhctrip.com/')
      //  cy.get('#navLogon > .nav-link').click()
     cy.contains('Log in').click()
     cy.url().should('include','Account/Logon')
     cy.get('#UserName').type('')
     cy.get('#Password').type('{enter}')
   // cy.get('#btnSubmit').click()

    })
      
})