require('cypress-xpath');

// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('fazerLogin', (email, senha) => {
    cy.get('#myAccount svg.UserIcon').click();
    cy.get('#email').type(email);
    cy.get('#password').type(senha);
    cy.get('#root div.MyAccountOverlay-SignInButton button.Button').click();
})

Cypress.Commands.add('validarLogin', () => {
    cy.get('#root div.Header-Welcome').should('contain', 'Welcome,');
})

Cypress.Commands.add('fazerLogout', () => {
    cy.get('#myAccount path').click();
    cy.contains('button.MyAccountTabListItem-Button', 'Logout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
});
Cypress.Commands.add('validarLogout', () => {
    cy.get('#root p.Notification-Text')
        .then(($el) => {
            expect($el.text().trim()).to.eq('You are successfully logged out!');
        })
})

Cypress.Commands.add('voltarHome', () => {
    // Garante que o logo está visível antes de clicar
    cy.get('img[alt="ScandiPWA logo"]')
        .should('be.visible')
        .click()

    // Valida que a URL voltou pra home
    cy.url().should('eq', 'https://luma-demo.scandipwa.com/')
})
Cypress.Commands.add('menuGear', () => {
    cy.contains('figcaption', 'Gear').click();
    cy.url().should('eq', 'https://luma-demo.scandipwa.com/gear.html')

})