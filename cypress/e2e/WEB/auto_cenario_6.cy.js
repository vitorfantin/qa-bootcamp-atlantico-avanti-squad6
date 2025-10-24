import * as pageCenaria6 from "../../support/pages/page_cenario_teste6"

const email = "ditomah155@keevle.com"
const senha = "Teste@1234"

const novaSenha = "NovaSenha@2025"
const novaSenhaInvalida = "123"


const wait2m = 120000
const wait1m = 60000

describe('Cenário 06 : Gerenciamento de conta ',()=>{
    beforeEach("Realizar Login",()=>{
        cy.visit("https://luma-demo.scandipwa.com")
        cy.fazerLogin(email,senha)
        cy.loginValidar()
    })
    it("CT001 - Editar informações pessoais",()=>{
        
        cy.acessarPageMinhaConta()
        cy.validarAcessarPageMinhaConta()
        pageCenaria6.editarNome()
        cy.validarEditarNome()
    })

    it("CT002 - Alterar senhas com sucesso",()=>{
        
        cy.acessarPageMinhaConta()
        cy.validarAcessarPageMinhaConta()
        pageCenaria6.editarSenha(senha,novaSenha)
        cy.wait(wait2m)
        pageCenaria6.validarEditarSenha(email,novaSenha)
        cy.restaurarSenha(email,senha,novaSenha)

    })

    it("CT003 - Alterar senha inválida",()=>{
        cy.acessarPageMinhaConta()
        cy.validarAcessarPageMinhaConta()
        pageCenaria6.editarSenha(senha,novaSenhaInvalida)
        cy.verificarMensagem()
        cy.wait(wait1m)
        cy.validarSenhaInvalida()
    })

})
