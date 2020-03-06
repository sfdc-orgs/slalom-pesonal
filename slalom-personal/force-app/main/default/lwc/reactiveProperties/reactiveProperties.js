import { LightningElement,track } from 'lwc';

export default class ReactiveProperties extends LightningElement {
    @track arr = {
        x:'',
        y:''
    };
    initializeVariables(){
        this.arr.x = 5;
        this.arr.y=10;
    }
    updateVariables(){
        this.arr.x = 50;
        this.arr.y=100;
    }
}