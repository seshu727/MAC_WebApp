'use strict';

import { browser,element } from 'protractor';

export class budgetPlanObject {

    constructor() {
        this.monthYrFilter = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-budget/div/div[2]/div[1]')).element(by.tagName('input'));
        this.calender = element(by.xpath('/html/body/div[2]')).element(by.tagName('table')).all(by.tagName('tr'));
        this.budgetInputfileds = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-budget/div/div[2]/div[2]')).all(by.tagName('input'));
        this.checkbox = element.all(by.css('div[class="d-flex px-0 py-2 justify-content-end ng-star-inserted"]')).all(by.tagName('mat-checkbox'));
        this.saveButton = element(by.css('div[class="d-flex flex-wrap justify-content-end px-4"]')).all(by.tagName('button'));
        this.successMessage=element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));
        this.budgetValue = element.all(by.css('div[class="col-2 p-0 text-center"]'));
        this.saveAndCancelButtons=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));
        this.calenderPreviousButton=element(by.css('button[class="mat-calendar-previous-button mat-icon-button mat-button-base"]'))
    }
}