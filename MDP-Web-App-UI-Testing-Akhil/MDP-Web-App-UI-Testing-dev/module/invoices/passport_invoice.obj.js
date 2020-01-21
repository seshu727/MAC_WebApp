import {
    element,
    browser,
    protrator,
    Key
 } from 'protractor';
import { all } from 'q';

 export class passportInvoiceObject {
    constructor() {
      
      
       this.statusListFilter = element(by.id('invoiceFilterSelectItemId'));
       this.searchButton = element(by.id('applyInvoiceFilterId'));
       this.invoicelist=element(by.css('div[class="page-content ng-star-inserted"]')).all(by.tagName('mat-card'));
       this.statusValue=element(by.css('div[class="col-auto my-md-auto my-xl-2"]')).element(by.tagName('div'));
       this.invoiceDetails=element.all(by.css('div[class="col-sm-4 col-6"]')).all(by.tagName('span'));
       this.downloadButton=element(by.buttonText('Download'));
       this.resubmitAndCancel=element(by.css('div[class="col-auto d-flex flex-md-column text-right"]')).all(by.tagName('button'));
       this.yesORnoButtons=element(by.css('mat-dialog-actions[class="mat-dialog-actions"]')).all(by.tagName('button'));
    }
    async searchByStatus(statusType) {
        // await this.statusListFilter.isPresent();
       //  await this.statusListFilter.click();
       //  await element(by.id('Select All')).click();
       //  $('body').sendKeys(protractor.Key.ESCAPE);
         await this.statusListFilter.isPresent();
         await this.statusListFilter.click();
         await element(by.id(statusType)).click();
         await element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
         await element(by.name('toDate')).sendKeys('4/31/2020');
         $('body').sendKeys(protractor.Key.ESCAPE);
         browser.actions().mouseMove(await this.searchButton).perform();
         await this.searchButton.click();
      }
      async download(id){
          await this.invoicelist.get(id).element(by.tagName('button')).click();
      }
      async invoiceStaus(){
       var invoiceList=element(by.css('div[class="page-content ng-star-inserted')).all(by.tagName('mat-card'));

       invoiceList.count().then(function(count){
          console.log('total count ' + count)
        })
        // let count =  workerslist.all(by.tagName('span')).count();
        invoiceList.each((element, index) => { 
          console.log('Index'+index)
         //var text = element(by.css('div[class="col-auto my-md-auto my-xl-2"]')).element(by.tagName('div')).getText();
         //console.log('value'+text)
        // text.then(function(value){
         //  if(value == 'ACTION REQUIRED'){
         //   element(by.css('div[class="page-content ng-star-inserted"]')).all(by.tagName('mat-card')).get(0).click();
            

            
         //  }
       
     //  })
         
         
       })
   }
}
