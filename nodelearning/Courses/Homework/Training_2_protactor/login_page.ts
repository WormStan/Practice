import {element,by} from 'protractor';

/** 
 * Page elements for LoginPage
*/
export class LoginPage {
    userName_Input = element(by.id("jazz_app_internal_LoginWidget_0_userId"));
    userPassword_Input = element(by.id("jazz_app_internal_LoginWidget_0_password"));
    invalidErrorMessage_Text = element(by.className("loginErrorMessage"));
    login_Button = element(by.buttonText("Log In"));
}