import {browser} from "protractor";
import {NavigationPo} from "../../pages/communitymgt/navigation.po";
import {HomePo} from "../../pages/communitymgt/home.po";
import {ManagementPo} from "../../pages/communitymgt/management.po";
import {CommunityPo} from "../../pages/communitymgt/community.po";

const chai = require('chai');
chai.use(require('chai-as-promised'));

const expect = chai.expect;

export = function NavigationPoDefinitions() {
    this.setDefaultTimeout(60 * 1000);

    this.Before(async () => {
        await browser.waitForAngularEnabled(false);
    });

    this.Given(/^that User opens the Home page$/, async () => {
        await browser.get(browser.params.communitymgt);
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

    this.When(/^he opens the CONFLICT OF INTEREST page$/, async () => {
        await HomePo.clickOnConflictOfInterestLink();
        expect(await browser.getCurrentUrl()).contain('conflict-of-interest', "'CONFLICT OF INTEREST' page is not opened.");
    });

    this.When(/^he opens the HELP US GROW page$/, async () => {
        await HomePo.clickOnHelpUsGrowLink();
        expect(await browser.getCurrentUrl()).contain('help-us-grow', "'HELP US GROW' page is not opened.");
    });

    this.When(/^he opens the PRIVACY POLICY page$/, async () => {
        await HomePo.clickOnPrivacyPolicyLink();
        expect(await browser.getCurrentUrl()).contain('privacy-policy', "'PRIVACY POLICY' page is not opened.");
    });

    this.When(/^he opens the TESTIMONIALS page$/, async () => {
        await HomePo.clickOnTestimonialsLink();
        expect(await browser.getCurrentUrl()).contain('testimonials', "'TESTIMONIALS' page is not opened.");
    });

    this.When(/^he opens the DIRECTORY page$/, async () => {
        await HomePo.clickOnDirectoryButton();
        expect(await browser.getCurrentUrl()).contain('caliber', "'DIRECTORY' page is not opened.");
    });

    this.Then(/^user click on Read More button in Management section$/, async()=> {
        await HomePo.clickOnFrstReadMoreBtn();
    });

    this.Then(/^Verify that that Read More button has changed in Management Section$/, async()=> {
        expect(await HomePo.getFirstReadLessBtnText()).to.equal("READ LESS");
    });

    this.Then(/^user click on Read More button in  PROPERTY SERVICES section$/, async()=> {
        await HomePo.clickOnReadMoreBtnInRightSection();
    });

    this.Then(/^Verify that Read more Button convert into read Less Button inService section$/, async()=> {
        expect(await HomePo.getReadLessBtnTextRightSection()).to.equal("READ LESS");
    });

    this.Then(/^user click on Read More button in  BUILDING MAINTENANCE SERVICES section$/, async()=> {
         await HomePo.clickOnReadMoreBtn2();
    });

    this.Then(/^Verify that Read more Button convert into read Less Button in BUILDING MAINTENANCE SERVICES section$/, async()=> {
        expect(await HomePo.getReadLessbtntext2()).to.equal("READ LESS");
    });

    this.Then(/^user click on let's connect button$/, async()=>{
        await HomePo.clickOnLetsConnetcBtn();
    });
    this.Then(/^user fill the let's connect form and click on Submit button$/, async()=>{
        await HomePo.fillCMIPopForm();
    });

    this.Then(/^verify submit button text convert into success$/,async()=>{
        expect(await HomePo.getSuccessBtnText()).to.equal("Success");
    });

    this.Then(/^user enter the "([^"]*)" in search bar$/, async(searchdata:string)=> {
        HomePo.enterSearchData(searchdata);
    });

    this.Then(/^verify the search result contains "([^"]*)"$/, async(searchResultdata:string)=> {
        expect(await HomePo.getSearchresultdata()).contain(searchResultdata);
    });

    this.Then(/^user click "([^"]*)" search result$/, async(openLink:string)=> {
        HomePo.clickOnSearchResult(openLink);
    });

    this.Then(/^Verify that "([^"]*)" page has open$/, async(openLinkPage:string)=> {
        expect(await browser.getCurrentUrl()).contain(openLinkPage, "searchresult page is not opened.");
    });

    this.Then(/^user click on WHY CMI Text$/, async()=> {
        HomePo.clickOnFrameLink("testimonials");
    });
    this.Then(/^user click on OUR SERVICES Text$/, async()=> {
        HomePo.clickOnFrameLink2("services");
    });
    this.Then(/^user click on CORE VALUES Text$/, async()=> {
        HomePo.clickOnFrameLink("code-of-ethics");
    });
    this.Then(/^user click on PAYMENTS OPTIONS Text$/, async()=> {
        HomePo.clickOnFrameLink("payment-options");
    });

    this.Then(/^User click on read more link in TOUR DE CURE WLS AND CMI section$/, async()=> {
        HomePo.clickOnReadMoreTourDeCureWlsSection();
    });

    this.Then(/^Verify that user is on TOUR DE CURE WLS AND CMI page$/, async()=> {
        expect(await browser.getCurrentUrl()).contain("tour-de-cure-wls-and-cmi", "page is not opened.");
    });

    this.Then(/^user click on SAVE OUR HISTORIC PEARL WATER TOWERS! link$/, async()=> {
        HomePo.clickOnSaveOurHistoryPearlWaterTowersLink();
    });

    this.Then(/^Verify that user is on SAVE OUR HISTORIC PEARL WATER TOWERS page$/, async()=> {
        expect(await browser.getCurrentUrl()).contain("save-our-historic-pearl-water-towers", "page is not opened.");
    });

    this.Then(/^Verify that a form is present in this page$/, async()=> {
        expect(await HomePo.isFormPresent()).equal(true,"form is not displayed");
    });

    this.Then(/^he click on VIEW JANITOR AND PORTER SERVICES Link$/, async()=> {
        await ManagementPo.clickOnViewJanitorAndPorterServicesLink();
        expect(await browser.getCurrentUrl()).contain('core-values', "'SERVICES' page is not opened.");
    });

    this.Then(/^he click on VIEW CONCIERGE SERVICES Link$/, async()=> {
        await ManagementPo.clickOnViewConciergeServicesLink();
        expect(await browser.getCurrentUrl()).contain('services', "'SERVICES' page is not opened.");
    });

    this.Then(/^he click on VIEW GENERAL SERVICES Link$/, async()=> {
        await ManagementPo.clickOnViewGeneralServicesLink();
        expect(await browser.getCurrentUrl()).contain('#', "'SERVICES' page is not opened.");
    });

    this.Then(/^he click on VIEW PROPERTY MANAGEMENT Link$/, async()=> {
        await ManagementPo.clickOnViewPropertyManagementLink();
        expect(await browser.getCurrentUrl()).contain('property-management', "'PROPERTY MANAGEMENT' page is not opened.");
    });

    this.Then(/^he click on VIEW PROPERTY SERVICES Link$/, async()=> {
        await ManagementPo.clickOnViewPropertyServicesLink();
        expect(await browser.getCurrentUrl()).contain('property-services-division', "'PROPERTY SERVICES' page is not opened.");
    });

    this.Then(/^he click on READ OUR FEEDBACK Link$/, async()=> {
        await ManagementPo.clickOnReadOurFeedbackLink();
        expect(await browser.getCurrentUrl()).contain('testimonials', "'FEEDBACK' page is not opened.");
    });

    this.Then(/^he click on VIEW BUILDING MAINTENANCE Link$/, async()=> {
        await ManagementPo.clickOnViewBuildingMaintenanceLink();
        expect(await browser.getCurrentUrl()).contain('building-maintenance-coordinator', "'BUILDING MAINTENANCE' page is not opened.");
    });

    this.Then(/^he click on management link$/,async()=> {
        await ManagementPo.clickOnManagementLinkFromSliderBar();
    });

    this.Then(/^he opens Management Page$/, async()=> {
            await ManagementPo.clickOnManagementButton();
            expect(await browser.getCurrentUrl()).contain('management', "'MAINTENANCE' page is not opened.");
        });

    this.Then(/^he open CONNECT WITH US page$/,async()=> {
        await CommunityPo.clickOnConnectWithUsLink();
        // expect(await browser.getCurrentUrl()).contain('connect', "'CONNECT WITH US' page is not opened.");
    });


}







