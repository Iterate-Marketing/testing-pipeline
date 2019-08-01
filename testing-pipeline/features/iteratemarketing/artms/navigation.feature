@artms
Feature: Navigate through the TMS application

  In order to focus on things that matter
  User would like to navigate through the application
  to validate it is working as expected

  #Scenario: User is able to navigate to others page
    #Given that User opens the TMS Home page
    #Then he open the "Treat Depression" page
    #Then he open the "Without Medication" page
    #Then he open the "TMS Results" page
    #Then he open the "TMS Defined" page
    #Then he open the "About Us" page

  Scenario: Verify that user is able to navigate patient providers page
    Given that User opens the TMS Home page
    Then user clicks on For Providers button
    And verify that user is on For Providers page

  Scenario: Verify that user is able to navigate to Patient Login page
    Given that User opens the TMS Home page
    Then user click on user is on Patient login button
    And Verify that user is on Patient page

  Scenario: Verify that facebook link is working
    Given that User opens the TMS Home page
    Then click on facebook icon
    And verify that user is on facebook page

  Scenario: Verify that Instagram link is working
    Given that User opens the TMS Home page
    Then click on Instagram link
    And Verify that use is on instagram page

  Scenario: Verify that LinkedIn link is working
    Given that User opens the TMS Home page
    Then click on LinkedIn link
    And Verify that use is on LinkedIn page

  Scenario: Verify that user is able to navigate to About page
    Given that User opens the TMS Home page
    Then click on About us link in footer section
    And Verify that user is on about us page
