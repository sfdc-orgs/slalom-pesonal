public class MyController {
    
    public String myString{
        get {
            if(myString==null){
                myString = 'a';
            }
            return myString;
        } private set;
    }
    
    public String getMyString(){
        return 'getMyString';
    }
    
    public String getStringMethod(){
        if(myString == null){
            myString = 'b';
        }
        return myString;
    }

}