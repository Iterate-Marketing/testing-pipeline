import {BasePo} from "../base.po";
import {browser, by, element, ElementFinder} from "protractor";

export class CommunityPo extends BasePo {
    // private static connect_With_Us: ElementFinder = element(by.xpath("//a[contains(text(),'Connect with Us')]"));
    private static connect_With_Us: ElementFinder = element(by.css("a[class=\"green-button\"]"));

    static async clickOnconnectWithUsLink() {
        await browser.executeScript("arguments[0].scrollIntoView();", CommunityPo.connect_With_Us.getWebElement());
        await CommunityPo.connect_With_Us.click();
    }

}