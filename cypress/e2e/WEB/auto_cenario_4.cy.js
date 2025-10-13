/// <reference types="cypress" />
const timeWait = 30000;
const timeWait2 = 6000;

import * as pageCenario4 from '../../support/pages/page_cenario_teste4';

beforeEach(() => {
    cy.visit('');
    // cy.clearCookies();
    // cy.clearLocalStorage();
});

describe('Cenário 4 - Carrinho de compras', () => {
    it('CT 001 - Adicionar produto com sucesso - OK', () => {
        cy.scrollTo('bottom');
        pageCenario4.escolherProdutoSemVariacoes('Fusion Backpack');
        cy.wait(timeWait);
        cy.scrollTo('center');
        cy.wait(timeWait2);
        pageCenario4.clicarBtnAddCarrinhoPgProduto();
        pageCenario4.validarMsgProdutoAdicionado();
        pageCenario4.abrirCarrinho();
        pageCenario4.validarProdutoCarrinho('Fusion Backpack');
    });

    it('CT 002 - Adicionar produto sem selecionar opções - OK', () => {
        pageCenario4.escolherBlusaMoletonHeroHoodie()
        cy.wait(timeWait);
        pageCenario4.clicarBtnAddCarrinhoPgProduto();
        pageCenario4.validarMsgEscolherOpcoesProduto();
    });

    it('CT 003 - Alterar quantidade de item ', () => {
        pageCenario4.escolheCamisetaArgusAllWeatherTankGrayS();
        pageCenario4.addQtdProduto(3);
        cy.wait(timeWait);
        cy.scrollTo('center');
        cy.wait(timeWait2);
        pageCenario4.clicarBtnAddCarrinhoPgProduto();
        cy.wait(timeWait2);
        pageCenario4.validarMsgProdutoAdicionado();
        pageCenario4.abrirCarrinho();
        pageCenario4.validarProdutoCarrinho('Argus All-Weather Tank');
    });

    it('CT 004 - Remover item do carrinho - OK', () => {
        cy.menuGear();
        cy.scrollTo('bottom');
        cy.wait(timeWait2);


        pageCenario4.escolherProdutoSemVariacoes('Clamber Watch');
        cy.wait(timeWait);
        pageCenario4.clicarBtnAddCarrinhoPgProduto();
        pageCenario4.validarMsgProdutoAdicionado();
        cy.wait(timeWait2);
        pageCenario4.abrirCarrinho();
        pageCenario4.validarProdutoCarrinho('Clamber Watch');
        cy.wait(timeWait2);


        cy.menuGear();
        cy.scrollTo('bottom');
        cy.wait(timeWait2);

        pageCenario4.escolherProdutoSemVariacoes('Sprite Foam Roller');
        cy.wait(timeWait);
        pageCenario4.clicarBtnAddCarrinhoPgProduto();
        pageCenario4.validarMsgProdutoAdicionado();
        cy.wait(timeWait2);

        pageCenario4.abrirCarrinho();
        pageCenario4.validarProdutoCarrinho('Sprite Foam Roller');

        pageCenario4.abrirCarrinho();
        pageCenario4.apagarItemCarrinho(1);
        pageCenario4.validarProdutoRemovidoCarrinho('Clamber');




    });

    it('CT 005 - Adicionar produto indisponível (out of stock) - OK', () => {
        pageCenario4.escolherProdutoSemVariacoes('LifeLong Fitness IV');
        pageCenario4.validarBtnDesabilitado();

    });

    it('CT 006 - Validar cupom de desconto na página carrinho completo', () => {
        // cy.fazerLogin();
        // cy.validarLogin();
    });


});