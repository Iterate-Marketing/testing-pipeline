@communitymgt
Feature: Home page

  In order to focus on things that
  all functionality is working fine of
  Landing page as expected.

 Scenario: Verify Read More button convert in to Read Less after click
   Given that User opens the Home page
   Then user click on Read More button in Management section
   And Verify that that Read More button has changed in Management Section
   Then user click on Read More button in  PROPERTY SERVICES section
   And Verify that Read more Button convert into read Less Button inService section

  Scenario: Verify that user is able to fill the Let's connect form
    Given that User opens the Home page
    Then user click on let's connect button
    And user fill the let's connect form and click on Submit button
    Then verify submit button text convert into success

  Scenario: Verify that search result is shown according to user
    Given that User opens the Home page
    Then user enter the "Management" in search bar
    And verify the search result contains "Management"

  Scenario: Verify that user is able to open search with search result
    Given that User opens the Home page
    Then user enter the "Management" in search bar
    And verify the search result contains "Management"
    And user click "HOA Management" search result
    Then Verify that "hoa-management" page has open

 Scenario: Verify that user is getting Not found when search irelevant data in searh bar
   Given that User opens the Home page
   Then user enter the "dfdgfhgfh" in search bar
   And verify the search result contains "Not found"

 Scenario: Verify that user is able to open WHY CMI page
   Given that User opens the Home page
   Then user click on WHY CMI Text
   Then Verify that "testimonials" page has open

 Scenario: Verify that user is able to open OUR SERVICES page
   Given that User opens the Home page
   Then user click on OUR SERVICES Text
   Then Verify that "services" page has open

 Scenario: Verify that user is able to open CORE VALUES page
   Given that User opens the Home page
   Then user click on CORE VALUES Text
   Then Verify that "code-of-ethics" page has open

 Scenario: Verify that user is able to open PAYMENTS OPTIONS page
   Given that User opens the Home page
   Then user click on PAYMENTS OPTIONS Text
   Then Verify that "payment-options" page has open

 Scenario: Verify that user is able to see TOUR DE CURE WLS AND CMI page
   Given that User opens the Home page
   Then User click on read more link in TOUR DE CURE WLS AND CMI section
   And Verify that user is on TOUR DE CURE WLS AND CMI page
   And Verify that a form is present in this page

 Scenario: Verify that user is able to see SAVE OUR HISTORIC PEARL WATER TOWERS! page
   Given that User opens the Home page
   Then user click on SAVE OUR HISTORIC PEARL WATER TOWERS! link
   And Verify that user is on SAVE OUR HISTORIC PEARL WATER TOWERS page
   And Verify that a form is present in this page


