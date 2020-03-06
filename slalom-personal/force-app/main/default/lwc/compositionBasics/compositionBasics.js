import { LightningElement,track } from 'lwc';

export default class CompositionBasics extends LightningElement {
    @track startMessage='Contact Information Start';
    endMessage='Contact Information End';
    contact = {
        Name: 'Amy Taylor',
        Title: 'VP of Engineering',
        Picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg',
    };
    calculateTitleLength(){
        this.template.querySelector('c-contact-Title').calculateTitleLength();
    }
    changeSlotContent(){
        this.startMessage="Contact Inormation Start - Change";
    }
}