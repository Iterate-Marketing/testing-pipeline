Feature: Navigate through the application

  In order to focus on things that matter
  User would like to navigate through the application
  to validate it is working as expected

  Scenario: User is able to navigate MANAGEMENT submenus
    Given that User opens the Home page
    Then he opens the "MANAGEMENT" page
    Then he opens the "PROPERTY MANAGEMENT" page
    Then he opens the "HOA MANAGEMENT" page
    Then he opens the "CONDO MANAGEMENT" page

  Scenario: User is able to navigate COMMUNITY submenus
    Given that User opens the Home page
    Then he opens the "COMMUNITY" page
    Then he opens the "CONNECT" page
    Then he opens the "CALIBER" page
    Then he opens the "REPUTATION" page
    Then he opens the "CMI JOURNAL" page


