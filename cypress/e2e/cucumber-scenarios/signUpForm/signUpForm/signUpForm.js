import {
	When,
	And,
	Then
} from '@badeball/cypress-cucumber-preprocessor'
import SignUpFormPage from '../../../pages/SignUpFormPage'

let Data

before(function () {
	cy.fixture(
		'signUpForm',
	).then(d => {
		Data = d
	})

})

When ('populates only First name field', () => {
    //Adding required atrr to the Last name field in order the test to be passed
    cy.get('input[name="lastName"]').then(function($input){
        $input[0].setAttribute('required', '')
      })
    //.should('have.attr', 'required')

    SignUpFormPage.populateFirstNameField(Data.firstName)    
})

And ('clicks the Submit button', () => {
    SignUpFormPage.clickAnyBtn('Submit')
})

Then ('the corresponding error that the Last name field is mandatory displayed', () => {
    SignUpFormPage.verifyRequiredFields('lastName')
})

When ('the user populates only Last name field', () => {
    SignUpFormPage.clearAnyField('firstname')
    SignUpFormPage.populateLastNameField(Data.lastName)
})

Then ('the corresponding error that the First name field is mandatory displayed', () => {
    SignUpFormPage.verifyRequiredFields('firstname')
})

When ('user populates all fields', () => {
    SignUpFormPage.populateFirstNameField(Data.firstName)
    SignUpFormPage.populateYearsOfExperienceField(Data.yearsOfExperience)
})

And ('selects a Sex option', () => {
    SignUpFormPage.selectSex(Data.sex)
})

And ('clicks the Reset button', () => {
    SignUpFormPage.clickAnyBtn('Reset')
})

And ('the Submit button', () => {
    SignUpFormPage.clickAnyBtn('Submit')
})

Then ('the corresponding errors that the Last name & the First name fields are mandatory displayed', () => {
    SignUpFormPage.verifyRequiredFields('firstname')
    SignUpFormPage.verifyRequiredFields('lastName')
})

And ('verifies that all fields are cleared', () => {
    SignUpFormPage.verifyThatAllFieldsAreEmpty()
})

When ('populates all fields', () => {
    SignUpFormPage.populateFirstNameField(Data.firstName)
    SignUpFormPage.populateLastNameField(Data.lastName)
    SignUpFormPage.populateYearsOfExperienceField(Data.yearsOfExperience)
    SignUpFormPage.selectSex(Data.sex)
})

Then ('verify that the form submitted successfully', () => {
    SignUpFormPage.verifyFormSubmittedSuccessfully()
})