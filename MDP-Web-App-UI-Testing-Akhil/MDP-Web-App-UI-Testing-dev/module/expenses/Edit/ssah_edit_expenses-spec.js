'use strict';
const constants = require('../../constant.value.js');
import { LoginObject } from '../../login/login.obj'
import { SideMenuObject } from '../../side-menu.obj';
import { browser,  Key, element, ExpectedConditions } from 'protractor';
import { ExpenseObject } from '../../expenses/expense.obj';
import { ManageExpenseObject } from '../../manageExpenses/manage-expenses.obj.js';


let login = new LoginObject();
let sideMenuObject = new SideMenuObject();
let expense=new ExpenseObject();
let manage=new ManageExpenseObject();

describe('SSAH:: Edit and Update expense', function () {


      var statusListFilter = element(by.id('expenseStatusList'));
      var expenseTypeFilter = element(by.id('expenseTypeFilter'));
      var searchButton = element(by.id('applyBtn'));
      var cancelButton = element(by.id('cancelBtn'));
      var saveExpensesBtn = element(by.id('saveExpenseBtn'));



   // eslint-disable-next-line no-unused-vars
   const saveAction = async (withConfirm = false) => {
      const expenseForm = element(by.xpath('//app-expense/form/mat-dialog-actions/button[2]'));
      await expenseForm.isPresent();
      await expenseForm.click();

      if (withConfirm) {
         const expenseConfirmForm = element(by.xpath('//app-expense-warning/mat-dialog-actions/button[2]'));
         await expenseConfirmForm.isPresent();
         await expenseConfirmForm.click();
      }
   };

   beforeAll(async () => {
      console.log('========> before all in Add All Expense');
      await login.loginAction(constants.EMAIL_DEV_SSAH, constants.PASSWORD_DEV_SSAH, constants.WEBSITE_DEV_URL);
   });

   beforeEach(async function () {
      console.log('========> before each in Add All Expense');
      await browser.waitForAngularEnabled(false);
      await sideMenuObject.openDashboardTab();
      await sideMenuObject.openManageExpenseTab();
      await browser.sleep(2000);
   });

   it('Edit and Update Adminstration Fee Expense', async function () {

           const DATE='9/19/2019';
           const PAIDTO='Sunder Pichai';
           const AMOUNT='15';

      
            await manage.editExpense('Administration Fee',0);
            await browser.sleep(500);
            await expense.payment_date.sendKeys(Key.chord(Key.CONTROL, 'a'));
            await expense.payment_date.sendKeys(DATE);
            await expense.paidTo.sendKeys(Key.chord(Key.CONTROL, 'a'));
            await expense.paidTo.sendKeys(PAIDTO);
            await expense.amount.sendKeys(Key.chord(Key.CONTROL, 'a'));
            await expense.amount.sendKeys(AMOUNT);
            expect(await saveExpensesBtn.isEnabled()).toBe(true);
            await saveAction(true);
            await browser.sleep(1000);

       });

    it('Edit and Update Advertising (Special Services Worker)', async  function () {
            
              const DESCRIPTION='Updated Description';
              const AMOUNT='12';
              
               await manage.editExpense('Advertising (Special Services Worker)',0);
               await browser.sleep(500);
               await expense.description.sendKeys(Key.chord(Key.CONTROL, 'a'));
               await expense.description.sendKeys(DESCRIPTION);
               await expense.amount.sendKeys(Key.chord(Key.CONTROL, 'a'));
               await expense.amount.sendKeys(AMOUNT);
               expect(await saveExpensesBtn.isEnabled()).toBe(true);
               await saveAction(true); 
               await browser.sleep(500);   
       });

    it('Edit and Update Basic Supplies', async function () {
       
               const DATE='8/19/2019';
               const AMOUNT='10';
              
              
               await manage.editExpense('Basic Supplies',0);
               await expense.bdate.sendKeys(Key.chord(Key.CONTROL, 'a'));
               await browser.sleep(500);
               await expense.bdate.sendKeys(DATE);
               await expense.amount.clear();
               await expense.amount.sendKeys(AMOUNT);
               expect(await saveExpensesBtn.isEnabled()).toBe(true);
               await saveAction(true);   
               await browser.sleep(1000); 

       });
     it('Edit and Update Gym Membership Fees)', async function () {
               const NAMEOFMEMBER='NEW USER';
              
              
               await manage.editExpense('Gym Membership Fees',0);
               await expense.paidTo.sendKeys(Key.chord(Key.CONTROL, 'a'));
              // await expense.paidTo.clear();
               await browser.sleep(500);
               await expense.paidTo.sendKeys(NAMEOFMEMBER);
               expect(await saveExpensesBtn.isEnabled()).toBe(true);
               await saveAction(true);   
               await browser.sleep(1000); 
        });
     it('Edit and Update Mainstream Camp / Recreation Programs)', async function () {
              
               const DATE='10/19/2019';
              
              
               await manage.editExpense('Mainstream Camp / Recreation Programs',0);
               await browser.sleep(500);
               await expense.payment_date.sendKeys(Key.chord(Key.CONTROL, 'a'));
               await expense.payment_date.sendKeys(DATE);
               expect(await saveExpensesBtn.isEnabled()).toBe(true);
               await saveAction(true);   
               await browser.sleep(1000); 
        });
     it('Edit and Update Membership Fees (Special Needs Association))', async function () {
                const NAMAOFMEMBER='NEW USER';
              
              
               await manage.editExpense('Membership Fees (Special Needs Association)',0);
               await browser.sleep(500);
               await expense.paidTo.sendKeys(Key.chord(Key.CONTROL, 'a'));
               await browser.sleep(500);
               await expense.paidTo.sendKeys(NAMAOFMEMBER);
               expect(await saveExpensesBtn.isEnabled()).toBe(true);
               await saveAction(true);   
               await browser.sleep(1000); 
        });
    it('Edit and Update Specialized Camps / Recreation Programs)', async function () {
              const AMOUNT='10';
              const NAMEOFPROGRAM='ANUAL EVENT'
              
              
              await manage.editExpense('Specialized Camps / Recreation Programs',0);
              await browser.sleep(500);
              await expense.paidTo.sendKeys(Key.chord(Key.CONTROL, 'a'));
              await browser.sleep(500);
              await expense.paidTo.sendKeys(NAMEOFPROGRAM);
              await expense.amount.sendKeys(Key.chord(Key.CONTROL, 'a'));
              await expense.amount.sendKeys(AMOUNT);
              expect(await saveExpensesBtn.isEnabled()).toBe(true);
              await saveAction(true);   
              await browser.sleep(1000); 
     });

     it('Edit and Update Training)', async function () {
             const DESCRIPTION='Updated Description';
             const AMOUNT='12';
             const STARTDATE='10/19/2019';
             const ENDDATE='10/20/2019';
      
             await manage.editExpense('Training',0);
             await expense.description.sendKeys(Key.chord(Key.CONTROL, 'a'));
             await browser.sleep(500);
             await expense.description.sendKeys(DESCRIPTION);
            /* await expense.startDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
             await expense.startDate.sendKeys(STARTDATE);
             await expense.endDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
             await expense.endDate.sendKeys(ENDDATE);*/
             await expense.amount.sendKeys(Key.chord(Key.CONTROL, 'a'));
             await expense.amount.sendKeys(AMOUNT);
             expect(await saveExpensesBtn.isEnabled()).toBe(true);
             await saveAction(true); 
             await browser.sleep(1000); 
        });
    it('Edit and Update Daycare/Nursery School)', async function () {
             const AMOUNT='10';
              
              
             await manage.editExpense('Daycare/Nursery School',0);
             await expense.Total_Amount.sendKeys(Key.chord(Key.CONTROL, 'a'));
             await browser.sleep(500);
             await expense.Total_Amount.sendKeys(AMOUNT);
             expect(await saveExpensesBtn.isEnabled()).toBe(true);
             await saveAction(true);   
             await browser.sleep(1000); 
     });
    it('Edit and Update Extraordinary Childcare (Children aged 12 and above))', async function () {
            const NAMEOFWORKER='NEWTON';
            const AMOUNT='12';

          await manage.editExpense('Extraordinary Childcare (Children aged 12 and above)',0);
          await expense.paidTo.sendKeys(Key.chord(Key.CONTROL, 'a'));
          await browser.sleep(500);
          await expense.paidTo.sendKeys(NAMEOFWORKER);
          await expense.Total_Amount.sendKeys(Key.chord(Key.CONTROL, 'a'));
          await expense.Total_Amount.sendKeys(AMOUNT);
          expect(await saveExpensesBtn.isEnabled()).toBe(true);
          await saveAction(true);   
          await browser.sleep(1000); 
   
     });
   it('Edit and Update Home Keeping)', async function () {
        
      
         const NAMEOFPROVIDER='NEWTON';
         const AMOUNT='12';
         const TYPEOFTASK='TESTING APP';

        await manage.editExpense('Home Keeping',0);
        await expense.paidTo.sendKeys(Key.chord(Key.CONTROL, 'a'));
        await browser.sleep(500);
        await expense.paidTo.sendKeys(NAMEOFPROVIDER);
        await expense.description.sendKeys(Key.chord(Key.CONTROL, 'a'));
        await expense.description.sendKeys(TYPEOFTASK);
        await expense.amount.sendKeys(Key.chord(Key.CONTROL, 'a'));
        await browser.sleep(500);
        await expense.amount.sendKeys(AMOUNT);
        expect(await saveExpensesBtn.isEnabled()).toBe(true);
        await saveAction(true);   
        await browser.sleep(1000); 
      
      });
  it('Edit and Update Manual Worker process)', async function () {
       
         const AMOUNT='12';
         const NAMEOFWORKER='TESTING APP';
         const STARTDATE='10/01/2019';
         const ENDDATE='10/10/2019';

          await manage.editExpense('Manual Worker process',0);
          await expense.service_provider.sendKeys(Key.chord(Key.CONTROL, 'a'));
          await expense.service_provider.sendKeys(NAMEOFWORKER);
         /* await expense.startDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await expense.startDate.sendKeys(STARTDATE);
          await expense.endDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await expense.endDate.sendKeys(ENDDATE);*/
          await expense.Total_Amount.sendKeys(Key.chord(Key.CONTROL, 'a'));
          await browser.sleep(500);
          await expense.Total_Amount.sendKeys(AMOUNT);
          expect(await saveExpensesBtn.isEnabled()).toBe(true);
          await saveAction(true);   
          await browser.sleep(1000);
   
     });
     it('Edit and Update Nursing (Medically Fragile Children))', async function () {
       
         const AMOUNT='12';
         const NAMEOFNURSE='TESTING APP';
         const PROFESSIONALID='987'

          await manage.editExpense('Nursing (Medically Fragile Children)',0);
          await expense.nameOFNurse.sendKeys(Key.chord(Key.CONTROL, 'a'));
          await browser.sleep(500);
          await expense.nameOFNurse.sendKeys(NAMEOFNURSE);
          await expense.ProfessionalID.sendKeys(Key.chord(Key.CONTROL, 'a'));
          await expense.ProfessionalID.sendKeys(PROFESSIONALID);
          await expense.Total_Amount.sendKeys(Key.chord(Key.CONTROL, 'a'));
          await browser.sleep(500);
          await expense.Total_Amount.sendKeys(AMOUNT);
          expect(await saveExpensesBtn.isEnabled()).toBe(true);
          await saveAction(true);   
          await browser.sleep(1000);     
     });

});