var showYear;//sets var showYear for week2 program to use
setInterval (//set interval is a loop that repeats every minute thanks to https://www.w3schools.com/jsref/met_win_setinterval.asp
    function(){//this funtion shows date and time as alert
    var today = new Date();
    alert ("The date and time today is "+ today);
              }, 60000);
