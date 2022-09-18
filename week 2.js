var showYear;//sets var showYear for week2 program to use
setInterval (//set interval is a loop that repeats every  half minute thanks to https://www.w3schools.com/jsref/met_win_setinterval.asp
    function(){//this funtion shows date and time as alert
    var today = new Date();
    alert ("The date and time today is "+ today); 
              }, 30000);//It does as well take 30 seconds to start but I wanted to prove that it is looping
