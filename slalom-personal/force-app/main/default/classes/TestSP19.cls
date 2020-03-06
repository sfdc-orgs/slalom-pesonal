@isTest(SeeAllData=false)
public class TestSP19 {
    
    @isTest(SeeAllData=true)
    public static void  getAccounts(){
        List<Account> acts = Database.query('select id from account');
        for(Account act : acts){}
        system.debug(acts);
    }

}