'use strict';

import { element, error } from "protractor";


export class AccountSettingsObject {
   
    constructor() {

     this. profileicon=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-profile/div/div[2]/div[1]'));  
     this. uploadfile = element(by.id('imageInput'));
     this. imageError =element(by.xpath('/html/body/div[2]/div')).element(by.tagName('span'));
     this. currentpass=element(by.css('input[placeholder="Current Password"]'));
     this. pass=element(by.css('input[autocomplete="new-password"]'))
     this. confPass=element(by.name('confirmPassword'));
     this. changeBtn=element(by.buttonText('Change'));
     this. confpassErr=element(by.id('mat-error-24')).element(by.tagName('span'));
     this. email =element(by.name('email'));
     this. Confemail =element(by.name('confirmedEmail'));
     this.changeImage=element(by.buttonText('Change picture'));
     this.deleteImage=element(by.buttonText('Delete picture'));
     this.passError2= element(by.xpath('//*[@id="passwordForm"]/div[2]/app-input-with-validation-popup/div/mat-form-field/div/div[3]')).element(by.id('email-form-validation-error')).element(by.tagName('span'));
     this.PassError1= element(by.xpath('//*[@id="passwordForm"]/div[1]/app-input-with-validation-popup/div/mat-form-field/div/div[3]')).element(by.id('email-form-validation-error')).element(by.tagName('span'));
     this.PassError= element(by.tagName('app-input-popup-form-validation')).element(by.tagName('span'));
    // this.passError3=element(by.xpath('//*[@id="passwordForm"]/div[2]/app-input-with-validation-popup/div/mat-form-field'))
     this.fa1=element(by.xpath('//*[@id="mat-tab-label-0-1"]'));
     this.emailErrors=element(by.css('div[class="ng-star-inserted"]')).all(by.tagName('span'));


     ///****FA Fields */
     this.tabs = element(by.id('profileSection')).all(by.css('div[role="tab"]'));
     this. successMessage = element(by.css('div[class="cdk-overlay-container"]')).element(by.tagName('span'));
   
     this. firstName = element(by.name('first')); //('registeredFirstNameId'));
     this. lastName = element(by.name('last')); //('registereLastNameId'));
     this. gender_radioButton = element(by.tagName('mat-radio-group')).all(by.tagName('mat-radio-button')); //genderChooseId
     this. street = element(by.name('street')); //('recipientStreetId'));
     this. aptunit = element(by.name('aptunit')); //('recipientAptUnitId'));
     this. city = element(by.name('city')); //('recipientCityId'));
     this. postalCode = element(by.name('postalCode')); //('recipientPostalCodeId'));
     this. province = element(by.name('province')); //('recipientprovinceId'));
     this. language = element(by.name('language')); //('recipientSelectLanguageId'));
     // eslint-disable-next-line quotes
     this. save = element(by.css("button[type ='submit']"));
     this. dropdownOptions = element.all(by.tagName('mat-option'));
     this. phoneType = element(by.id('selectPhoneTypesId')); ////selectPhoneTypesId
     this. phoneNumber1 = element(by.css('[placeholder="Phone Number1"]')); //selectPhoneTypeValueId
     this. relationship = element(by.name('relationshipType')); //relationshipType
     this. email = element(by.name('email'));
     this.requiredError=element.all(by.css('span[class="validation-message"]'));
     this.inviteButton=element(by.css('button[type="submit"]'));
     this.rightArrow=element(by.css('div[class="mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4 mat-ripple mat-tab-header-pagination-disabled"]'));
     this.deletePhone=element(by.css('div[class="d-flex col-sm-2 col-4"]')).all(by.tagName('button'));

    this. child_recp_Autorization = element(by.name('authorization'));
    this. dropdownValues = element.all(by.tagName('mat-option'));
    this. fund_startdate = element(by.name('fromDate'));
    this. fund_enddate = element(by.name('toDate'));
    this. total_budget = element(by.name('budget'));
    this. save = element(by.xpath('//*[@id="FundSettings"]/form/mat-card/mat-card-actions/button'));
    this. ErrorMessage = element(by.tagName('snack-bar-container')).element(by.tagName('span'));
    this. errorpopUpclose=this.ErrorMessage.element(by.tagName('div')).element(by.tagName('button'));
    this. selectFiscalYear = element(by.css('div[class="d-flex justify-content-between align-items-center"]')).element(by.tagName('mat-select'));
    
   
    this. myProfileTab=element(by.id('scrollToProfileSectionId'));
    this.fundSettingsTab=element(by.id('matFundSettingScrollButtonId'));
    this.changeEmailTab=element(by.id('matChangeEmailScrollButtonId'));
    this.changePasswordTab=element(by.id('matChangePasswordScrollButtonId'));

    //**------------------PASSPORT FIELDS */
    this.registeredPassportName=element(by.id('registeredAgencyNameId'));
    this.verifyAndSaveButton=element(by.id('poneUpdateButtonId'));
    this.passportAgency=element(by.name('agency'));
    this.agencyDropdownoptions=element(by.css('div[class="cdk-overlay-pane"]')).all(by.tagName('mat-option'));
    this.passportFund_StartDate=element(by.name('passportStartingDate'));
    this.rateForKm=element(by.name('rate'));
    this.calenderHeaderButtons=element(by.css('[class="mat-calendar-header"]')).all(by.tagName('button'));



   //---------------******************************//
      }
    async uploadImage(){
        await this.profileicon.element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-profile/div/div[2]/div[1]/mat-card/mat-card-content/div/div[1]/div/app-profile-picture/div/div/img')).click();
      }
    
   async profilepic(path){
        await uploadfile.sendKeys(path);
      }

    async ChangePassValidation(){

        browser.actions().mouseMove(await this.currentpass).perform();
        await this.currentpass.sendKeys('     ');
        browser.actions().mouseMove(await this.pass).perform();
        await this.pass.sendKeys('     ');;
        browser.actions().mouseMove(await this.confPass).perform();  
        await this.confPass.sendKeys('     ');; 
      }
   async ChangePass1(curpas,Npass,cnpas){
        browser.actions().mouseMove(await this.currentpass).perform();
        await this.currentpass.clear();
        await this.currentpass.sendKeys(curpas);
        await this.pass.clear()
        await this.pass.sendKeys(Npass);
        await this.confPass.clear();
        await this.confPass.sendKeys(cnpas);
      }
   
    async selectPhoneType(type){
        await element(by.id(type)).click();
     }

     async calenderDates(ro,col){
       const parent=element(by.css('tbody[class="mat-calendar-body"]'));
       const rows=parent.all(by.tagName('tr'));
       const columns=rows.get(ro).all(by.tagName('td'));
       return columns.get(col).click();
     }

   };