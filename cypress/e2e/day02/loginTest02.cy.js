/// reference types="cypress" />
describe('Koala Resort Hotel', () => {
    it('Log in Testi',()=>{
        cy.visit('https://www.fhctrip.com/')
      //  cy.get('#navLogon > .nav-link').click()
    // cy.contains('[class="nav-link"]','Log in').click()
     cy.contains('log in',{matchCase:false}).click()
     cy.url().should('include','Account/Logon')
   
   // cy.get('#btnSubmit').click()
   
   //Assert
   //1)have.test-->Is there Log in in test
     cy.get('#navLogon > .nav-link').should('have.text','Log in') 
   //2)cy.url().should()
     cy.url().should('include','Account/Logon')  
   //3) be visible
        cy.get('.row > .mb-4').should('be.visible')
    //4)title
      cy.title().should('eq','Fhctrip - Log in')
    //5)include.test 
      cy.get('#navLogon > .nav-link').should('include.text','Log in') 
    //total link numbers
      cy.get('li a').should('have.length',29)
    //find():can find spesific html elements`s childeren
    //firstly I have to  use cy. get('').find() for parents 
      cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')
     //within() -->we will try to firstly elements with get, secondly not we try with find(), otherwise we use  within()
     cy.get('div.categories').within(()=>{
         cy.get('a[href="/Rooms/320"]').click()
     })


    })



})
