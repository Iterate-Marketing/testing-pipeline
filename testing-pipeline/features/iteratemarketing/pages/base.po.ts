import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
export class BasePo {
    static async clickClassButton(className: string, ans: string) {
        ans = ans.trim().toLowerCase();
        await console.log("ANSWER : " + ans);
        let len = 0;
        await element.all(by.className(className)).count().then(function (size) {
            len = size;
        });
        console.log("Outer  Size : " + len);
        let index;
        for (index = 0; index < len; index++) {
            let str = await element.all(by.className(className)).get(index).getText();
            str = str.trim().toLowerCase();
            console.log("Index : " + index + "  ans : " + ans);
            console.log("Str : " + str);
            if (str === ans) {
                console.log("Clicked " + ans + " str is: " + str);
                // await element.all(by.className(className)).get(index).click();
                await browser.executeScript("document.getElementsByClassName('" + className + "')[" + index + "].click()");
                return;
            }
        }
        if (index == len) {
            throw "error: Not found";
        }
    }

    static async hoverElement(element: ElementFinder) {
        browser.actions().mouseMove(element).perform();
    }

    async waitForElementToClickable(element, message) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), 50000, message);
    }
    async waitForElementToVisible (element, message) {
        await browser.wait(ExpectedConditions.visibilityOf(element), 50000, message);
    }
    static async scrollToTheEndOfPage () {
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
    }

    static async clickOnByXpathText(xPath){
       let xpath: ElementFinder = element(by.xpath("//a[text()='"+xPath+"']"));
        await browser.wait(ExpectedConditions.elementToBeClickable(xpath), 50000);
        xpath.click();

    }
}
