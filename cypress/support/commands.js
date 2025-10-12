
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
