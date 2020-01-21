'use strict';
const constants = require('../constant.value.js');
import { LoginObject } from '../login/login.obj'
import { SideMenuObject } from '../side-menu.obj';
import { ManageExpenseObject } from './manage-expenses.obj';
import { submitExpenseObj } from '../manageExpenses/ssah_Submit_Exp.po.js';
import { browser,  Key, element } from 'protractor';

const login = new LoginObject();
const submit = new submitExpenseObj();
const sideMenuObject = new SideMenuObject();
const manage=new ManageExpenseObject();
 
const submitmessage='Submitted Successfully';

describe('MANAGE EXPENSES: for SSAH fund', () => {


   beforeAll(async () => {
      console.log('========> before all in Add All Expense');
      await login.loginAction(constants.EMAIL_DEV_SSAH, constants.PASSWORD_DEV_SSAH, constants.WEBSITE_DEV_URL);
      await browser.sleep(3000);
   })

   beforeEach(async function () {
      console.log('========> before each in Add All Expense');
          await browser.waitForAngularEnabled(false);
        //  await verificationPopElm.dismissVerificationIfExist();
          await sideMenuObject.openManageExpenseTab();
          await browser.sleep(2000);
   });

   it('Edit and Update the  Adminstration Fee expense ', async function () {
           await manage.editExpense('Administration Fee',0);
           expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
           await manage.updateSingleDateExpense(true);
           await browser.sleep(1000);
   });
   it('submit invoice for Adminstration Fee  expense', async () => {
       
           await manage.submitSSAHInvoice('Administration Fee',0);
           await browser.sleep(1000);
           expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

     });
  it('Edit and Update the   Advertising (Special Services Worker) expense ', async function () {
            await manage.editExpense('Advertising (Special Services Worker)',0);
            expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
            await manage.updateExpenseInfo(true);
            await browser.sleep(1000);
      });
    it('submit invoice for  Advertising (Special Services Worker) expense', async () => {
   
             await manage.submitSSAHInvoice('Advertising (Special Services Worker)',0);
             await browser.sleep(1000);
             expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

       });
   it('Edit and Update the   Basic Supplies expense ', async function () {
             await manage.editExpense('Basic Supplies',0);
             expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
             await manage.updateSingleDateExpense(true);
             await browser.sleep(1000);
      });
   it('submit invoice for  Basic Supplies expense', async function() {
   
            await manage.submitSSAHInvoice('Basic Supplies',0);
            await browser.sleep(1000);
            expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

      });
   it('Edit and Update the  Gym Membership Fees  expense ', async function () {
             await manage.editExpense('Gym Membership Fees',0);
             expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
             await manage.updateExpenseInfo(true);
             await browser.sleep(1000);
      });
   it('submit invoice for  Gym Membership Fees  expense', async function() {
   
             await manage.submitSSAHInvoice('Gym Membership Fees',0);
             await browser.sleep(1000);
             expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

      });
   it('Edit and Update the  Mainstream Camp / Recreation Programs  expense ', async function () {
             await manage.editExpense('Mainstream Camp / Recreation Programs',0);
             expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
             await manage.updateExpenseInfo(true);
             await browser.sleep(1000);
      });
   it('submit invoice for  Mainstream Camp / Recreation Programs  expense', async function() {
   
            await manage.submitSSAHInvoice('Mainstream Camp / Recreation Programs',0);
            await browser.sleep(1000);
            expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

       });
   it('Edit and Update the Home Keeping  expense ', async function () {
             await manage.editExpense('Home Keeping',0);
             expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
             await manage.updateExpenseInfo(true);
             await browser.sleep(1000);
     });
   it('submit invoice for  Home Keeping  expense', async function() {
   
             await manage.submitSSAHInvoice('Home Keeping',0);
             await browser.sleep(1000);
             expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

      });

   it('Edit and Update the Daycare/Nursery School  expense ', async ()=>{
             await manage.editExpense('Daycare/Nursery School',0);
             expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
             await manage.updateExpenseInfo(true);
             await browser.sleep(1000);
     });
 
   it('submit invoice for  Daycare/Nursery School  expense', async () => {
   
             await manage.submitSSAHInvoice('Daycare/Nursery School',0);
             await browser.sleep(1000);
             expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

    });
   
   it('Edit and Update the Extraordinary Childcare (Children aged 12 and above)  expense ', async function(){
              await manage.editExpense('Extraordinary Childcare (Children aged 12 and above)',0);
              expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
              await manage.updateExpenseInfo(true);
              await browser.sleep(1000);
    });

   it('submit invoice for  Extraordinary Childcare (Children aged 12 and above)  expense', async function()  {
 
            await manage.submitSSAHInvoice('Extraordinary Childcare (Children aged 12 and above)',0);
            await browser.sleep(1000);
            expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

     });

   it('Edit and Update the Nursing (Medically Fragile Children)  expense ', async function () {
            await manage.editExpense('Nursing (Medically Fragile Children)',0);
            expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
            await manage.updateExpenseInfo(true);
            await browser.sleep(1000);
     });

   it('submit invoice for  Nursing (Medically Fragile Children)  expense', async function() {
 
           await manage.submitSSAHInvoice('Nursing (Medically Fragile Children)',0);
           await browser.sleep(1000);
           expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

      });
   it('Edit and Update the Membership Fees (Special Needs Association)  expense ', async function () {
           await manage.editExpense('Membership Fees (Special Needs Association)',0);
           expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
           await manage.updateExpenseInfo(true);
           await browser.sleep(1000);
    });

   it('submit invoice for  Membership Fees (Special Needs Association) expense', async function () {
 
       await manage.submitSSAHInvoice('Membership Fees (Special Needs Association)',0);
       await browser.sleep(1000);
       expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

   });

  it('Edit and Update the Specialized Camps / Recreation Programs expense ', async function () {
      await manage.editExpense('Specialized Camps / Recreation Programs',0);
      expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
      await manage.updateExpenseInfo(true);
      await browser.sleep(1000);
    });

   it('submit invoice for  Specialized Camps / Recreation Programs expense', async function ()  {
 
       await manage.submitSSAHInvoice('Specialized Camps / Recreation Programs',0);
       await browser.sleep(1000);
       expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

   });
   it('Edit and Update the  Training  expense ', async function () {
      await manage.editExpense('Training',0);
      expect(await manage.saveExpensesBtn.isEnabled()).toBe(false);
      await manage.updateExpenseInfo(true);
      await browser.sleep(1000);
    });

   it('submit invoice for  Training  expense', async function ()  {
 
       await manage.submitSSAHInvoice('Training',0);
       await browser.sleep(1000);
       expect(await manage.submitSuccessmessage.getText()).toEqual(submitmessage);

   });

   it('Cancel Invoice before submit', async function () {

      await manage.searchForExpense('Training');
      await element(by.id(`${'Training'}${0}checkBox`)).click();
      await element(by.id('createInvoice')).click();
      await browser.sleep(2000);
      // $('button[name="approval"]').click();

      await element(by.id('approveSsah')).click(); //approvePassport2
      await element(by.id('nextBtn')).click();
      await browser.sleep(5000);
      await element(by.buttonText('Cancel')).click();
      expect(await manage.submitSuccessmessage.isPresent()).toBe(false);
      
   });

  /* xit('Select all type of dated invoices and Try to Submit', function () {
      const selectAllExpenses = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]')).element(by.tagName('mat-checkbox')).click();
      // const ErrorMessage=element(by.tagName('snack-bar-container')).element(by.tagName('span')).getText();


      // Submit.selectExpense(0);
      browser.actions().mouseMove(selectAllExpenses).perform();
      // browser.sleep(1000);
      expect(element(by.buttonText('Create Invoice')).isEnabled()).toBeTruthy();
      element(by.buttonText('Create Invoice')).click();
      browser.sleep(1000);
      // expect(ErrorMessage).toEqual('');
   });

   xit('Submit Multiple expenses ', function () {
      const allExpenses = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]')).all(by.tagName('mat-checkbox'));



      element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]')).element(by.tagName('mat-checkbox')).click();
      browser.sleep(1000);
      allExpenses.get(4).click();
      allExpenses.get(5).click();
      browser.actions().mouseMove(CretaeInvoiceBtn).click().perform();
      browser.actions().mouseMove(Disclimar_check).click().perform();
      browser.actions().mouseMove(NextBtn).click().perform();
      browser.sleep(20000);
      ReginalOfficeBtn.click();
      browser.sleep(2000);
   });*/

});