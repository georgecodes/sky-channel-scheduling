# features/documentation.feature
Feature: Front Page
  As a user
  I want to see the front page
  So that I can do things

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I click on "CLI"
    Then I should see "Running specific features"