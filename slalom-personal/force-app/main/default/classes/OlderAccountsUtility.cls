//Utility Class 
public with sharing class OlderAccountsUtility {
    public OlderAccountsUtility() {

    }

    public static void updateOlderAccounts(){
        Account[] oldAccounts = [select id, description from Account order by createddate asc limit 5];
        for(Account acct:oldAccounts){
            acct.Description = 'Heritage Account';
        }
        update oldAccounts;
    }
}