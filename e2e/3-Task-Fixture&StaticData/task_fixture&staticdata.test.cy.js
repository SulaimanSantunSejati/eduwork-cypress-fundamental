/// <reference types="cypress" />

describe('Working with inputs', () => {
    
    // Kunjungi website
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
    });

    // Coba login dengan username dan password dari fixture
    it('Should try to login', () => {
        cy.fixture("usersss").then(usersss => {
            const username = usersss.username
            const password = usersss.password
            
           
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#user-name').should('have.value', username)

        
            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)
            cy.get('input[name="password"]').should('have.value', password)

            
            cy.get('#login-button').click()
        })
    });

    
    it('Check the url and Add to cart', () => {
        cy.url().should('include', 'inventory.html')
        cy.get('.inventory_item').first().find('button').click(); 
        
    });
    it('Select sorting option', () => {
    cy.get('.product_sort_container').select('Name (A to Z)'); 
    });
});
