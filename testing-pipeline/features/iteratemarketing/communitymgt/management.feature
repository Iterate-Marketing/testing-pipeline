@communitymgt
Feature: Management page

  In order to focus on things that
  all functionality is working fine of
  Management Page as expected.

  Scenario: User is able to navigate VIEW JANITOR AND PORTER SERVICES Page
    Given that User opens the Home page
    Then he click on management link
    Then he opens Management Page
    Then he click on VIEW JANITOR AND PORTER SERVICES Link


  Scenario: User is able to navigate VIEW CONCIERGE SERVICES Page
    Given that User opens the Home page
    Then he opens the "MANAGEMENT" page
    Then he click on VIEW CONCIERGE SERVICES Link

  Scenario: User is able to navigate VIEW GENERAL SERVICES Page
    Given that User opens the Home page
    Then he opens the "MANAGEMENT" page
    Then he click on VIEW GENERAL SERVICES Link


  Scenario: User is able to navigate VIEW PROPERTY MANAGEMENT Page
    Given that User opens the Home page
    Then he opens the "MANAGEMENT" page
    Then he opens the "PROPERTY MANAGEMENT" page
    Then he click on VIEW PROPERTY MANAGEMENT Link

  Scenario: User is able to navigate VIEW PROPERTY SERVICES Page
    Given that User opens the Home page
    Then he opens the "MANAGEMENT" page
    Then he opens the "PROPERTY MANAGEMENT" page
    Then he click on VIEW PROPERTY SERVICES Link

  Scenario: User is able to navigate VIEW GENERAL SERVICES Page by property management page
    Given that User opens the Home page
    Then he opens the "MANAGEMENT" page
    Then he opens the "PROPERTY MANAGEMENT" page
    Then he click on VIEW GENERAL SERVICES Link

   Scenario: User is able to navigate Read our Feedback Page
    Given that User opens the Home page
    Then he opens the "MANAGEMENT" page
     Then he opens the "HOA MANAGEMENT" page
    Then he click on READ OUR FEEDBACK Link

  Scenario: User is able to navigate VIEW PROPERTY SERVICES Page by condo management page
    Given that User opens the Home page
    Then he opens the "MANAGEMENT" page
    Then he opens the "CONDO MANAGEMENT" page
    Then he click on VIEW PROPERTY SERVICES Link

  Scenario: User is able to navigate VIEW BUILDING MAINTENANCE Page by condo management page
    Given that User opens the Home page
    Then he opens the "MANAGEMENT" page
    Then he opens the "CONDO MANAGEMENT" page
    Then he click on VIEW BUILDING MAINTENANCE Link


