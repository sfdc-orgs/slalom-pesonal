import { LightningElement,api,track } from 'lwc';

export default class UIBinding extends LightningElement {
    //Public Variables
    @api greetigs = 'Welcome to Slalom LLC!';
    //Private Variable
    announcements = 'I\'m coding web components.';
    firstname = 'Robin';
    lastname = 'Hood';
    //Dynamic Private Variable 
    @track inputText = '';
    @track isDisplayText = false;
    //Defining Array
    contacts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            Title: 'COO',
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            Title: 'CTO',
        },
        {
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
    //Input Box Change Handler
    handleInputTextChange(event){
        this.inputText = event.target.value;
        if(this.inputText.length>0){
            this.isDisplayText = true;
        }else{
            this.isDisplayText = false;
        }
        
    }
    //Get method to retrieve username
    get username(){
        const username = this.firstname +' '+ this.lastname;
        return username.trim().toUpperCase();
    }

}