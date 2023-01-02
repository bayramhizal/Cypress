/// reference types="cypress" />
 //url :'https://jsonplaceholder.cypress.io/comments'
describe('', () => {
     const requestUrl="https://jsonplaceholder.cypress.io/comments"
    it('Header Assert 1',()=>{
     
        cy.request(requestUrl).its('headers').its('content-type').should('include','application/json; charset=utf-8')
       

    })
      it.only('Header Assert 2',()=>{

        cy.request({
            url:requestUrl,
            //'https://jsonplaceholder.cypress.io/comments
            method:'GET'
        }).its('headers').its('content-type').should('include','application/json; charset=utf-8')
        
    })
})