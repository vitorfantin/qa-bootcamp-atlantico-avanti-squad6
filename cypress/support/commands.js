const { lumaUrl } = require('./constants');

require('cypress-xpath');

// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (email, senha) => {
    cy.session(
        [email, senha],
        () => {
            cy.visit(lumaUrl)
            cy.get('#myAccount svg.UserIcon').click();
            cy.get('#email').type(email);
            cy.get('#password').type(senha);
            cy.get('#root div.MyAccountOverlay-SignInButton button.Button').click();
            cy.loginValidar();
        },
        {});

    cy.wait(3000)
    cy.visit('/');
});

Cypress.Commands.add('fazerLogin', (email, senha) => {
    cy.get('#myAccount svg.UserIcon').click();
    cy.get('#email').type(email);
    cy.get('#password').type(senha);
    cy.get('#root div.MyAccountOverlay-SignInButton button.Button').click();
})

Cypress.Commands.add('validarLogin', () => {
    cy.get('#root div.Header-Welcome', { timeout: 120000 }).should('contain', 'Welcome,');
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

Cypress.Commands.add('restaurarSenha', (email, senha, novaSenha) => {

    cy.visit("https://luma-demo.scandipwa.com")
    cy.fazerLogin(email, novaSenha)
    cy.validarLogin()

    cy.get("#myAccount").click()
    cy.url().should('include', '/customer/account')
    cy.get('button.Button.Button_isHollow').contains('Change password').click()
    cy.get('input[name="password"]').clear().type(novaSenha)
    cy.get('input[name="newPassword"]').clear().type(senha)
    cy.get('input[name="confirmNewPassword"]').clear().type(senha)
    cy.get('button.Button.MyAccountInformation-Submit').contains('Save').click()

})

Cypress.Commands.add('acessarPageMinhaConta', () => {
    cy.get("#myAccount").click()
})

Cypress.Commands.add('validarAcessarPageMinhaConta', () => {
    cy.url().should('include', '/customer/account')
})

Cypress.Commands.add('validarEditarNome', () => {
    cy.contains('You saved the account information.').should('be.visible')
})
Cypress.Commands.add('verificaMensagem', () => {
    cy.contains("/(Minimum of different classes of characters in password is 3|Minimum 8 characters!)/").should('be.visible')
})
Cypress.Commands.add('validarSenhaInvalida', () => {
    cy.url().should('include', '/customer/account/edit')
})
Cypress.Commands.add('loginValidar', () => {
    cy.contains('You are successfully logged in!').should('be.visible', { timeout: 120000 })
})
