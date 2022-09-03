export default class SignUpFormPage {
	static populateFirstNameField(name) {
		cy.get('input[name="firstname"]').clear().type(name)
	}

	static populateLastNameField(name) {
		cy.get('input[name="lastName"]').type(name)
	}

    static populateYearsOfExperienceField(val) {
        cy.get('input[name="experience"]').type(val)
    }

    static clearAnyField(field) {
        const fields = ['firstname', 'lastName', 'experience']

        if (!fields.includes(field)) {
            throw new Error(`There in no **${field}** field`)
        }
        cy.get(`input[name="${field}"]`).clear()
    }

    static selectSex(sex) {
        const genders = ['Male', 'Female']

        if (!genders.includes(sex)) {
            throw new Error(`There in no **${sex}** gender`)
        }

        cy.get(`input[value="${sex.toLowerCase()}"]`).click()
    }            

    static verifyRequiredFields(field) {
        const fields = ['firstname', 'lastName']

        if (!fields.includes(field)) {
            throw new Error(`There in no **${field}** field`)
        }

        cy.get(`input[name="${field}"]`).should('have.attr', 'required')
    }

	static clickAnyBtn(btn) {
		const buttons = ['Submit', 'Reset']

        if (!buttons.includes(btn)) {
            throw new Error(`There in no **${btn}** button`)
        }

        cy.clickContains('button', btn)
	}

    static verifyThatAllFieldsAreEmpty() {
        cy.get('input[name="firstname"]').should('have.value', '')
        cy.get('input[name="lastName"]').should('have.value', '')
        cy.get('input[name="experience"]').should('have.value', '')
    }

    static verifyFormSubmittedSuccessfully() {
        cy.contains('h2', 'We have successfully received your request.').should('be.visible')
    }
}
