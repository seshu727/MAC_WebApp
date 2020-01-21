'use strict';

const CONSTANT = require('../../constant.value.js');
import { LoginObject } from '../../login/login.obj';
import { SideMenuObject } from '../../side-menu.obj.js';
import { browser, element, ExpectedConditions } from 'protractor';
import { ExpenseObject } from '../expense.obj.js';



let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();
let expense=new ExpenseObject();


var BeforePFY='You can not enter expenses that occur prior to the Previous Fiscal Year. You will need to manually submit this expense to the Payment Processing Office.'
var BeforeFundStartDate='You can not select an expense date prior to your funding start date for the selected fiscal year. To change your funding start date go to “Account Settings-->Fund Settings”.'
var insufficientFund_PFY='Expense exceeds Passport Funds Available from last year. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" or you can reduce the amount of your claim.'
var PFY ="This expense will be deducted from last year's funding balance."

var insufficientFund_CFY='Expense exceeds Passport Funds Available. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" to proceed or you can reduce the amount of your claim.'

var After_NFY='You can not enter expenses that occur after the Next Fiscal Year. You will need to manually submit this expense to the Payment Processing Office.'
var InSufficientFund_NFY='Expense exceeds Passport Funds Available for next year. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" to proceed or you can reduce the amount of your claim.'
var NFY="This expense will be deducted from next year's funding balance."

var PFY_NFY_Error="You can't save an expense that crosses more than two fiscal years. Enter a Start and End date that does not cross more than two fiscal years."


 describe('PASSPORT:: MB RULES', function () {
   
    const expenseAddedPannel = element(by.css('app-expenses-quick-review[class="custom-fixed-bottom ng-star-inserted"]'));
    const expenseLists = element(by.css('div[class="d-flex flex-column px-3"]')).all(by.tagName('mat-list-item')).all(by.tagName('button'));
    const saveBtn = element(by.buttonText('Save'));
    const  expenseTab = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button'))
    const errorMessage1 = element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));
    const errorMessage2 = element(by.xpath('/html/body/div[3]')).element(by.tagName('span'));
    const cancelButton=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));
   

    beforeAll(async () => {
        console.log('========> before all login');
		await loginAction.loginAction(CONSTANT.EMAIL1_DEV_PASSPORT, CONSTANT.PASSWORD1_DEV_PASSPORT, CONSTANT.WEBSITE_DEV_URL);		
        await browser.sleep(3000);
    })

    beforeEach(async function () {
        console.log('========> before each testcase');
        await browser.waitForAngularEnabled(false);
        await sideMenuAction.selectRecipient('recipient-selection-option-Letitia_Vennie');
       // await sideMenuAction.openDashboardTab();
        await sideMenuAction.openExpenseTab();
        await browser.sleep(2000);
	    console.log('******************************************');
    });
   it('Add Expense before PFY',async function(){
      
       const SPECIAL_WORKER_START_DATE = '3/3/2018';
        const SPECIAL_WORKER_END_DATE = '3/4/2018';
        const SPECIAL_WORKER_TOTAL_AMOUNT = '10';


        await expenseLists.isPresent();
        await expenseLists.get(0).click(); //Expense list//

        // expect(await action.SupportWorker_Title()).toEqual(SUPPORT_WORKER_TITLE);

        

        await expense.startDate.sendKeys(SPECIAL_WORKER_START_DATE);
        await expense.endDate.sendKeys(SPECIAL_WORKER_END_DATE);
        await expense.Total_Amount.sendKeys(SPECIAL_WORKER_TOTAL_AMOUNT);
        await expense.nameOfSupportWorker.click();
        console.log('select support worker list');
        await expense.supportWorkerList.isPresent();
        await expense.supportWorkerList.get(0).click();


        await expense.saveAction();

        await errorMessage1.isPresent();
        console.log('Message presented');
        expect(await errorMessage1.isDisplayed()).toBe(true);
        expect(await errorMessage1.getText()).toEqual(BeforePFY);
        await cancelButton.get(0).click();
     });
     it('Add expense with PFY with in fund start date having insufficient fund', async function () {
        const START_DATE = '10/25/2018';
        const END_DATE = '10/30/2018';
        const AMOUNT='20000';
        const SERVICE_PROVIDER='Akhil t';

        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await await expense.amount.sendKeys(AMOUNT);
  
         await expense.saveAction(true);

         await browser.sleep(2000);
         await errorMessage1.isPresent();
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(insufficientFund_PFY);
         const cancel= await cancelButton.get(0);
         await cancel .click();
        
    });

    it('Add expense with PFY Before Fund start date', async function () {
        const START_DATE = '4/05/2018';
        const END_DATE = '4/10/2018';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';


        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
         await expense.saveAction(true);
         await browser.sleep(2000);

         await errorMessage1.isPresent();
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(BeforeFundStartDate);
         const cancel= await cancelButton.get(0);
       //  await  browser.actions().mouseMove(cancel).click().perform();
         await cancel .click();      
   });

    it('Add expense in PFY with in  Fund start date with Sufficient fund', async function () {
        const START_DATE = '8/05/2018';
        const END_DATE = '8/10/2018';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';

       
        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
         await expense.saveAction(true);
         await browser.sleep(2000);

         await errorMessage1.isPresent();
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(PFY);    
    });
    it('Add expense in CFY before Fund start date with Sufficient fund', async function () {
        const START_DATE = '4/05/2019';
        const END_DATE = '4/10/2019';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';

       
        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         

         await errorMessage1.isPresent();
         await browser.sleep(1000);

         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(BeforeFundStartDate);  
         const cancel= await cancelButton.get(0);
        await cancel.click(); 
    });
    xit('Add expense in CFY with in fund start date but with inSufficient fund', async function () {
        const START_DATE = '8/05/2019';
        const END_DATE = '8/10/2019';
        const AMOUNT='20000';
        const SERVICE_PROVIDER='Akhil t';

        
        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         

         await errorMessage1.isPresent();
         await browser.sleep(1000);
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(insufficientFund_CFY);  
         const cancel= await cancelButton.get(0);
         await cancel.click();  
    });
    it('Add expense in CFY with in fund start date with Sufficient fund', async function () {
        const START_DATE = '8/05/2019';
        const END_DATE = '8/10/2019';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';


        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
       
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         

         await errorMessage1.isPresent();
         await browser.sleep(1000);
         console.log('Message presented');       
    });
    xit('Add expense in NFY Before fund start date with Sufficient fund', async function () {
        const START_DATE = '4/05/2020';
        const END_DATE = '4/10/2020';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';

        
        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         

         await errorMessage1.isPresent();
         await browser.sleep(1000);
         console.log('Message presented');  
         
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(BeforeFundStartDate);  
         const cancel= await cancelButton.get(0);
         await cancel.click();  
    });

   it('Add expense After NFY', async function () {
        const START_DATE = '4/05/2021';
        const END_DATE = '4/10/2021';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';

       
        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         

         await errorMessage1.isPresent();
         await browser.sleep(1000);
         console.log('Message presented');  
         
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(After_NFY);  
         const cancel= await cancelButton.get(0);
         await cancel.click();  
    });
    it('Add expense in NFY with in Fund start date but InSufficient Fund', async function () {
        const START_DATE = '8/05/2020';
        const END_DATE = '8/10/2020';
        const AMOUNT='40000';
        const SERVICE_PROVIDER='Akhil t';

       
        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         

         await errorMessage1.isPresent();
         await browser.sleep(1000);
         console.log('Message presented');  
         
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(InSufficientFund_NFY);  
         const cancel= await cancelButton.get(0);
         await cancel.click();  
    });

    it('Add expense in NFY with in Fund start date with Sufficient Fund', async function () {
        const START_DATE = '8/05/2020';
        const END_DATE = '8/10/2020';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';

      
        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         
         await browser.sleep(1000);
         await errorMessage1.isPresent();
         console.log('Message presented');  
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(NFY);  
         
    });

    xit('Add expense with Start date in PFY and End Date in NFY', async function () {
        const START_DATE = '8/05/2018';
        const END_DATE = '8/10/2020';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';


        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         

         await errorMessage1.isPresent();
         await browser.sleep(1000);
         console.log('Message presented');  
         
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual(PFY_NFY_Error);  
         const cancel= await cancelButton.get(0);
         await cancel.click();  
    });

    xit('Add expense with Start date in PFY and End Date in CFY', async function () {
        const START_DATE = '8/05/2018';
        const END_DATE = '8/10/2019';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';

        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         

         await errorMessage1.isPresent();
         await browser.sleep(1000);
         console.log('Message presented');  
         
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual();  
         const cancel= await cancelButton.get(0);
         await cancel.click();  
    });

    xit('Add expense with Start date in CFY and End Date in NFY', async function () {
        const START_DATE = '8/05/2019';
        const END_DATE = '8/10/2020';
        const AMOUNT='20';
        const SERVICE_PROVIDER='Akhil t';

        
        await expenseLists.isPresent();
        await expenseLists.get(5).click(); //Expense list//

        await expense.startDate.sendKeys(START_DATE);
        await expense.endDate.sendKeys(END_DATE);
        await expense.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await expense.amount.sendKeys(AMOUNT);
  
        await expense.saveAction(true);
         

         await errorMessage1.isPresent();
         await browser.sleep(1000);
         console.log('Message presented');  
         
         console.log('Message presented');
         expect(await errorMessage1.isDisplayed()).toBe(true);
         expect(await errorMessage1.getText()).toEqual();  
         const cancel= await cancelButton.get(0);
         await cancel.click();  
     });


    });
