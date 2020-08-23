var yes;
localStorage.setItem("register", "0");

console.log(localStorage.getItem("user"));

if(localStorage.getItem("user") == "Sign In" || localStorage.getItem("user") == null)
{
  window.location.replace("login.html");
}
function setup()
{
  var t = localStorage.getItem("user");
  if(t==null)
    {
      localStorage.setItem("user", "Sign In");
      t = localStorage.getItem("user");
    }
  if(t == "Sign In")
    {
      document.getElementById("logout").style.display = "none";
      document.getElementById("signup").style.display = "block";
      document.getElementById("signup").innerHTML = "Sign up";
    }
  else{
    document.getElementById("logout").style.display = "block";
    document.getElementById("logout").innerHTML = "Log out"
    document.getElementById("signup").style.display = "none";
  }
  yes = localStorage.getItem("flag");
  if(yes == "true"){
    document.getElementById('login').onclick = '';
    document.getElementById("login").innerHTML = localStorage.getItem("user");
  }
}
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}
require('dotenv').config();
console.log(process.env);
var firebase = process.env.FIREBASECONFIG;

console.log(process.env);

const fire = firebase.initializeApp(firebaseConfig);
//hello
var database;

database = fire.database();

var ref = database.ref('text');

function go() {
//  document.getElementsByClassName("w3-button w3-black").style.display = "block";
    var inpt = document.getElementById("txt").value;
    if(document.getElementById("login").innerHTML != "Sign In"){
      var data = {
          user : document.getElementById("login").innerHTML,
          initials: inpt
      }
      ref.push(data);
      document.getElementById("txt").value='';
      alert("Successfully added to the Diary");
    }
    else
      alert("To add to your Diary Login first");
}
var x = document.getElementsByClassName("w3-button w3-black");
var temp = null;

function gotData(data){
    //console.log(data.val());
    var text = data.val();
    var s = "";
    var keys  = Object.keys(text);
    for(var i = 0 ; i < keys.length ; i++)
    {
        var k = keys[i];
        if(text[k].user == document.getElementById("login").innerHTML){
          var txt = text[k].initials;
          s+=txt;
          s+='\n\n'
        }
    }
    document.getElementById("txt").value = s;
    if(s=="")
      document.getElementById("txt").value = "Nothing to Show!";
}
function errData(data){
    document.getElementById("txt").value = "Nothing to show!";

}
var c=0;
function read(){
  window.c++;

  if(window.c==1)
    {
      temp = document.getElementById("txt").value;
    }
  console.log(temp);
  if(document.getElementById("login").innerHTML != "Sign In")
    ref.on('value', gotData, errData);

  else
    alert("To read your Diary Login first");

  document.getElementById("txt").readOnly = true;
  var elems = document.getElementsByClassName('w3-button w3-black');
    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = 'none';
    }

}

function fkwrite(){
  var elems = document.getElementsByClassName('w3-button w3-black');
    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = 'block';
    }

  document.getElementById("txt").readOnly = false;
  if(window.c==0)
    temp = document.getElementById("txt").value;
  if(temp!=null)
    document.getElementById("txt").value = temp;
  window.c = 0;
}
function loginhome(){
  localStorage.setItem("user", "Sign In");
  window.location.replace("login.html");
}

function logouthome(){
  //window.location.replace("")
  localStorage.clear();
  document.getElementById("login").innerHTML = "Sign In";
  localStorage.setItem("user", "Sign In");
  document.getElementById("logout").style.display = "none";
  document.getElementById("signup").style.display = "block";
  localStorage.setItem("flag", "false");
  document.getElementById("login").onclick = loginhome;
  window.location.replace("login.html");
}

function signup(){
  localStorage.setItem("register", "1");
  window.location.replace("login.html");
}

function facebook(){
  window.location.replace("https://www.facebook.com/nazmul.hayat.7796/");
}
function insta(){
  window.location.replace("https://www.instagram.com/_nazmul_07/");
}
