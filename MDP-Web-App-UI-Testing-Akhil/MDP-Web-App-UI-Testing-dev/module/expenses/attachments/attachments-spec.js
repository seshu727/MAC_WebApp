
const CONSTANT = require('../../constant.value');
const TITLE_TEXT = require('../../title.constant');
import { LoginObject } from '../../login/login.obj';
import { SideMenuObject } from '../../side-menu.obj';
import { ExpenseObject } from '../expense.obj';


const pngPath = `${__dirname}/asset/a.png`;
const xlsxPath = `${__dirname}/asset/a.xls`;
const wordPath = `${__dirname}/asset/a.doc`;
const pdfPath = `${__dirname}/asset/a.pdf`;
const jpegPath = `${__dirname}/asset/a.jpeg`;
const textPath = `${__dirname}/asset/a.txt`;

const loginAction = new LoginObject();
const sideMenuAction = new SideMenuObject();
const expenseFormElm = new ExpenseObject();

const expectIfExpenseAddedPanelAppear = async () => {
	console.log('the element is presented');
	await expenseFormElm.expenseAddedPanel.isPresent();
	expect(await expenseFormElm.expenseAddedPanel.isDisplayed()).toBe(true);
}

const beforeFunction = async () => {
	await loginAction.loginAction(CONSTANT.SSAH_USER_EMAIL, CONSTANT.SSAH_USER_PASSWORD, CONSTANT.WEBSITE_LOCAL);		

	console.log('****** before Each in Add All Expense ******');
	await browser.waitForAngularEnabled(false);
	await sideMenuAction.openExpenseTab();
	console.log('******************************************');
}

describe('ADDING ALL TYPE OF ATTACHMENTS FOR AT LEAST ONE EXPENSE', function () {
	
	beforeEach(beforeFunction);
		
	it('Adding Attachments for Expense', async function () {

		const ADMINSTRATION_FEE_Date = '9/15/2019';
		const ADMINSTRATION_FEE_DESC = 'Admin Test';
		const ADMINSTRATION_FEE_TOTAL_AMOUNT = '10';

		await expenseFormElm.expenseLists.isPresent();
		await expenseFormElm.expenseLists.get(1).click(); //Expense list//

		await expenseFormElm.payment_date.isPresent();
		await expenseFormElm.paidTo.isPresent();
		await expenseFormElm.Description.isPresent();
		await expenseFormElm.amount.isPresent();

		await expenseFormElm.payment_date.sendKeys(ADMINSTRATION_FEE_Date);
		await expenseFormElm.paidTo.sendKeys(ADMINSTRATION_FEE_DESC);
		await expenseFormElm.Description.sendKeys(ADMINSTRATION_FEE_DESC);
		await expenseFormElm.amount.sendKeys(ADMINSTRATION_FEE_TOTAL_AMOUNT);

		expect(await expenseFormElm.expenseFormTitle.getText()).toEqual(TITLE_TEXT.ADMINSTRATION_FEE);

		await expenseFormElm.expenseAttachmentButtonId.isPresent();
		await expenseFormElm.expenseAttachmentFormInputFileId.isPresent()
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(pngPath);
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(xlsxPath);
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(pdfPath);
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(wordPath);
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(jpegPath);
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(textPath);

		await expenseFormElm.saveAction(false);
		await browser.sleep(10000);
		await expectIfExpenseAddedPanelAppear();

	});

	it('remove and restore expense', async function () {

		const ADMINSTRATION_FEE_Date = '9/15/2019';
		const ADMINSTRATION_FEE_DESC = 'Admin Test';
		const ADMINSTRATION_FEE_TOTAL_AMOUNT = '10';

		await expenseFormElm.expenseLists.isPresent();
		await expenseFormElm.expenseLists.get(1).click(); //Expense list//

		await expenseFormElm.payment_date.isPresent();
		await expenseFormElm.paidTo.isPresent();
		await expenseFormElm.Description.isPresent();
		await expenseFormElm.amount.isPresent();

		await expenseFormElm.payment_date.sendKeys(ADMINSTRATION_FEE_Date);
		await expenseFormElm.paidTo.sendKeys(ADMINSTRATION_FEE_DESC);
		await expenseFormElm.Description.sendKeys(ADMINSTRATION_FEE_DESC);
		await expenseFormElm.amount.sendKeys(ADMINSTRATION_FEE_TOTAL_AMOUNT);

		expect(await expenseFormElm.expenseFormTitle.getText()).toEqual(TITLE_TEXT.ADMINSTRATION_FEE);

		await expenseFormElm.expenseAttachmentButtonId.isPresent();
		await expenseFormElm.expenseAttachmentFormInputFileId.isPresent()
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(pngPath);

		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(xlsxPath);
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(pdfPath);
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(wordPath);
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(jpegPath);
		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(textPath);

		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(pngPath);
		await expenseFormElm.expectExpenseAttachmentRestrictionIsExist();

		await expenseFormElm.expenseAttachmentCards.get(0).isPresent();
		await browser.actions().mouseMove(expenseFormElm.expenseAttachmentCards.get(0)).perform();
		await expenseFormElm.expenseAttachmentDeleteButton.get(0).isPresent();
		await expenseFormElm.expenseAttachmentDeleteButton.get(0).click();

		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(xlsxPath);
		await expenseFormElm.expectExpenseAttachmentRestrictionIsExist();

		await expenseFormElm.expenseAttachmentFormInputFileId.sendKeys(pngPath);
		await expenseFormElm.expectExpenseAttachmentRestrictionIsExist();
	});
});