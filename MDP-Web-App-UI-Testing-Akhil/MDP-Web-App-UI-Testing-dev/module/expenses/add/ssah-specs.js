'use strict';

const CONSTANT = require('../../constant.value');
import { LoginObject } from '../../login/login.obj';
import { SideMenuObject } from '../../side-menu.obj';
import { browser } from 'protractor';
import { ExpenseObject } from '../expense.obj';

let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();
let elm = new ExpenseObject();



const beforeFunction = async () => {
	await loginAction.loginAction(CONSTANT.EMAIL_DEV_SSAH, CONSTANT.PASSWORD_DEV_SSAH, CONSTANT.WEBSITE_DEV_URL);		

	console.log('****** before Each in Add All Expense ******');
	await browser.waitForAngularEnabled(false);
	await sideMenuAction.openExpenseTab();
	await browser.sleep(1000);
	console.log('******************************************');
}

const expectIfExpenseAddedPanelAppear = async () => {
	console.log('the element is presented');
	await elm.expenseAddedPanel.isPresent();
	expect(await elm.expenseAddedPanel.isDisplayed()).toBe(true);
}

describe('SSAH:: Adding expense part 1 ::::::::::: ', function () {

	beforeEach(beforeFunction);

	it('MEMBERSHIP FEE EXPENSE', async function () {
		const START_DATE = '10/25/2019';
		const END_DATE = '10/30/2019';
		const NAME = 'Akhil Torlapati';
		const BUDGET = '10';

		
		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(10).click(); //Expense list//

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.paidTo.sendKeys(NAME);
		await elm.amount.sendKeys(BUDGET);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
		
	});

	it('ADDING SUPPORT WORKER WITH HOURLY RATE', async function () {
		const START_DATE = '10/25/2019';
		const END_DATE = '10/30/2019';
		const HOUR_RATE = '05:';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(0).click(); //Expense list//

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);

		await elm.radioButton.get(1).click();

		await elm.noOfHours.sendKeys(HOUR_RATE);
		await elm.hourlyRate.sendKeys(1);

		await elm.supportWorkerList.isPresent();
		await elm.nameOfSupportWorker.click();

		await elm.supportWorkerList.get(0).click();

		
		expect(await elm.cost.getAttribute('value')).toEqual('5');

		await elm.saveAction();

		await expectIfExpenseAddedPanelAppear();
	});

	// ***ADDING BASIC SUPPLIES EXPENSE** */
	it('ADDING BASIC SUPPLIES EXPENSE', async function () {
		const DATE = '9/3/2019';
		const DESCRIPTION = 'This is for Automation test';
		const AMOUNT = '10';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(3).click(); //Expense list//

		await elm.bdate.sendKeys(DATE);
		await elm.Description.sendKeys(DESCRIPTION);
		await elm.amount.sendKeys(AMOUNT);

		await elm.saveAction(true);

		await expectIfExpenseAddedPanelAppear();
	});
	
});


describe('SSAH:: Adding expense part 2 ::::::::::: ', function() {
	
	beforeEach(beforeFunction);

	it('ADDING SUPPORT WORKER 1:1', async function () {
		const SUPPORT_WORKER_START_DATE = '9/3/2019';
		const SUPPORT_WORKER_END_DATE = '9/4/2019';
		const SUPPORT_WORKER_TOTAL_AMOUNT = '10';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(0).click(); //Expense list//

		// expect(await action.SupportWorker_Title()).toEqual(SUPPORT_WORKER_TITLE);

		await elm.cost.isPresent();
		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(SUPPORT_WORKER_START_DATE);
		await elm.endDate.sendKeys(SUPPORT_WORKER_END_DATE);
		await elm.cost.sendKeys(SUPPORT_WORKER_TOTAL_AMOUNT);

		await elm.SupportWorkerList.isPresent();
		console.log('select support worker list');
		await elm.NameOfSupportWorker.click();
		await elm.SupportWorkerList.get(0).click();

		await elm.saveAction();
		await expectIfExpenseAddedPanelAppear();
	});

	it('ADDING DAYCARE NURSARY EXPENSE', async function () {

		const START_DATE = '10/10/2019';
		const END_DATE = '10/12/2019';
		const NAMEOFDAYCARE = 'AHMED ALLA';
		const AMOUNT = '11';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(4).click(); //Expense list// 

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		await elm.NameOfDaycareNursary.isPresent();
		await elm.Total_Amount.isPresent();

		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.NameOfDaycareNursary.sendKeys(NAMEOFDAYCARE);
		await elm.Total_Amount.sendKeys(AMOUNT);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});

	
	it('ADDING MANUAL WORKER PROCESS EXPENSE', async function () {

		const START_DATE = '9/15/2019';
		const END_DATE = '9/18/2019';
		const SERVICEPROVIDER = 'SHIVA';
		const DESCRIPTION = 'AUTOMATION TESTING'
		const AMOUNT = '13';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(8).click(); //Expense list// 

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		await elm.service_provider.isPresent();
		await elm.Description.isPresent();
		await elm.Total_Amount.isPresent();

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.service_provider.sendKeys(SERVICEPROVIDER);
		await elm.Description.sendKeys(DESCRIPTION);
		await elm.Total_Amount.sendKeys(AMOUNT);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});

	it('ADDING ADMINSTRATION FEE', async function () {
		const ADMINSTRATION_FEE_Date = '9/15/2019';
		const ADMINSTRATION_FEE_DESC = 'Admin Test';
		const ADMINSTRATION_FEE_TOTAL_AMOUNT = '10';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(1).click(); //Expense list//

		await elm.payment_date.isPresent();
		await elm.paidTo.isPresent();
		await elm.Description.isPresent();
		await elm.amount.isPresent();

		await elm.payment_date.sendKeys(ADMINSTRATION_FEE_Date);
		await elm.paidTo.sendKeys(ADMINSTRATION_FEE_DESC);
		await elm.Description.sendKeys(ADMINSTRATION_FEE_DESC);
		await elm.amount.sendKeys(ADMINSTRATION_FEE_TOTAL_AMOUNT);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});

})

describe('SSAH:: Adding expense part 3 ::::::::::: ', function() {
	
	beforeEach(beforeFunction);

	it('ADDING NURSING (Medically Fragile Children) EXPENSE', async function () {

		const START_DATE = '9/10/2019';
		const END_DATE = '9/18/2019';
		const NAMEOFNURSE = 'simran';
		const PROFESSIONAL_ID = 'NEW ONE FOR TEST'
		const AMOUNT = '13';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(11).click(); //Expense list// 

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.nameOFNurse.sendKeys(NAMEOFNURSE);
		await elm.ProfessionalID.sendKeys(PROFESSIONAL_ID)
		await elm.Total_Amount.sendKeys(AMOUNT);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});

	it('ADDING SPECIAL SERVICE SUPPORT WORKER EXPENSE', async function () {

		const SPECIAL_WORKER_START_DATE = '9/3/2019';
		const SPECIAL_WORKER_END_DATE = '9/4/2019';
		const SPECIAL_WORKER_TOTAL_AMOUNT = '10';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(12).click(); //Expense list//

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.cost.sendKeys(SPECIAL_WORKER_TOTAL_AMOUNT);
		await elm.startDate.sendKeys(SPECIAL_WORKER_START_DATE);
		await elm.endDate.sendKeys(SPECIAL_WORKER_END_DATE);
		await elm.SupportWorkerList.isPresent();
		console.log('select support worker list');
		await elm.NameOfSupportWorker.click();
		await elm.SupportWorkerList.get(0).click();

		await elm.saveAction();
		await expectIfExpenseAddedPanelAppear();
	});

	it('ADDING TRAINING EXPENSE', async function () {

		const START_DATE = '9/10/2019';
		const END_DATE = '9/18/2019';
		const NAMEOFPERSON_TRAINED = 'AKHIL T';
		const TRAINING_PROVODED_BY = 'RAHUL';
		const NUMBEROFHOURS = '05:00';
		const AMOUNT = '15';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(14).click(); //Expense list// 

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.nameofPerson_trained.sendKeys(NAMEOFPERSON_TRAINED);
		await elm.training_provided_by.sendKeys(TRAINING_PROVODED_BY);
		await elm.noofHours.sendKeys(NUMBEROFHOURS);
		await elm.amount.sendKeys(AMOUNT);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});


	it('ADDING MAINSTREAM CAMP/RECREATION PROGRAMS EXPENSE', async function () {

		const START_DATE = '9/10/2019';
		const END_DATE = '9/18/2019';
		const PAYMENT_DATE = '9/10/2018';
		const NAMEOFPROGRAM = 'NEW ONE FOR TEST'
		const AMOUNT = '13';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(9).click(); //Expense list// 

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.payment_date.sendKeys(PAYMENT_DATE);
		await elm.nameofprogram.sendKeys(NAMEOFPROGRAM)
		await elm.amount.sendKeys(AMOUNT);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});

	
	it('ADDING GYM MEMBERSHIP FEE EXPENSE', async function () {

		const START_DATE = '10/11/2019';
		const END_DATE = '10/15/2019';
		const NAMEOFMEMBERSHIP = 'Newton';
		const AMOUNT = '12';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(6).click(); //Expense list// 

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.nameofmembership.sendKeys(NAMEOFMEMBERSHIP);
		await elm.amount.sendKeys(AMOUNT);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});

	it('ADDING EXTRODINARY CHILDCARE EXPENSE', async function () {

		const START_DATE = '10/10/2019';
		const END_DATE = '10/12/2019';
		const NAMEOFCHILDCARE = 'waigh';
		const AMOUNT = '11';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(5).click(); //Expense list// 

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.nameofchildcare.sendKeys(NAMEOFCHILDCARE);
		await elm.Total_Amount.sendKeys(AMOUNT);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});

	it('ADDING HOME KEEPING EXPENSE', async function () {

		const START_DATE = '10/15/2019';
		const END_DATE = '10/18/2019';
		const NAMEOFSERVICEPROVIDER = 'Newton';
		const TYPEOFTASK = 'AUTOMATION TESTING'
		const AMOUNT = '13';

		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(7).click(); //Expense list// 

		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.nameofserviceprovider.sendKeys(NAMEOFSERVICEPROVIDER);
		await elm.TypeOFTask.sendKeys(TYPEOFTASK);
		await elm.amount.sendKeys(AMOUNT);

		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});	
})

describe('SSAH:: Adding expense part 4 ::::::::::: ', function() {
	
	beforeEach(beforeFunction);

	it('ADDING SPECIAL CAMP/RECREATION PROGRAM', async function () {
	
		const START_DATE = '9/10/2019';
		const END_DATE = '9/18/2019';
		const PAYMENT_DATE = '9/10/2019';
		const NAMEOFPROGRAM = 'NEW ONE FOR TEST'
		const AMOUNT = '13';
	
		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(13).click(); //Expense list// 
	
		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		await elm.payment_date.isPresent();
		await elm.nameofprogram.isPresent();
		await elm.amount.isPresent();

		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.payment_date.sendKeys(PAYMENT_DATE);
		await elm.nameofprogram.sendKeys(NAMEOFPROGRAM)
		await elm.amount.sendKeys(AMOUNT);
	
		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});
	

	it('ADDING ADVERTISING(SPECIAL SERVICE WORKER', async function () {

		const START_DATE = '9/10/2019';
		const END_DATE = '9/12/2019';
		const DESCRIPTION = 'This is for Automation test';
		const AMOUNT = '11';
	
		await elm.expenseLists.isPresent();
		await elm.expenseLists.get(2).click(); //Expense list// 
	
		await elm.startDate.isPresent();
		await elm.endDate.isPresent();
		
		await elm.startDate.sendKeys(START_DATE);
		await elm.endDate.sendKeys(END_DATE);
		await elm.Description.sendKeys(DESCRIPTION);
		await elm.amount.sendKeys(AMOUNT);
	
		await elm.saveAction(true);
		await expectIfExpenseAddedPanelAppear();
	});
	
	
})
