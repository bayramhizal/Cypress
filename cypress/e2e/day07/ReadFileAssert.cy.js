describe('ReadFile Assert', () => {
    it('Assert',()=>{
        cy.readFile('/Users/bayram/Desktop/cypress/cypress/fixtures/users.json').then((userdata)=>{
            expect(userdata[2].name).to.equal('Clementine Bauch')
             expect(userdata[2].username).to.equal('Samantha')
               expect(userdata[2].adress.street).to.equal('Samantha')

        })


    })

})