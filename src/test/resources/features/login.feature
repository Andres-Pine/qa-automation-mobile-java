Feature: User Login
  As a user
  I want to login to the mobile application
  So that I can access the app features

  Scenario: Successful login with valid credentials
    Given the user is on the login screen
    When the user enters valid credentials
    Then the user should be logged in successfully

  Scenario: Failed login with invalid credentials
    Given the user is on the login screen
    When the user enters invalid credentials
    Then the user should see an error message