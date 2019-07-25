import {Navigation} from './pages/Navigation';
import {browser} from "protractor";

const chai = require('chai');
chai.use(require('chai-as-promised'));

const expect = chai.expect;

export = function myStepDefinitions() {
    this.setDefaultTimeout(60 * 1000);

    this.Before(async () => {
        await browser.waitForAngularEnabled(false);
    });

    this.Given(/^that User opens the Home page$/, async () => {
        await browser.get(browser.baseUrl);
    });

    this.Then(/^he opens the "([^"]*)" page$/, async (pageName: string) => {
        await Navigation.openPage(pageName);
        const index: number = pageName.indexOf(' ');
        const uri: string = pageName.substr(0, index).toLowerCase();
        expect(await browser.getCurrentUrl()).contain(uri, pageName + " is not opened.");
    });


};
