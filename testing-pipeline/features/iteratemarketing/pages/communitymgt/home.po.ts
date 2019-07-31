import {BasePo} from "../base.po";
import {browser, by, element, ElementFinder} from "protractor";
import {NavigationPo} from "../artms/navigation.po";

export class HomePo extends BasePo{
    private static code_of_ethics: ElementFinder = element(by.xpath("//a[contains(text(),'Code of Ethics')]"));

    static async clickOnCodeOfEthicsLink() {
        await browser.executeScript("arguments[0].scrollIntoView();", HomePo.code_of_ethics.getWebElement());
        await HomePo.code_of_ethics.click();
    }

}