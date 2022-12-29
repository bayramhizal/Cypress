class LoginPage{
     getUserName(){
         return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
         
     }
     getPassword(){
         return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
       
     }
     getButton(){
         return cy.get('.MuiButton-label')
     }
     getwelcome(){
         return    cy.get('.header__nav > .header__link > .header__option > :nth-child(2)')
        
     }




}
export default LoginPage