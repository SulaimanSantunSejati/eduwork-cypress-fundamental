/// <reference types="cypress" />

describe('commands for paybill', () => {

    it('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            cy.login(username, password)
            cy.url().should('include', '/bank/account-summary.html'); 
        }); 
    });

    it('Should make a payment', () => {
        cy.paybill('Sprint', 'Loan', '1000', '2024-09-20', 'Test Payment')
    });
    
});