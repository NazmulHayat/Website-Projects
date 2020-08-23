var home1 = document.getElementsByClassName("home");
var uevents1 = document.getElementsByClassName("uevents");
var pevents1 = document.getElementsByClassName("pevents");
var achievements1 = document.getElementsByClassName("achievements");
var expanel1 = document.getElementsByClassName("expanel");
var about1 = document.getElementsByClassName("about");


function display(elems, display){
  for(var i = 0 ; i < elems.length ; i++){
    elems[i].style.display = display;
  }
}

function home(){
    console.log("hi");
    var elems = home1;
    display(elems, 'block');

    elems = uevents1;
    display(elems, 'none');

    elems = pevents1;
    display(elems, 'none');

    elems = achievements1;
    display(elems, 'none');
    
    elems = expanel1;
    display(elems, 'none');
    
    elems = about1;
    display(elems, 'none');
}
function uevents(){
  console.log("uevents");
  var elems = home1;
  display(elems, 'none');

  elems = uevents1;
  display(elems, 'block');

  elems = pevents1;
  display(elems, 'none');

  elems = achievements1;
  display(elems, 'none');
  
  elems = expanel1;
  display(elems, 'none');
  
  elems = about1;
  display(elems, 'none');
}

function pevents(){
  console.log("pevent");
  var elems = home1;
  display(elems, 'none');

  elems = uevents1;
  display(elems, 'none');

  elems = pevents1;
  display(elems, 'block');

  elems = achievements1;
  display(elems, 'none');
  
  elems = expanel1;
  display(elems, 'none');
  
  elems = about1;
  display(elems, 'none');
}

function achievements(){
  console.log("achievements");
  var elems = home1;
  display(elems, 'none');

  elems = uevents1;
  display(elems, 'none');

  elems = pevents1;
  display(elems, 'none');

  elems = achievements1;
  display(elems, 'block');
  
  elems = expanel1;
  display(elems, 'none');
  
  elems = about1;
  display(elems, 'none');
}

function expanel(){
  console.log("expanel");
  var elems = home1;
  display(elems, 'none');

  elems = uevents1;
  display(elems, 'none');

  elems = pevents1;
  display(elems, 'none');

  elems = achievements1;
  display(elems, 'none');
  
  elems = expanel1;
  display(elems, 'block');
  
  elems = about1;
  display(elems, 'none');
}

function about(){
  console.log("hello");
  var elems = home1;
  display(elems, 'none');

  elems = uevents1;
  display(elems, 'none');

  elems = pevents1;
  display(elems, 'none');

  elems = achievements1;
  display(elems, 'none');
  
  elems = expanel1;
  display(elems, 'none');
  
  elems = about1;
  display(elems, 'block');
}
    