const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    username: process.env.SWAG_USERNAME,
    password: process.env.SWAG_PASSWORD,
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
