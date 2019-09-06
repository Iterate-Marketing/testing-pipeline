import {BasePo} from "../base.po";
import {browser, by, element, ElementFinder, ExpectedConditions} from "protractor";

export class CommunityPo extends BasePo {
    private static connect_With_Us: ElementFinder = element(by.xpath("//a[contains(text(),'Connect with Us')]"));
    // private static connect_With_Us: ElementFinder = element(by.linkText("Connect with Us"));
    private static heading_title: ElementFinder = element(by.className("banner"));
    private  static email_bnt: ElementFinder = element(by.className("green-button"));
    private static feedback_title: ElementFinder = element(by.xpath("//h1[contains(text(),'Feedback')]"));

    static async clickOnConnectWithUsLink() {
        await this.clickClassButton("green-button","CONNECT WITH US");
        await browser.sleep(1999);
    }

    static async clickOnMeetTheTeamBtn(){
        await this.clickClassButton("green-button","MEET THE TEAM");
        await browser.sleep(1999);
    }

    static async getPageTitle(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.className('banner'))), 10000);
        return this.heading_title.getText();
    }

    static async clickOnViewProfileBtn(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.className('staff-card--view-profile-btn'))), 10000);
        await this.clickClassButton("staff-card--view-profile-btn","VIEW PROFILE");
    }

    static async getProfilePageText(){
        await browser.sleep(1999);
        await browser.wait(ExpectedConditions.visibilityOf(element(by.className('green-button'))), 10000);
        return this.email_bnt.getText();
    }

    static async getFeedBackTitle(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//h1[contains(text(),'Feedback')]"))), 10000);
        return await this.feedback_title.getText();

    }



}