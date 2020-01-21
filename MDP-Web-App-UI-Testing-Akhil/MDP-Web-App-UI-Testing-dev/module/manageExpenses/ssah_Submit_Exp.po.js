'use strict';

import { browser } from 'protractor';

var VALUES = require('../constant.value');

export class submitExpenseObj {

    constructor() {

    this.filter_all = element(by.id('mat-select-6'));
    this.selectOption = element(by.xpath('/html/body/div[2]/div[1]')).all(by.tagName('mat-option'));
    this.ApplyBtn = element(by.buttonText('Apply'));

    //*******Generate invoice ********** */
    this.checkbox = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]/div[2]/div')).all(by.tagName('mat-checkbox'));
    this.CretaeInvoiceBtn = element(by.buttonText('Create Invoice'));
    this.Disclimar_check = element(by.name('approval'));
    this.NextBtn = element(by.buttonText('Next'));
    this.ReginalOfficeBtn = element(by.buttonText('Submit to Regional Office'));
    //----------------------------------------********************-----------------------//
    }
    async filterExpense (ind) { //Expense Filter //
        await filter_all.click();
        selectOption.get(ind).click();
        ApplyBtn.click();
    }

     async GenerateInvoice() {
        CretaeInvoiceBtn.click();
        Disclimar_check.click();
        NextBtn.click();
        browser.sleep(12000);
        expect(ReginalOfficeBtn.isEnabled()).toBe(true);
        ReginalOfficeBtn.click();
        browser.sleep(13000);
    }

    async DownloadInvoice () {
        CretaeInvoiceBtn.click();
        Disclimar_check.click();
        NextBtn.click();
        browser.sleep(12000);
        expect(element(by.buttonText('Download')).isEnabled()).toBe(true);
        var submit1 = element.all(by.buttonText('Download')).first();
        browser.actions().mouseMove(submit1).click().perform();
        var submit = element.all(by.buttonText('Download')).last();
        browser.sleep(1000);
        browser.actions().mouseMove(submit).click().perform();
        browser.sleep(13000);
    }

};
