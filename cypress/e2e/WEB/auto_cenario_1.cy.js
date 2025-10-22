describe('Cenario 01 - Cadastro', () => {


    it('ct 001 - Cadastro com sucesso', function () {
        cy.visit('https://luma-demo.scandipwa.com/')
        cy.get('#myAccount svg.UserIcon').click();
        cy.get('#root section > button.Button').click();
        cy.get('[name="firstname"]').click();
        cy.get('[name="lastname"]').click();
        cy.get('[name="is_subscribed"]').check();
        cy.get('[name="email"]').click();
        cy.get('[name="password"]').click();
        cy.get('[name="confirm_password"]').click();
        cy.get('#root button.MyAccountOverlay-SignUpButton').click();

    })
})