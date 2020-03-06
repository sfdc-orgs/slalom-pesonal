public class GraphController {
    
    @auraEnabled
    public List<LineChartVar> myLineChartVarList;
    
    public class LineChartVar {
        string label;
        integer firstValue;
        integer secondValue;       
        
        public LineChartVar(string a, integer b, integer c){
            label = a;
            firstValue = b;
            secondValue = c;
        } 
    }
    
    @auraEnabled
    public static Map<string, integer> getChartMap(){
        Map<string, integer> mp = new Map<string, integer>();        
        mp.put('Jan', 45);
        mp.put('Feb', 50);
        mp.put('Mar', 30);
        mp.put('Apr', 36);
        mp.put('May', 42);
        mp.put('Jun', 39);
        mp.put('Jul', 41);
        mp.put('Aug', 36);
        mp.put('Sep', 43);
        mp.put('Oct', 45);
        mp.put('Nov', 33);
        mp.put('Dec', 53);
        
        return mp;
    }
    
    @auraEnabled
    public static string getLineChartMap(){
        List<LineChartVar> myLineChartVarList = new List<LineChartVar>();
        
        myLineChartVarList.add(new LineChartVar('2010', 10, 12));
        myLineChartVarList.add(new LineChartVar('2011', 12, 15));
        myLineChartVarList.add(new LineChartVar('2012', 17, 19));
        myLineChartVarList.add(new LineChartVar('2013', 19, 17));
        myLineChartVarList.add(new LineChartVar('2014', 21, 15));
        myLineChartVarList.add(new LineChartVar('2015', 17, 20));
        myLineChartVarList.add(new LineChartVar('2016', 18, 16));        
        return JSON.Serialize(myLineChartVarList);
    }
}