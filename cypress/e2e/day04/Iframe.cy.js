/// reference types="cypress" />
describe('Iframe', () => {
    it.only('Iframe Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        /*
        1)download iframe plugin
        npm install -D cypress-iframe
        2)Import plugin add support e2e.js
        )We can use cy.frameLoaded() and cy.iframe 
        */ 
       cy.frameLoaded('#mce_0_ifr')
       //selenium driver.switchTo.frame()
       cy.iframe().find('p').clear()
       cy.iframe().find('p').type('Iframe is also OK!')
       cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()


    })
      it('',()=>{
        
    })
})