const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9y1axh",
  //video: true, // garante que a gravação está ativa
  //videoCompression: 32,
  //videosFolder: "cypress/videos", // onde os vídeos são salvos
  e2e: {
    baseUrl: "https://luma-demo.scandipwa.com/",
    defaultCommandTimeout: 120000, // foi definido para 2 min pois API do projeto é muito lento, não é boa prática em utilizar tempo excessivamente alto
    // retries: {
    // runMode: 2, // Tentar  x vezes em modo run
    // openMode: 2, //  tentar novamente em modo interativo
    // },
    viewportWidth: 1920, // resolução da tela
    viewportHeight: 1080, // resolução da tela
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
