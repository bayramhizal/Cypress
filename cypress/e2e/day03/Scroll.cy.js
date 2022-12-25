/// reference types="cypress" />
describe('Scroll', () => {
  it.only('Scrolintoview', () => {
    cy.visit('https://www.fhctrip.com/');
    //it slip the page under the locates position
    cy.get('.col-md-7 > .mb-4').scrollIntoView();
    //it comes to maybe with duration
  //  cy.get('.col-md-7 > h2 > span').scrollIntoView({duration: 4000});
    
    cy.get('.col-md-7 > h2 > span').scrollIntoView({offset: {top: 100, left:0}})

   //scrollTo(x,y)
   cy.wait(3000)
   cy.scrollTo(0,0)



  });
  it('', () => {});
});
