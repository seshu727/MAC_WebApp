'use strict';

import { browser, element } from "protractor";


export class SideMenuObject {
    constructor() {
       
        this.dashboardTab = element(by.id('DASHBOARD'));
        this.expenseTab = element(by.id('ADD_EXPENSES'));
        this.manageExpenseTab = element(by.id('NAV/MANAGE_EXPENSES'));
        this.recipientFilter = element(by.id('recipientSelectionId'));
        this.managerWorkerTab = element(by.id('MANAGE_WORKERS'));
        this.MangeOrganiser = element(by.id('MANAGE_ORGANIZATIONS'));
        this.BudgetPlanTab = element(by.id('BUDGET_PLANNING'));
        this.invoiceTab = element(by.id('INVOICES'));
        this.fundTypeFilter = element(by.id('fundTypeFilterId'));
        this.accountSetting = element(by.id('NAV/ACCOUNT_SETTINGS'));
        this.historicExpenses=element(by.id('HISTORICAL_EXPENSES'));
    }

    async selectRecipient(RecipientID) {
       // await this.recipientFilter.click();
       // await element(by.id('recipient-selection-option-' + recipientTitle.replace(' ', '_'))).click();
       console.log('Brfore recipient selected');
       await this.recipientFilter.isPresent();
       await browser.sleep(500);
      // browser.actions().mouseMove(await this.recipientFilter).perform();
       const recipient= await this.recipientFilter;
       await recipient.click();
       await browser.sleep(500);
       await element(by.id(RecipientID)).click();
       console.log('after: Recipient type change');
    }
    async openDashboardTab() {
        console.log('before: DASHBOARD tab is clicked');
        await this.dashboardTab.isPresent();
        await this.dashboardTab.click(); // Side menu list//
        console.log('after: DASHBOARD  tab is clicked');
    }

    async openAccountSetting() {
        console.log('before: Account Setting tab is clicked');
        await this.accountSetting.isPresent();
        await this.accountSetting.click(); // Side menu list//
        console.log('after: Account Setting tab is clicked');
    }

    async openExpenseTab() {
        console.log('before: ADD_EXPENSES tab is clicked');
        await this.expenseTab.isPresent();
        await this.expenseTab.click(); // Side menu list//
        console.log('after: ADD_EXPENSES tab is clicked');
    }

    async openManageExpenseTab() {
        await this.manageExpenseTab.isPresent();
        console.log('MANAGE_EXPENSES tab is exist');
        await this.manageExpenseTab.click(); // Side menu list//
    }
    async openManageWorkerTab() {
        await this.managerWorkerTab.isPresent();
        console.log('MANAGE WORKER tab is exist');
        await this.managerWorkerTab.click();
    }
    async openMangeOrganiserTab() {
        await this.MangeOrganiser.isPresent();
        console.log('MANAGE ORGANISER tab is exist');
        await this.MangeOrganiser.click();
    }
    async openBudgetPlanTab() {
        await this.BudgetPlanTab.isPresent();
        console.log('BUDGETPLAN TAB is exist');
        await this.BudgetPlanTab.click();
    }
    async openInvoiceTab() {
        await this.invoiceTab.isPresent();
        console.log('INVOICE TAB is exist');
        await this.invoiceTab.click();
    }
    async openHistoricExpenesTab(){
        await this.historicExpenses.isPresent();
        console.log('EXPENESES TAB EXISTS');
        await this.historicExpenses.click();
    }

    async changeFundType(fundTypeId) {
        console.log('before: fundType change');
        await this.fundTypeFilter.isPresent();
        await this.fundTypeFilter.click();
        await element(by.id(fundTypeId)).click();
        console.log('after: fundType change');
    }

}