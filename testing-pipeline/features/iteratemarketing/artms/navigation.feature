@artms
Feature: Navigate through the TMS application

  In order to focus on things that matter
  User would like to navigate through the application
  to validate it is working as expected

  Scenario: User is able to navigate to others page
    Given that User opens the TMS Home page
    Then he open the "Treat Depression" page
    Then he open the "Without Medication" page
    Then he open the "TMS Results" page
    Then he open the "TMS Defined" page
    Then he open the "About Us" page

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

    @test1
  Scenario: Verify that user is able to navigate to video hub page
    Given that User opens the TMS Home page
    Then click on Helpful Video link in footer section
    And verify that user is on video hub page

  Scenario: Verify that user is able to navigate to FAQ page
    Given that User opens the TMS Home page
    Then click on FAQ link in footer section
    And verify that user is on FAQ page

  Scenario: Verify that user is able to navigate TMS insights page in footer section
    Given that User opens the TMS Home page
    Then click on TMS Insights link in footer section
    And verify that user is on TMS Insights page

  Scenario: Verify that user is able to navigate Patient Portal Login Instructions page
    Given that User opens the TMS Home page
    Then click on Patient Portal Login Instructions link
    And verify that user is on Patient Portal Login Instructions page

  Scenario: Verify that user is able to navigate first-time-patient-documents page
    Given that User opens the TMS Home page
    Then click on First Time patient Documents link in footer section
    And verify that user is on First Time patient Document page

  Scenario: Verify that user is able to navigate to For Providers page using footer section
    Given that User opens the TMS Home page
    Then click on For Providers link in footer section
    And verify that user is on ForProviders page

  Scenario: Verify that user is able to navigate portland link
    Given that User opens the TMS Home page
    Then click on portland link in footer section
    And Verify that user is on portland page

  Scenario: User is able to navigate to others page and verify tel number
    Given that User opens the TMS Home page
    Then he open the "Treat Depression" page
    And verify Telephone text should equal "(503) 389-0961"
    Then he open the "Without Medication" page
    And verify Telephone text should equal "(503) 389-0961"
    Then he open the "TMS Defined" page
    And verify Telephone text should equal "(503) 389-0961"