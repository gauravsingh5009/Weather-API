const apiKey = "7d9d74f305462339c41e1c3ab9207011";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const clickBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp  + "°C";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed  + " km/h";
    document.querySelector(".weather-description").innerHTML = data.weather[0].main;
    document.querySelector(".feels_like").innerHTML = data.main.feels_like +"°C" + " Feels like";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " mb";
    document.querySelector(".visibility").innerHTML = data.visibility/1000 + " km";
    document.querySelector(".temp_max").innerHTML = data.main.temp_max + "°C"
    document.querySelector(".temp_min").innerHTML = data.main.temp_min + "°C"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
}
clickBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

function showDate(){
    let date = new Date();
    document.querySelector(".date").innerHTML = date.toLocaleString();
}
showDate();

//"<img src={https://openweathermap.org/img/wn/${user.weather[0].icon}@2x.png} alt="icon"/>"
