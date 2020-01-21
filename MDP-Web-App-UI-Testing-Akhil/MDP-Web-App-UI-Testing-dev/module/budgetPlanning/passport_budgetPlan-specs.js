'use strict';

const CONSTANT = require('../constant.value');
import { LoginObject } from '../login/login.obj';
import { SideMenuObject } from '../side-menu.obj';
import { browser, element, ExpectedConditions } from 'protractor';
import { budgetPlanObject } from '../budgetPlanning/passport_budgetPlan.obj.js';

let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();
let elm = new budgetPlanObject();




describe('PASSPORT:: BUDGETPLAN ::::::::::: ', function () {

	beforeAll(async () => {
        console.log('========> before all login');
	    	await loginAction.loginAction(CONSTANT.EMAIL1, CONSTANT.PASSWORD1, CONSTANT.WEBSITE_URL);		
        await browser.sleep(1000);
    })

    beforeEach(async function () {
        console.log('========> before each testcase');
        await browser.waitForAngularEnabled(false);
	  //await sideMenuAction.selectRecipient('Isis Linwood');
	     await sideMenuAction.openBudgetPlanTab();
	    console.log('******************************************');
    });
    it('Enter The budget for Current Month', async function () {

      //  await sideMenuAction.openBudgetPlanTab();

        await elm.monthYrFilter.click();
        await elm.calender.get(4).all(by.tagName('td')).get(2).click();
        await browser.sleep(500);
    
        await elm.budgetInputfileds.get(0).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(0).sendKeys('10');

        await elm.budgetInputfileds.get(1).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(1).sendKeys('11');

        await elm.budgetInputfileds.get(2).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(2).sendKeys('12');

        await elm.budgetInputfileds.get(3).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(3).sendKeys('13');

        await elm.budgetInputfileds.get(4).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(4).sendKeys('14');
        


       await elm.budgetInputfileds.get(5).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(5).sendKeys('15');

        await elm.budgetInputfileds.get(6).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(6).sendKeys('16');

       await elm.budgetInputfileds.get(7).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(7).sendKeys('17');

       await elm.budgetInputfileds.get(8).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(8).sendKeys('1');

        await elm.budgetInputfileds.get(9).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(9).sendKeys('10');

        await elm.budgetInputfileds.get(10).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(10).sendKeys('5');

        await elm.budgetInputfileds.get(11).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(11).sendKeys('6');

        await elm.budgetInputfileds.get(12).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(12).sendKeys('7');
       

        await elm.budgetInputfileds.get(13).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(13).sendKeys('6');
       

        await elm.budgetInputfileds.get(14).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(14).sendKeys('5');
        

        await elm.budgetInputfileds.get(15).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(15).sendKeys('3');
      

        await elm.budgetInputfileds.get(16).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(16).sendKeys('8');
        
        await browser.sleep(200);
        const save=await elm.saveButton.get(0);     
        expect(await save.isEnabled()).toEqual(true);
        browser.actions().mouseMove(await save).click().perform();
        await save.click();
        expect(await elm.successMessage.getText()).toEqual('Budget has been saved successfully');
        await browser.sleep(500);

      });
    it('Enter The budget for past Month', async function () {
  
        await elm.monthYrFilter.click();
        await elm.calender.get(4).all(by.tagName('td')).get(1).click();
        
        await elm.budgetInputfileds.get(0).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(0).sendKeys('10');

        await elm.budgetInputfileds.get(1).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(1).sendKeys('11');

        await elm.budgetInputfileds.get(2).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(2).sendKeys('12');

        await elm.budgetInputfileds.get(3).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(3).sendKeys('13');

        await elm.budgetInputfileds.get(4).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(4).sendKeys('14');

        await elm.budgetInputfileds.get(5).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(5).sendKeys('15');

        await elm.budgetInputfileds.get(6).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(6).sendKeys('16');

        await elm.budgetInputfileds.get(7).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(7).sendKeys('17');

        await elm.budgetInputfileds.get(8).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(8).sendKeys('1');

        await elm.budgetInputfileds.get(9).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(9).sendKeys('10');

        await elm.budgetInputfileds.get(10).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(10).sendKeys('5');

        await elm.budgetInputfileds.get(11).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(11).sendKeys('6');

        await elm.budgetInputfileds.get(12).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(12).sendKeys('7');
       

        await elm.budgetInputfileds.get(13).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(13).sendKeys('6');
       

        await elm.budgetInputfileds.get(14).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(14).sendKeys('5');
        

        await elm.budgetInputfileds.get(15).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(15).sendKeys('3');
      

        await elm.budgetInputfileds.get(16).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(16).sendKeys('8');
        
        await browser.sleep(200);
        const save=await elm.saveButton.get(0);     
        expect(await save.isEnabled()).toEqual(true);
        browser.actions().mouseMove(await save).click().perform();
        await save.click();
        expect(await elm.successMessage.getText()).toEqual('Budget has been saved successfully');
        await browser.sleep(500);
    });
    it('Enter The budget for future Month', async function () {
  
        await elm.monthYrFilter.click();
        await elm.calender.get(4).all(by.tagName('td')).get(3).click();
        
        await elm.budgetInputfileds.get(0).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(0).sendKeys('10');

        await elm.budgetInputfileds.get(1).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(1).sendKeys('0');

        await elm.budgetInputfileds.get(2).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(2).sendKeys('12');

        await elm.budgetInputfileds.get(3).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(3).sendKeys('13');

        await elm.budgetInputfileds.get(4).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(4).sendKeys('14');

        await elm.budgetInputfileds.get(5).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(5).sendKeys('15');

        await elm.budgetInputfileds.get(6).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(6).sendKeys('16');

        await elm.budgetInputfileds.get(7).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(7).sendKeys('17');

        await elm.budgetInputfileds.get(8).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(8).sendKeys('1');

        await elm.budgetInputfileds.get(9).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(9).sendKeys('10');

        await elm.budgetInputfileds.get(10).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(10).sendKeys('5');

        await elm.budgetInputfileds.get(11).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(11).sendKeys('6');

        await elm.budgetInputfileds.get(12).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(12).sendKeys('7');
       

        await elm.budgetInputfileds.get(13).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(13).sendKeys('6');
       

        await elm.budgetInputfileds.get(14).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(14).sendKeys('5');
        

        await elm.budgetInputfileds.get(15).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(15).sendKeys('3');
      

        await elm.budgetInputfileds.get(16).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.sleep(200);
        await elm.budgetInputfileds.get(16).sendKeys('8');
        
        await browser.sleep(200);
        var save=await elm.saveButton.get(0);     
        expect(await save.isEnabled()).toEqual(true);
        browser.actions().mouseMove(await save).click().perform();
        await save.click();
        expect(await elm.successMessage.getText()).toEqual('Budget has been saved successfully');
        await browser.sleep(500);
    });
    it('Save and Copy to Other Month and Click on save button', async function () {
        await elm.saveButton.get(1).click();
        expect(await elm.checkbox.isPresent()).toBe(true);
        await elm.checkbox.get(6).click();
        await elm.saveAndCancelButtons.get(1).click();
        await browser.sleep(500);

      });
    
    it('checck the Amount for Copied Month', async function () {
    
        await elm.monthYrFilter.click();
        await elm.calenderPreviousButton.click();
        await elm.calender.get(4).all(by.tagName('td')).get(1).click();
        await browser.sleep(500);
        var value =await elm.budgetValue.get(0);
        expect(value.isPresent()).toBe(true);
       // expect(value.getText()).toEqual('12');
        console.log('Value Present')
    
      });
    });
