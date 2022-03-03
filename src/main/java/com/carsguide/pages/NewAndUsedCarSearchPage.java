package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class NewAndUsedCarSearchPage extends Utility {

    private static final Logger log = LogManager.getLogger(NewAndUsedCarSearchPage.class.getName());


    public NewAndUsedCarSearchPage() {
        PageFactory.initElements(driver, this);
    }

    //Locators Cars, Model, Location, Price ,Find my next car btn
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement make1;

    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement model1;

    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement location1;

    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement price1;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCarBtn;

    public void selectMake(String make)
    {
        selectByVisibleTextFromDropDown(make1,make);
        log.info("select make : " + make);

    }

    public void selectModel(String model)
    {
        selectByVisibleTextFromDropDown(model1,model);
        log.info("select model : " + model);

    }
    public void selectLocation(String location)
    {
        selectByVisibleTextFromDropDown(location1,location);
        log.info("select location : " + location);

    }
    public void selectPrice(String price)
    {
        selectByVisibleTextFromDropDown(price1,price);
        log.info("select price : " + price);

    }
    public void clickOnFindMyNextCarButton()
    {
        clickOnElement(findMyNextCarBtn);
    }

}