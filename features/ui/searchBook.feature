Feature: Book Store Application - Login and Search Book Functionality

  Scenario: Perform login in Book Store Application and logout
    Given Navigate to Books Store Application
    And User clicks on "Book Store Application" text
    And User clicks on "Login" button
    And Login using the "existing" user.
    Then Verify and Validate username as "existing"
    And User clicks on "Log out" button

  Scenario Outline: Search Book in Book Store Application and write the details to a file
    Given Navigate to Books Store Application
    And User clicks on "Book Store Application" text
    And User clicks on "Login" button
    And Login using the "existing" user.
    When Search "<Book Name>"
    Then Validate the search result to contain "<Book Name>" book.
    And Print Title, Author and Publisher into a file for "<Book Name>"
    And User clicks on "Log out" button

    Examples:
      | Book Name                           |
      | Learning JavaScript Design Patterns |
