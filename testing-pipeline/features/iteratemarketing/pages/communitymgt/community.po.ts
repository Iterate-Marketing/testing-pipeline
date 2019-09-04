import {BasePo} from "../base.po";
import {browser, by, element, ElementFinder, ExpectedConditions} from "protractor";

export class CommunityPo extends BasePo {
    // private static connect_With_Us: ElementFinder = element(by.xpath("//a[contains(text(),'Connect with Us')]"));
    private static connect_With_Us: ElementFinder = element(by.linkText("Connect with Us"));

    static async clickOnConnectWithUsLink() {
        // await browser.wait(ExpectedConditions.elementToBeClickable(this.connect_With_Us), 10000);
        await browser.executeScript("arguments[0].scrollIntoView();", this.connect_With_Us.getWebElement());
        await this.connect_With_Us.click();
    }

}