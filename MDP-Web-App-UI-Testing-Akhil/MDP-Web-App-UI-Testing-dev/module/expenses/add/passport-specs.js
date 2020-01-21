'use strict';

const constants = require('../../constant.value.js');``
import {
    LoginObject
} from '../../login/login.obj';
import {
    VerificationActionPopup
} from '../../verification-action-popup.obj';
import {
    SideMenuObject

} from '../../side-menu.obj'

import {
    ExpenseObject
} from '../expense.obj'
import {
    browser
} from 'protractor';

describe('PASSPORT:: Adding expense', async function () {
    const login = new LoginObject();
    const locator = new ExpenseObject();
    const verificationPopElm = new VerificationActionPopup();
    const sideMenuObject = new SideMenuObject();

    beforeAll(async () => {
        console.log('========> before all in Add All Expense');
        await login.loginAction(constants.EMAIL1_DEV_PASSPORT, constants.PASSWORD1_DEV_PASSPORT, constants.WEBSITE_DEV_URL);
       
    })

    beforeEach(async function () {
        console.log('========> before each in Add All Expense');
        await browser.waitForAngularEnabled(false);
        await sideMenuObject.selectRecipient('recipient-selection-option-Letitia_Vennie');
      //  await sideMenuObject.openDashboardTab();
        await sideMenuObject.openExpenseTab();
        
    });

    it('SUPPORT WORKER', async function () {

        const SPECIAL_WORKER_START_DATE = '8/04/2019';
        const SPECIAL_WORKER_END_DATE = '9/08/2019';
        const SPECIAL_WORKER_TOTAL_AMOUNT = '10';

        await locator.clickExpenseListItem('Support Worker');

        await locator.startDate.sendKeys(SPECIAL_WORKER_START_DATE);
        await locator.endDate.sendKeys(SPECIAL_WORKER_END_DATE);
        await locator.cost.sendKeys(SPECIAL_WORKER_TOTAL_AMOUNT);

        await locator.supportWorkerList.isPresent();
        await locator.nameOfSupportWorker.click();
        console.log('select support worker list');
        await locator.supportWorkerList.get(0).click();

        await locator.saveAction();
         
        await browser.sleep(500);
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('EDUCATION WORKER EXPENSE', async function () {
        const SPECIAL_WORKER_START_DATE = '9/05/2019';
        const SPECIAL_WORKER_END_DATE = '9/07/2019';
        const SPECIAL_WORKER_TOTAL_AMOUNT = '10';

        await locator.clickExpenseListItem('Education Worker');

        // expect(await action.SupportWorker_Title()).toEqual(SUPPORT_WORKER_TITLE);

        await locator.startDate.sendKeys(SPECIAL_WORKER_START_DATE);
        await locator.endDate.sendKeys(SPECIAL_WORKER_END_DATE);
        await locator.supportWorkerList.isPresent();
        console.log('select support worker list');
        await locator.nameOfSupportWorker.click();
        await locator.supportWorkerList.get(0).click();
        await locator.cost.sendKeys(SPECIAL_WORKER_TOTAL_AMOUNT);

        await locator.saveAction();
       
        await browser.sleep(500);
        locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });


    it('ADDING RESPITE WORKER WITH HOURLY RATE', async function () {
        const START_DATE = '10/25/2019';
        const END_DATE = '10/30/2019';
        const NUMBER_OF_HRS = '05:';

        const radioButton = element(by.tagName('app-amount-with-hours')).all(by.tagName('mat-radio-button'));

        await locator.clickExpenseListItem('Respite Worker');

        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);


        const radio1 = await radioButton.get(0);
        const radio2 = await radioButton.get(1);

        await radio1.click();
        await radio2.click();

        await locator.noofHours.sendKeys(NUMBER_OF_HRS);
        await locator.hourlyRate.sendKeys('1');

        await locator.supportWorkerList.isPresent();
        await locator.nameOfSupportWorker.click();

        await locator.supportWorkerList.get(0).click();

        expect(await locator.cost.getAttribute('value')).toEqual('5');

        await locator.saveAction();

        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING SUPPORT WORKER WITH HOURLY RATE', async function () {
        const START_DATE = '10/25/2019';
        const END_DATE = '10/30/2019';
        const HOUR_RATE = '05:';


        const radioButton = element(by.tagName('app-amount-with-hours')).all(by.tagName('mat-radio-button'));

        await locator.clickExpenseListItem('Support Worker');

        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);

        const radio1 = await radioButton.get(0);
        const radio2 = await radioButton.get(1);

        await radio1.click();
        await radio2.click();

        await locator.noofHours.sendKeys(HOUR_RATE);
        await locator.hourlyRate.sendKeys(1);

        await locator.supportWorkerList.isPresent();
        await locator.nameOfSupportWorker.click();

        await locator.supportWorkerList.get(0).click();

        expect(await locator.cost.getAttribute('value')).toEqual('5');

        await locator.saveAction();
        
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  MILEAGE WITH RATE PER KM', async function () {
        const START_DATE = '10/25/2019';
        const END_DATE = '10/30/2019';
        const DISTANCE = '5';

        const distance = element(by.name('distanceCtrl'));
        const radioButton = element(by.tagName('app-amount-with-distance')).all(by.tagName('mat-radio-button'));
        const servicProviderList = element.all(by.tagName('mat-option'));
        const serviceProvider = element(by.name('workerCtrl'));


        await locator.clickExpenseListItem('Mileage');

        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);

        const radio1 = await radioButton.get(0);
        const radio2 = await radioButton.get(1);

        await radio1.click();
        await radio2.click();

        await distance.sendKeys(DISTANCE);
        // await rate.sendKeys(1);

        await servicProviderList.isPresent();
        await serviceProvider.click();

        await servicProviderList.get(0).click();

        expect(await locator.amount.getAttribute('value')).toEqual('0.05');

        await locator.saveAction();
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  CLIENDT VACATION SUPPORT', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '10/30/2020';
        const AMOUNT = '12';
        const SERVICE_PROVIDER = 'nagm testing';

        const serviceProvider = element(by.name('nameOfProvider'));

        await locator.clickExpenseListItem('Client Vacation Supports');

        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await serviceProvider.sendKeys(SERVICE_PROVIDER)
        await locator.amount.sendKeys(AMOUNT);

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  SUPPLIES EXPENSE', async function () {
        const START_DATE = '10/25/2019';
        const END_DATE = '10/30/2019';
        const AMOUNT = '12'
        const SERVICE_PROVIDER = 'Akhil t';

        await locator.clickExpenseListItem('Supplies');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await locator.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await locator.amount.sendKeys(AMOUNT);

        await locator.saveAction(true);
        //await homePage.Save_button();
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  SUPPORT WORKER MEALS', async function () {
        const START_DATE = '10/25/2019';
        const END_DATE = '10/30/2019';
        const AMOUNT = '12';
        const SERVICE_PROVIDER = 'Akhil t';

        // eslint-disable-next-line quotes
        await locator.clickExpenseListItem("Support Worker's Meals");


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await locator.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await locator.amount.sendKeys(AMOUNT);

        await locator.saveAction(true);

        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  OTHERS EXPENSE', async function () {
        const START_DATE = '10/25/2019';
        const END_DATE = '10/30/2019';
        const AMOUNT = '12';
        const SERVICE_PROVIDER = 'Akhil t';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test';


        await locator.clickExpenseListItem('Other');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await locator.serviceProvider.sendKeys(SERVICE_PROVIDER)
        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  ADMINSTRATION EXPENSE', async function () {
        const START_DATE = '10/25/2019';
        const END_DATE = '10/30/2019';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test'

        const service_Provider = element(by.name('agencyNameSelectCtrl'));
        const servicProvider_List = element.all(by.tagName('mat-option'));

        await locator.clickExpenseListItem('Administration');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await service_Provider.click();
        await browser.sleep(500);
        await servicProvider_List.get(0).click();
        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  COMMUNITY EVENTS EXPENSE', async function () {
        const START_DATE = '10/25/2019';
        const END_DATE = '10/30/2019';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test';

        const serviceprovider = element(by.name('agencyNameSelectCtrl'));
        const servicproviderList = element.all(by.tagName('mat-option'));

        await locator.clickExpenseListItem('Community Events');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await serviceprovider.click();
        await servicproviderList.get(0).click();
        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  DAY PROGRAMS EXPENSE', async function () {
        const START_DATE = '10/15/2019';
        const END_DATE = '10/20/2020';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test';

        const service_Provider = element(by.name('agencyNameSelectCtrl'));
        const servic_ProviderList = element.all(by.tagName('mat-option'));

        await locator.clickExpenseListItem('Day Programs');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);
        await service_Provider.click();
        await servic_ProviderList.get(0).click();

        await locator.saveAction(true);
        
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  MEMBERSHIP EXPENSE', async function () {
        const START_DATE = '10/05/2019';
        const END_DATE = '10/10/2019';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test';

        const serviceProvider = element(by.name('agencyNameSelectCtrl'));
        const servicProviderList = element.all(by.tagName('mat-option'));

        await locator.clickExpenseListItem('Membership');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);
        await serviceProvider.click();
        await servicProviderList.isPresent();
        await servicProviderList.get(0).click();

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  OUT OF HOEM RESPITE EXPENSE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '10/30/2020';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test';


        const serv_provider = element(by.name('agencyNameSelectCtrl'));
        const serv_ProviderList = element.all(by.tagName('mat-option'));

        await locator.clickExpenseListItem('Out-of-Home Respite');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);
        await serv_provider.click();
        await serv_ProviderList.isPresent();
        await serv_ProviderList.get(0).click();

        await locator.saveAction(true);
      
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  TRANSPOTATION EXPENSE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '10/30/2020';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test';

        const service_Provider = element(by.name('agencyNameSelectCtrl'));
        const servic_ProviderList = element.all(by.tagName('mat-option'));

        await locator.clickExpenseListItem('Transportation');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);
        await service_Provider.click();
        await servic_ProviderList.isPresent();
        await servic_ProviderList.get(0).click();

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  ANUAL TRANSIT  EXPENSE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '10/30/2020';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test';

        const serviceProvide = element(by.name('agencyNameSelectCtrl'));
        const servicProviderlist = element.all(by.tagName('mat-option'));

        await locator.clickExpenseListItem('Annual Transit Pass');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);

        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);
        await serviceProvide.click();
        await servicProviderlist.isPresent();
        await servicProviderlist.get(0).click();

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  CAMP EXPENSE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '10/30/2020';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test'

        const serviceProvider = element(by.name('agencyNameSelectCtrl'));
        const servicProviderList = element.all(by.tagName('mat-option'));

        await locator.clickExpenseListItem('Camp');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);

        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);
        await serviceProvider.click();
        await servicProviderList.isPresent();
        await servicProviderList.get(0).click();

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  PERSON DIRECT PLANNING EXPENSE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '10/30/2020';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test';
        const ORGANISER = 'Test for new user';

        const agency_organisation = element(by.name('agencyNameCtrl'));
        const planning_facilitator = element(by.name('workerCtrl'));
        const facilitatorList = element.all(by.tagName('mat-option'));


        await locator.clickExpenseListItem('Person-Directed Planning');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);

        await locator.amount.sendKeys(AMOUNT);
        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);
        await agency_organisation.sendKeys(ORGANISER);

        await planning_facilitator.click();
        await facilitatorList.isPresent();
        await facilitatorList.get(0).click();

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });

    it('ADDING  PERSON DIRECT PLANNING EXPENSE WITH PROVINCE', async function () {
        const START_DATE = '10/25/2020';
        const END_DATE = '10/30/2020';
        const AMOUNT = '12';
        const INVOICE_NUM = '1254AG@#';
        const DESCRIPTION = 'this is new one for test';
        const AGENCY = 'INSPIREDGE';

        const agency_organisation = element(by.name('agencyNameCtrl'));
        const planning_facilitator = element(by.name('workerCtrl'));
        const facilitatorList = element.all(by.tagName('mat-option'));
        const inprovince = element(by.tagName('app-in-out-province')).all(by.tagName('mat-radio-button'));


        await locator.clickExpenseListItem('Person-Directed Planning');


        await locator.startDate.sendKeys(START_DATE);
        await locator.endDate.sendKeys(END_DATE);
        await agency_organisation.sendKeys(AGENCY);
        await locator.amount.sendKeys(AMOUNT);

        await locator.invoiceNumber.sendKeys(INVOICE_NUM);
        await locator.description.sendKeys(DESCRIPTION);

        await planning_facilitator.click();
        await facilitatorList.isPresent();
        await facilitatorList.get(0).click();

        const inprov = await inprovince.get(1)
        await inprov.click();

        await locator.saveAction(true);
       
        await browser.sleep(500);
        await locator.expenseAddedPannel.isPresent();
        console.log('the element is presented');
        expect(await locator.expenseAddedPannel.isDisplayed()).toBe(true);
    });
});