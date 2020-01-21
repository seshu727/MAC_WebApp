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
const sideMenuAction = new SideMenuObject();
const AccountSettings=new AccountSettingsObject();


  describe('PASSPORT:: Fund Settings', function () {
  //************field definitions***************//
 
    beforeAll(async () => {
         console.log('========> before all cases');
         await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
    });

    beforeEach(async function () {
         console.log('========> before each case');
         await browser.waitForAngularEnabled(false);
         await sideMenuAction.selectRecipient('recipient-selection-option-Letitia_Vennie');
         await sideMenuAction.openAccountSetting();
         await AccountSettings.fundSettingsTab.click();
         await browser.sleep(2000);
    });
  
   it('check the Error validation for required Fields in CFY', async function () {

          await AccountSettings.passportAgency.click();
          await AccountSettings.agencyDropdownoptions.get(1).click();
          await browser.sleep(1000);
         // await AccountSettings.passportFund_StartDate.clear();
          await AccountSettings.total_budget.clear();
          await AccountSettings.total_budget.sendKeys('546456456');
          await browser.sleep(2000);
         // expect(await AccountSettings.requiredError.get(5).getText()).toEqual( 'Maximum value is: $999,999.99 ');
          await AccountSettings.rateForKm.clear();
          await AccountSettings.rateForKm.click();
         // expect(await AccountSettings.requiredError.get(1).getText()).toEqual('');
          expect(await AccountSettings.save.isEnabled()).toEqual(false);
          await browser.sleep(2000);
       });

    it('Update CFY Total Budget Less than that expenses added',async function(){
         
          await AccountSettings.total_budget.clear();
          await AccountSettings.total_budget.sendKeys('40');
          browser.actions().mouseMove(await AccountSettings.save).perform();
          await AccountSettings.save.click();
          await browser.sleep(2000);
          expect(await AccountSettings.ErrorMessage.getText()).toEqual('The total budget should be more than or equal to the total expenses used during the fiscal year.');

       });
    it('Update the Fund Start date Out side of the added expenses-CFY ', async function(){

          await AccountSettings.passportFund_StartDate.click();
          await AccountSettings.calenderHeaderButtons.get(2).click();
          await AccountSettings.calenderHeaderButtons.get(2).click();
          await AccountSettings.calenderDates(2,3);
          await AccountSettings.total_budget.clear();
          await AccountSettings.total_budget.sendKeys('30000');
          browser.actions().mouseMove(await AccountSettings.save).perform();
          await AccountSettings.save.click();
          await browser.sleep(2000);
          expect(await AccountSettings.ErrorMessage.getText()).toEqual('Funding Start Date can not be saved. You have already entered expenses with dates prior to your selected Funding Start Date.');
       });

    it('Update CFY details with Valid data',async function(){
        await AccountSettings.passportFund_StartDate.click();
        await AccountSettings.calenderHeaderButtons.get(1).click();
        await AccountSettings.calenderHeaderButtons.get(1).click();
        await AccountSettings.calenderDates(2,3);
        browser.actions().mouseMove(await AccountSettings.save).perform();
        await AccountSettings.save.click();
        await browser.sleep(2000);
        expect(await AccountSettings.ErrorMessage.getText()).toEqual('Fund settings saved');

       });
  it('Update PFY Total Budget Less than that expenses added',async function(){
         
         await AccountSettings.selectFiscalYear.click();
         await AccountSettings.dropdownValues.get(0).click();
        await AccountSettings.total_budget.clear();
        await AccountSettings.total_budget.sendKeys('40');
        browser.actions().mouseMove(await AccountSettings.save).perform();
        await AccountSettings.save.click();
        await browser.sleep(2000);
        expect(await AccountSettings.ErrorMessage.getText()).toEqual('The total budget should be more than or equal to the total expenses used during the fiscal year.');

      });
 it('Update the Fund Start date Out side of the added expenses-PFY ', async function(){

        await AccountSettings.passportFund_StartDate.click();
        await AccountSettings.calenderHeaderButtons.get(2).click();
        await AccountSettings.calenderHeaderButtons.get(2).click();
        await AccountSettings.calenderDates(2,3);
        await AccountSettings.total_budget.clear();
        await AccountSettings.total_budget.sendKeys('30000');
        browser.actions().mouseMove(await AccountSettings.save).perform();
        await AccountSettings.save.click();
        await browser.sleep(2000);
        expect(await AccountSettings.ErrorMessage.getText()).toEqual('Funding Start Date can not be saved. You have already entered expenses with dates prior to your selected Funding Start Date.');
     });

  it('Update PFY details with Valid data',async function(){
        await AccountSettings.passportFund_StartDate.click();
        await AccountSettings.calenderHeaderButtons.get(1).click();
        await AccountSettings.calenderHeaderButtons.get(1).click();
        await AccountSettings.calenderDates(2,3);
        browser.actions().mouseMove(await AccountSettings.save).perform();
        await AccountSettings.save.click();
        await browser.sleep(2000);
        expect(await AccountSettings.ErrorMessage.getText()).toEqual('Fund settings saved');

       });
 it('Update NFY Total Budget Less than that expenses added',async function(){
         
        await AccountSettings.selectFiscalYear.click();
        await AccountSettings.dropdownValues.get(2).click();
        await AccountSettings.total_budget.clear();
        await AccountSettings.total_budget.sendKeys('40');
        browser.actions().mouseMove(await AccountSettings.save).perform();
        await AccountSettings.save.click();
        await browser.sleep(2000);
        expect(await AccountSettings.ErrorMessage.getText()).toEqual('The total budget should be more than or equal to the total expenses used during the fiscal year.');

     });
it('Update the Fund Start date Out side of the added expenses-NFY ', async function(){

       await AccountSettings.passportFund_StartDate.click();
       await AccountSettings.calenderHeaderButtons.get(2).click();
       await AccountSettings.calenderHeaderButtons.get(2).click();
       await AccountSettings.calenderDates(2,3);
       await AccountSettings.total_budget.clear();
       await AccountSettings.total_budget.sendKeys('30000');
       browser.actions().mouseMove(await AccountSettings.save).perform();
       await AccountSettings.save.click();
       await browser.sleep(2000);
       expect(await AccountSettings.ErrorMessage.getText()).toEqual('Funding Start Date can not be saved. You have already entered expenses with dates prior to your selected Funding Start Date.');
    });

 it('Update NFY details with Valid data',async function(){
      
       await AccountSettings.passportFund_StartDate.click();
       await AccountSettings.calenderHeaderButtons.get(1).click();
       await AccountSettings.calenderHeaderButtons.get(1).click();
       await AccountSettings.calenderDates(0,1);
       browser.actions().mouseMove(await AccountSettings.save).perform();
       await AccountSettings.save.click();
       await browser.sleep(2000);
       expect(await AccountSettings.ErrorMessage.getText()).toEqual('Fund settings saved');

      });


    });