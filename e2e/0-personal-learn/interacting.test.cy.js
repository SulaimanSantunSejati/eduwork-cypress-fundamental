/// <reference types="cypress" />

describe('Browser actions ', () => {
    it('shouuld load books website', () => {
        cy.visit('https://books.toscrape.com/index.html',{ timeout: 10000})
        cy.url().should('incdule','index.html')
    });
    it('Should click on Travel Category', () => {
        cy.get('a').contains('Travel').click
        cy.get('h1').contains('Travel')                
      
    

    });
});