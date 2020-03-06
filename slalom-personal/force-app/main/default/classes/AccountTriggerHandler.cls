public with sharing class AccountTriggerHandler {
    
    public static void CreateNewOpportunity(List<Account> acts){
        List<Account> actsInt = [select id,name,owner.name from Account where id in : acts];
        List<Opportunity> opties = new List<Opportunity>();
        for(Account act : actsInt){
            Opportunity opty = new Opportunity();
            opty.Name = act.name + '-' + act.owner.name + '-' + date.today().format();
            opty.StageName = 'Prospecting';
            opty.CloseDate = date.today();
            opty.AccountId = act.id;
            opties.add(opty);
        }
        if(opties.size()>0){
            insert opties; 
        }
    }
    
    public static void CreateAccounts(List<Account> acts){
        for(Account act : acts){
            act.ShippingState = act.BillingState;
        }
    }
}