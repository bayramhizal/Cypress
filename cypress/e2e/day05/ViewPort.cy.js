/// reference types="cypress" />
describe('View Port', () => {
    it('',()=>{
        cy.visit('https://www.ricardo.ch')
        cy.viewport('samsung-s10')
        cy.get('#onetrust-accept-btn-handler').click()

    })
      it.only('Custom Services',()=>{

        cy.visit('https://www.tutti.ch')
        cy.viewport(1800,1500)
        cy.screenshot
    })
})