/// reference types="cypress" />
describe('Navigation', () => {
    it.only('Back, Forward, Refresh',()=>{
              cy.visit('https://www.fhctrip.com/')
              cy.wait(3000)
              cy.get('#navLogon > .nav-link').click()
            //  cy.go('back')
            //instead of go ,  we can use go(-1) for before Test
            cy.go(-1)
              cy.wait(3000)
            cy.go('forward')
            cy.wait(3000)
            cy.reload()

 
    })
      it('',()=>{
        
    })
})