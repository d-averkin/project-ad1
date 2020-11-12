import { by, element } from 'protractor';

export class dropdownRepository {
    readonly sideNavElement = element(by.xpath("//div[@id='sidenav']//a[contains(text(),'CSS Dropdowns') and @class='active']"));
    readonly hoverableElement = element(by.xpath("//div[@id='main']//span[contains(text(),'Dropdown Text')]"));
    readonly hoverableElementContent = element(by.xpath("//div[@id='main']//div[@class='dropdown-content']/p[.='Hello World!']"));
}