import { faker } from "@faker-js/faker";

describe('Cenario 01 - Cadastro', () => {
    const timeWait = 180000;
    const timeWait2 = 5000;
    const timeWait3 = 60000;
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const email = faker.internet.email().toLowerCase();
    const senha = faker.internet.password(8);
    const nomeFixo = 'Vitor'
    const emailFixo = 'vitorsantos@gmail.com';
    const senhaFixo = 'Vitor123';


    beforeEach(() => {
        cy.visit("https://luma-demo.scandipwa.com/", {
            onBeforeLoad(win) {
                delete win.navigator.serviceWorker;
            },
        });
        cy.wait(timeWait2);
        cy.reload()


    });

    it('CT 001 - Cadastro com sucesso', function () {

        cy.get('#myAccount path').click();
        cy.get('#root section > button.Button').click();
        cy.get('#firstname').type(nome);
        cy.get('#lastname').type(sobrenome);
        cy.get('[name="is_subscribed"]').check();
        cy.get('#email').type(email);
        cy.get('#password').type(senha);
        cy.get('#confirm_password').type(senha);
        cy.get('#root button.MyAccountOverlay-SignUpButton').click();
        cy.get('#root p.Notification-Text', { timeout: timeWait })
            .then(($el) => {
                expect($el.text().trim()).to.eq('You are successfully logged in!');
            });
        cy.get('#root div.Header-Welcome', { timeout: timeWait }).then(($el) => {
            expect($el.text().trim()).to.eq(`Welcome, ${nome}!`);
        })
    });

    it('CT 008 - Login com sucesso ', function () {
        cy.get('#myAccount path').click();
        cy.get('#email').type(email);
        cy.get('#password').type(senha);
        cy.get('#root div.MyAccountOverlay-SignInButton button.Button', { timeout: timeWait }).click();
        cy.get('#root p.Notification-Text', { timeout: timeWait })
            .then(($el) => {
                expect($el.text().trim()).to.eq('You are successfully logged in!');
            });

    });

    it('CT 009 - Logout com sucesso', function () {

        //login
        cy.get('#myAccount svg.UserIcon').click();
        cy.wait(timeWait2);
        cy.get('#email').type(emailFixo);
        cy.get('#password').type(senhaFixo);
        cy.get('#root div.MyAccountOverlay-SignInButton button.Button').click();
        cy.wait(timeWait3);
        //verificar login
        cy.get('#root div.Header-Welcome').should('contain', `Welcome, ${nomeFixo}!`);

        cy.wait(timeWait2);
        cy.reload();
        //fazer logout
        cy.get('#myAccount path').click();
        cy.contains('button.MyAccountTabListItem-Button', 'Logout')
            .should('be.visible')
            .and('not.be.disabled')
            .click();

        //verificar logout
        cy.get('#root p.Notification-Text', {timeWait})
            .then(($el) => {
                expect($el.text().trim()).to.eq('You are successfully logged out!');
            })




    });

});