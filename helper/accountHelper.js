/**
 * Created by Jitender Kumar on 21/07/2021.
 */
class AccountHelper {

    //account page locators:
    get pageHeading() { return $('.page-heading') }
    get emailCreate() { return $('#email_create') }
    get createAccountBtn() { return $('#SubmitCreate') }
    get createAccountError() { return $('#create_account_error') }
    get submitAccountBtn() { return $('#submitAccount') }
    get alert() { return $('[class="alert alert-danger"]') }
   
    
}
module.exports = new AccountHelper() 