const timeoutPO = 80000;

export function escolheCamisetaArgusAllWeatherTankGrayS() {
    cy.get('p.ProductCard-Name', { timeout: timeoutPO }).contains('Argus All-Weather Tank').click();
    cy.url().should('eq', 'https://luma-demo.scandipwa.com/argus-all-weather-tank.html')
    cy.get('#color_wrapper div.FieldSelect-Clickable').click();
    cy.get('#o395119').click();
    cy.get('#size_wrapper div.FieldSelect-Clickable').click();
    cy.get('#o395234').click();
};

export function escolherBlusaMoletonHeroHoodie() {
    cy.get('p.ProductCard-Name', { timeout: timeoutPO }).contains('Hero Hoodie').click();
    cy.url().should('eq', 'https://luma-demo.scandipwa.com/hero-hoodie.html');
    // cy.get('#color_wrapper div.FieldSelect-Clickable').click();
    // cy.get('#o395119').click();
    // cy.get('#size_wrapper div.FieldSelect-Clickable').click();
    // cy.get('#o395234').click();
};

export function escolherProdutoSemVariacoes(nomeProduto) {
    cy.get('p.ProductCard-Name', { timeout: timeoutPO }).contains(nomeProduto).click();
    cy.get('.ProductPage-Title', { timeout: timeoutPO }).should('have.text', nomeProduto);

}
export function clicarBtnAddCarrinhoPgProduto() {
    // cy.get('#root button.ProductActions-AddToCart span', { timeout: 70000 }).click();
    cy.contains('button', 'Add to cart', { timeout: timeoutPO }).click();




}
export function clicarBtnAddCarrinhoHomePage(nomeProduto) {
    cy.get('#root button.ProductCard-AddToCart span', { timeout: timeoutPO }).contains(nomeProduto).click
}
export function validarMsgProdutoAdicionado() {
    cy.get('#root p.Notification-Text', { timeout: timeoutPO })
        .then(($el) => {
            expect($el.text().trim()).to.eq('Product was added to cart!');
        })
}
export function validarMsgEscolherOpcoesProduto() {
    cy.get('#root p.Notification-Text')
        .then(($el) => {
            expect($el.text().trim()).to.eq('Incorrect or missing options!');
        })
}

export function abrirCarrinho() {
    cy.get('#root svg.CartIcon', { timeout: timeoutPO })
        .should('be.visible')
        .click();
}

export function validarProdutoCarrinho(nomeProduto) {

    cy.get('p.CartItem-Heading', { timeout: timeoutPO })
        .should('be.visible')
        .and('contain.text', nomeProduto);

    // cy.log(`✅ Produto "${nomeProduto}" está presente no carrinho.`);
}

export function validarProdutoRemovidoCarrinho(nomeProduto) {
    cy.get('p.CartItem-Heading').should('not.contain.text', nomeProduto);

    // cy.log(`✅ Produto "${nomeProduto}" não está mais presente no carrinho.`);
}

export function addQtdProduto(qtd) {
    cy.get('#item_qty')
        .should('exist')                           // garante que o campo está na tela
        .invoke('removeAttr', 'readonly')          // permite editar o valor
        .invoke('val', qtd)                        // define o novo valor diretamente
    // .trigger('input')                          // dispara o evento de digitação
    // .trigger('change');                        // dispara o evento de mudança
}


export function validarBtnDesabilitado() {
    cy.get('button.ProductActions-AddToCart')
        .should('be.disabled');

}

export function apagarItemCarrinho(item) {
    cy.get(`div.CartItem:nth-of-type(${item}) #RemoveItem path`).click();
}

export function validarCarrinhoVazio() {
    cy.get('.CartOverlay-Empty', { timeout: timeoutPO })
        .should('be.visible')
        .and('contain.text', 'You have no items in your shopping cart.');
}