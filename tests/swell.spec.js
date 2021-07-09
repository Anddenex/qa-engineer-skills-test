/// <reference types="cypress" />

describe('Swell Register and Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9876/')
    })

    //All tests are being run according to the Spec Design -- this means many tests will fail.

    it('Register a New Account Accurately', () => {
        cy.get('#register').click();
        cy.get('#username').should('have.text', "Email Address")
        cy.get('#name').should('have.text', "Name")
        cy.get('#password').should('have.text', "Password")
        cy.get('#confirm-password').should('have.text', "Confirm Password")
        cy.get('#register > .mdc-button > .mdc-button__touch').should('have.text', "Register")
        cy.get('#login > .mdc-button > .mdc-button__touch').should('have.text', "Login")
        cy.get('input[type="email"]').type('andrewpowerant')
        cy.get('#login').click();
        cy.get('#name').type('Andrew');
        cy.get('input[type="email"]').type('andrewpowerant@gmail.com');
        cy.get('input[type="password"]').type('SwellFly*1');
        cy.get('#login').click();
        cy.wait(500);
        cy.get('p').should('have.text', "Welcome back, Andrew");
        cy.get('.mdc-button__touch').should('have.text', "Logout")
        cy.url().should('eq', 'http://localhost:9876/home/');
      })
  
    it('Login Using Accurate Information', () => {
        cy.get('#username').contains('Email address');
        cy.get('#password').contains('Password');
        cy.get('#register > .mdc-button > .mdc-button__touch').should('have.text', "Register")
        cy.get('#login > .mdc-button > .mdc-button__touch').should('have.text', "Login")
        cy.get('input[type="email"]').type('andrewpowerant@gmail.com');
        cy.get('input[type="password"]').type('SwellFly*1');
        cy.get('#login').click();
    })

    it('Login Using Inaccurate Information', () => {
        cy.get('input[type="email"]').type('andrewpowerant')
        cy.get('#login').click();
        cy.visit('http://localhost:9876/')
        cy.get('input[type="password"]').type('SwellFly*1')
        cy.visit('http://localhost:9876/')
        cy.get('input[type="email"]').type('andrewpowerant@gmail.com')
        cy.get('input[type="password"]').type('SwellFly*1')
        cy.wait(1000);
        cy.url().should('eq', 'http://localhost:9876/home/');


    })
  })
  