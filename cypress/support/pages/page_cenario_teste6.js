import { wait1m } from "../constants"

export function acessarMinhaConta () {
    cy.get("#myAccount").click()
};

export function editarNome(){    
    cy.get('button.Button.Button_isHollow').contains('Edit details').click()
    cy.get('input[name="firstname"]').clear().type("NovoNome")
    cy.get('input[name="lastname"]').clear().type("NovoSobrenome")
    cy.get('button.Button.MyAccountInformation-Submit').contains('Save').click()
}

export function editarSenha(senha,novaSenha){
    cy.get('button.Button.Button_isHollow').contains('Change password').click()
    cy.get('input[name="password"]').clear().type(senha)
    cy.get('input[name="newPassword"]').clear().type(novaSenha)
    cy.get('input[name="confirmNewPassword"]').clear().type(novaSenha)
    cy.get('button.Button.MyAccountInformation-Submit').contains('Save').click()
   
}

export function validarEditarSenha(email,novaSenha){
    cy.get('.LoginAccount-SignInWrapper').within(() => {
        cy.get('input#email').type(email)
        cy.get('input#password').type(novaSenha)
        cy.get('button').contains("Sign in").click()
    })
    cy.url().should('include', '/customer/account')

}

export function acessarEnderecos() {
    cy.get('.MyAccountTabListItem').contains('button', 'Address Book').click();
    cy.wait(500);
    cy.url().should('include', '/customer/address');
}

export function abrirModalNovoEndereco() {
    cy.get('.MyAccountAddressBook').contains('Add new address').click();
    cy.wait(500);
    cy.get('.Popup-Heading').should('have.text', 'Add new address');
}

export function cadastrarEnderecoEValidar() {
    const primeiroNome = 'Guilherme';
    const sobrenome = 'Silva';
    const rua = 'Rua ABC';
    const telefone = '11999990000';
    const cep = '65236511556';
    const cidade = 'Fortaleza';

    const form = cy.get('.MyAccountAddressPopup .FieldForm-Body');
    form.get('input[name="firstname"]').clear().type(primeiroNome);
    form.get('input[name="lastname"]').clear().type(sobrenome);
    form.get('input[name="street_0"]').clear().type(rua);
    form.get('input[name="postcode"]').clear().type(cep);
    form.get('input[name="city"]').clear().type(cidade);
    form.get('input[name="telephone"]').clear().type(telefone);

    form.get('.MyAccount-Button').click();

    cy.wait(wait1m);

    cy.get('div.MyAccountAddressBook').contains('td', primeiroNome).should('be.visible');
    cy.get('div.MyAccountAddressBook').contains('td', sobrenome).should('be.visible');
    cy.get('div.MyAccountAddressBook').contains('td', cep).should('be.visible');
    cy.get('div.MyAccountAddressBook').contains('td', telefone).should('be.visible');
}