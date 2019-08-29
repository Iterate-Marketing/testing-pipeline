import {browser, element, by, By, $, $$, ExpectedConditions, promise, protractor, Key, ElementFinder} from 'protractor';
import {BasePo} from "../base.po";

export class ContactPo extends BasePo {

    private static uName : ElementFinder = element(by.name("footer-professional-form-your-name"));
    private static email : ElementFinder = element(by.name("footer-professional-form-your-email"));
    private static phoneNumber : ElementFinder = element(by.name("footer-professional-form-your-phone"));
    private static sendButton: ElementFinder = element(by.id("footer-professional-form-submission"));
    private static sucessBtn: ElementFinder = element(by.className("popup-success-btn"));

    private static frontPageYourName : ElementFinder = element(by.name("front-page-form-your-name"));
    private static frontPageYourEmail : ElementFinder = element(by.name("front-page-form-your-email"));
    private static frontPageYourPhone : ElementFinder = element(by.name("front-page-form-your-phone"));
    private static frontPageSubmitButton : ElementFinder = element(by.id("front-page-form-submission"));

    static async talkToAProfessional(){
        ContactPo.scrollToTheEndOfPage();
        var d = new Date();
        var datestring = d.getDate() + "" + (d.getMonth() + 1) + "" + d.getFullYear() + "" +
            d.getHours() + "" + d.getMinutes();
        let username="Fname" + datestring;
        let email= "test"+datestring+"@gmail.com"
        let phnumber= "1111111111";
        ContactPo.uName.sendKeys("TEST");
        ContactPo.email.sendKeys("test@test.com");
        ContactPo.phoneNumber.sendKeys(phnumber)
        this.sendButton.click();
    }

    static async waitForSuccessMessage(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.className('popup-success-btn'))), 10000);
        return this.sucessBtn.getText();
    }

    static async scrollDownPageToBottom(){
        ContactPo.scrollToTheEndOfPage();
    }

    static async fillTheDepressionForm(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.name('front-page-form-your-name'))), 10000);
        this.frontPageYourName.sendKeys("TEST");
        this.frontPageYourEmail.sendKeys("test@test.com");
        this.frontPageYourPhone.sendKeys("1111111111");
        this.frontPageSubmitButton.click();
    }

    static async navigateToGivenURL(url:string){
        let currentURL=await browser.getCurrentUrl();
        let newURL=currentURL+"/"+url+"/";
        await browser.get(newURL);
    }


}