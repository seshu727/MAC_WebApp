'use strict';
const constants = require('../constant.value.js');
import {
   LoginObject
} from '../login/login.obj'
import {
   SideMenuObject
} from '../side-menu.obj';
import {
   ManageExpenseObject
} from './manage-expenses.obj';
import {
   browser, element
} from 'protractor';
import {
   ExpenseObject
} from '../expenses/expense.obj';


const login = new LoginObject();
const manageExpense = new ManageExpenseObject();
const sideMenuObject = new SideMenuObject();
const locator=new ExpenseObject();

const submitmessage = 'Submitted Successfully';
const saveExpenseBtn = element(by.id('saveExpenseBtn'));
const confirmFormBtn = element(by.id('okButton'));


describe('MANAGE EXPENSES: for residential fund', () => {


   beforeAll(async () => {
      console.log('========> before all in Add All residential Expense');
      await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
      await browser.sleep(2000);

   });

   beforeEach(async function () {
      console.log('========> before each in Add All residential Expense');
      await browser.waitForAngularEnabled(false);
      //  await verificationPopElm.dismissVerificationIfExist();
      await sideMenuObject.changeFundType('Residential');
      await sideMenuObject.openManageExpenseTab();
      await browser.sleep(2000);
   });

   xit('edit,Update and submit invoice  Housing expense', async () => {

      await manageExpense.editExpense('Housing', 0);
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(true);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Housing', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });

 /*  it('edit,Update and submit invoice Utilities expense', async () => {

      await manageExpense.editExpense('Utilities', 0);
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Utilities', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });

   it('edit,Update and submit invoice  Transportation  expense', async () => {

      await manageExpense.editExpense('Transportation', 0);
      expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Transportation', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });*/

   xit('edit,Update and submit invoice  Support Worker  expense', async () => {

      await manageExpense.editExpense('Support Worker', 0);
      //expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await element(by.name('DOSCtrl')).clear();
      await element(by.name('DOSCtrl')).sendKeys('10/10/2019');
      await locator.saveAction(true);

      await manageExpense.submitInvoice('Support Worker', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
 xit('edit,Update and submit invoice  Staff Allowancer  expense', async () => {

      await manageExpense.editExpense('Staff Allowance', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Staff Allowance', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
    });
 xit('edit,Update and submit invoice  Renovation  expense', async () => {

      await manageExpense.editExpense('Renovation', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Renovation', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
xit('edit,Update and submit invoice  Professional Development expense', async () => {

      await manageExpense.editExpense('Professional Development', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Professional Development', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice  Personal needs expense', async () => {

      await manageExpense.editExpense('Personal needs', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Personal needs', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice  Other expense', async () => {

      await manageExpense.editExpense('Other', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Other', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice  Mileage expense', async () => {

      await manageExpense.editExpense('Mileage', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Mileage', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Membership expense', async () => {

      await manageExpense.editExpense('Membership', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Membership', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Insurance expense', async () => {

      await manageExpense.editExpense('Insurance', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Insurance', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Home Maintenance expense', async () => {

      await manageExpense.editExpense('Home Maintenance', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Home Maintenance', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Furnishings expense', async () => {

      await manageExpense.editExpense('Furnishings', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Furnishings', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Food / House supplies expense', async () => {

      await manageExpense.editExpense('Food / House supplies', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Food / House supplies', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Equipment expense', async () => {

      await manageExpense.editExpense('Equipment', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Equipment', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Community Programs expense', async () => {

      await manageExpense.editExpense('Community Programs', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Community Programs', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Community Events expense', async () => {

      await manageExpense.editExpense('Community Events', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Community Events', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Client Vacation Supports expense', async () => {

      await manageExpense.editExpense('Client Vacation Supports', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Client Vacation Supports', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });
it('edit,Update and submit invoice Administration Fee expense', async () => {

      await manageExpense.editExpense('Administration Fee', 0);
     // expect(await manageExpense.saveExpensesBtn.isEnabled()).toBe(false);
      await manageExpense.updateResidentialExpenseInfo(true);

      await manageExpense.submitInvoice('Administration Fee', 0, 'approveResidential', 'Residential');
      await browser.sleep(1000);
      expect(await manageExpense.submitSuccessmessage.getText()).toEqual(submitmessage);
   });

});