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


  describe('SSAH Account Settings', function () {
  //************field definitions***************//
 
    beforeAll(async () => {
         console.log('========> before all in Add All residential Expenses');
         await login.loginAction(constants.EMAIL1_DEV_SSAH, constants.PASSWORD1_DEV_SSAH, constants.WEBSITE_DEV_URL);
    });

    beforeEach(async function () {
         console.log('========> before each in Add All residential Expense');
         await browser.waitForAngularEnabled(false);
        //await sideMenuObject.changeFundType('Residential');
         await sideMenuObject.openAccountSetting();
         await AccountSettings.myProfileTab.click();
         await browser.sleep(2000);
    });
  xit('click on My Profile Tab', async function () {
        await AccountSettings.myProfileTab.isPresent();
        console.log('Profile Tab Exist'); 
        await AccountSettings.myProfileTab.click();
        await browser.sleep(1000);
       // browser.sleep(3000);
       // expect(Log.getGreeting()).toEqual('Sign In');
       //Log.Login('ankal.torlapati+300@dartssolutions.com', 'Test12345');
   });
 
  it('Check the Recipient Information Fields Required error Validations', async function () {

    // firstName.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        
         await AccountSettings.firstName.clear(); 
         await AccountSettings.firstName.click();
         await AccountSettings.lastName.clear();
         await AccountSettings.lastName.click();
         await AccountSettings.gender_radioButton.get(1).click();
      //  dateOfBirth.sendKeys('10000');
         await AccountSettings.street.clear();
         await AccountSettings.aptunit.clear();
         await AccountSettings.city.clear();
         await AccountSettings.city.sendKeys('city2323#@#@');
         await browser.sleep(500);
         browser.actions().mouseMove(await AccountSettings.postalCode).perform();
         await AccountSettings.postalCode.clear();
         browser.actions().mouseMove(await AccountSettings.postalCode).sendKeys('   ').perform();
         //await AccountSettings.postalCode.sendKeys('   ');
    //  expect(errorValidations.get(1).getText()).toEqual('');
         expect(await AccountSettings.province.isEnabled()).toEqual(true);
         await AccountSettings.language.click();
         expect(await AccountSettings.save.isEnabled()).toEqual(false);
          browser.actions().mouseMove(await AccountSettings.save).click().perform();
          await browser.sleep(1000);
     });
  it('Update The Recipient Information',async function () {


        await AccountSettings.firstName.sendKeys('Akhil225');
        await AccountSettings.lastName.sendKeys('T');

        await AccountSettings.gender_radioButton.get(1).click();
    //  dateOfBirth.sendKeys('10000');
    // street.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await AccountSettings.street.sendKeys('mvp');
        await AccountSettings.aptunit.sendKeys('4654YH');
        await AccountSettings.city.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await AccountSettings.city.sendKeys('vizag');
        await AccountSettings.postalCode.sendKeys('n73453 ');
        //expect(await AccountSettings.requiredError.get(2).getText()).toEqual('false');
        await AccountSettings.postalCode.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await AccountSettings.postalCode.sendKeys('H4J 3J3');
        await browser.sleep(1000);
   // expect(await AccountSettings.requiredError.get(1).getText()).toEqual('123')
        expect(await AccountSettings.province.isEnabled()).toEqual(true);
        await browser.sleep(1000);
        expect(await AccountSettings.save.isEnabled()).toEqual(true);
       browser.actions().mouseMove(await AccountSettings.save).perform();
       await AccountSettings.save.click();
       await browser.sleep(1000);
       expect(await AccountSettings.successMessage.getText()).toEqual('Recipient profile saved');
       await browser.sleep(2000);

     });

  it('check the fields error validations for Fund Adminstrator 1', async function () {

       browser.actions().mouseMove(await AccountSettings.tabs.get(1)).perform();
       await AccountSettings.tabs.get(1).click();
       await browser.sleep(1000);
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
       await AccountSettings.province.click();
       await AccountSettings.dropdownOptions.get(2).click();
       browser.actions().mouseMove(await AccountSettings.phoneType).perform();
       await AccountSettings.phoneType.click();
       await browser.sleep(500);
       await AccountSettings.selectPhoneType('selectPhoneTypesHOMPHId');
       await browser.sleep(1000);
    // phoneNumber1.clear();
       await AccountSettings. relationship.click();
       await AccountSettings.dropdownOptions.get(2).click();
       expect(await AccountSettings.save.isEnabled()).toEqual(false);
       browser.actions().mouseMove(await AccountSettings.save).click().perform();
    });
 it('update the Fund Adminstrator 1 details', async function () {

        const relation = element(by.name('relation'));

        await AccountSettings.firstName.sendKeys('sushan');
        await AccountSettings.lastName.sendKeys('shan');
        await AccountSettings.street.sendKeys('bristan');
        await AccountSettings.aptunit.sendKeys('4654YH');
        await AccountSettings.city.sendKeys('vizag');
        await AccountSettings.postalCode.sendKeys('k3y53 ');
        expect(await AccountSettings.requiredError.get(2).getText()).toEqual('nter a valid code. Ex: A1A 1A1');
        expect(await AccountSettings.save.isEnabled()).toEqual(false);
        await AccountSettings.postalCode.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await AccountSettings.postalCode.sendKeys('H4J 3J3');
        await AccountSettings.province.click();
        await AccountSettings.dropdownOptions.get(3).click();
        await relation.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await relation.sendKeys('cousine');
    //  browser.actions().mouseMove(additonalPh_number).click().perform();
    // additonalPh_number.click();
        expect(await AccountSettings.save.isEnabled()).toEqual(true);
        browser.actions().mouseMove(await AccountSettings.save).perform();
        await AccountSettings.save.click();
        await browser.sleep(2000);
        expect(await AccountSettings.successMessage.getText()).toEqual('Fund Administrator profile saved');
        await browser.sleep(2000);

       });

    it('verify the fund admin2 details ', async function () {
         //  browser.actions().mouseMove(tabs.get(2)).click().perform();
          // expect(save.isEnabled()).toEqual(true);
           browser.actions().mouseMove(await AccountSettings.tabs.get(1)).perform();
           browser.actions().mouseMove(await AccountSettings.tabs.get(2)).perform();
           await AccountSettings.tabs.get(2).click();
           await browser.sleep(1000);
           await AccountSettings.firstName.click();
           await AccountSettings.lastName.click();
           await AccountSettings.email.sendKeys('ankal.gmail');
           expect(await AccountSettings.inviteButton.isEnabled()).toBe(false);
           await browser.sleep(1000);
        });
    it('check the error validations for INHERIROR fields',async function () {
         
          
           browser.actions().mouseMove(await AccountSettings.tabs.get(3)).perform();
           await AccountSettings.tabs.get(3).click();

            await AccountSettings.firstName.clear();
            await AccountSettings.lastName.clear();
            browser.actions().mouseMove(await AccountSettings.street).perform();
            browser.actions().mouseMove(await AccountSettings.aptunit).click().perform();
            browser.actions().mouseMove(await AccountSettings.city).click().perform();
            await AccountSettings.relationship.click();
            await AccountSettings.dropdownOptions.get(1).click();
            await AccountSettings.postalCode.sendKeys('   ');
            browser.actions().mouseMove(await AccountSettings.province).perform();
            await AccountSettings.province.click();
            await browser.sleep(1000);
            await AccountSettings.dropdownOptions.get(2).click();
            browser.actions().mouseMove(await AccountSettings.phoneType).perform();
            await AccountSettings.phoneType.click();
            await browser.sleep(1000);
            await AccountSettings.selectPhoneType('selectPhoneTypesHOMPHId');
          // browser.actions().mouseMove(phoneNumber1).click().perform();
            await browser.sleep(1000);
            browser.actions().mouseMove( await AccountSettings.email).click().perform();
            await browser.sleep(1000);
            expect( await AccountSettings.save.isEnabled()).toEqual(true);
      });

   it('Invite INHERITOR with valid details', async function () {

           await AccountSettings.firstName.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.firstName.sendKeys('siva');
           await AccountSettings.lastName.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.lastName.sendKeys('nirvan');
           await AccountSettings.street.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.street.sendKeys('new valley');
           await AccountSettings.aptunit.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.aptunit.sendKeys('125ok@');
           await AccountSettings.city.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.city.sendKeys('briston');
           await AccountSettings.postalCode.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.postalCode.sendKeys('A1A 8A6');
           await AccountSettings.postalCode.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.postalCode.sendKeys('A1A 8A6');
           await AccountSettings.phoneNumber1.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.phoneNumber1.sendKeys('9584565854');
           await browser.sleep(1000);
           await AccountSettings.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           browser.actions().mouseMove(await AccountSettings.email).perform();
           await AccountSettings.email.sendKeys('ankal.torlapati+300@dartssolutions')
           await AccountSettings. email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await browser.sleep(1000);
           browser.actions().mouseMove(await AccountSettings.email).perform();
           await AccountSettings.email.sendKeys('ankal.torlapati+300@dartssolutions.com')
           expect(await AccountSettings.save.isEnabled()).toEqual(true);
           browser.actions().mouseMove(await AccountSettings.save).perform();
           await AccountSettings.save.click();
           await browser.sleep(2000);
           expect(await AccountSettings.successMessage.getText()).toEqual('Email address is already in use by another user associated with this account.');
           await AccountSettings.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await browser.sleep(1000);
           browser.actions().mouseMove(await AccountSettings.email).perform();
           await AccountSettings.email.sendKeys('ankal.torlapati+501@dartssolutions.com')
           browser.actions().mouseMove(await AccountSettings.save).perform();
           await AccountSettings.save.click();
           await browser.sleep(2000);
           expect(await AccountSettings.successMessage.getText()).toEqual('Inheritor information has been successfully saved.');
           await browser.sleep(2000);
       });

   it('  Add multiple Phone numbers to any FA/Inheritor',async function () {

            const additonalPh_number = element(by.id('selectPhoneAddOtherBtnId')); //.all(by.tagName('button'));
            const phoneNumber2 = element(by.css('input[placeholder="Phone Number2"]')); //selectPhoneTypeValueId
            const phoneTypefield=element.all(by.id('selectPhoneTypesId'));
    //    browser.actions().mouseMove(tabs.get(2)).click().perform();
          

             browser.actions().mouseMove(await additonalPh_number).perform();
             await additonalPh_number.click();
             await phoneNumber2.sendKeys('4646456454');
             expect(await AccountSettings.save.isEnabled()).toEqual(false);
             await browser.sleep(1000);
             browser.actions().mouseMove(await phoneTypefield.get(1)).perform();
             await phoneTypefield.get(1).click();
             await AccountSettings.selectPhoneType('selectPhoneTypesMOBPHId');
             expect(await AccountSettings.save.isEnabled()).toEqual(true);
             await browser.sleep(1000);
             browser.actions().mouseMove(await AccountSettings.save).perform();
             await AccountSettings.save.click();
            // browser.sleep(1000);
            // expect(await AccountSettings.successMessage.getText()).toEqual('Inheritor information has been successfully saved.');
             browser.sleep(2000);

        });

     it('Delete added phone number ',async function(){
          await AccountSettings.deletePhone.get(0).isPresent();
          console.log('Delete icon exist');
          expect(AccountSettings.deletePhone.get(0).isPresent()).toBe(true);

       });

  });