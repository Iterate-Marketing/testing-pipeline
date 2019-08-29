@artms
Feature: Contact through the TMS application

  In order to focus on things that matter
  User would like to contact and it is working as expected

#  @Pending
#  Scenario: Verify that user is able to contact
#    Given that User opens the TMS Home page
#    Then user fill the contact form and click on send message button
#    And Verify that message has been sent

  Scenario: Verify that user is getting popup message when submit the form in bottom section
    Given that User opens the TMS Home page
    Then scroll down the page at bottom
    And user fill the Talk to a professional form with following details
    |Element         | Value            |
    | Your Name      | TEST             |
    | Your Email     | test@test.com    |
    | Your Phone     | 1111111111       |
    Then Verify that user is getting trigger popup message

  Scenario: Verify that user is able to fill Lasting Relief From Severe Depression at front page
    Given that User opens the TMS Home page
    And user fill the Lasting Relief From Severe Depression form with Following details
      |Element         | Value            |
      | Your Name      | TEST             |
      | Your Email     | test@test.com    |
      | Your Phone     | 1111111111       |
    Then Verify that user is getting trigger popup message

  Scenario: Verify that user is able to BOOK A FREE CONSULATION REQUEST
    Given that User opens the TMS Home page
    Then user navigate to "phq-9-test-online" URL
    And user fill the Talk to a professional form with following details
      |Element         | Value            |
      | Your Name      | TEST             |
      | Your Email     | test@test.com    |
      | Your Phone     | 1111111111       |
    Then Verify that user is getting trigger popup message

