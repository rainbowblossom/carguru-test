$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#  @Sanity @Regression"
    }
  ],
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Mitsubishi",
        "Nimbus",
        "NSW-South Coast",
        "$10000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6437253700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mitsubishi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Nimbus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW-South Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$10000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mitsubishi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarsStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 99976000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyCarsStepdefs.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1703631200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "BuyCarsStepdefs.iClickLink(String)"
});
formatter.result({
  "duration": 164641900,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 15
    }
  ],
  "location": "BuyCarsStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nimbus",
      "offset": 16
    }
  ],
  "location": "BuyCarsStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 34500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW-South Coast",
      "offset": 19
    }
  ],
  "location": "BuyCarsStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 37400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10000",
      "offset": 16
    }
  ],
  "location": "BuyCarsStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 23
    }
  ],
  "location": "BuyCarsStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 67700,
  "status": "passed"
});
formatter.after({
  "duration": 698139900,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4377951300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \u003cdealersName\u003e are display on page",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 9
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 10
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 11
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 12
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 13
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 14
    },
    {
      "cells": [
        "ANDREA MOTOR SERVICE"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCarsStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 56700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 707110100,
  "status": "passed"
});
});