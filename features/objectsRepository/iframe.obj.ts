import { by, element } from 'protractor';

export class iframeRepository {
    readonly sideNavElement = element(by.xpath("//div[@id='sidenav']//a[contains(text(),'HTML Iframes') and @class='active']"));
    readonly iframeElement = element(by.xpath("//div[@id='main']//iframe[@title='W3Schools HTML Tutorial']"));    
    readonly iframe_tutorialPageTitle = element(by.xpath("//div[@id='main']//h1[contains(text(),'HTML')]/span[contains(text(),'Tutorial')]"));
    readonly iframe_introductionPageTitle = element(by.xpath("//div[@id='main']//h1[contains(text(),'HTML')]/span[contains(text(),'Introduction')]"));
    readonly iframe_nextButton = element(by.xpath("//div[@id='main']//a[contains(@class,'w3-right')]"));
}