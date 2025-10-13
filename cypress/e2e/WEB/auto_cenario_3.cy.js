import * as pageCenario3 from "../../support/pages/page_cenario_teste3";
describe('Cenário 3 - Avaliações de Produtos', () => {

  before(() => {
    cy.visit('');
  });
  it('CT003 - Bloqueio ao enviar review sem estar Logado', () => {
    pageCenario3.escolheCamisetaArgusAllWeatherTankGrayS();
    pageCenario3.clicarAbaReviews();
    pageCenario3.clicarBtnEscreverReview();
    pageCenario3.validarPopupEscreverReview();
    pageCenario3.qtdEstrelasQuality(5);
    pageCenario3.qtdEstrelasValue(4);
    pageCenario3.qtdEstrelasPrice(3);
    pageCenario3.inputNomeReview('Michael');
    pageCenario3.inputTituloReview('Muito bom recomendo');
    pageCenario3.inputDetalhesReview('Material é muito bom, leve e confortável, vale muito a pena comprar!');
    pageCenario3.clicarBtnEnviarReview();
    pageCenario3.validarEnvioReview();
  });

});

