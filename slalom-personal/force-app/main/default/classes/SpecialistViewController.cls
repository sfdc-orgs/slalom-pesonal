public with sharing class SpecialistViewController {
    public SpecialistViewController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<SpecilaistViewDiscrepancy> getSpecilaistViewData(Id optyID){
        System.debug('Opportunity ID - '+optyID);

        //Fetch Account Manager Lines 
        Map<String,double> linePriceMap = new Map<String,double>();
        List<OpportunityLineItem> sellerLines = [select Product2Id, TotalPrice from OpportunityLineItem where OpportunityId =: optyID];
        for(OpportunityLineItem sellerLine : sellerLines){
            if(linePriceMap.get(sellerLine.Product2Id)!=null){
                if(sellerLine.TotalPrice!=null){
                    linePriceMap.put(sellerLine.Product2Id,linePriceMap.get(sellerLine.Product2Id) + sellerLine.TotalPrice);
                }
            }else{
                linePriceMap.put(sellerLine.Product2Id,sellerLine.TotalPrice);
            }
        }
        //Fetch Specialist Lines 
        Map<String,double> specilaistLinePriceMap = new Map<String,double>();
        List<Specialist_View__c> specialistLineLst = [select Product__c, Price__c from Specialist_View__c where Opportunity__c = :optyID];
        for(Specialist_View__c specialistLine : specialistLineLst){
            if(specilaistLinePriceMap.get(specialistLine.Product__c)!=null){
                if(specialistLine.Price__c!=null){
                    specilaistLinePriceMap.put(specialistLine.Product__c,specilaistLinePriceMap.get(specialistLine.Product__c) + specialistLine.Price__c);
                }
            }else{
                specilaistLinePriceMap.put(specialistLine.Product__c,specialistLine.Price__c);
            }
        }
        //Calcualte difference of opinion between Account Manager and the Specialist
        return calculateAMSpecilaistDataDiscrepancy(linePriceMap,specilaistLinePriceMap);
    }

    //Compare the AM and Specialist Maps to create SpecilaistViewDiscrepancy List
    public static List<SpecilaistViewDiscrepancy> calculateAMSpecilaistDataDiscrepancy(Map<String,double> amLinesMap, Map<String,double> specilaistLinePriceMap){
        List<SpecilaistViewDiscrepancy> specilaistViewDiscrepancyLst = new List<SpecilaistViewDiscrepancy>();
        Set <String> productIds = new Set<String>();
        productIds = specilaistLinePriceMap.keySet();
        System.debug('Priniting the Specialist Product IDs - ');
        System.debug(productIds);
        return specilaistViewDiscrepancyLst;
    }

    class SpecilaistViewDiscrepancy{
        double sales_price_diff{get;set;}
        date book_date_dicrepancy{get;set;}
    }
}