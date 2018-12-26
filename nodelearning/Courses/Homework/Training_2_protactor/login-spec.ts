import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe("Example for RQM Login Page",function(){
    browser.waitForAngularEnabled(false);

    beforeEach(()=>{
        browser.get("https://rqmclm-qa.rockwellautomation.com");
    });
    it('Should type user name and passwords', () => {
        element(by.id("jazz_app_internal_LoginWidget_0_userId")).sendKeys("rzhu4");
        element(by.id("jazz_app_internal_LoginWidget_0_password")).sendKeys("thisisstanspasswords");
    })
})