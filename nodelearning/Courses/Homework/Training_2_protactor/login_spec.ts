import {browser} from 'protractor';
import {LoginPage} from './login_page';
import {LoginData} from './login_data';


browser.waitForAngularEnabled(false);
let login_page = new LoginPage();
let login_data = new LoginData();

describe("Example for RQM Login Page", ()=>{

    beforeEach(()=>{
        browser.get("https://rqmclm-qa.rockwellautomation.com");
    });

    it('Should login failed via invaild user ID or password', () => {
        login_page.userName_Input.sendKeys(login_data.invalid_user_name);
        login_page.userPassword_Input.sendKeys(login_data.invalid_user_passwords);
        login_page.login_Button.click();
        expect(login_page.invalidErrorMessage_Text.getText()).toEqual(login_data.invalid_message);
    })
})