/// reference types="cypress" />
import HomePage from '../PageObjectModel/HomePage.cy'
import LoginPage from '../PageObjectModel/LoginPage.cy'
describe('PayLinn Bank', () => {
     before(function(){
       cy.fixture('paylinn').then(function(data){
           this.data=data
       })
    })
    it('PayLinn Bank Login Test',function(){

        const homePage=new HomePage()
        const loginPage=new LoginPage()

        cy.visit(this.data.url)
        //cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
        
        homePage.getSignLink().click()
        loginPage.getUserName().type(this.data.username)

       // cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.username)
       
    
        //cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.passnord)
        loginPage.getPassword().type(this.data.password)

       // cy.get('.MuiButton-label').click()
       loginPage.getButton().click()
       
       loginPage.getwelcome() .should('have.text','Logout')




    })
  
})