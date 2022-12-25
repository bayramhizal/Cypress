/// reference types="cypress" />
describe('HoverOver', () => {
    it('Test Case',()=>{

        cy.visit('https://www.amazon.com')
        cy.get('#icp-nav-flyout').trigger('mouseover')
        cy.wait(3000)
        cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change').click()
        cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force:true})
        // cy.get('.a-dropdown-prompt').click()
        // cy.get('#icp-dropdown_18').click()

    })
     
})