@communitymgt
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

  Scenario: User is able to navigate INVOLVE submenus
    Given that User opens the Home page
    Then he opens the "INVOLVE" page
    Then he opens the "KNOWLEDGE" page
    Then he opens the "SERVICE REQUEST" page
    Then he opens the "LEGAL" page
    Then he opens the "PAY" page
    Then he opens the "PARTNER" page
    Then he opens the "FAQ'S" page

  Scenario: User is able to navigate SERVICES submenus
    Then he opens the "SERVICES" page
    Then he opens the "PROPERTY SERVICES" page
    Then he opens the "BUILDING MAINTENANCE" page

  Scenario: Verify that user can navigate to CODE OF ETHICS page
    Given that User opens the Home page
    When he opens the CODE OF ETHICS page
