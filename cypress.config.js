const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config)
		},
		baseUrl: 'http://qa-test.resfinity.io/',
		specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		chromeWebSecurity: false,
		viewportWidth: 1920,
		viewportHeight: 1080,
		waitForAnimation: true,
		animationDistanceTreshold: 20,
		defaultCommandTimeout: 30000,
		execTimeout: 60000,
		pageLoadTimeout: 60000,
		requestTimeout: 15000,
		responseTimeout: 15000,
		video: false,
		videoUploadOnPasses: false,
		retries: {
			runMode: 0,
			openMode: 0,
		},
	},
})