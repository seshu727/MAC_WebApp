import {
    element
} from "protractor";

export class ExpenseObject {
    constructor() {

        this.payment_date = element(by.name('expenseDateCtrl'));
        this.paidTo = element(by.name('paidToCtrl'));
        this.Description = element(by.name('descriptionCtrl'));
        this.amount = element(by.name('amountCtrl'));
        this.title = element(by.xpath('//*[@id="mat-dialog-title-0"]'));
        this.expenseLists = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-add-expenses/div/app-expenses-types-list/mat-list')).all(by.tagName('mat-list-item')).all(by.tagName('button'));
        this.expenseAddedPanel = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-add-expenses/div/app-expenses-quick-review'));
        this.errorMessage1 = element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));

        this.startDate = element(by.name('fromDate'));
        this.endDate = element(by.name('toDate'));

        this.noOfHours = element(by.name('noHoursCtrl'));
        this.hourlyRate = element(by.name('rateCtrl'));
        this.radioButton = element.all(by.tagName('mat-radio-button'));
        this.supportWorkerList = element.all(by.tagName('mat-option'));
        this.nameOfSupportWorker = element(by.name('workerCtrl'));
        this.invoiceNumber = element(by.name('invoiceNumber'));
        this.description = element(by.name('descriptionCtrl'));

        this.cost = element(by.name('totalCost'));
        this.bdate = element(by.name('expenseDateCtrl'));

        this.NameOfSupportWorker = element(by.name('workerCtrl'));
        this.SupportWorkerList = element.all(by.tagName('mat-option'));

        this.Total_Amount = element(by.name('totalCost'));

        this.nameofchildcare = element(by.name('paidToCtrl'));
        this.nameofmembership = element(by.name('paidToCtrl'));
        this.NameOfDaycareNursary = element(by.name('paidToCtrl'));
        this.nameofserviceprovider = element(by.name('paidToCtrl'));
        this.nameofprogram = element(by.name('paidToCtrl'));
        this.serviceProvider = element(by.name('nameOfProvider'));
        this.expenseDate = element(by.name('expenseDateCtrl'));
        this.typeCtrl = element(by.name('typeCtrl'));
        this.typeCtrlList = element.all(by.tagName('mat-option'));
        this.distance=element(by.name('distanceCtrl'));
        this.rateForKM = element(by.name('rateCtrl'));


        this.nameOFNurse = element(by.name('nameOfNurseCtrl'));
        this.ProfessionalID = element(by.name('idNumberCtrl'));

        this.TypeOFTask = element(by.name('descriptionCtrl'));
        this.service_provider = element(by.name('workerNameCtrl'));

        this.nameofPerson_trained = element(by.name('nameOfNurseCtrl'));
        this.training_provided_by = element(by.name('paidToCtrl'));
        this.noofHours = element(by.name('noHoursCtrl'));
        this.expenseAddedPannel = element(by.id('expenses-quick-review'));

        this.expenseFormTitle = element(by.id('expense-form-title'));
        this.expenseAttachmentButtonId = element(by.id('expenseAttachmentFormId'));
        this.expenseAttachmentFormInputFileId = element(by.id('expenseFormInputFileId'));
        this.expenseAttachmentDeleteButton = element.all(by.id('deleteAttachmentButtonId'));
        this.expenseAttachmentCards = element.all(by.css('.attachment-card'));

        this.attachmentRestrictionId = element(by.tagName('app-attachment-restrictions'));
        this.attachmentRestrictionBackToEditId = element(by.id('attachmentBackToEditId'));

    }

    async saveAction(withConfirm = false) {
        const saveExpenseBtn = element(by.id('saveExpenseBtn'));
        await saveExpenseBtn.isPresent();
        await saveExpenseBtn.click();

        if (withConfirm) {
            const confirmFormBtn = element(by.id('okButton'));
            await confirmFormBtn.isPresent();
            await confirmFormBtn.click();
        }
    }

    async clickExpenseListItem(expenseId) {
        console.log('before: clickExpenseListItem ');
        await element(by.id(expenseId)).isPresent();
        await element(by.id(expenseId)).click(); //Expense list//
        console.log('after: clickExpenseListItem ');
    }

    async expectExpenseAttachmentRestrictionIsExist() {
        console.log('check if expense attachment restricted is exist');
        await this.attachmentRestrictionId.isPresent();
        expect(await this.attachmentRestrictionId.isDisplayed()).toBe(true);

        console.log('click in back to edit');

        await this.attachmentRestrictionId.isPresent();
        await this.attachmentRestrictionBackToEditId.click();
    }
}