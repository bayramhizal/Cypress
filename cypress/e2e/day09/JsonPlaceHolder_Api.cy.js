/// reference types="cypress" />
describe('JsonPlaceHolder', () => {
    const requestURL = 'https://jsonplaceholder.cypress.io/comments'
    it.skip('Test 01',()=>{

        cy.request(requestURL).should((response)=>{
            assert.equal(response.status,200)
            /**    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium" */
           assert.equal(response.body[0].name,'id labore ex et quam laborum')
           assert.equal(response.body[0].id,1)
           assert.equal(response.body[0].email,'Eliseo@gardner.biz')


        })
 
    })
      it('Test 02',()=>{
        cy.request(requestURL).should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].postId).to.eq(1)
        })
    })
})