import {browser, ElementFinder} from 'protractor';
import {PerformsTasks, Task} from 'serenity-js/lib/screenplay';
import {Click, Is, Open, UseAngular, Wait} from 'serenity-js/lib/serenity-protractor';
import {Target} from 'serenity-js/src/serenity-protractor/screenplay/ui/target';
import {Menu} from '../../ui/menu/menu';

export const clickMenuIcon = () => Task.where('#actor clicks on menu icon',
    Wait.until(Menu.Hamburger_Icon, Is.clickable()),
    Click.on(Menu.Hamburger_Icon),
);

export const clickManagementSubMenu = () => Task.where('#actor clicks on menu icon',
    Wait.until(Menu.Hamburger_Icon, Is.clickable()),
    Click.on(Menu.Hamburger_Icon),
    Wait.until(Menu.Management_Main_Menu, Is.clickable()),
    Click.on(Menu.Management_Main_Menu),
    Wait.until(Menu.Management_Sub_Menu, Is.clickable()),
    Click.on(Menu.Management_Sub_Menu),
);
