import {
   element,
   browser,
   protrator,
   Key
} from 'protractor';
import {
   ExpenseObject
} from '../expenses/expense.obj';
import {
   all
} from 'q';
export class ManageExpenseObject {
   constructor() {

      this.locator = new ExpenseObject();

      this.statusListFilter = element(by.id('expenseStatusList'));
      this.expenseTypeFilter = element(by.id('expenseTypeFilter'));
      this.searchButton = element(by.id('applyBtn'));
      this.cancelButton = element(by.id('cancelBtn'));
      this.saveExpensesBtn = element(by.id('saveExpenseBtn'));
      this.submitSuccessmessage = element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));
       
      this.removeButton=element(by.id('removeExpensePassport'));
   }

   async searchForExpense(expenseType) {
      // await this.statusListFilter.isPresent();
      //  await this.statusListFilter.click();
      //  await element(by.id('Select All')).click();
      //  $('body').sendKeys(protractor.Key.ESCAPE);
      await this.expenseTypeFilter.isPresent();
      await this.expenseTypeFilter.click();
      await browser.sleep(500);
      await element(by.id(expenseType)).click();
      await element(by.css('input[placeholder="Date to"]')).sendKeys(Key.chord(Key.CONTROL, 'a'));
      await browser.sleep(500);
      await element(by.css('input[placeholder="Date to"]')).sendKeys('5/31/2020');
      await browser.sleep(1000);
     // $('body').sendKeys(protractor.Key.ESCAPE);
       $('body').sendKeys(protractor.Key.ESCAPE);
      await this.searchButton.click();
   }

   async editExpense(expenseType, expenseIndex) {
      console.log('before: search for expense n open for edit');
      await this.searchForExpense(expenseType);
      const expenseCard = element(by.id(`${expenseType}${expenseIndex}`))
      await expenseCard.isPresent();
      await expenseCard.click();
      console.log('after: search for expense n open for edit');
   }


   async updateExpenseInfo(withConfirm) {
      const START_DATE = '7/15/2019';
      const END_DATE = '10/20/2019';

      await this.locator.startDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
      await this.locator.startDate.sendKeys(START_DATE);
      await this.locator.endDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
      await this.locator.endDate.sendKeys(END_DATE);
      await this.locator.saveAction(withConfirm);
   }

   async updateResidentialExpenseInfo(withConfirm) {
      const EXPENSESDATE = '10/10/2019';

      await this.locator.expenseDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
      await browser.sleep(500);
      await this.locator.expenseDate.clear();
      await browser.sleep(1000);
      await this.locator.expenseDate.sendKeys(EXPENSESDATE);
      await this.locator.saveAction(withConfirm);
      await browser.sleep(3000);
   }

   async updateSingleDateExpense(withConfirm) {
      const DATE = '10/10/2019';

      await this.locator.bdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
      await this.locator.bdate.sendKeys(DATE);
      await this.locator.saveAction(withConfirm);
   }

   async submitInvoice(expenseType, index, approve, fundType = 'passport') {
      console.log('before: submit invoice');
      await this.searchForExpense(expenseType);
      await browser.sleep(500);
      if (fundType !== 'Residential') {
         await this.searchForExpense(expenseType);
      }
      await element(by.id(`${expenseType}${index}checkBox`)).click();
      await element(by.id('createInvoice')).click();
      await browser.sleep(1000);
      // $('button[name="approval"]').click();

      await element(by.id(approve)).click(); //approvePassport2
      await element(by.id('nextBtn')).click();
      await browser.sleep(4000);
      if (fundType !== 'Residential') {
         console.log('before select payee');
         await element(by.id('payeeId0')).click();
         await element(by.css('form[class="ng-star-inserted ng-dirty ng-valid ng-touched"]')).all(by.tagName('button')).get(1).click()
         console.log('after select payee');
         await browser.sleep(3000);
      }
      await element(by.id('submitToAgencyIdButton')).click(); //submit to regional office button
      await browser.sleep(12000);
      console.log('after: submit invoice');
   }
   async submitSSAHInvoice(expenseType, index) {
      console.log('before: submit invoice');
      await this.searchForExpense(expenseType);
      await element(by.id(`${expenseType}${index}checkBox`)).click();
      await element(by.id('createInvoice')).click();
      await browser.sleep(1000);
      // $('button[name="approval"]').click();

      await element(by.id('approveSsah')).click(); //approvePassport2
      await element(by.id('nextBtn')).click();
      await browser.sleep(5000);
      await element(by.id('submitToAgencyIdButton')).click(); //submit to regional office button
      await browser.sleep(10000);
      console.log('after: submit invoice');
   }
   async deleteconfirmation(id) {
      await element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button')).get(id).click();
   }

   async DeleteExpenses(id){
      const expense=await element(by.css('div[class="ng-star-inserted"]')).all(by.tagName('section')).get(id);
      const del=await element(by.css('div[class="col-auto my-auto"]')).element(by.tagName('button'));
      await del.click();
   }

}