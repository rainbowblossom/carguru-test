Feature: Search Functionality

  @Sanity @Regression
  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on "buy + sell" tab
    And I click "Search Cars" link
    Then I navigate to "New & Used Car Search - carsguide" page

    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab

    Then I should see the make "<make>" in results
    Examples:
      | make          | model   | location     | price   |
      | Mitsubishi    | Nimbus  | Any Location | $10,000 |
      | Audi          | A4      | Any Location | $7,500  |
      | Hyundai       | I45     | Any Location | $10,000 |
      | Mazda         | 6B      | ACT - All    | $10,000 |
      | Mercedes-Benz | A-Class | NSW - Sydney | $7,500  |
      | Kia           | Niro    | ACT - All    | $7,500  |

  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on "buy + sell" tab
    And I click "Used" link
    Then I navigate to "Used Cars For Sale" page

    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car button
    Then I should see the make "<make>" in results
    Examples:
      | make | model | location | price |
      | Mitsubishi    | Nimbus  | Any Location | $3,000 |
      | Audi          | A4      | Any Location | $5,500  |
      | Hyundai       | I45     | Any Location | $3,000 |
      | Mazda         | 6B      | ACT - All    | $5,000 |
      | Mercedes-Benz | A-Class | NSW - Sydney | $7,500  |
      | Kia           | Niro    | ACT - All    | $7,500  |