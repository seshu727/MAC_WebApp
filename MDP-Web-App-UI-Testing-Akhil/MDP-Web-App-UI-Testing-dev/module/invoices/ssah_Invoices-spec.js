'use strict';

const constants = require('../constant.value.js');
import { LoginObject } from '../login/login.obj'
import { SideMenuObject } from '../side-menu.obj';
import { browser,  Key, element } from 'protractor';
import{SSAHInvoiceObject}  from '../invoices/ssah_Invoices.po.js';


let login = new LoginObject();
let sideMenuObject = new SideMenuObject();
let invoices=new SSAHInvoiceObject();


const invoice_list = element(by.css('div[class="page-content ng-star-inserted"]')).all(by.tagName('mat-card'));


describe('SSAH:: Invoices', () => {

   beforeAll(async () => {
      console.log('========> before all in Add All Expense');
      await login.loginAction(constants.EMAIL_DEV_SSAH, constants.PASSWORD_DEV_SSAH, constants.WEBSITE_DEV_URL);
   });

   beforeEach(async function () {
      console.log('========> before each in Add All Expense');
      await browser.waitForAngularEnabled(false);
      await sideMenuObject.openDashboardTab();
      await sideMenuObject.openInvoiceTab();
   });

  it('Select All from filter by status and check the invoices',async function () {
   
     await invoices.filterInvoice(0);
     await invoice_list.isPresent();
     console.log('Invoice list is present')
     expect(await invoice_list.isPresent()).toBe(true);
  });

  it('Download invoic with status Downloaded', async function () {
   // browser.navigate().back();
   
         await invoices.filterInvoice(0);
         await invoice_list.isPresent();
         console.log('Invoice list is present');
         await invoices.filterInvoice(2);
         await invoice_list.isPresent();
         console.log('Invoice list is present');
         await invoices.filterInvoice(3);
         await invoice_list.isPresent();
         console.log('Invoice list is present');
        // expect(await invoices.invoiceStatus()).toEqual('');
         expect(await invoice_list.isPresent()).toBe(true)
         await invoices.downloadBtn(0);
         await browser.sleep(1000);
         await invoices.download.click();
         await browser.sleep(4000);
  });
  it('Download invoic with status Submitted', async function () {
         await invoices.filterInvoice(1);
         await invoice_list.isPresent();
         console.log('Invoice list is present');
         await browser.sleep(1000);
         await invoices.filterInvoice(2);
         await invoice_list.isPresent();
         console.log('Invoice list is present');
          // expect(await invoices.invoiceStatus()).toEqual('');
         expect(await invoice_list.isPresent()).toBe(true)
         await invoices.downloadBtn(0);
         await browser.sleep(1000);
         await invoices.download.click();
         await browser.sleep(4000);
  });
  it('Download invoic with status Rejected', async  function () {
         await invoices.filterInvoice(3);
         await invoice_list.isPresent();
         console.log('Invoice list is present');
         await browser.sleep(1000);
         await invoices.filterInvoice(2);
         await invoice_list.isPresent();
         console.log('Invoice list is present');
         // expect(await invoices.invoiceStatus()).toEqual('');
          expect(await invoice_list.isPresent()).toBe(true)
          await invoices.downloadBtn(0);
          await browser.sleep(1000);
          await invoices.download.click();
          await browser.sleep(3000);
   });

   it('check the details of REJECTED invoice',async function(){
      
         await invoice_list.click();
         await browser.sleep(1000);
        // expect(await invoices.invoiceDetails(3)).toEqual('');
     //   expect(await invoices.invoiceDetails(7)).toEqual('');
  
  });
  

});