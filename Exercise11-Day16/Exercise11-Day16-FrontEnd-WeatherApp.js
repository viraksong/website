//Using async/await
async function getWeather(){
    
    //talk to remote service
    //get the data
    //get the data
    //send it to another function that can work on data and display
    try{
        let city = document.getElementById("zipcode").value;
        let key = "93f26e3c57081a6210de53b8dcfdfea4";
        // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        
        let response = await fetch(url);
        let weather = await response.json() ;
        displayData(weather);
    }catch{
        console.log("something went wrong");
    }
}

function displayData(weather){
    
    console.log(weather);
    let grndLevel =weather.main.grnd_level;
    let humitidty = weather.main.humidity;
    let pressure =weather.main.pressure;
    let seaLevel =weather.main.sea_level;
    let tem =weather.main.temp;
    let mintemp=weather.main.temp_max;
    let maxtemp=weather.main.temp_min;

    let cityname=weather.name;
    let country =weather.sys.country;

    let visibility =weather.visibility;
    let description=weather.weather[0].description;
    let icon=weather.weather[0].icon;
    let imgurl ='https://openweathermap.org/img/wn/' + icon +".png";
    let wicon =`<img src="${imgurl}" alt="icon here."/>`;
    let windSpeed= weather.wind.speed;
    let myDiv = document.getElementById("w");
    myDiv.innerHTML =
     `  <p class="h3"> ${cityname}, ${country}</p> 
        <p class="display-4">${wicon} ${tem}F  </p> 
        <p class="h5">${description} min:${mintemp}F max:${maxtemp}F  </p> 
        <p> visibility:${visibility/1000}km win Speed:${windSpeed} <br>
        Humitidty${humitidty} Pressure:${pressure} <br>
        Ground Level${grndLevel} SeaLevel:${seaLevel}
        </p>    
     `;  
}