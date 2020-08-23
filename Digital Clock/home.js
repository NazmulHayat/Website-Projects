function replace(x, y){
  x = y;
  document.write(x)
}


function updateClock(){

  var d = new Date();
  var date = d.getDate();
  var cur_hour = d.getHours();
  var cur_min = d.getMinutes();
  var cur_sec = d.getSeconds();
  var current_time = (cur_hour) + " : "  + (cur_min) + " : " + (cur_sec);
  document.getElementById("timer").innerHTML = current_time;
  setTimeout(updateClock, 1000);

}
updateClock();
