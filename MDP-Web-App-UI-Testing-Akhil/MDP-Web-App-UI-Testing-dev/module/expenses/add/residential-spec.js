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
   browser, element
} from 'protractor';

describe('RESIDENTIAL:: Adding expense', async function () {
   const login = new LoginObject();
   const locator = new ExpenseObject();
   const sideMenuAction = new SideMenuObject();

   beforeAll(async () => {
      console.log('========> before all in Add All residential Expenses');
      await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);

   });

   beforeEach(async function () {
      console.log('========> before each in Add All residential Expense');
      await browser.waitForAngularEnabled(false);
     // await sideMenuAction.selectRecipient('recipient-selection-option-Letitia_Vennie');
      await sideMenuAction.changeFundType('Residential');
      await sideMenuAction.openExpenseTab();
      await browser.sleep(500);
   });

  
   it('utilities expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'Nagm TEST';
     
      await locator.clickExpenseListItem('Utilities');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.paidTo.sendKeys(PAID_TO);

      await locator.typeCtrl.click();
      await locator.typeCtrlList.isPresent();
      console.log('select typeCtrl list');
      await locator.typeCtrlList.get(0).click();

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });
   it('Housing expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '10';
      const PAID_TO = 'TEST'
     
      await locator.clickExpenseListItem('Housing');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.paidTo.sendKeys(PAID_TO);

      await locator.typeCtrl.click();
      await locator.typeCtrlList.isPresent();
      console.log('select typeCtrl list');
      await locator.typeCtrlList.get(0).click();

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });


   it('Home Maintenance expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'Nagm TEST'
     
      await locator.clickExpenseListItem('Home Maintenance');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.paidTo.sendKeys(PAID_TO);

      await locator.typeCtrl.click();
      await locator.typeCtrlList.isPresent();
      console.log('select typeCtrl list');
      await locator.typeCtrlList.get(0).click();

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });

   it('Renovation expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'Nagm TEST'
      await locator.clickExpenseListItem('Renovation');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.paidTo.sendKeys(PAID_TO);

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });

   it('Furnishings expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'Nagm TEST'
      await locator.clickExpenseListItem('Furnishings');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.paidTo.sendKeys(PAID_TO);

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });

   it('Food / House supplies expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'Nagm TEST'
      await locator.clickExpenseListItem('Food / House supplies');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.paidTo.sendKeys(PAID_TO);

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });

   it('Personal needs expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'Nagm TEST'
      await locator.clickExpenseListItem('Personal needs');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.paidTo.sendKeys(PAID_TO);

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });

   it('Insurance expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'Nagm TEST'
      await locator.clickExpenseListItem('Insurance');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.paidTo.sendKeys(PAID_TO);

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });

   it('Transportation expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      await locator.clickExpenseListItem('Transportation');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);

      await locator.nameOfSupportWorker.click();
      await locator.supportWorkerList.isPresent();
      console.log('select providedby list');
      await locator.supportWorkerList.get(0).click();

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });

   it('Mileage expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      await locator.clickExpenseListItem('Mileage');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.amount.sendKeys(TOTAL_AMOUNT);

      await locator.nameOfSupportWorker.click();
      await locator.supportWorkerList.isPresent();
      console.log('select providedby list');
      await locator.supportWorkerList.get(0).click();

      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });

   it('Support Worker expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'Nagm test';

      await locator.clickExpenseListItem('Support Worker');

      await element(by.name('DOSCtrl')).sendKeys(EXPENSE_DATE);
      await locator.paidTo.sendKeys(PAID_TO);
      await locator.cost.sendKeys(TOTAL_AMOUNT);


      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });
   it('Community Events expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'Akhil test';

      await locator.clickExpenseListItem('Community Events');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.paidTo.sendKeys(PAID_TO);
      await locator.amount.sendKeys(TOTAL_AMOUNT);


      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });
   it('Community Programs expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'newton test';

      await locator.clickExpenseListItem('Community Programs');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.paidTo.sendKeys(PAID_TO);
      await locator.amount.sendKeys(TOTAL_AMOUNT);


      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });
   it('Membership expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'newton test';
      const DESCRIPTION='test for residential'

      await locator.clickExpenseListItem('Membership');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.paidTo.sendKeys(PAID_TO);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.description.sendKeys(DESCRIPTION);


      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });
   it('Administration Fee expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const ORGANISER = 'YUVRAJ SING';
      const DESCRIPTION='test for residential'

      await locator.clickExpenseListItem('Administration Fee');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await element(by.name('orgNameCtrl')).sendKeys(ORGANISER);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.description.sendKeys(DESCRIPTION);


      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });
   it('Client Vacation Supports expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'VIRAT';
      const DESCRIPTION='test for residential'

      await locator.clickExpenseListItem('Client Vacation Supports');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.paidTo.sendKeys(PAID_TO);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.description.sendKeys(DESCRIPTION);


      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
   });
   it('Professional Development expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'VIRAT';
      const DESCRIPTION='test for residential'

      await locator.clickExpenseListItem('Professional Development');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.paidTo.sendKeys(PAID_TO);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.description.sendKeys(DESCRIPTION);


      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });
   it('Staff Allowance expense', async function () {

      
      const EXPENSE_DATE = '8/04/2019';
      const DISTANCE = '5';
      const RATEFORKM='.9';
      const PURPOSEOFTRAVEL='test for residential'

      await locator.clickExpenseListItem('Staff Allowance');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.nameOfSupportWorker.click();
      console.log('provided by list exiest');
      await locator.typeCtrlList.get(1).click();
      await locator.description.sendKeys(PURPOSEOFTRAVEL);
      await locator.radioButton.get(1).click();
      await locator.distance.sendKeys(DISTANCE);
      await locator.rateForKM.sendKeys(RATEFORKM);
      expect(locator.amount.getAttribute('value')).toEqual('4.5');


      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });
   it('Other expense', async function () {

      const EXPENSE_DATE = '8/04/2019';
      const TOTAL_AMOUNT = '5';
      const PAID_TO = 'VIRAT';
      const DESCRIPTION='test for residential'

      await locator.clickExpenseListItem('Other');

      await locator.expenseDate.sendKeys(EXPENSE_DATE);
      await locator.paidTo.sendKeys(PAID_TO);
      await locator.amount.sendKeys(TOTAL_AMOUNT);
      await locator.description.sendKeys(DESCRIPTION);


      await locator.saveAction(true);

      await browser.sleep(500);
      console.log('the element is presented');
      expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);

   });
});
