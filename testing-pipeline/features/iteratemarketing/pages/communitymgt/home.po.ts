import {BasePo} from "../base.po";
import {browser, by, element, ElementFinder, ExpectedConditions} from "protractor";
import {NavigationPo} from "../artms/navigation.po";

export class HomePo extends BasePo{
    private static code_of_ethics: ElementFinder = element(by.xpath("//a[contains(text(),'Code of Ethics')]"));
    private static conflict_of_interest: ElementFinder = element(by.xpath("//a[contains(text(),'Conflict of Interest')]"));
    private static help_us_grow: ElementFinder = element(by.xpath("//a[contains(text(),'Help Us Grow')]"));
    private static privacy_policy: ElementFinder = element(by.xpath("//a[contains(text(),'Privacy Policy')]"));
    private static testimonials: ElementFinder = element(by.xpath("(//a[contains(text(),'testimonials')])"));
    private static directory: ElementFinder = element(by.xpath("(//a[contains(text(),'directory')])"));
    private static readLessBtn: ElementFinder = element(by.className("collapseLinkLeft1"));
    private static readMore: ElementFinder= element(by.className("collapseLinkLeft1"));
    private static readLess_right_section: ElementFinder= element(by.className("collapseLinkRight1"));
    private static read_more_less : ElementFinder = element(by.className("collapseLinkLeft2"));
    private static lets_connect : ElementFinder = element(by.id("trigger-popup"));
    private static user_name: ElementFinder = element(by.name("cmi-popup-form-name"));
    private static user_email: ElementFinder = element(by.name("cmi-popup-form-email"));
    private static user_phone: ElementFinder = element(by.name("cmi-popup-form-email"));
    private static user_message: ElementFinder = element(by.name("cmi-popup-form-message"));
    private static submit_btn: ElementFinder = element(by.id("front-page-popup-submission"));
    private static search_icon: ElementFinder =  element(by.className("fa-search"));
    private static search_bar: ElementFinder = element(by.id("search"));
    private static search_result : ElementFinder = element(by.id("searchresult"));

    static async clickOnCodeOfEthicsLink() {
        await browser.executeScript("arguments[0].scrollIntoView();", HomePo.code_of_ethics.getWebElement());
        await HomePo.code_of_ethics.click();
    }

    static async clickOnConflictOfInterestLink(){
        await browser.executeScript("arguments[0].scrollIntoView();", HomePo.conflict_of_interest.getWebElement());
        await HomePo.conflict_of_interest.click();
    }

    static async clickOnHelpUsGrowLink(){
        await browser.executeScript("arguments[0].scrollIntoView();", HomePo.help_us_grow.getWebElement());
        await HomePo.help_us_grow.click();
    }

    static async clickOnPrivacyPolicyLink(){
        await browser.executeScript("arguments[0].scrollIntoView();", HomePo.privacy_policy.getWebElement());
        await HomePo.privacy_policy.click();
    }

    static async clickOnTestimonialsLink(){
        await browser.executeScript("arguments[0].scrollIntoView();", HomePo.testimonials.getWebElement());
        await HomePo.testimonials.click();
    }

    static async clickOnDirectoryButton(){
        var directory_btn = browser.findElements(by.css(".read-more-btn"))
        await browser.executeScript("arguments[0].scrollIntoView();", HomePo.directory.getWebElement());
        await HomePo.directory.click();
    }

    static async clickOnFrstReadMoreBtn(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath('//a[@href="#collapseLeftSection1"]'))), 10000);
        this.readMore.click();
    }

    static async getFirstReadLessBtnText(){
        // await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath('(//a[text()=\'Read Less\'])[1]'))), 10000);
        await browser.sleep(2999);
        return await this.readLessBtn.getText();
    }

    static async clickOnReadMoreBtnInRightSection(){
        this.clickClassButton("read-more-green-btn","READ MORE");
    }

    static async getReadLessBtnTextRightSection(){
        await browser.sleep(2999);
        return await this.readLess_right_section.getText();
    }

    static async clickOnReadMoreBtn2(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.className('collapseLinkLeft2'))), 10000);
        await browser.executeScript("scrollBy(0,3000)");
        await  this.read_more_less.click();
    }
    static async getReadLessbtntext2(){
        await browser.sleep(2999)
        return await this.read_more_less.getText();
    }

    static async clickOnLetsConnetcBtn(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.id('trigger-popup'))), 10000);
        await this.lets_connect.click();
    }
    static async fillCMIPopForm(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.name('cmi-popup-form-name'))), 10000);
        await this.user_name.sendKeys("test");
        await this.user_email.sendKeys("test@test.com");
        await this.user_phone.sendKeys("1111111111");
        await this.user_message.sendKeys("message_test");
        await this.submit_btn.click();
    }

    static async getSuccessBtnText(){
        browser.sleep(2999)
        return await browser.executeScript("return document.getElementById('front-page-popup-submission').value");
    }

    static async enterSearchData(searchText:string){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.className("fa-search"))),10000);
        this.search_icon.click();
        await browser.wait(ExpectedConditions.visibilityOf(element(by.id("search"))),10000);
        this.search_bar.sendKeys(searchText);
    }

    static async getSearchresultdata(){
        await browser.wait(ExpectedConditions.visibilityOf(element(by.id("searchresult"))),10000);
        return this.search_result.getText();
    }

    static async clickOnSearchResult(searchresult:string){
        let xpath: ElementFinder = element(by.xpath("(//a[text()='"+searchresult+"'])[2]"));
        await browser.wait(ExpectedConditions.elementToBeClickable(xpath), 50000);
        xpath.click();
    }

    static async clickOnFrameLink(frameLink:string){
        let xpath: ElementFinder = element(by.xpath("(//a[@href='/"+frameLink+"/'])[1]"));
        await browser.wait(ExpectedConditions.elementToBeClickable(xpath), 50000);
        xpath.click();
    }
    static async clickOnFrameLink2(frameLink:string){
        let xpath: ElementFinder = element(by.xpath("(//a[@href='/"+frameLink+"/'])[2]"));
        await browser.wait(ExpectedConditions.elementToBeClickable(xpath), 50000);
        xpath.click();
    }

    static clickOnReadMoreTourDeCureWlsSection(){
        this.clickClassButton("read-more","READ MORE");
    }

    static clickOnSaveOurHistoryPearlWaterTowersLink(){
        this.clickClassButton("cmi-green","SAVE OUR HISTORIC PEARL WATER TOWERS!");
    }

    static async isFormPresent(){
       let n = await browser.executeScript("return document.getElementsByTagName('form').length")
        if(n>0){
           return true;
        }
        else {
           return false;
        }
    }



}

