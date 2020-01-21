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


const BEFORE_FUNDSTART_DATE="You can not select an expense date prior to your funding start date for the selected fiscal year. To change your funding start date go to “Account Settings-->Fund Settings”."
const BEFORE_PFY="You can not enter expenses that occur prior to the Previous Fiscal Year."
const INSUFFICIENT_BUDGET_PFY='Expense exceeds "Residential Funds Available" from last year. Please speak with your Case Worker to make adjustments to your Annual Amount as required.'
const PFY="Please contact your Case Worker. The grace period for submitting last year's expenses has ended so your claim will need to be manually reviewed."
const INSUFFICIENT_BUDGET_CFY='Expense exceeds "Residential Funds Available". Please speak with your Case Worker to make adjustments to your Annual Amount as required.'
const AFTER_NFY='You can not enter expenses that occur after the Next Fiscal Year.';
const INSUFFICIENT_BUDGET_NFY='Expense exceeds "Residential Funds Available" for next year. Please speak with your Case Worker to make adjustments to your Annual Amount as required.'
const NFY="This expense will be deducted from next year's funding balance."


const cancelButton=element(by.id('cancelBtn'));

describe('RESIDENTIAL:: Adding expense', async function () {
   const login = new LoginObject();
   const locator = new ExpenseObject();
   const sideMenuAction = new SideMenuObject();

   beforeAll(async () => {
      console.log('========> before all in Add All residential Expenses');
      await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
      await browser.sleep(1000);

   });

   beforeEach(async function () {
      console.log('========> before each in Add All residential Expense');
      await browser.waitForAngularEnabled(false);
     // await sideMenuAction.selectRecipient('recipient-selection-option-Letitia_Vennie');
      await sideMenuAction.changeFundType('Residential');
      await sideMenuAction.openExpenseTab();

   });

  it('Add Expenses before Fund start date in PFY', async function () {

      const EXPENSE_DATE = '4/04/2018';
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
      expect(await locator.errorMessage1.getText()).toEqual(BEFORE_FUNDSTART_DATE);
      await cancelButton.click();
    });
it('Add Expenses before PFY (i.e before 1st April 2018)', async function () {

    const EXPENSE_DATE = '3/04/2018';
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

    await browser.sleep(1000);
    console.log('the element is presented');
    expect(await locator.errorMessage1.getText()).toEqual(BEFORE_PFY);
    await cancelButton.click();
 });
 it('Add Expenses After fund Start date but InSufficient Fund in PFY(i.e between 1st April 2018- 31st March 2019)', async function () {

    const EXPENSE_DATE = '7/04/2018';
    const TOTAL_AMOUNT = '10000';
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

    await browser.sleep(1000);
    console.log('the element is presented');
    expect(await locator.errorMessage1.getText()).toEqual(INSUFFICIENT_BUDGET_PFY);
    await cancelButton.click();
 });
 it('Add Expenses After fund Start date with Sufficient Fund in PFY(i.e between 1st April 2018- 31st March 2019)', async function () {

    const EXPENSE_DATE = '7/04/2018';
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

    await browser.sleep(2000);
    console.log('the element is presented');
    expect(await locator.errorMessage1.getText()).toEqual(PFY);
 });
 it('Add Expenses before Fund start date in CFY', async function () {

    const EXPENSE_DATE = '4/04/2019';
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

    await browser.sleep(1000);
    console.log('the element is presented');
    expect(await locator.errorMessage1.getText()).toEqual(BEFORE_FUNDSTART_DATE);
    await cancelButton.click();
  });
  it('Add Expenses After fund Start date but InSufficient Fund in CFY(i.e between 1st April 2019- 31st March 2020)', async function () {

    const EXPENSE_DATE = '7/04/2019';
    const TOTAL_AMOUNT = '10000';
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

    await browser.sleep(1000);
    console.log('the element is presented');
    expect(await locator.errorMessage1.getText()).toEqual(INSUFFICIENT_BUDGET_CFY);
    await cancelButton.click();
 });
 it('Add Expenses After fund Start date with Sufficient Fund in CFY(i.e between 1st April 2019- 31st March 2020)', async function () {

    const EXPENSE_DATE = '7/04/2019';
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

    await browser.sleep(1000);
    console.log('the element is presented');
    expect(await locator.expenseAddedPanel.isPresent()).toBe(true);
 });
 it('Add Expenses before Fund start date in NFY', async function () {

    const EXPENSE_DATE = '4/04/2020';
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

    await browser.sleep(1000);
    console.log('the element is presented');
    expect(await locator.errorMessage1.getText()).toEqual(BEFORE_FUNDSTART_DATE);
    await cancelButton.click();
  });
  it('Add Expenses After fund Start date but InSufficient Fund in NFY(i.e between 1st April 2020- 31st March 2021)', async function () {

    const EXPENSE_DATE = '8/04/2020';
    const TOTAL_AMOUNT = '15000';
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

    await browser.sleep(2000);
    console.log('the element is presented');
    expect(await locator.errorMessage1.getText()).toEqual(INSUFFICIENT_BUDGET_NFY);
    await cancelButton.click();
 });
 it('Add Expenses After NFY(i.e After 31st March 2021)', async function () {

    const EXPENSE_DATE = '8/04/2021';
    const TOTAL_AMOUNT = '150';
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

    await browser.sleep(1000);
    console.log('the element is presented');
    expect(await locator.errorMessage1.getText()).toEqual(AFTER_NFY);
    await cancelButton.click();
 });
 it('Add Expenses After fund Start date WITH Sufficient Fund in NFY(i.e between 1st April 2020- 31st March 2021)', async function () {

    const EXPENSE_DATE = '8/04/2020';
    const TOTAL_AMOUNT = '15';
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

    await browser.sleep(2000);
    console.log('the element is presented');
    expect(await locator.errorMessage1.getText()).toEqual(NFY);
   
 });

});