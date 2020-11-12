import { browser, ExpectedConditions, promise, element, by, WebDriver } from "protractor";
import { dropdownRepository } from "../objectsRepository/dropdown.obj";

const defaultTimeout = 60000;

export class dropdownPage {

    readonly dropdownElements = new dropdownRepository;

    public async Loaded(): promise.Promise<void> {        
        await browser.wait(ExpectedConditions.visibilityOf(this.dropdownElements.sideNavElement), defaultTimeout, "Dropdown tutorial page not loaded");
    }

    public async VerifyDropdownAppears(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.dropdownElements.hoverableElement), defaultTimeout, "Hoverable element is not visible");
        await browser.actions().mouseMove(this.dropdownElements.hoverableElement).perform();
        await browser.wait(ExpectedConditions.invisibilityOf(this.dropdownElements.hoverableElementContent), defaultTimeout, "Element content is not shown");
    }
}