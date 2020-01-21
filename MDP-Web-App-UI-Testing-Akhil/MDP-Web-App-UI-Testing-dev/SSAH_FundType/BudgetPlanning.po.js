var BudgetPlanningPage=function(){

    var InputFields=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-budget/div/div[2]/div[2]'));

    var div=element(by.xpath('/html/body/div[2]'));

    
    this.field1=function(id){
        return InputFields.all(by.tagName('input')).get(id);
    }

    this.Month_yr=function(){
      element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-budget/div/div[2]/div[1]')).element(by.tagName('input')).click();
    }

    this.calend=function(tr,td){
        div.element(by.tagName('table')).all(by.tagName('tr')).get(tr).all(by.tagName('td')).get(td).click();
    }

    this.Save=function(){
        return element(by.buttonText('Save'));
    }
    this.Save_Copy=function(){
        element(by.buttonText('Save and copy to other months')).click();
    }

    this.Save_Copy_PopUp=function(ID,check){
        div.element(by.xpath('//*[@id="mat-dialog-0"]/app-budget-copy-modal/mat-dialog-content/div[2]')).all(by.tagName('div')).get(ID).all(by.tagName('mat-checkbox')).get(check).click();
    }

    this.yearChangeArrow=function(num){
       return div.element(by.tagName('mat-calendar-header')).all(by.tagName('button')).get(num);
    }

    this.Values=function(val){
      return div.element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-budget/div/div[2]/div[2]/app-budget-planning/mat-card/mat-card-content/div')).all(by.tagName('div')).get(0).all(by.tagName('div')).get(val).getText();
    }

};
module.exports=BudgetPlanningPage;