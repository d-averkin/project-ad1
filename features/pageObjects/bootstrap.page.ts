import { browser, ExpectedConditions, promise, element, by, WebDriver } from "protractor";
import { bootstrapRepository } from "../objectsRepository/bootstrap.obj";

const defaultTimeout = 60000;

export class bootstrapPage {

    readonly bootstrapElements = new bootstrapRepository;

    public async Loaded(): promise.Promise<void> {        
        await browser.wait(ExpectedConditions.visibilityOf(this.bootstrapElements.sideNavElement), defaultTimeout, "Bootstrap tutorial page not loaded");
    }

    public async EnterName(name:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.bootstrapElements.nameInput), defaultTimeout, "Name field not visible");
        await this.bootstrapElements.nameInput.sendKeys(name);
    }

    public async VerifyItemIsVisible(name:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.textToBePresentInElementValue(this.bootstrapElements.nameInput, name), defaultTimeout, "Name is not entered");
    }

    public async CheckCheckbox(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.bootstrapElements.option1Checkbox), defaultTimeout, "Option 1 checkbox not visible");
        await this.bootstrapElements.option1Checkbox.click();
    }

    public async VerifyCheckboxIsChecked(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeSelected(this.bootstrapElements.option1Checkbox), defaultTimeout, "Option 1 checkbox is not checked");
    }

    public async CheckRadio(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.bootstrapElements.option1Radio), defaultTimeout, "Option 1 radio not visible");
        await this.bootstrapElements.option1Radio.click();
    }

    public async VerifyRadioIsChecked(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeSelected(this.bootstrapElements.option1Radio), defaultTimeout, "Option 1 radio is not checked");
    }

    public async SelectValue(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.bootstrapElements.select), defaultTimeout, "Dropdown is not visible");
        await this.bootstrapElements.select.click();
        await this.bootstrapElements.selectOption4.click();
    }

    public async VerifyValueSelected(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.textToBePresentInElementValue(this.bootstrapElements.selectOption4, "4"), defaultTimeout, "Option 4 is not selected");
    }
}