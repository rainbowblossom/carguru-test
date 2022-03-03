package com.carsguide.cucumber.steps;

import com.carsguide.pages.CarDealersPage;
import com.carsguide.pages.HomePage;
import com.carsguide.pages.NewAndUsedCarSearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuyCarsStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        System.out.println("I am on homepage");
    }

    @When("^I mouse hover on \"([^\"]*)\" tab$")
    public void iMouseHoverOnTab(String  tab) {
        new HomePage().clickOnMenuTab(tab);
    }

    @And("^I click \"([^\"]*)\" link$")
    public void iClickLink(String search)  {
        new HomePage().clickOnSearchCars(search);

    }

    @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String arg0)  {
        System.out.println("I am on new and used car search page");
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
        new NewAndUsedCarSearchPage().selectMake(make);

    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {
        new NewAndUsedCarSearchPage().selectModel(model);

    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {
        new NewAndUsedCarSearchPage().selectLocation(location);

    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {
        new NewAndUsedCarSearchPage().selectPrice(price);

    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarSearchPage().clickOnFindMyNextCarButton();
    }





    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String arg0)  {

    }

    @And("^I click on Find My Next Car button$")
    public void iClickOnFindMyNextCarButton() {
    }

    @And("^I click on Page \"([^\"]*)\"$")
    public void iClickOnPage(String i)  {
        new CarDealersPage().clickOnPage(i);
    }

    @And("^I should see the dealer names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNamesAreDisplayOnPage(String dealerName) throws InterruptedException {
        new CarDealersPage().findDealer(dealerName);
    }
}
