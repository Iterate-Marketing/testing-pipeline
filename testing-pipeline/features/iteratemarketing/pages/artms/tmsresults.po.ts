import {browser, element, by, By, $, $$, ExpectedConditions, promise, protractor, Key, ElementFinder} from 'protractor';
import {BasePo} from "../base.po";

export class TmsresultsPo extends BasePo {
    private static page_title : ElementFinder = element(by.className("page-title"));
    private static q1option1 : ElementFinder = element(by.id("question01-1"));
    private static q2option2 : ElementFinder = element(by.id("question02-2"));
    private static q3option1 : ElementFinder = element(by.id("question03-1"));
    private static q4option1 : ElementFinder = element(by.id("question04-1"));
    private static q5option2 : ElementFinder = element(by.id("question05-2"));
    private static q6option1 : ElementFinder = element(by.id("question06-1"));
    private static q7option3 : ElementFinder = element(by.id("question07-3"));
    private static q8option3 : ElementFinder = element(by.id("question08-3"));
    private static q9option4 : ElementFinder = element(by.id("question09-4"));

    private static lead_name : ElementFinder = element(by.id("leadName"));
    private static lead_email : ElementFinder = element(by.id("leadEmail"));
    private static lead_phone : ElementFinder = element(by.id("leadPhone"));
    private static result_btn : ElementFinder = element(by.className("quizlet-form-button"));


    static async getPageTitle(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.className('number-styling'))), 10000);
        return this.page_title.getText();
    }

    static async filloutTheRadioOptionForm(){
        this.q1option1.click();
        this.q2option2.click();
        this.q3option1.click();
        this.q4option1.click();
        this.q5option2.click();
        this.q6option1.click();
        this.q7option3.click();
        this.q8option3.click();
        this.q9option4.click();
        }

    static async fiilTheGetResultFrom(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.id('leadName'))), 10000);
        this.lead_name.sendKeys("test");
        this.lead_email.sendKeys("test@test.com");
        this.lead_phone.sendKeys("1111111111");
        this.result_btn.click();
    }

    static async clickOnRequestContactButton(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.className('request-contact-button'))), 10000);

    }
}