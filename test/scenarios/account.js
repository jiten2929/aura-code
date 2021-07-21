/**
 * Created by Jitender Kumar on 21/07/2021.
 */

const router = require("../../route.js");
const constant = require(router.constants);
const lib = require(router.configPath);
const loc = require(router.accountLocaters);


describe('Aura Code Challenge - Create User Account Tests', function () {
    //this.retries(1)
    it('it loads authentication page and validate this page', function () {
        browser.url(lib.config.baseUrl)
        url = browser.getTitle();
        lib.expect(url, 'Failed: User is not redirected on correct page').to.have.string('Login - My Store');
    });

    it('it should validate the invalid email address field and enter the email address to create an account', function () {
        loc.pageHeading.waitForDisplayed(constant.Aveg_Wait_20000);
        let navigationPage = $('.page-heading');
        let navigationPageHeading = navigationPage.getText();
        lib.expect(navigationPageHeading, 'Failed: User is not redirected on correct page').to.have.string('AUTHENTICATION');
        loc.emailCreate.waitForDisplayed(constant.Aveg_Wait_20000);
        loc.emailCreate.setValue(lib.config.invalidemail)
        loc.createAccountBtn.waitForDisplayed(constant.Aveg_Wait_20000);
        loc.createAccountBtn.click();
        loc.createAccountError.waitForDisplayed(constant.Aveg_Wait_20000);

    });

    it('it should validate the valid email address and enter the email address to create an account', function () {
       
        loc.emailCreate.waitForDisplayed(constant.Aveg_Wait_20000);
        loc.emailCreate.clearValue();
        loc.emailCreate.setValue(lib.config.validemail)
        loc.createAccountBtn.waitForDisplayed(constant.Aveg_Wait_20000);
        loc.createAccountBtn.click();
        browser.pause(constant.Min_Wait_5000);
        loc.pageHeading.waitForDisplayed(constant.Aveg_Wait_20000);
        let createAccountPage = $('.page-heading');
        let createAccountPageHeading = createAccountPage.getText();
        lib.expect(createAccountPageHeading, 'Failed: User is not redirected on correct page').to.have.string('Create an account');
    });

    it('it should validate when user try to submit empty form', function () {
       
        loc.submitAccountBtn.waitForDisplayed(constant.Aveg_Wait_20000);
        loc.submitAccountBtn.click();
        loc.alert.waitForDisplayed(constant.Aveg_Wait_20000);
        let validationMessages = $('//*[@id="center_column"]/div/p');
        let validationMessagesHeading = validationMessages.getText();
        lib.expect(validationMessagesHeading, 'Failed: There should we validation error when user try to submit empty form').to.have.string('There are 8 errors');
    });

});