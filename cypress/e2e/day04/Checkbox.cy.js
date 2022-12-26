/// reference types="cypress" />
describe('Checkboxes', () => {
  it.skip('Single Text Box', () => {
    cy.visit('https://tutti.ch/');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get(
      '[href="/q/autos/Ak8CkY2Fyc5TAwMDA"] > .MuiBox-root > .MuiTypography-root'
    ).click();
    cy.get('[aria-label="Getriebeart"] > .MuiTypography-root').scrollIntoView();
    //assert not checked
    cy.get(
      ':nth-child(21) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-7fa9du > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).should('not.be.checked');
    //check
    cy.get(
      ':nth-child(21) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-7fa9du > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).check();
    //check assert
    cy.get(
      ':nth-child(21) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-7fa9du > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).should('be.checked');
    //remove check
    cy.get(
      ':nth-child(21) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-7fa9du > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).uncheck();
  });
  it('All Checkboxes', () => {
    cy.visit('https://tutti.ch/');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get(
      '[href="/q/autos/Ak8CkY2Fyc5TAwMDA"] > .MuiBox-root > .MuiTypography-root'
    ).click();
    cy.get('[aria-label="Getriebeart"] > .MuiTypography-root').scrollIntoView();
    cy.get("input[type='checkbox']").check();
    cy.wait(4000);
    cy.get("input[type='checkbox']").uncheck();
  });
});
