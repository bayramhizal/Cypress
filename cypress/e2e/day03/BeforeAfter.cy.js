/// reference types="cypress" />
describe('Before After', () => {
    before(()=>{
        cy.log('work before  test')
    })
      after(()=>{
        cy.log('work after test')
    })
    beforeEach(()=>{
        cy.log('work every per Test once')
    })
    afterEach(()=>{
        cy.log('work every per Test after')
    })
    it('TEST Case 1',()=>{
        cy.log('Test Case 1')

    })
      it('Test Case 2',()=>{

        cy.log('Test Case 2')
        
    })
  
})