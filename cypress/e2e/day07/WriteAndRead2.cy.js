/// reference types="cypress" />
describe('WriteAndRead2', () => {
    it('Write&Read json file',()=>{
         cy.writeFile('./cypress/e2e/day07/04_UserData.json',{name:'bayram', email:'bayram@example.com'})
         cy.readFile('./cypress/e2e/day07/04_UserData.json').then((user)=>{

            expect(user.name).to.equal('bayram')
            expect(user.email).to.equal('bayram@example.com')

       
         })

    })
  
})