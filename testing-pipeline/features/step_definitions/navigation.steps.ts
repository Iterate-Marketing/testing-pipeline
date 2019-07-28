import {browser} from "protractor";
import {Open, UseAngular} from 'serenity-js/protractor';
import {clickManagementSubMenu} from '../../test/tasks/navigate/navigate';

export = function myStepDefinitions() {
    this.setDefaultTimeout(60 * 1000);

    this.Given(/^(.*) opens the Home page$/, function(actor: string) {
        return this.stage.theActorCalled(actor).attemptsTo(
            UseAngular.disableSynchronisation(),
            Open.browserOn(browser.baseUrl),
        );
    });

    this.Then(/^he opens the MANAGEMENT page$/, function (pageName: string)  {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            clickManagementSubMenu(),
        );
    });

};
