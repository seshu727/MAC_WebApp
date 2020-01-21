'use strict';
const CONSTANT = require('../constant.value.js');
import {
   LoginObject
} from '../login/login.obj'
import {
   SideMenuObject
} from '../side-menu.obj';

import {
   browser, element
} from 'protractor';

import { 
    passportInvoiceObject 
} from '../invoices/passport_invoice.obj.js';

import { 
    SuperVisorObject 
} from './supervisor.obj';

import * as helper from '../helper';




const loginAction = new LoginObject();
const sideMenuAction = new SideMenuObject();
const invoice=new passportInvoiceObject();
const elm = new SuperVisorObject();


const submitmessage = 'Submitted Successfully';
const saveExpenseBtn = element(by.id('saveExpenseBtn'));
const confirmFormBtn = element(by.id('okButton'));

const invoiceTitle=element(by.css('app-page-header[class="page-header"]')).element(by.tagName('h5'));
const errorMessage=element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));
const invoiceDetails=element(by.css('mat-card[class="data-card mat-card"]')).all(by.tagName('span'));
const invoiceList=element.all(by.css('div[class="ng-star-inserted"]'));
const statuValue=element.all(by.css('div[class="col my-2"]')).all(by.tagName('span'));
const submittedAmount=element.all(by.css('div[class="col-4 col-sm-3"]')).all(by.tagName('span'));
const moreButton=element(by.css('div[class="col-auto my-auto"]')).element(by.tagName('button'));
const downloadButton=element(by.buttonText('Download'));

describe('INVOICES: For Supervisor', () => {


    beforeAll(async ()=>{
        await loginAction.loginAction(CONSTANT.SUPER_VISOR_EMAIL, CONSTANT.SUPER_VISOR_PASSWORD, CONSTANT.WEBSITE_DEV_URL);		

    })
  
    beforeEach(async () => {

        console.log('****** before All functions ******');
        await browser.waitForAngularEnabled(false);
        await sideMenuAction.openInvoiceTab();
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

 it('Select the invoice by Status Submitted and verify details', async () => {
       
   
       await invoiceTitle.isPresent();
       console.log('invoice page is present') 
       expect(await invoiceTitle.getText()).toEqual('INVOICES');
       await browser.sleep(500);
       await invoice.statusListFilter.isPresent();
       console.log('filter field is exist');
       await invoice.searchByStatus('optionValueRejectedId');
       await browser.sleep(2000);
       await invoiceList.isPresent();
       expect(await invoiceList.isPresent()).toBe(true);
       expect(await statuValue.get(7).getText()).toEqual('Submitted');
       browser.actions().mouseMove(await invoice.statusValue).perform();
       await browser.sleep(500);
       await invoice.invoicelist.get(0).click();
       await browser.sleep(2000);
       await invoiceDetails.get(1).isPresent();
       expect(  await invoiceDetails.get(1).getText()).toEqual('Kristel Ashlie'); 
      
    });
 it('Select the invoice by Status Rejected and verify details', async () => {
       
   
    await invoiceTitle.isPresent();
    console.log('invoice page is present') 
    expect(await invoiceTitle.getText()).toEqual('INVOICES');
    await browser.sleep(500);
    await invoice.statusListFilter.isPresent();
    console.log('filter field is exist');
    await invoice.searchByStatus('optionValueRejectedId');
    await browser.sleep(1000);
    await invoice.searchByStatus('optionValueSubmittedId');
    await browser.sleep(1000);
    await invoiceList.isPresent();
    expect(await invoiceList.isPresent()).toBe(true);
    expect(await statuValue.get(7).getText()).toEqual('Rejected');
    browser.actions().mouseMove(await invoice.statusValue).perform();
    await browser.sleep(500);
    await invoice.invoicelist.get(0).click();
    await browser.sleep(2000);
    await invoiceDetails.get(1).isPresent();
    expect(await invoiceDetails.get(1).getText()).toEqual('Kristel Ashlie'); //client name
    await browser.sleep('1000');
    expect(await submittedAmount.get(3).getText()).toEqual('$0.00');
  }); 
it('Download the Submitted Invoice', async function(){
    
    await invoiceTitle.isPresent();
    console.log('invoice page is present') 
    expect(await invoiceTitle.getText()).toEqual('INVOICES');
    await browser.sleep(500);
    await invoice.statusListFilter.isPresent();
    console.log('filter field is exist');
    await invoice.searchByStatus('optionValueSubmittedId');
    await browser.sleep(2000);
    await invoiceList.isPresent();
    expect(await invoiceList.isPresent()).toBe(true);
    await browser.sleep(500);
    await invoice.searchByStatus('optionValueRejectedId');
    await invoiceList.isPresent();
    expect(await invoiceList.isPresent()).toBe(true);
    await browser.sleep(500);
    browser.actions().mouseMove(await moreButton).perform();
    await browser.sleep(500);
    await moreButton.click();
    browser.actions().mouseMove(await downloadButton).perform();
    await browser.sleep(1000);
    await downloadButton.click();
    await browser.sleep(4000);


});
});