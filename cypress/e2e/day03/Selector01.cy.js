/// reference types="cypress" />
describe('Selectors Examples', () => {
    it.skip('Css Selectors',()=>{
        cy.visit('https://www.amazon.com')
        //1)By Tag Name
    cy.get('input')
        //2)By id
        cy.get('#twotabsearchtextbox')

        //3)By Class
      //  cy.get('.(class-value)')

        //4)By Attribute name and value

        cy.get("input[type='text']")
        //5)By 2 Attribute
        cy.get("[type='text'][id='twotabsearchtextbox']")


    })
      it('Xpat',()=>{
       cy.visit('https://www.google.com')
       cy.get('#L2AGLb > .QS5gu').click()
       //By Xpath
       cy.xpath("//a[@class='gb_j']").should('include.text','Gmail')
        
        
    })
})