require('dotenv').config()
const { defineConfig } = require('Cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    baseApiUrl: 'https://restful-booker.herokuapp.com/',
    password: process.env.PASSWORD
  }
})
