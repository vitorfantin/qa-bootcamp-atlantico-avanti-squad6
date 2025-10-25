import * as pageCenaria6 from "../../support/pages/page_cenario_teste6"
import { wait1m, wait2m, wai10segundos } from "../../support/constants"
import * as contas_cadastradas from "../../fixtures/contas_cadastradas"

const novaSenha = "NovaSenha@2025"
const novaSenhaInvalida = "123"


describe('Cenário 06 : Gerenciamento de conta ', () => {
    beforeEach("Realizar Login", () => {
        cy.visit("https://luma-demo.scandipwa.com/", {
            onBeforeLoad(win) {
                delete win.navigator.serviceWorker;
            },
        });
        cy.wait(wai10segundos);
        cy.reload();


    })

    it("CT001 - Editar informações pessoais", () => {
        cy.fazerLogin(contas_cadastradas.emailCC1, contas_cadastradas.senhaCC1);
        cy.validarLogin();
        cy.acessarPageMinhaConta()
        cy.validarAcessarPageMinhaConta()
        pageCenaria6.editarNome()
        cy.validarEditarNome()
    })

    it("CT002 - Alterar senhas com sucesso", () => {
        cy.fazerLogin(contas_cadastradas.emailCC2, contas_cadastradas.senhaCC2);
        cy.validarLogin();
        cy.acessarPageMinhaConta()
        cy.validarAcessarPageMinhaConta()
        pageCenaria6.editarSenha(contas_cadastradas.senhaCC2, novaSenha)
        cy.wait(wait2m)
        pageCenaria6.validarEditarSenha(contas_cadastradas.emailCC2, novaSenha)
        cy.restaurarSenha(contas_cadastradas.emailCC2, contas_cadastradas.senhaCC2, novaSenha)
    })

    it("CT003 - Alterar senha  - ° ", () => {
        cy.fazerLogin(contas_cadastradas.emailCC3, contas_cadastradas.senhaCC3);
        cy.validarLogin();

        cy.acessarPageMinhaConta()
        cy.validarAcessarPageMinhaConta()
        pageCenaria6.editarSenha(contas_cadastradas.senhaCC3, novaSenhaInvalida)
        cy.verificarMensagem()
        cy.wait(wait1m)
        cy.validarSenhaInvalida()
    })

    it('CT004 - Adicionar novo endereço', () => {
        cy.fazerLogin(contas_cadastradas.emailCC4, contas_cadastradas.senhaCC4);
        cy.validarLogin();

        cy.acessarPageMinhaConta();
        cy.validarAcessarPageMinhaConta();
        pageCenaria6.acessarEnderecos();
        pageCenaria6.abrirModalNovoEndereco();

        pageCenaria6.cadastrarEnderecoEValidar();
    });

    it('CT005 - Editar endereço existente - °', function () {
        const novoNumero = 200;
        const novoTelefone = 11888887777;

        cy.fazerLogin(contas_cadastradas.emailCC1, contas_cadastradas.senhaCC1);
        cy.validarLogin();

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

    it('CT006 - Excluir endereço existente - °', function () {

        cy.fazerLogin(contas_cadastradas.emailCC2, contas_cadastradas.senhaCC2);
        cy.validarLogin();

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
