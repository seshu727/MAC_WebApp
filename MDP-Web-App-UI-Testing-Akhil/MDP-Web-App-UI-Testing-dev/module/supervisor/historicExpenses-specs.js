import { LoginObject } from '../login/login.obj';
import { SideMenuObject } from '../side-menu.obj';
import { SuperVisorObject } from './supervisor.obj';
const CONSTANT = require('../constant.value');
import * as helper from '../helper';
import { browser, element } from 'protractor';
import { save } from 'babel-register/lib/cache';

let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();

const expenseConfirmMessage_PFY='Please note you are creating a Historic Expense for the Previous Fiscal Year. Do you want to proceed?'
const expenseConfirmMessage_NFY='Please note you are creating a Historic Expense for the Next Fiscal Year. Do you want to proceed?'
const BFORE_PFY='You can not enter expenses that occur prior to the Previous Fiscal Year.';
const BEFORE_FUNDSTART_DATE='You can not select an expense date prior to the funding start date for the selected fiscal year. Please select another date or update the "Funding Start Date" in “Account Settings->Fund Settings".'
const INSUFFICENT_FUND_INPFY='Expense exceeds "Residential Funds Available" for the Previous Fiscal Year for this Client. If you would like to continue to add this expense, please adjust their "Annual Amount" in "Fund Settings".'
const INSUFFICENT_FUND_INCFY='Expense exceeds "Residential Funds Available" for the Current Fiscal Year for this Client. If you would like to continue to add this expense, please adjust their "Annual Amount" in "Fund Settings".'
const INSUFFICENT_FUND_INNFY='Expense exceeds "Residential Funds Available" for the Next Fiscal Year for this Client. If you would like to continue to add this expense, please adjust their "Annual Amount" in "Fund Settings".'
const AFTER_NFY='You can not enter expenses that occur after the Next Fiscal Year.'


const addButton=element(by.css('div[class="d-flex justify-content-end mb-3 mt-3 pr-2"]')).element(by.tagName('button'));
const expenseDate=element(by.name('expenseDate'));
const expenseType=element(by.name('expenseType'));
const expensesOptions=element.all(by.tagName('mat-option'));
const amount=element(by.name('amount'));
const saveButton = element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));
const requiredError=element.all(by.css('span[class="validation-message"]'));
const Month_Yr_filter = element(by.css('input[placeholder="Month/Year"]'));
const calenderHeaderButtons=element(by.css('div[class="mat-calendar-controls"]')).all(by.tagName('button'));
const ErrorMessage = element(by.tagName('snack-bar-container')).element(by.tagName('span'));
const calender = element(by.css('tbody[class="mat-calendar-body"]')).all(by.tagName('tr')).all(by.tagName('td'));
const SuccessMessage = element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));
const ExpenseConfirmation_Text=element(by.css('mat-dialog-content[class="d-flex mat-dialog-content"]')).element(by.tagName('p'));
const yesButton=element(by.id('okButton'));
const cancelButton= element(by.buttonText('Cancel'));


describe('SUPERVISOR:: Historic Expeneses', function () {
    const elm = new SuperVisorObject();

    beforeAll(async ()=>{
        await loginAction.loginAction(CONSTANT.SUPER_VISOR_EMAIL, CONSTANT.SUPER_VISOR_PASSWORD, CONSTANT.WEBSITE_DEV_URL);		

    })
  
    beforeEach(async () => {

        console.log('****** before Each in Add All Expense ******');
        await browser.waitForAngularEnabled(false);
        await sideMenuAction.openHistoricExpenesTab();
        await browser.sleep(2000);
        console.log('******************************************');
    });

it('test save the prodcode and deptid', async () => {
        const FIRST_NAME = 'Kristel';
        const LAST_NAME = 'Ashlie';

        expect(await elm.inputSearchId.isPresent()).toBe(true);
        await browser.sleep(3000);
        await helper.setText(elm.inputSearchId, elm.RI_FA);
        
        expect(await elm.kristelRep.isPresent()).toBe(true);
        await elm.kristelRep.click();
        await sideMenuAction.openAccountSetting();

        expect(await helper.value(elm.registeredFirstNameId)).toEqual(FIRST_NAME);
        expect(await helper.value(elm.registereLastNameId)).toEqual(LAST_NAME)
     });
    it(' Add historic expenses fields error validations', async function(){

        const pageTitle=element(by.css('app-page-header[class="page-header"]')).element(by.tagName('h5'));

        await pageTitle.isPresent();
        expect(await pageTitle.getText()).toEqual('HISTORIC EXPENSES');
        await browser.sleep(1000);
        await addButton.isPresent();
        await addButton.click();
        await amount.sendKeys('         ');
        await requiredError.isPresent();
        expect(await requiredError.get(1).getText()).toEqual('Required');
        await saveButton.isPresent();
        await browser.sleep(500);
        expect(await saveButton.get(1).isEnabled()).toBe(false);
        await cancelButton.click();

     });
    it('try to add historic expenses before PFY', async function(){
        

        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        browser.actions().mouseMove(await calenderHeaderButtons.get(0)).perform();
        await calenderHeaderButtons.get(1).click();
        await browser.sleep(500);
        await calender.get(2).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('10');
        expect(await saveButton.get(1).isEnabled()).toBe(true);
        await browser.sleep(500);
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(2000);
        expect(await SuccessMessage.getText()).toEqual(BFORE_PFY);
        await cancelButton.click();
    });

    it('Add Histortic expenses Before fund start date in PFY', async function(){
       
        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        browser.actions().mouseMove(await calenderHeaderButtons.get(0)).perform();
        await calenderHeaderButtons.get(1).click();
        await browser.sleep(500);
        await calender.get(4).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('10');
        await browser.sleep(500);
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(500);
        expect(await ExpenseConfirmation_Text.getText()).toEqual(expenseConfirmMessage_PFY);
        await yesButton.click();
        await browser.sleep(2000);
        expect(await SuccessMessage.getText()).toEqual(BEFORE_FUNDSTART_DATE);
        await cancelButton.click();
     });
    it('Add Histortic expenses in PFY WITH Insufficient Fund', async function(){
       
        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        browser.actions().mouseMove(await calenderHeaderButtons.get(0)).perform();
        await calenderHeaderButtons.get(1).click();
        await browser.sleep(500);
        await calender.get(9).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('25000');
        await browser.sleep(500);
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(500);
        expect(await ExpenseConfirmation_Text.getText()).toEqual(expenseConfirmMessage_PFY);
        await yesButton.click();
        await browser.sleep(2000);
        expect(await SuccessMessage.getText()).toEqual(INSUFFICENT_FUND_INPFY);
        await cancelButton.click();

      });
    it('Add Histortic expenses in PFY WITH Sufficient Fund', async function(){
       
        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        browser.actions().mouseMove(await calenderHeaderButtons.get(0)).perform();
        await calenderHeaderButtons.get(1).click();
        await browser.sleep(500);
        await calender.get(9).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('25');
        await browser.sleep(500);
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(500);
        expect(await ExpenseConfirmation_Text.getText()).toEqual(expenseConfirmMessage_PFY);
        await yesButton.click();
        await browser.sleep(2000);
      //  expect(await SuccessMessage.getText()).toEqual('');
    }); 
    it('Add Histortic expenses Before fund start date in CFY', async function(){
       
        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        await calender.get(4).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('10');
        await browser.sleep(500);
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(2000);
        expect(await SuccessMessage.getText()).toEqual(BEFORE_FUNDSTART_DATE);
        await cancelButton.click();
     });
     it('Add Histortic expenses in CFY WITH Insufficient Fund', async function(){
       
        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        await calender.get(9).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('25000');
        await browser.sleep(500);
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(2000);
        expect(await SuccessMessage.getText()).toEqual(INSUFFICENT_FUND_INCFY);
        await cancelButton.click();

       });
     it('Add Histortic expenses in CFY WITH Sufficient Fund', async function(){
     
        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        await calender.get(9).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('25');
        await browser.sleep(500);
        expect(await saveButton.get(1).isEnabled()).toBe(true)
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(1000);
       // expect(await SuccessMessage.getText()).toEqual('');

      });
    it('Add Histortic expenses in NFY WITH Insufficient Fund', async function(){
       
        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        browser.actions().mouseMove(await calenderHeaderButtons.get(0)).perform();
        await calenderHeaderButtons.get(2).click();
        await browser.sleep(500);
        await calender.get(9).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('25000');
        await browser.sleep(500);
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(500);
        expect(await ExpenseConfirmation_Text.getText()).toEqual(expenseConfirmMessage_NFY);
        await yesButton.click();
        await browser.sleep(2000);
        expect(await SuccessMessage.getText()).toEqual(INSUFFICENT_FUND_INNFY);
        await cancelButton.click();
       });
    it('Add Histortic expenses After NFY', async function(){
     
        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        browser.actions().mouseMove(await calenderHeaderButtons.get(0)).perform();
        await calenderHeaderButtons.get(2).click();
        await calenderHeaderButtons.get(2).click();
        await browser.sleep(500);
        await calender.get(9).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('25');
        await browser.sleep(500);
        expect(await saveButton.get(1).isEnabled()).toBe(true)
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(2000);
        expect(await SuccessMessage.getText()).toEqual(AFTER_NFY);
        await cancelButton.click();

      });
     it('Add Histortic expenses in NFY with Sufficient fund', async function(){
     
        await addButton.click();
        await expenseDate.click();
        await browser.sleep(1000);
        browser.actions().mouseMove(await calenderHeaderButtons.get(0)).perform();
        await calenderHeaderButtons.get(2).click();
        await browser.sleep(500);
        await calender.get(9).click();
        await browser.sleep(500);
        await expenseType.click();
        await expensesOptions.get(1).click();
        await amount.sendKeys('25');
        await browser.sleep(500);
        expect(await saveButton.get(1).isEnabled()).toBe(true)
        browser.actions().mouseMove(await saveButton.get(1)).perform();
        await saveButton.get(1).click();
        await browser.sleep(500);
        expect(await ExpenseConfirmation_Text.getText()).toEqual(expenseConfirmMessage_NFY);
        await yesButton.click();
        await browser.sleep(1000);
      //  expect(await SuccessMessage.getText()).toEqual(AFTER_NFY);

      });

      it('Fiter expenses by date and Delete one of the expenses', async function(){
           const fromDate=element(by.name('fromDate'));
           const toDate= element(by.name('toDate'));
           const applyButton=element(by.css('button[type="submit"]'));
           const expensesList=element.all(by.css('div[class="row mb-3 ng-star-inserted"]'));
           const deleteButton=expensesList.all(by.buttonText('Delete'));
           const deleteConfirmationText1=element(by.css('mat-dialog-content[class="p-5 m-0 text-center mat-dialog-content"]')).element(by.tagName('h3'));
           const deleteConfirmationText2=element(by.css('mat-dialog-content[class="p-5 m-0 text-center mat-dialog-content"]')).element(by.tagName('h5'));
           const deleteAndCancelButtons=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));

           await fromDate.click();
           await calenderHeaderButtons.get(1).click();
           await browser.sleep(500);
           await calender.get(2).click();
           await toDate.click();
           await browser.sleep(500);
           await calender.get(9).click();
           browser.actions().mouseMove(await applyButton).perform();
           await browser.sleep(500);
           await applyButton.click();
           await expensesList.isPresent();
           console.log('expenses List exist');
           expect(await expensesList.isPresent()).toBe(true);
           await browser.sleep(500);
           await deleteButton.get(0).click();
           await browser.sleep(500);
           expect(await deleteConfirmationText1.getText()).toEqual('THIS OPERATION CAN NOT BE UNDONE');
           expect(await deleteConfirmationText2.getText()).toEqual('Are you sure you would like to delete this item?');
           await deleteAndCancelButtons.get(1).click();
           await browser.sleep(3000);
           expect(await SuccessMessage.getText()).toEqual('Expense has been deleted successfully')


      });


});