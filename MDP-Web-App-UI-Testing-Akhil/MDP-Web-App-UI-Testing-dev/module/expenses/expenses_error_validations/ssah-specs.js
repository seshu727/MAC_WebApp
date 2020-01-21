'use strict';

const CONSTANT = require('../../constant.value');
import { LoginObject } from '../../login/login.obj';
import { SideMenuObject } from '../../side-menu.obj';
import { browser, element, ExpectedConditions } from 'protractor';
import {ExpenseObject} from '../../expenses/expense.obj.js'


   let loginAction = new LoginObject();
   let sideMenuAction = new SideMenuObject();
   let expense=new ExpenseObject();



describe('SSAH:: Expense Error Validations', function () {
   
   
    const expenseLists = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-add-expenses/div/app-expenses-types-list/mat-list')).all(by.tagName('mat-list-item')).all(by.tagName('button'));
    const expenseTab = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button'))
    const cancelButton = element(by.xpath('//app-expense/form/mat-dialog-actions/button[1]'));
    const saveButton = element(by.xpath('//app-expense/form/mat-dialog-actions/button[2]'));
    const errorMessage = element(by.xpath('/html/body/div[3]/div[3]')).element(by.tagName('span'));

      beforeAll(async () => {
        console.log('========> before all login');
        await loginAction.loginAction(CONSTANT.EMAIL, CONSTANT.PASSWORD, CONSTANT.WEBSITE_URL);		
    });

   beforeEach(async function () {
        console.log('========> before each testcase');
        await browser.waitForAngularEnabled(false);
       //await sideMenuAction.selectRecipient('Isis Linwood');
         await sideMenuAction.openExpenseTab();
         console.log('******************************************');
    });

    it(' ADMINSTRATION FEE FIELDS ERROR VALIDATIONS', async function () {

        const ADMINSTRATION_FEE_TITLE = 'Administration Fee';
        const ADMINSTRATION_FEE_Date = '';
        const ADMINSTRATION_FEE_DESC = 'Test';
        const ADMINSTRATION_FEE_TOTAL_AMOUNT = '';

        const title = element(by.xpath('//*[@id="mat-dialog-title-0"]'));
    
        await expenseLists.isPresent();
        await expenseLists.get(1).click(); //Expense list//

        expect(await title.getText()).toEqual(ADMINSTRATION_FEE_TITLE);

        await expense.payment_date.sendKeys(ADMINSTRATION_FEE_Date);
        await expense.paidTo.sendKeys(ADMINSTRATION_FEE_DESC);
        await expense.Description.sendKeys(ADMINSTRATION_FEE_DESC);
        await expense.amount.sendKeys(ADMINSTRATION_FEE_TOTAL_AMOUNT);

        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });


   it('MEMBERSHIP FEE EXPENSE EXPENSE ERROR VALIDATIONS', async function () {
        const START_DATE = '11/25/2018';
        const END_DATE = '10/30/2018';
        const NAME = '';
        const BUDGET = '100000000';

        await expenseLists.isPresent();
        await expenseLists.get(10).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.paidTo.sendKeys(NAME);
        await expense.amount.sendKeys(BUDGET);

        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        expect(await errorMessage.getText()).toEqual('Start Date must be less than or equal to end date');
        await cancelButton.click();
    });
   it('ADDING SUPPORT WORKER WITH HOURLY RATE', async function () {
        const START_DATE = '';
        const END_DATE = '';
        const HOUR_RATE = ':';

        await expenseLists.isPresent();
        await expenseLists.get(0).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);

        await expense.radioButton.get(1).click();

        await expense.noOfHours.sendKeys(HOUR_RATE);
        await expense.hourlyRate.sendKeys(1);

        await expense.nameOfSupportWorker.click();
        await expense.supportWorkerList.isPresent();

        await expense.supportWorkerList.get(0).click();
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();
    });
    it(' BASIC SUPPLIES EXPENSE ERROR VALIDATIONS', async function () {
        const DATE = '9';
        const AMOUNT = '           ';

        await expenseLists.isPresent();
        await expenseLists.get(3).click(); //Expense list//

        await expense.bdate.sendKeys(DATE);
        await expense.amount.sendKeys(AMOUNT);

        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();
    });
    it(' ADVERTISING(SPECIAL SERVICE WORKER ERROR VALIDATIONS', async function () { //ADVERTISING(SPECIAL SERVICE WORKER 

        const START_DATE = '9/10/2019';
        const END_DATE = '';
        const AMOUNT = '00';

        await expenseLists.isPresent();
        await expenseLists.get(2).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.amount.sendKeys(AMOUNT);


        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();
    });
    it(' DAYCARE NURSARY EXPENSE ERROR VALIDATIONS', async function () {

        const START_DATE = 'fsdfsd#@#@#2323';
        const END_DATE = '10/12/2019';
        const NAMEOFDAYCARE = 'AHMED ALLA';
        const AMOUNT = 'djhgdfjk';

        await expenseLists.isPresent();
        await expenseLists.get(4).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.NameOfDaycareNursary.sendKeys(NAMEOFDAYCARE);
        await expense.Total_Amount.sendKeys(AMOUNT);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();
    });
    it(' EXTRODINARY CHILDCARE EXPENSE ERROR VALIDATIONS', async function () {

        const START_DATE = '';
        const END_DATE = '10/12/2019';
        const NAMEOFCHILDCARE = 'waigh@#@#2234244546464565465465465465465413213213213';
        const AMOUNT = '000000';

        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.nameofchildcare.sendKeys(NAMEOFCHILDCARE);
        await expense.Total_Amount.sendKeys(AMOUNT);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });

    it(' GYM MEMBERSHIP FEE EXPENSE ERROR VALIDATIONS', async function () {

        const START_DATE = '10/16/2019';
        const END_DATE = '10/10/2019';
        const NAMEOFMEMBERSHIP = '       ';
        const AMOUNT = '12';

        await expenseLists.isPresent();
        await expenseLists.get(6).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.nameofmembership.sendKeys(NAMEOFMEMBERSHIP);
        await expense.amount.sendKeys(AMOUNT);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });
    it(' HOME KEEPING EXPENSE ERROR VALIDATIONS', async function () {

        const START_DATE = '10/15/2019';
        const END_DATE = '';
        const NAMEOFSERVICEPROVIDER = 'Newton@#@#121';
        const TYPEOFTASK = 'AUTOMATION TESTING'
        const AMOUNT = '';

        await expenseLists.isPresent();
        await expenseLists.get(7).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.nameofserviceprovider.sendKeys(NAMEOFSERVICEPROVIDER);
        await expense.TypeOFTask.sendKeys(TYPEOFTASK);
        await expense. amount.sendKeys(AMOUNT);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });
    it(' MANUAL WORKER PROCESS EXPENSE ERROR VALIDATIONS', async function () {

        const START_DATE = '';
        const END_DATE = '';
        const SERVICEPROVIDER = 'SHIVA';
        const DESCRIPTION = 'AUTOMATION TESTING'
        const AMOUNT = '13';

        await expenseLists.isPresent();
        await expenseLists.get(8).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.service_provider.sendKeys(SERVICEPROVIDER);
        await expense.Description.sendKeys(DESCRIPTION);
        await expense.Total_Amount.sendKeys(AMOUNT);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });

    it(' MAINSTREAM CAMP/RECREATION PROGRAMS EXPENSE ERROR VALIDATIONS', async function () {

        const START_DATE = '9/10/2019';
        const END_DATE = '9/18/2019';
        const PAYMENT_DATE = '';
        const NAMEOFPROGRAM = '    1213fdg'
        const AMOUNT = '';

        await expenseLists.isPresent();
        await expenseLists.get(9).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.payment_date.sendKeys(PAYMENT_DATE);
        await expense.nameofprogram.sendKeys(NAMEOFPROGRAM)
        await expense.amount.sendKeys(AMOUNT);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });
    it(' NURSING (Medically Fragile Children) EXPENSE ERROR VALIDATIONS', async function () {

        const START_DATE = '9/10/2019';
        const END_DATE = '';
        const NAMEOFNURSE = 'simran@#@#123';
        const PROFESSIONAL_ID = 'NEW123@#@#@'
        const AMOUNT = '13';

        await expenseLists.isPresent();
        await expenseLists.get(11).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.nameOFNurse.sendKeys(NAMEOFNURSE);
        await expense.ProfessionalID.sendKeys(PROFESSIONAL_ID)
        await expense.Total_Amount.sendKeys(AMOUNT);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });
    it(' SPECIAL SERVICE SUPPORT WORKER EXPENSE ERROR VALIDATIONS', async function () {

        const SPECIAL_WORKER_END_DATE = '10/10/2018';

    
        await expenseLists.isPresent();
        await expenseLists.get(12).click(); //Expense list//

        await expense.Total_Amount.click();
        await expense.startDate.sendKeys('      ');
        await expense.endDate.sendKeys(SPECIAL_WORKER_END_DATE);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });
    it(' SPECIAL CAMP/RECREATION PROGRAM ERROR VALIDATIONS',async  function () {

        const START_DATE = '';
        const END_DATE = '9/18/2019';
        const PAYMENT_DATE = '9/10/2020';
        const NAMEOFPROGRAM = '      '
        const AMOUNT = ' ';

        await expenseLists.isPresent();
        await expenseLists.get(13).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.payment_date.sendKeys(PAYMENT_DATE);
        await expense.nameofprogram.click();
        await expense.nameofprogram.sendKeys(NAMEOFPROGRAM);
        await expense.amount.sendKeys(AMOUNT);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });
    it(' TRAINING EXPENSE ERROR VALIDATIONS', async function () {

        const START_DATE = '9/10/2019';
        const END_DATE = '';
        const NAMEOFPERSON_TRAINED = 'AKHIL T@#23535';
        const TRAINING_PROVODED_BY = '          ';
        const NUMBEROFHOURS = '00:00';
        const AMOUNT = '*****';

        await expenseLists.isPresent();
        await expenseLists.get(14).click(); //Expense list// 

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.nameofPerson_trained.sendKeys(NAMEOFPERSON_TRAINED);
        await expense.training_provided_by.sendKeys(TRAINING_PROVODED_BY);
        await expense.noofHours.sendKeys(NUMBEROFHOURS);
        await expense.amount.sendKeys(AMOUNT);
        expect(await saveButton.isEnabled()).toBe(false);
        console.log('button is disabled ');
        await cancelButton.click();

    });


});