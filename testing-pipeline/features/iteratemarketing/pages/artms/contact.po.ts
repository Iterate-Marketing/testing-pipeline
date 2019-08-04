import {browser, element, by, By, $, $$, ExpectedConditions, promise, protractor, Key, ElementFinder} from 'protractor';
import {BasePo} from "../base.po";

export class ContactPo extends BasePo {

    private static uName : ElementFinder = element(by.name("footer-professional-form-your-name"));
    private static email : ElementFinder = element(by.name("footer-professional-form-your-email"));
    private static phoneNumber : ElementFinder = element(by.name("footer-professional-form-your-phone"));
    private static sendButton: ElementFinder = element(by.id("footer-professional-form-submission"));
    private static sucessBtn: ElementFinder = element(by.className("popup-success-btn"));

    static async talkToAProfessional(){
        ContactPo.scrollToTheEndOfPage();
        var d = new Date();
        var datestring = d.getDate() + "" + (d.getMonth() + 1) + "" + d.getFullYear() + "" +
            d.getHours() + "" + d.getMinutes();
        let username="Fname" + datestring;
        let email= "test"+datestring+"@gmail.com"
        let phnumber= "8888888888";
        ContactPo.uName.sendKeys(username);
        ContactPo.email.sendKeys(email);
        ContactPo.phoneNumber.sendKeys(phnumber)
        this.sendButton.click();
    }

    static async waitForSuccessMessage(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.className('popup-success-btn'))), 10000);
        return this.sucessBtn.getText();
    }

}