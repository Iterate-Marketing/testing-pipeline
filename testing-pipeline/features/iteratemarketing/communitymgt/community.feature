@communitymgt
Feature: Management page

  In order to focus on things that
  all functionality is working fine of
  Community Page as expected.

  @t1
  Scenario: User is able to navigate Connect with Us page
    Given that User opens the Home page
    Then he opens the "COMMUNITY" page
    Then he open CONNECT WITH US page

  Scenario: User is able to navigate Meet The Team page and able to see team profile
    Given that User opens the Home page
    Then he opens the "COMMUNITY" page
    And User click on MEET THE TEAM button
    Then verify that user is on caliber page
    And user click on View profile button
    Then verify that team profile is displayed

  Scenario: User is able to see READ OUR FEEDBACK page
    Given that User opens the Home page
    Then he opens the "COMMUNITY" page
    Then he click on READ OUR FEEDBACK Link
    Then verify that user is on Feedback page

  Scenario: User is able to Navigate to Reputation page
    Given that User opens the Home page
    Then he opens the "REPUTATION" page
    Then Verify that user is able to see reputation page

#    Then he opens the "CONNECT" page
#    Then he opens the "CALIBER" page
#    Then he opens the "REPUTATION" page
#    Then he opens the "CMI JOURNAL" page