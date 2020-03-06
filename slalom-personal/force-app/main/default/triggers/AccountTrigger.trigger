trigger AccountTrigger on Account (before insert, before update, before
    delete, after insert, after update, after delete,  after undelete) {
    
    //Create New Opportunity when an Account is created
    if (Trigger.isAfter && Trigger.isInsert) {
        AccountTriggerHandler.CreateNewOpportunity(Trigger.New);
    }
    
    //Update Billing and Shipping State Info.
    if(Trigger.isBefore && Trigger.isInsert){
        AccountTriggerHandler.CreateAccounts(Trigger.New);
    }
}