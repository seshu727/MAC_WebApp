'use strict';

import { element } from "protractor";

export class SSAHWorkerObject {
    constructor() {
       
      this.workerTitle=element(by.css('app-page-header[class="page-header"]')).element(by.tagName('h5'));
      this.invitWorkerButton=element(by.css('button[class="mat-raised-button mat-button-base mat-primary"]'));
      this.firstName=element(by.name('first'));
      this.lastName=element(by.name('last'));
      this.email=element(by.name('email'));
      this.SaveAndCancel=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));
      this.errormessage=element(by.css('simple-snack-bar[class="mat-simple-snackbar ng-star-inserted"]')).element(by.tagName('span'));
      this.filterByStatus=element(by.css('mat-select[aria-label="Filter by status"]'));
      this.filterOptions=element.all(by.tagName('mat-option'));
      this.appluButton=element(by.css('button[type="submit"]'));
      this.workersList=element.all(by.css('div[class="mb-3 ng-star-inserted"]'));
      this.workerDetails=element.all(by.css('div[class="col py-2 "]')).all(by.tagName('span'));
      this.deleteAndDeactiveBtn=element(by.css('div[class="mat-menu-content"]')).all(by.tagName('button'));
      this.deleteConfirmation=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));
    }
    
    async delete(id){
      await this.workersList.get(id).element(by.css('div[class="col-auto my-auto"]')).element(by.tagName('button')).click();
    }


  /*   async workerStatus(li1,li2){
       await this.workerslist.get(li1).all(by.tagName('div')).get(li2).all(by.tagName('span')).get(1);
    }
  /*  async ActiveStaus(){
       // let count =  workerslist.all(by.tagName('span')).count();
       workerslist.each(((element, index) => {
        var text =  await workerslist.get(index).all(by.tagName('div')).get(5).all(by.tagName('span')).get(1).getText();
        text.then(function(value){
          if(value == 'Active'){
           await workerslist.get(index).element(by.tagName('button')).click();
          }
      
      })
        
        
      })) 
       

    }*/

  //  this.deleteWorkerConformation=(btn)=>{
      //  return element(by.tagName('mat-dialog-actions')).all(by.tagName('button')).get(btn);
    }
    
     


