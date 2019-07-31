import {browser} from "protractor";
import {NavigationPo} from "../../pages/artms/navigation.po";

const chai = require('chai');
chai.use(require('chai-as-promised'));

const expect = chai.expect;

export = function NavigationPoDefinitions() {
    this.setDefaultTimeout(60 * 1000);

    this.Given(/^that User opens the TMS Home page$/, async () => {
        await browser.get("http://artms.iteratemarketing.com");
    });

    this.Then(/^he open the "([^"]*)" page$/, async (pageName: string) => {
        await NavigationPo.clickOnMenuAndVerifyThatPageHasOpen(pageName);
    });

    this.Then(/^user clicks on For Providers button$/, async () => {
        await NavigationPo.clickOnForProviderButton();
    });

    this.Then(/^verify that user is on For Providers page$/, async () => {
        await expect(NavigationPo.getForProviderPageHeading(), "For Providers");
    });

    this.Then(/^user click on user is on Patient login button$/, async () => {
        await NavigationPo.clickOnLoginBtn();
    });

    this.Then(/^Verify that user is on Patient page$/, async () => {
        browser.getAllWindowHandles().then(function (handles) {
            const newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {
                // Expect the newly opened tab URL to equal the href of the invitation
                expect(browser.driver.getCurrentUrl()).to.eventually.contain("https://www.valantmed.com/Portal/activerecoverytms");
            });
        });
    });
    this.Then(/^click on facebook icon$/, async () => {
        await NavigationPo.clickOnFaceBookIcon();
    });

    this.Then(/^verify that user is on facebook page$/, async () => {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("https://www.facebook.com/activerecoverytms/");
    });

    this.Then(/^click on Instagram link$/, async () => {
        await NavigationPo.clickOnInstagramIcon();
    });
    this.Then(/^Verify that use is on instagram page$/, async () => {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("https://www.instagram.com/activerecoverytms/");
    });
    this.Then(/^click on LinkedIn link$/, async () => {
        await NavigationPo.clickOnLinkedInIcon();
    });
    this.Then(/^Verify that use is on LinkedIn page$/, async () => {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("https://www.linkedin.com/");
    });
    this.Then(/^click on About us link in footer section$/, async () => {
        await NavigationPo.clickOnAboutLink();
    });

    this.Then(/^Verify that user is on about us page$/, async () => {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("about");
    });

}
