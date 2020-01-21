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


  describe('SSAH Fund Settings', function () {
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
         await AccountSettings.fundSettingsTab.click();
         await browser.sleep(2000);
    });
 
   it('check the Error validation for required Fields in CFY', async function () {

          await AccountSettings.child_recp_Autorization.clear();
          await AccountSettings.child_recp_Autorization.sendKeys('werewrw@#@#');
          await browser.sleep(1000);
          expect(await AccountSettings.requiredError.get(2).getText()).toEqual('Invalid value');
          await AccountSettings.fund_startdate.clear();
          await AccountSettings.fund_enddate.clear();
          await AccountSettings.total_budget.clear();
          await AccountSettings.total_budget.sendKeys('546456456');
          await browser.sleep(1000);
         // expect(await AccountSettings.requiredError.get(4).getText()).toEqual('Maximum value is: $25,000.00');
          expect(await AccountSettings.save.isEnabled()).toEqual(false);
          await browser.sleep(2000);
       });
   it(' updates the start date later than the date in the expenses added(CFY) ', async function () {
         
          await AccountSettings.child_recp_Autorization.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.child_recp_Autorization.sendKeys('1355');
          await AccountSettings.fund_enddate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_enddate.sendKeys('3/31/2020');
          await AccountSettings.fund_startdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_startdate.sendKeys('11/11/2019');
          await AccountSettings.total_budget.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.total_budget.sendKeys('12000');
          expect(await AccountSettings.save.isEnabled()).toEqual(true);
          browser.actions().mouseMove(await AccountSettings.save).perform();
          await AccountSettings.save.click();
          await browser.sleep(2000);
          expect(await AccountSettings.ErrorMessage.getText()).toEqual('Funding Start/End Date can not be saved. You have already entered expenses with dates outside of your selected Funding Start/End Dates.');
       });
    xit(' updates the end date prior to the date in the expenses added(CFY) ', async function () {
     
          await AccountSettings.fund_enddate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_enddate.sendKeys('11/12/2019');
          await AccountSettings.fund_startdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_startdate.sendKeys('11/11/2019');
          browser.actions().mouseMove( await AccountSettings.save).click().perform();
          await browser.sleep(2000);
          expect( await AccountSettings.ErrorMessage.getText()).toEqual('Funding Start/End Date can not be saved. You have already entered expenses with dates outside of your selected Funding Start/End Dates.');
         // await AccountSettings.errorpopUpclose.click();
         });
   it('update TOTAL AMOUNT less than that Uses Budget', async function () {
     
          await AccountSettings.fund_enddate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_enddate.sendKeys('3/31/2020');
          await AccountSettings.fund_startdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_startdate.sendKeys('5/11/2019');
          await AccountSettings.total_budget.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.total_budget.sendKeys('10');
          browser.actions().mouseMove( await AccountSettings.save).perform();
          await AccountSettings.save.click();
          await browser.sleep(2000);
          expect( await AccountSettings.ErrorMessage.getText()).toEqual('The total budget should be more than or equal to the total expenses used during the fiscal year.');
         // await AccountSettings.errorpopUpclose.click();
         });

   it('update CFY details with Valid data', async function () {
           
           await AccountSettings.total_budget.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.total_budget.sendKeys('24000');
           browser.actions().mouseMove( await AccountSettings.save).perform();
           await AccountSettings.save.click();
           await browser.sleep(2000);
           expect( await AccountSettings.ErrorMessage.getText()).toEqual('Fund settings saved');
           await browser.sleep(2000);
     });
   xit(' updates the end date prior to the date in the expenses added(PFY) ', async function () {

           await AccountSettings.selectFiscalYear.click();
           await AccountSettings.dropdownValues.get(0).click();

           await AccountSettings.fund_startdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.fund_startdate.sendKeys('4/12/2018');

           await AccountSettings.fund_enddate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await AccountSettings.fund_enddate.sendKeys('7/11/2018');
           browser.actions().mouseMove(await AccountSettings.save).click().perform();
           await browser.sleep(2000);
           expect(await AccountSettings.ErrorMessage.getText()).toEqual('Funding Start/End Date can not be saved. You have already entered expenses with dates outside of your selected Funding Start/End Dates.');
        });
   it('update TOTAL AMOUNT less than that Used Budget(PFY)', async function () {

          await AccountSettings.selectFiscalYear.click();
          await AccountSettings.dropdownValues.get(0).click();

          await AccountSettings.fund_enddate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_enddate.sendKeys('2/21/2019');

          await AccountSettings. total_budget.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.total_budget.sendKeys('10');

          browser.actions().mouseMove( await AccountSettings.save).perform();
          await AccountSettings.save.click();
          await browser.sleep(2000);
          expect( await AccountSettings.ErrorMessage.getText()).toEqual('The total budget should be more than or equal to the total expenses used during the fiscal year.');
          await browser.sleep(1000);

      });

    it('update PFY start date After Expenses added ', async function () {

          await AccountSettings.fund_startdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_startdate.sendKeys('10/27/2018');

          await AccountSettings.total_budget.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.total_budget.sendKeys('20000');
          browser.actions().mouseMove(await AccountSettings.save).perform();
          await AccountSettings.save.click();
          await browser.sleep(3000);
          expect(await AccountSettings.ErrorMessage.getText()).toEqual('Funding Start/End Date can not be saved. You have already entered expenses with dates outside of your selected Funding Start/End Dates.');
          await browser.sleep(1000);

      });
   it('update PFY Fund Details with Valid data ', async function () {

          await AccountSettings.fund_startdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_startdate.sendKeys('4/27/2018');
          browser.actions().mouseMove(await AccountSettings.save).perform();
          await AccountSettings.save.click();
          await browser.sleep(3000);
          expect(await AccountSettings.ErrorMessage.getText()).toEqual('Fund settings saved');
          await browser.sleep(2000);
       });
   it(' updates the start date after the date in the expenses added(NFY) ', async function () {

          await AccountSettings.selectFiscalYear.click();
          await AccountSettings.dropdownValues.get(2).click();

          await AccountSettings.fund_startdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_startdate.sendKeys('12/12/2020');

          await AccountSettings.fund_enddate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await AccountSettings.fund_enddate.sendKeys('3/21/2021');

          browser.actions().mouseMove( await AccountSettings.save).perform();
          await AccountSettings.save.click();
          await browser.sleep(2000);
          expect( await AccountSettings.ErrorMessage.getText()).toEqual('Funding Start/End Date can not be saved. You have already entered expenses with dates outside of your selected Funding Start/End Dates.');
     });
   it('update TOTAL AMOUNT less than that Uses Budget(NFY)', async function () {

         await AccountSettings.total_budget.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
         await AccountSettings.total_budget.sendKeys('10');

         browser.actions().mouseMove( await AccountSettings.save).perform();
         await AccountSettings.save.click();
         await browser.sleep(2000);
         expect( await AccountSettings.ErrorMessage.getText()).toEqual('The total budget should be more than or equal to the total expenses used during the fiscal year.');
      });

 it('update NFY details with Valid data', async function () {

        await AccountSettings.fund_startdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await AccountSettings.fund_startdate.sendKeys('5/27/2020');

        await AccountSettings.total_budget.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await AccountSettings.total_budget.sendKeys('20000');

        browser.actions().mouseMove(await AccountSettings.save).perform();
        await AccountSettings.save.click();
        await browser.sleep(2000);
        expect( await AccountSettings.ErrorMessage.getText()).toEqual('Fund settings saved');
        await browser.sleep(2000);

     });

  });