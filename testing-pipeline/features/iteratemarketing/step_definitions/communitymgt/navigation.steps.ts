import {browser} from "protractor";
import {NavigationPo} from "../../pages/communitymgt/navigation.po";
import {HomePo} from "../../pages/communitymgt/home.po";

const chai = require('chai');
chai.use(require('chai-as-promised'));

const expect = chai.expect;

export = function NavigationPoDefinitions() {
    this.setDefaultTimeout(60 * 1000);

    this.Before(async () => {
        await browser.waitForAngularEnabled(false);
    });

    this.Given(/^that User opens the Home page$/, async () => {
        await browser.get(browser.baseUrl);
    });

    this.Then(/^he opens the "([^"]*)" page$/, async (pageName: string) => {
        await NavigationPo.openPage(pageName);
        const index: number = pageName.indexOf(' ');
        const uri: string = pageName.substr(0, index).toLowerCase();
        expect(await browser.getCurrentUrl()).contain(uri, pageName + " is not opened.");
    });

    this.When(/^he opens the CODE OF ETHICS page$/, async () => {
        await HomePo.clickOnCodeOfEthicsLink();
        expect(await browser.getCurrentUrl()).contain('code-of-ethics', "'CODE OF ETHICS' page is not opened.");
    });
}
