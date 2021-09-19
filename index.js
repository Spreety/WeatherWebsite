$(document).ready(function(){
  var API_KEY = "d62fee7ba8026b79080a3a653e31979f";

  //get coordinates
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  var lati = position.coords.latitude;
  var long = position.coords.longitude;
    console.log(lati + "," + long);
   
    //pull data from API
         $.getJSON('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?units=default&lat=' + lati + '&lon=' + long + '&APPID=' + API_KEY, function(wd) {
     console.log("got the data ,",wd);
          var weather = wd.name + ", " + wd.sys.country;
          var weatherType = wd.weather[0].description;
     
           //Temperature conversions
          var tempKel = wd.main.temp;
          var tempFar = ((tempKel)*(9/5)-459.67).toFixed(0);
          var tempCel = (tempKel-273).toFixed(0);
          var tempChange=true;
           
       //Icon Image
           var icon = wd.weather[0].icon;
         
    //Calling Functions
   $(".iconImg").attr('src', "http://openweathermap.org/img/w/"+icon+".png");
          
   $("#city").html(weather);
           
   $("#weatherType").html(weatherType);
      
           //switch between Fahrenheit and Celsius     
    

   $('#fahrenheit').html(tempFar + " &#8457;");
           
   $("#fahrenheit").click(function(){
        
        if(tempChange===false){
          $("#fahrenheit").html(tempFar + " &#8457;");
          tempChange=true;
        }
        else{
          $("#fahrenheit").html(tempCel + " &#8451;");
          tempChange=false;
        }
    
      });
       //Backgrounds
    if(wd.weather[0].main == "Thunderstorm") {
      $('body').css('background-image', 'url(https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?auto=format&fit=crop&w=2551&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
    }
           
   else if(wd.weather[0].main == "Drizzle") {
      $('body').css('background-image', 'url(https://images.unsplash.com/photo-1494798132658-27ee988ba44d?auto=format&fit=crop&w=2389&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
    }
     
    else if(wd.weather[0].main == "Rain") {
      $('body').css('background-image', 'url(https://images.unsplash.com/photo-1494798132658-27ee988ba44d?auto=format&fit=crop&w=2389&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
    }
           
    else if(wd.weather[0].main == "Snow") {
      $('body').css('background-image' , 'url(https://images.unsplash.com/photo-1482489603187-f0ae98f407a3?auto=format&fit=crop&w=2500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
    }
    
    else if(wd.weather[0].main == "Fog") {
      $('body').css('background-image' , 'url(https://images.unsplash.com/photo-1432839318976-b5c5785ce43f?auto=format&fit=crop&w=1800&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
    }
     
    else if(wd.weather[0].main == "Clear") {
      $('body').css('background-image' , 'url(https://images.unsplash.com/photo-1415696190853-08bdec0b25d6?auto=format&fit=crop&w=2396&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
    }
           
    else if(wd.weather[0].main == "Clouds") {
      $('body').css('background-image' , 'url(https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=2550&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
    }
           
    else {
      $('body').css('background-image' , 'url(https://images.unsplash.com/photo-1474393881983-cd780bf9f4ad?auto=format&fit=crop&w=2550&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
    }
   });
  });
} 
});