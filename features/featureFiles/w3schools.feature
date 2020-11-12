@smoke
Feature: Homework

    Just doing my Homework

    Scenario: Check the content within iframe

        Given I am on Iframe tutorial page
        When I click Next button on Tutorial page wintin iframe     
        Then I see Introduction page within iframe

    Scenario: Enter my name

        Given I am on Bootstrap tutorial page
        When I enter "John Pepegov" to Name field
        Then I see "John Pepegov" within Name field

    Scenario: Check the checkbox

        Given I am on Bootstrap tutorial page
        When I check the Option 1 checkbox
        Then I see the Option 1 checkbox is checked

    Scenario: Check the radio

        Given I am on Bootstrap tutorial page
        When I check the Option 1 radio
        Then I see the Option 1 radio is checked

    Scenario: Select value in the dropdown list

        Given I am on Bootstrap tutorial page
        When I select Option 4 in the dropdown list
        Then I see the Option 4 is selected

    Scenario: Hovering over element

        Given I am on Dropdown tutorial page
        Then Dropdown appears on hovering the element
