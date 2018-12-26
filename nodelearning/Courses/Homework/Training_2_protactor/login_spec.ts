import {browser} from 'protractor';
import {LoginPage} from './login_page';
import {LoginData} from './login_data';
import {element,by} from 'protractor';
import { async } from 'q';


browser.waitForAngularEnabled(false);
let login_page = new LoginPage();
let login_data = new LoginData();

describe("Example for RQM Login Page", ()=>{

    beforeEach(()=>{
        browser.get("https://rqmclm-qa.rockwellautomation.com");
    });
    it('Should login failed via invaild user ID or password', async () => {
        await login_page.userName_Input.sendKeys(login_data.invalid_user_name);
        await login_page.userPassword_Input.sendKeys(login_data.invalid_user_passwords);
        await login_page.login_Button.click();
        await expect(login_page.invalidErrorMessage_Text.getText()).toEqual(login_data.invalid_message);
    })

})