'use strict';

import { element } from "protractor";

export class SuperVisorObject {

    constructor() {
        this.BATOT_ID = 'Batot test';
        this.RI_FA='Kristel Ashlie'

        this.inputSearchId = element(by.id('app-agency-recipients-filter-search-input-id'));
        this.batotRecipient = element(by.id('recipient-option-Batot_test-id'));
        this.kristelRep=element(by.id('recipient-option-Kristel_Ashlie-id'));

        this.deptIdResFundId = element(by.id('deptIdResFundId'));
        this.prodCodeResFundId = element(by.id('prodCodeResFundId'));
        this.facilitatorResFundId = element(by.id('facilitatorResFundId'));

        this.registeredFirstNameId = element(by.id('registeredFirstNameId'));
        this.registereLastNameId = element(by.id('registereLastNameId'));
        this.listItems=element.all(by.css('mat-list-item[role="listitem"]'));

        //fund settings//
        this.fundAgency=element(by.name('agency'));
        this.agencyOptions=element.all(by.tagName('mat-option'));
        this.FundStartDate=element(by.name('residStartingDate'));
        this.anualAmount=element(by.name('budget'));
        this.cashAdvance=element(by.name('cashAdvanceCtrl'));
        this.departmentID=element(by.id('deptIdResFundId'));
        this.prodCodeResFundID=element(by.id('prodCodeResFundId'));
        this.superVisor=element(by.id('facilitatorResFundId'));
        this.saveButton=element(by.id('FundSettings')).element(by.css('button[type="submit"]'));
        this.requiredError=element.all(by.css('span[class="validation-message"]'));
        this.calenderHeaderButtons=element(by.css('[class="mat-calendar-header"]')).all(by.tagName('button'));
        this. ErrorMessage = element(by.tagName('snack-bar-container')).element(by.tagName('span'));
        this. selectFiscalYear = element(by.css('div[class="d-flex justify-content-between align-items-center"]')).element(by.tagName('mat-select'));
        this. dropdownValues = element.all(by.tagName('mat-option'));

    }
    async calenderDates(ro,col){
        const parent=element(by.css('tbody[class="mat-calendar-body"]'));
        const rows=parent.all(by.tagName('tr'));
        const columns=rows.get(ro).all(by.tagName('td'));
        return columns.get(col).click();
      }

}