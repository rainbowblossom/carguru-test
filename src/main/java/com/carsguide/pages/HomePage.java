package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

/* URL: https://www.carsguide.com.au/
Create all folders, pages and reports.

Feature Files

buy.feature

Feature: Search functionality
Scenario Outline: Search the buy car with model
Given I am on homepage
When I mouse hover on “buy+sell” tab
And I click ‘Search Cars’ link
Then I navigate to ‘new and used car search’ page
And I select make “<make>”
And I select model “<model>”
And I select location “<location>”
And I select price “<price>”
And I click on Find My Next Car tab
Then I should see the make “<make>” in results
Example:
|make|model|location|price|
Add 6 data sets here.

Scenario Outline: Search the used car with model
Given I am on homepage
When I mouse hover on “buy+sell” tab
And I click ‘Used’ link
Then I navigate to ‘Used Cars For Sale’ page
And I select make “<make>”
And I select model “<model>”
And I select location “<location>”
And I select price “<price>”
And I click on Find My Next Car tab
Then I should see the make “<make>” in results
Example:
|make|model|location|price|
Add 6 data sets here.

finddealers.feature

Feature: Find the dealers and verify

Scenario: Find the dealers and verify the dealers are in list
Given I am on homepage
When I mouse hover on “buy+sell” tab
And I click ‘Find a Dealer’
Then I navigate to ‘car-dealers’ page
And I should see the dealer names <dealersName> are display on page
| dealersName |
| 3 Point Motors Epping |
*/
 
public class HomePage extends Utility {


    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    //Locators Buy+Sell and Search cars
    @CacheLookup
    @FindBy(xpath = "//ul[@class='uhf-menu']//li//a[@class='uhf-top']")
    List<WebElement> buyAndSell ;
//    @FindBy(linkText = "buy + sell")
//    WebElement ;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='uhf-menu']//li[1]//div[@class='uhf-child-menu']//li//a")
    List<WebElement> leftMenu;

//
    //    @CacheLookup
//    @FindBy(xpath = "//a[text()='buy + sell']")
//    WebElement leftMenu;
//    public void clickOnBuyAndSell() {
//        mouseHoverToElement(buyAndSell);
   // }
//    @CacheLookup
//    @FindBy(xpath = "//div[@class='uhf-child-menu']//ul")
//    List<WebElement> subMenu;

    public void clickOnMenuTab(String tab) {
        for (WebElement menu : buyAndSell) {
            if (menu.getText().equalsIgnoreCase(tab)) {
               mouseHoverToElement(menu);
                break;
            }
        }
    }
//public void iMouseHoverOnBuySellTab() {
//    mouseHoverToElementAndClick(leftMenu);
//    log.info("mouse hover on buy and sell : " + leftMenu.toString());
//}

    public void clickOnSearchCars(String insideTab) {
        for (WebElement insidemenu : leftMenu) {
            if (insidemenu.getText().equalsIgnoreCase(insideTab)) {
                clickOnElement(insidemenu);
                break;
            }
        }
    }
}