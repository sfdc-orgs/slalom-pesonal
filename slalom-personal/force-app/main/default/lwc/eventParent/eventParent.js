import { LightningElement,track } from 'lwc';

export default class EventParent extends LightningElement {
    @track pagenumber = 1;
    
    handlePrevious(event){
        if(event.detail!=null && event.detail==='firstPage'){
            this.pagenumber = 1;
        }else{
            if(this.pagenumber>1){
                this.pagenumber-=1;
            }
        }
    }
    handleNext(event){
        if(event.detail!=null && event.detail==='lastPage'){
            this.pagenumber = 10;
        }else{
            this.pagenumber+=1;
        }
    }
}