public class TestController {
    
    public List<Account> getAccounts(){
        //Apexpages.StandardSetController controller = new Apexpages.StandardSetController(database.getQueryLocator('select id from account'));
        //Apexpages.standardsetcontroller controller = new apexpages.standardsetcontroller (database.query('select id from account'));
        Apexpages.standardsetcontroller controller = new apexpages.standardsetcontroller (database.getquerylocator([select id from account]));
        return controller.getRecords();
    }

}