/// reference types="cypress" />
describe('Intercept', () => {
    it('Test 01',()=>{

        cy.visit('https://example.cypress.io/commands/waiting')
        cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1').as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').its('response').then((response)=>{
            console.log(response)
            assert.equal(response.statusCode,200,'Status Code Check')
        })


    })
      
})