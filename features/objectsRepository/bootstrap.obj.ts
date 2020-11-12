import { by, element } from 'protractor';

export class bootstrapRepository {
    readonly sideNavElement = element(by.xpath("//div[@id='sidenav']//a[contains(text(),'BS Inputs') and @class='active']"));
    readonly nameInput = element(by.xpath("//div[@id='main']//input[@id='usr']"));
    readonly option1Checkbox = element(by.xpath("//div[@id='main']//label[.='Option 1']/input[@type='checkbox']"));
    readonly option1Radio = element(by.xpath("//div[@id='main']//label[.='Option 1']/input[@type='radio']"));
    readonly select = element(by.xpath("//div[@id='main']//select[@id='sel1']"));
    readonly selectOption4 = element(by.xpath("//div[@id='main']//select[@id='sel1']/option[.='4']"));
}