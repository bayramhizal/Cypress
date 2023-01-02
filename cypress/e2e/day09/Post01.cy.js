/// reference types="cypress" />
describe('Post', () => {
        const requestURL = 'https://jsonplaceholder.cypress.io/comments'
    it('Test',()=>{

        cy.request('POST',requestURL,{

            userId:501,
            title:"Cypres is easy",
            body:"JS is easier than Cypress"}).then((response)=>{

                expect(response.status).to.eq(201)
                expect(response.userId).to.eq(501)
                expect(response.title).to.eq('Cypres is easy')
              

            })



        })

    })
      it('',()=>{
        
    })
