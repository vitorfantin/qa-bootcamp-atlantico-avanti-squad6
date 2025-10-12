const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://luma-demo.scandipwa.com/',
    defaultCommandTimeout: 300000, // foi definido para 5min pois API do projeto é muito lento, não é boa prática em utilizar tempo excessivamente alto
    // retries: {
    //   runMode: 3, // Tentar  vezes em modo run
    //   openMode: 3, //  tentar novamente em modo interativo
    // },
    viewportWidth: 1920, // resolução da tela
    viewportHeight: 1080, // resolução da tela
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
