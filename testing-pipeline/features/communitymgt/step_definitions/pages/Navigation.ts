import {browser, element, by, By, $, $$, ExpectedConditions, promise, protractor, Key, ElementFinder} from 'protractor';
import { BasePage } from './/BasePage';
export class Navigation extends BasePage {
    private static Hamburger_Icon: ElementFinder = element(by.css('button[data-toggle="offcanvas"]'));
    // Main menus
    private static  Home_Main_Menu: ElementFinder = element(by.linkText('Home'));
    private static  Management_Main_Menu: ElementFinder = element(
        by.xpath('//li[@class="container-menu-item"]/a[contains(@class, "main-level-menu-item") and text()="Management"]'));
    private static  Community_Main_Menu: ElementFinder = element(
        by.xpath('//li[@class="container-menu-item"]/a[contains(@class, "main-level-menu-item") and text()="Community"]'));
    private static  Involve_Main_Menu: ElementFinder = element(
        by.xpath('//li[@class="container-menu-item"]/a[contains(@class, "main-level-menu-item") and text()="Involve"]'));
    private static  Services_Main_Menu: ElementFinder = element(
        by.xpath('//li[@class="container-menu-item"]/a[contains(@class, "main-level-menu-item") and text()="Services"]'));

    // Management Sub menus
    private static  Management_Sub_Menu: ElementFinder = element(by.css('a[href="/management/"]'));
    private static  Property_Management_Sub_Menu: ElementFinder = element(by.css('a[href="/property-management/"]'));
    private static  HOA_Management_Sub_Menu: ElementFinder = element(by.css('a[href="/hoa-management/"]'));
    private static  Condo_Management_Sub_Menu: ElementFinder = element(by.css('a[href="/condo-association/"]'));

    // Community Sub menus
    private static  Community_Sub_Menu: ElementFinder = element(by.css('a[href="/community/"]'));
    private static  Connect_Sub_Menu: ElementFinder = element(by.css('a[href="/connect/"]'));
    private static  Caliber_Sub_Menu: ElementFinder = element(by.css('a[href="/contact-us/"]'));
    private static  Reputation_Sub_Menu: ElementFinder = element(by.css('a[href="/reputation/"]'));
    private static  CMI_Journal_Sub_Menu: ElementFinder = element(by.css('a[href="/cmi-journal/"]'));

    // Involve Sub menus
    private static  Involve_Sub_Menu: ElementFinder = element(by.css('a[href="/involve/"]'));
    private static  Knowledge_Sub_Menu: ElementFinder = element(by.css('a[href="/knowledge/"]'));
    private static  Service_Request_Form_Sub_Menu: ElementFinder = element(by.css('a[href="/service-request-form/"]'));
    private static  Legal_Sub_Menu: ElementFinder = element(by.css('a[href="/legal/"]'));
    private static  Pay_Sub_Menu: ElementFinder = element(by.css('a[href="/pay/"]'));
    private static  Partner_Sub_Menu: ElementFinder = element(by.css('a[href="/partner/"]'));
    private static  FAQS_Sub_Menu: ElementFinder = element(by.css('a[href="/faqs/"]'));

    // Services Sub menus
    private static  Services_Sub_Menu: ElementFinder = element(by.css('a[href="/services/"]'));
    private static  Property_Services_Sub_Menu: ElementFinder = element(by.css('a[href="/property-services-division/"]'));
    private static  Building_Maintenance_Sub_Menu: ElementFinder = element(by.css('a[href="/building-maintenance-coordinator/"]'));

    static async openPage(pageName: string) {
        await browser.wait(ExpectedConditions.visibilityOf(this.Hamburger_Icon));
        await this.Hamburger_Icon.click();

        switch (pageName) {
            case "MANAGEMENT":
                await this.clickMainMenuAndSubMenuItem(this.Management_Main_Menu, this.Management_Sub_Menu);
                break;

            case "PROPERTY MANAGEMENT":
                await this.clickMainMenuAndSubMenuItem(this.Management_Main_Menu, this.Property_Management_Sub_Menu);
                break;

            case "HOA MANAGEMENT":
                await this.clickMainMenuAndSubMenuItem(this.Management_Main_Menu, this.HOA_Management_Sub_Menu);
                break;

            case "CONDO MANAGEMENT":
                await this.clickMainMenuAndSubMenuItem(this.Management_Main_Menu, this.Condo_Management_Sub_Menu);
                break;

            case "COMMUNITY":
                await this.clickMainMenuAndSubMenuItem(this.Community_Main_Menu, this.Community_Sub_Menu);
                break;

            case "CONNECT":
                await this.clickMainMenuAndSubMenuItem(this.Community_Main_Menu, this.Connect_Sub_Menu);
                break;

            case "CALIBER":
                await this.clickMainMenuAndSubMenuItem(this.Community_Main_Menu, this.Caliber_Sub_Menu);
                break;

            case "REPUTATION":
                await this.clickMainMenuAndSubMenuItem(this.Community_Main_Menu, this.Reputation_Sub_Menu);
                break;

            case "CMI JOURNAL":
                await this.clickMainMenuAndSubMenuItem(this.Community_Main_Menu, this.CMI_Journal_Sub_Menu);
                break;
        }
    }

    private static async clickMainMenuAndSubMenuItem(mainMenu:ElementFinder, subMenu:ElementFinder) {
        await browser.wait(ExpectedConditions.elementToBeClickable(mainMenu));
        await mainMenu.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(subMenu));
        await subMenu.click();
        await browser.wait(ExpectedConditions.visibilityOf(element(by.id('page-content-wrapper'))), 10000);
    }
}
