/// reference types="cypress" />
//after npm code for faker, w should write import code top of class or add require in the support
import {faker} from '@faker-js/faker';

describe('Using Faker', () => {
  it.only('Faker Login Test', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    let email = faker.internet.email();
    let firstName = faker.internet.userName();
    cy.get('[type="text"]').type(firstName);
    cy.get('.signup-form > form > [type="email"]').type(email);
    cy.get('.signup-form > form > .btn').click();
    cy.get('#id_gender1').click();
    let password = faker.internet.password();
    cy.get('#password').type(password);
    let name = faker.name.firstName();
    cy.get('#first_name').type(name);
    let lastName = faker.name.lastName();
    cy.get('#last_name').type(lastName);
    let adressen = faker.address.street();
    cy.get('#address1').type(adressen);
    cy.get('#country').select(2);
    let state = faker.address.state();
    cy.get('#state').type(state);
    let city = faker.address.city();
    cy.get('#city').type(city);
    let zipcode = faker.address.zipCode();
    cy.get('#zipcode').type(zipcode);

    let mobile = faker.phone.number();
    cy.get('#mobile_number').type(mobile)
    cy.get('.login-form > form > .btn').click();
    
  });
  it('', () => {});
});
