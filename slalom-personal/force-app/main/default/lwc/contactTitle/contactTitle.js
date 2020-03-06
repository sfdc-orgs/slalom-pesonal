/* eslint-disable no-console */
import { LightningElement,api,track } from 'lwc';

export default class ContactTitle extends LightningElement {
    @api message;
    @api contact;
    @track titleLength = 0;
    @api calculateTitleLength(){
        if(this.contact!=null){
            this.titleLength = this.contact.Title.length;
        }
    }
    handleSlotChange(){
        console.log('Slot Content Updated!');
    }
}