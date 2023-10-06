const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = {


  e2e: {
    "specPattern": "**/*.feature",
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config){
      on('file:preprocessor', cucumber())
    }
  },
  
};