var ManageWorkerPage=function(){

    //**----List of Support workers */

    var workerslist=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-workers/div/div[2]/div[2]')).all(by.tagName('mat-card'));
  //var workerslist=element.all(by.css('.page-content ng-star-inserted')).all(by.tagName('mat-card'));
    
    


    this.InviteWorkerBtn= function(){
        return this.InviteWorkerBtn=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-workers/div/div[2]/div[2]')).element(by.tagName('button'));
    }

    this.CancelBtn= function(){
        return element(by.buttonText('Cancel'));
    }
     
    this.FirstName= function(){
        return element(by.name('first'));
    }

    this.lastName= function(){
        return element(by.name('last'));
    }

    this.email= function(){
        return  element(by.name('email'));
    }

    this.InviteBtn= function(){
        return element(by.buttonText('Invite'));
    }

    this.ValidationError=  function(){
        return  element(by.xpath('/html/body/div[3]/div[3]')).element(by.tagName('span')).getText();
    }
    this.ValidationError1= function(){
        return  element(by.xpath('/html/body/div[2]')).element(by.tagName('span')).getText();
    }

    this.deleteWorker= function(li){
       workerslist.get(li).element(by.tagName('button')).click();
    }

    this.delete=()=>{
        return element(by.buttonText('Delete'));
    }

    this.workerStatus=(li1,li2)=>{
    return workerslist.get(li1).all(by.tagName('div')).get(li2).all(by.tagName('span')).get(1).getText();
    }
    this.ActiveStaus=function(){
       // let count =  workerslist.all(by.tagName('span')).count();
      workerslist.each(((element, index) => {
        var text =  workerslist.get(index).all(by.tagName('div')).get(5).all(by.tagName('span')).get(1).getText();
      text.then(function(value){
          if(value == 'Active'){
            workerslist.get(index).element(by.tagName('button')).click();
          }
      
      })
        
        
      }))
       

    }

    this.deleteWorkerConformation=(btn)=>{
        return element(by.tagName('mat-dialog-actions')).all(by.tagName('button')).get(btn);
    }
    
     

};
module.exports=ManageWorkerPage;