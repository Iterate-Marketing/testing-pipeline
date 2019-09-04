import {browser} from "protractor";
import {NavigationPo} from "../../pages/artms/navigation.po";
import {ContactPo} from "../../pages/artms/contact.po";
import {TmsresultsPo} from "../../pages/artms/tmsresults.po";

const chai = require('chai');
chai.use(require('chai-as-promised'));

const expect = chai.expect;

export = function NavigationPoDefinitions() {
    this.setDefaultTimeout(60 * 1000);

    this.Given(/^that User opens the TMS Home page$/, async () => {
        await browser.get(browser.params.artms);
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

    this.Then(/^click on Helpful Video link in footer section$/, async ()=> {
        await NavigationPo.clickOnHelpfulVideosLink();
    });

    this.Then(/^verify that user is on video hub page$/, async ()=> {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("video-hub");
    });

    this.Then(/^click on FAQ link in footer section$/, async ()=> {
        await NavigationPo.clickOnFAQLink();
    });
    this.Then(/^verify that user is on FAQ page$/, async ()=> {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("faq");
    });

    this.Then(/^click on TMS Insights link in footer section$/, async ()=> {
        await NavigationPo.clickOnTMSInsightsLink();
    });

    this.Then(/^verify that user is on TMS Insights page$/, async ()=> {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("tms-insights");
    });

    this.Then(/^click on Patient Portal Login Instructions link$/, async ()=> {
        await NavigationPo.clickOnPatientPortalLoginInstructionsLink();
    });

    this.Then(/^verify that user is on Patient Portal Login Instructions page$/, async ()=> {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("atient-portal-login-instructions");
    });

    this.Then(/^click on First Time patient Documents link in footer section$/, async ()=> {
        await NavigationPo.clickOnFirstTimePatientDocuments();
    });

    this.Then(/^verify that user is on First Time patient Document page$/, async ()=> {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("first-time-patient-documents");
    });

    this.Then(/^click on For Providers link in footer section$/, async()=> {
        await NavigationPo.clickOnForProvidersLink();
    });

    this.Then(/^verify that user is on ForProviders page$/, async()=> {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("patient-providers");
    });

    this.Then(/^user fill the contact form and click on send message button$/, async ()=> {
        ContactPo.talkToAProfessional();
    });

    this.Then(/^Verify that message has been sent$/, async ()=> {
       expect(ContactPo.waitForSuccessMessage()).to.eventually.equal("Success!");
    });

    this.Then(/^click on portland link in footer section$/, async ()=> {
       NavigationPo.clickOnPortlandLink();
    });

    this.Then(/^Verify that user is on portland page$/, async()=> {
        expect(browser.driver.getCurrentUrl()).to.eventually.contain("portland-tms-clinic");
    });

    this.Then(/^scroll down the page at bottom$/, async()=> {
        ContactPo.scrollDownPageToBottom();
    });
    this.Then(/^user fill the Talk to a professional form with following details$/, async (table) => {
        ContactPo.talkToAProfessional();
    });
    this.Then(/^Verify that user is getting trigger popup message$/, async()=> {
        expect(ContactPo.waitForSuccessMessage()).to.eventually.equal("Success!");
    });
    this.Given(/^user fill the Lasting Relief From Severe Depression form with Following details$/, async (table) =>{
        ContactPo.fillTheDepressionForm();
    });
    this.Then(/^verify Telephone text should equal "([^"]*)"$/, async(phoneNumber:string)=> {
        expect(NavigationPo.getTelNumber()).to.eventually.equal(phoneNumber);
    });
    this.Then(/^user navigate to "([^"]*)" URL$/, async (url:string)=> {
        ContactPo.navigateToGivenURL(url);
    });
    this.Then(/^Verify that INTERACTIVE QUESTIONNAIRE is displayed$/, async()=> {
        expect(TmsresultsPo.getPageTitle()).to.eventually.equal("PHQ-9 INTERACTIVE QUESTIONNAIRE");
    });
    this.Then(/^user navigate to phqtestonline test url$/, async()=> {
        await browser.get("https://activerecoverytms.com/phq-9-test-online/?utm_campaign=test&utm_content=test");
    });
    this.Then(/^user fill out the radio input in form$/, async()=> {
        TmsresultsPo.filloutTheRadioOptionForm();
    });
    this.Then(/^user fill the get result form and click on get result button$/, async()=> {
        TmsresultsPo.fiilTheGetResultFrom();
    });
    this.Then(/^user click on request contact button button$/, async()=> {
        TmsresultsPo.fiilTheGetResultFrom();
    });


}
