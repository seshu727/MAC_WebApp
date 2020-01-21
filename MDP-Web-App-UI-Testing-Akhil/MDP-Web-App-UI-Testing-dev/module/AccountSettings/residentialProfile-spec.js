'use strict';

const constants = require('../constant.value.js');
import {
   LoginObject
} from '../login/login.obj';

import {
   SideMenuObject
} from '../side-menu.obj'

import {
   browser, element
} from 'protractor';
import {
    AccountSettingsObject
  } from './accountSetting.po.js';;



describe('RESIDENTIAL:: ACCOUNT SETTINGS -PROFILES', async function () {
   const login = new LoginObject();
   const sideMenuAction = new SideMenuObject();
   const accountsettings=new AccountSettingsObject();

   const recipientsave=element(by.id('recipientSaveProfileId'));
   const fundAdminSaveButton=element(by.id('fundAdminSaveId'));

   beforeAll(async () => {
      console.log('========> before all in Add All residential Expenses');
      await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);

   });

   beforeEach(async function () {
      console.log('========> before each in Add All residential Expense');
      await browser.waitForAngularEnabled(false);
     // await sideMenuAction.selectRecipient('recipient-selection-option-Letitia_Vennie');
      await sideMenuAction.changeFundType('Residential');
      await sideMenuAction.openAccountSetting();
     await accountsettings.myProfileTab.click();
      await browser.sleep(500);
   });
   it('Check the Recipient Information Fields Required error Validations', async function () {

    // firstName.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        
         
         await accountsettings.gender_radioButton.get(1).click();
      //  dateOfBirth.sendKeys('10000');
         await accountsettings.street.clear();
         await accountsettings.aptunit.clear();
         await accountsettings.city.clear();
         await accountsettings.city.sendKeys('city2323#@#@');
         await browser.sleep(500);
         browser.actions().mouseMove(await accountsettings.postalCode).perform();
         await accountsettings.postalCode.clear();
         browser.actions().mouseMove(await accountsettings.postalCode).sendKeys('   ').perform();
         await accountsettings.postalCode.sendKeys('   ');
         expect(await accountsettings.requiredError.get(10).getText()).toEqual('');
         expect(await accountsettings.province.isEnabled()).toEqual(true);
       //  await accountsettings.language.click();
         expect(await recipientsave.isEnabled()).toEqual(false);
         browser.actions().mouseMove(await recipientsave).perform();
         await browser.sleep(2000);
     });
     it('Update The Recipient Information',async function () {

   
        await accountsettings.gender_radioButton.get(0).click();
        await accountsettings.street.sendKeys('mvp');
        await accountsettings.aptunit.sendKeys('4654YH');
        await accountsettings.city.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await accountsettings.city.sendKeys('vizag');
        await accountsettings.postalCode.sendKeys('n73453 ');
        expect(await accountsettings.requiredError.get(2).getText()).toEqual('Enter a valid code. Ex: A1A 1A1');
        await accountsettings.postalCode.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await accountsettings.postalCode.sendKeys('H4J 3J3');
        await browser.sleep(500);
        expect(await accountsettings.province.isEnabled()).toEqual(true);
        await browser.sleep(1000);
        expect(await recipientsave.isEnabled()).toEqual(true);
        browser.actions().mouseMove(await recipientsave).perform();
        await recipientsave.click();
        await browser.sleep(1000);
        expect(await accountsettings.successMessage.getText()).toEqual('Recipient profile saved');
        await browser.sleep(2000);

     });
     it('check the fields error validations for Fund Adminstrator 1', async function () {

        browser.actions().mouseMove(await accountsettings.tabs.get(1)).perform();
        await accountsettings.tabs.get(1).click();
        await browser.sleep(1000);
        await accountsettings. firstName.clear();
        await accountsettings.firstName.click();
        await accountsettings.lastName.clear();
        await accountsettings. lastName.click();
        await accountsettings.street.clear();
        await accountsettings. aptunit.clear();
        await accountsettings.city.clear();
        browser.actions().mouseMove(await accountsettings.postalCode).click().perform();
        await accountsettings. postalCode.clear();
        await accountsettings. postalCode.sendKeys('h89j9i');
        expect(await accountsettings.requiredError.get(2).getText()).toEqual('Enter a valid code. Ex: A1A 1A1');
        await accountsettings.province.click();
        await accountsettings.dropdownOptions.get(2).click();
        browser.actions().mouseMove(await accountsettings.phoneType).perform();
        await accountsettings.phoneType.click();
        await browser.sleep(500);
        await accountsettings.selectPhoneType('selectPhoneTypesHOMPHId');
        await browser.sleep(1000);
     // phoneNumber1.clear();
        await accountsettings. relationship.click();
        await accountsettings.dropdownOptions.get(2).click();
        expect(await fundAdminSaveButton.isEnabled()).toEqual(false);
        browser.actions().mouseMove(await fundAdminSaveButton).perform();
        await browser.sleep(1000);
     });
 it('update the Fund Adminstrator 1 details', async function () {

        const relation = element(by.name('relation'));

        await accountsettings.firstName.sendKeys('Robert');
        await accountsettings.lastName.sendKeys('Duarte');
        await accountsettings.street.sendKeys('bristan');
        await accountsettings.aptunit.sendKeys('4654YH');
        await accountsettings.city.sendKeys('vizag');
        await accountsettings.postalCode.sendKeys('k3y53 ');
        await browser.sleep(500);
     //   expect(await accountsettings.requiredError.get(2).getText()).toEqual('Enter a valid code. Ex: A1A 1A1');
        await accountsettings.postalCode.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await accountsettings.postalCode.sendKeys('V6W 8J0');
        await accountsettings.province.click();
        await accountsettings.dropdownOptions.get(3).click();
        await relation.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.actions().mouseMove(await relation).perform();
        await relation.sendKeys('cousine');
    //  browser.actions().mouseMove(additonalPh_number).click().perform();
    // additonalPh_number.click();
        expect(await fundAdminSaveButton.isEnabled()).toEqual(true);
        browser.actions().mouseMove(await fundAdminSaveButton).perform();
        await fundAdminSaveButton.click();
        await browser.sleep(4000);
        expect(await accountsettings.successMessage.getText()).toEqual('Person Managing Funds Profile saved');
        await browser.sleep(1000);

       });
    it('verify the fund admin2 Error Validations for fields ', async function () {
        //  browser.actions().mouseMove(tabs.get(2)).click().perform();
         // expect(save.isEnabled()).toEqual(true);
         // browser.actions().mouseMove(await accountsettings.tabs.get(1)).perform();
          browser.actions().mouseMove(await accountsettings.tabs.get(2)).perform();
          await accountsettings.tabs.get(2).click();
          await browser.sleep(1000);
          await accountsettings.firstName.sendKeys('     ');
          await accountsettings.lastName.sendKeys('       ');
          await browser.sleep(500);
          expect(await accountsettings.requiredError.get(1).getText()).toEqual('');
          await accountsettings.email.sendKeys('ankal.gmail');
          await browser.sleep(500);
          expect(await accountsettings.requiredError.get(2).getText()).toEqual('');
          expect(await accountsettings.inviteButton.isEnabled()).toBe(false);
          await browser.sleep(1000);
       });
     it('check the error validations for INHERIROR fields',async function () {

        const InheritotSave=element(by.css('div[class="col-12 text-right m-0"]')).element(by.tagName('button'));
         
        browser.actions().mouseMove(await accountsettings.tabs.get(3)).perform();
        await accountsettings.tabs.get(3).click();
        await browser.sleep(1000);

         await accountsettings.firstName.clear();
         await accountsettings.lastName.clear();
         browser.actions().mouseMove(await accountsettings.street).perform();
         browser.actions().mouseMove(await accountsettings.aptunit).click().perform();
         browser.actions().mouseMove(await accountsettings.city).click().perform();
         await accountsettings.relationship.click();
         await accountsettings.dropdownOptions.get(1).click();
         await accountsettings.postalCode.sendKeys('   ');
         browser.actions().mouseMove(await accountsettings.province).perform();
         await accountsettings.province.click();
         await browser.sleep(1000);
         await accountsettings.dropdownOptions.get(2).click();
         browser.actions().mouseMove(await accountsettings.phoneType).perform();
         await accountsettings.phoneType.click();
         await browser.sleep(1000);
         await accountsettings.selectPhoneType('selectPhoneTypesHOMPHId');
       // browser.actions().mouseMove(phoneNumber1).click().perform();
         await browser.sleep(1000);
         browser.actions().mouseMove( await accountsettings.email).click().perform();
         await browser.sleep(1000);
         expect( await InheritotSave.isEnabled()).toEqual(true);
   });
   it('Invite INHERITOR with valid details', async function () {

    const InheritotSave=element(by.css('div[class="col-12 text-right m-0"]')).element(by.tagName('button'));


    await accountsettings.firstName.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await accountsettings.firstName.sendKeys('siva');
    await accountsettings.lastName.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await accountsettings.lastName.sendKeys('nirvan');
    await accountsettings.street.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await accountsettings.street.sendKeys('new valley');
    await accountsettings.aptunit.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await accountsettings.aptunit.sendKeys('125ok@');
    await accountsettings.city.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await accountsettings.city.sendKeys('briston');
    await accountsettings.postalCode.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await accountsettings.postalCode.sendKeys('A1A 8A6');
    await accountsettings.postalCode.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await accountsettings.postalCode.sendKeys('A1A 8A6');
    await accountsettings.phoneNumber1.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await accountsettings.phoneNumber1.sendKeys('9584565854');
    await browser.sleep(1000);
    await accountsettings.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.actions().mouseMove(await accountsettings.email).perform();
    await accountsettings.email.sendKeys('ankal.torlapati+100@dartssolutions')
    await accountsettings.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await browser.sleep(1000);
    browser.actions().mouseMove(await accountsettings.email).perform();
    await accountsettings.email.sendKeys('ankal.torlapati+100@dartssolutions.com')
    expect(await InheritotSave.isEnabled()).toEqual(true);
    browser.actions().mouseMove(await InheritotSave).perform();
    await InheritotSave.click();
    await browser.sleep(3000);
    expect(await accountsettings.successMessage.getText()).toEqual('Email address is already in use by another user associated with this account.');
    await accountsettings.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await browser.sleep(1000);
    browser.actions().mouseMove(await accountsettings.email).perform();
    await accountsettings.email.sendKeys('ankal.torlapati+501@dartssolutions.com')
    browser.actions().mouseMove(await InheritotSave).perform();
    await InheritotSave.click();
    await browser.sleep(3000);
  //  expect(await accountsettings.successMessage.getText()).toEqual('Inheritor information has been successfully saved.');
   // await browser.sleep(2000);
});
it('  Add multiple Phone numbers to any FA/Inheritor',async function () {

    const additonalPh_number = element(by.id('selectPhoneAddOtherBtnId')); //.all(by.tagName('button'));
    const phoneNumber2 = element(by.css('input[placeholder="Phone Number2"]')); //selectPhoneTypeValueId
    const phoneTypefield=element.all(by.id('selectPhoneTypesId'));
    const InheritotSave=element(by.css('div[class="col-12 text-right m-0"]')).element(by.tagName('button'));

//    browser.actions().mouseMove(tabs.get(2)).click().perform();
  

     browser.actions().mouseMove(await additonalPh_number).perform();
     await additonalPh_number.click();
     await phoneNumber2.sendKeys('4646456454');
     expect(await InheritotSave.isEnabled()).toEqual(false);
     await browser.sleep(1000);
     browser.actions().mouseMove(await phoneTypefield.get(1)).perform();
     await phoneTypefield.get(1).click();
     await accountsettings.selectPhoneType('selectPhoneTypesMOBPHId');
     expect(await accountsettings.save.isEnabled()).toEqual(true);
     await browser.sleep(1000);
     browser.actions().mouseMove(await InheritotSave).perform();
     await InheritotSave.click();
     browser.sleep(1000);
    // expect(await accountsettings.successMessage.getText()).toEqual('Inheritor information has been successfully saved.');
    // browser.sleep(2000);

});




    });