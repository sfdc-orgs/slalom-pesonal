/* eslint-disable no-console */
import { LightningElement,api,track, wire } from 'lwc';
import getSpecilaistViewData from '@salesforce/apex/SpecialistViewController.getSpecilaistViewData';

const actions = [
    { label: 'Edit', name: 'edit' },
    { label: 'Delete', name: 'delete' },
];

const columns = [
    { label: 'Product', fieldName: 'product' },
    { label: 'Sales Price Discrepancy', fieldName: 'sales_price_diff', type: 'currency'},
    { label: 'Book Date Discrepancy', fieldName: 'book_date_dicrepancy', type: 'date' },
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
];

export default class SpecialistView extends LightningElement {
    @api recordId;

    @track data = [];
    @track columns = columns;

    @wire(getSpecilaistViewData, { optyID: '$recordId' })
    wiredSpecilaistViewData({ error, data }) {
        if (data) {
            console.log('Success');
            console.log(JSON.stringify(data));
            this.data = data;
            this.error = undefined;
        } else if (error) {
            console.log('Failure');
            console.log(data);
            this.error = error;
            this.data = undefined;
        }
    }
}