'use strict';
const constants = require('../../constant.value.js');
import {
   LoginObject
} from '../../login/login.obj'
import {
   SideMenuObject
} from '../../side-menu.obj';

import {
   browser, element, ExpectedConditions
} from 'protractor';

import { ExpenseObject } from '../expense.obj.js';

import {
    ManageExpenseObject
 } from '../../manageExpenses/manage-expenses.obj.js';
 




const login = new LoginObject();
const sideMenuAction = new SideMenuObject();
const locator=new ExpenseObject();
const manage =new ManageExpenseObject();


const saveExpenseBtn = element(by.id('saveExpenseBtn'));
const confirmFormBtn = element(by.id('okButton'));

const requiredError=element(by.css('div[class="ng-star-inserted"]')).all(by.tagName('span'));
const cancelButton=element(by.buttonText('Cancel'));

describe('MANAGE EXPENSES-EDIT AND UPDATE: for residential fund', () => {


   beforeAll(async () => {
      console.log('========> before all in manage Expense');
      await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
      await browser.sleep(2000);

   });

   beforeEach(async function () {
      console.log('========> before each in manage Expense');
      await browser.waitForAngularEnabled(false);
      //  await verificationPopElm.dismissVerificationIfExist();
      await sideMenuAction.changeFundType('Residential');
     // await sideMenuAction.openDashboardTab();
      await sideMenuAction.openManageExpenseTab();
      await browser.sleep(2000);
   });
 it('Edit and update Administration Fee', async () => {

      await manage.searchForExpense('Administration Fee');
      await manage.editExpense('Administration Fee',0);
      await browser.sleep(1000);
      await locator.expenseDate.clear();
      await locator.expenseDate.sendKeys('9/9/2019');
      await locator.radioButton.get(1).click();
      await element(by.name('fullNameCtrl')).clear();
      await element(by.name('fullNameCtrl')).sendKeys('MSD');
      await locator.amount.clear();
      await locator.amount.sendKeys('12');
      expect(await saveExpenseBtn.isEnabled()).toBe(true);
      await locator.saveAction(true);
      await browser.sleep(1000);
      
    });
    it('Edit and update Client Vacation Supports ', async () => {

        await manage.searchForExpense('Client Vacation Supports');
        await manage.editExpense('Client Vacation Supports',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('9/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('ROHIT NEW') 
        await locator.amount.clear();
        await locator.amount.sendKeys('11');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
     xit('Edit and update Community Events ', async () => {

        await manage.searchForExpense('Community Events');
        await manage.editExpense('Community Events',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('9/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('ROHIT Test') 
        await locator.amount.clear();
        await locator.amount.sendKeys('9');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
    it('Edit and update Community Programs ', async () => {

        await manage.searchForExpense('Community Programs');
        await manage.editExpense('Community Programs',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('9/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('New Test') 
        await locator.amount.clear();
        await locator.amount.sendKeys('19');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
     it('Edit and update Equipment ', async () => {

        await manage.searchForExpense('Equipment');
        await manage.editExpense('Equipment',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('10/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('Equipment') 
        await locator.amount.clear();
        await locator.amount.sendKeys('1');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
     it('Edit and update Food / House supplies ', async () => {

        await manage.searchForExpense('Food / House supplies');
        await manage.editExpense('Food / House supplies',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('10/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('Akhil Test') 
        await locator.amount.clear();
        await locator.amount.sendKeys('13');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
    it('Edit and update Furnishings ', async () => {

        await manage.searchForExpense('Furnishings');
        await manage.editExpense('Furnishings',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('10/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('Ahmed Test') 
        await locator.amount.clear();
        await locator.amount.sendKeys('14');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
     it('Edit and update Home Maintenance ', async () => {

        await manage.searchForExpense('Home Maintenance');
        await manage.editExpense('Home Maintenance',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('10/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('Ahmed Test') 
        await locator.amount.clear();
        await locator.amount.sendKeys('14');
        await locator.typeCtrl.click();
        await locator.typeCtrlList.get(1).click();
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
     it('Edit and update Housing ', async () => {

        await manage.searchForExpense('Housing');
        await manage.editExpense('Housing',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('10/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('Nasser Test') 
        await locator.amount.clear();
        await locator.amount.sendKeys('11');
        await locator.typeCtrl.click();
        await locator.typeCtrlList.get(1).click();
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
     it('Edit and update Insurance ', async () => {

        await manage.searchForExpense('Insurance');
        await manage.editExpense('Insurance',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('8/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('Hassene Test') 
        await locator.amount.clear();
        await locator.amount.sendKeys('10');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
     it('Edit and update Membership ', async () => {

        await manage.searchForExpense('Membership');
        await manage.editExpense('Membership',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('8/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('yvoune Test') 
        await locator.amount.clear();
        await locator.amount.sendKeys('18');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
    it('Edit and update Mileage ', async () => {

        await manage.searchForExpense('Mileage');
        await manage.editExpense('Mileage',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('8/9/2019');
        await locator.nameOfSupportWorker.click();
        await locator.supportWorkerList.get(1).click();
        await element(by.name('travelDesCtrl')).clear();
        await element(by.name('travelDesCtrl')).sendKeys('Greg Test')
        await locator.amount.clear();
        await locator.amount.sendKeys('2');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
   it('Edit and update Other ', async () => {

        await manage.searchForExpense('Other');
        await manage.editExpense('Other',0);
        await browser.sleep(1000);
        await locator.expenseDate.clear();
        await locator.expenseDate.sendKeys('9/9/2019');
        await locator.paidTo.clear();
        await locator.paidTo.sendKeys('Tim Test') 
        await locator.amount.clear();
        await locator.amount.sendKeys('3');
        expect(await saveExpenseBtn.isEnabled()).toBe(true);
        await locator.saveAction(true);
        await browser.sleep(1000);
        
      });
    it('Edit and update Personal needs ', async () => {

         await manage.searchForExpense('Personal needs');
         await manage.editExpense('Personal needs',0);
         await browser.sleep(1000);
         await locator.expenseDate.clear();
         await locator.expenseDate.sendKeys('8/9/2019');
         await locator.paidTo.clear();
         await locator.paidTo.sendKeys('Tim Test') 
         await locator.amount.clear();
         await locator.amount.sendKeys('5');
         expect(await saveExpenseBtn.isEnabled()).toBe(true);
         await locator.saveAction(true);
         await browser.sleep(1000);
         
       });
   it('Edit and update Professional Development ', async () => {

         await manage.searchForExpense('Professional Development');
         await manage.editExpense('Professional Development',0);
         await browser.sleep(1000);
         await locator.expenseDate.clear();
         await locator.expenseDate.sendKeys('8/10/2019');
         await locator.paidTo.clear();
         await locator.paidTo.sendKeys('Tim Test') 
         await locator.amount.clear();
         await locator.amount.sendKeys('4');
         expect(await saveExpenseBtn.isEnabled()).toBe(true);
         await locator.saveAction(true);
         await browser.sleep(1000);     
       });
    it('Edit and update Renovation ', async () => {

         await manage.searchForExpense('Renovation');
         await manage.editExpense('Renovation',0);
         await browser.sleep(1000);
         await locator.expenseDate.clear();
         await locator.expenseDate.sendKeys('8/10/2019');
         await locator.paidTo.clear();
         await locator.paidTo.sendKeys('Tim Test') 
         await locator.amount.clear();
         await locator.amount.sendKeys('6');
         expect(await saveExpenseBtn.isEnabled()).toBe(true);
         await locator.saveAction(true);
         await browser.sleep(1000);
       });
   it('Edit and update Staff Allowance ', async () => {

         await manage.searchForExpense('Staff Allowance');
         await manage.editExpense('Staff Allowance',0);
         await browser.sleep(1000);
         await locator.expenseDate.clear();
         await locator.expenseDate.sendKeys('8/10/2019');
         await locator.nameOfSupportWorker.click();
         await locator.supportWorkerList.get(1).click();
         await element(by.name('travelDesCtrl')).clear();
         await element(by.name('travelDesCtrl')).sendKeys('Tim Test') 
         await locator.amount.clear();
         await locator.amount.sendKeys('6');
         expect(await saveExpenseBtn.isEnabled()).toBe(true);
         await locator.saveAction(true);
         await browser.sleep(1000);
       });
   it('Edit and update Support Worker ', async () => {

         await manage.searchForExpense('Support Worker');
         await manage.editExpense('Support Worker',0);
         await browser.sleep(1000);
         await element(by.name('DOSCtrl')).clear();
         await element(by.name('DOSCtrl')).sendKeys('8/10/2019');
         await locator.paidTo.clear();
         await locator.paidTo.sendKeys('Support worker2');
         await locator.Total_Amount.clear();
         await locator.Total_Amount.sendKeys('6');
         expect(await saveExpenseBtn.isEnabled()).toBe(true);
         await locator.saveAction(true);
         await browser.sleep(1000);
       });
  it('Edit and update Transportation ', async () => {

         await manage.searchForExpense('Transportation');
         await manage.editExpense('Transportation',0);
         await browser.sleep(1000);
         await locator.expenseDate.clear();
         await locator.expenseDate.sendKeys('8/10/2019');
         await locator.nameOfSupportWorker.click();
         await locator.supportWorkerList.get(1).click();
         await element(by.name('travelDesCtrl')).clear();
         await element(by.name('travelDesCtrl')).sendKeys('Tim Test') 
         await locator.amount.clear();
         await locator.amount.sendKeys('6');
         expect(await saveExpenseBtn.isEnabled()).toBe(true);
         await locator.saveAction(true);
         await browser.sleep(1000);
       });
    it('Edit and update Utilities ', async () => {

         await manage.searchForExpense('Utilities');
         await manage.editExpense('Utilities',0);
         await browser.sleep(1000);
         await locator.expenseDate.clear();
         await locator.expenseDate.sendKeys('8/10/2019');
         await locator.typeCtrl.click();
         await locator.typeCtrlList.get(1).click();
         await locator.paidTo.clear();
         await locator.paidTo.sendKeys('eline Test') 
         await locator.amount.clear();
         await locator.amount.sendKeys('6');
         expect(await saveExpenseBtn.isEnabled()).toBe(true);
         await locator.saveAction(true);
         await browser.sleep(1000);
       });

   it('check the delete functionality for expenses',async function(){
           
          const removeButton=element(by.id('removeExpenseResidtenatil'));
          const morebutton=element(by.css('div[class="col-auto m-auto"]')).element(by.tagName('button'));
          const deleteButton=element(by.tagName('mat-dialog-actions')).all(by.tagName('button'));

         
          browser.actions().mouseMove(await morebutton).perform();
          await morebutton.click();
          browser.actions().mouseMove(await removeButton).perform();
          await browser.sleep(500);
          await removeButton.click();
          await browser.sleep(500);
          await deleteButton.get(1).click();
          await browser.sleep(4000);
          expect(await locator.errorMessage1.getText()).toEqual('Expense has been deleted successfully');

         
       });
});