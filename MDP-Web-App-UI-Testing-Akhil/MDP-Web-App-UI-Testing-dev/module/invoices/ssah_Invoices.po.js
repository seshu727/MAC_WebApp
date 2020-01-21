'use strict';

import { element, browser } from "protractor";

export class SSAHInvoiceObject {
    constructor() {

    this.filterBy_Status = element(by.id('invoiceFilterSelectItemId'));
    this.selectOption = element.all(by.tagName('mat-option'));
    // eslint-disable-next-line quotes
    this.invoice_list = element(by.css('div[class="page-content ng-star-inserted"]')).all(by.tagName('mat-card'));
    this.Inv_Details = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoice-details/section/div[2]/div/app-ssah-invoice-details/mat-card/mat-card-content')).all(by.tagName('div'));
    this.fromDate = element(by.name('fromDate'));
    this.ToDate = element(by.name('toDate'));
    this.invoiceNumber = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoice-details/section/div[2]/div/app-ssah-invoice-details/mat-card/mat-card-title/span/span'));
    this.SubmittedAmt = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoice-details/section/div[2]/div/app-ssah-invoice-details/mat-card/mat-card-content/div/app-invoice-expense-card/mat-card/div/div[3]/span[2]'));
    this.download = element(by.buttonText('Download'));
    
  
     }
    async filterInvoice(id) {
           await this.filterBy_Status.click();
          // await element(by.id(id)).click();
           await this.selectOption.get(id).click();
           await browser.sleep(1000);
           $('body').sendKeys(protractor.Key.ESCAPE);
           await element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await element(by.name('toDate')).sendKeys('3/17/2021')
           await browser.sleep(1000);
           var apply=await element(by.id('applyInvoiceFilterId'));
           browser.actions().mouseMove(apply).perform();
           await apply.click();
            $('body').sendKeys(protractor.Key.ESCAPE);
     };
    async downloadBtn (ID) {
           await this.invoice_list.get(ID).element(by.tagName('button')).click();
     };
    async invoiceStatus() {
          // await element(by.css('div[class="page-content ng-star-inserted"]')).all(by.css('div[class="col my-2"]')).all(by.tagName('span')).get(li).getText();
          await element(by.css('span[class="text-capitalize"]')).getAttribute('value');
        };

        async invoiceDetails(id){
          await element.all(by.css('div[class="col-sm-4 col-6"]')).all(by.tagName('span')).get(id).getText();
        }
  
  };
  