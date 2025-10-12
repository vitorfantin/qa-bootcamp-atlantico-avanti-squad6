// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('fazerLogin', (email, senha) => {
    cy.get('#myAccount svg.UserIcon').click();
    cy.get('#email').type(email);
    cy.get('#password').type(senha);
    cy.get('#root div.MyAccountOverlay-SignInButton button.Button').click();
})
Cypress.Commands.add('validarLogin', (validacao) => {
   cy.get('#root div.Header-Welcome').should('contain', 'Welcome,');
})
//₢
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })