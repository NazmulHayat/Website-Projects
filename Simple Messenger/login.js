var firebaseConfig = {
    apiKey: "AIzaSyBdTdtpoS7DAWA6tIKxHiST6W2rS-N2CCA",
    authDomain: "gorib-er-messenger.firebaseapp.com",
    databaseURL: "https://gorib-er-messenger.firebaseio.com",
    projectId: "gorib-er-messenger",
    storageBucket: "gorib-er-messenger.appspot.com",
    messagingSenderId: "759687811817",
    appId: "1:759687811817:web:0261e2a8a46049cf1b5678",
    measurementId: "G-76RLEHKC58"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  
  // Your web app's fire configuration
  if(localStorage.getItem("register") == 1){
    console.log("hi123123");
      elems = document.getElementsByClassName("main2-div");
      for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'block';
        }
      elems = document.getElementsByClassName("back");
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'block';
      }
      elems = document.getElementsByClassName("reg");
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'none';
          }
  }
  else{
    elems = document.getElementsByClassName("main2-div");
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
      }
    elems = document.getElementsByClassName("back");
      for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'none';
    }
    elems = document.getElementsByClassName("main-div");
      for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'none';
    }
  }
  var em,ps,nam;
  function setup(){
  fire.auth().onAuthStateChanged(function(user) {
    console.log("hi");
    if (user && (em!=null && ps!=null && em!="" && ps!="") ) {
      // User is signed in.
      console.log("fuck");
      nam = em;
      nam = nam.substring(0, nam.length - 10);
      console.log(nam);
      document.getElementById("user_div").style.display = "block";
      document.getElementById("aunti").innerHTML = "Welcome " + nam;
      document.getElementById("login_div").style.display = "none";
      document.getElementById("yoo").style.display = "block";
      var elems = document.getElementsByClassName("main2-div");
      for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'none';
        }
      elems = document.getElementsByClassName("back");
       for (var i=0;i<elems.length;i+=1){
           elems[i].style.display = 'none';
         }
      elems = document.getElementsByClassName("reg");
         for (var i=0;i<elems.length;i+=1){
             elems[i].style.display = 'none';
           }
      localStorage.setItem("user", nam);
      localStorage.setItem("flag", "true");
      }
   else {
     if(localStorage.getItem("register") == 1){
       console.log("hi123123");
         elems = document.getElementsByClassName("main2-div");
         for (var i=0;i<elems.length;i+=1){
             elems[i].style.display = 'block';
           }
         elems = document.getElementsByClassName("back");
           for (var i=0;i<elems.length;i+=1){
               elems[i].style.display = 'block';
         }
         elems = document.getElementsByClassName("reg");
           for (var i=0;i<elems.length;i+=1){
               elems[i].style.display = 'none';
             }
     }
        else{
        var elems = document.getElementsByClassName("reg");
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'block';
            }
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
        document.getElementById("yoo").style.display = "none";
        console.log("123123");
      }
    }
  });
}
  
  function login(){
    em = document.getElementById("email_field").value;
    ps = document.getElementById("password_field").value;
    console.log("gi");
    fire.auth().signInWithEmailAndPassword(em, ps).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
    });
  }
  
  function logout(){
    var elems = document.getElementsByClassName("reg");
     for (var i=0;i<elems.length;i+=1){
         elems[i].style.display = 'block';
       }
    fire.auth().signOut();
  }
  
  function main_page(){
    window.location.replace("index.html");
  }
  
  function reg(){
    var elems = document.getElementsByClassName('main-div');
      for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
      }
    elems = document.getElementsByClassName('bt');
        for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'none';
        }
      elems = document.getElementsByClassName("main2-div");
      for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'block';
        }
      elems = document.getElementsByClassName("back");
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'block';
          }
  }
  
  function back(){
    localStorage.setItem("register", "0");
    document.getElementById("login_div").style.display = "block";
    var elems = document.getElementsByClassName('bt');
      for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';
      }
    elems = document.getElementsByClassName("main2-div");
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
      }
    elems = document.getElementsByClassName("back");
      for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'none';
        }
  }
  function register(){
    nam = document.getElementById("user_field").value;
    em = document.getElementById("email2_field").value;
    ps = document.getElementById("password2_field").value;
    firebase.auth().createUserWithEmailAndPassword(em, ps).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error : " + errorMessage);
    });
  
  }
  