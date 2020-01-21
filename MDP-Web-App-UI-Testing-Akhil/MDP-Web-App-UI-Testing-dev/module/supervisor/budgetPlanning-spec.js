import { LoginObject } from '../login/login.obj';
import { SideMenuObject } from '../side-menu.obj';
import { SuperVisorObject } from './supervisor.obj';
const CONSTANT = require('../constant.value');
import * as helper from '../helper';
import { browser } from 'protractor';

let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();

const BudgetInputfileds = element.all(by.css('div[class="mat-form-field-infix"]')).all(by.tagName('input'));
const saveButton = element.all(by.css('button[class="m-2 mat-raised-button mat-button-base mat-primary"]'));
const Month_Yr_filter = element(by.css('input[placeholder="Month/Year"]'));
const calenderHeaderButtons=element(by.css('[class="mat-calendar-header"]')).all(by.tagName('button'));
const ErrorMessage = element(by.tagName('snack-bar-container')).element(by.tagName('span'));
const calender = element(by.xpath('/html/body/div[2]')).element(by.tagName('table')).all(by.tagName('tr'));
const SuccessMessage = element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));

describe('SUPERVISOR:: BudgetPlanning', function () {
    const elm = new SuperVisorObject();

    beforeAll(async ()=>{
        await loginAction.loginAction(CONSTANT.SUPER_VISOR_EMAIL, CONSTANT.SUPER_VISOR_PASSWORD, CONSTANT.WEBSITE_DEV_URL);		

    })
  
    beforeEach(async () => {

        console.log('****** before Each in Add All Expense ******');
        await browser.waitForAngularEnabled(false);
        await sideMenuAction.openBudgetPlanTab();
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
it('Enter The budget for Current Month', async function () {

    
        await Month_Yr_filter.click();
        await calender.get(4).all(by.tagName('td')).get(3).click();
         
        await browser.sleep(1000);
        await BudgetInputfileds.get(0).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(0).sendKeys('10');
        await BudgetInputfileds.get(1).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(1).sendKeys('11');
        await BudgetInputfileds.get(2).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(2).sendKeys('12');
        await BudgetInputfileds.get(3).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(3).sendKeys('13');
        await BudgetInputfileds.get(4).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(4).sendKeys('14');
        await BudgetInputfileds.get(5).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(5).sendKeys('15');
        await BudgetInputfileds.get(6).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(6).sendKeys('16');
        await BudgetInputfileds.get(7).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(7).sendKeys('17');
        await BudgetInputfileds.get(8).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(8).sendKeys('1');
        await BudgetInputfileds.get(9).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(9).sendKeys('10');
        await BudgetInputfileds.get(10).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(10).sendKeys('5');
        await BudgetInputfileds.get(11).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(11).sendKeys('6');
        await BudgetInputfileds.get(12).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(12).sendKeys('7');
        await BudgetInputfileds.get(13).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(13).sendKeys('6');
        await BudgetInputfileds.get(14).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(14).sendKeys('7');
        await browser.sleep(1000);
         var save=await saveButton.get(0);
        expect(await save.isEnabled()).toEqual(true);
        browser.actions().mouseMove(await save).click().perform();
        await save.click();
        await browser.sleep(2000);
        expect(await SuccessMessage.getText()).toEqual('Budget has been saved successfully');

      });
 it('Enter The budget for past Month', async function () {

    
        await Month_Yr_filter.click();
        await calender.get(4).all(by.tagName('td')).get(2).click();
         
        await browser.sleep(1000);
        await BudgetInputfileds.get(0).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(0).sendKeys('10');
        await BudgetInputfileds.get(1).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(1).sendKeys('11');
        await BudgetInputfileds.get(2).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(2).sendKeys('12');
        await BudgetInputfileds.get(3).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(3).sendKeys('13');
        await BudgetInputfileds.get(4).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(4).sendKeys('14');
        await BudgetInputfileds.get(5).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(5).sendKeys('15');
        await BudgetInputfileds.get(6).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(6).sendKeys('16');
        await BudgetInputfileds.get(7).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(7).sendKeys('17');
        await BudgetInputfileds.get(8).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(8).sendKeys('1');
        await BudgetInputfileds.get(9).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(9).sendKeys('10');
        await BudgetInputfileds.get(10).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(10).sendKeys('5');
        await BudgetInputfileds.get(11).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(11).sendKeys('6');
        await BudgetInputfileds.get(12).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(12).sendKeys('7');
        await BudgetInputfileds.get(13).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(13).sendKeys('6');
        await BudgetInputfileds.get(14).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await BudgetInputfileds.get(14).sendKeys('7');
        await browser.sleep(1000);
         var save=await saveButton.get(0);
        expect(await save.isEnabled()).toEqual(true);
        browser.actions().mouseMove(await save).click().perform();
        await save.click();
        await browser.sleep(2000);
        expect(await SuccessMessage.getText()).toEqual('Budget has been saved successfully');

      });
it('Save and Copy to Other Month and Click on save button', async function () {
   
        const checkbox = element.all(by.css('div[class="d-flex px-0 py-2 justify-content-end ng-star-inserted"]'));
        const saveAndCancelButtons=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));
    
          browser.actions().mouseMove(await saveButton.get(0)).perform();
          await saveButton.get(1).click();
          await checkbox.isPresent();
          await checkbox.get(6).click();
          await saveAndCancelButtons.get(1).click();
          await browser.sleep(2000);
          expect(await SuccessMessage.getText()).toEqual('Budget has been saved successfully');

        
     });
    
 it('checck the Amount for Copied Month', async function () {
    
        const BudgetValue = element.all(by.css('div[class="col-2 p-0 text-center"]'));
        const calenderPreviousButton=element(by.css('button[class="mat-calendar-previous-button mat-icon-button mat-button-base"]'))
    
        await Month_Yr_filter.click();
        await calenderPreviousButton.click();
        expect(await BudgetValue.get(0).getText()).toEqual('$129.00');
    
      });
    });



