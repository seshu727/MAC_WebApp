'use strict';
const constants = require('../constant.value.js');
import { LoginObject } from '../login/login.obj'
import { SideMenuObject } from '../side-menu.obj';
import { ManageExpenseObject } from './manage-expenses.obj';
import { VerificationActionPopup } from '../verification-action-popup.obj';
import { browser,  Key, element } from 'protractor';
import { ExpenseObject } from '../expenses/expense.obj'

const login = new LoginObject();
const manageExpense = new ManageExpenseObject();
const verificationPopElm = new VerificationActionPopup();
const sideMenuObject = new SideMenuObject();
const locator = new ExpenseObject();
 
const submitmessage='Please check the status of the submission in the Invoices section after 2 minutes.';

describe('MANAGE EXPENSES: for passport fund', () => {


   beforeAll(async () => {
      console.log('========> before all in Add All Expense');
      await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
      await browser.sleep(3000);
   })

   beforeEach(async function () {
      console.log('========> before each in Add All Expense');
      await browser.waitForAngularEnabled(false);
      await sideMenuObject.selectRecipient('recipient-selection-option-Letitia_Vennie');
      await sideMenuObject.openDashboardTab()
      await sideMenuObject.openManageExpenseTab();
      await browser.sleep(2000);
   });

  it('edit and Update Mileage expense', async () => {
     
      await manageExpense.editExpense('Mileage', 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo();
      await browser.sleep(1000);
   });
  
   it('submit invoice for Mileage expense', async () => {
       
          await manageExpense.submitInvoice('Mileage',0,'approvePassport2');
          await browser.sleep(1000);
          expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);

   });
  
   it('edit and Update  Administration  expense', async () => {
     
      await manageExpense.editExpense('Administration',0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
   it('submit invoice for  Administration  expense', async () => {
       
          await manageExpense.submitInvoice('Administration',0,'approvePassport2');
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it('edit and Update  Annual Transit Pass  expense', async () => {
     
      await manageExpense.editExpense('Annual Transit Pass',0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
      it('submit invoice for  Annual Transit Pass  expense', async () => {
       
          await manageExpense.submitInvoice('Annual Transit Pass',0,'approvePassport2');
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it('edit and Update  Camp expense', async () => {
     
      await manageExpense.editExpense('Camp', 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
      it('submit invoice for  Camp  expense', async () => {
       
          await manageExpense.submitInvoice('Camp',0,'approvePassport2');
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it('edit and Update  Client Vacation Supports expense', async () => {
     
      await manageExpense.editExpense('Client Vacation Supports', 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
      it('submit invoice for  Client Vacation Supports  expense', async () => {
       
          await manageExpense.submitInvoice('Client Vacation Supports',0,'approvePassport2');
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it('edit and Update  Community Events expense', async () => {
     
      await manageExpense.editExpense('Community Events', 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
      it('submit invoice for  Community Events  expense', async () => {
       
          await manageExpense.submitInvoice('Community Events',0,'approvePassport2');
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
  it('edit and Update  Day Programs expense', async () => {
     
      await manageExpense.editExpense('Day Programs', 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
   it('submit invoice for  Day Programs  expense', async () => {
       
          await manageExpense.submitInvoice('Day Programs',0,'approvePassport2'); 
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it('edit and Update  Other expense', async () => {
     
      await manageExpense.editExpense('Other',0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
   it('submit invoice for  Other  expense', async () => {
       
          await manageExpense.submitInvoice('Other',0,'approvePassport2'); 
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it('edit and Update  Out-of-Home Respite expense', async () => {
     
      await manageExpense.editExpense('Out-of-Home Respite', 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
   it('submit invoice for  Out-of-Home Respite  expense', async () => {
       
          await manageExpense.submitInvoice('Out-of-Home Respite',0,'approvePassport2'); 
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it('edit and Update  Person-Directed Planning expense', async () => {
     
      await manageExpense.editExpense('Person-Directed Planning', 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
   it('submit invoice for  Person-Directed Planning  expense', async () => {
       
          await manageExpense.submitInvoice('Person-Directed Planning',0,'approvePassport2'); 
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it('edit and Update  Supplies expense', async () => {
     
      await manageExpense.editExpense('Supplies',0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
   it('submit invoice for Supplies expense', async () => {
       
          await manageExpense.submitInvoice('Supplies',0,'approvePassport2'); 
          await browser.sleep(1000);
          expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it("edit and Update  Support Worker's Meals expense", async () => {
     
      await manageExpense.editExpense("Support Worker's Meals", 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
   it("submit invoice for  Support Worker's Meals expense", async () => {
       
          await manageExpense.submitInvoice("Support Worker's Meals",0,'approvePassport2'); 
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it("edit and Update  Transportation expense", async () => {
     
      await manageExpense.editExpense("Transportation", 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
   it("submit invoice for  Transportation expense", async () => {
       
          await manageExpense.submitInvoice("Transportation", 0,'approvePassport2'); 
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
   it('edit and Update Membership expense', async () => {
     
      await manageExpense.editExpense('Membership', 0);
      // if (locator.amount.isEnabled) {
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateExpenseInfo(true);
      await browser.sleep(1000);
   });
  
    it('submit invoice for Membership expense', async () => {
       
          await manageExpense.submitInvoice('Membership', 0,'approvePassport2');
          await browser.sleep(1000);
         expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
}); 

   describe('MANAGE EXPENSES: Delete expenses ', () => {

      it('delete any of expenses', async () => {
            
         await manageExpense.searchForExpense('Support Worker');
         await element(by.id(`${'Support Worker'}${0}`)).element(by.tagName('button')).click();
         await browser.sleep(1000);
         await element(by.id('removeExpensePassport')).click();
         await manageExpense.deleteconfirmation(1);
        await browser.sleep(2000);
        expect(await manageExpense.submitSuccessmessage.getText()).toEqual('Expense has been deleted successfully');
 });


});

  /*  describe('MANAGE EXPENSES: for passport fund', () => {

        it('edit supplies expense', async () => {
              await browser.sleep(3000);
      // await manageExpense.editExpense('Supplies', 0);

      // expect(await element(by.id('saveExpenseBtn')).isEnabled()).toBe(false);
      // await element(by.id('cancelBtn')).click();


               await manageExpense.editExpense('Supplies', 1);
               await manageExpense.updateExpenseInfo(true);
       });
   });

describe('MANAGE EXPENSES: for passport fund', () => {

   it('edit other expense', async () => {
      await browser.sleep(3000);
      // await manageExpense.editExpense('Other', 0);

      // expect(await element(by.id('saveExpenseBtn')).isEnabled()).toBe(false);
      // await element(by.id('cancelBtn')).click();


      await manageExpense.editExpense('Other', 0);
      await manageExpense.updateExpenseInfo(true);
   });
}
   );

   describe('MANAGE EXPENSES: submit invoices for passport fund', () => {

      it('submit invoice for subblies expense', async () => {
         await sideMenuObject.selectRecipient('minh Corrina udat tet');
         await manageExpense.submitInvoice('Supplies', 0, 'approvePassport2');
   });*/

