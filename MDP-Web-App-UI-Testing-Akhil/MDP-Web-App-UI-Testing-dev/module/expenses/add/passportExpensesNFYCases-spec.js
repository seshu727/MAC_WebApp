'use strict';

const constants = require('../../constant.value.js');
import {
   LoginObject
} from '../../login/login.obj';

import {
   SideMenuObject
} from '../../side-menu.obj'

import {
   ExpenseObject
} from '../expense.obj'
import {
   browser
} from 'protractor';
import { async } from 'q';
import { ManageExpenseObject } from '../../manageExpenses/manage-expenses.obj.js';



const saveExpenseBtn = element(by.id('saveExpenseBtn'));
const confirmFormBtn = element(by.id('okButton'));
const confirmationText=element(by.xpath('//*[@id="mat-dialog-1"]/app-expense-warning/mat-dialog-content/p[1]'));//.element(by.css('p[class="col m-0 text-danger ng-star-inserted"]'));
const cancel= element(by.buttonText('Cancel'));

const NFY_Amount_100Persent_used="Your Next Fiscal Year's used amount is $100.00.    100% of the Next Fiscal Year Budget based on Current Fiscal Year funding amount have been utilized."
const NFY_No_Amount='You can not save this expense. You have already used 100% of the Next Fiscal Year Budget based on Current Fiscal Year funding amount. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" to proceed or you can reduce the amount of your claim.'
const NFY_AmountMoreThan_CFY='You can not save this expense. This expense will take you beyond 100% of the Next Fiscal Year Budget based on the Current Fiscal Year funding amount. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" to proceed or you can reduce the amount of your claim.'
const InsufficientInCFY='You can not save this expense. The expense exceeds Passport Funds Remaining for the Current Fiscal Year and will take you beyond 100% of the Next Fiscal Year Budget based on the Current Fiscal Year funding amount. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" to proceed or you can reduce the amount of your claim.'

describe('RESIDENTIAL:: Adding expense', async function () {
  
   const login = new LoginObject();
   const locator = new ExpenseObject();
   const sideMenuObject = new SideMenuObject();
   const manage=new ManageExpenseObject();

   beforeAll(async () => {
      console.log('========> before all in Add All residential Expenses');
      await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
   })

   beforeEach(async function () {
      console.log('========> before each in Add All residential Expense');
      await browser.waitForAngularEnabled(false);
     // await sideMenuObject.selectRecipient('recipient-selection-option-Kristel_Ashlie');
      await sideMenuObject.openExpenseTab();

   });
   it('Adding Expenses for NFY with Amount more than CFY total budget(NO BUDGET SET UP)', async function () {

      const START_DATE = '5/04/2020';
      const END_DATE = '6/04/2020';
      const TOTAL_AMOUNT = '300';
      const SERVICE_PROVIDER = 'TEST'
     
      await locator.clickExpenseListItem('Client Vacation Supports');

      await locator.startDate.sendKeys(START_DATE);
      await locator.endDate.sendKeys(END_DATE)
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.serviceProvider.sendKeys(SERVICE_PROVIDER);
      await saveExpenseBtn.isPresent();
      console.log('save button exists');
      await saveExpenseBtn.click();
    //  await confirmationText.isPresent();
    //  expect(await confirmationText.getText()).toEqual('If you continue to add this expense then the Next Fiscal Year Remaining balance will be negative.');
    //  await locator.saveAction(true);
       await confirmFormBtn.isPresent();
       await confirmFormBtn.click();
      await browser.sleep(1000);
      expect(await locator.errorMessage1.getText()).toEqual(NFY_AmountMoreThan_CFY);
      console.log('the element is presented');
      browser.actions().mouseMove(await cancel).perform();
      await cancel.click();
      await browser.sleep(500);
     
     });

it('Adding Expenses for NFY (NO BUDGET SET UP)', async function () {

      const START_DATE = '5/04/2020';
      const END_DATE = '6/04/2020';
      const TOTAL_AMOUNT = '100';
      const SERVICE_PROVIDER = 'TEST'
     
      await locator.clickExpenseListItem('Client Vacation Supports');

      await locator.startDate.sendKeys(START_DATE);
      await locator.endDate.sendKeys(END_DATE)
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.serviceProvider.sendKeys(SERVICE_PROVIDER);
      await saveExpenseBtn.isPresent();
      console.log('save button exists');
      await saveExpenseBtn.click();
    //  await confirmationText.isPresent();
    //  expect(await confirmationText.getText()).toEqual('If you continue to add this expense then the Next Fiscal Year Remaining balance will be negative.');
    //  await locator.saveAction(true);
       await confirmFormBtn.isPresent();
       await confirmFormBtn.click();
      await browser.sleep(1000);
      console.log('the element is presented');
     // expect(await locator.errorMessage1.getText()).toEqual(NFY_Amount_100Persent_used);
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
     });
   it('Adding Expenses for NFY if 100% amount used from NFY bases on CFY (NO BUDGET SET UP)', async function () {

      const START_DATE = '5/04/2020';
      const END_DATE = '6/04/2020';
      const TOTAL_AMOUNT = '100';
      const SERVICE_PROVIDER = 'TEST'
     
      await locator.clickExpenseListItem('Client Vacation Supports');

      await locator.startDate.sendKeys(START_DATE);
      await locator.endDate.sendKeys(END_DATE)
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.serviceProvider.sendKeys(SERVICE_PROVIDER);
      await saveExpenseBtn.isPresent();
      console.log('save button exists');
      browser.actions().mouseMove( await saveExpenseBtn).perform();
      await saveExpenseBtn.click();
      await browser.sleep(500);
     // await confirmationText.isPresent();
    //  expect(await confirmationText.getText()).toEqual('If you continue to add this expense then the Next Fiscal Year Remaining balance will be negative.');
    //  await locator.saveAction(true);
       await confirmFormBtn.isPresent();
       browser.actions().mouseMove( await confirmFormBtn).perform();
       await confirmFormBtn.click();
       await browser.sleep(1000);
       console.log('the element is presented');
       expect(await locator.errorMessage1.getText()).toEqual(NFY_No_Amount); 
       await browser.sleep(1000);  
       browser.actions().mouseMove(await cancel).perform();
       await cancel.click();
       await browser.sleep(1000);  

    });
it('Go to Manage Expenses Delete added expenses', async function(){
      
       await sideMenuObject.openManageExpenseTab();
       await browser.sleep(3000);
       await manage.searchForExpense('Client Vacation Supports');
       await browser.sleep(1000);
       await manage.DeleteExpenses(0);
       browser.actions().mouseMove( await manage.removeButton).perform();
       await browser.sleep(1000);
       await manage.removeButton.click();
       await manage.deleteconfirmation(1);
       await browser.sleep(1000);
});

it('Adding Expenses for Two Fiscal years(CFY and NFY) Insufficient $ in CFY, Sufficient in NFY (NO BUDGET SET UP)', async function () {

        const START_DATE = '5/04/2019';
        const END_DATE = '10/04/2020';
        const TOTAL_AMOUNT = '500';
        const SERVICE_PROVIDER = 'TEST'
  
       await locator.clickExpenseListItem('Client Vacation Supports');

       await locator.startDate.sendKeys(START_DATE);
       await locator.endDate.sendKeys(END_DATE)
       await locator.amount.sendKeys(TOTAL_AMOUNT);
       await locator.serviceProvider.sendKeys(SERVICE_PROVIDER);
       await saveExpenseBtn.isPresent();
       console.log('save button exists');
      await saveExpenseBtn.click();
      //  await confirmationText.isPresent();
      //  expect(await confirmationText.getText()).toEqual('If you continue to add this expense then the Next Fiscal Year Remaining balance will be negative.');
      //  await locator.saveAction(true);
      await confirmFormBtn.isPresent();
      await confirmFormBtn.click();
      await browser.sleep(2000);
      expect(await locator.errorMessage1.getText()).toEqual(InsufficientInCFY);
      console.log('the element is presented');
      browser.actions().mouseMove(await cancel).perform();
      await cancel.click();
  });


});