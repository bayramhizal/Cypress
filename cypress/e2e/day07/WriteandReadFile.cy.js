/// reference types="cypress" />
describe('WriteandRead File', () => {
    it('Write File',()=>{

        cy.writeFile('./cypress/e2e/day07/03_NotPad.txt','Cypress Note\n')
        cy.writeFile('./cypress/e2e/day07/03_NotPad.txt','1)Cypress Install\n',{flag: 'a+'})
         cy.writeFile('./cypress/e2e/day07/03_NotPad.txt','1)Cypress Plugins\n',{flag: 'a+'})

    })
      it('Read File',()=>{
        
    cy.readFile('./cypress/e2e/day07/03_NotPad.txt').should('contain','Plugins')

    })
})