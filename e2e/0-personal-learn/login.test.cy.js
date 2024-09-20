/// <reference types="cypress" />

describe('Working with inputs', () =>{
    beforeEach(() =>{
        cy.visit('http://zero.webappsecurity.com/login.html')
    });

    it('Visit the website', () => {
        cy.url().should('include', 'login.html')
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });

    it('Should try to Login', () => {
        cy.fixture("user").then((user) => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.get('input[name="submit"]').click() 

             // it('Should check the checkbox', () => {
             // cy.get('#user_remember_me').check()
             // cy.get('#user_remember_me').uncheck()
             // });
             
            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')

        });
    });
});
