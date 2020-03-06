public with sharing class ApexConnectionDemo {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        System.debug('Im in get accounts!');
         return [select id,name,website from Account order by name asc limit 100];
    }
}