({
	createGraph : function(cmp, temp) {
        
        var dataMap = {"chartLabels": Object.keys(temp),
                       "chartData": Object.values(temp)
                       };
        
        var el = cmp.find('barChart').getElement();
        var ctx = el.getContext('2d');
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dataMap.chartLabels,
                datasets: [
                    {
                        label: "Payments History",
                        backgroundColor: "rgba(153,255,51,0.5)",
                        data: dataMap.chartData
                    }
                ]
            }
        });
	},
    createLineGraph : function(cmp, temp) {
        
        var label = [];
        var firstValue = [];
        var secondValue = [];
        
        for(var a=0; a< temp.length; a++){
            console.debug(temp[a]["label"]);
            label.push(temp[a]["label"]);
            firstValue.push(temp[a]["firstValue"]);
            secondValue.push(temp[a]["secondValue"]);                     
        }    
        var el = cmp.find('lineChart').getElement();
        var ctx = el.getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                    labels: label,
                    datasets: [{
                      label: 'USD Sent',
                      data: firstValue,
                      backgroundColor: "rgba(153,255,51,0.4)"
                    }, {
                      label: 'USD Recieved',
                      data: secondValue,
                      backgroundColor: "rgba(255,153,0,0.4)"
                    }]
                  }
        });
        
	}
    
})