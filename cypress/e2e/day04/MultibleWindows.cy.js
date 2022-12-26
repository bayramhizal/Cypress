/// reference types="cypress" />
describe('Multible Windows', () => {
    it('Removing Attribute',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('have.text','New Window')

    })
      it.only('New Url',()=>{
            cy.visit('https://the-internet.herokuapp.com/windows')
             cy.get('.example > a').then((element)=>{
                 const newUrl=element.prop('href')
                 cy.visit(newUrl)

             })

        
    })
})