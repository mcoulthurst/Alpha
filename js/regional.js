var regional = (function () {

  // create a central model for the data
  // store each area based onthe ONS ID
  // eg { "" }
  var model = {};

  $(document).ready(function() {
    console.log("Regional ready!");
    areas.loadData(parseAreas);

    initialise();
    addListeners();

    $('.selectpicker').selectpicker('render');


  });












  function initialise(){
    $('#loader').modal('show');
    // init charts

    // init chart options and then load individual charts
    setOptions();

    populationPyramid();
    stackedBar();
    initTrend();

    
    regional_chart.initGenderChart();
    regional_chart.initAgeChart();


  }


  function parseAreas(data){
    model = data;
    console.log (model);
    loadPopData();
  }


  function addListeners(){
    $("#region").change(function(e) {
      return areas.getRegion(1); 
    });
    $("#county").change(function(e) {
      return areas.getCounty(1); 
    });
    $("#district").change(function(e) {
      return areas.getDistrict(1); 
    });

    $("#region2").change(function(e) {
      return areas.getRegion(2); 
    });
    $("#county2").change(function(e) {
      return areas.getCounty(2); 
    });
    $("#district2").change(function(e) {
      return areas.getDistrict(2); 
    });

    $("#search").click( function(evt){
      evt.preventDefault();
      testPostCode();
    })
  }


})();