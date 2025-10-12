export function escolheCamisetaArgusAllWeatherTankGrayS() {
    cy.get('p.ProductCard-Name').contains('Argus All-Weather Tank').click();
    cy.get('#color_wrapper div.FieldSelect-Clickable').click();
    cy.get('#o395119').click();
    cy.get('#size_wrapper div.FieldSelect-Clickable').click();
    cy.get('#o395234').click();
};

export function clicarAbaReviews() {
    cy.get('.ProductTab-Button').contains('REVIEWS').click(); // clicar aba Review
};


export function clicarBtnEscreverReview() {

    cy.get('#root button.ProductReviews-Button').contains('Write a review').click(); // clicar escrever review

}

export function validarPopupEscreverReview() {
    cy.get('.Popup-Content').should('be.visible').and('contain', 'Write a review');
}

export function qtdEstrelasQuality(valorInput) {
    // Verifica se é number e está entre 1 e 5
    const validValor = (typeof valorInput === 'number' && valorInput >= 1 && valorInput <= 5) ? valorInput : 5;
    const valorStr = String(validValor);

    // Seleciona pelo ID e valor validado
    cy.get(`#NQ\\=\\=MQ\\=\\=[value="${validValor}"]`).check();// quando o ID do selector tem caracteres especiais antes de cada uma precisa colocar \\
};


export function qtdEstrelasValue(valorInput) {
    // Verifica se é number e está entre 1 e 5
    const validValor = (typeof valorInput === 'number' && valorInput >= 1 && valorInput <= 5) ? valorInput : 5;

    // Seleciona pelo ID e valor validado
    cy.get(`#OQ\\=\\=Mg\\=\\=[value="${validValor}"]`).check(); // quando o ID do selector tem caracteres especiais antes de cada uma precisa colocar \\
};

export function qtdEstrelasPrice(valorInput) {
    // Verifica se é number e está entre 1 e 5
    const validValor = (typeof valorInput === 'number' && valorInput >= 1 && valorInput <= 5) ? valorInput : 5;

    // Seleciona pelo ID e valor validado
    cy.get(`#MTM\\=Mw\\=\\=[value="${validValor}"]`).check();// quando o ID do selector tem caracteres especiais antes de cada uma precisa colocar \\
};

export function inputNomeReview(nome) {
    cy.get('#nickname').type(nome); // nome

};

export function inputTituloReview(titulo) {
    cy.get('#title').type(titulo); // titulo review

};

export function inputDetalhesReview(detalhes) {

    cy.get('#detail').type(detalhes); // descricao review

};

export function clicarBtnEnviarReview() {
    cy.get('.ProductReviewForm-Button.Button').contains('Submit Review').click(); //clicar no botao enviar review

};

export function validarEnvioReview() {
    cy.get('#root p.Notification-Text').should('be.visible').and('contain', 'You submitted your review for moderation.');
};
