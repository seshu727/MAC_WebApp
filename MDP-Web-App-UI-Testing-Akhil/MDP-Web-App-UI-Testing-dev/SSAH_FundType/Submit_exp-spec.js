var Submit_Expense = require('../SSAH_FundType/Submit_Exp.po.js');
var ExpensesPage = require('../SSAH_FundType/Expenses.po.js');
var Submit = new Submit_Expense();
var Exp_Page = new ExpensesPage();

browser.ignoreSynchronization = true;


describe('Submit/Download the Expenses', function () {

   const CretaeInvoiceBtn = element(by.buttonText('Create Invoice'));
   const Disclimar_check = element(by.name('approval'));
   const NextBtn = element(by.buttonText('Next'));
   const ReginalOfficeBtn = element(by.buttonText('Submit to Regional Office'));

   it('should Login with Valid use Details', function () {
      // var AddExpensesPage = new homePage();
      Exp_Page.get();
      browser.sleep(3000);
      expect(Exp_Page.getGreeting()).toEqual('Sign In');
      Exp_Page.Login('ankal.torlapati+106@dartssolutions.com', 'Tester5555');
      browser.sleep(5000);
      Exp_Page.AddExpenseTab(2);
      browser.sleep(4000);
   });
   xit('Submit Adminstration Fee expense ', function () {
      browser.sleep(2000);
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-23')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(2);
      Submit.GenerateInvoice();
   });
   xit('Submit the Advertising (Special Services Worker) Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-24')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(1);
      Submit.GenerateInvoice();
   });
   xit('Submit the Basic Supplies Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-25')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(2);
      Submit.GenerateInvoice();
   });
   xit('Submit the Gym Membership Fees Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-26')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(1);
      Submit.GenerateInvoice();
   });
   xit('Submit the Mainstream Camp / Recreation Programs Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-27')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(2);
      Submit.GenerateInvoice();
   });
   xit('Submit the Membership Fees (Special Needs Association) Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-28')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(2);
      Submit.GenerateInvoice();
   });
   xit('Submit the Specialized Camps / Recreation Programs Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-29')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(1);
      Submit.GenerateInvoice();
   });
   xit('Submit the Training Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-30')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(1);
      Submit.GenerateInvoice();
   });
   xit('Submit the Daycare/Nursery School Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-31')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(1);
      Submit.GenerateInvoice();
   });
   xit('Submit the Extraordinary Childcare (Children aged 12 and above) Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-32')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(1);
      Submit.GenerateInvoice();
   });
   xit('Submit the Home Keeping Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-33')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(1);
      Submit.GenerateInvoice();
   });
   xit('Submit Nursing (Medically Fragile Children) Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-35')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(1);
      Submit.GenerateInvoice();
   });
   xit('Download Nursing (Medically Fragile Children) Expense', function () {
      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-35')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(2);
      Submit.DownloadInvoice();
      browser.sleep(2000);
   });
   xit('Cancel Invoice before submit', function () {

      const CancelButton = element(by.buttonText('Cancel'))
      //  const Review_popup_CancelBtn= element(by.xpath('//*[@id="mat-dialog-title-8"]/button'));//.element(by.tagName('button')).click();


      element(by.id('mat-select-6')).click();
      browser.sleep(3000);
      element(by.id('mat-option-23')).click();
      element(by.buttonText('Apply')).click();
      browser.sleep(2000);
      Submit.selectExpense(1);
      CretaeInvoiceBtn.click();
      Disclimar_check.click();
      NextBtn.click();
      browser.sleep(12000);
      // ReviewButton.click();
      // browser.sleep(2000);
      // browser.actions().mouseMove(Review_popup_CancelBtn).click().perform();
      // browser.sleep(1000);
      browser.actions().mouseMove(CancelButton).click().perform();
      browser.sleep(2000);
   });

   it('Select all type of dated invoices and Try to Submit', function () {
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

   it('Submit Multiple expenses ', function () {
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
   });

});