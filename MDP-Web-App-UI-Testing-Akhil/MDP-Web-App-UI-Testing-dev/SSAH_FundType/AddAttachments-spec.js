var AddAttachmentspage = require('../SSAH_FundType/Expenses.po.js');
var Attachment = new AddAttachmentspage();

browser.ignoreSynchronization = true;

var png = 'C://Users//Administrator//Desktop//Automation files//2_download.png'
var xlsx = 'C://Users//Administrator//Desktop//Automation files//fund.xlsx'
var word = 'C://Users//Administrator//Desktop//Automation files//resume.doc'
var pdf = 'C://Users//Administrator//Desktop//Automation files//pdf1.pdf'
var jpeg = 'C://Users//Administrator//Desktop//Automation files//jpeg1.jpeg'
var text = 'C://Users//Administrator//Desktop//Automation files//input001.txt'

describe('ADDING ALL TYPE OF ATTACHMENTS FOR AT LEAST ONE EXPENSE', function () {
  /* beforeEach(async function () {
     console.log('****** before Each in Manage worker ******');
     await browser.waitForAngularEnabled(false);
     
     //await action.openExpenseTab(0);
     //await action.openExpenseTab(1);
     console.log('******************************************');
     });*/

  it('should Login with Valid use Details', function () {
    // var AddExpensesPage = new homePage();
    Attachment.get();
    browser.sleep(3000);
    expect(Attachment.getGreeting()).toEqual('Sign In');
    Attachment.Login('ankal.torlapati+106@dartssolutions.com', 'Tester5555');
    browser.sleep(5000);
    Attachment.AddExpenseTab(1);
    browser.sleep(4000);
  });

  it('ADDING Attachments for ADMINSTRATION FEE', function () {
    Attachment.Expense_list(1);
    browser.sleep(1000);
    expect(Attachment.Admins_fee_title()).toEqual('Administration Fee');
    Attachment.Adminstration_Fee('9/15/2019', 'Admin Test', 'Attach all type of files', '10');
    browser.sleep(2000);
    browser.executeScript('window.scrollTo(0,1000);').then(function () {
      var addattachmentBtn = element(by.tagName('mat-list-item')).element(by.tagName('button'));
      // browser.actions().mouseMove(addattachmentBtn).perform();
      browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function () {
        browser.actions().mouseMove(addattachmentBtn).perform();
      });
      browser.sleep(2000);
      console.log('show me error');
      Attachment.attachment(png);
      Attachment.attachment(xlsx);
      Attachment.attachment(pdf);
      Attachment.attachment(word);
      Attachment.attachment(jpeg);
      Attachment.attachment(text);

      // Attachment.attachment(tiff);
    })
    // element(by.buttonText(' back to edit ')).click();

    browser.sleep(1000);
    Attachment.attachment(png);
    browser.sleep(1000);
    Attachment.Save_button();
    browser.sleep(1000);
  });
  it('Remove and Restore attachment', function () {
    Attachment.quick_tab().click();
    Attachment.view_exp();
    browser.sleep(4000);
    var del = element.all(by.tagName('mat-card')).get(1);
    browser.actions().mouseMove(del).perform();
    // var del = element.all(by.tagName('mat-card')).get(1).all(by.tagName('button')).get(0);
    //  browser.actions().mouseMove(del).click().perform();
    // browser.actions().mouseMove(Attachment.RemoveFile(0,1)).click().perform();
    // browser.actions().mouseMove(Attachment.RemoveFile(0,1)).perform().click();
    browser.sleep(6000);
  });
});