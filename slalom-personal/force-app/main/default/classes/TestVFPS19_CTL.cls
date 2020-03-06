public class TestVFPS19_CTL {

    static List<Contact> contacts;
    
    public TestVFPS19_CTL(ApexPages.StandardController stdSetController){
        Account a = (Account) stdSetController.getRecord();
        contacts = a.Contacts;
    }
    
}