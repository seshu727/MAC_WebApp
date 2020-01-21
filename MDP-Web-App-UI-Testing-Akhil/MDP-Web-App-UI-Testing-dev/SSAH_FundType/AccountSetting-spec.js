var Login = require('../SSAH_FundType/Expenses.po.js');
var Settings = require('../SSAH_FundType/AccountSetting.po.js');

var Log = new Login();
var Account_Set = new Settings();

var png = 'C://Users//Administrator//Desktop//Automation files//2_download.png';
var jpeg = 'C://Users//Administrator//Desktop//Automation files//jpeg1.jpeg'
var tiff = 'C://Users//Administrator//Desktop//Automation files//3_Image of Tiff.tif'

browser.ignoreSynchronization = true;

describe('SSAH Account Settings', function () {

  it('should Login with Valid use Details', function () {
    Log.get();
    browser.sleep(4000);
    expect(Log.getGreeting()).toEqual('Sign In');
    Log.Login('ankal.torlapati+106@dartssolutions.com', 'Tester5555');
    browser.sleep(3000);
  });
  it('upload image for Profile picture(png type)', function () {

    browser.sleep(4000);
    Log.AddExpenseTab(6);
    Account_Set.profilepic(png);
    browser.sleep(3000);
  });
  it('user click on icon to add image& check the Two buttons', function () {
    Account_Set.uploadImage();
    browser.sleep(5000);
    expect(Account_Set.changeImage().isPresent()).toBeTruthy();
    expect(Account_Set.deleteImage().isPresent()).toBeTruthy();
  });
  it('check the delete picture (should delete picture)', function () {
    expect(Account_Set.deleteImage().isPresent()).toBeTruthy();
    Account_Set.deleteImage().click();
    browser.sleep(2000);
  });
  it('Upload image type JPG', function () {
    Account_Set.profilepic(jpeg);
    browser.sleep(3000);
  });
  it('upload file more than 4MB ', function () {
    Account_Set.profilepic(tiff);
    browser.sleep(3000);
    expect(Account_Set.errorImg()).toEqual('Maximum Image Size Allowed Is 4MB');

  });
  it('ForgotPassword-check the Change button if no data entered', function () {
    Account_Set.chnagePassBtn(2);
    browser.sleep(3000);
    Account_Set.ChangePassValidation();
    // expect(Account_Set.confpassErr()).toEqual('');;
    expect(Account_Set.changebutton().isEnabled()).toBe(false);
    browser.sleep(3000);
  });

  it('check the validation for current pass If entered same pass', function () {
    Account_Set.ChangePass1('Akhil12345', 'Akhil145', 'Akhil145');
    expect(element(by.buttonText('Change')).isEnabled()).toBe(true);
    element(by.buttonText('Change')).click();
    browser.sleep(4000);
    expect(Account_Set.errorImg()).toEqual('Something went wrong, please ensure your current password is correct');
  });

  it('check the error message when entered new password same as Current password', function () {
    browser.sleep(3000);
    element(by.id('mat-input-3')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.sleep(1000);
    element(by.id('mat-input-3')).sendKeys('Tester5555');
    browser.sleep(1000);
    element(by.id('mat-input-4')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.sleep(1000);
    element(by.id('mat-input-4')).sendKeys('Tester5555');
    browser.sleep(2000);
    element(by.id('mat-input-3')).click();
    expect(Account_Set.PassError()).toEqual('New password must be different than current password.');
    browser.sleep(2000);
  });

  it('check the All error validations', function () {
    element(by.id('mat-input-3')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.sleep(1000);
    element(by.id('mat-input-3')).sendKeys('Testr5');
    expect(Account_Set.PassError1()).toEqual('Password must be 8-16 characters');
    browser.sleep(1000);
    element(by.id('mat-input-3')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.sleep(1000);
    element(by.id('mat-input-3')).sendKeys('T52334323');
    expect(Account_Set.PassError1()).toEqual('Password must contain at least one lower-case letter');
    browser.sleep(1000);
    element(by.id('mat-input-3')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.sleep(1000);
    element(by.id('mat-input-3')).sendKeys('tyy52334323');
    expect(Account_Set.PassError1()).toEqual('Password must contain at least one upper-case letter');
    browser.sleep(1000);
    element(by.id('mat-input-3')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.sleep(1000);
    element(by.id('mat-input-3')).sendKeys('tyyrteArty');
    expect(Account_Set.PassError1()).toEqual('Password must contain at least one digit');
  });

  it('password do not match error message', function () {
    element(by.id('mat-input-3')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.sleep(1000);
    element(by.id('mat-input-3')).sendKeys('Tester5555');
    browser.sleep(1000);
    element(by.id('mat-input-4')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.sleep(1000);
    element(by.id('mat-input-4')).sendKeys('Tester6666');
    browser.sleep(1000);
    element(by.name('confirmPassword')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    browser.sleep(1000);
    element(by.name('confirmPassword')).sendKeys('Tester7777');
    browser.sleep(1000);
    // expect(Account_Set.PassError2()).toEqual('Password must contain at least one digit');
    browser.sleep(1000);
  });

  it('change Email Address Fields Error Messages', function () {
    Account_Set.chnagePassBtn(3);
    browser.sleep(2000);
    Account_Set.ChnageEmail();
    expect(element(by.buttonText('Change')).isEnabled()).toBe(false);
    browser.sleep(2000);
  });

  it('Error validation for Email wrong Format', function () {
    element(by.name('email')).sendKeys('Akhil34');
    browser.sleep(1000);
    element(by.name('email')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    element(by.name('email')).sendKeys('Akhi@gmaicom');
    browser.sleep(1000);
    element(by.name('email')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    element(by.name('email')).sendKeys('ankal.torlapati+106@dartssolutions.com');
    element(by.name('confirmedEmail')).sendKeys('ankal.torlapati+106@dartssolutions.com');
    // expect(element(by.buttonText('Change')).isEnabled()).toBe(true);
    element(by.xpath('//*[@id="changeEmailForm"]/div/button')).click();
    browser.sleep(2000);
    expect(Account_Set.errorImg()).toEqual('Email address is already in use by another user');
    browser.sleep(2000);
  });

});