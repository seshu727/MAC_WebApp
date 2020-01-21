import { LoginObject } from '../login/login.obj';
import { SideMenuObject } from '../side-menu.obj';
import { SuperVisorObject } from './supervisor.obj';
const CONSTANT = require('../constant.value');
import * as helper from '../helper';
import { browser } from 'protractor';

let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();

const FUNDSTARTDATE='Funding Start Date can not be saved. You have already entered expenses with dates prior to your selected Funding Start Date.';
const AMOUNT='The total budget should be more than or equal to the total expenses used during the fiscal year.';

describe('Test Super visor logic', function () {
    const elm = new SuperVisorObject();

    beforeAll(async ()=>{
        await loginAction.loginAction(CONSTANT.SUPER_VISOR_EMAIL, CONSTANT.SUPER_VISOR_PASSWORD, CONSTANT.WEBSITE_DEV_URL);		

    })
  
    beforeEach(async () => {

        console.log('****** before Each in Add All Expense ******');
        await browser.waitForAngularEnabled(false);
        await sideMenuAction.openAccountSetting();
        await browser.sleep(2000);
        console.log('******************************************');
    });

    it('check supervisor fund setting validation is exist', async function () {
        expect(await (elm.facilitatorResFundId.isPresent())).toBe(true);
        expect(await (elm.prodCodeResFundId.isPresent())).toBe(true);
        expect(await (elm.deptIdResFundId.isPresent())).toBe(true);
    });

    it('test save the prodcode and deptid', async () => {
        const FIRST_NAME = 'Kristel';
        const LAST_NAME = 'Ashlie';

        expect(await elm.inputSearchId.isPresent()).toBe(true);
        await browser.sleep(3000);
        await helper.setText(elm.inputSearchId, elm.RI_FA);
        
        expect(await elm.kristelRep.isPresent()).toBe(true);
        await elm.kristelRep.click();

        expect(await helper.value(elm.registeredFirstNameId)).toEqual(FIRST_NAME);
        expect(await helper.value(elm.registereLastNameId)).toEqual(LAST_NAME)
    });

  it('Update the Fund settings for selected Recipient', async function(){

        await elm.listItems.get(1).isPresent();
        console.log('Fund settings Present')
        await elm.listItems.get(1).click();
        expect( await elm.listItems.get(1).getText()).toEqual('Fund Settings');
        await browser.sleep(3000);
        await elm.fundAgency.click();
        await elm.agencyOptions.get(0).click();
        await elm.anualAmount.clear();
        await elm.anualAmount.sendKeys('sdsdf');
        expect(await elm.requiredError.get(1).getText()).toEqual('Required');
        await elm.saveButton.isPresent();
        console.log('save button exists');
        await elm.anualAmount.sendKeys('54564656546');
        expect(await elm.requiredError.get(4).getText()).toEqual('Maximum value is: $999,999.99');
        expect(await elm.saveButton.isEnabled()).toBe(false);
    });
  it('Update the Fund start date after the date expenses added-CFY', async function(){

        
        await elm.fundAgency.click();
        await elm.agencyOptions.get(0).click();
        await elm.anualAmount.clear();
        await elm.anualAmount.sendKeys('6000');
        await elm.FundStartDate.click();
        await elm.calenderHeaderButtons.get(2).click();
        await elm.calenderHeaderButtons.get(2).click();
        await elm.calenderDates(4,6);
        await elm.superVisor.clear();
        await elm.superVisor.sendKeys('Akhil');
        await elm.saveButton.isPresent();
        console.log('save button exists');
        browser.actions().mouseMove(await elm.saveButton).perform();
        expect(await elm.saveButton.isEnabled()).toBe(true);
        await elm.saveButton.click();
        await browser.sleep(2000);
        expect(await elm.ErrorMessage.getText()).toEqual(FUNDSTARTDATE);
     });
   it('Update the ANNUAL AMOUNT less than  expenses added-CFY', async function(){

        
        await elm.fundAgency.click();
        await elm.agencyOptions.get(0).click();
        await elm.anualAmount.clear();
        await elm.anualAmount.sendKeys('6');
        await elm.FundStartDate.click();
        await elm.calenderHeaderButtons.get(1).click();
        await elm.calenderHeaderButtons.get(1).click();
        await elm.calenderDates(2,3);
        await elm.superVisor.clear();
        await elm.superVisor.sendKeys('Akhil');
        await elm.saveButton.isPresent();
        console.log('save button exists');
        browser.actions().mouseMove(await elm.saveButton).perform();
        expect(await elm.saveButton.isEnabled()).toBe(true);
        await elm.saveButton.click();
        await browser.sleep(2000);
        expect(await elm.ErrorMessage.getText()).toEqual(AMOUNT);
    });
it('Update the Fund start date after the date expenses added-NFY', async function(){

        await elm.selectFiscalYear.click();
        await elm.dropdownValues.get(2).click();
        await browser.sleep(500);
        await elm.anualAmount.clear();
        await elm.anualAmount.sendKeys('11000');
        await elm.FundStartDate.click();
        await elm.calenderHeaderButtons.get(2).click();
        await elm.calenderHeaderButtons.get(2).click();
        await elm.calenderDates(4,6);
        await elm.superVisor.clear();
        await elm.superVisor.sendKeys('Akhil');
        await elm.saveButton.isPresent();
        console.log('save button exists');
        browser.actions().mouseMove(await elm.saveButton).perform();
        expect(await elm.saveButton.isEnabled()).toBe(true);
        await elm.saveButton.click();
        await browser.sleep(2000);
        expect(await elm.ErrorMessage.getText()).toEqual(FUNDSTARTDATE);
     });
   it('Update the ANNUAL AMOUNT less than  expenses added-NFY', async function(){
 
        
        await elm.anualAmount.clear();
        await elm.anualAmount.sendKeys('60');
        await elm.FundStartDate.click();
        await elm.calenderHeaderButtons.get(1).click();
        await elm.calenderHeaderButtons.get(1).click();
        await elm.calenderDates(2,3);
        await elm.superVisor.clear();
        await elm.superVisor.sendKeys('Akhil');
        await elm.saveButton.isPresent();
        console.log('save button exists');
        browser.actions().mouseMove(await elm.saveButton).perform();
        expect(await elm.saveButton.isEnabled()).toBe(true);
        await elm.saveButton.click();
        await browser.sleep(2000);
        expect(await elm.ErrorMessage.getText()).toEqual(AMOUNT);
    });
 it('Update the Fund start date after the date expenses added-PFY', async function(){

        await elm.selectFiscalYear.click();
        await elm.dropdownValues.get(0).click();
        await browser.sleep(500);
        await elm.anualAmount.clear();
        await elm.anualAmount.sendKeys('11000');
        await elm.FundStartDate.click();
        await elm.calenderHeaderButtons.get(2).click();
        await elm.calenderHeaderButtons.get(2).click();
        await elm.calenderDates(4,5);
        await elm.superVisor.clear();
        await elm.superVisor.sendKeys('Akhil');
        await elm.saveButton.isPresent();
        console.log('save button exists');
        browser.actions().mouseMove(await elm.saveButton).perform();
        expect(await elm.saveButton.isEnabled()).toBe(true);
        await elm.saveButton.click();
        await browser.sleep(2000);
        expect(await elm.ErrorMessage.getText()).toEqual(FUNDSTARTDATE);
     });
   it('Update the ANNUAL AMOUNT less than  expenses added-PFY', async function(){
 
        await elm.anualAmount.clear();
        await elm.anualAmount.sendKeys('60');
        await elm.FundStartDate.click();
        await elm.calenderHeaderButtons.get(1).click();
        await elm.calenderHeaderButtons.get(1).click();
        await elm.calenderDates(2,3);
        await elm.superVisor.clear();
        await elm.superVisor.sendKeys('Akhil');
        await elm.saveButton.isPresent();
        console.log('save button exists');
        browser.actions().mouseMove(await elm.saveButton).perform();
        expect(await elm.saveButton.isEnabled()).toBe(true);
        await elm.saveButton.click();
        await browser.sleep(2000);
        expect(await elm.ErrorMessage.getText()).toEqual(AMOUNT);
    });
it('Update Fund Details with Valid data-PFY', async function(){
 
        await elm.anualAmount.clear();
        await elm.anualAmount.sendKeys('11000');
        await elm.FundStartDate.click();
        await elm.calenderHeaderButtons.get(1).click();
        await elm.calenderHeaderButtons.get(1).click();
        await elm.calenderDates(2,3);
        await elm.superVisor.clear();
        await elm.superVisor.sendKeys('Akhil');
        await elm.saveButton.isPresent();
        console.log('save button exists');
        browser.actions().mouseMove(await elm.saveButton).perform();
        expect(await elm.saveButton.isEnabled()).toBe(true);
        await elm.saveButton.click();
        await browser.sleep(2000);
        expect(await elm.ErrorMessage.getText()).toEqual('Fund settings saved');
    });



});