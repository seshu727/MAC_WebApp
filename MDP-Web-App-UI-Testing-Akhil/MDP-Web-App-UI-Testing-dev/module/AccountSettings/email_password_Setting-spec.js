'use strict';

const constants = require('../constant.value.js');
import {
   LoginObject
} from '../login/login.obj';

import {
   SideMenuObject
} from '../side-menu.obj';

import {
  AccountSettingsObject
} from './accountSetting.po.js';

import {
   browser, element
} from 'protractor';
import { async } from 'q';

const login = new LoginObject();
const sideMenuObject = new SideMenuObject();
const AccountSettings=new AccountSettingsObject();

const pngPath = `C://Users//Administrator//eclipse-workspace//protractor//mdp//module//expenses//attachments//asset//a.png`;
const jpegPath = `C://Users//Administrator//eclipse-workspace//protractor//mdp//module//expenses//attachments//asset//a.jpeg`;
const tiffPath = `C://Users//Administrator//eclipse-workspace//protractor//mdp//module//expenses//attachments//asset//a.tif`;

  describe('ACCOUNTsETTINGS:: Change Email And PassWord Section', function () {
  //************field definitions***************//
 
    beforeAll(async () => {
         console.log('========> before all in Add All ');
         await login.loginAction(constants.EMAIL_DEV_SSAH, constants.PASSWORD_DEV_SSAH, constants.WEBSITE_DEV_URL);
    });

    beforeEach(async function () {
         console.log('========> before each ');
         await browser.waitForAngularEnabled(false);
        //await sideMenuObject.changeFundType('Residential');
         await sideMenuObject.openAccountSetting();
         await browser.sleep(2000);
     });
 
   it('upload image for Profile picture(png type)', async function () {

            await AccountSettings.uploadfile.sendKeys(pngPath);
            console.log('pic uploaded');
            await browser.sleep(2000);
       });

   it('check the delete picture (should delete picture)', async function () {
           
            await AccountSettings.uploadImage();
            await browser.sleep(1000);
            expect(await AccountSettings.changeImage.isPresent()).toBeTruthy();
            expect(await AccountSettings.deleteImage.isPresent()).toBeTruthy();     
            expect(await AccountSettings.deleteImage.isPresent()).toBeTruthy();
            browser.actions().mouseMove(await AccountSettings.deleteImage).perform();
            await AccountSettings.deleteImage.click();
            await browser.sleep(2000);
      });
  
   it('Upload image type JPG', async function () {
          await AccountSettings.uploadfile.sendKeys(jpegPath);
          console.log('pic uploaded');
          await browser.sleep(2000);
      });

   it('upload file more than 4MB ', async function () {
          await AccountSettings.uploadfile.sendKeys(tiffPath);
          browser.sleep(3000);
          expect(await AccountSettings.successMessage.getText()).toEqual('Maximum file size for profile image allowed is 4MB');

     });
   it('ForgotPassword-check the Change button state if no data entered In fields', async  function () {
        
          await AccountSettings.changePasswordTab.isPresent();
          console.log('password tab is exist');
          browser.actions().mouseMove( await AccountSettings.changePasswordTab).perform();
          await AccountSettings.changePasswordTab.click();
          await browser.sleep(2000);
          await AccountSettings.ChangePassValidation();
          expect( await AccountSettings.PassError.getText()).toEqual('Password must not contain any spaces');
          expect( await AccountSettings.changeBtn.isEnabled()).toBe(false);
          await browser.sleep(2000);
      });

   it('check the validation for current pass if Entered Wrong', async function () {
          
           await AccountSettings.ChangePass1('Akhil12345', 'Test@128', 'Test@128');
           expect(await AccountSettings.changeBtn.isEnabled()).toBe(true);
           browser.actions().mouseMove( await AccountSettings.changeBtn).perform();
           await AccountSettings.changeBtn.click();
           await browser.sleep(4000);
           expect(await AccountSettings.successMessage.getText()).toEqual('Something went wrong, please ensure your current password is correct');
      });

 it('check the validation if Entered New Password same as Current password', async function () {
          
           await AccountSettings.ChangePass1('Test@128', 'Test@128', 'Test@128');
           await browser.sleep(1000);
           //expect( await AccountSettings.passError2.getText()).toEqual('');
           expect(await AccountSettings.changeBtn.isEnabled()).toBe(false);
           await browser.sleep(1000);
      });
 
   it('check the All error validations', async function () {
    
         await AccountSettings.currentpass.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
         await AccountSettings.currentpass.sendKeys('Test5');
         await browser.sleep(1000);
        // expect(await AccountSettings.PassError1.getText()).toEqual('Password must be 8-16 characters');
         await AccountSettings.currentpass.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
         await AccountSettings.currentpass.sendKeys('T52334323');
         browser.sleep(1000);
       //  expect(Account_Set.PassError1()).toEqual('Password must contain at least one lower-case letter');
         await AccountSettings.currentpass.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
         await AccountSettings.currentpass.sendKeys('tyy52334323');
         await browser.sleep(1000);
        // expect(Account_Set.PassError1()).toEqual('Password must contain at least one upper-case letter');
         await AccountSettings.currentpass.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
         await AccountSettings.currentpass.sendKeys('tyyrteArty');
         await browser.sleep(1000);
        // expect(Account_Set.PassError1()).toEqual('Password must contain at least one digit');
         expect(await AccountSettings.changeBtn.isEnabled()).toBe(false);
       });

   it('password do not match error message', async function () {
         
         await AccountSettings.ChangePass1('Test@128', 'Test@121', 'Test@128');
         expect(await AccountSettings.changeBtn.isEnabled()).toBe(false);
         // expect(Account_Set.PassError2()).toEqual('Password must contain at least one digit');
         await browser.sleep(1000);
     });

  it('change Email Address Fields Error Messages', async function () {
          
          browser.actions().mouseMove(await AccountSettings.changeEmailTab).perform();
          await AccountSettings.changeEmailTab.click();
          await browser.sleep(1000);
          browser.actions().mouseMove(await await AccountSettings.email).perform();
          await AccountSettings.email.sendKeys('    ');
          await AccountSettings.Confemail.sendKeys('    ');
          expect(await AccountSettings.emailErrors.get(2).getText()).toEqual('');
          expect(await AccountSettings.changeBtn.isEnabled()).toBe(false);
          await browser.sleep(1000);
      });

  it('Error validation for Email wrong Format', async function () {
            await AccountSettings.email.sendKeys('Akhil34');
            await AccountSettings.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
            await AccountSettings.email.sendKeys('Akhi@gmaicom');
            await browser.sleep(1000);
            await AccountSettings.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
            await AccountSettings.email.sendKeys('ankal.torlapati+128@dartssolutions.com');
            await AccountSettings.Confemail.sendKeys('ankal.torlapati+128@dartssolutions.com');
            expect(await AccountSettings.changeBtn.isEnabled()).toBe(false);
            browser.actions().mouseMove((await element(by.css('button[type="submit"]')))).perform();
            await element(by.css('button[type="submit"]')).click();
            await browser.sleep(2000);
            expect(await AccountSettings.successMessage.getText()).toEqual('Email address is already in use by another user');
            await browser.sleep(1000);
   });

});