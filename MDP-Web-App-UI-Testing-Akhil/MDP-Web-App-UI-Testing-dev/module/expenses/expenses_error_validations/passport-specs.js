'use strict';

const CONSTANT = require('../../constant.value.js');
import { LoginObject } from '../../login/login.obj';
import { SideMenuObject } from '../../side-menu.obj.js';
import { browser, element, ExpectedConditions } from 'protractor';
import { ExpenseObject } from '../expense.obj.js';

let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();
let expense=new ExpenseObject();

describe('PASSPORT:: Adding expense', function () {

    const homePage = new HomePage();

    const expenseAddedPannel = element(by.css('app-expenses-quick-review[class="custom-fixed-bottom ng-star-inserted"]'));
    const expenseLists = element(by.css('div[class="d-flex flex-column px-3"]')).all(by.tagName('mat-list-item')).all(by.tagName('button'));
    var expenseTab = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button'))
    const cancelButton=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));
    const expenseForm = element(by.xpath('//app-expense/form/mat-dialog-actions/button[2]'));    
    const errorMessage=element.all(by.css('span[class="validation-message"]'));//.all(by.tagName('span'));
    const validation=element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));


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
        console.log('========> before all login');
		await loginAction.loginAction(CONSTANT.EMAIL1_DEV_PASSPORT, CONSTANT.PASSWORD1_DEV_PASSPORT, CONSTANT.WEBSITE_DEV_URL);		
        await browser.sleep(3000);
    })

    beforeEach(async function () {
        console.log('========> before Each in Add All Expense');
        browser.waitForAngularEnabled(false);
       await sideMenuAction.openDashboardTab();
        await sideMenuAction.openExpenseTab();
        await browser.sleep(2000);
	    console.log('******************************************');  
    
    });

   xit('EDUCATION WORKER',async function(){
        const SPECIAL_WORKER_START_DATE = '';
        const SPECIAL_WORKER_END_DATE = '9/4/2019';
        const SPECIAL_WORKER_TOTAL_AMOUNT = '';

        const amount = element(by.name('totalCost'));
        const startDate = element(by.name('fromDate')); //mat-input-2//
        const endDate = element(by.name('toDate')); //mat-input-3//
        const NameOfSupportWorker = element(by.name('workerCtrl'));
        const SupportWorkerList = element.all(by.tagName('mat-option'));
        

        await expenseLists.isPresent();
        await expenseLists.get(0).click(); //Expense list//

        // expect(await action.SupportWorker_Title()).toEqual(SUPPORT_WORKER_TITLE);

        await amount.sendKeys(SPECIAL_WORKER_TOTAL_AMOUNT);

        await startDate.sendKeys(SPECIAL_WORKER_START_DATE);
        expect(await errorMessage.get(1).getText()).toEqual('Required');

        await endDate.sendKeys(SPECIAL_WORKER_END_DATE);
       
        await SupportWorkerList.isPresent();
        console.log('select support worker list');
        await NameOfSupportWorker.click();
        await SupportWorkerList.get(0).click();
       
        expect( await expenseForm.isEnabled()).toBe(false);
        await cancelButton.click();
       // await saveAction();
       console.log('button is disabled');
        
      });
     xit(' RESPITE WORKER WITH HOURLY RATE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '';
        const NUMBER_OF_HRS = '54564';
        
        const startDate = element(by.name('fromDate')); //mat-input-2//
        const endDate = element(by.name('toDate')); //mat-input-3//
        const noOfHours = element(by.name('noHoursCtrl'));
        const hourlyRate = element(by.name('rateCtrl'));
        const radioButton = element(by.tagName('app-amount-with-hours')).all(by.tagName('mat-radio-button'));
        const supportWorkerList = element.all(by.tagName('mat-option'));
        const nameOfSupportWorker = element(by.name('workerCtrl'));

        await expenseLists.isPresent();
        await expenseLists.get(2).click(); //Expense list//

        await startDate.sendKeys(START_DATE);
        await endDate.sendKeys(END_DATE);
     //   expect(await errorMessage.get(1).getText()).toEqual('');

         const radio1=await radioButton.get(0);
         const radio2=await radioButton.get(1);
        
         await radio1.click();
         await radio2.click();
        
        await noOfHours.sendKeys(NUMBER_OF_HRS);
        expect(await errorMessage.get(2).getText()).toEqual('');
        await browser.sleep(1000);
        await hourlyRate.sendKeys('1');

        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click();       
    });

    xit('  MILEAGE WITH RATE PER KM', async function () {
        const START_DATE = '';
        const END_DATE = '';
        const DISTANCE = '0';
        
        const startDate = element(by.name('fromDate')); //mat-input-2//
        const endDate = element(by.name('toDate')); //mat-input-3//
        const distance = element(by.name('distanceCtrl'));
        const rate = element(by.name('rateCtrl'));
        const radioButton = element(by.tagName('app-amount-with-distance')).all(by.tagName('mat-radio-button'));
        const servicProviderList = element.all(by.tagName('mat-option'));
        const serviceProvider = element(by.name('workerCtrl')); 

        await expenseLists.isPresent();
        await expenseLists.get(3).click(); //Expense list//

        await startDate.sendKeys(START_DATE);
       // expect(await errorMessage.get(1).getText()).toEqual('');
        await endDate.sendKeys(END_DATE);
        expect(await errorMessage.get(1).getText()).toEqual('Required');

        const radio1=await radioButton.get(0);
        const radio2=await radioButton.get(1);
       
        await radio1.click();
        await radio2.click();
        
        await distance.sendKeys(DISTANCE);
        await browser.sleep(1000);
        await rate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await rate.sendKeys('1213213');
        await browser.sleep(1000);
       
        var msg1=await errorMessage.get(4).getText();
        expect(await msg1).toEqual('');

        const amount = element(by.name('amountCtrl'));
        expect(await amount.getAttribute('value')).toEqual('0');
       
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
       
    });

    it('  CLIENDT VACATION SUPPORT', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '10/30/2020';
        const AMOUNT='';
        const SERVICE_PROVIDER='Akhil t';

        const amount = element(by.name('amountCtrl'));
        const startdate = element(by.name('fromDate')); //mat-input-2//
        const enddate = element(by.name('toDate')); //mat-input-3//
        const serviceProvider = element(by.name('nameOfProvider'));

        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await startdate.sendKeys(START_DATE);
        await enddate.sendKeys(END_DATE);
        await serviceProvider.sendKeys(SERVICE_PROVIDER);
        await serviceProvider.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));

        await amount.sendKeys(AMOUNT);
        await amount.click();

        await serviceProvider.click();
        
        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
       
         expect( await expenseForm.isEnabled()).toBe(false);
         console.log('save button is disable');
         await cancelButton.click(); 
    });
    it('  SUPPLIES EXPENSE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '10/10/2020';
        const AMOUNT='12'
        const SERVICE_PROVIDER='Akhil t';

        const amount = element(by.name('amountCtrl'));
        const start_Date = element(by.name('fromDate')); //mat-input-2//
        const end_Date = element(by.name('toDate')); //mat-input-3//
        const serviceProvider = element(by.name('nameOfProvider'));

        await expenseLists.isPresent();
        await expenseLists.get(7).click(); //Expense list//

        await start_Date.sendKeys(START_DATE);
        await end_Date.sendKeys(END_DATE); 
        await serviceProvider.sendKeys(SERVICE_PROVIDER)
        await amount.sendKeys(AMOUNT);
       
        await browser.sleep(1000);
        expect( await validation.getText()).toEqual("Start Date must be less than or equal to end date");

  
         expect( await expenseForm.isEnabled()).toBe(false);
         console.log('save button is disable');
         await cancelButton.click(); 
    });
    it('  SUPPORT WORKER MEALS', async function () {
        const START_DATE = '';
        const END_DATE = '';
        const AMOUNT='12';
        const SERVICE_PROVIDER='';

        const amount = element(by.name('amountCtrl'));
        const startDate = element(by.name('fromDate')); //mat-input-2//
        const endDate = element(by.name('toDate')); //mat-input-3//
        const serviceProvider = element(by.name('nameOfProvider'));

        await expenseLists.isPresent();
        await expenseLists.get(6).click(); //Expense list//

        await startDate.sendKeys(START_DATE);
        await endDate.sendKeys(END_DATE);
      
        await amount.sendKeys(AMOUNT);
        await amount.click();

        await serviceProvider.click();
        
        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
       
         expect( await expenseForm.isEnabled()).toBe(false);
         console.log('save button is disable');
         await cancelButton.click(); 
     });
    it('  OTHERS EXPENSE', async function () {
        const START_DATE = '';
        const END_DATE = '';
        const AMOUNT='';
        const SERVICE_PROVIDER='';
        const INVOICE_NUM='1254AG@#';
        const DESCRIPTION='this is new one for test';

        const amount = element(by.name('amountCtrl'));
        const start_date = element(by.name('fromDate')); //mat-input-2//
        const end_date = element(by.name('toDate')); //mat-input-3//
        const serviceProvider = element(by.name('nameOfProvider'));
        const invoiceNumber=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));


        await expenseLists.isPresent();
       // browser.actions().mouseMove(await expenseLists.get(8)).click().perform();
        await expenseLists.get(8).click(); //Expense list//

        await start_date.sendKeys(START_DATE);
        await end_date.sendKeys(END_DATE);
       
        await serviceProvider.sendKeys(SERVICE_PROVIDER)
        await amount.sendKeys(AMOUNT);
        await amount.click();

        await serviceProvider.click();
        
        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
       
         expect( await expenseForm.isEnabled()).toBe(false);
         console.log('save button is disable');
         await cancelButton.click(); 
    });
    it('  ADMINSTRATION EXPENSE', async function () {
        const START_DATE = '';
        const END_DATE = '';
        const AMOUNT='12';
        const INVOICE_NUM='1254AG@#';
        const DESCRIPTION='this is new one for test';

        const amount = element(by.name('amountCtrl'));
        const startDte = element(by.name('fromDate')); //mat-input-2//
        const enddaate = element(by.name('toDate')); //mat-input-3//
        const service_Provider = element(by.name('agencyNameSelectCtrl'));
        const invoiceNumber=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));
        const servicProvider_List = element.all(by.tagName('mat-option'));

         await expenseLists.isPresent();
       // await browser.actions().mouseMove(expenseLists.get(4)).click().perform();
         await expenseLists.get(4).click(); //Expense list//

        await startDte.sendKeys(START_DATE);
        await enddaate.sendKeys(END_DATE);
       
        await amount.sendKeys(AMOUNT);

        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
       
        await invoiceNumber.sendKeys(INVOICE_NUM);
        await description.sendKeys(DESCRIPTION);
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
    });
    it('  COMMUNITY EVENTS EXPENSE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '';
        const AMOUNT='';
        const INVOICE_NUM='1254AG@#';
        const DESCRIPTION='this is new one for test';

        const amount = element(by.name('amountCtrl'));
        const stat_Date = element(by.name('fromDate')); //mat-input-2//
        const endDte = element(by.name('toDate')); //mat-input-3//
        const serviceprovider = element(by.name('agencyNameSelectCtrl'));
        const invoiceNumber=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));
        const servicproviderList = element.all(by.tagName('mat-option'));
        await expenseLists.isPresent();
        await expenseLists.get(9).click(); //Expense list//

        await stat_Date.sendKeys(START_DATE);
        await endDte.sendKeys(END_DATE);
        
        await amount.sendKeys(AMOUNT);
        await amount.click();

        await invoiceNumber.sendKeys(INVOICE_NUM);
        await description.sendKeys(DESCRIPTION);

        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
    });

    it(' DAY PROGRAMS EXPENSE', async function () {
        const START_DATE = '';
        const END_DATE = '';
        const AMOUNT='';
        const INVOICE_NUM='1254AG@#';
        const DESCRIPTION='this is new one for test';

        const amount = element(by.name('amountCtrl'));
        const start_Date = element(by.name('fromDate')); //mat-input-2//
        const end_Date = element(by.name('toDate')); //mat-input-3//
        const service_Provider = element(by.name('agencyNameSelectCtrl'));
        const invoiceNumber=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));
        const servic_ProviderList = element.all(by.tagName('mat-option'));

        await expenseLists.isPresent();
        await expenseLists.get(10).click(); //Expense list//

        await start_Date.sendKeys(START_DATE);
        await end_Date.sendKeys(END_DATE);
       
        await amount.sendKeys(AMOUNT);
        await amount.click();
        
        await invoiceNumber.sendKeys(INVOICE_NUM);
        await description.sendKeys(DESCRIPTION);
  
        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click();  
      
    });
    it(' MEMBERSHIP EXPENSE', async function () {
        const START_DATE = '';
        const END_DATE = '10/30/2020';
        const AMOUNT='';
        const  INVOICE_NUM='1254AG@#';
        const DESCRIPTION='this is new one for test';

        const amount = element(by.name('amountCtrl'));
        const startDate = element(by.name('fromDate')); //mat-input-2//
        const endDate = element(by.name('toDate')); //mat-input-3//
        const serviceProvider = element(by.name('agencyNameSelectCtrl'));
        const invoiceNumber=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));
        const servicProviderList = element.all(by.tagName('mat-option'));

        await expenseLists.isPresent();
        await expenseLists.get(11).click(); //Expense list//

        await startDate.sendKeys(START_DATE);
        await endDate.sendKeys(END_DATE);
        
        await amount.sendKeys(AMOUNT);
        await amount.click();

        await invoiceNumber.sendKeys(INVOICE_NUM);
        await description.sendKeys(DESCRIPTION);
  
        
        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
    });
    it(' OUT OF HOME RESPITE EXPENSE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '';
        const AMOUNT='';
        const INVOICE_NUM='1254AG@#';
        const DESCRIPTION='this is new one for test';

        
        const amount = element(by.name('amountCtrl')); //mat-input-2//
        const startdate = element(by.name('fromDate')); //mat-input-2//
        const enddate = element(by.name('toDate')); //mat-input-3//
        const serv_provider = element(by.name('agencyNameSelectCtrl'));
        const invoice_Number=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));
        const serv_ProviderList = element.all(by.tagName('mat-option'));

        await expenseLists.isPresent();
        await expenseLists.get(12).click(); //Expense list//

        await startdate.sendKeys(START_DATE);
        await enddate.sendKeys(END_DATE);
        
        await amount.sendKeys(AMOUNT);
        await amount.click();

        await invoice_Number.sendKeys(INVOICE_NUM);
        await description.sendKeys(DESCRIPTION);
  
        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
    });
   it('  TRANSPOTATION EXPENSE', async function () {
        const START_DATE = '';
        const END_DATE = '';
        const AMOUNT='';
        const INVOICE_NUM='1254AG@#';
        const DESCRIPTION='this is new one for test';

        const amount = element(by.name('amountCtrl'));
        const start_Date = element(by.name('fromDate')); //mat-input-2//
        const end_Date = element(by.name('toDate')); //mat-input-3//
        const service_Provider = element(by.name('agencyNameSelectCtrl'));
        const invoice_Number=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));
        const servic_ProviderList = element.all(by.tagName('mat-option'));

        await expenseLists.isPresent();
        await expenseLists.get(13).click(); //Expense list//

        await start_Date.sendKeys(START_DATE);
        await end_Date.sendKeys(END_DATE);
        
        await amount.sendKeys(AMOUNT);
        await amount.click();

        await invoice_Number.sendKeys(INVOICE_NUM);
        await description.sendKeys(DESCRIPTION);
  
        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
    });
    it('  ANUAL TRANSIT  EXPENSE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '';
        const AMOUNT='';
        const INVOICE_NUM='1254AG@#';
        const DESCRIPTION='this is new one for test';

        const amount = element(by.name('amountCtrl'));
        const startdate = element(by.name('fromDate')); //mat-input-2//
        const endDate = element(by.name('toDate')); //mat-input-3//
        const serviceProvide = element(by.name('agencyNameSelectCtrl'));
        const invoicenumber=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));
        const servicProviderlist = element.all(by.tagName('mat-option'));

        await expenseLists.isPresent();
        await expenseLists.get(14).click(); //Expense list//

        await startdate.sendKeys(START_DATE);
        await endDate.sendKeys(END_DATE);
        
        await amount.sendKeys(AMOUNT);
        await amount.click();

        await invoicenumber.sendKeys(INVOICE_NUM);
        await description.sendKeys(DESCRIPTION);
  
        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
    });

    it('  CAMP EXPENSE', async function () {
        const START_DATE = '';
        const END_DATE = '10/30/2020';
        const AMOUNT='';
        const  INVOICE_NUM='1254AG@#';
        const  DESCRIPTION='this is new one for test'

        const amount = element(by.name('amountCtrl'));
        const startDate = element(by.name('fromDate')); //mat-input-2//
        const endDate = element(by.name('toDate')); //mat-input-3//
        const serviceProvider = element(by.name('agencyNameSelectCtrl'));
        const invoiceNumber=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));
        const servicProviderList = element.all(by.tagName('mat-option'));

        await expenseLists.isPresent();
        await expenseLists.get(15).click(); //Expense list//

        await startDate.sendKeys(START_DATE);
        await endDate.sendKeys(END_DATE);
        
        await amount.sendKeys(AMOUNT);
        await amount.click();

        await invoiceNumber.sendKeys(INVOICE_NUM);
        await description.sendKeys(DESCRIPTION);
         
        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
    });


    it('  PERSON DIRECT PLANNING EXPENSE', async function () {
        const START_DATE = '';
        const END_DATE = '10/30/2020';
        const AMOUNT='';
        const  INVOICE_NUM='1254AG@#';
        const DESCRIPTION='this is new one for test';
        const ORGANISER='Test for new user';

        const amount = element(by.name('amountCtrl'));
        const startDate = element(by.name('fromDate')); //mat-input-2//
        const endDate = element(by.name('toDate')); //mat-input-3//
        const agency_organisation = element(by.name('agencyNameCtrl'));
        const planning_facilitator=element(by.name('workerCtrl'));
        const facilitatorList=element.all(by.tagName('mat-option'));
        const invoiceNumber=element(by.name('invoiceNumber')); 
        const description=element(by.name('descriptionCtrl'));
       

        await expenseLists.isPresent();
        await expenseLists.get(16).click(); //Expense list//

        await startDate.sendKeys(START_DATE);
        await endDate.sendKeys(END_DATE);
        
        await amount.sendKeys(AMOUNT);
        await amount.click();

        await invoiceNumber.sendKeys(INVOICE_NUM);
        await description.sendKeys(DESCRIPTION);

        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
    });

    it('SUPPORT WORKER',async function(){
       
        const SPECIAL_WORKER_START_DATE = '9/3/2019';
        const SPECIAL_WORKER_END_DATE = '';
        const SPECIAL_WORKER_TOTAL_AMOUNT = '';

        const amount = element(by.name('totalCost'));
        const start_Date = element(by.name('fromDate')); //mat-input-2//
        const end_Date = element(by.name('toDate')); //mat-input-3//
        const NameOfSupportWorker = element(by.name('workerCtrl'));
        const SupportWorkerList = element.all(by.tagName('mat-option'));

        await expenseLists.isPresent();
        await expenseLists.get(1).click(); //Expense list//

       
        await amount.sendKeys(SPECIAL_WORKER_TOTAL_AMOUNT);
        await amount.click();
       
        await start_Date.sendKeys(SPECIAL_WORKER_START_DATE);
        await end_Date.sendKeys(SPECIAL_WORKER_END_DATE);

        await browser.sleep(1000);
        expect(await errorMessage.get(1).getText()).toEqual('Required');
  
        expect( await expenseForm.isEnabled()).toBe(false);
        console.log('save button is disable');
        await cancelButton.click(); 
     });
    


    });