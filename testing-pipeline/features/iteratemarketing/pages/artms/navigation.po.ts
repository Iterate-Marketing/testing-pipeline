import {browser, element, by, By, $, $$, ExpectedConditions, promise, protractor, Key, ElementFinder} from 'protractor';
import {BasePo} from "../base.po";

export class NavigationPo extends BasePo {
    private static treat_Depression: ElementFinder = element(by.xpath("//a[text()='Treat Depression']"));
    private static without_Medication: ElementFinder = element(by.xpath("//a[text()='Without Medication']"));
    private static tms_result_main_menu: ElementFinder = element(by.css('a[title="TMS Results"]'));
    private static tms_result: ElementFinder = element.all(by.css('a[title="TMS Results"]')).last();
    private static tms_Defined: ElementFinder = element(by.xpath("//a[text()='TMS Defined']"));
    private static about_us_main_menu: ElementFinder = element(by.css('a[title="About Us"]'));
    private static about_us: ElementFinder = element.all(by.css('a[title="About Us"]')).last();
    private static tms_insights: ElementFinder = element(by.css('a[title="TMS Insights"]'));
    private static for_provider_vtn: ElementFinder = element(by.xpath("//div/a[text()='For Providers']"));
    private static for_provider_page_heading: ElementFinder = element(by.xpath("//h1[text()='For Providers']"));
    private static login_btn: ElementFinder = element(by.xpath("//div//a[text()='Patient Login']"));
    private static fb_icon: ElementFinder = element(by.className("fa-facebook"));
    private static insta_icon: ElementFinder = element(by.className("fa-instagram"));
    private static linkedin_icon: ElementFinder = element(by.className("fa-linkedin"));
    private static about_footer_link: ElementFinder = element(by.xpath("//a[text()='About']"));
    private static vedio_hub_link: ElementFinder = element(by.xpath("(//a[text()='Helpful Videos'])[2]"));
    private static for_providers_link: ElementFinder = element(by.xpath("(//a[text()='For Providers'])[2]"));

    static async clickOnMenuAndVerifyThatPageHasOpen(pageName: string) {
        if (pageName == 'Treat Depression') {
            await NavigationPo.treat_Depression.click();
            await browser.wait(ExpectedConditions.visibilityOf(element(by.className('talk-to-us'))), 10000);
        }
        else if (pageName == 'Without Medication') {
            await NavigationPo.without_Medication.click();
            await browser.wait(ExpectedConditions.visibilityOf(element(by.className('talk-to-us'))), 10000);
        }
        else if (pageName == 'TMS Results') {
            await NavigationPo.hoverElement(NavigationPo.tms_result_main_menu);
            await NavigationPo.tms_result.click();
            await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath('//h1[text()=\'TMS Results\']'))), 10000);
        }
        else if (pageName == 'TMS Defined') {
            await NavigationPo.hoverElement(NavigationPo.tms_result_main_menu);
            await NavigationPo.tms_Defined.click();
            await browser.wait(ExpectedConditions.visibilityOf(element(by.id('front-page-form'))), 10000);
        }
        else if (pageName == 'About Us') {
            await NavigationPo.hoverElement(NavigationPo.about_us_main_menu);
            await NavigationPo.about_us.click();
            await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//h1[text()='TMS Insights']"))), 10000);
        }

    }

    static async clickOnForProviderButton() {
        await NavigationPo.for_provider_vtn.click();
        await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//h1[text()='For Providers']"))));
    }

    static async getForProviderPageHeading() {
        const heading = await NavigationPo.for_provider_page_heading.getText();
        console.log('page Heding is: ' + heading);
        return heading;
    }

    static async clickOnLoginBtn() {
        await NavigationPo.login_btn.click();
    }

    static async clickOnFaceBookIcon() {
        await browser.executeScript("arguments[0].scrollIntoView();", NavigationPo.fb_icon.getWebElement());
        await NavigationPo.fb_icon.click();
    }

    static async clickOnInstagramIcon() {
        await browser.executeScript("arguments[0].scrollIntoView();", NavigationPo.insta_icon.getWebElement());
        await NavigationPo.insta_icon.click();
    }

    static async clickOnLinkedInIcon() {
        await browser.executeScript("arguments[0].scrollIntoView();", NavigationPo.linkedin_icon.getWebElement());
        await NavigationPo.linkedin_icon.click();
    }

    static async clickOnAboutLink() {
        await browser.executeScript("arguments[0].scrollIntoView();", NavigationPo.about_footer_link.getWebElement());
        await NavigationPo.about_footer_link.click();
    }

    static async clickOnHelpfulVideosLink(){
        this.scrollToTheEndOfPage();
        // await browser.executeScript("arguments[0].scrollIntoView();", NavigationPo.about_footer_link.getWebElement());
        await NavigationPo.vedio_hub_link.click();

    }

    static async clickOnFAQLink(){
        this.scrollToTheEndOfPage();
        this.clickOnByXpathText("FAQ");

    }

    static async clickOnTMSInsightsLink(){
        this.scrollToTheEndOfPage();
        this.clickOnByXpathText("TMS Insights ");
    }

    static async clickOnPatientPortalLoginInstructionsLink(){
        this.scrollToTheEndOfPage();
        this.clickOnByXpathText("Patient Portal Login Instructions");

    }

    static async clickOnFirstTimePatientDocuments(){
        this.scrollToTheEndOfPage();
        this.clickOnByXpathText("First time patient documents");
    }

    static async clickOnForProvidersLink(){
        this.scrollToTheEndOfPage();
        await NavigationPo.for_providers_link.click();

    }

}