function Enter(){
    var input  = document.getElementById('inpval').value;
    console.log(input);
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+input+'&units=metric&APPID=cb17d707e9f4142d12207ec07c1239a6';
    console.log("hello");
    fetch(url)
      .then(response => {

        return response.json();
      })
      .then(data => {
          console.log(data);
          document.getElementById('temp').innerHTML = "Temperature: "+ Math.floor(data.main.temp)+"°C";
          document.getElementById('feels_like').innerHTML = "Feels_like: " + Math.floor(data.main.feels_like)+"°C";
          document.getElementById('pressure').innerHTML = "Pressure: "+data.main.pressure+" mb";
          document.getElementById('humidity').innerHTML = "Humidity: "+data.main.humidity+"%";
          document.getElementById('description').innerHTML = "Description: "+data['weather'][0]['description'];
    }).catch((message) => {
      document.getElementById('temp').innerHTML = "";
      document.getElementById('feels_like').innerHTML = "";
      document.getElementById('pressure').innerHTML = "";
      document.getElementById('humidity').innerHTML = "";
      document.getElementById('description').innerHTML = "";
      document.getElementById('temp').innerHTML = "No city found" + "<br>" + "named "+input;
    })
}
