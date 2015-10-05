(function (){ 

  var clockFun = function(){
    //set variables
    var curTime = new Date();
    var hours   = curTime.getHours();
    var minutes = curTime.getMinutes();
    var seconds = curTime.getSeconds();

    // variable for hex code
    var curColor = ('#'+hours+minutes+seconds); 
    //formatting variables for clock
    hours = (hours < 10 ? '0': '') + hours ;
    minutes = (minutes < 10 ? '0': '') + minutes;
    seconds = (seconds < 10 ? '0': '') + seconds;
    //on da page
    $('#clock').html('#'+ hours + minutes + seconds);
    

        /////// function for regular clock////////
    // $('#clock').html(hours + ':' + minutes + ':' + seconds);
    

        //////// function for hex color clock/////////
    $('#color').css('background-color' , curColor);

  };
  //updater
  setInterval(clockFun, 250)


}());

