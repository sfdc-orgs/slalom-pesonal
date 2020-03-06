/* eslint-disable no-alert */
/* eslint-disable no-console */
import { LightningElement, track } from "lwc";

export default class Owner extends LightningElement {
  @track message = "abc";
 /* renderedCallback() {
    console.log("Im in rendered call back!");
    this.template
      .querySelector("c-ownerchild")
      .addEventListener("click", this.handleClick);
  }
  handleClick() {
    alert('Button Clicked!');
  }
  */
}