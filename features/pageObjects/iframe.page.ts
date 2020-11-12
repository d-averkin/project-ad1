import { browser, ExpectedConditions, promise, element, by, WebDriver } from "protractor";
import { iframeRepository } from "../objectsRepository/iframe.obj";

const defaultTimeout = 60000;

export class iframePage {

    readonly iframeElements = new iframeRepository;

    public async Loaded(): promise.Promise<void> {        
        await browser.wait(ExpectedConditions.visibilityOf(this.iframeElements.sideNavElement), defaultTimeout, "Iframe tutorial page not loaded");
    }

    public async ClickNextButton(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.iframeElements.iframeElement), defaultTimeout, "Iframe not loaded");
        await browser.switchTo().frame(this.iframeElements.iframeElement.getWebElement());
        await this.iframeElements.iframe_nextButton.click();
    }

    public async VerifyItemIsVisible(): promise.Promise<void> {        
        await browser.wait(ExpectedConditions.visibilityOf(this.iframeElements.iframe_introductionPageTitle), defaultTimeout, "Introduction page title within iframe is not visible");   
    }
}