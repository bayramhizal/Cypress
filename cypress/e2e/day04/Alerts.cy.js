/// reference types="cypress" />
describe('Alerts', () => {
    it('Alerts Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       //it gives us automatically accept alert, in behind of this action , has it okey button
       //is is valid only for one option after alert
        cy.get(':nth-child(1) > button').click()
        cy.get('#result').should('be.visible','You successfully clicked an alert')


    })
      it('Accept Alert Test',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.wait(3000)
            cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    //We should use on with a function with return false
     it('Dismiss Alert Test',()=>{
         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.wait(3000)
            cy.get(':nth-child(2) > button').click()
            cy.on('window:confirm',()=>{
                return false
            })
            cy.get('#result').should('have.text','You clicked: Cancel')
        
    })
     it.only('Alert Text',()=>{
         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.wait(3000)
            //we can control with following code pop up
            //$windowsElement give us enter the info on prompt

            cy.window().then(($windowsElement)=>{
                cy.stub($windowsElement,'prompt').returns('Cypress Okey:)')
            })
            cy.get(':nth-child(3) > button').click()
             cy.get('#result').should('have.text','You entered: Cypress Okey:)')
        
    })
})