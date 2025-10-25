import * as pageCenaria6 from "../../support/pages/page_cenario_teste6"
import { wait1m, wait2m } from "../../support/constants"

const email = "ditomah155@keevle.com"
const senha = "Teste@1234"

const novaSenha = "NovaSenha@2025"
const novaSenhaInvalida = "123"

describe('Cenário 06 : Gerenciamento de conta ', () => {
    beforeEach("Realizar Login", () => {
        cy.login(email, senha);
    })

    it("CT001 - Editar informações pessoais", () => {
        cy.acessarPageMinhaConta()
        cy.validarAcessarPageMinhaConta()
        pageCenaria6.editarNome()
        cy.validarEditarNome()
    })

    it("CT002 - Alterar senhas com sucesso", () => {
        cy.acessarPageMinhaConta()
        cy.validarAcessarPageMinhaConta()
        pageCenaria6.editarSenha(senha, novaSenha)
        cy.wait(wait2m)
        pageCenaria6.validarEditarSenha(email, novaSenha)
        cy.restaurarSenha(email, senha, novaSenha)
    })

    it("CT003 - Alterar senha inválida", () => {
        cy.acessarPageMinhaConta()
        cy.validarAcessarPageMinhaConta()
        pageCenaria6.editarSenha(senha, novaSenhaInvalida)
        cy.verificarMensagem()
        cy.wait(wait1m)
        cy.validarSenhaInvalida()
    })

    it('CT004 - Adicionar novo endereço', () => {
        cy.acessarPageMinhaConta();
        cy.validarAcessarPageMinhaConta();
        pageCenaria6.acessarEnderecos();
        pageCenaria6.abrirModalNovoEndereco();

        pageCenaria6.cadastrarEnderecoEValidar();
    });

    it('CT005 - Editar endereço existente', function() {
        const novoNumero = 200;
        const novoTelefone = 11888887777;

        cy.acessarPageMinhaConta();
        cy.validarAcessarPageMinhaConta();
        pageCenaria6.acessarEnderecos();
        
        cy.wait(wait1m);

        cy.get('div.MyAccountAddressTable').its('length').then(quantidadeEnderecos => {
            cy.log(`Quantidade de Endereços: ${quantidadeEnderecos}`);

            if (quantidadeEnderecos === 0) {
                cy.log('Não há endereços!')
                this.skip();
            }

            cy.get('div.MyAccountAddressTable')
                .first()
                .contains('button', 'Edit address')
                .click();

            const form = cy.get('.MyAccountAddressPopup .FieldForm-Body');
            form.get('input[name="street_1"]').clear().type(novoNumero);
            form.get('input[name="telephone"]').clear().type(novoTelefone);

            form.get('.MyAccount-Button').click();

            cy.wait(wait1m);
         
            cy.get('div.MyAccountAddressBook').contains('td', novoNumero).should('be.visible');
            cy.get('div.MyAccountAddressBook').contains('td', novoTelefone).should('be.visible');
        });
    });

    it('CT006 - Excluir endereço existente', function() {
        cy.acessarPageMinhaConta();
        cy.validarAcessarPageMinhaConta();
        pageCenaria6.acessarEnderecos();
        
        cy.wait(wait1m);

        cy.get('div.MyAccountAddressTable').its('length').then(quantidadeEnderecos => {
            cy.log(`Quantidade de Endereços: ${quantidadeEnderecos}`);

            if (quantidadeEnderecos === 0) {
                cy.log('Não há endereços!')
                this.skip();
            }

            cy.get('div.MyAccountAddressTable')
                .first()
                .contains('button', 'Delete')
                .click();

            cy.get('.MyAccountAddressPopup')
                .get('.Popup-Heading')
                .should('have.text', 'Confirm delete');

            cy.get('.MyAccountAddressPopup')
                .contains('button', 'Yes, delete address')
                .click();

            cy.wait(wait1m);

            if (quantidadeEnderecos == 1) {
                cy.get('.MyAccount-TabContent_activeTab_address')
                    .get('.MyAccountAddressBook')
                    .get('p')
                    .first()
                    .should('have.text', 'You have no configured addresses.');
            } else {
                cy.get('div.MyAccountAddressTable')
                    .its('length')
                    .then(novaQuantidade => {
                        expect(novaQuantidade).to.equal(quantidadeEnderecos - 1);
                    });
            }            
        });
    });
})
