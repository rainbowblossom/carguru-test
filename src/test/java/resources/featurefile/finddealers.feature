Feature: Find the dealers and verify

  @Smoke @Regression
  Scenario Outline: Find the dealers and verify the dealers are in list
    Given I am on homepage
    When I mouse hover on "buy + sell" tab
    And I click "Find a Dealer" link
    And I click on Page "<pageNo>"
    And I should see the dealer names "<dealersName>" are display on page

    Examples:
      | dealersName             | pageNo |
      | 3 Point Motors Epping   | 1      |
      | 4WD Specialist Group    | 2      |
      | 5 Star Auto             | 3      |
      | A & M Car Sales Pty Ltd | 4      |
      | A1 MOTORS COMPANY       | 5      |
      | ANDREA MOTOR SERVICE    | 6      |


