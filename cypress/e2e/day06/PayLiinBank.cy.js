
/// reference types="cypress" />
describe('PayLinn Bank', () => {
     before(function(){
       cy.fixture('paylinn').then(function(data){
           this.data=data
       })
    })
    it('PayLinn Bank Login Test',function(){
        cy.visit(this.data.url)
        cy.get('[href="/login"] > .header__option > .header__lineTwo').click()

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.userName)
    
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.passWord)
        cy.get('.MuiButton-label').click()
        cy.get('.header__nav > .header__link > .header__option > :nth-child(2)').should('have.text','Logout')




    })
  
})