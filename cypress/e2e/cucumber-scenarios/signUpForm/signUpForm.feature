Feature: Sign Up form

    Basic Scenarios of Sign Up form

    Scenario: Submit form with all fields
        Given that user is on the Sign Up page 
        When populates all fields
        And clicks the Submit button
        Then verify that the form submitted successfully
    @test
    Scenario: Validation erros & Reset Button
        Given that user is on the Sign Up page  
        When populates only First name field
        And clicks the Submit button
        Then the corresponding error that the Last name field is mandatory displayed
        When the user populates only Last name field
        Then the corresponding error that the First name field is mandatory displayed
        When user populates all fields
        And selects a Sex option
        And clicks the Reset button
        And the Submit button
        Then the corresponding errors that the Last name & the First name fields are mandatory displayed
        And verifies that all fields are cleared