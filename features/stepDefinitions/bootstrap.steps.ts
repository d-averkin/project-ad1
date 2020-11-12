import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { bootstrapPage } from "../pageObjects/bootstrap.page";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let bootstrap = new bootstrapPage;

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
    this.Given(/^I am on Bootstrap tutorial page$/, async () => {
        await browser.navigate().to("https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp");
        await bootstrap.Loaded();
    });

    this.Then(/^I enter "(.*?)" to Name field$/, async (value) => {        
        await bootstrap.EnterName(value);
    });

    //Can only be used with When, Then, And expressions in .feature file
    this.Then(/^I see "(.*?)" within Name field$/, async (value) => {
        await bootstrap.VerifyItemIsVisible(value);
    });

    this.Then(/^I check the Option 1 checkbox$/, async () => {
        await bootstrap.CheckCheckbox();
    });

    this.Then(/^I see the Option 1 checkbox is checked$/, async () => {
        await bootstrap.VerifyCheckboxIsChecked();
    });

    this.Then(/^I check the Option 1 radio$/, async () => {
        await bootstrap.CheckRadio();
    });

    this.Then(/^I see the Option 1 radio is checked$/, async () => {
        await bootstrap.VerifyRadioIsChecked();
    });

    this.Then(/^I select Option 4 in the dropdown list$/, async () => {
        await bootstrap.SelectValue();
    });

    this.Then(/^I see the Option 4 is selected$/, async () => {
        await bootstrap.VerifyValueSelected();
    });    
}