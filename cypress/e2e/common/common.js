import {
	defineStep,
} from '@badeball/cypress-cucumber-preprocessor'

defineStep('that user is on the Sign Up page', () => {
    cy.visit('/')
    cy.get('img').should('have.attr', 'src', 'logo.png')
})