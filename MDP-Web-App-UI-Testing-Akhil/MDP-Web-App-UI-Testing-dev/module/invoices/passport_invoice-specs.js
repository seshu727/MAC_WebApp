'use strict';
const constants = require('../constant.value.js');
import { LoginObject } from '../login/login.obj'
import { SideMenuObject } from '../side-menu.obj';
import { passportInvoiceObject } from '../invoices/passport_invoice.obj.js';

import { browser,  Key, element } from 'protractor';

const login = new LoginObject();
const sideMenuAction = new SideMenuObject();
const invoice= new passportInvoiceObject();

const ActionRequiredError='Your submission did not pass initial verification at the Payment Processing Office. You can modify your submission based on the red warning message(s) below and then click on Resubmit or you can submit the invoice as it is without changes. If you resubmit without changes, your submission will go for manual review and your reimbursement will be delayed.'
 
const submitmessage='Please check the status of the submission in the Invoices section after 2 minutes.';
const invoiceTitle=element(by.css('app-page-header[class="page-header"]')).element(by.tagName('h5'));
const errorMessage=element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));

describe('INVOICES: for passport fund', () => {


   beforeAll(async () => {
      console.log('========> before all in invoices');
      await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
      await browser.sleep(3000);
   })

   beforeEach(async function () {
      console.log('========> before each in Invoices');
      await browser.waitForAngularEnabled(false);
      await sideMenuAction.selectRecipient('recipient-selection-option-Letitia_Vennie');
      await sideMenuAction.openInvoiceTab();
      await browser.sleep(2000);
   });

   
it('Select the invoice by Status UNDER REVIEW and verify details', async () => {
       
   
   await invoiceTitle.isPresent();
   console.log('invoice page is present') 
   expect(await invoiceTitle.getText()).toEqual('INVOICES');
   await browser.sleep(500);
   await invoice.statusListFilter.isPresent();
   console.log('filter field is exist');
   await invoice.searchByStatus('optionValueRECEIVEDId');
   await invoice.invoicelist.isPresent();
   console.log('invoice list exist');
   await invoice.searchByStatus('optionValueACTION REQUIREDId');
   await invoice.invoicelist.isPresent();
   console.log('invoice list exist');
   await invoice.searchByStatus('optionValueAPPROVEDId');
   await invoice.invoicelist.isPresent();
   console.log('invoice list exist');
   await invoice.searchByStatus('optionValueREJECTEDId');
   await invoice.invoicelist.isPresent();
   console.log('invoice list exist');
   await invoice.searchByStatus('optionValueDELETEDId');
   await browser.sleep(500);
   await invoice.invoicelist.isPresent();
   console.log('invoice list exist');
   expect(await invoice.invoicelist.isPresent()).toBe(true);
   expect(await invoice.statusValue.getText()).toEqual('UNDER REVIEW');
   browser.actions().mouseMove(await invoice.statusValue).perform();
   await browser.sleep(1000);
   await invoice.invoicelist.get(0).click();
   await browser.sleep(3000);
   await invoice.invoiceDetails.get(1).isPresent();
   expect(  await invoice.invoiceDetails.get(3).getText()).toEqual('Letitia Vennie'); //client name
   expect(  await invoice.invoiceDetails.get(7).getText()).toEqual('Minh Corrina'); //payee name

});

it('Check the Details of ACTION REQUIRED invoice and download it ',async function(){

    await invoice.statusListFilter.isPresent();
    console.log('filter field is exist');
    await invoice.searchByStatus('optionValueACTION REQUIREDId');
    await invoice.invoicelist.isPresent();
    console.log('invoice list exist');
    await browser.sleep(500);
    await invoice.searchByStatus('optionValueUNDER REVIEWId');
    await browser.sleep(1000);
    await invoice.invoicelist.isPresent();
    console.log('invoice list exist');
    expect(await invoice.invoicelist.isPresent()).toBe(true);
    expect(await invoice.statusValue.getText()).toEqual('ACTION REQUIRED');
    browser.actions().mouseMove(await invoice.statusValue).perform();
    await browser.sleep(1000);
    await invoice.invoicelist.get(0).click();
    await browser.sleep(3000);
    await invoice.invoiceDetails.get(1).isPresent();
    expect(  await invoice.invoiceDetails.get(3).getText()).toEqual('Letitia Vennie'); //client name
    expect(  await invoice.invoiceDetails.get(7).getText()).toEqual('Minh Corrina'); //payee name
    await errorMessage.isPresent();
    console.log('error message appear');
    expect(await errorMessage.getText()).toEqual(ActionRequiredError);
  /*  expect(await invoice.downloadButton.isPresent()).toBe(true);
    browser.actions().mouseMove(await invoice.downloadButton).click().perform();
    await browser.sleep(5000);*/
});

it('Cancel and Resubmit the invoice',async function(){

   await browser.navigate().back();
   browser.actions().mouseMove(await invoice.resubmitAndCancel.get(0)).perform();
   await browser.sleep(500);
   browser.actions().mouseMove(await invoice.resubmitAndCancel.get(1)).perform();
 //  expect(await invoice.resubmitAndCancel.get(1).getAttribute('value')).toEqual('')
   await invoice.resubmitAndCancel.get(1).click();
   await invoice.yesORnoButtons.isPresent();
   console.log('confirmation pop up appear');
   await invoice.yesORnoButtons.get(0).click();
   await browser.sleep(500);
   await invoice.resubmitAndCancel.get(0).click();
   await browser.sleep(4000);
});
it('check the Select All filter option', async () => {
       
     await invoiceTitle.isPresent();
     console.log('invoice page is present') 
     expect(await invoiceTitle.getText()).toEqual('INVOICES');
     await browser.sleep(500);
     await invoice.statusListFilter.isPresent();
     console.log('filter field is exist');
     await invoice.searchByStatus('optionValueSelect AllId')
     await browser.sleep(500);
     await invoice.invoicelist.isPresent();
     console.log('invoice list exist');
     expect(await invoice.invoicelist.isPresent()).toBe(true);
  });
it('Download UNDER REVIEW Invoice',async function(){

     await invoice.download(0);
     expect(await invoice.downloadButton.isPresent()).toBe(true);
     await browser.sleep(500);
     await invoice.downloadButton.click();
     await browser.sleep(5000);
 });


});