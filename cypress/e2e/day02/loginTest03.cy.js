/// reference types="cypress" />
describe('Login Menu Test', () => {
    it('Test Case 1',()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
       cy.get('.login-form > h2').should('have.text','Login to your account')
       cy.get('.signup-form > h2').should('have.text','New User Signup!')
       cy.get('.login-form > form > [type="email"]').should('be.visible')
       cy.contains('.login-form > h2','Login to your account')
     

    })
       it.only('Test Case 2',()=>{
                 cy.visit('https://automationexercise.com/')
                 cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
                 //1.way
                 cy.get('.signup-form > h2').should('contain','New User Signup!')
                 //2.way
                  cy.get('.signup-form > h2').then(emailtext=>{
                      expect(emailtext.text()).to.equal('New User Signup!')
                  })
                //3.way
                cy.get('.signup-form > h2').invoke('text').then(emailtext2=>{
                    expect(emailtext2).to.equal('New User Signup!')
                })
        
     })
})