/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class QuerySelectorExample extends LightningElement {
    renderedCallback() {
        console.log(this.querySelector('div'));
        console.log(this.querySelectorAll('div'));
    }
}