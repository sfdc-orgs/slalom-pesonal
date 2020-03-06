/* eslint-disable vars-on-top */
/* eslint-disable no-undef */
/* eslint-disable @lwc/lwc/no-async-operation */
/* eslint-disable no-console */
import { LightningElement, track, wire } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { refreshApex } from "@salesforce/apex";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import getAccounts from "@salesforce/apex/ApexConnectionDemo.getAccounts";

const columns = [
  { label: "Account ID", fieldName: "Id" },
  { label: "Account Name", fieldName: "Name" },
  { label: "Account Website", fieldName: "Website", type: "url" }
];

export default class ApexConnectionDemo extends LightningElement {
  //Logic to create new account
  @track accountId;
  name = "";
  @track data = [];
  dataBkp = [];
  _wiredResult;
  @track columns = columns;
  // Get Existing Account Details
  @wire(getAccounts)
  wiredAccounts(result) {
    console.log("Server Call");
    this._wiredResult = result;
    if (result.data) {
      this.data = result.data;
      this.dataBkp = result.data;
      this.error = undefined;
    } else if (result.error) {
      this.error = result.error;
      this.data = undefined;
    }
  }
  //On change of Account Name remove the Account ID field
  handleNameChange(event) {
    this.accountId = undefined;
    this.name = event.target.value;
  }
  //Logic to create new account
  createAccount() {
    const fields = {};
    fields[NAME_FIELD.fieldApiName] = this.name;
    const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
    createRecord(recordInput)
      .then(account => {
        this.refreshData();
        this.accountId = account.id;
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success",
            message: "Account Created",
            variant: "success"
          })
        );
      })
      .catch(error => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error creating record",
            message: error.body.message,
            variant: "error"
          })
        );
      });
  }
  //Refresh Cache after new acount creation
  refreshData() {
    console.log("Refresh Call to the Cache");
    return refreshApex(this._wiredResult);
  }
  //Account Table filter logic
  handleAccountSearch(event){
    console.log('Trigger Search Event');
    console.log(event.target.value);
    var tempData = [];
    console.log(JSON.stringify(this.dataBkp));
    this.dataBkp.forEach(function(dataElement) {
        console.log('dataElement--'+JSON.stringify(dataElement));
        if(dataElement.Name.toUpperCase().includes(event.target.value.toUpperCase()) || (dataElement.Website!=null && dataElement.Website.toUpperCase().includes(event.target.value.toUpperCase()))){
            console.log('Match Found');
            tempData.push(dataElement);
        }
    });
    console.log(tempData);
    this.data = tempData;
    
  }
}