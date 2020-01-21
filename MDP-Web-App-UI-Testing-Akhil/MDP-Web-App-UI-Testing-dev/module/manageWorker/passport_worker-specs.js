'use strict';

const CONSTANT = require('../constant.value');
import { LoginObject } from '../login/login.obj';
import { SideMenuObject } from '../side-menu.obj';
import { browser, element, ExpectedConditions } from 'protractor';
import { WorkerObject } from '../manageWorker/passport_manageWorker.obj.js';

let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();
let elm = new WorkerObject();




describe('PASSPORT:: Manage Worker ::::::::::: ', function () {

	beforeAll(async () => {
        console.log('========> before all login');
		await loginAction.loginAction(CONSTANT.EMAIL1, CONSTANT.PASSWORD1, CONSTANT.WEBSITE_URL);		
        await browser.sleep(3000);
    })

    beforeEach(async function () {
        console.log('========> before each testcase');
        await browser.waitForAngularEnabled(false);
	  //await sideMenuAction.selectRecipient('Isis Linwood');
	    await sideMenuAction.openManageWorkerTab();
	    console.log('******************************************');
    });

	it('VERIFY MANAGE WORKER TITLE', async function () {
		
		await elm.workerTitle.isPresent();
		expect(await elm.workerTitle.getText()).toEqual('MANAGE WORKERS');
		console.log('manage worker page');
			
	});
	it('CHECK THE ERROR VALIDATION FOR INVITE WORKER FIELDS ',async function(){
		
		const INVALID_EMAIL='akhilgmail.com';
		const INVALID_EMAIL1='akhil@gmail.';
		
		
		await elm.invitWorkerButton.isPresent();
		await elm.invitWorkerButton.click();
		await elm.firstName.click();
		await elm.lastName.click();
		await elm.email.click();
		await elm.email.sendKeys(INVALID_EMAIL);
		await elm.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
		await elm.email.sendKeys(INVALID_EMAIL1);
		await elm.SaveAndCancel.get(1).isPresent();
		console.log('button displayed');
		expect(await elm.SaveAndCancel.get(1).isEnabled()).toBe(false);
		await elm.SaveAndCancel.get(0).click();
		await browser.sleep(1000);
	});
	it('CHECK THE ERROR VALIDATIONS FOR EMAIL ALREADY REGISTERED IN MDP',async function(){
		
		const EMAIL2='simran+1@dartssolutions.com';
		const EMAIL3='simran+123@dartssolutions.com';
		const EMAIL4='simran+314@dartssolutions.com';
		

		await elm.invitWorkerButton.click();
		await elm.firstName.sendKeys('Akhil');
		await elm.lastName.sendKeys('Torlapati');	
		await elm.email.sendKeys(EMAIL2);
		await elm.SaveAndCancel.get(1).click();
		await browser.sleep(1000);
		await elm.errormessage.isPresent();
		expect(await elm.errormessage.getText()).toEqual('Family Worker cannot have same e-mail as recipient or fund administrators');
	    await elm.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));	
		await elm.email.sendKeys(EMAIL3);
		await elm.SaveAndCancel.get(1).click();
		await browser.sleep(1000);
		expect(await elm.errormessage.getText()).toEqual('Family Worker has already been invited');
	    await elm.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));	
		await elm.email.sendKeys(EMAIL4);
		await elm.SaveAndCancel.get(1).click();
		await browser.sleep(1000);
		expect(await elm.errormessage.getText()).toEqual('User has already been invited');
		await elm.SaveAndCancel.get(0).click();
	});
	it ('CHECK THE DELETE FUNCTIONALITY FOR ACTIVE USER',async function(){
		const activeDeleteError="We can't remove this worker because he/she is linked to one of your current or previous expenses"

		await elm.filterByStatus.click();
		await elm.filterOptions.get(1).click();
		await elm.appluButton.click();
		await elm.workersList.isPresent();
		console.log('workers list is present');
		await elm.delete(0);
		await elm.deleteAndDeactiveBtn.get(0).click();
		console.log('confirmation popup displayed');
		await elm.deleteConfirmation.get(1).click();
		await browser.sleep(1000);
		expect(await elm.errormessage.getText()).toEqual(activeDeleteError);
		await elm.deleteConfirmation.get(0).click();
	   });
    it ('CHECK THE DEACTIVE FUNCTIONALITY FOR ACTIVE USER WHO HAS RELATED WITH EXPENSES',async function(){

	     const activeDeactiveError="You have unsubmitted expenses for this worker. Please go to “Manage Expenses” and delete or submit the related worker expenses before attempting to deactivate this worker."
  
		 
		  await elm.workersList.isPresent();
		  console.log('workers list is present');
		  await elm.delete(0);
		  await elm.deleteAndDeactiveBtn.get(1).click();
		  console.log('Error Message Appeared');
		  await browser.sleep(2000);
		  expect(await elm.errormessage.getText()).toEqual(activeDeactiveError);
	  });

	  it ('CHECK THE DEACTIVE FUNCTIONALITY FOR ACTIVE USER WHO HAS NOT RELATED TO EXPENSES EXISTED',async function(){

		  const DeactiveSuccessError="The worker has been deactivated successfully."
  
		 
		  await elm.workersList.isPresent();
		  console.log('workers list is present');
		  await elm.delete(2);
		  await elm.deleteAndDeactiveBtn.get(1).click();
		  console.log('Error Message Appeared');
		  await browser.sleep(2000);
		  expect(await elm.errormessage.getText()).toEqual(DeactiveSuccessError);
	  });

	  it ('CHECK THE REACTIVE FUNCTIONALITY FOR INACTIVE USER ',async function(){

		const ReactiveSuccessError="The worker has been reactivated successfully."

	   
		await elm.filterByStatus.click();
		await elm.filterOptions.get(2).click();
		await elm.appluButton.click();
		await elm.workersList.isPresent();
		console.log('workers list is present');
		await elm.delete(0);
		await elm.deleteAndDeactiveBtn.get(1).click();
		console.log('Error Message Appeared');
		await browser.sleep(2000);
		expect(await elm.errormessage.getText()).toEqual(ReactiveSuccessError);
	});

	it ('CHECK THE FILTER FUNCTIONALITY FOR PENDING STATUS AND VERIFY WORKER DETAILS  ',async function(){

		await elm.filterByStatus.click();
		await elm.filterOptions.get(3).click();
		await elm.appluButton.click();
		await elm.workersList.isPresent();
		console.log('workers list is present');
		expect(await elm.workerDetails.get(1).getText()).toEqual('Pending');
		browser.actions().mouseMove(elm.workerDetails.get(1)).click().perform();
		await browser.sleep(1000);

	});
	it ('CHECK THE FILTER FUNCTIONALITY FOR DECLINED STATUS AND VERIFY WORKER DETAILS  ',async function(){

		
		await elm.filterByStatus.click();
		await elm.filterOptions.get(4).click();
		await elm.appluButton.click();
		await elm.workersList.isPresent();
		console.log('workers list is present');
		expect(await elm.workerDetails.get(1).getText()).toEqual('Declined');
		browser.actions().mouseMove(elm.workerDetails.get(1)).click().perform();
		await browser.sleep(1000);

				
	});
	it ('INVITE NEW WORKER  ',async function(){
	   
		const saveSucces='Family worker has been invited';

		const FIRATNAME='Ram';
		const LASTNAME='Krishna';
		const EMAIL='ankal.torlapati+500@dartssolutions.com';
		
		await elm.invitWorkerButton.isPresent();
		await elm.invitWorkerButton.click();
		await elm.firstName.sendKeys(FIRATNAME);
		await elm.lastName.sendKeys(LASTNAME);
		await elm.email.sendKeys(EMAIL);
		expect(await elm.SaveAndCancel.get(1).isEnabled()).toBe(true);
		await elm.SaveAndCancel.get(1).click();
		await browser.sleep(1000);
		expect(await elm.errormessage.getText()).toEqual(saveSucces);
				
	});
	it ('DELETE THE INVITED WORKER  ',async function(){
	 
		const deleteSucces='The Worker has been deleted successfully';

		await elm.filterByStatus.click();
		await elm.filterOptions.get(3).click();
		await elm.appluButton.click();
		await elm.workersList.isPresent();
		console.log('workers list is present');
		expect(await elm.workerDetails.get(1).getText()).toEqual('Pending');
		await elm.delete(0);
		await elm.deleteAndDeactiveBtn.get(0).click();
		await elm.deleteConfirmation.get(1).click();
		await browser.sleep(2000);
		expect(await elm.errormessage.getText()).toEqual(deleteSucces);

	});

});
