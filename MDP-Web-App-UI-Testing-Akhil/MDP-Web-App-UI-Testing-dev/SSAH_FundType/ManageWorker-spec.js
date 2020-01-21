var Login = require('../SSAH_FundType/Expenses.po.js');
var ManageWorker = require('../SSAH_FundType/ManageWorker.po.js');
//var CommonAction = require('../../Expenses.po');
//var VALUES = require('../module/constant.value');
//var LoginAction = require('../module/login.util');

var Log = new Login();
var Worker = new ManageWorker();
browser.ignoreSynchronization = true;



describe('Manage Worker:: Test Cases', function () {
  //beforeAll(LoginAction.login);
  beforeEach(async function () {
    console.log('****** before Each in Manage worker ******');
    await browser.waitForAngularEnabled(false);

    //await action.openExpenseTab(0);
    //await action.openExpenseTab(1);
    console.log('******************************************');
  });
  //** elements Definitions ------------- */

  const InviteWorkerBtn = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-workers/div/div[2]/div[2]')).element(by.tagName('button'));
  const workerslist = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-workers/div/div[2]/div[2]')).all(by.tagName('mat-card'));
  const hoverOnStatus = workerslist.get(0).all(by.tagName('div')).get(5).all(by.tagName('span')).get(1);


  /*it('should Login with Valid use Details',  function () {
     Log.get();
     browser.sleep(3000);
     expect( Log.getGreeting()).toEqual('Sign In');
     Log.Login('ankal.torlapati+106@dartssolutions.com', 'Tester5555');
     browser.sleep(4000);
     Log.AddExpenseTab(5);
     browser.sleep(3000);
   });*/
  it('click on Invite Worker link and enter data then click  on Cancel', function () {
    Log.AddExpenseTab(5);
    browser.sleep(3000);

    expect(InviteWorkerBtn.isPresent()).toBeTruthy();
    browser.actions().mouseMove(InviteWorkerBtn).perform();
    browser.sleep(1000);
    InviteWorkerBtn.click();
    Worker.FirstName().sendKeys('Akhil@123');
    Worker.lastName().sendKeys('Torlapati@123');
    Worker.email().sendKeys('Akhil4a9@gmail.com');
    browser.sleep(2000);
    Worker.CancelBtn().click();
    browser.sleep(3000);
  });
  it('check the required Validations for Fields in Invite worker window', function () {

    InviteWorkerBtn.click();
    browser.sleep(2000);
    Worker.FirstName().click();
    Worker.lastName().click();
    Worker.email().click();
    expect(Worker.InviteBtn().isEnabled()).toEqual(false)
    browser.sleep(2000);
  });

  it('Enter Invalid date in Email filed and click on Invite', function () {
    Worker.FirstName().sendKeys('Akhil@123');
    Worker.lastName().sendKeys('Torlapati@123');
    Worker.email().sendKeys('Akhil4a9@gmailcom');
    browser.sleep(1000);
    Worker.email().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    Worker.email().sendKeys('Akhil4a9gmail.com');
    expect(Worker.InviteBtn().isEnabled()).toEqual(false);
    browser.sleep(2000);
  });

  it('invite worker with email as pmf/FA And same as existed worker Email', function () {
    Worker.email().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    Worker.email().sendKeys('ankal.torlapati+106@dartssolutions.com');
    browser.sleep(1000);
    Worker.InviteBtn().click();
    browser.sleep(2000);
    expect(Worker.ValidationError()).toEqual('Family Worker cannot have same e-mail as recipient or fund administrators');
    browser.sleep(2000);
    Worker.email().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    Worker.email().sendKeys('ankal.torlapati+108@dartssolutions.com');
    browser.sleep(1000);
    Worker.InviteBtn().click();
    browser.sleep(2000);
    expect(Worker.ValidationError()).toEqual('Family Worker has already been invited');
    browser.sleep(2000);
    Worker.email().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    Worker.email().sendKeys('ankal.torlapati+109@dartssolutions.com');
    browser.sleep(1000);
    Worker.InviteBtn().click();
    browser.sleep(2000);
    expect(Worker.ValidationError()).toEqual('User has already been invited');
    browser.sleep(2000);
  });

  it('Invite worker with Valid Details', function () {
    Worker.email().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    Worker.email().sendKeys('ankal.torlapati+113@dartssolutions.com');
    browser.sleep(1000);
    browser.actions().mouseMove(Worker.InviteBtn()).click().perform();
    browser.sleep(2000);
    expect(Worker.ValidationError1()).toEqual('Family worker has been invited');
    browser.sleep(2000);
  });

  it('Delete The Worker with Pending/Declined Status', function () {

    const Status = workerslist.get(1).all(by.tagName('div')).get(5).all(by.tagName('span')).get(1);
    browser.actions().mouseMove(Status).perform();
    workerslist.get(1).element(by.tagName('button')).click();
    browser.actions().mouseMove(element(by.buttonText('Delete'))).click().perform();
    browser.sleep(1000);
    expect(element(by.buttonText('Yes')).isPresent()).toBeTruthy()
    console.log('button exists');
    browser.actions().mouseMove(element(by.buttonText('Yes'))).click().perform();
    browser.sleep(3000);
    //expect( Deactive_Delete_ErrorMessage.getText()).toEqual('The Worker has been deleted successfully');
  });

  it('Try to Delete the Active worker and check the Error Validation', function () {

    const DeleteButton = element(by.buttonText('Delete'));


    Worker.ActiveStaus();
    browser.sleep(2000);
    browser.actions().mouseMove(DeleteButton).click().perform();
    browser.sleep(2000);
    expect(element(by.buttonText('Yes')).isPresent()).toBeTruthy();
    console.log('button exists');
    browser.actions().mouseMove(element(by.buttonText('Yes'))).click().perform();
    // browser.sleep(2000);
    // expect( Worker.ValidationError()).toEqual('We can not remove this support worker because of an existing link with current or previous expenses');
    browser.sleep(2000);
    browser.actions().mouseMove(element(by.buttonText('Cancel'))).click().perform();
  });

  it('Try to Deactivate the Support worker who has existing link with some expenses', function () {
    const DeactiveButton = element(by.buttonText('Deactivate'));

    Worker.ActiveStaus();
    browser.sleep(2000);
    browser.actions().mouseMove(DeactiveButton).perform();
    DeactiveButton.click();
    browser.sleep(3000);
    //  expect( Deactive_Delete_ErrorMessage.getText()).toEqual('You have unsubmitted expenses for this worker. Please go to “Manage Expenses” and delete or submit the related worker expenses before attempting to deactivate this worker.');
  });

  it('Checking Worker details by status by using filer', function () {

    const FilterByStatus = element(by.id('mat-select-5'));
    const FilterList = element.all(by.tagName('mat-option'));
    const ApplyButton = element(by.buttonText('Apply'));

    FilterByStatus.click();
    FilterList.get(1).click();
    ApplyButton.click();
    browser.sleep(1000);
    var Active = workerslist.get(0).all(by.tagName('div')).get(5).all(by.tagName('span')).get(1).getText();
    browser.actions().mouseMove(hoverOnStatus).perform();
    expect(Active).toEqual('Active');
    FilterByStatus.click();
    FilterList.get(2).click();
    browser.sleep(1000);
    browser.actions().mouseMove(hoverOnStatus).perform();
    ApplyButton.click();
    FilterByStatus.click();
    FilterList.get(3).click();
    ApplyButton.click();
    browser.sleep(1000);
    browser.actions().mouseMove(hoverOnStatus).perform();
    FilterByStatus.click();
    FilterList.get(4).click();
    ApplyButton.click();
    browser.sleep(1000);
    browser.actions().mouseMove(hoverOnStatus).perform();
  });

});