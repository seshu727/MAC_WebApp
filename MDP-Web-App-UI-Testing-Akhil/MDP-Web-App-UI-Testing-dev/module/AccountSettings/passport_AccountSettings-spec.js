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
} from '../AccountSettings/ssah_AccountSetting.po.js';

import {
   browser, element
} from 'protractor';
import { async } from 'q';

const login = new LoginObject();
const sideMenuAction = new SideMenuObject();
const AccountSettings=new AccountSettingsObject();


  describe('PASSPORT:: Account Settings', function () {
  //************field definitions***************//
 
    beforeAll(async () => {
         console.log('========> before all in Add All residential Expenses');
         await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
    });

    beforeEach(async function () {
         console.log('========> before each in Add All residential Expense');
         await browser.waitForAngularEnabled(false);
         await sideMenuAction.selectRecipient('recipient-selection-option-Letitia_Vennie');
         await sideMenuAction.openAccountSetting();
         await AccountSettings.myProfileTab.click();
         await browser.sleep(2000);
    });
  xit('click on My Profile Tab', async function () {
        await AccountSettings.myProfileTab.isPresent();
        console.log('Profile Tab Exist'); 
        await AccountSettings.myProfileTab.click();
        
      
   });

 it('Recipient information fields Error Validations',async function(){
      
        await AccountSettings.city.clear();
        await AccountSettings.street.clear();
        await AccountSettings.aptunit.clear();
        await AccountSettings.postalCode.clear();
        await AccountSettings.postalCode.sendKeys('nuie9384')
        await browser.sleep(1000);
        expect(await AccountSettings.requiredError.get(2).getText()).toEqual('Enter a valid code. Ex: A1A 1A1');
        browser.actions().mouseMove(await AccountSettings.phoneType).perform();
        await AccountSettings.phoneType.click();
        await AccountSettings.selectPhoneType('selectPhoneTypesOFFPHId');
        browser.actions().mouseMove(await AccountSettings.save).perform();
        expect(await AccountSettings.save.isEnabled()).toBe(false);
        await browser.sleep(1000);
   }); 
  
   it('Update Recipient Information data', async function(){

         const additonalPh_number = element(by.id('selectPhoneAddOtherBtnId')); //.all(by.tagName('button'));
         const phoneNumber2 = element(by.css('input[placeholder="Phone Number2"]')); //selectPhoneTypeValueId
         const phoneTypefield=element.all(by.id('selectPhoneTypesId'));

        await AccountSettings.city.sendKeys('Toronto');
        await AccountSettings.aptunit.sendKeys('89yth');
        await AccountSettings.street.sendKeys('NewValley');
        await AccountSettings.postalCode.sendKeys('V6W 8J0');
       /* browser.actions().mouseMove(await additonalPh_number).perform();
        await additonalPh_number.click();
        await phoneNumber2.sendKeys('4646456454');
        expect(await AccountSettings.save.isEnabled()).toEqual(false);
        await browser.sleep(1000);
        browser.actions().mouseMove(await phoneTypefield.get(1)).perform();
        await phoneTypefield.get(1).click();
        await AccountSettings.selectPhoneType('selectPhoneTypesMOBPHId');*/
        expect(await AccountSettings.save.isEnabled()).toEqual(true);
        await AccountSettings.save.click();
        await browser.sleep(6000);
        expect(await AccountSettings.successMessage.getText()).toEqual('Recipient is verified.');
        await browser.sleep(2000);
       //browser.navigate().refresh();

     });
     xit('Delete added phone number ',async function(){
        
        await AccountSettings.deletePhone.get(0).isPresent();
        console.log('Delete icon exist');
        expect(await AccountSettings.deletePhone.get(0).isPresent()).toBe(true);
        await browser.sleep(1000);
        browser.actions().mouseMove(await AccountSettings.deletePhone.get(0)).perform();
        await AccountSettings.deletePhone.get(0).click();
        expect(await AccountSettings.save.isEnabled()).toEqual(true);
        await AccountSettings.save.click();
        await browser.sleep(5000);

     });

     it('Check the Error Message Validation For PMF1',async function(){
     
        browser.actions().mouseMove(await AccountSettings.tabs.get(1)).perform();
        await AccountSettings.tabs.get(1).click();
        await browser.sleep(1000);
        await AccountSettings.registeredPassportName.clear();
        await AccountSettings.registeredPassportName.click();
        await AccountSettings. firstName.clear();
        await AccountSettings.firstName.click();
        await AccountSettings.lastName.clear();
        await AccountSettings. lastName.click();
        await AccountSettings.street.clear();
        await AccountSettings. aptunit.clear();
        await AccountSettings.city.clear();
        browser.actions().mouseMove(await AccountSettings.postalCode).click().perform();
        await AccountSettings. postalCode.clear();
        await AccountSettings. postalCode.sendKeys('   ');
        expect(await AccountSettings.requiredError.get(1).getText()).toEqual('Required');
        browser.actions().mouseMove(await AccountSettings.relationship).perform();
        await AccountSettings.relationship.click();
        await AccountSettings.dropdownOptions.get(0).click();
        expect(await AccountSettings.save.isEnabled()).toBe(false);

     });

     it('Update PMF1 details',async function(){
         
        await AccountSettings.registeredPassportName.sendKeys('Robert Duarte');
        await AccountSettings. firstName.sendKeys('Robert');
        await AccountSettings.lastName.sendKeys('Duarte');
        await AccountSettings.street.sendKeys('Toronto');
        await AccountSettings. aptunit.sendKeys('A8jh4');
        await AccountSettings.city.sendKeys('Toronto');
        browser.actions().mouseMove(await AccountSettings.postalCode).click().perform();
        await AccountSettings. postalCode.clear();
        await AccountSettings. postalCode.sendKeys('A7hy4hh');
        expect(await AccountSettings.requiredError.get(2).getText()).toEqual('Enter a valid code. Ex: A1A 1A1');
        await AccountSettings. postalCode.clear();
        await AccountSettings. postalCode.sendKeys('V6W 8J0');
        browser.actions().mouseMove(await AccountSettings.relationship).perform();
        await AccountSettings.relationship.click();
        await AccountSettings.dropdownOptions.get(3).click();
        expect(await AccountSettings.save.isEnabled()).toBe(true);
        browser.actions().mouseMove(await AccountSettings.save).perform();
        await AccountSettings.save.click();
        await browser.sleep(6000);
        expect(await AccountSettings.successMessage.getText()).toEqual('Person Managing Funds Profile saved');
     });
      
    it(' PMF2 user Fields Error Validations ',async function(){
        browser.actions().mouseMove(await AccountSettings.tabs.get(2)).perform();
        await AccountSettings.tabs.get(2).click();
        await browser.sleep(1000);
        await AccountSettings.firstName.click();
        await AccountSettings.lastName.click();
        await AccountSettings.email.sendKeys('ankal.gmail');
        expect(await AccountSettings.inviteButton.isEnabled()).toBe(false);
        await browser.sleep(1000);
        await AccountSettings.firstName.sendKeys('Akhil');
        await AccountSettings.lastName.sendKeys('FundAdmin2');
        await AccountSettings.email.clear();
        await AccountSettings.email.sendKeys('ankal.torlapati+100@dartssolutions.com');
        expect(await AccountSettings.inviteButton.isEnabled()).toBe(true);
        await AccountSettings.inviteButton.click();
        await browser.sleep(2000);
        expect(await AccountSettings.successMessage.getText()).toEqual('Email address is already in use by another user associated with this account.');
        await AccountSettings.email.clear();
        await AccountSettings.email.sendKeys('ankal.torlapati+101@dartssolutions.com');
        expect(await AccountSettings.inviteButton.isEnabled()).toBe(true);
        await AccountSettings.inviteButton.click();
        await browser.sleep(3000);
        expect(await AccountSettings.successMessage.getText()).toEqual('User has already been invited');
     });

     it('Verfy the Error Validation for Payee fields', async function(){
        browser.actions().mouseMove(await AccountSettings.tabs.get(3)).perform();
        await AccountSettings.tabs.get(3).click();
        await browser.sleep(1000);
        await AccountSettings.registeredPassportName.clear();
        await AccountSettings.registeredPassportName.click();
        await AccountSettings. firstName.clear();
        await AccountSettings.firstName.click();
        await AccountSettings.lastName.clear();
        await AccountSettings. lastName.click();
        await AccountSettings.street.clear();
        await AccountSettings. aptunit.clear();
        await AccountSettings.city.clear();
        browser.actions().mouseMove(await AccountSettings.postalCode).perform();
        await AccountSettings. postalCode.clear();
        await AccountSettings. postalCode.sendKeys('   ');
        expect(await AccountSettings.requiredError.get(1).getText()).toEqual('Required');
        browser.actions().mouseMove(await AccountSettings.save).perform();
        expect(await AccountSettings.save.isEnabled()).toBe(false);
        await AccountSettings.save.click();
        
      });

      it('Update the Payee Details', async function(){
        await AccountSettings.registeredPassportName.sendKeys('Robert Duarte')
        await AccountSettings.firstName.sendKeys('Robert')
        await AccountSettings.lastName.sendKeys('Duarte');
        await AccountSettings.street.sendKeys('Toronto');
        await AccountSettings.aptunit.sendKeys('4rg5');
        await AccountSettings.city.sendKeys('Toronto')
        browser.actions().mouseMove(await AccountSettings.postalCode).perform();
        await AccountSettings. postalCode.clear();
        await AccountSettings. postalCode.sendKeys('huer837');
        expect(await AccountSettings.requiredError.get(2).getText()).toEqual('Enter a valid code. Ex: A1A 1A1');
        await AccountSettings. postalCode.clear();
        await AccountSettings. postalCode.sendKeys('V6W 8J0');
        browser.actions().mouseMove(await AccountSettings.save).perform();
        expect(await AccountSettings.save.isEnabled()).toBe(true);
        await AccountSettings.save.click();
        await browser.sleep(6000);
        expect(await AccountSettings.successMessage.getText()).toEqual('Payee is verified');
        await browser.sleep(2000);

      })



   });