Feature: Contact through the TMS application

  In order to focus on things that matter
  User would like to contact and it is working as expected

  @Pending
  Scenario: Verify that user is able to contact
    Given that User opens the TMS Home page
    Then user fill the contact form and click on send message button
    And Verify that message has been sent