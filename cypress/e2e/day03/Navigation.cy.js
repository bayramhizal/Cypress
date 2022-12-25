/// reference types="cypress" />
describe('Navigation', () => {
    it.skip('Back, Forward, Refresh',()=>{
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
      it('Changing Navigation',()=>{
            cy.visit('https://www.fhctrip.com/')
              cy.wait(3000)
              cy.get('#navLogon > .nav-link').click()
                 cy.wait(3000) 

                 cy.go('back').go('forward').go(-1).go(1)
                 cy.reload(true)


        
    })
})