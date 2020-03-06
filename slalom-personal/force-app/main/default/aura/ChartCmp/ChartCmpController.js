({	
	ctr : function(cmp, event, helper) {
        var temp = [];
        var temp2 = [];
        var action1 = cmp.get("c.getLineChartMap");
        var action = cmp.get("c.getChartMap");
        action.setCallback(this, function(response){
            if(response.getState() === 'SUCCESS' && response.getReturnValue()){
                temp = response.getReturnValue();
                helper.createGraph(cmp, temp);
            }
        });      
        action1.setCallback(this, function(response){        	    	    
            if(response.getState() === 'SUCCESS' && response.getReturnValue()){
                temp2 = JSON.parse(response.getReturnValue());
                helper.createLineGraph(cmp, temp2);
            }            
        });  
       $A.enqueueAction(action);	
       $A.enqueueAction(action1);
	}
})