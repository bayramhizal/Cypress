/// reference types="cypress" />
describe('Drag and Drop', () => {
    it.only('Drag Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.wait(3000)
        cy.get('#column-a').drag(cy.get('#column-b'))
         



    })
      it('Drag Test2',()=>{
          cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
          const dataTransfer=new DataTransfer();
          cy.get('#column-a').trigger('dragstart',{
              dataTransfer
            })
          cy.get('#column-b').trigger('drop',{
              dataTransfer
            })
          
        
    })
})