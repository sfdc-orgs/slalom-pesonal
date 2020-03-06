import { LightningElement,api} from 'lwc';

export default class QuickUpdateContact extends LightningElement {
    @api recordId;
    @api objectApiName;

    handleReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
}