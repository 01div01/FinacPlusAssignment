Feature: ReqRes User API Automation

  Scenario: Create, fetch and update a user

    Given Create a user as "Divyanshu" and job "QA Architect" and store the userId
    Then validate the response http status code as 201
    And validate the created user details as "Divyanshu" and job "QA Architect"
    
    When I update the user with name "Divyanshu Updated" and job "QA Lead"
    Then validate the response http status code as 200
    And validate the created user details as "Divyanshu Updated" and job "QA Lead"
