import {BasePo} from "../base.po";
import {browser, by, element, ElementFinder} from "protractor";
import {HomePo} from "./home.po";

export class ManagementPo extends BasePo{
    private static slider_bar: ElementFinder = element(by.xpath("//*[@id=\"page-content-wrapper\"]/div/header/div[1]/button"));
    private static management_link: ElementFinder = element(by.xpath("//a[contains(text(),'Management')]"));
    private static management_button: ElementFinder = element(by.xpath("//*[@id=\"sidebar-wrapper\"]/ul/li[2]/div/ul/li[1]/a"));
    private static view_Janitor_and_Porter_Services: ElementFinder = element(by.xpath("//a[contains(text(),'View Janitor and Porter Services')]"));
    private static view_Concierge_Services: ElementFinder = element(by.xpath("//a[contains(text(),'View Concierge Services')]"));
    private static view_General_Services: ElementFinder = element(by.xpath("//a[contains(text(),'View General Services')]"));
    private static view_Property_Management: ElementFinder = element(by.xpath("//a[contains(text(),'View Property Management')]"));
    private static view_Property_Services: ElementFinder = element(by.xpath("//a[contains(text(),'View Property Services')]"));
    private static read_Our_Feedback: ElementFinder = element(by.xpath("//a[contains(text(),'Read our Feedback')]"));
    private static view_Building_Maintenance: ElementFinder = element(by.xpath("//a[contains(text(),'View Building Maintenance')]"));

    static async clickOnManagementLinkFromSliderBar() {
        await browser.executeScript("arguments[0].scrollIntoView();", ManagementPo.slider_bar.getWebElement());
        await ManagementPo.slider_bar.click();
        await browser.executeScript("arguments[0].scrollIntoView();", ManagementPo.management_link.getWebElement());
        await ManagementPo.management_link.click();
    }

    static async clickOnManagementButton() {
        await browser.executeScript("arguments[0].scrollIntoView();", ManagementPo.management_button.getWebElement());
        await ManagementPo.management_button.click();
    }

    static async clickOnViewJanitorAndPorterServicesLink() {
        this.clickClassButton("green-button","VIEW JANITOR AND PORTER SERVICES");
        await browser.sleep(1999);
    }

    static async clickOnViewConciergeServicesLink() {
        this.clickClassButton("green-button","VIEW CONCIERGE SERVICES");
        await browser.sleep(1999);
    }

    static async clickOnViewGeneralServicesLink() {
        // await browser.executeScript("arguments[0].scrollIntoView();", ManagementPo.view_General_Services.getWebElement());
        this.clickClassButton("green-button","VIEW GENERAL SERVICES");
        await browser.sleep(2999);
    }

    static async clickOnViewPropertyManagementLink() {
        this.clickClassButton("green-button","VIEW PROPERTY MANAGEMENT");
        await browser.sleep(2999);
    }

    static async clickOnViewPropertyServicesLink() {
        this.clickClassButton("green-button","VIEW PROPERTY SERVICES");
        await browser.sleep(2999);
    }

    static async clickOnReadOurFeedbackLink(){
        await this.clickClassButton("green-button","READ OUR FEEDBACK");
        await browser.sleep(2999);
    }

    static async clickOnViewBuildingMaintenanceLink(){
        await this.clickClassButton("green-button","VIEW BUILDING MAINTENANCE");
        await browser.sleep(2999);
    }




}
