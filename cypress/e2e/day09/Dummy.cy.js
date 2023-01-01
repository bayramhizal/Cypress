/// reference types="cypress" />
describe('Dummy Assert', () => {
    it.only('Test01',()=>{
         cy.request('https://dummy.restapiexample.com/api/v1/employees').should((response)=>{
            assert.equal(response.status,200)
            assert.equal(response.body.data[9].id,10)
            assert.equal(response.body.data[9].employee_name,'Sonya Frost')
/*
 {
      "id": 10,
      "employee_name": "Sonya Frost",
      "employee_salary": 103600,
      "employee_age": 23,
      "profile_image": ""
    }
*/

         })
    })
      it('',()=>{
        
    })
})