var chart;


var data = [-0.03, 0.01, 0.00,  -0.01, 0.03, -0.01, -0.18 , 0.00,  -0.10 , 0.00,  -0.04, -0.01 ];

 var categories = [
 "Food"
 , "Alcohol"
 , "Clothing"
 , "Housing"
 , "Furniture"
 , "Health"
 , "Transport"
 , "Communication"
 , "Recreation"
 , "Education"
 , "Restaurant"
 , "Miscellaneous"
 ];



/*
Food and non-alcoholic beverages  -0.03 
Alcohol and tobacco 0.01  
Clothing and footwear 0.00  
Housing and household services  -0.01 
Furniture and household goods 0.03  
Health  -0.01 
Transport -0.18 
Communication 0.00  
Recreation and culture  -0.10 
Education 0.00  
Restaurants and hotels  -0.04 
Miscellaneous goods and services  -0.01 


*/


  function initChart(){

    Highcharts.setOptions(options);

    // update the chart with the generated categories
    //options.xAxis.categories = categories;
    options.chart.type = 'bar';
    options.chart.renderTo = 'chart';
    options.title = {
      text: 'Figure B: Contribution to 12 months growth rate, September 2014'
    };

    options.subtitle = {
        text: 'Source: Index Numbers of Producer Prices (PPI): Provision of Price Information'
    };


    options.yAxis.title = {
        text: 'Per cent'
    }

    options.series = [
                        {
                            name: 'Contribution',
    data: data,
                            symbol: 'none'
                        }
                      ];
    

      options.xAxis = {
        tickmarkPlacement : 'between',
      alternateGridColor: '#f1f1f1',
        categories: categories,
        reversed: true,
        labels: {
            /*
            formatter: function() {
              console.log(this);
                  if (this.value === null) {
                    return '<span style="fill: #ddd;">' + this.value + '</span>';
                  } else {
                     return this.value;
                  }
              }
              */
        } 

    };
    options.yAxis = {
        title: {
            text: null
        },
        labels: {
          format : '{value} %'
        }
        ,
        min: -.2,
        max: .05 ,
        gridZIndex:4,
        gridLineColor:'#F9F9F9'  ,
        plotLines: [{
                color: '#ccc',
                width: 1,
                value: 0,
                zIndex:4
            }], 
    };
    options.tooltip ={
            /*crosshairs: true*/
        };

    options.plotOptions = {
        series: {
               
        },
        bar: {
          /*borderColor: '#0084D1',
          borderWidth: 1,*/
          dataLabels: {
              enabled: true,
              formatter: function() {
                  if (this.y===null) {
                      return '<i>N/A</i>';
                  } else if (this.y=== 0) {
                      return '<i>0.0%</i>';
                  } else {
                      return '';
                  }
              }
          }
      }
    };




 
  chart = new Highcharts.Chart(options);

}




$(document).ready(function(){

  console.log(options);

  initChart();

});



