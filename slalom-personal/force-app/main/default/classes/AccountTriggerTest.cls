@isTest
public class AccountTriggerTest {
    
    @isTest static void accountOptyTest(){
        List<Account> acts = new List<Account>();
        for(integer i=0;i<200;i++){
            Account act = new Account();
            act.Name = 'Dummy-'+i;
            act.BillingState = 'CA';
            acts.add(act);
        }
        insert acts;
        List<Opportunity> opties = [select id from Opportunity where accountId in : acts];
        System.assertEquals(200, acts.size()); 
        System.assertEquals(200, opties.size()); 
    }
}