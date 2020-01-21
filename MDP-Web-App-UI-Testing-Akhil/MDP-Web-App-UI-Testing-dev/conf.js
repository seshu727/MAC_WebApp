var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

//var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
	directConnect: true,
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		browserName: 'chrome'
	},

	//****Suite for SSAH MODULES----------- */
	suites: {
		EXPENSES_ADDING: ['./module/expenses/add/ssah-specs.js', './module/expenses/add/passport-specs.js'],
		ADD_SSAH_EXPENSES: ['./module/expenses/add/ssah-specs.js'],
		ADD_PASSPORT_EXPENSES: ['./module/expenses/add/passport-specs.js'],
		SSAH_MANAGEEXPENSES: ['./module/manageExpenses/ssah-spec.js'],
		EXPENSES_ATTACHMENT: ['./module/expenses/attachments/attachments-spec.js'],
		AccountSettings_email_pass: ['./module/AccountSettings/email_password_Setting-spec.js'],
		SSAH_RecipientAndFA: ['./module/AccountSettings/ssah_RecipientAndFA-spec.js'],
		SSAH_Profile:['./module/AccountSettings/ssahProfile-specs.js'],
		SSAH_fund_Settings: ['./module/AccountSettings/ssah_fund_Settings-spec.js'],
		MBRules: ['./module/expenses/mbRules/ssah_MBRules-spec.js'],
		Add_Attachments: ['./module/expenses/attachments/attachments-spec.js'],
		Edit_Update_Expenses: ['./module/expenses/edit/ssah_edit_expenses-spec.js'],
		Submit_Expense: ['./module/manageExpenses/ssah_Submit_exp-spec.js'],
		Invoices: ['./module/invoices/ssah_Invoices-spec.js'],
		BudgetPlan: ['./module/budgetPlanning/ssah_budgetPlan-specs.js'],
		ManageWorker: ['./module/manageWorker/ssah_ManageWorker-spec.js'],
		SSAH_Expenses_ErrorValidations: ['./module/expenses/expenses_error_validations/ssah-specs.js'],

		//**********Passport modules  */
		passport_AccountSettings:['./module/AccountSettings/passport_AccountSettings-spec.js'],
		passport_FundSettings:['./module/AccountSettings/passport_FunsSettings-spec.js'],
		Passport_AddExpense: ['./module/expenses/add/passport-specs.js'],
		passport_manage_organiser: ['./module/manageOrganizer/passport-specs.js'],
		passport_MB_Rules: ['./module/expenses/mbRules/passport_Mbrules-specs.js'],
		passport_expense_errorValidation: ['./module/expenses/expenses_error_validations/passport-specs.js'],
		passport_manage_Worker: ['./module/manageWorker/passport_worker-specs.js'],
		MANAGE_EXPENSES: ['./module/manageExpenses/passport-specs.js'],
		passpoer_BudgetPlan: ['./module/budgetPlanning/passport_budgetPlan-specs.js'],
		passport_Invoices: ['./module/invoices/passport_invoice-specs.js'],
		LOGIN: ['./module/login/login-specs.js'],
		passport_NFY_Expenses:['./module/expenses/add/passportExpensesNFYCases-spec.js'],

		//**** residential module *****//

		residential_Profile:['./module/AccountSettings/residentialProfile-spec.js'],
		SUPER_VISOR: ['./module/supervisor/supervisor.specs.js'],
		residential_addExpense: ['./module/expenses/add/residential-spec.js'],
		residential_manageExpenses: ['./module/manageExpenses/residential-specs.js'],
		resdentialMB_Rules:['./module/expenses/mbRules/residentialMB-spec.js'],
		residential_Invoice:['./module/invoices/residentialInvoice-spec.js'],
		residential_edit_updateExpense:['./module/expenses/edit/residential-spec.js'],
		residential_Expenes_ErrorValidations:['./module/expenses/expenses_error_validations/residential-spec.js'],
		superVisor_BudgetPlan:['./module/supervisor/budgetPlanning-spec.js'],
		supervisor_HistoricExpenses:['./module/supervisor/historicExpenses-specs.js'],
		supervisor_Invoices:['./module/supervisor/invoices-specs.js']
	},
	jasmineNodeOpts: {
		showColors: true
	},
	onPrepare: function () {
		require('babel-register');
		require('babel-core/register');
		require('babel-polyfill');
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(6000);
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath: './test/reports/'
		}));
	},
	SELENIUM_PROMISE_MANAGER: false
}