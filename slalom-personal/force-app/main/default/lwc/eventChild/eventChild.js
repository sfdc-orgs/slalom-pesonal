import { LightningElement } from 'lwc';

export default class EventChild extends LightningElement {
    handleFirst(){
        this.dispatchEvent(new CustomEvent('previous',{ detail: 'firstPage' }));
    }
    handlePrevious(){
        this.dispatchEvent(new CustomEvent('previous'));
    }
    handleNext(){
        this.dispatchEvent(new CustomEvent('next'));
    }
    handleLast(){
        this.dispatchEvent(new CustomEvent('next',{ detail: 'lastPage' }));
    }
}