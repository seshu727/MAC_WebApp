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




const login = new LoginObject();
const sideMenuAction = new SideMenuObject();
const locator=new ExpenseObject();


const saveExpenseBtn = element(by.id('saveExpenseBtn'));
const confirmFormBtn = element(by.id('okButton'));

const requiredError=element(by.css('div[class="ng-star-inserted"]')).all(by.tagName('span'));
const cancelButton=element(by.buttonText('Cancel'));

describe('EXPENSES ERROR VALIDATIONS: for residential fund', () => {


   beforeAll(async () => {
      console.log('========> before all in Add All residential Expense');
      await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
      await browser.sleep(2000);

   });

   beforeEach(async function () {
      console.log('========> before each in Add All residential Expense');
      await browser.waitForAngularEnabled(false);
      //  await verificationPopElm.dismissVerificationIfExist();
      await sideMenuAction.changeFundType('Residential');
      await sideMenuAction.openDashboardTab();
      await sideMenuAction.openExpenseTab();
      await browser.sleep(2000);
   });
 it('Check the Field error Validations for Housing expenses', async () => {
       
      await locator.clickExpenseListItem('Housing');

      await locator.expenseDate.sendKeys('  ');
      await locator.amount.sendKeys('   ');
      await locator.paidTo.sendKeys('   ');

      await locator.typeCtrl.click();
      await locator.typeCtrlList.isPresent();
      console.log('select typeCtrl list');
      await locator.typeCtrlList.get(0).click();  
      await requiredError.isPresent();
      console.log('Error Validation displaying ');
      expect(await requiredError.get(1).getText()).toEqual('Required');
      expect(await saveExpenseBtn.isEnabled()).toBe(false);
      await locator.amount.sendKeys('546464654');
      await browser.sleep(500);
     // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
      browser.actions().mouseMove(await cancelButton).perform();
      await cancelButton.click();
    });
    it('Check the Field error Validations for Utilities expenses', async () => {
       
        await locator.clickExpenseListItem('Utilities');
  
        await locator.expenseDate.sendKeys('  ');
        await locator.amount.sendKeys('   ');
        await locator.paidTo.sendKeys('   ');
  
        await locator.typeCtrl.click();
        await locator.typeCtrlList.isPresent();
        console.log('select typeCtrl list');
        await locator.typeCtrlList.get(0).click();  
        await requiredError.isPresent();
        console.log('Error Validation displaying ');
        expect(await requiredError.get(1).getText()).toEqual('Required');
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await locator.amount.sendKeys('546464654');
        await browser.sleep(500);
       // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
       browser.actions().mouseMove(await cancelButton).perform();
       await cancelButton.click();
      });
    it('Check the Field error Validations for Home Maintenance expenses', async () => {
       
        await locator.clickExpenseListItem('Home Maintenance');
  
        await locator.expenseDate.sendKeys('  ');
        await locator.amount.sendKeys('   ');
        await locator.paidTo.sendKeys('   ');
  
        await locator.typeCtrl.click();
        await locator.typeCtrlList.isPresent();
        console.log('select typeCtrl list');
        await locator.typeCtrlList.get(0).click();  
        await requiredError.isPresent();
        console.log('Error Validation displaying ');
        expect(await requiredError.get(1).getText()).toEqual('Required');
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await locator.amount.sendKeys('546464654');
        await browser.sleep(500);
       // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
       browser.actions().mouseMove(await cancelButton).perform();
       await cancelButton.click();
      });
    it('Check the Field error Validations for Renovation expenses', async () => {
       
        await locator.clickExpenseListItem('Renovation');
  
        await locator.expenseDate.sendKeys('  ');
        await locator.amount.sendKeys('   ');
        await locator.paidTo.sendKeys('   ');
    
        await requiredError.isPresent();
        console.log('Error Validation displaying ');
        expect(await requiredError.get(1).getText()).toEqual('Required');
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await locator.amount.sendKeys('546464654');
        await browser.sleep(500);
       // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
       browser.actions().mouseMove(await cancelButton).perform();
       await cancelButton.click();
      });
    it('Check the Field error Validations for Furnishings expenses', async () => {
       
        await locator.clickExpenseListItem('Furnishings');
  
        await locator.expenseDate.sendKeys('  ');
        await locator.amount.sendKeys('   ');
        await locator.paidTo.sendKeys('   ');
  
          
        await requiredError.isPresent();
        console.log('Error Validation displaying ');
        expect(await requiredError.get(1).getText()).toEqual('Required');
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await locator.amount.sendKeys('546464654');
        await browser.sleep(500);
       // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
       browser.actions().mouseMove(await cancelButton).perform();
       await cancelButton.click();
      });
    it('Check the Field error Validations for Food / House supplies expenses', async () => {
       
        await locator.clickExpenseListItem('Food / House supplies');
  
        await locator.expenseDate.sendKeys('  ');
        await locator.amount.sendKeys('   ');
        await locator.paidTo.sendKeys('   ');
  
         
        await requiredError.isPresent();
        console.log('Error Validation displaying ');
        expect(await requiredError.get(1).getText()).toEqual('Required');
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await locator.amount.sendKeys('546464654');
        await browser.sleep(500);
       // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
       browser.actions().mouseMove(await cancelButton).perform();
       await cancelButton.click();
      });
    it('Check the Field error Validations for Personal needs expenses', async () => {
       
        await locator.clickExpenseListItem('Personal needs');
  
        await locator.expenseDate.sendKeys('  ');
        await locator.amount.sendKeys('   ');
        await locator.paidTo.sendKeys('   ');
  
       
        await requiredError.isPresent();
        console.log('Error Validation displaying ');
        expect(await requiredError.get(1).getText()).toEqual('Required');
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await locator.amount.sendKeys('546464654');
        await browser.sleep(500);
       // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
       browser.actions().mouseMove(await cancelButton).perform();
       await cancelButton.click();
      });
    it('Check the Field error Validations for Insurance expenses', async () => {
       
        await locator.clickExpenseListItem('Insurance');
  
        await locator.expenseDate.sendKeys('  ');
        await locator.amount.sendKeys('   ');
        await locator.paidTo.sendKeys('   ');
  
        
        await requiredError.isPresent();
        console.log('Error Validation displaying ');
        expect(await requiredError.get(1).getText()).toEqual('Required');
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await locator.amount.sendKeys('546464654');
        await browser.sleep(500);
       // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
       browser.actions().mouseMove(await cancelButton).perform();
       await cancelButton.click();
      });
    it('Check the Field error Validations for Equipment expenses', async () => {
       
        await locator.clickExpenseListItem('Equipment');
  
        await locator.expenseDate.sendKeys('  ');
        await locator.amount.sendKeys('   ');
        await locator.paidTo.sendKeys('   ');
   
        await requiredError.isPresent();
        console.log('Error Validation displaying ');
        expect(await requiredError.get(1).getText()).toEqual('Required');
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await locator.amount.sendKeys('546464654');
        await browser.sleep(500);
       // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
       browser.actions().mouseMove(await cancelButton).perform();
       await cancelButton.click();
      });
 it('Check the Field error Validations for Transportation expense', async function () {

        const EXPENSE_DATE = '   ';
        const TOTAL_AMOUNT = '52132133';
       
        await locator.clickExpenseListItem('Transportation');
  
        await locator.expenseDate.sendKeys(EXPENSE_DATE);
        await locator.amount.sendKeys(TOTAL_AMOUNT);
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        await locator.nameOfSupportWorker.click();
        await locator.supportWorkerList.isPresent();
        console.log('select providedby list');
        await locator.supportWorkerList.get(0).click();
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
     
        
     });
  
     it('Check the Field error Validations for Mileage expense', async function () {
  
        const EXPENSE_DATE = '';
        const TOTAL_AMOUNT = '52132131';
       
        await locator.clickExpenseListItem('Mileage');
  
        await locator.expenseDate.sendKeys(EXPENSE_DATE);
        await locator.amount.sendKeys(TOTAL_AMOUNT);
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        await locator.nameOfSupportWorker.click();
        await locator.supportWorkerList.isPresent();
        console.log('select providedby list');
        await locator.supportWorkerList.get(0).click();
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        // expect(await requiredError.get(4).getText()).toEqual('sssds'); 
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
        
  
     });
  
     it('Check the Field error Validations for Support Worker expense', async function () {
  
        const EXPENSE_DATE = '        ';
        const TOTAL_AMOUNT = '           ';
        const PAID_TO = '          ';
  
        await locator.clickExpenseListItem('Support Worker');
  
        await element(by.name('DOSCtrl')).sendKeys(EXPENSE_DATE);
        await locator.paidTo.sendKeys(PAID_TO);
        await locator.cost.sendKeys(TOTAL_AMOUNT);
        expect(await requiredError.get(1).getText()).toEqual('Required');

        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
      });
 it('Check the Field error Validations for Support Worker expense with Hourly rate option', async function () {
  
        const EXPENSE_DATE = '        ';
        const PAID_TO = '          ';
  
        await locator.clickExpenseListItem('Support Worker');
  
        await element(by.name('DOSCtrl')).sendKeys(EXPENSE_DATE);
        await locator.paidTo.sendKeys(PAID_TO);
        expect(await requiredError.get(1).getText()).toEqual('Required');
        await locator.radioButton.get(1).click();
        await locator.noOfHours.sendKeys('54545');
     //   expect(await requiredError.get(2).getText()).toEqual('Required');
        await locator.hourlyRate.sendKeys('54646');
       // expect(await requiredError.get(2).getText()).toEqual(' Maximum value is: $999.99 ');

        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
      });
   it('Check the Field error Validations for Community Events expense', async function () {

        const EXPENSE_DATE = '1212';
        const TOTAL_AMOUNT = '      ';
        const PAID_TO = '       ';
  
        await locator.clickExpenseListItem('Community Events');
  
        await locator.expenseDate.sendKeys(EXPENSE_DATE);
        await locator.paidTo.sendKeys(PAID_TO);
        await locator.amount.sendKeys(TOTAL_AMOUNT);
        await browser.sleep(500);
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
     });
     it('Check the Field error Validations for Community Programs expense', async function () {
  
        const EXPENSE_DATE = '';
        const TOTAL_AMOUNT = '546546546';
        const PAID_TO = '       ';
  
        await locator.clickExpenseListItem('Community Programs');
  
        await locator.expenseDate.sendKeys(EXPENSE_DATE);
        await locator.paidTo.sendKeys(PAID_TO);
        await locator.amount.sendKeys(TOTAL_AMOUNT);
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
     });
     it('Check the Field error Validations for Membership expense', async function () {
  
        const EXPENSE_DATE = '     ';
        const TOTAL_AMOUNT = 'khjkh';
        const PAID_TO = '   ';
        const DESCRIPTION='test for residential'
  
        await locator.clickExpenseListItem('Membership');
  
        await locator.expenseDate.sendKeys(EXPENSE_DATE);
        await locator.paidTo.sendKeys(PAID_TO);
        await locator.amount.sendKeys(TOTAL_AMOUNT);
        await locator.description.sendKeys(DESCRIPTION);
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
      });
it('Check the Field error Validations for Administration Fee expense', async function () {

        const EXPENSE_DATE = '   ';
        const TOTAL_AMOUNT = '   ';
        const ORGANISER = '    ';
        const DESCRIPTION='test for residential'
  
        await locator.clickExpenseListItem('Administration Fee');
  
        await locator.expenseDate.sendKeys(EXPENSE_DATE);
        await element(by.name('orgNameCtrl')).sendKeys(ORGANISER);
        await locator.amount.sendKeys(TOTAL_AMOUNT);
        await locator.description.sendKeys(DESCRIPTION);
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
     });
it('Check the Field error Validations for Client Vacation Supports expense', async function () {
  
        const EXPENSE_DATE = '8';
        const TOTAL_AMOUNT = '      ';
        const PAID_TO = ' sj^*&^232';
        const DESCRIPTION='test for residential'
  
        await locator.clickExpenseListItem('Client Vacation Supports');
  
        await locator.expenseDate.sendKeys(EXPENSE_DATE);
        await locator.paidTo.sendKeys(PAID_TO);
        await locator.amount.sendKeys(TOTAL_AMOUNT);
        await locator.description.sendKeys(DESCRIPTION);
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
     });
it('Check the Field error Validations for Professional Development expense', async function () {
  
        const EXPENSE_DATE = '     ';
        const TOTAL_AMOUNT = '    ';
        const PAID_TO = '     ';
        const DESCRIPTION='test for residential'
  
        await locator.clickExpenseListItem('Professional Development');
  
        await locator.expenseDate.sendKeys(EXPENSE_DATE);
        await locator.paidTo.sendKeys(PAID_TO);
        await locator.amount.sendKeys(TOTAL_AMOUNT);
        await locator.description.sendKeys(DESCRIPTION);
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
      });
 it('Check the Field error Validations for Staff Allowance expense', async function () {

      
        const EXPENSE_DATE = '    ';
        const DISTANCE = '    ';
        const RATEFORKM='    ';
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
        expect(await requiredError.get(3).getText()).toEqual('');
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
  
        
      });
 it('Check the Field error Validations for Other expense', async function () {
  
        const EXPENSE_DATE = '    ';
        const TOTAL_AMOUNT = '   ';
        const PAID_TO = '   ';
        const DESCRIPTION='test for residential'
  
        await locator.clickExpenseListItem('Other');
  
        await locator.expenseDate.sendKeys(EXPENSE_DATE);
        await locator.paidTo.sendKeys(PAID_TO);
        await locator.amount.sendKeys(TOTAL_AMOUNT);
        await locator.description.sendKeys(DESCRIPTION);
        expect(await requiredError.get(1).getText()).toEqual('Required');

  
        expect(await saveExpenseBtn.isEnabled()).toBe(false);
        await browser.sleep(500);
        browser.actions().mouseMove(await cancelButton).perform();
        await cancelButton.click();
  
        
  
     });
});