import { by } from "protractor";
import { Target } from "serenity-js/lib/serenity-protractor";

export const Menu = {
    Hamburger_Icon: Target.the('"menu Icon"').located(by.css('button[data-toggle="offcanvas"]')),
    Home_Main_Menu: Target.the('"home main menu"').located(by.linkText('linkText("Home")')),
    Management_Main_Menu: Target.the('"management main menu"').located
    (by.xpath('//li[@class="container-menu-item"]/a[contains(@class, "main-level-menu-item") and text()="Management"]')),
    Community_Main_Menu: Target.the('"community main menu"').located(
        by.xpath('by.xpath(\'//li[@class="container-menu-item"]/a[contains(@class, "main-level-menu-item") and text()="Community"]')),
    Involve_Main_Menu: Target.the('"involve main menu"').located(
        by.xpath('//li[@class="container-menu-item"]/a[contains(@class, "main-level-menu-item") and text()="Involve"]')),
    Services_Main_Menu: Target.the('"involve main menu"').located(
        by.xpath('//li[@class="container-menu-item"]/a[contains(@class, "main-level-menu-item") and text()="Services"]')),

    // Management Sub menus
    Management_Sub_Menu: Target.the('"management sub-menu"').located(by.css('a[href="/management/"]')),
    Property_Management_Sub_Menu: Target.the('"property management sub-menu"').located(by.css('a[href="/property-management/"]')),
    HOA_Management_Sub_Menu: Target.the('"hoa management sub-menu"').located(by.css('a[href="/hoa-management/"]')),
    Condo_Management_Sub_Menu: Target.the('"condo management sub-menu"').located(by.css('a[href="/condo-association/"]')),
}
