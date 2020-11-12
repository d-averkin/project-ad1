import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { iframePage } from "../pageObjects/iframe.page";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let iframe = new iframePage;

    //Unique identifier    
    let uniqueIndentifier: string;

    //Swagger API Caller

    //Chai-as-Promised setup
    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    //Step Definitions

    //Given expression, can only be used with Given in .feature file
    this.Given(/^I am on Iframe tutorial page$/, async () => {
        await browser.navigate().to("https://www.w3schools.com/html/html_iframe.asp");
        await iframe.Loaded();
    });

    this.Then(/^I click Next button on Tutorial page wintin iframe$/, async () => {        
        await iframe.ClickNextButton();
    });

    //Can only be used with When, Then, And expressions in .feature file
    this.Then(/^I see Introduction page within iframe$/, async () => {
        await iframe.VerifyItemIsVisible();
    });
}