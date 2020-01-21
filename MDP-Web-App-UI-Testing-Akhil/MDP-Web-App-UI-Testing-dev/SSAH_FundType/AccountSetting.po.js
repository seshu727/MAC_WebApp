var AccountSettingsPage=function(){

    var profileicon=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-profile/div/div[2]/div[1]'));
    
   var uploadfile=element(by.xpath('//*[@id="imageInput"]')); 

   var imageError =element(by.xpath('/html/body/div[2]/div')).element(by.tagName('span'));

    var list1= element(by.tagName('mat-list')).all(by.tagName('mat-list-item'));
  
    //**change password section ***/
     var currentpass=element(by.id('mat-input-3'));
     var pass=element(by.id('mat-input-4'));
     var confPass=element(by.name('confirmPassword'));
     var changeBtn=element(by.buttonText('Change'));
     var RequErr=element(by.id('mat-error-24')).element(by.tagName('span'));

     //****Change email section** */
     var email =element(by.name('email'));
     var Confemail =element(by.name('confirmedEmail'));
     


   //---------------******************************//


    this.uploadImage=function(){
        profileicon.element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-profile/div/div[2]/div[1]/mat-card/mat-card-content/div/div[1]/div/app-profile-picture/div/div/img')).click();
    }
    
    this.profilepic=function(path){
        uploadfile.sendKeys(path);
    }

    this.changeImage=function(){
        return element(by.buttonText('Change picture'));

    }

    this.deleteImage=function(){
        return element(by.buttonText('Delete picture'));
    }
    this.errorImg=function(){
        return imageError.getText();
    }
    this.chnagePassBtn=function(ID){
        list1.get(ID).click();
    }
    this.ChangePassValidation=function(){
        browser.sleep(1000);
        browser.actions().mouseMove(currentpass).click().perform();
        browser.sleep(1000);
        browser.actions().mouseMove(pass).click().perform();
        browser.sleep(1000);
        browser.actions().mouseMove(confPass).click().perform();   
    }
    this.ChangePass1=function(curpas,Npass,cnpas){
        browser.actions().mouseMove(currentpass).perform();
        currentpass.sendKeys(curpas);
        pass.sendKeys(Npass);
        confPass.sendKeys(cnpas);
    }
    this.confpassErr=function(){
        return RequErr.getText();
    }
    this.changebutton=function(){
        return changeBtn;
    }

    this.PassError=function(){
         return element(by.xpath('//*[@id="passwordForm"]/div[2]/app-input-with-validation-popup/div/mat-form-field/div/div[3]')).element(by.tagName('mat-error')).getText();
    }
    this.PassError1=function(){
        return element(by.xpath('//*[@id="passwordForm"]/div[1]/app-input-with-validation-popup/div/mat-form-field/div/div[3]')).element(by.tagName('mat-error')).getText();
    }
    this.PassError2=function(){
        return element(by.id('mat-error-58')).element(by.tagName('span')).getText();
    }

    this.ChnageEmail=function(){
        browser.sleep(1000);
        browser.actions().mouseMove(email).click().perform();
        browser.sleep(1000);
        browser.actions().mouseMove(Confemail).click().perform();
        browser.sleep(1000);
    }

};
module.exports=AccountSettingsPage;