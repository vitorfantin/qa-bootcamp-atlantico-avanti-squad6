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