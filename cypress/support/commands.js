Cypress.Commands.overwrite(
	'type',
	(originalFn, subject, text, options = {}) => {
		options.delay = 0

		return originalFn(subject, text, options)
	},
)

Cypress.Commands.add('clickContains', (el, val) => {
	cy.contains(el, val).click()
})