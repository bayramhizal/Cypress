/// reference types="cypress" />
describe('Custom Command', () => {
  it('Positive Login', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.login-form > form > [type="email"]').type('ragopakejmar@gmail.com' );
    cy.get('[type="password"]').type('Ragopa.123');
    cy.get('.login-form > form > .btn').click();
    cy.get('b').should('have.text', 'ragopa');
  });
      it('Positive Login Commands',()=>{
          //it comes from Command JS function
          cy.ap_login('ragopakejmar@gmail.com','Ragopa.123')
        
    })
  it.only('Negative Login', () => {
      //it comes from Command JS function
          cy.ap_login('ragopakejmar@gmail.com','Ragopa123')
          cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
          cy.screenshot()

  });
     it('Tutti Search',()=>{
         cy.tutti_search('leder sessel')
        
    })
});
