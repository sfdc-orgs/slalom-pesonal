public class AccountUtils {
    
    public static List<Account> accountsByState(String state){
        return [select id,name from account where BillingState = :state];
    }

}