/// reference types="cypress" />
describe('Suggested Element2', () => {
    it('Test Case 1',()=>{
           cy.visit('https://www.amazon.com')
           cy.get('#twotabsearchtextbox').type('kleidung').wait(2000)
           cy.get(':nth-child(5) > .s-suggestion-container > .s-suggestion').click()
        
  


    })
    
})