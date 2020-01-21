'use strict';

const CONSTANT = require('../constant.value');
import { LoginObject } from '../login/login.obj';
import { SideMenuObject } from '../side-menu.obj';
import { browser, element, ExpectedConditions } from 'protractor';


let loginAction = new LoginObject();
let sideMenuAction = new SideMenuObject();


describe('PASSPORT :Manage Organizers', function () {
  //************field definitions***************//
      const SideMenu = element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button'))
      const errormessage = element(by.tagName('snack-bar-container')).element(by.tagName('span'));

      const removeButton = element.all(by.buttonText('Remove'));
      const confirm_yes_no = element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));
      const confirm_no = element(by.css('div[class="mat-raised-button mat-button-base"]'));
      const addOrganiserButton = element(by.css('div[class="d-flex justify-content-end mb-3"]')).element(by.tagName('button'));
      const searchInput = element(by.id('searchOrganizationInputId'));
      const clickherelink= element(by.css('div[class="col my-3 ng-star-inserted"]')).element(by.tagName('a'));
      const addOrConnectbutton=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).element(by.css('button[type="submit"]'));

   beforeAll(async () => {
       console.log('========> before all login');  
       await loginAction.loginAction(CONSTANT.EMAIL1_DEV_PASSPORT, CONSTANT.PASSWORD1_DEV_PASSPORT, CONSTANT.WEBSITE_DEV_URL);		
       await browser.sleep(3000);
  });

  beforeEach(async function () {
       console.log('========> before each testcase');
       await browser.waitForAngularEnabled(false);
       await sideMenuAction.selectRecipient('recipient-selection-option-Letitia_Vennie');
       await sideMenuAction.openMangeOrganiserTab();
       console.log('******************************************');
  });
  
   it('Add Organizer', async function () {
      

      await addOrganiserButton.click();
      browser.actions().mouseMove(await searchInput).click().perform();
      await searchInput.sendKeys('newuser');
      await browser.sleep(3000);
      await clickherelink.isPresent();
      console.log('element present');
      await clickherelink.click();
      const button=await addOrConnectbutton;
      expect(await button.isPresent()).toBe(true);
      browser.actions().mouseMove(await button).perform();
      await button.click();
      await browser.sleep(4000);

     });
  it('Search for organiser by using filter', async function () {
       const searchfiler = element(by.name('search'));
       const applyButton = element(by.css('button[type="submit"]'));
       const organiserslist = element.all(by.css('div[class="ng-star-inserted"]'));
       const resetButton = element(by.buttonText('Reset'));

       await searchfiler.sendKeys('123');
       await applyButton.click();
       await browser.sleep(1000);
       await expect(organiserslist.isPresent()).toEqual(true);
       await searchfiler.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
       await searchfiler.sendKeys('test');
       await applyButton.click();
       await browser.sleep(1000);
       await  expect(organiserslist.isPresent()).toEqual(true);
       await resetButton.click();
     });


  it('User try to delete organiser associated with expense', async function () {

      await removeButton.get(0).click();
      await confirm_yes_no.get(1).click();
      await browser.sleep(1000);
      expect(await errormessage.getText()).toEqual('We can’t remove this organization because it’s linked to one of your current or previous expenses.');

    });
  it('Try to add Duplicate Organiser and check the error message',async function(){
      await addOrganiserButton.click();
      browser.actions().mouseMove(await searchInput).click().perform();
      await searchInput.sendKeys('newuser');
      await browser.sleep(3000);
      await clickherelink.isPresent();
      console.log('element present');
      await clickherelink.click();
      const button=await addOrConnectbutton;
      expect(await button.isPresent()).toBe(true);
      browser.actions().mouseMove(await button).perform();
      await button.click();
      await browser.sleep(3000);
      expect(await errormessage.getText()).toEqual('An organization with this name is already connected to your account');
     });
  xit('Delete the organiser which not associated with any expense', async function () {
   
      const Organiserslist=element(by.css('div[class="page-content ng-star-inserted"]')).all(by.tagName('mat-card'));
      const RemoveButton=Organiserslist.all(by.buttonText('Remove'));
      const OrganiserName=Organiserslist.all(by.tagName('span')).get(1);

      await OrganiserName.isPresent();
      const name=OrganiserName.getText();
     // expect(await name).toEqual('');
      //console.log('OrganiserName Exists'+ name);
      
     
     /*   Organiserslist.each(element, index => {
          var text =   Organiserslist.get(index).OrganiserName.get(1).getText();
          text.then(function(value){
            if(value == 'newuser'){
              Organiserslist.get(index).element(by.buttonText('Remove')).click();
            }
            else{
              console.log('newuser not exist')
            }
        });   
        
      
      });*/
        
        
     
      await removeButton.get(0).click();
      expect(await confirm_yes_no.get(1).isPresent()).toEqual(true);
      await confirm_yes_no.get(1).click();
      await browser.sleep(1000);
      expect(await errormessage.getText()).toEqual('The Organization has been deleted successfully');

  });

});