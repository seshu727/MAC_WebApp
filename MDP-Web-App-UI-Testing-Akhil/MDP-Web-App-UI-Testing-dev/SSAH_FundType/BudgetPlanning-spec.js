var Login = require('../SSAH_FundType/Expenses.po.js');
var BudgetPlanning = require('../SSAH_FundType/BudgetPlanning.po.js');

var Log=new Login();
var Budget=new BudgetPlanning();
browser.ignoreSynchronization = true;

describe('Budget Planning Test Cases', function () {

    it('should Login with Valid use Details', function () {
       // var AddExpensesPage = new homePage();
       Log.get();
       browser.sleep(3000);
       expect(Log.getGreeting()).toEqual('Sign In');
       Log.Login('ankal.torlapati+106@dartssolutions.com', 'Tester5555');
       browser.sleep(5000);
       Log.AddExpenseTab(4);
       browser.sleep(3000);
     });
  it('Enter The budget for Current Month',function(){
       Log.AddExpenseTab(4);
       browser.sleep(3000);
       Budget.Month_yr();
       browser.sleep(1000);
       Budget.calend(4,1);
       browser.sleep(2000);
       Budget.field1(0).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(0).sendKeys('10');  
       Budget.field1(1).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(1).sendKeys('15');
       Budget.field1(2).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(2).sendKeys('10');
       Budget.field1(3).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(3).sendKeys('9');
       Budget.field1(4).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(4).sendKeys('11');
       Budget.field1(5).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(5).sendKeys('10');
       Budget.field1(6).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(6).sendKeys('21');
       Budget.field1(7).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(7).sendKeys('10');
       Budget.field1(8).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(8).sendKeys('3');
       Budget.field1(10).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(10).sendKeys('10');
       Budget.field1(11).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(11).sendKeys('1');
       Budget.field1(12).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(12).sendKeys('3');
       Budget.field1(13).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(13).sendKeys('5');
       Budget.field1(14).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(14).sendKeys('4');
       browser.sleep(2000);
       expect(Budget.Save().isEnabled()).toEqual(true);
       browser.actions().mouseMove(Budget.Save()).click().perform();
       browser.sleep(4000);
    });
    it('Enter The budget for past Month',function(){
        Budget.Month_yr();
        browser.sleep(1000);
        Budget.calend(4,0);
        browser.sleep(2000);
        Budget.field1(0).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(0).sendKeys('10');  
        Budget.field1(1).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(1).sendKeys('15');
        Budget.field1(2).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(2).sendKeys('10');
        Budget.field1(3).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(3).sendKeys('9');
        Budget.field1(4).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(4).sendKeys('11');
        Budget.field1(5).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(5).sendKeys('10');
        Budget.field1(6).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(6).sendKeys('21');
        Budget.field1(7).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(7).sendKeys('10');
        Budget.field1(8).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(8).sendKeys('3');
        Budget.field1(10).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(10).sendKeys('10');
        Budget.field1(11).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(11).sendKeys('1');
        Budget.field1(12).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(12).sendKeys('3');
        Budget.field1(13).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(13).sendKeys('5');
        Budget.field1(14).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(14).sendKeys('4');
        browser.sleep(2000);
        expect(Budget.Save().isEnabled()).toEqual(true);
        browser.actions().mouseMove(Budget.Save()).click().perform();
        browser.sleep(4000);
     });
     it('Enter The budget for Future Month',function(){
        Budget.Month_yr();
        browser.sleep(1000);
        Budget.calend(4,2);
        browser.sleep(2000);
        Budget.field1(0).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(0).sendKeys('10');  
        Budget.field1(1).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(1).sendKeys('15');
        Budget.field1(2).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(2).sendKeys('10');
        Budget.field1(3).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(3).sendKeys('9');
        Budget.field1(4).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(4).sendKeys('11');
        Budget.field1(5).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(5).sendKeys('10');
        Budget.field1(6).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(6).sendKeys('21');
        Budget.field1(7).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(7).sendKeys('10');
        Budget.field1(8).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(8).sendKeys('3');
        Budget.field1(10).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(10).sendKeys('10');
        Budget.field1(11).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(11).sendKeys('1');
        Budget.field1(12).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(12).sendKeys('3');
        Budget.field1(13).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(13).sendKeys('5');
        Budget.field1(14).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));Budget.field1(14).sendKeys('4');
        browser.sleep(2000);
        expect(Budget.Save().isEnabled()).toEqual(true);
        browser.actions().mouseMove(Budget.Save()).click().perform();
        browser.sleep(4000);
     });
it('Save and Copy to Other Month and Click on save button',function(){
      Budget.Save_Copy();
      browser.sleep(1000);
      Budget.Save_Copy_PopUp(0,4);
      browser.sleep(2000);
      var submit = element.all(by.buttonText('Save')).last();
      browser.sleep(1000);
      expect(submit.isEnabled()).toEqual(true);
      browser.actions().mouseMove(submit).click().perform();
      browser.sleep(3000);
});

it('checck the Amount for Copied Month',function(){
    Budget.Month_yr();
    browser.sleep(2000);
    browser.actions().mouseMove(Budget.yearChangeArrow(1)).click().perform();
    browser.sleep(3000);
    Budget.calend(3,3);
    browser.sleep(2000);
    expect(Budget.Values(1)).toEqual('$122.00');
    browser.sleep(2000);

});

});