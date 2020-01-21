'use strict';

const CONSTANT = require('../constant.value');
import { LoginObject } from '../login/login.obj';
import { SideMenuObject } from '../side-menu.obj';
import { browser, element, ExpectedConditions } from 'protractor';


let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();



// fields locators ***//
const Month_Yr_filter = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-budget/div/div[2]/div[1]')).element(by.tagName('input'));
const calender = element(by.xpath('/html/body/div[2]')).element(by.tagName('table')).all(by.tagName('tr'));
const BudgetInputfileds = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-budget/div/div[2]/div[2]')).all(by.tagName('input'));
const saveButton = element(by.css('div[class="d-flex flex-wrap justify-content-end px-4"]')).all(by.tagName('button'));
const Save_and_copy_button = element(by.buttonText('Save and copy to other months'));
const Save_Copy_popup = element(by.xpath('/html/body/div[2]')).element(by.xpath('//*[@id="mat-dialog-0"]/app-budget-copy-modal/mat-dialog-content/div[2]')).all(by.tagName('div'));



describe('SSAH:: Account Settings', function () {

  beforeAll(async () => {
    console.log('========> before all login');
     await loginAction.loginAction(CONSTANT.EMAIL, CONSTANT.PASSWORD, CONSTANT.WEBSITE_URL);		
    await browser.sleep(1000);
});


  beforeEach(async function () {
    console.log('****** before Each in Add All Expense ******');
    browser.ignoreSynchronization = true;
    await browser.waitForAngularEnabled(false);
    // await action.openExpenseTab(0);
    await sideMenuAction.openBudgetPlanTab();
    console.log('******************************************');
  });
  it('Enter The budget for Current Month', async function () {

    
    await Month_Yr_filter.click();
    await calender.get(4).all(by.tagName('td')).get(2).click();

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
    await browser.sleep(500);


  });
  it('Enter The budget for past Month', async function () {

    await Month_Yr_filter.click();
    await calender.get(4).all(by.tagName('td')).get(1).click();
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
    await browser.sleep(500);

  });
  it('Enter The budget for future Month', async function () {

    await Month_Yr_filter.click();
    await calender.get(4).all(by.tagName('td')).get(3).click();
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
    await browser.sleep(500);

  });

  it('Save and Copy to Other Month and Click on save button', async function () {
   
    const checkbox = element.all(by.css('div[class="d-flex px-0 py-2 justify-content-end ng-star-inserted"]')).all(by.tagName('mat-checkbox'));
    const saveAndCancelButtons=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));

    await saveButton.get(1).click();
    await checkbox.isPresent();
    await checkbox.get(6).click();
    await saveAndCancelButtons.get(1).click();
    await browser.sleep(500);

    
  });

  it('checck the Amount for Copied Month', async function () {

    const BudgetValue = element(by.xpath('/html/body/div[2]')).element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-budget/div/div[2]/div[2]/app-budget-planning/mat-card/mat-card-content/div')).all(by.tagName('div')).get(0).all(by.tagName('div'));
    const calenderPreviousButton=element(by.css('button[class="mat-calendar-previous-button mat-icon-button mat-button-base"]'))

    await Month_Yr_filter.click();
    await calenderPreviousButton.click();
    expect(await BudgetValue.get(1).getText()).toEqual('$150.00');

  });
});